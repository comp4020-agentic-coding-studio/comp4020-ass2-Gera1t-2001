# Process overview

## What I built

SLOP1904, *Welcome to Dota. You Will Lose.* — a twelve-week course that
teaches Dota 2, a game I have played for over 3,000 hours, to people who have
never touched it. Of three possible spines (the match timeline, the resource economy, the
decisions beginners get wrong), I chose decisions, with resources as the
lens: each week answers one question a beginner actually faces.

## How I worked

Since crit 2 I have run two agents. The course's Claude Code instance is the
**build agent**: it reads a brief from `docs/`, makes every commit, runs the
checks and takes the screenshots. My own Claude is the **planning agent**: it
turns my Chinese into briefs the build agent can execute, argues with my
plans, and reads the reports with me, often spotting what I miss. I am not a
relay: I decide what gets built. With a day left, the planning agent advised
keeping one deck; I made twelve (moment 3).

The build agent is most useful when it holds me to my own rules. When I
edited my notes in `docs/` outside any session and left them uncommitted, it
found them and committed them under my name, not its own ([`590b419`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/590b419)).

## Three moments

**1. BKB does not exist.** A build report claimed Black King Bar was missing
from the patch data. It is the game's most famous item; I caught it from
experience, not a check: the fetched data was incomplete.
I exported the key mechanics pages as PDFs and handed them over, and the
reference was rebuilt from those
([sources](docs/mechanics-reference.md#sources), [`c57f295`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/c57f295)).

**2. A check that proves less than it looks.** *Before:* `CLAUDE.md`
already said "cite a real hash", and Day 1 still ended with a guessed hash in
the log, caught by chance. *After:* the build agent
wrote `scripts/check-log.ts`, which resolves every cited hash inside
`pnpm check`, and proved it red with a fake one before it was trusted ([`3fb6ccb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/3fb6ccb)). Two days
later an entry cited [`18202de`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/18202de), a real commit, for the wrong work, and
the checker passed it; the build agent caught it on a re-read
([`abfe79f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/abfe79f)). A check proves the hash exists, not that it is the right
one. I suspect long sessions let the agent drift.

**3. Eleven reasons I did not believe.** Every lecture but week 2 said
`deck: none` with a teaching reason
([`bf9cfc0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/bf9cfc0),
[`58930f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/58930f1)).
Honestly, they were covering for doing the minimum: one polished deck. Then
the planning agent pointed out that the site's licence rules out third-party
artwork, and we already had our own SVG diagrams. With AI drafting from each
lecture page, a plain deck was cheap, so I deleted the reasons and gave every
week a deck
([`5f5dac9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/5f5dac9)).
`pnpm check` stayed green, yet the build agent's slide-by-slide screenshots
showed five diagrams cut in half, fixed in
([`b9f4d48`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Gera1t-2001/commit/b9f4d48)).
Green again, and still wrong: the users are human, so a human has to look.

## What this changed

Every moment above is a mistake that passed something: a fetch, a checker,
a green build. Each was caught by whoever knew enough to look — me with BKB,
the build agent with the hash and the slides. If the agents do the writing,
my job is to be the one who notices. That needs fundamentals, not
prompts: I want to be a developer who knows enough to recognise when an AI
is wrong. For Assignment 3 I will change the setup: my planning agent runs on
Windows and cannot see the repo in Ubuntu, so it works from my description.
