# Day 2 brief — fill the twelve weeks, the twelve labs, and the cast

Read these four files in full before doing anything:
`docs/course-plan.md` (what the course is), `docs/weeks.md`, `docs/labs.md`
and `docs/people.md` (what goes on the pages). They are the author's notes.
This file says what to build today and in what order.

The rules of `docs/brief-day1.md` still hold: one commit per step, log after
each commit citing the real hash, never touch `PROCESS.md`, no placeholder
prose, remove the `STARTER_CONTENT` marker in any file you touch, and
author-written files (`docs/*.md`, `src/decks/*`) are not yours to edit.

Four rules specific to today:

- **Expand, do not invent.** A page says what the notes say for it, in good
  English prose, and nothing more. Every fact, stance, hero and item comes
  from the notes.
- **The three markers in the notes mean different things.** `PROPOSED` is the
  author's current decision — write it as the page's own voice, no hedging.
  `CHECK (author)` is settled enough to write; the author will confirm it
  later. `OPEN` is a real gap — write one honest sentence, write nothing
  further, and name it in your report.
- **No figures anywhere.** No gold, cooldowns, damage, stats, timings or
  last-hit counts. `FACTS.md` is tomorrow and the numbers are added to
  existing sentences then. `7.41f` is the only patch string allowed on the
  site; where a note says to name the patch, name it.
- **Report after every step and keep going.** Do not wait for approval
  between steps. Stop and wait only if: a check goes red for a reason you did
  not expect, a note leaves you no honest way to write a section, or a note
  contradicts what is in the repo.

## Out of scope today

`FACTS.md` and every figure; the Hall of Fame page; band descriptors on the
assessment pages; the deck beyond its existing stub; the `draft: true`
closing test; the duplicated first sentence on the policies page; the SVG
portraits for the cast (text-only entries today, by decision). The hero-image
`STARTER_CONTENT` comment in `index.astro` stays until step 8 replaces the
image.

---

## Step 0 — Baseline, and one harness fix

`git status` clean, `pnpm check` green. Run `pnpm check:evidence` and confirm
its reds are exactly yesterday's known list (the four starter images, the
`STARTER_CONTENT` markers in `sessions/`, `people/` and the hero-image
comment, the template `PROCESS.md` and its two placeholder citations).
Anything else red: stop and report.

Then one harness change, because of yesterday's guessed hash in
`process-log.md`: the log-after rule asks for a real hash and a guessed one
still got written, so the rule alone is not a sensor. Add
`scripts/check-log.ts`: read `process-log.md`, collect every 7–40 character
hex token in a *Citation* line, and `git cat-file -e <sha>^{commit}` each one;
exit non-zero naming any that does not resolve, and fail on an entry whose
citation line is empty or reads `(no commit)` with no justification. Wire it
in as `"check:log"` and add it to `check` in `package.json`.

**Prove it both ways**: run it against the log as it stands (green), then
edit one hash to nonsense and run it again (red, naming that hash), then put
the hash back. Say in your report that you did both — a sensor you have only
seen agree with you is not yet a sensor.

Commit: `Check process-log citations resolve`. Log it `[harness]`.

## Step 1 — The cast

From `docs/people.md`. Delete `idris-fenn.md`, `marisol-quaye.md` and both
`.avif` portraits. Create `wen-adeyemi.md`, `hana-okabe.md`,
`nadia-petrova.md`, `grace-nakamura.md` with the fields the notes give and
the two-paragraph body each one carries. **No `photo` and no `photoAlt`** —
the schema allows an entry without one, and the SVG portraits are a later
pass. Note that the `people` schema is strict, not loose: a key it does not
declare is dropped, so nothing goes in frontmatter that the notes do not put
there.

Rewrite `src/pages/people/index.mdx`'s body to the two sentences the notes
specify, then the existing grid.

`pnpm check`. Then `pnpm check:evidence` — **two of its four image lines
should now be gone**, because a deleted file passes. Report which. Commit:
`Replace the starter cast with the course's four teachers`.

## Step 2 — The hero pool: module, red tests, page

**The module.** `src/data/heroes.ts`: a typed readonly array of the thirteen
heroes from `course-plan.md` §5, in first-appearance order. Fields: `id`
(kebab-case), `name`, `role`, `firstWeek`, `slug`, `liquipedia`. Helpers
`officialUrl(hero)` → `https://www.dota2.com/hero/<slug>` and
`liquipediaUrl(hero)`. No numbers.

