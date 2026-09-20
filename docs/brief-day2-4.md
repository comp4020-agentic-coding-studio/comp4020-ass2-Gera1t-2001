# Brief — D8: rulings on the D4 survivors and the D7 findings

Author's rulings on the seven open items your D7 report ended with. Do these
in order, one commit per lettered item unless the item says otherwise, and log
each one after the commit with its real hash. Nothing here needs a new page or
a new route — every change is text on a page that already exists.

If any instruction below contradicts what is actually in the repo, the repo
wins: say so in your report rather than forcing the edit.

---

## A. Lobby Lab 8 — "because five is this course's unit"

**Keep, unchanged.** It is a joke about the game, not about a university. Five
is the unit because a Dota team is five, and a reader who knows nothing about
the course still reads that line correctly. No edit.

## B. Lobby Lab 12 — "we would rather say so than quietly move a deadline"

**Keep the commitment, drop the comparison.** The clause as written implies
that somewhere, someone quietly moves deadlines — a sideswipe at an
institution this course has already said does not exist. Replace it with the
course stating its own practice and nothing about anyone else's. Something in
this shape, in the page's own voice:

> If a date on this page changes, the reason for the change will be on this
> page too.

Keep the sentence it sits in intact otherwise. One commit with A (no edit) and
B together is fine; the log entry is `[judgement]`.

## C. The template caption repeated on 12 labs and 4 assessments

**Find out where it comes from before touching anything.**

- If the caption is emitted by a layout or component and the pages do not
  carry the text, it is chrome. **Leave it.** A marker reading sixteen pages
  sees a site with consistent furniture, which is what furniture is for.
- If the text is authored — sixteen near-identical lines sitting in
  frontmatter or in the body of sixteen files — **delete the field or the
  line** rather than writing sixteen variations of it. A caption that says
  nothing per-page is worth less than no caption.

Report which of the two it was. If it is the second case and deleting breaks a
layout that expects the field, say so and stop instead of improvising a
replacement.

## D. The Policies page restating facts that live elsewhere

The rule, and it applies beyond this pass:

> **Every fact has one home page that states it in full. Everywhere else
> refers to that page in half a sentence and does not restate it.**

Apply it to the two cases you found:

- **Hall of Fame** — home is the Hall of Fame page. The other two places name
  it and link to it; they do not explain what it is.
- **Assignment 1 marking improvement against the Lobby Lab 2 baseline** — home
  is the Assignment 1 page. Lobby Lab 2 says the lab's numbers are the
  baseline Assignment 1 is measured against, and links. Policies says
  Assignment 1 is the only mechanical assessment and links; it does not
  re-explain the baseline.

This is **not** a rule against a policy page mentioning things — a policy page
that mentioned nothing would be useless. It is a rule against the same
paragraph appearing three times under three headings.

While you are in there, run the same test across the rest of the site and
report — do not fix — any other fact that is stated in full in three or more
places.

## E. The "a reason that is not '[naive answer]'" formula

Five uses is a tic. **Thin it to two: keep it in week 3 and week 9, rewrite it
out of weeks 5, 10 and 11.**

Week 3 and week 9 keep it because in both the naive answer is the one a
beginner will actually give and the point of the exercise is to take that
answer off the table. In 5, 10 and 11 the formula is doing work a plain
question does as well — ask the plain question.

Do not replace it with a second formula used three times. Three different
sentences.

## F. Week 1 stating its own list twice

**Straight fix.** Keep the statement in the place where the list is used; cut
the other. If it is genuinely ambiguous which of the two is the working copy,
keep the later one — a list is more useful next to the thing it applies to
than in an introduction.

## G. Verify and report

After A–F:

- `pnpm check` and `pnpm check:evidence` both green
- both changed page families spot-checked in a fresh preview build at
  1920×1080 and 390×844
- no dead internal links introduced by the D-item link additions
- log entries written for every commit, each citing its own real hash

Then report: what changed, what you found under C and under D's site-wide
sweep, and anything you left alone because the repo disagreed with this file.

---

## What is not in this pass

Do not start the deck (`src/decks/`), do not touch `PROCESS.md`, and do not
open `docs/*.md`. Those are the author's. After G, stop and wait.
