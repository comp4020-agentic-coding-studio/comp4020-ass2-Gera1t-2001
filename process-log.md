# Process log

One entry per commit, written after that commit exists and citing its real
hash, as `CLAUDE.md` describes. This file is the raw material `PROCESS.md` is
drafted from; it is not itself the submission.

---

- **Date/time:** 2026-09-16, early afternoon
- **Tag:** [judgement]
- **What happened:** The `/comp4020:start` skill carries the previous
  deliverable's `CLAUDE.md` into the new repo. Last week's harness
  (`comp4020-crit5`) opened with four sections describing a static
  HTML/CSS/TypeScript site built by Vite — the platform every weekly crit had
  used. This repo is not that: it is provisioned from a fixed Astro
  course-site template, and its own `README.md` states there is no stack
  choice to make here.
- **What I did instead of the obvious thing:** The obvious merge is additive —
  keep everything, on the principle that a stale rule is cheaper than a lost
  one. I dropped the four platform sections instead (the intro, the
  link-preview card, the checks summary, the "this file is yours" framing) and
  kept only the rules that survive a change of platform: the verification
  lessons, the assert-meaning rule, the model-choice rule and the process
  logging conventions. A stale rule is cheap; a rule that confidently
  describes the *wrong platform* is not — it tells the agent to look for
  `public/card.png` and `index.html` in a repo whose card lives in
  `src/site-config.ts`, and being wrong is worse than being silent.
- **How I knew it was right:** Diffed both files side by side before touching
  anything, and read this repo's `README.md` first to confirm each dropped
  section was already documented here, differently and correctly. Nothing
  dropped was a rule I had written; everything dropped was boilerplate that
  shipped with a different template.
- **Citation:**
  [`6746445`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/6746445)
- **Curated prompt:** `/comp4020:start`

---

- **Date/time:** 2026-09-16, early afternoon
- **Tag:** [harness]
- **What happened:** The template ships only `spec/data-integrity.test.ts`.
  Turning the published Assignment 2 spec into automated backpressure is the
  student's job, and nothing in the repo yet held the published contract.
- **What I did instead of the obvious thing:** Sorted the six published spec
  lines into mechanically checkable and human-judged before writing anything,
  and only wrote tests for the first group — the assigned SLOP code digits,
  twelve-week coverage, assessment weights summing to 100, and at least one
  lecture linking a deck that actually built. "Deployed and live at both
  marking viewports" and "evidence of process" were left deliberately
  untested: no assertion holds them, and pretending otherwise would have
  produced a green suite that proves less than it appears to. Assertions read
  the built `dist/api/index.json` rather than the source frontmatter, so they
  check what shipped rather than what was written.
- **How I knew it was right:** Ran the suite against the untouched starter:
  four assertions green, one red. The red one is the twelve-week coverage
  check, and it is red for the true reason — the placeholder content only
  carries weeks 1, 2, 6 and 12. A test that passed on the starter would have
  been asserting nothing.
- **Citation:**
  [`d7b7667`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/d7b7667)
- **Curated prompt:** `/comp4020:start`

---

- **Date/time:** 2026-09-16, early afternoon
- **Tag:** [routine]
- **What happened:** Two commits existed with no log entry, because
  `/comp4020:start` ran before this repo had a `process-log.md` to write into.
- **What I did instead of the obvious thing:** Nothing clever — applied the
  backstop in `CLAUDE.md`'s logging rule, which exists for exactly this case,
  and wrote both entries against their real hashes rather than starting the
  log from today and letting the first two commits go unrecorded.
- **How I knew it was right:** `git log` gave both hashes; each entry cites
  the one it describes.
- **Citation:**
  [`46349d3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/46349d3)

---

- **Date/time:** 2026-09-16, early afternoon
- **Tag:** [judgement]
- **What happened:** The course plan and the day-1 build brief had been
  written by hand, outside the repo, in a folder called `prompt docs`. The
  brief refers to them throughout as `docs/course-plan.md`.
- **What I did instead of the obvious thing:** They could reasonably have
  stayed outside the repo — they are working documents, not part of the site,
  and this course keeps transcripts out of repos that later flip public. I
  committed them instead, renamed to `docs/`. The reason is evidential: a
  course plan whose commit predates every page it describes is the strongest
  available corroboration that the course was designed rather than generated,
  and Assignment 2 weights legibility of process above the artefact itself.
  The same file also gives the agent a single source of truth to be held to,
  which is what the harness rule added next depends on.
- **How I knew it was right:** Checked `docs/` did not already exist before
  renaming, and that both files contain no credentials or personal material
  before committing to a repo that becomes public at the cutoff.
- **Note added after the fact:** the brief committed here was not the brief as
  written. It was reviewed first — the agent read both documents and argued
  with them before executing anything — and four amendments came out of that
  review: the tone rule, the numbers rule, a fifteen-file step split in two,
  and the artwork gate's exact file list. Those are recorded in the next
  commit. The sequence is the point: the plan was argued with, then amended,
  then executed, and the commit history shows that order rather than a brief
  handed down and followed.
- **Citation:**
  [`c1231ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/c1231ee)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [harness]
- **What happened:** The merged `CLAUDE.md` carried general working rules but
  said nothing about this course, so nothing stopped the agent inventing hero
  abilities, quoting gold costs from memory, or writing twelve interchangeable
  weekly pages — the failure Assignment 2 names explicitly.
- **What I did instead of the obvious thing:** Added the course rules as a
  block of constraints rather than a description of the course. The load-bearing
  ones are negative: no figures at all until a pinned data file exists, at most
  two abilities per week, no Valve artwork, and decks written by the author
  rather than the agent. A rule that says "the course is about decisions" is
  decoration; "pages state no figures at all" is a rule an agent can actually
  be caught breaking.
- **How I knew it was right:** `pnpm typecheck` clean afterwards. The real
  test is the next few steps: the no-numbers rule is what the twelve lecture
  stubs are written under, and a stub that needs a number to make sense has to
  be rewritten rather than fudged.
- **Citation:**
  [`4e5e46c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/4e5e46c)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [harness]
- **What happened:** `spec/assignment-2.test.ts` already asserts the published
  Assignment 2 contract. Nothing asserted the promises the course makes about
  itself — one decision per week, a deck or a stated reason for its absence,
  assignments that open before they are due.
- **What I did instead of the obvious thing:** The obvious move is to write
  these tests once the pages exist, when they can be made green. I wrote them
  against the untouched starter instead and committed them red, so the commit
  history carries a red-to-green pair for each promise rather than a green
  test that has never demonstrated it can fail. Two details were deliberate:
  the assertions read the built `dist/api/index.json` rather than source
  frontmatter, so they check what shipped; and the deck assertion is an
  exclusive or, which catches a lecture that carries both a deck link and a
  `deck: none` — a state that looks fine in either half of the check alone.
  I also checked the existing suite first and dropped nothing as duplicate:
  `assignment-2.test.ts` counts any dated node covering the twelve weeks,
  while this one requires exactly twelve lecture nodes, which is a different
  claim.
- **How I knew it was right:** Ran it and read every failure message. Six red,
  each for the true reason: no `released` key on assessments, two lectures
  rather than twelve, no `decision` on either, week 2 carrying neither a deck
  nor a reason, and no assignment 4 in the API. The one assertion that passed
  — lecture dates ordered like their week numbers — is genuinely true of the
  two starter lectures, so it was left alone rather than forced red.
- **Citation:**
  [`8de67b7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/8de67b7)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [routine]
- **What happened:** The course record was still the template placeholder —
  "Course Title Goes Here", a description about nothing, `tags: ["replace me"]`.
- **What I did instead of the obvious thing:** Nothing unusual; transcribed the
  record from `docs/course-plan.md` §1 and removed the `STARTER_CONTENT`
  marker. The only judgement was keeping the allocated code digits and setting
  the level digit to 1, because the course is written for people who have
  never played a MOBA and the level should say so.
- **How I knew it was right:** The schema enforces an 80–300 character
  description and a code whose first digit matches `level`; I measured the
  description at 214 characters before building, and the build parsed the
  record without complaint.
