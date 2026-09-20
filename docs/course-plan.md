# Course plan — SLOP1904 *Welcome to Dota. You Will Lose.*

This file is the source of truth for the course the site describes. Every
page, every spec test and every `CLAUDE.md` rule about the course derives from
it. When a page and this file disagree, this file wins; when this file needs
to change, change it first and cite the commit.

Decisions here were made by the course author in planning, before any page was
built. Items still open are listed at the end, not guessed at in pages.

---

## 1. What the course is

| | |
|---|---|
| Code | `SLOP1904` (1000-level: the audience is complete beginners; the last three digits were allocated to this repo) |
| Title | **Welcome to Dota. You Will Lose.** |
| Subject | Teaching Dota 2 to people who have never played it, starting from the game's mechanics |
| Audience | Assumed to have never played a MOBA. Players with League of Legends or other MOBA experience get an optional bridging passage in week 1, nothing more |
| Spine (primary) | **The twelve decisions a new player runs into.** One decision per week; each week's mechanics are taught as the tools that answer that week's decision |
| Lens (secondary) | **Resource economics** — gold, experience, time, space, information. A running analytical lens across all twelve weeks, and the thing a player keeps refining after the basics |
| Tone | **Satire lives in the title, the week titles and the framing lines; the body prose is sincere** — coaching or plain explanation, whichever the material needs. The model is Purge's *Welcome to Dota, You Suck*: the joke is on the cover, the content is not joking |
| Patch anchor | **7.41f.** The course teaches the stable mechanics of the major version; every number on the site comes from `FACTS.md`, a small pinned facts file, never from memory |
| Term | Semester 1, 2027. Teaching starts Monday 22 February 2027 and ends Friday 28 May 2027; a two-week break follows week 6 |

### Why this course exists (the pitch, for the home page)

Every beginner resource the Dota community has produced is either a reference
or a checklist: Purge's long-form guide, the wiki link piles, Valve's
thirty-minute in-game tutorial. None of them is a *course* — something with
an order, with practice, and with assessment. This one arranges the same
material into twelve weeks and makes you hand things in.

### Where the course disagrees with Valve

Valve's in-game tutorial is ordered by "survive your first match": last-hitting
is in section 3, teamfight initiation in section 2. This course is ordered by
the sequence in which a player has to *learn to decide*: last-hitting is week
2, teamfights are week 11. That is a deliberate curriculum stance and it goes
in `PROCESS.md`.

---

## 2. Calendar

Lectures are dated on the Monday of each teaching week.

| Week | Monday | Notes |
|---|---|---|
| 1 | 2027-02-22 | |
| 2 | 2027-03-01 | A1 opens |
| 3 | 2027-03-08 | |
| 4 | 2027-03-15 | A1 due Fri 19 Mar |
| 5 | 2027-03-22 | |
| 6 | 2027-03-29 | A2 opens |
| — | 2027-04-05, 2027-04-12 | Teaching break, two weeks |
| 7 | 2027-04-19 | |
| 8 | 2027-04-26 | A2 due Fri 30 Apr |
| 9 | 2027-05-03 | A3 opens |
| 10 | 2027-05-10 | |
| 11 | 2027-05-17 | A3 due Fri 21 May; A4 teams form |
| 12 | 2027-05-24 | A4 matches; A4 review due Fri 28 May |

`course-config.ts`: `startDate: "2027-02-22"`, `endDate: "2027-05-28"`. Every
dated node must fall inside that range (the shipped `data-integrity` test
enforces it).

---

## 3. The twelve weeks

Fixed sections every week's page carries, in this order:

1. **This week's decision**
2. **Mechanics**
3. **The resource lens**
4. **Before the lecture** — the matching section of Valve's in-game tutorial
5. **This week's hero** — only the 1–2 abilities relevant to this week's decision, each with one line on *why this week*; the full kit is an external link to the official hero page
6. **This week's item**
7. **After this week you can…**

