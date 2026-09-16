# Day 2.2 — audit, numbers, drawings, and an adversarial read

Day 2 finished with 26 green checks and `check:evidence` down to PROCESS.md
alone. This is the overflow day: everything that makes the site *better*
rather than *finished*, plus one correction that has to happen first.

Three tracks. **Track A runs alone, then B and C run beside it.** A touches
the weekly pages; B creates new files and only touches pages at its final
step; C reads the built site and writes nothing.

The standing rules hold: one commit per step, log after each commit with a
real hash, never touch `PROCESS.md`, author-written files (`docs/*.md`,
`src/decks/*`) are not yours to edit, report after each step and keep going.

---

# Track A — the pages

## A0. Re-sync and audit — do this before anything else

`docs/` changed after Day 2 started. Six files moved, and two of them carry
**corrections to material that is already on the pages**. Re-copy the whole
`docs/` folder from the author's Desktop copy, then audit.

Two new reference files now exist and are the only source for what they
cover: **`docs/map-reference.md`** (the board) and
**`docs/mechanics-reference.md`** (denies, lane creeps, camps, attributes).
Where a page, a note and a reference disagree, the reference wins.

Check each of these against what is actually on the built pages, and report
each as *correct already* or *fixed*:

1. **Week 5, the attribute mapping — this is a real error if it shipped.**
   Intelligence gives maximum mana, mana regeneration and magic resistance.
   It does **not** give spell damage. Strength gives maximum health and
   health regeneration. Agility gives armour and attack speed. Universal
   turns every point of any attribute into attack damage. And the line the
   week turns on: for a hero whose primary attribute it is, each point of
   that attribute also adds attack damage.
2. **Week 5's item section is no longer `OPEN`.** It is the small attribute
   items — Iron Branch, Circlet, Gauntlets of Strength, Mantle of
   Intelligence. If you relaxed a contract assertion to accommodate the hole,
   **put the assertion back** and let the filled section satisfy it.
3. **Week 3's equilibrium fact is settled**: mid meets at the centre of the
   map; a safe lane's meeting point sits closer to the safe-lane team's own
   tier-1 tower; an off lane's therefore sits far from the off-laner's tower.
   That asymmetry is why the off lane is the hard lane, and the page says so.
4. **Week 2 gained a bridge to week 3**: denying drags the wave back toward
   your own tower, so week 2's mechanic is already doing week 3's job.
5. **Week 4 gained two facts**: camps spawn on the **game clock**, not on a
   timer from when you cleared them; and **only four camps on the map can be
   pulled into a lane** — the two small camps and the large camp in each main
   jungle by the off lane. Lane creeps ignore neutrals from anywhere else.

Commit: `Correct the weekly pages against the new references`. Log it
`[judgement]` and say plainly in the entry which pages were wrong and for how
long — a correction you can point at is worth more than a page that was
quietly right.

## A1. The loose ends Day 2 found

Three small things, one commit each.

- **`src/pages/404.md` still points at a deleted image.** `pnpm check` does
  not go red and the page would ship with a broken image. Fix it, and then
  **add the assertion that would have caught it**: every image source
  referenced anywhere in `dist/` resolves to a file that exists. That is the
  general form of the bug, and it protects every page, not the one you found.
- **The policies page repeats its own description in its first sentence.**
  Cut the duplicate.
- **`draft: true` must not survive to ship.** Write the assertion now: no
  published lecture, Lobby Lab or assessment carries it. It should be green
  immediately — that makes it a regression guard rather than a red-first
  test, which is honest and worth saying in the commit message.

## A2. `FACTS.md` and the numbers

Every figure the site states comes from one pinned file. `7.41f` stays the
only patch string anywhere.

1. **`content/source/`** — copy the relevant sections of
   `docs/mechanics-reference.md` verbatim into a capture file, so the chain
   from source to page is visible.
2. **`FACTS.md`** — the human-adjudicated layer. One line per fact: the
   value, what it means, and where it came from. Only facts a page actually
   states; this file is small by design. The material is already gathered —
   deny thresholds and experience shares, the creep wave interval,
   flagbearer and siege wave numbers, camp counts by tier, the neutral spawn
   interval and first spawn, neutral aggro and guard distances, the four
   attribute conversions. **Do not add a number the pages do not use.**