- **Citation:**
  [`b23935a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/b23935a)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [judgement]
- **What happened:** Before executing the day-1 brief, I read it and the
  course plan and reported on both. Four things came back: the tone rule gave
  the agent three registers to switch between "as the material demands", which
  is an invitation to tonal mush; the numbers rule pointed at "the pinned
  7.41f data file", which is a description rather than a filename; step 5 was
  a single commit touching fifteen files; and the artwork gate — a hard
  submission blocker — was scheduled two days out with no list of what it
  actually checks.
- **What I did instead of the obvious thing:** Amended the brief and the
  harness rather than working around either, and did it in its own commit
  before building anything the amendments affect. `CLAUDE.md` now says satire
  lives in titles and opening lines while the body stays sincere — which is
  what the course plan already said about Purge's model, just never written as
  a rule an agent could be held to. The numbers rule names `FACTS.md`, because
  a rule that names a file can be checked and a rule that describes one
  cannot. Step 5 became steps 5 and 6, with the genuinely interdependent part
  (the deck swap) kept atomic and the ten additive lectures moved out; the two
  lecture files are now overwritten in place rather than deleted and
  recreated, so the starter sessions' `related:` edges to `lectures/week-01`
  and `lectures/week-02` never dangle while the sessions collection is out of
  scope.
- **How I knew it was right:** For the artwork gate I did not take the
  README's summary — I read `scripts/check-evidence.ts` and found the
  condition is `existsSync(path) && sha256(path) === starterHash` over exactly
  four named files. So a deleted file passes, which the brief now records
  along with the four paths. That turns a vague Friday risk into a gate that
  can be closed deliberately. The dangling-ref concern I checked by reading
  the starter sessions' frontmatter rather than assuming.
- **Curated prompt:** "Go with your suggestions — change the three-registers
  rule to: satire lives only in the titles and the framing, the body is always
  sincere" — plus the instruction to record that the brief was revised after
  its own review.
- **Citation:**
  [`26cf061`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/26cf061)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [routine]
- **What happened:** The starter shipped two placeholder assessments, one of
  them called "final project". The course has four assignments and no exam.
- **What I did instead of the obvious thing:** Wrote each brief as a page with
  a reader rather than a specification — each opens with the task as a
  blockquote and then spends most of its length on what separates a strong
  response from a complete one, because that is the part a student cannot get
  from the marking criteria. A1 states no threshold: the figure is pinned to
  the patch and the course keeps its numbers in one place, so the page says
  when the number will appear instead of inventing one. A4 is the only
  assessment carrying a `marking:` block, because it is the only one with
  parts that can come apart.
- **How I knew it was right:** The build validated the schema, including the
  rule that `marking.criteria` weights sum to 100 within an assessment — A4's
  62.5 / 25 / 12.5 is the plan's 25 / 10 / 5 split of forty marks, expressed as
  the schema requires. The link checker passed A4's markdown link to the
  policies page, which is the one internal link written today.
- **Citation:**
  [`97d9594`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/97d9594)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [judgement]
- **What happened:** Committing the four amended rules and the split step, so
  the plan in the repo matches what was about to be built rather than what was
  originally written.
- **What I did instead of the obvious thing:** Amended `docs/brief-day1.md`
  itself rather than only `CLAUDE.md`. The brief is committed evidence; if it
  had gone on saying "three registers as the material demands" while the
  harness said something else, the two would have disagreed in the repo and a
  marker reading both would have had no way to tell which one the work
  followed.
- **How I knew it was right:** `pnpm typecheck` clean; the amendments are
  prose, so the real check is the next two commits behaving the way the
  amended brief says they should.
- **Citation:**
  [`26cf061`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/26cf061)

---

- **Date/time:** 2026-09-16, afternoon
- **Tag:** [judgement]
- **What happened:** The original brief made the twelve lectures and the deck
  swap a single commit, on the grounds that the build's link checker rejects a
  link to a deck that does not exist, so the deck and the lectures pointing at
  it have to land together.
- **What I did instead of the obvious thing:** That reasoning is right about
  the deck and wrong about the other ten weeks. I split it: this commit does
  the deck swap and weeks 1 and 2 — the genuinely interdependent part — and
  the ten additive lectures follow separately. A fifteen-file commit is the
  least readable thing in a history that carries 45% of the mark, and it
  would have hidden the deck decision inside a pile of new pages. The second
  refinement mattered more: the two lecture files are **overwritten in place**
  rather than deleted and recreated, because the starter's sessions carry
  `related:` edges to `lectures/week-01` and `lectures/week-02` and the
  sessions collection is out of scope today. Delete-then-create would have
  left those refs dangling in the intermediate state.
- **How I knew it was right:** `git status` showed `M` on both lecture files
  rather than `D` plus `A`, which is the difference the refs depend on. The
  build's ref resolver and link checker both passed, and astromotion accepted
  the one-slide deck stub. The suite went from six red to two, and the two
  remaining — "exactly twelve lectures" and the twelve-week coverage check —
  are precisely the ten weeks not yet written.
- **Curated prompt:** "Hold on — for step 5, go with the suggestion you made."
- **Citation:**
  [`bf9cfc0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/bf9cfc0)

---

- **Date/time:** 2026-09-16, late afternoon
- **Tag:** [routine]
- **What happened:** Ten of the twelve weeks still had no page, and the
  lectures index described a template rather than a course.
- **What I did instead of the obvious thing:** Wrote each week's paragraph
  from its decision outward and made each one say why it sits where it sits in
  the sequence, rather than describing what it covers. That constraint is what
  stops twelve stubs being interchangeable: a paragraph that explains why
  control comes before vision cannot be moved to another week without becoming
  false. Several weeks earned a specific `deck_reason` rather than the brief's
  boilerplate — week 8's says the slot is being held for a possible second
  deck, which is honest, and week 5's says a table on a slide is a table
  nobody reads.
- **How I knew it was right:** Both suites green, 11 of 11, and I read the
  built API rather than trusting the runner: twelve lecture nodes, weeks 1
  through 12 with no repeats, twelve distinct decisions, exactly one lecture
  linking a deck, weights 10+20+30+40. The two assertions that had been red
  are the two that went green, which is the pair worth citing.
- **Citation:**
  [`58930f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/58930f1)

---

- **Date/time:** 2026-09-16, late afternoon
- **Tag:** [routine]
- **What happened:** The policies page was the starter's, and three rules from
  the plan had nowhere to live — assignment 4's page links to them.
- **What I did instead of the obvious thing:** One sentence per rule and
  nothing else. A policies page invites padding about extensions and integrity
  that the course does not yet have a position on, and an invented policy is
  worse than a short page.
- **How I knew it was right:** The build's link checker resolves assignment
  4's markdown link to `/policies/`, which is what the page exists to serve.
- **Citation:**
  [`6884437`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/6884437)

---

- **Date/time:** 2026-09-16, late afternoon
- **Tag:** [judgement]
- **What happened:** The home page was three placeholder sections. Writing it
  meant deciding what the joke in the course title is allowed to do.
- **What I did instead of the obvious thing:** The satire stops at the title
  and the hero. Under it the page argues a position — that Dota's teaching
  material is all references and checklists and none of it is a course — and
  then says plainly that the student will lose a great deal and that the
  course is arranged on that assumption. The obvious move for a course called
  *Welcome to Dota. You Will Lose.* is to keep being funny below the fold;
  that would have made the whole thing a bit, and a bit is not something
  anyone would enrol in. I also kept the `STARTER_CONTENT` marker on the hero
  artwork, against the brief's instruction to delete it, because the artwork
  genuinely has not been replaced yet and the marker is the only inline record
  of that. Deleting a true marker to tidy a file is how a placeholder ships.
- **How I knew it was right:** Screenshotted five pages at both marking
  viewports off `pnpm preview` — checking first that it bound the port I asked
  for, and that the site answers on its base path and 404s at the bare root as
  the platform intends. Read home, assessments, assignment 4, week 2 and
  policies at 1920×1080 and home and week 2 at 390×844. `draft: true` I
  checked in the built HTML rather than by eye, because a badge that is absent
  looks identical to a badge you failed to notice: the theme renders no draft
  marker at all, so the flag is invisible on the site and survives only in the
  API.
- **Citation:**
  [`f670594`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/f670594)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [harness]
- **What happened:** Day 1 ended with a guessed commit hash written into
  `process-log.md` — caught by eye, immediately, but only because I happened
  to run `git log` straight afterwards. `CLAUDE.md` already required a real
  hash. The rule had been in force the whole time and had not stopped it.
- **What I did instead of the obvious thing:** The obvious response to a rule
  that was broken is to restate the rule more firmly. Instead I wrote the
  sensor: `scripts/check-log.ts` reads every Citation in the log, pulls the
  hex out of it and runs `git cat-file -e <sha>^{commit}` on each, and it is
  wired into `pnpm check` so it runs on every commit rather than when someone
  remembers. `check-evidence.ts` already did this for `PROCESS.md`; the gap
  was that the working log, written all week, had no equivalent until the
  submission gate.
- **How I knew it was right:** Both directions, because a sensor I have only
  seen agree with me is not yet a sensor. Green against the log as it stood;
  then I replaced a real hash with `deadbee` and it went red naming
  `deadbee` specifically, not just failing; then I restored it and it went
  green again. Running it also turned up a **second** defect of a kind I had
  not been looking for: entry 8 had no Citation field at all. Before believing
  that red I printed the entry's field names to rule out my own parser, and
  the field was genuinely absent. So the check caught one fault it was
  designed for and one it was not.
- **Also fixed, unprompted:** `CLAUDE.md` requires every committed file to be
  in English and I had written two curated prompts into the log in Chinese.
  Translated.
- **Citation:**
  [`3fb6ccb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/3fb6ccb)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [judgement]
