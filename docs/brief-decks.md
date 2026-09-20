# Brief — a deck for every lecture

The author has reversed an earlier decision. Until now, week 2 was the only
lecture with a deck, and the other eleven carried `deck: none` with a
`deck_reason`. From this commit on, **all twelve lectures link a deck.**

## Why (record this in the process log — it is the author's judgement)

State it in the log entry in these terms, as the author's reasoning, not
yours:

- The eleven `deck_reason`s were written as teaching arguments ("static
  slides cannot teach timing", "one diagram does more than a deck would").
  The real reason underneath them was **cost**: the author pictured a deck
  as something he would design and polish by hand, one per week.
  Week 8's own reason gives this away — it says the week "deserves a deck"
  and that the course "promised one deck and gave it to last-hitting".
- Hand-polishing decks would also have pulled the work toward third-party
  artwork, which this course rules out (in-house visuals only, no Valve
  art). So the expensive version was not just expensive; it was the version
  most likely to break the course's own rules.
- Drafts produced with AI from each week's lecture page, reusing the
  in-house diagrams already in `src/assets/diagrams/`, turned out to be good
  enough for the purpose. Once a deck cost minutes rather than an evening,
  the cost argument no longer held, and the teaching arguments on top of it
  were not strong enough to stand alone.
- So the reasons were removed rather than kept as justification the author
  no longer believes.

Provenance, stated plainly in the entry: the decks were drafted by Claude in
the author's separate planning session from the lecture pages, and reviewed
and accepted by the author. The week 2 deck was drafted the same way.

## Files

Twelve decks are in `src/decks/`: `week-01` to `week-12` (`.deck.mdx`).
`week-02.deck.mdx` replaces the title-only stub. **They are author-owned: do
not edit them.** If one fails to build, stop and report the file, the error
and the line.

Seven of them use an existing diagram, referenced with Markdown image syntax
as `../assets/diagrams/<name>.svg`: weeks 1 and 9 (`map-overview`), 2
(`last-hit-window`), 3 (`creep-equilibrium`), 4 (`camp-cycle`), 5
(`attributes`), 10 (`objectives-map`). Whether astromotion renders this
syntax has not been verified.

## What to do

1. In each of `src/content/lectures/week-NN.md` for weeks 1 and 3–12,
   replace the `deck: none` and `deck_reason:` keys with the single line
   `slides: /decks/week-NN/`. Change nothing else in those files. Week 2
   already has its `slides:` line.
2. Run `pnpm check`. `spec/course-structure.test.ts` requires each lecture
   to link a deck or declare `deck: none` with a reason, never both, so a
   half-done swap goes red. `spec/weekly-contract.test.ts`'s deck-reason test
   skips lectures with no reason and should stay green; if it does not,
   report it rather than editing the test.
3. Run `pnpm dev` and open each deck at
   `/comp4020-ass2-Gera1t-2001/decks/week-NN/` (bare localhost is a 404 —
   there is a base path). At 1920x1080, screenshot every slide and `Read` the
   screenshots. Report per deck:
   - whether the diagram slide renders the SVG (if not, say what does work;
     do not edit the deck);
   - every slide whose text overflows or is clipped, by slide number.
4. Commit the twelve decks and the eleven frontmatter changes in **one**
   commit — splitting them leaves `slides:` links pointing at decks that do
   not exist yet. Message:
   `Give every lecture a deck; drop the eleven deck_reasons`.
5. Then write one `[judgement]` process-log entry citing that commit's real
   hash, carrying the reasoning above. Also cite the commit(s) that
   introduced the `deck_reason`s — find them with
   `git log --oneline -S "deck_reason" -- src/content/lectures/` and verify
   each with `git cat-file -e <sha>^{commit}` before citing it.

## Report, do not fix

`docs/weeks.md` still says week 2 carries "the course's one deck" (around
line 78) and gives week 8 the old reason (around line 217). `docs/` is
author-owned: list every place in `docs/` that still describes a single deck
and leave them for the author.

## Do not

- touch `PROCESS.md`, anything in `docs/`, or any deck file
- add any Valve artwork or screenshots
- push until the author has read the per-slide report
