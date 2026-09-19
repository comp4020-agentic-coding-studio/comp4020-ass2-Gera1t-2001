import { existsSync, readFileSync } from "node:fs";
import { glob } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { gitOrigin, resolveDeployment } from "../scripts/pages-base";

// Every internal link in the built site must resolve to a page that exists.
//
// The theme's own build-time checker (astro-broken-links-checker, wired with
// throwError: true) already enforces this — but only as a side effect of a
// third-party integration's default options, set inside astro-theme-university
// rather than this repo. Flip `checkLinks: false` in astro.config.mjs, or a
// theme upgrade changes the default, and the guard disappears with no local
// test noticing. This file makes the same assertion this repo's own spec
// suite, independent of whether the theme still runs it.
//
// It would NOT have caught the Hall of Fame defect that prompted it, though:
// the home page and the policies page both *mentioned* "the Hall of Fame"
// before this page existed, but as plain prose, never as an `<a href>`. A
// link checker — this one included — only ever inspects hrefs that exist; a
// page promised in prose but never wired to a real link leaves no href for
// any checker to walk. That gap isn't closeable by asserting on dist/ at
// all — it's a statement of what the source should say, which is what makes
// it a one-page fix rather than a test.

const BASE = resolveDeployment(process.env, gitOrigin).base.replace(/\/$/, "");

const collectHrefs = (html: string): string[] =>
  [...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map(([, href]) => href);

const toDistPath = (href: string): string | undefined => {
  if (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return undefined;
  }
  const [pathname] = href.split("#");
  if (!pathname || !pathname.startsWith(BASE + "/")) return undefined;
  return pathname.slice(BASE.length + 1) || "";
};

const resolvesToRealPage = (relativePath: string): boolean =>
  [
    resolve("dist", relativePath, "index.html"),
    resolve("dist", relativePath),
    resolve("dist", `${relativePath}.html`),
  ].some(existsSync);

describe("every internal link resolves to a real page", () => {
  it("finds an existing dist/ file behind every internal <a href>", async () => {
    const broken: string[] = [];
    let checked = 0;

    for await (const page of glob("dist/**/*.html")) {
      const html = readFileSync(page, "utf8");
      for (const href of collectHrefs(html)) {
        const relativePath = toDistPath(href);
        if (relativePath === undefined) continue;
        checked += 1;
        if (!resolvesToRealPage(relativePath)) broken.push(`${page} -> ${href}`);
      }
    }

    // A pass with nothing checked means the matcher stopped matching, not
    // that the site has no internal links.
    expect(checked, "no internal links were found at all — the matcher is broken").toBeGreaterThan(
      0,
    );
    expect(broken, `internal links with no matching page:\n${broken.join("\n")}`).toEqual([]);
  });
});
