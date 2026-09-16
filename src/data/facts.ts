// The figures this site is allowed to state, and nothing else.
//
// One row per fact in `FACTS.md`, which is the adjudicated layer above
// `content/source/mechanics-7.41f.md`. The chain is: the author's compiled
// reference, captured verbatim; FACTS.md, where a human decided which figures
// the site would use; this module; and the pages.
//
// A note on how this is enforced, because it is not what it looks like.
// Astro content collections are markdown and cannot import a module, so the
// weekly pages state these figures as literal text rather than reading them
// from here. That would make this module decorative — a source of truth
// nothing consults — so `spec/facts.test.ts` closes the gap from the other
// end: it scans every figure rendered into `dist/` and fails on any that is
// not in this table. The module is canonical because the test makes it
// canonical, not because the pages import it.

export interface Fact {
  readonly id: string;
  /** As it appears on the page, including any % or + sign. */
  readonly rendered: string;
  readonly means: string;
  /** The section of content/source/mechanics-7.41f.md it came from. */
  readonly source: string;
}

export const facts: readonly Fact[] = [
  {
    id: "deny-threshold",
    rendered: "50%",
    means: "A creep can be denied below half its health",
    source: "Denying",
  },
  {
    id: "deny-experience",
    rendered: "50%",
    means: "A denied lane creep gives the enemy half its experience, and no gold",
    source: "Denying",
  },
  {
    id: "camp-first-spawn",
    rendered: "1:00",
    means: "The first neutral camp spawn of a match",
    source: "Neutral camps",
  },
  {
    id: "camp-interval",
    rendered: "1 minute",
    means: "The interval between camp spawns, on the game clock",
    source: "Neutral camps",
  },
  {
    id: "pullable-camps",
    rendered: "4",
    means: "Camps on the map that can be pulled into a lane",
    source: "Neutral camps",
  },
  {
    id: "primary-attribute-damage",
    rendered: "+1",
    means: "Attack damage per point of a hero's primary attribute",
    source: "Attributes",
  },
  {
    id: "universal-damage",
    rendered: "+0.45",
    means: "Attack damage a universal hero gets from every point of any attribute",
    source: "Attributes",
  },
] as const;

/** The patch every figure above is pinned to. The only patch string on the site. */
export const PATCH = "7.41f" as const;

export const factValues: ReadonlySet<string> = new Set(facts.map((fact) => fact.rendered));