3. **A typed module** the pages read from, and a test that every numeric
   claim rendered in `dist/` traces to a value in it.
4. **Then wire the numbers into the sentences that are already there.** The
   pages were written to survive without figures; this step makes them
   sharper, it does not rewrite them. If a sentence reads worse with the
   number in it, leave the number out and say so in your report.

**Two rules, because this is where an agent goes wrong.** Take nothing from a
web search, a JSON dump or your own memory — `docs/mechanics-reference.md` is
the only source. And if a number you need is not in it, that is not an
invitation to go and find one: report it as missing and leave the sentence
as it stands.

Commits: `Capture the 7.41f source material`, `Add FACTS.md and the typed
constants`, `Put the figures into the weeks`.

---

# Track B — the diagrams

`docs/brief-diagrams.md`, in a second session. All six are unblocked: the
camp data arrived, so diagram 4 is no longer waiting. Nothing in this track
touches a page until its last step, so it runs safely beside Track A.

The rule that matters most is in that brief and bears repeating here: **you
are drawing blind.** Rasterise, `Read` the PNG as an image, judge it, iterate,
and report how many passes each diagram took and what changed between them.
A diagram that compiles is not a diagram that reads.

---

# Track C — adversarial reading

Read-only. Run it after Track A's A0 lands, so it is reading corrected pages.

## C1. Verify the thirteen hero slugs — properly

Thirteen `dota2.com/hero/<slug>` links are currently unverified guesses.
`dota2.com` is JavaScript-rendered, so **fetching a URL and getting a 200
proves nothing** — the shell comes back for any path. This is the exact
failure mode named in `CLAUDE.md`.

Drive a real browser, wait for render, and read the **hero name the page
actually displays**. Before trusting a single result, **run it against a slug
you know is wrong** and confirm it reports a failure — a sensor you have only
seen agree with you is not yet a sensor. Watch Wraith King: its internal name
is `skeleton_king`.

Then update `src/data/heroes.ts`, delete the "unverified" comment, and report
every slug that turned out different from the guess.

While you are there, confirm from the same official pages the two ability
names `docs/weeks.md` marks `CHECK (author)`: **Wraith King — Vampiric
Spirit** and **Lich — Frost Shield**. Report what the official pages call
them; do not edit the notes.

Commit: `Verify the hero slugs against the rendered pages`. Log `[harness]`
if the verification method itself was the interesting part.

## C2. The repetition review — an Opus subagent

Twelve lecture pages and twelve Lobby Lab pages now exist. The brief names
*"twelve weeks that repeat one another"* as a downgrade signal, and no
automated check can see it. Hand an Opus subagent the built pages from
`dist/` and ask for exactly three lists, no prose:

1. **Pairs of pages whose paragraphs could be swapped without a reader
   noticing.** Quote the two passages.
2. **Sentences that could sit on any course's website.** Quote them with
   their page.
3. **Places the satire leaked out of the titles into the body**, where the
   course's own rule says the body stays sincere.

Report the lists verbatim. **Change nothing** — the author decides what to
act on. This is the pass that has caught things `pnpm check` cannot, twice
before in this course.

## C3. The ten-minute marker

A second Opus subagent, reading the deployed site the way the brief says a
marker does: about ten minutes, as a prospective student, at both marking
viewports. Home page, two **non-adjacent** weeks, one Lobby Lab, one
assessment, the deck, the policies page.

Ask for four things: what they understood the course to be after the home
page; what confused them; what question they would ask; and whether the
course has a point of view or merely a subject. Report it verbatim.

---

# What is not in this brief

The deck and `PROCESS.md` are the author's writing and cost nothing here.
The Hall of Fame page, the band descriptors on the assessment pages, and the
A1 last-hit threshold all wait on decisions the author has not made.

# If time runs out

Track A is the one that must land — A0 above all, because it is a correction
rather than an addition. Track B improves the artefact. Track C produces
findings the author acts on tomorrow. Stop in that order, and say clearly in
your final report which tracks completed and which did not.
