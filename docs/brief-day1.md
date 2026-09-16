# Day 1 brief — scaffold the site's pages from the course plan

Read `docs/course-plan.md` in full before doing anything. It is the source of
truth for every fact below; this file only says what to build today and in
what order.

## How to work through this brief

- Do the steps **in order**. After each step: run `pnpm check`, commit, then
  **stop and report** what changed, what `pnpm check` said, and anything you
  were unsure about. Wait for a go-ahead before the next step. The human
  adjudicates; you surface the choice.
- **One commit per step**, message in English, present tense, first line
  ≤ 72 characters. After each commit, append the entry to `process-log.md`
  as `CLAUDE.md` describes (log after, cite the real hash).
- **Never edit `PROCESS.md`.** It is written by the author, on request.
- **No numbers.** The 7.41f data file does not exist yet. No page written
  today may state a gold cost, a cooldown, a damage value, a stat, a timing in
  minutes, or a last-hit count. Describe the mechanic; leave the figure for
  the data layer. If a sentence needs a number to make sense, rewrite the
  sentence.
- **No placeholder prose.** Nothing that reads as "content goes here",
  "TODO", "lorem" or a starter sentence with the nouns swapped. A page that
  is genuinely not written yet says one true thing and carries `draft: true`.
- **Remove every `STARTER_CONTENT` marker in a file you touch**, and never
  leave a page that still contains one half-replaced. Files you do not touch
  today keep their markers; they are tomorrow's work.
- Keep the platform as it arrived: the Slop branding, the four collections and
  their keys, `astro.config.ts`, the generated API. Everything else is ours.
- Any hero, item, source or policy you write about must appear in
  `docs/course-plan.md`. If it is not there, it is not in the course.
- **Two things are author-written, never agent-written**: `docs/course-plan.md`
  (propose a change in your report; do not edit it) and every slide deck under
  `src/decks/` (see step 5 for the one exception, a title-only stub). When the
  author's deck arrives, your job is to add the file, build, screenshot every
  slide at both marking viewports, and report — not to write or rewrite
  slides.

## Out of scope today

Do not start any of these, even if a step seems to invite it: the 7.41f data
file and `FACTS.md`; hero slugs; the Hero Pool page; the Hall of Fame page;
the `sessions` and `people` collections (leave both untouched); the flagship
deck beyond the one-slide stub in step 5; artwork of any kind (the hero image
stays as it is today); navigation changes in `src/site-config.ts` other than
what step 4 names.

---

## Step 0 — Baseline

1. Confirm this working copy is the git clone with an `origin` remote
   (`git remote -v` shows `comp4020-ass2-…`). If it is not, stop and say so.
2. `pnpm install`, then `pnpm check`. Record whether the untouched starter is
   green. If it is red, stop and report the failure before anything else.
3. `/comp4020:start` already made commits (the `CLAUDE.md` merge and
   `spec/assignment-2.test.ts`). If `process-log.md` has no entry for each of
   them, write those entries now — the backstop in `CLAUDE.md`'s logging rule
   — citing each commit's real hash from `git log`.
4. These two files started life in a folder called `prompt docs`. Rename it:
   `git mv "prompt docs" docs` (or a plain `mv` while they are still
   untracked). Every path in this brief assumes `docs/`.
5. Commit both: `Add course plan and day-1 brief`. Log it as `[judgement]`,
   and say in the entry that this brief was itself revised after the agent
   reviewed it — the tone rule, the numbers rule, the step 5/6 split and the
   step 9 paths below are all amendments made in response to that review.
   The point of recording it is that the brief is evidence: a marker should be
   able to see that the plan was argued with before it was executed, not
   handed down and followed.

## Step 1 — Harness: course rules in `CLAUDE.md`

Append the following section to the end of `CLAUDE.md`, verbatim, under a
heading `## Course rules (SLOP1904)`. Do not reword it.

