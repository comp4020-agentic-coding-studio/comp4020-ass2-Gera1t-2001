import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { factValues, facts, PATCH } from "../src/data/facts";

// Every figure the site states about Dota must trace to FACTS.md.
//
// The chain is: docs/mechanics-reference.md (the author's compiled source) →
// content/source/mechanics-7.41f.md (captured verbatim) → FACTS.md (a human
// decided which figures the site uses) → src/data/facts.ts → the pages.
//
// Astro content collections are markdown and cannot import a module, so the
// pages state their figures as literal text. This test is what stops that
// being a hole: it reads the *built* prose and fails on any number that is
// not either a declared fact or a structural number the course uses to talk
// about itself.
//
// The exclusions below are the interesting part, because a lazy version of
// this test would either flag every date on the site or quietly allow
// anything. Each pattern removed is a number that makes no claim about the
// game:
//
//   - dates and week references — the teaching calendar
//   - "section N" — which part of Valve's in-game tutorial a week points at
//   - "Assignment N" — the course's own assessments
//   - "tier-1" / "tier-2" — the standard name of a tower, not a measurement
//   - "Dota 2" — the name of the game
//   - the patch string itself
//
// Anything left after that is a claim about how the game works, and it has to
// come from FACTS.md or it does not go on the page.

const MONTHS =
  "January|February|March|April|May|June|July|August|September|October|November|December";

const decodeEntities = (html: string): string =>
  html.replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code))).replace(
    /&[a-z]+;/g,
    " ",
  );

const prose = (html: string): string => {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
  if (!main) return "";
  const stripped = main[1]
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ");
  return decodeEntities(stripped);
};

const withoutStructuralNumbers = (text: string): string =>
  text
    .replace(new RegExp(`\\d{1,2}\\s+(?:${MONTHS})\\s+\\d{4}`, "g"), " ")
    .replace(/[Ww]eeks?\s+\d{1,2}/g, " ")
    .replace(/[Ss]ections?\s+\d{1,2}/g, " ")
    .replace(/Assignment\s+\d/g, " ")
    .replace(/tier-\d/g, " ")
    .replace(/Dota\s+2/g, " ")
    .replace(new RegExp(PATCH.replace(".", "\\."), "g"), " ");

// A leading + is part of the figure ("+0.45 attack damage"), so it has to be
// captured or the token would not match what FACTS.md declares.
const NUMERIC = /\+?[0-9][0-9.:%,]*[0-9%]|\+?[0-9]/g;

const pages = (): [string, string][] =>
  (["lectures", "sessions"] as const).flatMap((collection) =>
    readdirSync(resolve("dist", collection))
      .filter((entry) => entry.startsWith("week-"))
      .map(
        (entry) =>
          [`${collection}/${entry}`, resolve("dist", collection, entry, "index.html")] as [
            string,
            string,
          ],
      ),
  );

describe("every figure traces to FACTS.md", () => {
  it("states no number about the game that is not a declared fact", () => {
    const unsourced: string[] = [];

    for (const [id, file] of pages()) {
      const text = withoutStructuralNumbers(prose(readFileSync(file, "utf8")));
      for (const token of text.match(NUMERIC) ?? []) {
        if (!factValues.has(token)) unsourced.push(`${id}: ${token}`);
      }
    }

    expect(
      unsourced,
      `figures on the site that are not in FACTS.md:\n${unsourced.join("\n")}`,
    ).toEqual([]);
  });

  it("is actually reading the pages", () => {
    // Without this, the assertion above passes just as happily when the
    // container selector stops matching and every page yields empty prose.
    const lengths = pages().map(([, file]) => prose(readFileSync(file, "utf8")).length);
    expect(lengths.length, "found no weekly pages at all").toBe(24);
    expect(Math.min(...lengths), "a page yielded no prose — the extractor is broken").toBeGreaterThan(
      400,
    );
  });

  it("keeps FACTS.md and the module in step", () => {
    const table = readFileSync(resolve("FACTS.md"), "utf8");
    for (const fact of facts) {
      expect(table.includes(fact.rendered), `FACTS.md has no row for ${fact.id}`).toBe(true);
    }
  });
});
