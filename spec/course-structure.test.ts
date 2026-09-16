import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The promises SLOP1904 makes about its own shape, as set out in
// docs/course-plan.md. The published Assignment 2 spec is asserted separately
// in assignment-2.test.ts; nothing here repeats it.
//
// Assertions read the built API rather than source frontmatter, so they check
// what the site shipped. Declared and custom frontmatter keys both land in a
// node's `meta`.

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const nodesOfType = (type: string): ApiNode[] => api.nodes.filter((node) => node.type === type);
const lectures = nodesOfType("lectures");
const assessments = nodesOfType("assessments");

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

describe("SLOP1904 course structure", () => {
  it("opens every assessment in an earlier week than it is due", () => {
    expect(assessments.length).toBeGreaterThan(0);
    for (const node of assessments) {
      const released = node.meta?.released;
      const due = node.meta?.week;
      expect(typeof released, `${node.id} has no released week`).toBe("number");
      expect(typeof due, `${node.id} has no due week`).toBe("number");
      expect(
        Number(released) < Number(due),
        `${node.id} opens in week ${released} but is due in week ${due}`,
      ).toBe(true);
    }
  });

  it("runs exactly twelve lectures, one per teaching week", () => {
    expect(lectures.length).toBe(12);
    const weeks = lectures.map((node) => node.meta?.week);
    expect(new Set(weeks).size, "two lectures share a week").toBe(lectures.length);
    expect([...weeks].sort((a, b) => Number(a) - Number(b))).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  it("dates the lectures in the same order as their week numbers", () => {
    const byWeek = [...lectures].sort((a, b) => Number(a.meta?.week) - Number(b.meta?.week));
    const byDate = [...lectures].sort(
      (a, b) => Date.parse(String(a.meta?.date)) - Date.parse(String(b.meta?.date)),
    );
    for (const node of lectures) {
      expect(Number.isNaN(Date.parse(String(node.meta?.date))), `${node.id} has no date`).toBe(
        false,
      );
    }
    expect(byDate.map((node) => node.id)).toEqual(byWeek.map((node) => node.id));
  });

  it("gives every lecture exactly one decision, and no two the same", () => {
    for (const node of lectures) {
      expect(isNonEmptyString(node.meta?.decision), `${node.id} has no decision`).toBe(true);
    }
    const decisions = lectures.map((node) => String(node.meta?.decision).trim());
    expect(new Set(decisions).size, "two weeks share a decision").toBe(lectures.length);
  });

  it("makes every lecture either link a deck or say why it has none", () => {
    for (const node of lectures) {
      const hasSlides = isNonEmptyString(node.meta?.slides);
      const declinesDeck =
        node.meta?.deck === "none" && isNonEmptyString(node.meta?.deck_reason);

      expect(
        hasSlides !== declinesDeck,
        `${node.id} must either link a deck or declare deck: none with a reason, not both and not neither`,
      ).toBe(true);

      if (hasSlides) {
        expect(String(node.meta?.slides)).toMatch(/^\/decks\/[a-z0-9-]+\/$/);
      }
    }
  });

  it("holds the group assignment back until drafting has been taught", () => {
    const a4 = assessments.find((node) => node.id.endsWith("assignment-4"));
    expect(a4, "no assignment-4 node in the API").toBeDefined();
    // Captains Mode drafting is taught in week 11; A4 cannot land before it.
    expect(Number(a4?.meta?.week)).toBeGreaterThan(11);
  });
});
