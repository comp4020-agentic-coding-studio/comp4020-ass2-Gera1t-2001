import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { glob } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { heroes } from "../src/data/heroes";

// The hero pool is a promise the build cannot see: that the course fixes
// thirteen heroes, that a week only names heroes from that list, and that
// every link out to an official hero page uses a slug the pool knows about.
// The last one is the guard that matters most, because a wrong slug is a
// plausible-looking link that 404s, and nothing else in the repo would catch
// it.

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(
  readFileSync(resolve("dist/api/index.json"), "utf8"),
) as { nodes: ApiNode[] };

const lectures = api.nodes.filter((node) => node.type === "lectures");
const asArray = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);

describe("the hero pool", () => {
  it("holds thirteen heroes with unique ids and slugs", () => {
    expect(heroes.length).toBe(13);
    expect(new Set(heroes.map((hero) => hero.id)).size).toBe(heroes.length);
    expect(new Set(heroes.map((hero) => hero.slug)).size).toBe(heroes.length);
  });

  it("names only pool heroes, and dates each one's first appearance", () => {
    const poolIds = new Set(heroes.map((hero) => hero.id));

    for (const lecture of lectures) {
      for (const id of asArray(lecture.meta?.heroes)) {
        expect(poolIds.has(String(id)), `${lecture.id} names ${id}, which is not in the pool`).toBe(
          true,
        );
      }
    }

    for (const hero of heroes) {
      const appearances = lectures
        .filter((lecture) => asArray(lecture.meta?.heroes).includes(hero.id))
        .map((lecture) => Number(lecture.meta?.week));
      expect(appearances.length, `${hero.id} is in the pool but no lecture names it`).toBeGreaterThan(
        0,
      );
      expect(Math.min(...appearances), `${hero.id}'s firstWeek disagrees with the lectures`).toBe(
        hero.firstWeek,
      );
    }
  });

  it("only teaches an ability of a hero that week actually names", () => {
    for (const lecture of lectures) {
      const named = new Set(asArray(lecture.meta?.heroes).map(String));
      for (const ability of asArray(lecture.meta?.abilities)) {
        const hero = String((ability as Record<string, unknown>)?.hero);
        expect(named.has(hero), `${lecture.id} teaches an ability of ${hero}, which it never names`).toBe(
          true,
        );
      }
    }
  });

  it("links out only to slugs the pool knows", async () => {
    const poolSlugs = new Set(heroes.map((hero) => hero.slug));
    const found = new Set<string>();

    for await (const file of glob("dist/**/*.html")) {
      const html = readFileSync(file, "utf8");
      for (const [, slug] of html.matchAll(/https:\/\/www\.dota2\.com\/hero\/([a-z0-9-]+)/g)) {
        found.add(slug);
      }
    }

    for (const slug of found) {
      expect(poolSlugs.has(slug), `the site links to /hero/${slug}, which no pool hero uses`).toBe(
        true,
      );
    }
  });
});