| Wk | Decision | Mechanics | Resource lens | Valve tutorial section | Hero / item |
|---|---|---|---|---|---|
| 1 | Why can't I even beat the bots? | The shape of a match: three lanes, the Ancient, the win condition; how it differs from LoL (bridging passage) | Overview of the five resources | §1: This is Dota, basic mechanics, looking around | — / — |
| 2 | Should I hit this creep? | Last-hitting, denying, creep aggro, tower aggro | Gold = time | §3: Last-hitting | Dragon Knight (Dragon Blood) / Tango + Iron Branch (starting items) |
| 3 | Where is the lane, and where do I stand? | Creep equilibrium, pushing vs. holding, lane balance | Space traded for safety | §1: Basic mechanics | Wraith King / Magic Wand |
| 4 | When should I leave the lane? | Pulling, blocking, stacking, camp respawns, the courier | Time traded for experience | §3: Pulling, stacking neutrals; §1: Using the courier | Lion / Observer & Sentry Wards (as a placeholder, taught properly in week 9) |
| 5 | Who should I pick — attributes | Strength / Agility / Intelligence / Universal; primary attribute → HP, attack speed, armour, magic resistance | Attributes are gold's exchange rate | §1: Try a hero | Sven, Phantom Assassin, Zeus (one per attribute) / attribute items |
| 6 | What am I for in this team — roles | Positions 1–5, core vs. support, power spikes. Discussion: the community disagrees on a beginner's first role (most say support; some say mid) | How experience is distributed | §3 intro: heroes vs. creeps | Crystal Maiden (5), Juggernaut (1) / Arcane Boots |
| 7 | What do I buy? | The shop, recipes, consumables, the TP scroll, the logic of a build. Stance: follow the recommended build first; adjust once you understand why | Gold → stats conversion | §1: Regen consumables, teleporting; §4: Build guides, the item panel | Lich / Power Treads |
| 8 | When should I *not* engage — control | Stuns, status effects, dispels, spell immunity, evasion | BKB = buying five seconds of certainty | §2: Stuns and control, status effects; §4: BKB, Glimmer Cape, evasion | Sand King (Burrowstrike) / Black King Bar, Glimmer Cape |
| 9 | Where did he go — information | Warding, fog, detecting invisibility, minimap habits, pings | Information is the cheapest and the most expensive resource | §2: Map vision; §3: Detecting invisibility | Vengeful Spirit / Observer & Sentry Wards (proper) |
| 10 | Towers or heroes — objectives | Towers, barracks, Roshan and the Aegis, outposts, runes, TP defence | Mid-game: converting a lead into map | §2: Mid-game farming, Roshan and the Aegis | Enigma (Black Hole) / Blink Dagger |
| 11 | Who goes first — teamfights and drafting | Initiation and counter-initiation, positioning, buyback, high ground; **Captains Mode drafting primer (prerequisite for A4)** | Time: whose curve peaks later | §2: Teamfight initiation; §4: All Pick matches | Tidehunter / Refresher Orb |
| 12 | Capstone | The A4 best-of-three; how to read patch notes; review as a habit | The five resources, revisited | §4 intro: "the possibilities are endless" | — |

### Decks

- **Every lecture has a deck** (`/decks/week-01/` to `/decks/week-12/`).
  This reverses the original plan of one flagship deck on week 2, with the
  other eleven declaring `deck: none` and a `deck_reason`. Those reasons
  were phrased as teaching arguments, but the real constraint was cost: a
  deck meant designing one by hand, and a polished hand-made deck would
  have pulled toward third-party artwork. Once decks could be drafted with
  AI from each lecture page, reusing the in-house diagrams, the cost
  argument fell away and the reasons were removed rather than kept.
- Decks use the starter's astromotion format (`src/decks/<name>.deck.mdx`,
  markdown with `---` between slides). A deck is a lecture, not a copy of the
  week page: fewer words, more pictures, one judgement per slide.
- **Decks are drafted with AI in the author's planning session**, from
  the lecture page, and reviewed and accepted by the author before they
  enter the repo. The build agent's part is plumbing only: adding the
  finished file, wiring the lecture's `slides:` link, building it, and
  checking every slide at both marking viewports.

### Lobby Labs (the `sessions` collection)

The platform's fixed `sessions` collection is this course's weekly **Lobby
Lab**: `sessionLabels` = Lobby Lab / Lobby Labs, while the collection key,
refs and URL stay `sessions` as the platform requires. *Lab* is the course's
tutorial slot; *Lobby* is where it is held. One per teaching week, twelve in
all, on the Thursday of the same week as its Monday lecture — which puts each
one the day before an assignment deadline in weeks 4, 8 and 11, so the last
chance to ask a question in person is always in the room.

A Lobby Lab is a different genre from a lecture, not a restatement of it. The
lecture answers *why*; the Lobby Lab answers *how you know you can do it*.
Lecture titles are questions, Lobby Lab titles are verb phrases, and each
Lobby Lab page carries only three things: what to bring, how it runs, and a
three-line `spec:` a reader can judge from outside. Every Lobby Lab also
states in a `needs_others` field why it cannot be done alone — someone to
count your last hits, an opponent contesting the lane, four teammates to call
to, a rival captain across the draft. A drill with no answer to that is
homework, not a class.