```markdown
## Course rules (SLOP1904)

`docs/course-plan.md` is the source of truth for the course. A page that
disagrees with it is wrong; if the plan needs to change, change the plan first
and cite the commit.

- **One decision per week.** Every lecture's frontmatter carries exactly one
  `decision`, and no two weeks share one. Mechanics are taught as the tools
  that answer that week's decision, not as a topic list.
- **At most two abilities per week**, each with a one-line *why this week*.
  The full kit is an external link to the official hero page; ability text is
  never copied onto the site. A3 is where the full breakdown happens, by the
  student.
- **Numbers come only from `FACTS.md`, never from memory.** Until that file
  exists, pages state no figures at all. The only patch string that may appear
  anywhere on the site is `7.41f`.
- **In-house visuals only.** No Valve artwork, no screenshots unless the
  trade-off is written up in `PROCESS.md`. Every starter placeholder image is
  replaced or removed before shipping.
- **A deck is a lecture, not a page copy**: fewer words, more pictures, one
  judgement per slide. A lecture without a deck says so in frontmatter
  (`deck: none` with a non-empty `deck_reason`).
- **Decks are written by the course author, not the agent.** The agent may
  create a title-only stub so the build and the deck-link check stay green,
  fix a syntax error the author asks about, and verify slides in a browser.
  It does not write, expand or "improve" slide content.
- **Assessment weights sum to exactly 100.** Nothing outside the four
  assignments carries marks; the Hall of Fame carries none.
- **Hero slugs are verified against the live official site before use.** An
  unverified slug is not written down anywhere.
- **Satire lives in the titles and the opening line; the body is always
  sincere.** The course's name is the joke and the framing may carry it; the
  prose underneath teaches straight. Never the generic-encyclopaedia register
  either — if a paragraph could sit on any course's site, rewrite it or delete
  it.
- **Twelve weeks that repeat one another is the failure to avoid.** A weekly
  page is written from its decision outward; the fixed section headings are
  the same, the content under them is not interchangeable.
```

`pnpm check`, commit: `Add course rules to CLAUDE.md`.

## Step 2 — Red first: `spec/course-structure.test.ts`

`spec/assignment-2.test.ts` already exists from `/comp4020:start`: it asserts
the **published** A2 spec (the allocated SLOP digits, twelve weeks covered,
weights summing to 100, at least one lecture linking a built deck). Read it
first and **do not duplicate any of its assertions**. The new file asserts the
**course's own** promises — the things `docs/course-plan.md` commits to that
no published spec asks for.

Write `spec/course-structure.test.ts` alongside `spec/data-integrity.test.ts`,
reading `dist/api/index.json` the same way it does (nodes carry `type` and
`meta`; declared and custom frontmatter keys both land in `meta`). Assert the
**contracts**, through the parsed structure, never through string spelling:

1. Every assessment's `meta.released` (a week number) is strictly less than its
   `meta.week` (the due week).
