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
- **Curated prompt:** "按照你的建议来，三种语气改成讽刺只活在标题和框架，正文
  一律真诚" — plus the instruction to record that the brief was revised after
  its own review.

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
- **Curated prompt:** "停一下，对于 step 5，你按照你给出的建议来"
- **Citation:**
  [`bf9cfc0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/bf9cfc0)