---

## 4. Assessment — 100% across four assignments, no exam

| | Form | Weight | Opens | Due |
|---|---|---|---|---|
| A1 | Last-hit test. A screenshot from a practice lobby showing the required count by the required minute; the threshold is published when the assignment opens | 10% | Week 2 | Week 4 (Fri 19 Mar) |
| A2 | Replay review of a bot match — a written report in the style of Day9's replay-review format | 20% | Week 6 | Week 8 (Fri 30 Apr) |
| A3 | A guide to your favourite hero: build, skill order, laning plan. The full ability breakdown the weekly pages deliberately omit is done here, by the student | 30% | Week 9 | Week 11 (Fri 21 May) |
| A4 | Group. Self-formed teams of five from the cohort, a tutor joins each as coach; one **best-of-three Captains Mode** match against another team from the course; a post-match review covering the draft, lane assignments and the decisions that decided it. Split: team review 25 · individual reflection 10 · participation 5 (of the 40) | 40% | Teams form week 11 | Match week 12; review due Fri 28 May |

Schema note: `marking.criteria` weights must sum to 100 *within* an
assessment, so A4 renders as 62.5 / 25 / 12.5.

**MVP.** The winning side's MVP goes on a standalone **Hall of Fame** page.
**It carries no marks.** (A "+1 mark" bonus was rejected: it breaks the
sum-to-100 check and rewards winning rather than learning.)

### Policies the site must state

- When the cohort is not a multiple of ten, tutors fill the empty seats. Teams
  choose their own captain.
- The Hall of Fame carries no marks.
- Numbers are pinned to patch 7.41f. Mid-semester patches do not change the
  marking criteria.

---

## 5. Hero pool and ability policy

Thirteen heroes at present (see open items): Dragon Knight, Wraith King, Lion,
Sven, Phantom Assassin, Zeus, Crystal Maiden, Juggernaut, Lich, Sand King,
Vengeful Spirit, Enigma, Tidehunter.

- A standalone **Hero Pool** page: hero, role, first-appearance week, official
  link. Weekly pages reference it rather than restate it.
- A week teaches **at most two abilities**, each with one line on why this
  week.
- Full kits are **external links only**: the official hero page at
  `https://www.dota2.com/hero/<slug>` and Liquipedia. Ability text is never
  copied onto the site. Slugs are verified one by one against the live site
  before use; an agent never guesses one.
- Purge's "heroes a beginner should not pick" list may be cited as a
  counter-example in week 5.

---

## 6. Data and artwork policy

- **Data is free to use.** Hero stats, item prices and ability numbers are
  facts. Source: OpenDota constants and Liquipedia, pinned to 7.41f. The
  course keeps **one small `FACTS.md`** holding only the figures a page
  actually states — likely a dozen or two — each with its source, plus a
  typed constants module pages read from. The full three-layer pipeline was
  planned and cut: the marker reads the twelve weeks, not a data layer.
- **Visuals are made in-house.** SVG diagrams: creep equilibrium, pull timing,
  attribute-to-stat mapping, a LoL ↔ Dota comparison table, and so on. The
  site deploys publicly under CC BY-NC-SA; `check:evidence` inspects artwork
  provenance, and Valve art has none the course can claim.
- If a screenshot is genuinely unavoidable: small, captioned © Valve, and the
  trade-off written up in `PROCESS.md`.
- Every starter placeholder image is replaced or removed.

---

## 7. Sources and what each contributes

| Source | What the course borrows |
|---|---|
| Purge, *Welcome to Dota, You Suck* | The tone; the beginner blacklist of heroes (week 5 counter-example) |
| Valve's in-game tutorial (four sections) | Each week's pre-lecture task points at the matching section; the ordering disagreement goes in `PROCESS.md` |
| r/learndota2 wiki | The LoL bridging passage in week 1; an original comparison table, not a copy |
| Day9 Learns Dota | The design basis for A2's replay-review format |
| TorteDeLini's in-game build guides | Week 7's stance: follow the guide first, then understand why |
| Commercial 2026 beginner guides (teamsmurf, earlyguides, etc.) | The consensus list (bots/Turbo first, simple heroes, last-hit first, mute toxicity, stick to 3–5 heroes); the "first role" disagreement as week 6's discussion |
| Liquipedia / OpenDota | The only source of numbers |