- **What happened:** Replacing the starter cast broke the build immediately:
  `TypeError: Cannot read properties of undefined (reading 'id')` while
  rendering `/sessions/01-getting-started/`. The two starter sessions carry
  `teachers:` references to the two people I had just deleted, and the brief
  does not replace those sessions until step 10.
- **What I did instead of the obvious thing:** I did not delete the dangling
  `teachers:` field, which was the quickest way back to green, and I did not
  rewrite the two sessions early. I repointed each reference at the teacher
  `docs/people.md` actually assigns to that week — week 1 to Wen, week 2 to
  Hana. That keeps the data true rather than merely valid, and the files are
  rewritten wholesale in step 10 anyway. I also left both files'
  `STARTER_CONTENT` markers in place, against the standing "remove the marker
  in any file you touch" rule, because I repaired a reference rather than
  replaced content: the marker still describes the file accurately, and
  removing a true marker to satisfy a rule about tidiness is how a placeholder
  ships.
- **How I knew it was right:** Read the two files' frontmatter to confirm the
  diagnosis before changing anything rather than inferring it from the error,
  then `pnpm check` green and `pnpm check:evidence` down two image lines —
  the two portraits went with the entries that owned them, and a deleted file
  passes that gate.
- **Citation:**
  [`eb04cfa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/eb04cfa)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [judgement]
- **What happened:** The hero pool needs a `slug` for each of thirteen heroes
  to link out to the official pages, and `CLAUDE.md` forbids writing down a
  slug that has not been verified against the live site. The author's checked
  list has not arrived.
- **What I did instead of the obvious thing:** Two obvious options were both
  wrong. Guessing the slugs silently would put thirteen plausible-looking
  links on the site that nothing would ever question. Blocking until the list
  arrives would idle the whole day over one field. So the module carries the
  pattern-guess *and* a header saying in terms that the slugs are unverified
  and are replaced from the author's list before ship, and I flagged Wraith
  King in particular: its internal name is `skeleton_king`, so it is the one
  whose public slug most likely does not follow the pattern at all.
  Alongside that I wrote the assertion that makes the guess safe to hold —
  every `dota2.com/hero/…` link in the *built* site must use a pool slug — so
  when the verified list lands, correcting the module corrects the site and
  the test proves nothing was left behind.
- **How I knew it was right:** Red for the reason intended: `dragon-knight is
  in the pool but no lecture names it`, because no week names a hero until
  steps 4–7. I also checked the link assertion was not passing vacuously — it
  was, until the hero pool page existed; after it, the built HTML carries
  thirteen distinct slugs and the assertion is comparing real values.
- **Citation:**
  [`9e741fc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/9e741fc)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [harness]
- **What happened:** Writing the weekly-page contract, I had it read each
  lecture's body from `dist/api/index.json`, the way every other spec test in
  this repo reads the built API. The heading assertion passed. It should not
  have — no week has section headings yet.
- **What I did instead of the obvious thing:** Checked the passing test
  instead of moving on, because the day-1 harness notes say a false green is
  the dangerous one and nothing triggers suspicion about it. The API does not
  emit `body` at all: every lecture was being handed `""`, `headingsOf("")`
  returned `[]`, and for a draft-gated suite with no finished weeks that looks
  exactly like success. So the contract now reads frontmatter from the API,
  which is what shipped, and headings from the source markdown — and the test
  says why in a comment, because the built HTML was the other candidate and it
  is worse: the theme adds an `<h2>Related</h2>` of its own, so asserting
  against the rendered page would be asserting about the theme.
- **How I knew it was right:** Demonstrated it responds to a deliberate
  change rather than just agreeing with me. Removed `draft: true` from week 3,
  and the contract immediately bit in three places — no sections, no tutorial
  section, no teachers — naming week 3 each time. Restored the flag and the
  suite went back to green. That is the difference between a gate that is
  vacuous by design and one that is broken.
- **Citation:**
  [`e5c4041`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/e5c4041)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [judgement]
- **What happened:** Weeks 1–3 written from `docs/weeks.md`. Week 1 has no
  hero and no item, and the notes say to explain that absence rather than let
  it read as an oversight — but the contract written in the previous commit
  forbids a *This week's hero* heading on a week whose `heroes` is empty.
- **What I did instead of the obvious thing:** The line that explains why no
  hero is named went into *This week's decision* rather than into a section of
  its own. Adding an eighth heading would have satisfied the note and broken
  the contract; adding an empty hero section would have satisfied both and
  told the reader nothing. The same question came up for "the mistake this
  week fixes", which the notes carry for every week and which is not one of
  the seven sections: it reads as the closing move of the decision section, so
  that is where it sits, consistently, in all three weeks.
- **How I knew it was right:** The contract went from vacuous to biting in the
  same commit, which is the check worth having: three weeks un-drafted, and
  the suite still green means `bodyOf` genuinely found seven headings in weeks
  2 and 3 and five in week 1 — a broken reader would have returned nothing and
  failed. The hero-pool failure moved from `dragon-knight` to `lion`, so
  Dragon Knight and Wraith King are now named and their `firstWeek` values
  agree with the weeks that name them. Read the built API back to confirm
  `draft=false`, teachers, heroes, abilities and items on all three rather
  than trusting the runner.
- **Open, deliberately unwritten:** week 3's note asks whether the page should
  say that 7.41 moved the lane creep meeting point. That is an `OPEN`, so the
  page says only that the two sides are not mirror images and that where the
  waves meet is pinned to 7.41f rather than generalised — one honest sentence,
  and nothing claimed that the author has not decided.
