import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// D2's rule: "After this week you can..." is knowledge, not activity — the
// Lobby Lab's spec records what a student *did* in the room, the lecture's
// outcomes record what they can now judge, name or predict. Weeks 4 and 5
// shipped with the identical line on both pages ("predict the next camp
// spawn before it happens"). This test is the mechanical half of the fix:
// it flags a lecture outcome line that shares most of its significant
// vocabulary with that week's Lobby Lab spec line, in either direction.
//
// It cannot catch every violation of the rule — a line can be pure activity
// ("play a whole game...") with almost no words in common with the lab's
// spec and still fail the rule by *form* rather than by *text*. That half
// is a human read, done separately for all twelve weeks, not something a
// word-overlap check can see.

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  spec?: unknown;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};
const sessionByWeek = new Map(
  api.nodes.filter((n) => n.type === "sessions").map((n) => [Number(n.meta?.week), n]),
);

// Words that carry no topic content on their own, plus the small set of
// reporting/instruction verbs ("say", "name", "give", "tell") that both a
// lecture outcome and a lab spec line use constantly regardless of subject
// — counting them as overlap would flag unrelated lines just for sharing
// the verb that introduces them.
const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "of", "to", "in", "on", "at", "for", "is", "are",
  "was", "were", "you", "your", "it", "its", "this", "that", "can", "do", "does",
  "did", "not", "one", "from", "with", "before", "after", "what", "who", "why",
  "how", "say", "says", "name", "names", "give", "gives", "tell", "tells",
]);

// Deliberately crude: strip a trailing plural/tense suffix so simple
// inflections ("plays"/"play", "wards"/"ward") land on the same token. This
// is an approximation, not a real stemmer, and is documented as one.
const stem = (word: string): string =>
  word.length > 4 ? word.replace(/(ing|ies|ed|es|s)$/, "") : word;

const significantWords = (line: string): Set<string> =>
  new Set(
    line
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 0 && !STOPWORDS.has(word))
      .map(stem),
  );

// Overlap coefficient — the share of the SHORTER line's significant words
// that also appear in the other line — rather than Jaccard similarity,
// because the actual bug is containment: a reworded, longer outcome line
// that still wraps the lab's spec line inside it.
const overlap = (a: Set<string>, b: Set<string>): number => {
  const shorter = a.size <= b.size ? a : b;
  const longer = a.size <= b.size ? b : a;
  if (shorter.size === 0) return 0;
  let shared = 0;
  for (const word of shorter) if (longer.has(word)) shared += 1;
  return shared / shorter.size;
};

// A pair counts as "the same line" once this much of the shorter line's
// vocabulary is shared. Calibrated against the two lines below that
// actually shipped as the bug, not against today's page content.
const THRESHOLD = 0.65;

const extractOutcomes = (week: string): string[] => {
  const html = readFileSync(resolve(`dist/lectures/week-${week}/index.html`), "utf8");
  const section = html.match(/id="after-this-week-you-can"[\s\S]*?<ul>([\s\S]*?)<\/ul>/);
  if (!section) return [];
  return [...section[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(([, li]) =>
    li.replace(/<[^>]+>/g, "").trim(),
  );
};

describe("lecture outcomes stay knowledge, not the lab's spec line", () => {
  it("known-bad control: the sensor flags the lines that actually shipped as the bug", () => {
    // The week 4 and week 5 lines before docs/weeks.md's correction, kept
    // here as a fixture (not read from git history) so the test proves it
    // would have caught them, per the "show it responds to a known case"
    // rule — not just that it is silent on today's already-fixed pages.
    const week4Lecture = "predict the next camp spawn before it happens";
    const week4Lab = "you can predict the next camp spawn before it happens";
    expect(
      overlap(significantWords(week4Lecture), significantWords(week4Lab)),
    ).toBeGreaterThanOrEqual(THRESHOLD);

    const week5Lecture =
      "look at a hero you have never played and infer from the primary attribute roughly how they work";
    const week5Lab =
      "you can look at an untried hero and infer from its attribute roughly how it plays";
    expect(
      overlap(significantWords(week5Lecture), significantWords(week5Lab)),
    ).toBeGreaterThanOrEqual(THRESHOLD);
  });

  it("no lecture outcome line repeats its week's Lobby Lab spec line", () => {
    const offenders: string[] = [];
    for (let week = 1; week <= 12; week += 1) {
      const wk = String(week).padStart(2, "0");
      const outcomes = extractOutcomes(wk);
      expect(outcomes.length, `week ${wk} has no "After this week you can" lines`).toBeGreaterThan(
        0,
      );

      const session = sessionByWeek.get(week);
      const specLines = Array.isArray(session?.spec) ? (session.spec as string[]) : [];
      expect(specLines.length, `week ${wk}'s Lobby Lab has no spec lines`).toBeGreaterThan(0);

      for (const outcome of outcomes) {
        for (const spec of specLines) {
          const score = overlap(significantWords(outcome), significantWords(spec));
          if (score >= THRESHOLD) {
            offenders.push(
              `week ${wk}: outcome "${outcome}" overlaps ${Math.round(score * 100)}% with lab spec "${spec}"`,
            );
          }
        }
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
  });
});