---

## 8. Spec checks the course owns

Candidate `spec/` tests, each protecting a promise the build cannot see:

1. Every lecture's frontmatter has exactly one `decision`; no two weeks share one.
2. The hero pool is a fixed list with no duplicates; every hero mention links to a verified official slug.
3. Each week mentions ≤ 2 hero abilities, each with a *why this week* line.
4. Every week has an "After this week you can…" section.
5. Assessment weights sum to exactly 100; each assessment opens before it is due; A4 is due after the week that teaches Captains Mode drafting (week 11).
6. Every lecture page either links an existing deck or carries `deck: none` with a non-empty `deck_reason`.
7. The Hall of Fame page contains no mark or weight field.
8. Every number cites patch 7.41f (no other patch string appears anywhere).
9. No template placeholder artwork remains.
10. No published lecture, Lobby Lab or assessment carries `draft: true` at ship time (written red-first once the stubs are filled).

`CLAUDE.md` rule skeleton: one decision per week · abilities ≤ 2, each with a
rationale · numbers only from data pinned to 7.41f, never from memory ·
in-house visuals only, no Valve art · a deck is a lecture, not a page copy ·
repo, commits and prompts in English · every claim in `PROCESS.md` cites a
commit.

---

## 9. `PROCESS.md` narrative seeds

- "Order of decisions, not order of survival": the disagreement with Valve's tutorial.
- Rejecting the "+1 mark" MVP bonus in favour of a Hall of Fame: the sum-to-100 check, and rewarding learning rather than winning.
- Three "attribute hero showcase" weeks were split into one case-study hero per week, to avoid twelve weeks that repeat one another.
- One deck only, with `deck_reason` turning each absence into a commitment — then reversed on 20 Sep, when the reasons turned out to be covering for cost (`5f5dac9`).
- Data and visuals handled separately for copyright.
- The build agent's own review of the schedule (Wed 16 Sep): it argued the plan put a data layer ahead of the twelve weeks the marker actually reads, that artwork is a hard gate not a finish, and that nothing checked `draft: true` off. Accepted, with the draft check deferred to Friday so the suite stays readable in between.
- The ≤ 2 abilities rule: it stops an agent generating encyclopaedic slop; the full breakdown is A3's job.

---

## 10. Open items

Resolved in planning (2026-09-16):

- [x] Title: *Welcome to Dota. You Will Lose.*
- [x] Calendar: the starter's Semester 1 2027 dates, unchanged (§2).
- [x] Decks: all twelve weeks, drafted with AI and reviewed by the author (reversed from one flagship deck on 20 Sep).
- [x] The `sessions` collection is this course's weekly **Lobby Lab**, twelve of them (§3). The collection key, refs and URL stay `sessions`; only `sessionLabels` changes.
- [x] Data layer reduced to one small `FACTS.md` (§6).
- [x] Patch 7.41 removed Facets (confirmed 16 Sep from patch coverage); week 5 teaches the four attributes only.

Still open — pages must not guess at these:

- [ ] The thirteen official hero slugs, verified one by one.
- [ ] Hero pool: keep thirteen, or cut week 5 to two heroes.
- [ ] A1's exact last-hit threshold (published when A1 opens; pinned once the 7.41f data lands).
- [ ] The teaching cast (`people`): who convenes, who tutors.

---

## 11. Build schedule (course author's plan, for reference)

| Day | Work |
|---|---|
| Wed 16 Sep | This plan; `CLAUDE.md` rules; red spec tests; course record, four assessments, twelve lecture stubs, policies stub, home page |
| Thu 17 Sep | **Fill the twelve weeks** (the thing the marker reads); the cast; the Hero Pool page; the twelve Lobby Labs; replace the hero and card images (the two hard gates that cannot be deleted) |
| Fri 18 Sep | Hall of Fame page; `FACTS.md` and the figures the weeks need; the verified hero slugs; the `draft: true` check, red first, then green. (The twelve Lobby Labs and the cast moved forward into Thursday.) |
| Sat 19 Sep | The flagship deck (author-written); read non-adjacent weeks at both marking viewports; optional second deck |
| Sun 20 Sep | `PROCESS.md` (author-written, citing commits); `pnpm check` and `pnpm check:evidence`; deployment verified |
| Mon 21 Sep 12:00 | Due |

Reordered on Wednesday after the build agent's review: content before data,
artwork before the last day.
