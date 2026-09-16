import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The shape every finished weekly page holds to.
//
// The gate is `draft`. A week still marked draft is exempt, because it is
// admittedly unfinished; the moment a week is un-drafted it must satisfy all
// of this. That makes un-drafting a deliberate act with a cost, rather than a
// flag someone clears to tidy up — which is the failure mode this course is
// most exposed to, since the theme renders no draft badge at all and nothing
// on the site would show a half-written week.

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(
  readFileSync(resolve("dist/api/index.json"), "utf8"),
) as { nodes: ApiNode[] };

// Frontmatter is asserted against the built API, because that is what shipped.
// Heading structure is the one thing that cannot be: the API carries no body,
// and the built HTML mixes the page's own headings with the theme's ("Related"
// is an `<h2>` the layout adds), so asserting against it would be asserting
// about the theme. The source file is where a missing or misordered section
// actually lives, and `##` in markdown becomes `<h2>` without anywhere for a
// bug to hide in between.
const bodyOf = (nodeId: string): string => {
  const file = resolve(`src/content/${nodeId}.md`);
  const source = readFileSync(file, "utf8");
  const end = source.indexOf("\n---", source.indexOf("---") + 3);
  return end === -1 ? source : source.slice(end + 4);
};

const SECTIONS = [
  "This week's decision",
  "Mechanics",
  "The resource lens",
  "Before the lecture",
  "This week's hero",
  "This week's item",
  "After this week you can…",
] as const;

// The day-1 stub sentence. A week that still carries it has not been written.
const STUB_REASON = "This week's material is a page and a practice task";

const lectures = api.nodes.filter((node) => node.type === "lectures");
const finished = lectures.filter((node) => node.meta?.draft !== true);
const asArray = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

// Top-level headings only: `###` subheadings (week 1's bridging passage) are
// deliberately not part of the contract.
const headingsOf = (body: string): string[] =>
  [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map(([, heading]) => heading.trim());

describe("the weekly page contract", () => {
  it("carries the seven sections in order, and only those", () => {
    for (const lecture of finished) {
      const headings = headingsOf(bodyOf(lecture.id));

      // No heading outside the seven, and never out of order.
      for (const heading of headings) {
        expect(SECTIONS as readonly string[], `${lecture.id} has an unknown section`).toContain(
          heading,
        );
      }
      const order = headings.map((heading) => SECTIONS.indexOf(heading as (typeof SECTIONS)[number]));
      expect([...order].sort((a, b) => a - b), `${lecture.id}'s sections are out of order`).toEqual(
        order,
      );

      // A hero or item section is present exactly when the week has heroes or
      // items to put in it. This was briefly relaxed to one direction, while
      // week 5's item section was an admitted hole with an empty `items`;
      // that hole is filled, so the strict form is back — a heading with
      // nothing behind it is now a failure again.
      const expected = SECTIONS.filter((section) => {
        if (section === "This week's hero") return asArray(lecture.meta?.heroes).length > 0;
        if (section === "This week's item") return asArray(lecture.meta?.items).length > 0;
        return true;
      });
      expect(headings, `${lecture.id}'s sections`).toEqual(expected);
    }
  });

  it("teaches at most two abilities, each with a hero, a name and a reason", () => {
    for (const lecture of finished) {
      const abilities = asArray(lecture.meta?.abilities);
      expect(abilities.length, `${lecture.id} teaches more than two abilities`).toBeLessThanOrEqual(
        2,
      );
      for (const entry of abilities) {
        const ability = entry as Record<string, unknown>;
        for (const field of ["hero", "name", "why"]) {
          expect(
            isNonEmptyString(ability?.[field]),
            `${lecture.id} has an ability with no ${field}`,
          ).toBe(true);
        }
      }
    }
  });

  it("names the Valve tutorial section it follows", () => {
    for (const lecture of finished) {
      expect(isNonEmptyString(lecture.meta?.tutorial), `${lecture.id} has no tutorial section`).toBe(
        true,
      );
    }
  });

  it("names who teaches it", () => {
    for (const lecture of finished) {
      expect(asArray(lecture.meta?.teachers).length, `${lecture.id} names no teacher`).toBeGreaterThan(
        0,
      );
    }
  });

  it("gives a deck reason of its own, not the day-1 stub", () => {
    const reasons: string[] = [];
    for (const lecture of finished) {
      const reason = lecture.meta?.deck_reason;
      if (reason === undefined) continue;
      expect(isNonEmptyString(reason), `${lecture.id} has an empty deck_reason`).toBe(true);
      expect(
        String(reason).includes(STUB_REASON),
        `${lecture.id} still carries the day-1 stub deck_reason`,
      ).toBe(false);
      reasons.push(String(reason).trim());
    }
    if (reasons.length > 1) {
      expect(new Set(reasons).size, "every deck_reason is identical").toBeGreaterThan(1);
    }
  });
});