**The slugs are not yours to guess.** The author's verified list has not
arrived yet, so today every `slug` is the hero's name lowercased with spaces
removed, **and the module carries a comment at the top saying the slugs are
unverified and are replaced from the author's checked list before ship.** Put
the same fact in your report. Flag Wraith King specifically: its internal
name is `skeleton_king`, so its public slug is the one most likely to be
wrong.

**The tests, red first**, in `spec/hero-pool.test.ts`, reading the built API
and importing the module:

1. The pool has exactly thirteen entries; `id`s and `slug`s are each unique.
2. Every lecture's `meta.heroes` (an array of ids, possibly empty) refers
   only to pool ids, and every hero's `firstWeek` equals the lowest `week` of
   a lecture listing it.
3. Every `meta.abilities` entry's `hero` is an id in that lecture's
   `meta.heroes`.
4. Every `https://www.dota2.com/hero/…` link in the built site uses a pool
   slug (read `dist/**/*.html`; assert the set found is a subset of the
   pool's).

Run `pnpm check`: 2 is red, 4 is probably vacuously green. Commit:
`Add the hero pool module and its tests (red)`.

**The page.** `src/pages/heroes/index.mdx` (`title: Hero pool`): one
paragraph on why the course fixes thirteen heroes and sends full kits to the
official pages, then a table from the module — hero, role, first appears (a
link to that week's lecture), official page, Liquipedia. Add
`{ text: "Heroes", href: "/heroes/" }` to `links` in `src/site-config.ts`,
after Assessment. `pnpm check`. Commit: `Add the hero pool page`.

## Step 3 — The weekly-page contract, red first

In `spec/course-structure.test.ts` or a sibling, assertions that apply **only
to lectures whose `meta.draft` is not `true`**. The draft flag is the gate:
the moment a week is un-drafted it must satisfy the contract.

For each non-draft lecture:

1. Its body has these `##` headings in this order and no others: *This week's
   decision · Mechanics · The resource lens · Before the lecture · This
   week's hero · This week's item · After this week you can…* The hero and
   item headings are present exactly when `meta.heroes` / `meta.items` are
   non-empty (weeks 1 and 12 have neither).
2. `meta.abilities` has at most two entries; each has non-empty `hero`,
   `name` and `why`.
3. `meta.tutorial` is a non-empty string.
4. `meta.teachers` is non-empty.
5. `meta.deck_reason`, where present, is a non-empty string that differs from
   the day-1 stub sentence, and the twelve reasons are not all identical.

`pnpm check`: green, vacuously — every lecture is still a draft. Commit:
`Add the weekly-page contract (gated on draft)`.

## Steps 4–7 — The twelve weeks, four at a time

Batches: **weeks 1–3, 4–6, 7–9, 10–12.** One commit each:
`Write weeks 1–3`, and so on.

Frontmatter per week:

```yaml
title: <unchanged>
description: <unchanged unless the notes give a better one>
week: <n>
date: <unchanged>
decision: <unchanged>
teachers: [<ids from docs/people.md>]
slides: /decks/week-02/            # week 2 only
deck: none                         # every other week
deck_reason: <this week's own reason, from weeks.md — never the day-1 stub>
heroes: [<ids>]                    # [] for weeks 1, 12
abilities:                         # at most two, across all heroes that week
  - hero: <id>
    name: <ability>
    why: <one sentence from weeks.md>
items: [<item names>]              # [] where none
tutorial: <the Valve section>
related: [...]                     # keep what is there
```

`draft: true` is removed in the same edit. Body: the seven sections in order,
written from that week's notes. Length is whatever the notes support — a thin
section stays short. Week 1 carries the LoL bridging passage under
*Mechanics* behind its own `###`.

Four things to get right, because they are the ones an agent smooths away:

- **Week 5 has three heroes and zero abilities**, deliberately, and the page
  says so. Do not add an ability to make the section look fuller.
- **Week 5's item section is the one real hole today** — `OPEN` until the
  data file lands. One honest sentence, nothing more.
- **Week 6's position on a beginner's first role is `PROPOSED`** — write it
  as the course's own position, first person plural, no hedging.
- **Weeks 3, 10 and 11 name the patch** where the notes say to.

After each batch `pnpm check` — the contract and hero-pool suites now bite on
the weeks you just un-drafted. Report any red before continuing.

## Step 8 — Home-page and card artwork

The two remaining `check:evidence` image gates, and neither can be passed by
deleting a page: `src/assets/images/hero-home.avif` and `card.png`.

1. Ask an Opus subagent for **three concepts** for one in-house illustration
   that works as the home hero and, cropped to 1200×630, as the link card:
   abstract, flat, two or three Slop brand colours, no Valve imagery, no
   text. The obvious material is three lanes, an Ancient at each end, and the
   space between. Two sentences and a rough SVG sketch each. **Paste all
   three and wait for the author's choice** — this is the one step that
   blocks.
2. Implement the chosen one as `hero-home.svg` and a 1200×630 `card.svg`.
   Delete the `.avif` and the `.png`. Update the import and `heroImageAlt` in
   `src/pages/index.astro` (removing the last `STARTER_CONTENT` comment
   there) and `socialImage` / `socialImageAlt` in `src/site-config.ts`. If
   the theme's card re-encoding refuses SVG, rasterise the card to PNG with
   `sharp` in a one-off script you do not commit, commit the PNG, and keep
   the SVG beside it as the source.
3. `pnpm check`, then `pnpm check:evidence`: **all four image lines should
   now be gone.** Commit: `Replace the starter hero and card artwork`.

## Step 9 — Lobby Labs: the name and the contract

Set `sessionLabels` in `src/site-config.ts` to
`{ singular: "Lobby Lab", plural: "Lobby Labs" }`. The collection key, the
refs and the `/sessions/` URL do not change — the platform reads those names.

Rewrite `src/pages/sessions/index.astro`'s body (it currently explains the
label mechanism to a developer, which no student needs): two short
paragraphs from `labs.md` — that every week has a Lobby Lab on the Thursday,
which is the day before each assignment deadline, so the last chance to ask
in person is always in the room; and what a Lobby Lab is for, in the terms of
the genre rule. Then the existing grid.

Then the contract, in `spec/lobby-labs.test.ts`:

1. Exactly twelve sessions, weeks 1–12, one each.
2. Every session's `date` is later than its week's lecture `date` and inside
   the same calendar week.
3. Every session declares `related:` to its week's lecture.
4. Every session's `spec` has exactly three non-empty lines.
5. Every session's `meta.needs_others` is a non-empty string, and the twelve
   are pairwise distinct.
6. No session title ends in a question mark, and every lecture title does.

Red on all six (the two starter sessions are still there). Commit:
`Name the Lobby Labs and add their contract (red)`.

## Steps 10–12 — The twelve Lobby Labs, four at a time

Batches **1–4, 5–8, 9–12**. Delete `01-getting-started.md` and
`02-first-review.md` in the first batch. Files `week-01.md` … `week-12.md`
under `src/content/sessions/`.

```yaml
title: <the verb phrase from labs.md — never a question>
description: <one sentence, 40+ characters>
week: <n>
date: <from the labs.md table>
teachers: [<same as that week's lecture>]
needs_others: <the one-sentence reason from labs.md>
spec:
  - <what to bring, as a checkable line>
  - <what you did>
  - <how you know it went well>
related:
  - lectures/week-<nn>
```

Body: three short sections — *What to bring · How it runs · How you know it
went well* — from the notes. **Nothing that explains the week's decision
again**; that is the lecture's job and repeating it is the failure this
contract exists to prevent. Where the notes say a lab carries a deadline
reminder or a connection to an assignment, say it in one line and link the
assessment page.

Week 12 is dated the **Tuesday**, deliberately, and the page says why.

`pnpm check` after each batch. After the last one **every suite is green**.
Commits: `Write Lobby Labs 1–4`, and so on.

## Step 13 — Look at it

`pnpm build && pnpm preview`, note the port it actually binds. Screenshot at
1920×1080 and 390×844: the home page, the hero pool, the people index, one
person's page, weeks 2, 6 and 10, and Lobby Labs 2 and 11 — non-adjacent, the
way a marker reads. Report what you see and **say plainly what you did not
look at**. Change nothing without a go-ahead.

Then `pnpm check:evidence` and report its remaining reds verbatim. By now it
should be down to `PROCESS.md` and its two placeholder citations. That list
is tomorrow's brief.
