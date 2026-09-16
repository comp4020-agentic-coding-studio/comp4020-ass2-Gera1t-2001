# Brief — the course's own diagrams

A parallel job. It creates **new files only** and touches no page until its
last step, so it can run in a second session alongside the twelve weeks
without colliding with them.

`docs/course-plan.md` §6 commits this course to in-house visuals: "SVG
diagrams: creep equilibrium, pull timing, attribute-to-stat mapping, a LoL ↔
Dota comparison." Nothing has scheduled them. This does.

## Rules

- **Self-made only.** No Valve artwork, no screenshots, no traced assets.
  Everything is drawn in SVG from scratch.
- **No figures.** Same rule as the pages: no gold, timings, damage or counts.
  These diagrams show *shape and relationship*, not quantity. A diagram that
  needs a number to make sense is the wrong diagram for this week.
- **Both themes.** The site has brand tokens and a dark mode. Do not hardcode
  black or white: use `currentColor` for strokes and text where you can, and
  the theme's CSS custom properties otherwise. Check both.
- **Readable at 390px wide.** Every one of these lands on a page that is
  marked at 390x844 as well as 1920x1080. If a label is unreadable on the
  phone viewport, the diagram is wrong, not the viewport.
- **Accessible.** Each diagram gets a `<title>` and `<desc>` inside the SVG,
  and the markdown that embeds it carries real alt text — a sentence saying
  what the diagram shows, not "diagram".
- **You are drawing blind.** You cannot see what you wrote. After each
  diagram: rasterise it and `Read` the PNG as an image, judge it, and iterate.
  Say in your report how many passes each one took and what changed between
  them. `pnpm check` cannot see a bad drawing.

## Where they live

`src/assets/diagrams/<name>.svg`, committed as the source. Embed them in the
weekly pages as images with alt text. Add a one-line `scripts/` helper if
rasterising for inspection needs one; a throwaway command is fine, but do not
commit a script that nothing uses.

## Reference, not recall

**Two reference files are where the facts come from**: `docs/map-reference.md`
for the board and `docs/mechanics-reference.md` for creeps, camps and
attributes. Read both before drawing, and take nothing from anywhere else —
not from your own knowledge, not from a web search, not from a patch-note
article. They hold figures; **the diagrams still show none**.

Diagrams 1, 3, 4 and 6 depend on facts about the current map that **an agent
does not reliably hold**: the map was expanded by roughly 40% in 7.33, its
furniture has been moved by later patches, and 7.41 moved two objectives
again. The author is supplying reference images. **Do not draw any of those
four from memory**, do not start one before its reference exists, and name in
your report which reference every element came from. Diagrams 2 and 5 are
conceptual and can proceed; 5 takes its mapping from `docs/weeks.md` week 5,
which carries a `CHECK` the author is resolving.

## The diagrams

Do them **one per commit**, in this order. Report after each.

### 1. `map-overview.svg` — week 1

**Do not draw this from memory, and do not start it until the author has
supplied reference images.** The map was expanded by roughly 40% on all four
sides in 7.33 and its furniture has moved since — an agent's recollection of
this map is years out of date, and a Dota player reading the page will see
that in a second. The author is supplying current reference; draw from that
and from nothing else, and say in your report which reference each element
came from.

What this diagram is for: a reader who has never opened the game seeing the
*shape of the board*. Three lanes, a base at each of two opposite corners,
the river running across the diagonal between them, and — the thing an old
diagram gets wrong — a large amount of ground **outside** the lanes on every
side. Mid is the short way across; the top and bottom lanes are the long way
round, and they are not mirror images for the two teams.

Keep it schematic and **say so on the page**: this is the shape of the board,
not a map to scale. A schematic that admits what it is beats a bad map that
does not.

**What stays out of this one:** Roshan pits, Tormentors, outposts, watchers,
lotus pools, twin gates. None of them is taught in week 1, all of them have
moved between patches, and a beginner's first picture of the game should not
be a furniture inventory. They get their own diagram in week 10, where the
course actually teaches them — see number 6.