2. There are exactly twelve `lectures` nodes (not "twelve weeks covered by any
   node" — twelve lecture pages); their `meta.week` values are exactly the set
   1…12 with no repeats; sorting by `meta.week` and by `meta.date` gives the
   same order. If `assignment-2.test.ts`'s coverage check already counts
   lecture nodes alone, drop this one and say so.
3. Every lecture has a non-empty string `meta.decision`, and the twelve are
   pairwise distinct.
4. Every lecture either has `meta.slides` matching `/^\/decks\/[a-z0-9-]+\/$/`
   or has `meta.deck === "none"` together with a non-empty string
   `meta.deck_reason` — one or the other, not both, not neither.
5. The assessment node whose `id` ends in `assignment-4` has `meta.week`
   greater than 11 (check how `data-integrity.test.ts` sees ids before
   assuming the prefix).

Run `pnpm check` and **confirm the suite is red** (the starter has two lectures
and no `decision` fields). Report which assertions fail. Commit the red test:
`Add course-structure spec (red)`.

## Step 3 — The course record

In `src/course-config.ts`, replace the placeholder record and remove its
`STARTER_CONTENT` comment:

```ts
code: "SLOP1904",
title: "Welcome to Dota. You Will Lose.",
session: "Semester 1",
year: 2027,
level: 1,
startDate: "2027-02-22",
endDate: "2027-05-28",
description:
  "Dota 2 for people who have never played it, taught one decision at a " +
  "time: which creep to hit, when to leave the lane, who to pick, what to " +
  "buy, when not to fight. Mechanics are the tools that answer each decision.",
tags: ["Dota 2", "game literacy", "decision-making"],
```

Check the description lands inside the 80–300 character window the schema
enforces. `pnpm check` (still red on the lecture assertions; the assessment
ones may change). Commit: `Set the course record for SLOP1904`.

## Step 4 — The four assessments

Delete `src/content/assessments/assignment-1.md` and `final-project.md`.
Create `assignment-1.md` … `assignment-4.md`. Frontmatter for each, from
`docs/course-plan.md` §4:

| file | title | week (due) | released | due | weight |
|---|---|---|---|---|---|
| assignment-1.md | Assignment 1: The last-hit test | 4 | 2 | 2027-03-19T12:00:00+11:00 | 10 |
| assignment-2.md | Assignment 2: Replay review | 8 | 6 | 2027-04-30T12:00:00+10:00 | 20 |
| assignment-3.md | Assignment 3: A guide to your hero | 11 | 9 | 2027-05-21T12:00:00+10:00 | 30 |
| assignment-4.md | Assignment 4: The best-of-three | 12 | 11 | 2027-05-28T12:00:00+10:00 | 40 |

(Canberra is on daylight time until the first Sunday of April, hence `+11:00`
for A1 and `+10:00` after. If the build normalises these, that is fine.)

Each file also carries `description` (one sentence, 40+ characters), a `spec:`
list of 3–4 lines a marker could check, and — for A4 only — a `marking:`
block, `mode: weighted`, criteria `Team review 62.5`, `Individual reflection
25`, `Participation 12.5`. A1–A3 carry no `marking:` block; say how they are
marked in a sentence of prose instead. No `related:` today — the build fails
on a ref to a lecture that does not exist yet, and the lectures arrive in
step 5, which adds the edges from its side.

Body of each page, in this order: `## The brief` (the task as a blockquote,
then one or two paragraphs on what a strong response looks like), `## What you
submit`, `## How it is marked` (prose; omit for A4, which renders its table).
A4's page must state the team formation rule, the tutor-as-coach rule and the
captain rule from the plan's policies list, and must link to the policies
page with a markdown link. A1 says the threshold is published when the
assignment opens; it does not state one.

Then rewrite `src/pages/assessments/index.mdx`: keep the frontmatter shape;
replace the body with two short paragraphs — that the course has four
assignments and no exam, and that the weights rise as the semester goes
because each assignment builds on the last — followed by `<AssessmentsGrid />`.
Do not restate weights or dates in prose; the grid renders them.

`pnpm check`. Commit: `Replace starter assessments with the four assignments`.

## Step 5 — The deck swap, and weeks 1 and 2

Originally one large step covering all twelve lectures. Split in two after
review: the only genuine interdependency is the deck, and a single commit
touching fifteen files is the least legible commit in a history that carries
45% of the mark. This step is the interdependent core; step 6 is purely
additive. Both build green.

What forces this step to be atomic: the starter's week 1 lecture links
`/decks/week-01/`, the week 2 lecture will link `/decks/week-02/`, and the
build's link checker rejects a link to a deck that does not exist. So the deck
swap and the two lectures that point at the decks land together.

**Overwrite `week-01.md` and `week-02.md` in place — do not delete and
recreate them.** The starter's sessions carry `related:` edges to
`lectures/week-01` and `lectures/week-02`, and the sessions collection is out
of scope today, so those refs must never stop resolving. Keeping the filenames
means they never do.

**The deck stub.** Delete `src/decks/week-01.deck.mdx`. Create
`src/decks/week-02.deck.mdx` with frontmatter `title: Should I hit this
creep?` and a one-sentence `description`, and **one slide only, containing
nothing but the title as a heading.** No second line, no second slide. The
stub exists so the week 2 lecture's `slides:` link resolves and
`assignment-2.test.ts`'s deck check stays green; the deck itself is written
by the course author and replaces this file when it is ready. If the build
fails because the astromotion integration needs something more, report the
exact error and stop — do not work around it.

**The lectures.** Rewrite `src/content/lectures/week-01.md` and `week-02.md`
in place. Frontmatter per file:

```yaml
title: <the week's decision, as a question, from the plan's §3 table>
description: <one sentence, 40+ characters, saying what the week teaches>
week: <n>
date: <the Monday from the plan's §2 table>
decision: <the decision, identical to the title>
deck: none
deck_reason: This week's material is a page and a practice task; nothing in it needs slides.
draft: true
```

Exception: `week-02.md` omits `deck`/`deck_reason` and instead has
`slides: /decks/week-02/`, and gets `related: [assessments/assignment-1]`.

No `teachers:` today. Body of each stub: **one paragraph**, two to four
sentences, saying what decision the week is about and why it comes at this
point in the sequence (the plan's §3 table and the "Where the course
disagrees with Valve" note give you the reasoning for week 2). No section
headings yet, no hero, no item, no numbers.

`pnpm check`. Still red — ten lectures are missing, and that is step 6's job.
Report which assertions remain red and confirm the build itself is clean.
Commit: `Swap the starter deck for the week 2 stub`.

## Step 6 — The remaining ten lectures

Purely additive: nothing here is referenced by anything that already exists,
so this step cannot break a link.

Create `week-03.md` … `week-12.md`, same frontmatter shape as step 5's
`week-01.md` (all of them `deck: none` with a `deck_reason`, all `draft:
true`). Week 12's title is `Capstone: the best-of-three` and its `decision` is
the same string. `week-11.md` gets `related: [assessments/assignment-4]`.

Same body rule: one paragraph each, two to four sentences, written from that
week's decision outward. **Twelve paragraphs that could not be swapped between
weeks** — this is the single thing the brief is most concerned about, and the
one a marker notices fastest.

Rewrite `src/pages/lectures/index.mdx`'s body: one sentence that the course
runs one decision per week for twelve weeks, and that the order is the order
in which a player learns to decide, not the order of Valve's tutorial. Then
`<LecturesGrid />`.

`pnpm check`. **Both spec suites should now be green** — `assignment-2` and
`course-structure`. If any assertion is still red, report it; do not weaken a
test to make it pass. Commit: `Add the remaining ten lecture stubs`.

## Step 7 — Policies stub

Rewrite `src/pages/policies/index.mdx`. Keep the frontmatter shape (update the
description to fit the course). Body: the `# Policies and support` heading,
one sentence that the page holds the course-wide rules the assignment pages
link to, then three `##` headings with **one sentence each**, from the plan's
policies list: `## Teams and captains`, `## The Hall of Fame carries no
marks`, `## The patch is pinned to 7.41f`. Remove the starter marker.

`pnpm check`. Commit: `Stub the policies page with the three course rules`.

## Step 8 — The home page

Rewrite the authored part of `src/pages/index.astro` (leave the hero image
and its alt text exactly as they are; delete only the `STARTER_CONTENT`
comment lines). Replace the three `<h2>` sections with:

- `## What this course is` — the pitch from the plan's §1 ("every beginner
  resource is a reference or a checklist; none is a course"), and the spine:
  twelve weeks, one decision each, mechanics as the tools that answer it.
- `## Who it is for` — complete beginners; the one-paragraph bridging note
  for LoL players in week 1; no other prerequisites. Say plainly that they
  will lose a lot, and that the course is arranged so the losses teach
  something.
- `## Where to go next` — keep the `CardGrid`, but the three cards are
  Lectures (`/lectures/`), Assessment (`/assessments/`) and Policies
  (`/policies/`). Card text one sentence each, specific to this course.

Tone: the title is the joke; the page under it is sincere. No exclamation
marks, no "dive in", no "unlock", no "journey".

`pnpm check`. Commit: `Write the home page introduction`.

## Step 9 — Look at it

`pnpm build && pnpm preview`, note the port, and screenshot the home page,
the assessments index, `assignment-4`, `lectures/week-02` and the policies
page at 1920×1080 and 390×844 (the recipe is in `CLAUDE.md`). Report
anything that looks wrong; change nothing without a go-ahead. Say plainly what
was and was not looked at.

Then run `pnpm check:evidence` **for information only** — it is expected to
be red today (untouched artwork, untouched sessions/people markers, the
template `PROCESS.md`). Report its output verbatim so tomorrow's list is
exact. No commit for this step unless the process log needs one.

**The artwork gate, written out so tomorrow is not a surprise.** For an
`ass2` repo, `check:evidence` hashes exactly four starter files and fails on
any that still match the shipped image:

- `src/assets/images/card.png` — the link-preview card, named by
  `socialImage:` in `src/site-config.ts`
- `src/assets/images/hero-home.avif` — the home page hero, imported by
  `src/pages/index.astro`
- `src/content/people/idris-fenn.avif`
- `src/content/people/marisol-quaye.avif`

The check is `existsSync(path) && sha256(path) === starterHash`, so **deleting
a file passes it just as well as replacing one**. Dropping a portrait along
with the person it belonged to is a design decision, and so is an image-free
treatment; neither is a shortcut. This matters for the schedule: the artwork
gate can be closed on the day the placeholder people are replaced, without
waiting on any drawing getting made.
