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
3. The two planning files may have been copied in under a folder named
   `prompt docs/`. If so, `git mv "prompt docs" docs` — the path every
   reference below uses is `docs/`.
4. `/comp4020:start` already made commits (the `CLAUDE.md` merge and
   `spec/assignment-2.test.ts`). If `process-log.md` has no entry for each of
   them, write those entries now — the backstop in `CLAUDE.md`'s logging rule
   — citing each commit's real hash from `git log`.
5. Copy `docs/course-plan.md` and this file into the repo under `docs/` if
   they are not already there. Commit: `Add course plan and day-1 brief`.
   Log this commit as `[judgement]`: the brief was revised after the agent's
   own review of the schedule (content before data, artwork before the last
   day, step 5 split, tone rule tightened, a draft check added for Friday).

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
- **Numbers come only from `FACTS.md`, pinned to 7.41f, never from memory.**
  Until that file exists, pages state no figures at all. The only patch string
  that may appear anywhere on the site is `7.41f`.
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
- **Satire lives in titles and framing lines only; body prose is sincere.**
  The course title, a week's title and a one-line lead may joke. The paragraph
  under them coaches or explains, plainly. Never the generic-encyclopaedia
  register: if a paragraph could sit on any course's site, rewrite it or
  delete it.
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

The page shape follows the one COMP4020's own assignment pages use (the
site runs on the same theme, so the rendered result will look like a sibling
of https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/assessments/assignment-1/
by construction). Borrow the **structure**, never the sentences — the marker
wrote those pages and will recognise his own prose with the nouns swapped.

Body of each page, in this order:

- `## The brief` — the task as a one-sentence blockquote, then one or two
  paragraphs on what a strong response looks like and the judgement it is
  testing. For A2 name Day9's replay reviews as the model of the form; for A3
  say the guide should be usable by a stranger in a lobby, not a wiki entry.
- `## What you submit` — the artefact and its format, and any evidence that
  goes with it (A1: the screenshot and what must be visible in it; A2: the
  report and the replay ID; A3: the guide; A4: the team review, the
  individual reflection, and the match result).
- `## How it is marked` — today, one or two sentences. Band descriptors
  (the HD / D–Cr / P / N shape COMP4020 uses) are the author's to write and
  arrive on Friday; do not invent them. Omit the heading for A4, which
  renders its criteria table from frontmatter.
- `## Key dates` — two lines: *Opens:* week N · *Due:* the date. No feedback
  date; that decision has not been made.

A4's page must state the team formation rule, the tutor-as-coach rule and the
captain rule from the plan's policies list, and must link to the policies
page with a markdown link. A1 says the threshold is published when the
assignment opens; it does not state one.

Then rewrite `src/pages/assessments/index.mdx`: keep the frontmatter shape;
replace the body with one opening sentence in the pattern "Four assignments
carry the whole course between them, and there is no exam", one short
paragraph that the weights rise through the semester because each assignment
builds on the last (last-hitting → reading a replay → writing a guide →
playing and reviewing a real match), and a pointer sentence to the policies
page for the rules that apply to all four — followed by `<AssessmentsGrid />`.
Do not restate weights or dates in prose; the grid renders them.

`pnpm check`. Commit: `Replace starter assessments with the four assignments`.

## Step 5 — The deck stub and weeks 1–2

Two commits for the lectures, because one commit that deletes two pages,
creates twelve, swaps the deck and rewrites the index is the hardest commit
in the history to read, and this history is 45% of the mark. The only real
dependency is the deck: the starter week 1 lecture links `/decks/week-01/`,
the new week 2 lecture links `/decks/week-02/`, and the build's link checker
rejects a link to a deck that does not exist. So the deck swap and weeks 1–2
land together; weeks 3–12 follow on their own.

**The deck stub.** Delete `src/decks/week-01.deck.mdx`. Create
`src/decks/week-02.deck.mdx` with frontmatter `title: Should I hit this
creep?` and a one-sentence `description`, and **one slide only, containing
nothing but the title as a heading.** No second line, no second slide. The
stub exists so the week 2 lecture's `slides:` link resolves and
`assignment-2.test.ts`'s deck check stays green; the deck itself is written
by the course author and replaces this file when it is ready. If the build
fails because the astromotion integration needs something more, report the
exact error and stop — do not work around it.

**Weeks 1 and 2.** Replace the contents of `src/content/lectures/week-01.md`
and `week-02.md` (same filenames, so the ids and the starter session's
`related:` edge keep resolving). Frontmatter per file:

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

`week-02.md` omits `deck`/`deck_reason` and instead has
`slides: /decks/week-02/` and `related: [assessments/assignment-1]`. No
`teachers:` today — drop the starter's.

Body of each stub: **one paragraph**, two to four sentences, saying what
decision the week is about and why it comes at this point in the sequence
(the plan's §3 table and the "Where the course disagrees with Valve" note
give the reasoning for week 2). No section headings yet, no hero, no item, no
numbers.

`pnpm check` (the twelve-lecture assertions stay red; nothing else should
change colour). Commit: `Replace the starter deck and lectures for weeks 1–2`.

## Step 6 — Weeks 3–12

Create `week-03.md` … `week-12.md` with the same frontmatter shape. Week
12's title is `Capstone: the best-of-three` and its `decision` is the same
string. `week-11.md` gets `related: [assessments/assignment-4]`.

Same body rule: one paragraph each, two to four sentences, from the decision
outward, with the reasoning for its place in the sequence (week 11's is the
Valve note). Twelve paragraphs that could not be swapped between weeks.

Rewrite `src/pages/lectures/index.mdx`'s body: one sentence that the course
runs one decision per week for twelve weeks, and that the order is the order
in which a player learns to decide, not the order of Valve's tutorial. Then
`<LecturesGrid />`.

`pnpm check`. **Both spec suites should now be green** — `assignment-2` and
`course-structure`. If any assertion is still red, report it; do not weaken a
test to make it pass. Commit: `Add lecture stubs for weeks 3–12`.

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
be red today. The known reds: the four starter images it hashes
(`src/assets/images/card.png`, `src/assets/images/hero-home.avif`,
`src/content/people/idris-fenn.avif`, `src/content/people/marisol-quaye.avif`
— a deleted file passes, so the two portraits go with the starter people on
Friday and only the hero and card need new artwork, on Thursday), the
`STARTER_CONTENT` markers still in `sessions/`, `people/` and the hero-image
comment, and the template `PROCESS.md`. Report its output verbatim and say
whether anything is red that is not on that list. No commit for this step
unless the process log needs one.
