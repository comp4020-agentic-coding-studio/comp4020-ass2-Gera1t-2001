import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const ASSIGNED_CODE_DIGITS = "904";

describe("assignment 2 spec", () => {
  it("keeps the three code digits this repo was assigned", () => {
    expect(api.course.code.slice(-3)).toBe(ASSIGNED_CODE_DIGITS);
  });

  it("runs across all twelve dated teaching weeks", () => {
    const dated = api.nodes.filter((node) =>
      ["sessions", "lectures", "assessments"].includes(node.type),
    );
    const weeksCovered = new Set(dated.map((node) => node.meta?.week));
    const missing = Array.from({ length: 12 }, (_, i) => i + 1).filter(
      (week) => !weeksCovered.has(week),
    );
    expect(missing, `weeks with no dated material: ${missing.join(", ")}`).toEqual([]);
  });

  it("has an assessment scheme that adds up to 100%", () => {
    const total = api.nodes
      .filter((node) => node.type === "assessments")
      .reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("links at least one real deck from a lecture page", () => {
    const lectureSlides = api.nodes
      .filter((node) => node.type === "lectures")
      .map((node) => node.meta?.slides)
      .filter((slides): slides is string => typeof slides === "string" && slides.length > 0);

    expect(lectureSlides.length, "no lecture declares a slides: link").toBeGreaterThan(0);

    for (const slides of lectureSlides) {
      expect(slides).toMatch(/^\/decks\/[a-z0-9-]+\/$/);
      const builtDeck = resolve("dist", slides.replace(/^\//, ""), "index.html");
      expect(existsSync(builtDeck), `${slides} does not resolve to a built deck page`).toBe(true);
    }
  });
});
