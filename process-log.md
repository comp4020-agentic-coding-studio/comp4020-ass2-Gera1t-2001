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
- **Citation:**
  [`c1231ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/c1231ee)
