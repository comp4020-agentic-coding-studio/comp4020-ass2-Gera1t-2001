# Brief — make the diagram slides fit, then bring docs/ in line

Follow-up to `brief-decks.md` (commit `5f5dac9`). Your per-slide report
found five diagram slides clipped at the bottom at 1920x1080: week-01 s7,
week-03 s7 (worst), week-05 s6, week-09 s6, week-10 s9.

## What the author changed

Five deck files have been replaced in `src/decks/` — do not edit them:

- `week-05`: removed the slide heading on the diagram slide; the SVG carries
  its own heading ("What each attribute buys"), which is the duplicate you saw.
- `week-09`: the line under the map moved into the slide heading, so nothing
  sits below the image.
- `week-06` slide 10: "A support's decisions are the easiest to name."
- `week-10`: impact title is now "Turn the lead into map".
- `week-01`: the "Deciding, not reacting" quote slide's tail is shorter.

## What you are authorised to do

The root cause is that the diagrams are taller than they are wide and the
deck scales them to full width. Fix it **once, in CSS**, not per slide:

- You may add rules to `src/decks/theme.css`, **below the existing
  `@import`**, and nowhere else in `src/decks/`. This is a one-time
  authorisation for this task; the file stays author-owned.
- Aim: an image on a slide never exceeds the space left under the slide's
  heading, keeps its aspect ratio, and is centred. Something like capping
  `max-height` on slide images with `width: auto` and `object-fit: contain`
  — you choose the selector and value, but use the deck's own structure
  (inspect the built HTML first) rather than guessing.
- Do not restate any colour; the file's header comment explains why.

## Verify

1. `pnpm check` green.
2. Screenshot at 1920x1080 and `Read`: every diagram slide (week-01, 02, 03,
   04, 05, 09, 10) **plus** week-02 s9 and week-04 s6, which were clean
   before — the rule must not shrink them into illegibility. Also check
   week-06 slide 13's colour oddity and say what it is.
3. One spot check at 390x844 on week-03's diagram slide.

Report per slide: fits / still clipped, and whether labels stay readable.

## Commit

One commit: the five decks and `theme.css`. Message:
`Fit diagram slides to the frame; deck copy fixes`. Include the
uncommitted `[judgement]` log entry from the last pass in this commit, then
write this pass's own log entry after it, citing the new hash.

## Part 2 — bring `docs/` in line with twelve decks

Do this **after** Part 1's commit and log entry.

### Authorisation

`docs/*.md` are author-owned, and `start-here.md` tells you not to edit them.
**For this task only, the author authorises you to edit `docs/weeks.md` and
`docs/course-plan.md`, limited to the deck lines listed below.** Nothing
else in `docs/`, and no other line in those two files. The rule returns once
this commit lands. Say in the log entry that the edit was made under this
one-time authorisation.

Line numbers are from an older copy — find each line by its text.

### `docs/weeks.md`

- Each of the eleven `- **deck_reason:** …` lines (weeks 1, 3–7, 9–12):
  replace the whole line with `` - **Deck:** `/decks/week-NN/`. ``
- Week 8's line starting `- **Deck:** none, unless the optional second deck
  is made.`: replace the whole line with `` - **Deck:** `/decks/week-08/`. ``
- Week 2's line that reads "this week carries the course's one deck …
  Written by the author.": replace the whole line with
  `` - **Deck:** `/decks/week-02/`. ``

Provenance lives in one place (`course-plan.md`, below), not twelve.

### `docs/course-plan.md`

1. In `### Decks`, replace the three bullets that begin
   `- **One flagship deck: week 2`, `- If time allows, a second deck` and
   `- Every other lecture declares` with this single bullet:

   ```
   - **Every lecture has a deck** (`/decks/week-01/` to `/decks/week-12/`).
     This reverses the original plan of one flagship deck on week 2, with the
     other eleven declaring `deck: none` and a `deck_reason`. Those reasons
     were phrased as teaching arguments, but the real constraint was cost: a
     deck meant designing one by hand, and a polished hand-made deck would
     have pulled toward third-party artwork. Once decks could be drafted with
     AI from each lecture page, reusing the in-house diagrams, the cost
     argument fell away and the reasons were removed rather than kept.
   ```
2. Replace the bullet `- **Decks are written by the course author.** …`
   (all four of its lines) with:

   ```
   - **Decks are drafted with AI in the author's planning session**, from
     the lecture page, and reviewed and accepted by the author before they
     enter the repo. The build agent's part is plumbing only: adding the
     finished file, wiring the lecture's `slides:` link, building it, and
     checking every slide at both marking viewports.
   ```
3. In `## 9. PROCESS.md narrative seeds`, replace
   `` - One deck only, with `deck_reason` turning each absence into a commitment. ``
   with
   `` - One deck only, with `deck_reason` turning each absence into a commitment — then reversed on 20 Sep, when the reasons turned out to be covering for cost (`5f5dac9`). ``
4. In `## 10. Open items`, replace
   `- [x] Flagship deck: week 2, written by the author.` with
   `- [x] Decks: all twelve weeks, drafted with AI and reviewed by the author (reversed from one flagship deck on 20 Sep).`

Leave the §8 spec-check line ("Every lecture page either links an existing
deck or carries `deck: none`…") as it is: the test still holds.
Leave the schedule table row for Sat 19 Sep as it is: it records the plan
at the time.

### `CLAUDE.md`

Not in scope. Its rule that the build agent does not write slide content
still holds — you did not write these decks. Do not edit it.

### Verify and commit

- `grep -n "one deck\|deck_reason\|flagship\|Written by the author" docs/weeks.md docs/course-plan.md`
  and report every remaining hit, saying why each one is correct to keep.
- `pnpm check` green.
- One commit, only these two files. Message:
  `docs: record the switch to a deck for every lecture`.
- Then a `[judgement]` log entry citing its real hash, stating the
  one-time authorisation.

## Do not

- touch `PROCESS.md`, any deck `.mdx`, `CLAUDE.md`, or any `docs/` file or
  line not listed above
- push — the author will push after reading the report
