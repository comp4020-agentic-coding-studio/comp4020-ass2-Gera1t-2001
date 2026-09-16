import { existsSync, readFileSync } from "node:fs";
import { glob } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Every image the built site points at must be a file that exists.
//
// This is the general form of a bug that shipped: `src/pages/404.md` went on
// naming `hero-home.avif` after that file was deleted. Nothing went red. The
// theme resolves a missing image by warning and dropping it, which is a
// reasonable thing for a theme to do and a terrible thing to rely on — the
// page builds, the checks pass, and the only place the absence shows is the
// rendered page, which nobody was going to look at for a 404.
//
// Asserting on the built output rather than on the source is the point: a
// source path can be correct and still resolve to nothing, and it is the
// deployed file that a reader's browser asks for.

const BASE = "/comp4020-ass2-Gera1t-2001";

// Sources a browser would fetch: <img src>, <img srcset>, <source srcset>,
// and og:image, which is the one nobody sees until a link is shared.
const collect = (html: string): string[] => {
  const found: string[] = [];
  for (const [, value] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) found.push(value);
  for (const [, value] of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const candidate of value.split(",")) found.push(candidate.trim().split(/\s+/)[0]);
  }
  for (const [, value] of html.matchAll(/property="og:image"\s+content="([^"]+)"/g)) {
    found.push(value);
  }
  return found;
};

// A built URL maps back to a file under dist/ by stripping the base path;
// an absolute http(s) URL is somebody else's to serve.
const toFile = (url: string): string | undefined => {
  if (/^(https?:)?\/\//.test(url)) {
    const path = url.replace(/^https?:\/\/[^/]+/, "");
    return path.startsWith(BASE) ? resolve("dist", path.slice(BASE.length + 1)) : undefined;
  }
  if (url.startsWith("data:")) return undefined;
  if (!url.startsWith(BASE)) return undefined;
  return resolve("dist", url.slice(BASE.length + 1));
};

describe("every referenced image exists", () => {
  it("resolves every image source in the built site to a real file", async () => {
    const missing: string[] = [];
    let checked = 0;

    for await (const page of glob("dist/**/*.html")) {
      const html = readFileSync(page, "utf8");
      for (const url of collect(html)) {
        const file = toFile(url);
        if (!file) continue;
        checked += 1;
        if (!existsSync(file)) missing.push(`${page} -> ${url}`);
      }
    }

    // A pass with nothing checked would mean the matcher stopped matching,
    // not that the site is clean.
    expect(checked, "no image sources were found at all — the matcher is broken").toBeGreaterThan(
      0,
    );
    expect(missing, `broken image references:\n${missing.join("\n")}`).toEqual([]);
  });

  // The assertion above does not catch the bug that prompted it, which I
  // found by trying to make it fail and watching it stay green. The theme
  // does not emit a broken reference when an image will not resolve — it
  // warns at build time and renders no `<img>` at all. So there is nothing
  // dangling to find; the image is simply gone, and a page that silently
  // lost its artwork looks exactly like a page that never had any.
  //
  // This is the assertion that does catch it: a page that *declares* a hero
  // image must render one. Both are worth keeping — the first guards against
  // a reference to a deleted file, this one against a declaration the build
  // quietly dropped.
  it("renders a hero image on every page that declares one", () => {
    const declaring: [string, string][] = [
      ["src/pages/404.md", "dist/404.html"],
      ["src/pages/index.astro", "dist/index.html"],
    ];

    for (const [source, built] of declaring) {
      const declared = /heroImage[=:]/.test(readFileSync(resolve(source), "utf8"));
      expect(declared, `${source} no longer declares a heroImage — update this list`).toBe(true);

      const html = readFileSync(resolve(built), "utf8");
      expect(
        html.includes("at-hero-image"),
        `${source} declares a heroImage but ${built} renders none — the theme dropped it`,
      ).toBe(true);
    }
  });
});
