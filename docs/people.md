# Teaching cast notes — the author's content for the `people` collection

Authored by the course author. Same rule as `weeks.md` and `labs.md`: the
agent expands these into prose and does not add material. No figures.

## Two decisions behind this file

**The cast is invented.** Dota's real teachers appear on this site as cited
work, never as staff: a `people` entry carries an affiliation, an email and a
"how to reach me" line, and inventing those for a real named person would be
fabricating a record about them. The three practitioners this course actually
learns from are cited on the pages that use their work — see the last section.

**Everyone here goes by a handle**, because that is how this game's people are
known. The handle is not decoration: each one names the thing that person
teaches, so a student reading the staff list already knows who to ask.

## Portraits

**No `photo` on any entry today.** The schema allows an entry without one, and
adding a photo obliges a `photoAlt`. Self-made SVG avatars are planned, in the
same visual language as the home page artwork, and land in a later pass; until
then the pages are text.

**Delete `src/content/people/idris-fenn.avif` and
`src/content/people/marisol-quaye.avif`** along with their entries. A deleted
file passes `pnpm check:evidence` — that closes two of its four image gates
today without drawing anything.

---

## The four entries

Shared fields: `affiliation: Slop University School of Competitive Play`,
`published: true`, no `photo`, no `url`.

### 1. `wen-adeyemi.md` — Convenor

- **title:** Wen "Courier" Adeyemi
- **role:** convenor
- **email:** wen.adeyemi@slop.university
- **contact:** Ask in a Lobby Lab; email for anything that cannot wait until Thursday.
- **description:** The course's convenor, a retired position five who now teaches the decisions she spent a career making for other people.
- **Body** (two short paragraphs):
  - She played position five for long enough to stop finding it thankless. The handle is the joke a support makes about themselves — you buy the wards, you carry the items, you die first — and it is also the course's argument: the least visible player is making the most decisions per minute, and this course is arranged around decisions.
  - She designed the twelve-week spine and teaches the weeks that frame it: what the game actually is (week 1), what attributes buy you (week 5), what a role means (week 6, with Nadia), and the information week (week 9). She marks Assignment 3.

### 2. `hana-okabe.md` — Tutor

- **title:** Hana "Denied" Okabe
- **role:** tutor
- **email:** hana.okabe@slop.university
- **contact:** Thursdays in the Lobby Lab, and by email in the days before an assignment is due.
- **description:** A tutor who came from junior coaching and believes almost everything a beginner gets wrong in a game happens in the first ten minutes of it.
- **Body:**
  - The handle is a boast and a teaching position at once. Denying is the mechanic that has no equivalent in any neighbouring game, and she treats it as the place a new player first discovers that Dota rewards refusal as much as it rewards action.
  - She teaches the laning weeks — the creep (week 2), the wave (week 3), leaving it (week 4) — and the shopping week (week 7), because what you buy is decided by how long you can stay. She sets and marks Assignment 1.

### 3. `nadia-petrova.md` — Tutor

- **title:** Nadia "Rewind" Petrova
- **role:** tutor
- **email:** nadia.petrova@slop.university
- **contact:** By email, or stay behind after the Lobby Lab in weeks 6 and 10.
- **description:** A tutor who works as an analyst and holds that you learn more from one game watched properly than from five played badly.
- **Body:**
  - She named herself after the only button that matters in a replay. Her claim, which the course has taken as its own, is that a decision only becomes visible in hindsight — which makes review the skill everything else in the course is eventually filtered through.
  - She teaches roles alongside Wen (week 6) and the objectives week (week 10), and runs the replay Lobby Lab that Assignment 2 is modelled on. She marks Assignment 2.

### 4. `grace-nakamura.md` — Tutor

- **title:** Grace "Banphase" Nakamura
- **role:** tutor
- **email:** grace.nakamura@slop.university
- **contact:** In the Lobby Lab; teams can book time with her in the weeks before match day.
- **description:** A tutor who captained a league side and is more interested in the heroes a team removes than in the ones it keeps.
- **Body:**
  - Most people remember a draft by its picks. Her handle says where she thinks the work is: a ban is a team admitting what it cannot beat, out loud, in public, before the game starts, and that admission is the most honest thing that happens in a match.
  - She teaches control (week 8), teamfights and drafting (week 11) and the capstone (week 12, with Wen), coaches during Assignment 4, and marks it.

---

## Who teaches which week

Declared with `teachers:` in each lecture's frontmatter, and mirrored on that
week's Lobby Lab — the person who gives the lecture runs the lab.

| Week | Teachers |
|---|---|
| 1 | wen-adeyemi |
| 2 | hana-okabe |
| 3 | hana-okabe |
| 4 | hana-okabe |
| 5 | wen-adeyemi |
| 6 | wen-adeyemi, nadia-petrova |
| 7 | hana-okabe |
| 8 | grace-nakamura |
| 9 | wen-adeyemi |
| 10 | nadia-petrova |
| 11 | grace-nakamura |
| 12 | grace-nakamura, wen-adeyemi |

Week 6 carries two teachers deliberately: it is the week the course argues
with itself about what a beginner should play first, and the argument has two
sides in the room.

---

## The people index page

`src/pages/people/index.mdx` — replace the starter body with two sentences:
that the course is taught by four people and every week names which of them
is responsible for it, and that all four are known by their handles because
that is how this game's people are known. Then the existing grid component.

---

## Real practitioners, cited not employed

These three are cited on the pages that use their work, as external links in
prose or in `links:`. **No invented quotations, and nothing attributed to any
of them that is not in a linkable public work.**

| Person | Cited on | For what |
|---|---|---|
| **Purge** (Kevin Godec) | Home page tone; week 5 | *Welcome to Dota, You Suck* — the model for this course's register, and the reasoning behind a beginner avoid-list (the criteria, not the roster) |
| **Day9** (Sean Plott) | Assignment 2; Lobby Lab 6 | The replay-review format that Assignment 2 is built on |
| **TorteDeLini** | Week 7 | The in-game build guides behind week 7's position: follow a guide first, disagree with it later |

No other real person is named anywhere on the site.