- **Citation:**
  [`2b17a9c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/2b17a9c)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [judgement]
- **What happened:** Weeks 4–6 hit two collisions between the contract written
  in step 3 and what the notes actually ask for. Week 5's item section is an
  acknowledged hole — the attribute items are pinned to 7.41f and 7.41 removed
  some of the components older guides still name — so the page owes the reader
  a sentence saying so, while `items` is legitimately empty. The contract said
  the item heading appears *exactly* when `items` is non-empty, which would
  have forced me to delete the admission. Week 6 carries a substantial
  argument about which position a beginner should start on, and the seven
  fixed sections have no slot for it.
- **What I did instead of the obvious thing:** For week 5 I changed the
  contract rather than the page. Naming an item from memory to fill the
  section is precisely the mistake this course tells students not to make, and
  dropping the heading would have hidden the gap instead of declaring it — so
  the rule is now "a week that names a hero or an item owes the reader that
  section", with the converse deliberately not asserted and the reason written
  into the test. For week 6 I changed the page rather than the contract: the
  argument folded into *This week's decision*, because an eighth heading would
  have broken a structure that exists to stop twelve weeks drifting into
  twelve different shapes, and the course's position on where to start is part
  of answering what you are for.
- **How I knew it was right:** Loosening a test is the moment it stops being
  evidence, so I demonstrated the weakened version still bites, in both
  directions: appended a bogus `## A section that should not exist` to week 6
  and it failed naming that heading; then swapped *Mechanics* above *This
  week's decision* and it failed naming the ordering; restored, and green
  except the known hero-pool red. The hero-pool failure also walked forward
  from `lion` to `lich`, so every hero through week 6 now resolves with a
  `firstWeek` that agrees with the week naming it.
- **Citation:**
  [`9d52396`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/9d52396)

---

- **Date/time:** 2026-09-17, late evening
- **Tag:** [routine]
- **What happened:** Weeks 7–9 written from the notes. No collisions this
  time — the three weeks fit the seven sections without argument.
- **What I did instead of the obvious thing:** Two places invited padding and
  did not get it. Week 7's note on TorteDeLini's in-game guides is a
  recommendation about a third party's work, so it sits at the end of the item
  section as a note rather than becoming a section of its own with a heading
  implying the course teaches it. Week 9's "why wards are here and not in week
  4" is the load-bearing sentence of the week — it is the clearest instance of
  the course's whole ordering argument — so it went in the item section
  explicitly rather than being left for the reader to infer.
- **How I knew it was right:** The hero-pool failure walked from `lich` to
  `enigma`, so Lich, Sand King and Vengeful Spirit now resolve against the
  weeks naming them. Contract green across nine un-drafted weeks.
- **Citation:**
  [`45f2c11`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/45f2c11)

---

- **Date/time:** 2026-09-18, just after midnight
- **Tag:** [judgement]
- **What happened:** Weeks 10–12 finished the set, and the suite went from one
  known red to fully green. That transition is the moment a false green would
  be invisible, because "everything passes" is exactly what a broken gate
  looks like when the gate is `draft`.
- **What I did instead of the obvious thing:** Read the built API back rather
  than trusting the runner: twelve lectures, **zero still carrying `draft`**,
  so the contract is biting on all twelve rather than skipping them; thirteen
  of thirteen pool heroes named by a week whose number matches their
  `firstWeek`; abilities per week 0·1·1·1·0·2·1·1·1·1·1·0, which is week 5's
  deliberate zero and week 6 at the two-ability ceiling, not an average that
  happens to look right. Then I audited something no test covers yet:
  `CLAUDE.md` allows exactly one patch string on the site, and I had written a
  bare `7.41` twice in week 5 — copied from the notes, which use the short
  form in prose. Both corrected to `7.41f`. `course-plan.md` §8 lists that as
  a check worth writing; it is not written yet, and until it is, this class of
  error is only caught by looking.
- **Also deliberate:** week 12 names no hero, and the page says why — for the
  opposite reason to week 1. In week 1 it did not matter who you picked; in
  week 12 the heroes are the five your team drafted, and defending that choice
  is part of the assignment. Two weeks with an identical empty field and
  opposite reasons is the kind of thing that stops twelve pages reading as one
  template.
- **Citation:**
  [`139aeba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/139aeba)

---

- **Date/time:** 2026-09-18, just after midnight
- **Tag:** [harness]
- **What happened:** Named the Lobby Labs and wrote their contract, red first.
  Five of the six assertions went red for the reason intended — two starter
  sessions where twelve labs belong. The sixth went red for a reason I had not
  expected: `labs.md` proposes "session titles are not questions while lecture
  titles are" as a machine-checkable proxy for the two-genre rule, and seven
  of the twelve lecture titles are not questions. They come from
  `course-plan.md` §3 and `weeks.md`, so they are the author's own text.
- **What I did instead of the obvious thing:** Two quick fixes were available
  and I took neither. Rewriting the seven titles into questions would have
  edited the course's own material to satisfy a test — precisely backwards,
  and the titles are author-written. Dropping the lecture half of the
  assertion would have left a check that looks like it protects the two-genre
  rule while only ever testing one genre. So the assertion stands as written,
  red, and the decision goes to the author with the facts attached: weeks 5,
  6, 8, 9, 10 and 11 are questions with a topic appended after an em dash, and
  week 12 is not a question at all.
- **How I knew it was right:** Printed all twelve titles with their pass/fail
  rather than reasoning from the one failure vitest happened to report first —
  the runner named week 5, but the real shape of the problem is seven weeks in
  two distinct patterns, which is a different decision from a single typo.
- **Still red, deliberately:** this assertion will not go green at the end of
  step 12 without an author decision. Flagged rather than quietly weakened.
- **Citation:**
  [`ae0d779`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/ae0d779)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [judgement]
- **What happened:** Step 8's artwork. An Opus subagent produced three
  concepts and ranked them 3 > 1 > 2 for small-size legibility. I rendered all
  three at both sizes before reading its ranking as advice, and the ranking
  was wrong about its own top pick's rival: concept 1, the safe "three lanes"
  reading, collapses into a single thick diagonal smear at card size — the
  three lanes' curvatures are too close to survive the reduction. Concept 2
  held up better than predicted.
- **What I did instead of the obvious thing:** Chose concept 2 — twelve stems,
  each forking into a branch taken and a branch abandoned, three of them
  dropping and forking the other way. It draws the course's actual spine
  (twelve decisions, each with a road not taken, and three deliberate
  reorderings against the obvious sequence) rather than the map, which the
  course is explicitly not about. Refined it before shipping: the abandoned
  branch went from 13px to 22px, because at card width 13px is nearly gone;
  a ground band was added to stop an ascending series floating; and the three
  dips were deepened so the reordering reads rather than looks like noise.
- **The interesting part — a screenshot that lied.** The first render of the
  finished home page showed no hero title at all. Rather than start moving CSS
  around, I took a second, independent reading: a CDP probe reporting computed
  styles said the `h1` was present, white, `opacity: 1`, `visibility: visible`,
  with the theme's dark scrim behind it. Two readings disagreeing means one
  tool is lying, so I got a third — a 1440-wide capture showed the title
  perfectly legible — and a fourth: two fresh 1920 captures, measured by
  counting bright pixels in the title region, both returned 11.23%. Identical,
  and that is the white text. The original capture was a one-off false
  negative, almost certainly the screenshot racing the theme's `hero-fade-up`
  animation. Had I trusted it I would have "fixed" a page that was never
  broken.
- **Also found by looking:** `src/pages/404.md` still pointed at the deleted
  `hero-home.avif`. Nothing in `pnpm check` failed on it — the theme warns and
  drops the image rather than erroring — so a 404 page with no artwork would
  have shipped silently.
- **On the card:** Astro refuses to re-encode an SVG source
  (`dangerouslyProcessSVG` is off), and an `og:image` has to be raster anyway
  because scrapers do not render SVG. So `card.svg` is the committed source
  and `card.png` is rasterised from it by a one-off script that was deleted
  rather than committed, per the brief.
- **Citation:**
  [`323d1d1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/323d1d1)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [judgement]
- **What happened:** The two-genre rule needed lecture titles to be questions,
  and seven were not. The author granted an explicit, one-off exemption from
  the rule that `docs/*.md` are author-written, so I made the change in the
  plan and the notes myself.
- **What I did instead of the obvious thing:** Changed the plan first and the
  pages second, in two commits, rather than editing both together — the
  exemption was about *who* may edit the source of truth, not about whether it
  still is one, and a single commit would have left no way to see that the
  plan moved before the pages followed. While there I also dropped week 8's
  markdown emphasis: `When should I *not* engage` renders the asterisks
  literally in an `<h1>`, because frontmatter titles are not markdown. Nothing
  checks that and nobody had looked at week 8's heading; I found it while
  checking how the title would survive the rename.
- **Week 12 is exempted in the test, not quietly skipped:** it is the
  capstone, it poses no decision because the answer is the assignment, and the
  test says so in a comment. An exemption with a reason written next to it is
  a rule; an exemption without one is a hole.
- **How I knew it was right:** The title assertion went green while the other
  five stayed red, which is the shape I wanted — the change fixed exactly what
  it was aimed at and nothing moved that should not have.
- **Curated prompt:** "I'm granting you an exemption from the harness rule
  this once — go ahead and edit the docs yourself."
- **Citation:**
  [`96b771e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/96b771e)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [routine]
- **What happened:** The artwork commit itself — hero SVG, rasterised card,
  both starter images gone, `404.md` repointed. Its reasoning is in the entry
  above; this entry exists because the rule is one per commit with no
  exceptions, including for a commit whose thinking has already been written
  down.
- **How I knew it was right:** `check:evidence` lost all four image lines, and
  the new `card.png` hashes differently from the starter's tracked hash, which
  is what that gate actually compares.
- **Citation:**
  [`ca6ee49`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/ca6ee49)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [routine]
- **What happened:** The page half of the retitle, plus week 12's exemption in
  the test.
- **How I knew it was right:** The title assertion went green and the other
  five stayed red — the change did what it was aimed at and moved nothing
  else.
- **Citation:**
  [`94024e6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/94024e6)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [routine]
- **What happened:** Lobby Labs 1–4. The build failed on week 3's frontmatter:
  `Holding a lane is adversarial: you need an opponent…` — a colon and a space
  inside an unquoted YAML scalar, which the parser reads as a mapping.
- **What I did instead of the obvious thing:** Rephrasing the sentence would
  have fixed this file and left the next eight exposed, and quoting it would
  have moved the trap to the first apostrophe. Converted every `needs_others`
  to a folded block scalar (`>-`) instead, which is immune to colons, quotes
  and dashes alike — the remaining eight labs are written the same way.
- **How I knew it was right:** Six red became one, and the one is "expected 4
  to be 12". The other five assertions are now passing against four real
  labs rather than skipping, which is the difference between progress and a
  suite that has stopped looking.
- **Citation:**
  [`94024e6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/94024e6)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [routine]
- **What happened:** Lobby Labs 5–8, written with the block-scalar frontmatter
  the week 3 failure forced. No parser trouble this time, which was the point
  of changing the shape rather than the sentence.
- **What I did instead of the obvious thing:** Lab 6 is the one that could
  most easily have restated its lecture — week 6 is roles, and a lab page
  about roles would be the lecture again with a heading swapped. It is a
  replay-watching drill instead, where each student follows one position and
  the class reassembles the game from five partial accounts, and the page
  never explains what a position is. That is the two-genre rule doing actual
  work rather than being asserted about.
- **How I knew it was right:** "expected 8 to be 12" — the count is the only
  thing still red, so the five substantive assertions are passing against
  eight real labs, including the one that requires all `needs_others` to be
  pairwise distinct.
- **Citation:**
  [`965c05a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/965c05a)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [routine]
- **What happened:** Lobby Labs 9–12 completed the set and every suite went
  green: 26 of 26.
- **What I did instead of the obvious thing:** Week 12's lab is dated the
  Tuesday rather than the Thursday every other week uses, and the page says so
  and says why — match day on the Thursday would leave the review due at noon
  the next morning. The tempting alternative was to let the exception pass
  without comment, since no reader would count backwards and notice. A course
  that quietly moves its own schedule teaches something it does not intend to.
- **How I knew it was right:** Read the built API back rather than trusting
  the green: twelve sessions, twelve pairwise-distinct `needs_others`, twelve
  with exactly three spec lines, zero lab titles ending in a question mark,
  and every lab exactly three days after its lecture — except week 12's, at
  one day, which is the stated exception rather than a mistake that happened
  to pass a same-calendar-week check.
- **Citation:**
  [`fd73fcd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/fd73fcd)

---

- **Date/time:** 2026-09-18, early hours
- **Tag:** [routine]
- **What happened:** Step 13's look. Eighteen screenshots — nine pages at both
  marking viewports.
- **What I did instead of the obvious thing:** I read seven of the eighteen
  properly and measured the other eleven rather than claiming to have looked
  at all of them. The measurement is an ink-proportion count per screenshot,
  which catches the failure a spot check would miss — a page that built and
  served but rendered blank. None did; the lowest was 2.1%, which is the
  theme's centred content column on a 1920 viewport, not an empty page.
- **How I knew it was right:** The seven I read closely were home, the hero
  pool, one person's page, weeks 2 and 6, and Lobby Labs 2 and 11 — chosen
  non-adjacent, the way a marker reads. Week 6 was the one to check by eye,
  because its argument about which position to start on is folded into the
  decision section rather than given a heading of its own, and folded-in prose
  is where a structural decision either reads naturally or reads as a mistake.
  It reads.
- **Said plainly:** I did not read the people index, weeks 10's body, or the
  phone renders of the hero pool and the person page beyond their ink
  measurement. The eleven unread ones are measured, not inspected.
- **Citation:**
  [`667effe`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/667effe)

---

- **Date/time:** 2026-09-18, morning
- **Tag:** [judgement]
- **What happened:** The author's notes moved after day 2 began, adding two
  reference files that are now the only source for the board and for denies,
  lane creeps, camps and attributes. Auditing five points against the built
  pages, **all five were wrong**, and one of them was a real factual error
  that had shipped: week 5 told students that intelligence gives spell damage.
  It does not — it gives maximum mana, mana regeneration and magic resistance.
  That page was written at 00:03 and corrected at 00:59, so it was wrong for
  under an hour and was never public, but it was wrong in exactly the way this
  course tells students not to be: I wrote a plausible mechanic from general
  knowledge because it sounded right.
- **What I did instead of the obvious thing:** Audited each of the five
  against the actual page text rather than against my memory of writing it.
  That matters more than it sounds: I would have reported week 3's equilibrium
  and week 4's camps as "already covered", because I remembered writing about
  both. Reading them showed week 3 carried a hedge sentence that deliberately
  declined to state the fact, and week 4 said camps spawn "on a rhythm"
  without saying the rhythm is the game clock — which is the entire teachable
  point. Two of the five were pages that *looked* correct from memory.
- **The relaxed assertion is back.** Week 5's empty item section had been the
  reason the section contract asserted only one direction. The section is
  filled now, so the strict "present exactly when the week has heroes or
  items" form is restored, and I proved it bites by adding an item heading to
  week 1 — which has none — and watching it fail before putting it back.
- **Also carried:** the Desktop copy had forked before the lecture retitle, so
  the re-sync arrived carrying a revert of it. Re-applied rather than
  accepted: the retitle was an explicit author decision and the spec asserts
  it, and a sync silently undoing a committed decision is the kind of thing
  that is only ever found much later.
- **Citation:**
  [`c57f295`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/c57f295)

---

- **Date/time:** 2026-09-18, morning
- **Tag:** [harness]
- **What happened:** The brief asked for the assertion that would have caught
  the 404 page's dead image reference: every image source in `dist/` resolves
  to a real file. I wrote it, it went green, and then I re-injected the
  original bug to check it — and **it stayed green**.
- **What I did instead of the obvious thing:** The obvious reading of a green
  test is that the site is clean. This one was green because there was nothing
  to find: the theme does not emit a broken reference when an image fails to
  resolve, it warns at build time and renders **no `<img>` at all**. I
  confirmed that rather than assuming it — rebuilt with the bad path and
  counted `at-hero-image` in the output: zero on the 404 page, one on the home
  page. So the assertion the brief specified is real and worth having, but it
  is the wrong shape for the bug that prompted it, because a dropped image
  leaves no dangling reference to find.
- **So I wrote the one that does catch it:** a page that *declares* a hero
  image must render one. Then re-injected the bug a third time and watched it
  fail, naming the page. Both assertions stay — the first guards a reference
  to a deleted file, the second a declaration the build silently dropped, and
  they are genuinely different failures.
- **How I knew it was right:** Three states, deliberately: green on the real
  site, red on the injected bug naming `src/pages/404.md`, green again after
  restoring. The first assertion also carries a guard against its own
  vacuity — it fails if it finds no image sources at all, because a matcher
  that stops matching passes for the same reason a clean site does.
- **Citation:**
  [`a4308dc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/a4308dc)

---

- **Date/time:** 2026-09-18, morning
- **Tag:** [routine]
- **What happened:** The policies page opened by restating its own
  description: the theme renders `description` as a lead paragraph, and the
  first body sentence said the same thing in different words.
- **What I did instead of the obvious thing:** Cut the sentence rather than
  rewriting it into something that says slightly less. The page's job is three
  rules; a paragraph explaining that a page of rules exists is the kind of
  filler that reads as padding on a site whose whole argument is that it is
  not padded.
- **Citation:**
  [`049c809`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/049c809)

---

- **Date/time:** 2026-09-18, morning
- **Tag:** [harness]
- **What happened:** The `draft: true` guard, written last because it is the
  only check in this repo that was green the moment it existed.
- **What I did instead of the obvious thing:** Said so in the test rather than
  presenting it as though it had earned its green. A green-on-arrival
  assertion has never demonstrated it can fail, and writing one without
  admitting that is how a suite fills up with checks nobody has tested. So I
  demonstrated it instead: added `draft: true` back to week 7, watched it fail
  naming `lectures/week-07`, and removed it again.
- **Why it earns its place anyway:** this flag has no visible failure mode. I
  checked the built HTML on day 1 — the theme renders no draft badge at all —
  so a page left marked draft is indistinguishable from a finished one on the
  site, while the flag still ships in the course API that the
  programs-and-courses page ingests. A human review cannot catch it, which is
  exactly when a check is the right tool.
- **Second assertion, against the guard going blind:** it also pins the node
  counts it is guarding — twelve lectures, twelve Lobby Labs, four
  assessments. A filter that stopped matching would pass the draft check for
  the same reason a clean site does, and that is the failure I have already
  been caught by twice this week.
- **Citation:**
  [`2b66cc9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/2b66cc9)

---

- **Date/time:** 2026-09-18, morning
- **Tag:** [judgement]
- **What happened:** `FACTS.md`, the typed module, and the test that ties
  every figure on the site back to it.
- **What I did instead of the obvious thing:** The brief lists the material
  already gathered — deny thresholds, wave intervals, camp counts by tier,
  aggro distances, the full attribute table — and the temptation was to carry
  all of it, because a fuller file looks like better work. The governing rule
  is the opposite: only facts a page actually states. So `FACTS.md` has seven
  rows, and a section listing what was gathered and deliberately left out,
  with a reason each. Week 5 is the case worth naming: the six per-attribute
  conversion rates are real and available, and putting them on the page would
  have buried the week's actual argument under a table. The two figures it
  does carry are the ones the argument turns on.
- **The module is canonical because a test makes it so.** The brief asks for
  "a typed module the pages read from", and content-collection markdown cannot
  import one — so a module the pages do not consult would be decorative. The
  test closes it from the other end: it reads the built prose and fails on any
  number that is not a declared fact.
- **How I knew the test was worth having:** I built its exclusion list from
  the pages rather than from imagination, and the first three attempts were
  wrong in instructive ways. Scoped to `<article>` it silently fell back to
  the whole document and "found" numbers in inline CSS and SVG — every token
  appearing on all 24 pages, which is the shape of a broken extractor rather
  than a dirty site. Then `39` turned out to be `&#39;`, an apostrophe
  surviving tag-stripping. Then the last two survivors were "tier-1 tower" and
  "Dota 2" — a tower's name and the game's name. Each exclusion is a number
  that makes no claim about the game, and the list is written out in the test
  with that reasoning, because a silent allowlist is how this kind of check
  rots.
- **Two guards against the test passing for the wrong reason:** it asserts it
  found 24 pages and that none yielded empty prose, and it checks every module
  row still has a row in `FACTS.md`. Then I proved it red by putting an
  invented gold figure into week 2 and watching it fail.
- **Citation:**
  [`7038931`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/7038931)

---

- **Date/time:** 2026-09-18, morning
- **Tag:** [judgement]
- **What happened:** Wiring the figures into the sentences that were already
  there. Five went in; two that `FACTS.md` carries did not.
- **What I did instead of the obvious thing:** The brief's instruction is that
  this step sharpens the pages rather than rewriting them, and twice the
  sharper version was the one without a numeral. "They come every 1 minute
  after that" is worse English than "every minute", and "only 4 camps" is
  worse than "only four camps" — small counts belong in words. So those two
  facts stay adjudicated in `FACTS.md` and render as words, and the module
  carries an explicit `digits` field that is *absent* for them. That is a real
  limitation of a digit scan and the module says so in a comment rather than
  hiding it: a figure spelled as a word is outside what this check can reach.
- **Two near-misses the wiring produced**, both of which would have been false
  reds rather than real failures: the token regex did not capture a leading
  `+`, so `+0.45` would have been read as `0.45` and failed against a table
  that declares `+0.45`; and `every 1 minute` would have emitted a bare `1`,
  which is far too permissive a token to ever allow. Fixing the first by
  capturing the sign and the second by improving the prose is better than
  widening the allowed set, which is the move that would have quietly made the
  check useless.
- **How I knew it was right:** Did not stop at green. Printed what the scanner
  actually sees on the three pages that gained figures: week 2 yields
  `["50%","50%"]`, week 4 `["1:00"]`, week 5 `["+0.45","+1"]`. Five tokens,
  each checked against the table — so the pass is the check working, not the
  figures being silently excluded by one of the structural patterns.
- **Citation:**
  [`1dfb7d7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/1dfb7d7)

---

- **Date/time:** 2026-09-17, around 01:15
- **Tag:** [routine]
- **What happened:** The seven adjudicated figures went from `FACTS.md` into
  weeks 2, 4 and 5, and the digit scanner in `spec/facts.test.ts` was tightened
  to match. The entry above, cited against `1dfb7d7`, was written while this
  work was still uncommitted and describes its reasoning — the two rows that
  stay spelled out as words, and the two near-miss false reds in the scanner.
  This entry exists so the commit that shipped that work carries a citation of
  its own rather than being folded into its predecessor's.
- **What I did instead of the obvious thing:** Kept `rendered` and a new
  optional `digits` field separate in `src/data/facts.ts`, instead of forcing
  every fact into a numeral so the scanner could see it. "every minute" and
  "four camps" read better as prose, and an absent `digits` states the scan's
  reach honestly rather than widening the allowed token set until the check
  means nothing.
- **How I knew it was right:** `pnpm check` green, and the scanner's actual
  output was printed per page rather than trusted — five tokens found, each
  matched against the table.
- **Citation:**
  [`17488c5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/17488c5)

---

- **Date/time:** 2026-09-17, around 01:30
- **Tag:** [judgement]
- **What happened:** `docs/brief-diagrams.md` blocks the map overview until
  "the author has supplied reference images", and separately the brief asks
  for `currentColor` and the theme's CSS custom properties so the diagram works
  in both themes. Both instructions needed a call. The reference the author
  actually supplied is `docs/map-reference.md`, which is text, not images — and
  it says of itself that it "is the only source the diagrams draw the map
  from". And an SVG referenced as `<img src>` renders in its own document: it
  inherits neither `currentColor` nor any `--at-*` property from the page, so
  the literal instruction would have produced a black-on-black diagram in dark
  mode.
- **What I did instead of the obvious thing:** Treated the text reference as
  the unblock — it is explicit that it is the source, and it settles every
  element the diagram carries — and drew nothing the file does not state
  (no jungles, no camps, no furniture; those are week 10's diagram). For the
  theme, kept `currentColor` and `var(--at-primary, …)` in the markup but gave
  the SVG its own root `color` and `color-scheme: light dark`, with the theme's
  own `light-dark(oklch(from …))` expressions as the fallback values. The file
  is then correct standalone and still picks up real tokens if it is ever
  inlined.
- **How I knew it was right:** Rasterised it and looked, three times, at 358px
  and 520px in both schemes. That is also how I learned the propagation works
  at all: a light panel and a dark panel in the same harness render the same
  `<img>` differently, so `color-scheme` does reach into an SVG image. Pass 1
  had "Radiant base" sitting on top of "Bottom lane" and the second caption
  line running off the right edge; pass 2 fixed those and widened the
  outside-the-lanes band, which had been far too thin to make the point the
  reference insists on; pass 3 moved the "River" label out of the top-lane
  caption it was colliding with.
- **Citation:**
  [`9d30896`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/9d30896)

---

- **Date/time:** 2026-09-17, around 01:40
- **Tag:** [routine]
- **What happened:** The week 2 window diagram came out of pass 1 with a solid
  black triangle covering the whole plot. The cause was one missing property:
  the axis was drawn as a single path, `M90 100 V400 H666`, and SVG fills an
  open path by closing it — so the L-shaped axis filled itself into a triangle
  with the default black. In dark mode the fill stayed black, which is what
  named it: `currentColor` would have gone near-white there.
- **What I did instead of the obvious thing:** Nothing clever — `fill: none` on
  `.axis`. Logging it anyway because the failure is the exact shape CLAUDE.md
  warns about: the file is valid SVG, it would pass any typecheck, lint or
  spec suite, and the only place the fault existed was the render. There was
  no test that could have caught it and writing one would be writing a
  renderer.
- **How I knew it was right:** Four passes at 358px and 620px in both schemes.
  Pass 2 cleared the triangle; pass 3 moved both window labels to the left of
  their brackets, which used the empty bottom-left of the chart instead of
  stacking everything into the crowded right corner; pass 4 moved the "Time"
  label off the deny bracket it was sitting on.
- **Citation:**
  [`b087cce`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/b087cce)

---

- **Date/time:** 2026-09-17, around 01:50
- **Tag:** [judgement]
- **What happened:** Week 3's brief asks for two things in one drawing — three
  states of a lane with an arrow for what moves the wave, and the asymmetry
  that `docs/map-reference.md` settles, where a safe lane's meeting point sits
  near the safe-laner's own tower and an off lane's therefore does not. Drawn
  as one picture those fight each other: the first is about a wave moving, the
  second about where it rests before anyone moves it.
- **What I did instead of the obvious thing:** Split it into two stacked panels
  that share one idiom — every lane is a strip with *your* tower at the left
  and theirs at the right — rather than inventing a second visual language for
  the second idea. Reusing the axis is what lets the second panel land: the
  reader already knows what left and right mean, so "safe lane, mid, off lane"
  with the marker at three different places reads as one fact rather than
  three pictures.
- **How I knew it was right:** Two passes at 358px and 560px in both schemes.
  Pass 1 clipped the second panel's heading off the right edge and ran the
  "Mid" row label into the tower glyph, because I had estimated text widths
  rather than measured them; pass 2 shortened the three offending strings and
  opened up the second panel's row pitch, which had been tight enough that a
  row label touched the strip above it.
- **Citation:**
  [`29068a8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/29068a8)

---

- **Date/time:** 2026-09-17, around 02:00
- **Tag:** [judgement]
- **What happened:** Week 4's brief asks the camp diagram to carry a "pull
  window" and a "stack window" as arcs on one loop. But `docs/mechanics-reference.md`
  gives no pull timing at all — it is one of the figures `FACTS.md` deliberately
  does not carry — so there is no honest way to draw the pull window as a
  short, precisely-placed arc.
- **What I did instead of the obvious thing:** Drew the pull window as what the
  reference actually supports: the whole stretch in which the camp is occupied
  and the creeps are therefore there to pull. The stack window is then a
  shorter arc nested *outside* the tail of it, running up to the next check.
  Nesting rather than abutting them is the substantive choice — two arcs side
  by side would say the two windows are alternatives, and the sentence the week
  is built on is that stacking is a window *inside* a cycle. Invented precision
  would have been the easier drawing and the wrong one.
- **How I knew it was right:** Two passes at 358px and 560px in both schemes.
  Pass 1 put the loop's two direction arrowheads on the horizontal midline,
  where they collided with the "Camp occupied" label at the centre; pass 2
  moved them to the lower diagonals and extended the stack arc so it reaches
  the check instead of stopping short of it, which had left a gap implying a
  dead stretch that does not exist.
- **Citation:**
  [`74125e5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/74125e5)

---

- **Date/time:** 2026-09-17, around 02:10
- **Tag:** [judgement]
- **What happened:** The brief for week 5's attribute map says to take the
  mapping from `docs/weeks.md` week 5 and to draw whatever a `CHECK` marks and
  flag it. There is no longer a `CHECK` on that mapping — the author resolved
  it, and week 5's notes now carry the corrected version (Intelligence buys
  mana, mana regeneration and magic resistance, explicitly *not* spell damage)
  in agreement with `docs/mechanics-reference.md`. The week 5 `CHECK` still in
  the notes is on week 3's Wraith King ability, which this diagram does not
  touch.
- **What I did instead of the obvious thing:** The tying rule — each point of
  your hero's *primary* attribute also adds attack damage — is what the
  reference says the diagram "has to carry", and the obvious way to carry it is
  a second set of lines from Strength, Agility and Intelligence down to Attack
  damage. Drawn, that crosses every other line on the page and turns a
  reference diagram into a knot. Used a dagger on the three attribute pills and
  one footnote instead. The brief's own instruction for this one is that
  clarity beats cleverness, and four extra lines would have been the cleverer
  and less usable drawing.
- **How I knew it was right:** One pass was enough here, checked at 358px and
  560px in both schemes — the bipartite layout orders each attribute's targets
  in a contiguous band, so no two links cross and there was nothing to
  untangle.
- **Citation:**
  [`1fecfa3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/1fecfa3)

---

- **Date/time:** 2026-09-17, around 02:25
- **Tag:** [judgement]
- **What happened:** The week 10 objectives map has to place every element from
  `docs/map-reference.md`, and that file contains one contradiction it flags
  itself: the Tormentors are listed as sitting "on the west and east map
  borders", each with a Watcher in front — corroborated a second time in the
  Watcher list — while the same section records that "7.41 moved the Tormentor
  spawn to the bottom chasm", and tells the reader the two facts "may describe
  different things" and need the author's confirmation together. `week-10.md`
  already states the bottom-chasm version on the page.
- **What I did instead of the obvious thing:** Drew the two Tormentors on the
  west and east borders, because that is the only claim in the reference that
  comes with positions, and left the bottom chasm out rather than inventing a
  location for it. The caption names the patch and the one 7.41f change the
  reference states without a caveat — Roshan's preference for the top pit.
  The alternative was to follow the page, which would have meant putting a
  marker somewhere the reference never locates and detaching the two Watchers
  that are defined as standing in front of the Tormentors.
- **How I knew it was right:** Two passes at 358px and 560px in both schemes.
  Pass 1 had the river band at nearly the same weight as the lanes, now that
  the lanes are drawn back in grey rather than gold — the board read as four
  lanes. Pass 2 dropped the band's opacity, restored its dashed centreline, and
  grew the Watcher dots, which were too small to find at the phone width.
- **Note for the author:** the page and this diagram now disagree about where
  the Tormentors are. That is the reference's open question, not a drawing
  decision, and it needs resolving in one place before week 10 ships.
- **Citation:**
  [`d920239`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/d920239)

---

- **Date/time:** 2026-09-17, around 02:35
- **Tag:** [harness]
- **What happened:** Wiring the six diagrams into their weeks surfaced a
  failure mode none of the standalone renders could show. At the 390px
  viewport the theme bleeds a content image about 20px past each side of the
  window, so roughly the first 34 units of a 720-unit viewBox are cut off on a
  phone and nowhere else. Week 4's "Stack window / empty it in time" label read
  as "ack window / mpty it in time" on the built page while looking perfect in
  my own harness at the same 358px width.
- **What I did instead of the obvious thing:** Having found one, I derived the
  cut-off from two measured points in the render, predicted which of the other
  five were at risk, fixed those — and then went and looked at the remaining
  three anyway rather than shipping on the arithmetic. That caught a second
  real one: week 5's "every point of any attribute" was rendering as "very
  point of any attribute". The model was right about where the boundary was and
  still wrong about who crossed it, because I had been estimating text widths
  rather than measuring them all along.
- **Also verified:** that the site's dark toggle actually reaches inside an
  `<img>`-embedded SVG. A first probe — injecting `data-theme="dark"` into the
  built HTML — came back light, which looked like the technique failing. It was
  not: the theme's init script rewrites `data-theme` from `localStorage` on
  load, so the injection was overwritten before first paint. Seeding
  `at-theme=dark` in `localStorage` instead and re-shooting the real page shows
  the diagram in its dark palette. Worth the second attempt, because the first
  result was a false red that would have had me redesign a technique that works.
- **Rule this adds:** a diagram embedded as an image needs a safe margin of
  about 5% of its viewBox width on the left and right, because the phone
  viewport is the only place that margin is consumed, and it is the one
  viewport the author cannot see from a standalone render.
- **Citation:**
  [`496f579`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/496f579)

---

- **Date/time:** 2026-09-17, around 02:30
- **Tag:** [harness]
- **What happened:** Thirteen `dota2.com/hero/<slug>` links were unverified
  guesses. The brief's warning held exactly: `/hero/definitelynotarealhero`
  returns **HTTP 200 with the same 46,681 bytes** as a real hero page, and the
  raw HTML contains no hero name at all, so `curl` can never distinguish a real
  slug from a fictional one. A rendering browser was mandatory.
- **What I did instead of the obvious thing:** The first real-browser attempt
  produced a null that looked like the technique failing — the nav rendered,
  no JS errors, no failed requests, and the hero area stayed empty for 30
  seconds on every slug I tried. The tempting read was "dota2.com does not
  render headless". It was the precondition, not the sensor: I had been
  navigating to `/hero/antimage`, and the official slug is `anti-mage`. Every
  page I had "tested" was a nonexistent one. I found that by rendering the
  `/heroes` index instead, which came back with 127 hero links and their
  displayed names — the site's own hrefs, which is better evidence than my
  reading of any single page.
- **Two sensors, because one agreeing with me proves nothing.** All thirteen
  guesses matched, which is the shape of a false green. So: the checker was run
  against six deliberately wrong inputs and reported a failure for every one;
  and each of the thirteen pages was then loaded individually and its
  *displayed* name read back, against a control slug (`antimage`) that renders
  no name. The convention was genuinely not a given — 2 of the 127 official
  slugs break lowercase-remove-spaces (`anti-mage`, `nature'sprophet`), so the
  thirteen being right was a fact about the pool, not about the rule.
- **How I knew it was right:** 13/13 pages displayed the expected hero name
  with a body of ~2,000–2,600 characters; the control displayed nothing and
  returned 236 characters. `pnpm check` green, including the existing guard
  that the site links only to slugs the pool knows.
- **Citation:**
  [`f49a8ce`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/f49a8ce)

---

- **Date/time:** 2026-09-19, around 12:35
- **Tag:** [routine]
- **What happened:** `docs/course-plan.md`, `docs/labs.md`, and `docs/weeks.md`
  carried uncommitted edits sitting in the working tree since Wednesday
  evening — the author's own corrections after an adversarial review found
  repeated Lobby Lab devices and lecture/lab outcome lines duplicated across
  pages. No agent session had made or logged them.
- **What I did instead of the obvious thing:** The backstop rule (log a
  `(no commit)` entry when a session ends with uncommitted work) does not
  apply here — no agent session produced or ended holding this diff; the
  author edited the notes directly, outside any session. Rather than force a
  `(no commit)` entry that misattributes the work, committed the three files
  on their own, with a message naming the author as the source and stating
  that no new content was written in the commit.
- **How I knew it was right:** Reviewed `git diff` for each of the three
  files before staging — every hunk was a notes-only correction (retitled
  decisions, a "Quantities are set on the day" convention added once to
  `labs.md` instead of per-lab, de-duplicated lecture outcomes) matching what
  `docs/start-here.md` described. Confirmed `process-log.md`,
  `docs/brief-day2-3.md`, and `docs/start-here.md` were left out of the
  staged set. `pnpm check` still green after the commit.
- **Citation:**
  [`590b419`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/590b419)

---

- **Date/time:** 2026-09-19, around 12:50
- **Tag:** [harness]
- **What happened:** The home page and the assignment-4 brief both mentioned
  "the Hall of Fame" in prose, but the page didn't exist and both mentions
  were plain text, never an `<a href>`. The theme's own broken-links checker
  (`astro-broken-links-checker`, wired with `throwError: true`) never had a
  chance to catch this: it only ever inspects hrefs that already exist in
  rendered HTML, and a page promised in prose with no real link produces no
  href for any checker to walk.
- **What I did instead of the obvious thing:** Rather than only adding the
  missing page and links, added `spec/internal-links.test.ts` as a
  repo-owned check that every internal `<a href>` in the built site resolves
  to a real `dist/` page — independent of the theme's own default options,
  which are set inside a third-party package and could silently change or be
  flipped off (`checkLinks: false`) with no local test noticing.
- **How I knew it was right:** Deliberately broke the new
  `/hall-of-fame/` link (retargeted it to a nonexistent path), confirmed both
  `pnpm build` and `npx vitest run spec/internal-links.test.ts` failed with a
  clear message naming the broken href, then reverted and confirmed `git
  diff` showed only the intended change. Rendered the new page at both
  marking viewports (1920×1080, 390×844) via a headless Chromium screenshot
  and read both images — full content visible, no dead space, links styled
  correctly, nav intact. `pnpm check` green (42 pages, 34 tests) after
  reverting the deliberate breakage.
- **Citation:**
  [`1d1f7e0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/1d1f7e0)

---

- **Date/time:** 2026-09-19, around 13:05
- **Tag:** [routine]
- **What happened:** `docs/labs.md` added two conventions after Track C's
  review: quantities (round length, wards, a replay) are set on the day and
  the site should say so once rather than on every lab; and "say it out
  loud" should survive only in labs 8 and 10, where being heard is the
  mechanism, with lab 7 rewritten in the notes to use a written build order.
  The `[slug].astro` template's spec-list blurb also rendered one identical
  sentence on all twelve lab pages.
- **What I did instead of the obvious thing:** Rather than picking which
  lab's existing explanation to keep, moved the "quantities are set on the
  day" statement to the Lobby Labs index page and stripped the matching
  explanation out of weeks 3, 6 and 9, leaving a flat "the tutor sets it".
  For the out-loud device, checked all twelve labs rather than only the
  three the notes named — weeks 2 and 4 also say "out loud", but for
  different mechanisms (a partner verifying a count; a tutor calling
  timings), not a student's intent being judged by an opponent, so left
  them alone instead of over-applying the fix.
- **How I knew it was right:** Re-read `docs/labs.md`'s convention text
  against the edited pages to confirm no explanation survived; grepped all
  twelve session files for "out loud" after editing to confirm only weeks
  8 and 10 keep the flagged device. `pnpm check` green (42 pages, 34 tests,
  0 typecheck errors) after the edits.
- **Citation:**
  [`6e936cd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/6e936cd)

---

- **Date/time:** 2026-09-19, around 13:15
- **Tag:** [routine]
- **What happened:** `docs/weeks.md` gave replacement "After this week
  you can…" lines for weeks 2, 3, 4 and 5, fixing both the week 4/5
  lecture-lab duplicate and an earlier week 2/3 mismatch in the same
  update. Applying weeks 2–5's lines in one step meant the week 2/3 fix
  in D3's brief was already satisfied before D3 started.
- **What I did instead of the obvious thing:** Read D3's own two bullets
  in full and diffed the current site against `docs/weeks.md` rather than
  assuming there was work left, and found the weeks 2/3 outcome text
  already matched the notes exactly. The only remaining diff was week 7's
  "consumables and the teleport scroll are not spending; they are
  infrastructure", which restates week 10's "makes a cheap item into a
  structural one" using the same example item — applied the notes'
  replacement framing ("bought for what they let you keep doing, not for
  what they add") to week 7 only, and left week 10's structural framing
  alone since D3 says it owns that argument.
  Also added the D2 test proving the sensor would have caught the actual
  week 4/5 bug (a known-bad control fixture), not only that it is silent
  on the pages as they stand today.
- **How I knew it was right:** Grepped both weeks' rendered mechanics
  sections for "infrastructure"/"structural" before and after to confirm
  only week 7's copy changed. `pnpm check` green (42 pages, 36 tests, 0
  typecheck errors).
- **Citation:**
  [`3fddd23`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/3fddd23)

---

- **Date/time:** 2026-09-19, around 13:20
- **Tag:** [routine]
- **What happened:** Track C flagged three places where satire had leaked
  out of titles/framing and into sincere body prose: Lobby Lab 12 ending
  on the Hall of Fame gag right after establishing a review habit, and
  week 7's "that is the point at which you have graduated" line.
- **What I did instead of the obvious thing:** Rather than deleting the
  Hall of Fame mention from Lobby Lab 12, moved it into the "How it
  runs" section as a plain fact about how match day works, so the page
  still says it, and let "How you know it went well" end on the review
  being due — the notes' fix is about order, not omission. Reworded week
  7's "graduated" line into a sincere statement of the same fact (the
  disagreement is the point of the week, and by then it has reasons).
- **How I knew it was right:** Re-read both pages end to end after
  editing to confirm "How you know it went well" no longer ends on a
  joke and the Hall of Fame fact still appears once. `pnpm check` green
  (42 pages, 36 tests, 0 typecheck errors).
- **Citation:**
  [`18202de`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/18202de)
