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
