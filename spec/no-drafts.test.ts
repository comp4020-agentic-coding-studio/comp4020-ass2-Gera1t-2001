import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Nothing published may still be marked draft.
//
// This one is green the moment it is written, which makes it a regression
// guard rather than a red-first test, and that is worth saying out loud
// rather than dressing it up: no assertion here has ever failed, so none of
// them has yet demonstrated it can.
//
// It earns its place anyway, because of how this particular flag fails. The
// theme renders **no draft badge at all** — checked in the built HTML, not
// assumed — so a page left marked draft looks exactly like a finished one on
// the site, while the flag still ships in the generated course API that the
// programs-and-courses page ingests. There is no moment at which a human
// would notice. That is precisely the shape of thing a check is for, and the
// opposite of the shape a human review catches.

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(
  readFileSync(resolve("dist/api/index.json"), "utf8"),
) as { nodes: ApiNode[] };

const PUBLISHED = ["lectures", "sessions", "assessments"] as const;

describe("nothing ships marked draft", () => {
  it("carries no draft flag on any published lecture, Lobby Lab or assessment", () => {
    const drafts = api.nodes
      .filter((node) => (PUBLISHED as readonly string[]).includes(node.type))
      .filter((node) => node.meta?.draft === true)
      .map((node) => node.id);

    expect(drafts, `still marked draft: ${drafts.join(", ")}`).toEqual([]);
  });

  it("covers the whole of what was meant to be covered", () => {
    // A guard that silently stopped seeing the collections it guards would
    // also pass. Pin the counts the site is known to have.
    for (const [type, expected] of [
      ["lectures", 12],
      ["sessions", 12],
      ["assessments", 4],
    ] as const) {
      const found = api.nodes.filter((node) => node.type === type).length;
      expect(found, `${type}: guard is looking at ${found} nodes, not ${expected}`).toBe(expected);
    }
  });
});
