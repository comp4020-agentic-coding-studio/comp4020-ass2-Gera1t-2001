# Day 2.3 — act on the adversarial read

Track C came back with findings, and most of the repetition it found was
**seeded in the author's notes, not invented by the build**. So the notes were
corrected first: `docs/labs.md` and `docs/weeks.md` both changed. **Re-sync
`docs/` before you start**, and bring the pages into line with the corrected
notes rather than inventing your own fixes.

Standing rules hold. One commit per step, log after with a real hash, never
touch `PROCESS.md`, `docs/*.md` and `src/decks/*` are not yours to edit,
report after each step and keep going.

---

## D0. The Hall of Fame page — a promise the site breaks

The policies page has a whole section titled *The Hall of Fame carries no
marks*, the home page links to it, and `/hall-of-fame/` is a 404. A course
site that states a policy about a page it does not have is the most concrete
defect Track C found, and it is a one-page fix.

Build it: a standalone page, the winning side's most valuable player from each
Assignment 4 series, and the rule stated plainly — **no marks attached, ever**.
Empty is correct for a course that has not run yet; say so in a sentence
rather than leaving a bare heading. Link it from the policies section that
already talks about it, and from the Assignment 4 page.

Then the assertion that stops this recurring: **every internal link in `dist/`
resolves to a page that exists.** The build's checker did not catch this one;
find out why before you write the test, and say what you found.

Commit: `Add the Hall of Fame page and a dead-internal-link check`.

## D1. De-duplicate the Lobby Labs

`docs/labs.md` now carries two new conventions. Apply them.

- **Quantities are set on the day, and the site says so once.** The convention
  goes on the Lobby Labs **index** page, in one sentence. Each lab then states
  that the tutor sets the number **with no explanation attached**. Five pages
  each justifying their own silence in the same sentence shape was the single
  clearest repetition in the review.
- **"Say it out loud" survives in labs 8 and 10 only**, where being heard is
  the mechanism. Lab 7 has been rewritten in the notes to use a **written**
  build order instead — follow the notes. Check the remaining labs for the
  same device creeping in and report any you find.
- **The template blurb on `src/pages/sessions/[slug].astro`** renders on all
  twelve labs and is the one sentence that appears twelve times. Replace it
  with something this course would say, or remove it — but it cannot stay as
  it is.

Commit: `Stop the Lobby Labs repeating one another`.

## D2. Lectures and labs must differ in kind

Weeks 4 and 5 shipped with the **same outcome line on both pages** — "predict
the next camp spawn before it happens" appears on the lecture and in the lab's
spec, so one of the two is doing no work. The same defect, reworded, in week 5.

`docs/weeks.md` now states the rule and gives replacement outcomes for weeks
2, 3, 4 and 5: **the lab's `spec` records what a student did in the room; the
lecture's outcomes record what they can now judge, name or predict.** Apply
the new lines, then **check the other eight weeks yourself** against the rule
and report any line that could sit on either page.

Then encode it: a test that no lecture's outcome line appears, in normalised
form, in that week's Lobby Lab spec. Approximate matching is acceptable here
and the approximation should be documented in the test.

Commit: `Separate what the lectures claim from what the labs check`.

## D3. The overlaps between weeks

- **Weeks 2 and 3** had outcome lines that read more naturally on each other's
  page. New lines are in the notes.
- **Weeks 7 and 10** make the same argument twice — an item is not spending,
  it is infrastructure. Week 7's phrasing has been changed in the notes; week
  10 keeps the structural framing, since that is its own week's subject. Apply
  week 7's and leave week 10 alone.

Commit: `Rewrite the outcomes that belonged to another week`.

## D4. Satire that leaked into the body

The course's own rule: the joke lives in titles and framing lines, the body
is sincere. Three places crossed it.

- **Week 12 ends on the Hall of Fame gag**, which undercuts the review habit
  the same page is trying to establish. The notes now say the Hall of Fame is
  mentioned **early**, in a sentence about how match day runs, and the page
  ends on review. Fix the ordering.
- **Week 7's "that is the point at which you have graduated"** — reworded in
  the notes.
- Two further lines the review flagged, in Lobby Lab 8 and Lobby Lab 12,
  where a design decision is announced in a knowing tone rather than simply
  stated. Report them with your proposed rewrites and **wait** — these are
  close enough to the line that the author decides.

Commit: `Keep the satire in the titles`.

## D5. The home page does not do its job

The ten-minute read got the pitch — twelve decisions, five resources, four
assignments, losing as the argument. It then could not find: when the course
runs, what the assignments are worth, what a "Lobby Lab" is (the **second item
in the navigation**), or who teaches. *Where to go next* offers three cards
while the navigation has six; Heroes and People are never mentioned.

Fix all four. A sentence on the term and the shape of a week; one line saying
what a Lobby Lab is, since the name is invented and the site never explains it;
the assessment card gains the weights; and *Where to go next* covers every
place the navigation goes, or the navigation loses what the page will not
vouch for.

Commit: `Make the home page answer what the navigation promises`.

## D6. "Policies and support" has no support

The page is three rules and no support: no one to ask, nothing about what to
do if something goes wrong. Either the title is wrong or the page is.

**Make the page right, not the title.** A course whose whole subject is a
competitive online game has real questions to answer, and answering them is
where a course shows it has thought about its students rather than its
syllabus: what a student does if they cannot make match day; what happens
when a public lobby turns abusive; whether the course expects a particular
speed of hand, and what it offers a student whose hands do not work that way;
where extensions come from.

**Draft it and stop** — paste the sections in chat and wait. This is course
policy and the author writes policy.

## D7. Re-run the review with the same sensor

Run the C2 repetition review again, **same prompt, same three lists**, against
the fixed pages. A fix you have not re-measured is a fix you hope worked.

Report the new lists beside the old ones and say plainly which findings are
gone, which survive, and which are new. Some will survive — twelve weeks of
one course *should* rhyme in places — and the honest answer is which
repetitions are now deliberate.

Commit nothing for this step unless the log needs an entry.
