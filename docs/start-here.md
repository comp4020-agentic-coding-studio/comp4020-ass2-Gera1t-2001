# Start here — fresh session, Saturday 19 September

## Where this is

This is an assignment repo, mid-project, not a fresh start. The site is
largely built: twelve lecture pages, twelve Lobby Labs, four teachers, a hero
pool, home-page artwork, and a spec suite that was green when the last
session ended on Wednesday. **Due Monday at noon.** Today and tomorrow are
the last working days.

Two days passed with no work, so nothing is in anyone's head. Orient from the
repo, not from memory.

## Orient first — these four commands and nothing else

```
git log --oneline -15
tail -60 process-log.md
pnpm check
pnpm check:evidence
```

What you should see, so you can tell if something has gone wrong:

- **~47 commits**, the last of them from the early hours of Thursday 17
  September, local time. **Check whether they are pushed** — `git status`
  will say. They should be by the time you read this; if they are not, say
  so and ask before pushing, because publishing is the author's call and not
  yours to make on your own.
- **`process-log.md`** with one tagged entry per commit, each citing a real
  hash. This is the format you must match; do not invent a different one.
- **`pnpm check` green** — 26 checks, including `check:log`, which verifies
  that every hash cited in the log resolves to a real commit.
- **`pnpm check:evidence` red on three lines, all `PROCESS.md`**: the template
  comment and its two placeholder citations. That is expected. `PROCESS.md`
  is the author's to write and **you never touch it**.

**`docs/*.md` may show uncommitted changes.** Those are the author editing
their own notes outside any coding session, not a session that ended with
work in progress — the `(no commit)` backstop in `CLAUDE.md` is not what
covers them. Commit them with a message saying they are the author's
revisions, log the commit like any other, and carry on.

If anything else does not match, stop and report before doing anything else.
This file was written by a person from memory, so it can be wrong; the repo
is the authority, and a discrepancy is worth a sentence in your report even
when you resolve it.

## What is already settled — do not rediscover it

- **`docs/*.md` are the author's notes and the source of truth.** You read
  them; you do not edit them. Same for `src/decks/*`.
- **`CLAUDE.md` carries the rules** and you get it every turn. The ones that
  bite most often: log after each commit with a real hash, `7.41f` is the only
  patch string on the site, numbers come only from the reference files,
  satire lives in titles and the body stays sincere.
- **Two reference files settle facts**: `docs/map-reference.md` for the board,
  `docs/mechanics-reference.md` for creeps, camps, denies and attributes.
  Where a page and a reference disagree, the reference wins.
- The thirteen hero slugs were verified against rendered pages on Wednesday.
  They are correct. Do not re-verify them.

## Today's work

**`docs/brief-day2-3.md`, in order, D0 through D7.** Read it in full first,
along with `docs/labs.md` and `docs/weeks.md`, which it refers to throughout —
both were corrected on Wednesday evening after an adversarial review, and the
pages have not yet been brought into line with them.

The short version of why: a review found that several Lobby Labs repeat one
another, that two weeks put the same sentence on both the lecture and the lab,
and that the site states a policy about a Hall of Fame page that does not
exist. Most of the repetition was seeded in the author's notes, so the notes
were fixed first. Your job is the pages.

## Where you stop and wait

- **D4** flags two lines in Lobby Labs 8 and 12 as borderline. Propose
  rewrites and wait — the author decides.
- **D6 entirely.** Draft the policies "support" sections, paste them, and
  **stop**. That is course policy and the author writes policy.

Everywhere else: report after each step and keep going.

## When you finish

```
git status
git push
```

Nothing counts until it is pushed. Report what landed, what did not, and what
is waiting on the author.
