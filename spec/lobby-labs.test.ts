import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The two-genre rule, made mechanical.
//
// This course's largest structural risk is not a missing page — it is
// twenty-four pages where twelve would do. A lecture and its Lobby Lab cover
// the same week, so the temptation is for the lab page to restate the
// lecture's material with a different heading. The division is: the lecture
// answers *what the decision is*, the lab answers *how you know you can do
// it*. Two of the assertions below are proxies for that division and nothing
// else: lecture titles are questions and lab titles are verb phrases, and
// every lab must say why it cannot be done alone. The second is the sharper
// of the two — a drill with no answer to "why do I need other people here" is
// homework with a room booked, and the twelve reasons being pairwise distinct
// is what stops the labs collapsing into one drill repeated twelve times.

interface ApiNode {
  id: string;
  type: string;
  title: string;
  related?: string[];
  spec?: unknown;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(
  readFileSync(resolve("dist/api/index.json"), "utf8"),
) as { nodes: ApiNode[] };

const sessions = api.nodes.filter((node) => node.type === "sessions");
const lectures = api.nodes.filter((node) => node.type === "lectures");
const lectureByWeek = new Map(lectures.map((node) => [Number(node.meta?.week), node]));

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

// Monday-based week index, so "the same calendar week" is a single number.
const mondayOf = (iso: string): number => {
  const date = new Date(`${String(iso).slice(0, 10)}T00:00:00Z`);
  const day = (date.getUTCDay() + 6) % 7;
  return Math.floor((date.getTime() - day * 86_400_000) / 86_400_000);
};

describe("the Lobby Labs", () => {
  it("runs exactly twelve, one per teaching week", () => {
    expect(sessions.length).toBe(12);
    const weeks = sessions.map((node) => Number(node.meta?.week));
    expect([...weeks].sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("sits after its lecture, in the same week", () => {
    for (const session of sessions) {
      const week = Number(session.meta?.week);
      const lecture = lectureByWeek.get(week);
      expect(lecture, `no lecture for week ${week}`).toBeDefined();

      const labDate = String(session.meta?.date).slice(0, 10);
      const lectureDate = String(lecture?.meta?.date).slice(0, 10);
      expect(labDate > lectureDate, `${session.id} is not after its lecture`).toBe(true);
      expect(mondayOf(labDate), `${session.id} is not in its lecture's week`).toBe(
        mondayOf(lectureDate),
      );
    }
  });

  it("declares the lecture it belongs to", () => {
    for (const session of sessions) {
      const week = String(session.meta?.week).padStart(2, "0");
      expect(session.related ?? [], `${session.id} does not relate to its lecture`).toContain(
        `lectures/week-${week}`,
      );
    }
  });

  it("carries exactly three things a reader could judge from outside", () => {
    for (const session of sessions) {
      const lines = Array.isArray(session.spec) ? session.spec : [];
      expect(lines.length, `${session.id} does not have three spec lines`).toBe(3);
      for (const line of lines) {
        expect(isNonEmptyString(line), `${session.id} has an empty spec line`).toBe(true);
      }
    }
  });

  it("says why it cannot be done alone, and no two say the same thing", () => {
    const reasons: string[] = [];
    for (const session of sessions) {
      const reason = session.meta?.needs_others;
      expect(isNonEmptyString(reason), `${session.id} has no needs_others`).toBe(true);
      reasons.push(String(reason).trim());
    }
    expect(new Set(reasons).size, "two Lobby Labs give the same reason").toBe(sessions.length);
  });

  it("titles a lab as a verb phrase and a lecture as a question", () => {
    for (const session of sessions) {
      expect(session.title.trim().endsWith("?"), `${session.id} is titled as a question`).toBe(
        false,
      );
    }

    // Week 12 is the one exemption, and it is a real one rather than a
    // convenience: it is the capstone, the week has no decision left to pose
    // because the answer is the assignment, and its title says so. Every
    // other week asks the question that week exists to answer.
    for (const lecture of lectures) {
      if (Number(lecture.meta?.week) === 12) continue;
      expect(lecture.title.trim().endsWith("?"), `${lecture.id} is not titled as a question`).toBe(
        true,
      );
    }
  });
});