Commit: `Draw the map overview for week 1`.

### 2. `last-hit-window.svg` — week 2

One creep's health falling over time, with the window at the end where the
last hit pays marked, and — on the same timeline — the window where your own
creep can be denied. Two windows, one axis, no numbers on either. This is the
week's whole idea in one picture: *the hit that counts is a window, not a
reflex.*

Commit: `Draw the last-hit and deny windows for week 2`.

### 3. `creep-equilibrium.svg` — week 3

**The asymmetry is the point of this diagram**, and
`docs/map-reference.md` settles it: mid meets at the centre of the map, a
safe lane's meeting point sits closer to the safe-lane team's own tier-1
tower, and an off lane's therefore sits far from the off-laner's tower and
close to the enemy's. The neutral position of a wave is not the middle of
the lane, and the same lane is a different job depending on which side you
stand on. Show that. No distances.

Three states of the same lane side by side: the wave held near your tower,
the wave in the middle, the wave pushed to theirs. Show what moves it — an
arrow for "you attacked more" — and mark which state the week recommends for
a beginner and why it is safer (distance to your tower, distance to their
support).

Commit: `Draw creep equilibrium for week 3`.

### 4. `camp-cycle.svg` — week 4

**Unblocked** — `docs/mechanics-reference.md` now has the camp data. Two
things the diagram must carry, both from that file: the spawn cycle runs on
the **game clock** and only fires when nothing is standing in the camp, so
the stack window is the gap before the next tick; and the **river camps
evolve upward over the game** while the dry ones do not. That second fact is
what makes this more than a clock face — the loop is not the same loop at
minute thirty. Still no seconds anywhere.

A camp's cycle as a loop: occupied -> the spawn check -> occupied again, with
the pull window and the stack window marked as arcs on the loop. No seconds
anywhere. The reader should come away understanding that **stacking is a
window inside a cycle**, which is the thing week 4 says is predictable.

Commit: `Draw the camp cycle for week 4`.

### 5. `attributes.svg` — week 5

The four primary attributes on one side, what each one buys on the other, and
the lines between them. This is the diagram students will come back to, so
clarity beats cleverness. Take the mapping from `docs/weeks.md` week 5 and
nothing else — if the notes mark part of it `CHECK`, draw what the notes say
and flag it in your report.

Commit: `Draw the attribute map for week 5`.

### 6. `objectives-map.svg` — week 10, only after 1–5 are done

The same board as number 1, this time carrying the things week 10 actually
teaches: the two Roshan pits, the Tormentors, the outposts, the watchers, the
lotus pools and the twin gates. **Every position comes from `docs/map-reference.md`**, which lists
all of them, and the caption names the patch — 7.41 moved the Roshan pit
preference to the top pit and the Tormentor to the bottom chasm, so a diagram
without a patch label is a diagram that will quietly go wrong.

This is the lowest-priority of the six. If the budget or the day runs out,
week 10 keeps its prose and loses nothing it promised.

Commit: `Draw the objectives map for week 10`.

## Not an SVG

The **LoL <-> Dota comparison** in week 1 is a table, not a drawing. Write it
as an ordinary markdown table in the week 1 page — three rows, from the notes
(denying, no recall, the courier). A table is more accessible than a picture
of a table and costs nothing to maintain.

## Last step — wire them in

Only after all five exist and you have looked at each one: add each diagram to
its week's page with alt text, under the section it belongs to. Then build,
and screenshot **weeks 1 and 4 only**, at both viewports, to confirm the
diagrams sit correctly in a real page — one early week and one later one is
enough to catch a sizing problem that would affect all five.

`pnpm check`. Commit: `Embed the diagrams in their weeks`.

If the twelve weeks are not written yet when you reach this step, stop here
and report: the diagrams are done and waiting, and wiring them in is a
five-minute job once the pages exist.
