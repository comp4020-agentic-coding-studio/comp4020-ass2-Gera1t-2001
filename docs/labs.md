# Lobby Lab notes — the author's content for the twelve `sessions` pages

Authored by the course author. Same rule as `weeks.md`: the agent **expands
these into prose and does not add material.** No figures anywhere.

## Teachers

Every Lobby Lab carries `teachers:` — the same person who gives that week's
lecture runs that week's lab. The table is in `docs/people.md`.

## Naming

The collection key, refs and URL stay `sessions`, as the platform requires.
What students see is `sessionLabels = { singular: "Lobby Lab", plural: "Lobby
Labs" }` in `src/site-config.ts`. *Lab* is this course's tutorial slot;
*Lobby* is where it is held.

## The genre rule — the most important thing in this file

There are already twelve lecture pages saying what each week's decision is.
If twelve Lobby Lab pages say it again, the site has **twenty-four pages that
repeat one another**, which is worse than twelve. So the division is fixed:

| | Lecture (Monday) | Lobby Lab (Thursday) |
|---|---|---|
| answers | what the decision is, and the mechanics behind it | how you know you can do it |
| form | explanation | instructions and a pass condition |
| title | a question | a verb phrase |
| body | the seven fixed sections | what to bring · how it runs · how you know it went well |
| without it | the student does not know why | the student knows but cannot do it |

Two consequences the pages must honour:

- **Every Lobby Lab carries a `needs_others` field** saying why it cannot be
  done alone. The twelve reasons are all different, and that is what keeps
  the twelve pages apart. A drill with no answer to that is homework, not a
  class.
- **Every `spec:` line is judgeable from outside.** Observable actions, never
  "understands X".
- **Quantities are set on the day, and the site says so once.** Where a drill
  needs a round length, a number of wards, a team size, the tutor sets it in
  the room. State that **once, on the Lobby Labs index page**, as a course
  convention. An individual lab then simply says the tutor sets it — with **no
  explanation attached**. Five pages each explaining their own silence in the
  same sentence shape is exactly the repetition this file exists to prevent.
- **"Say it out loud" is used in exactly two labs**, 8 and 10, where being
  heard by teammates and punished by opponents *is* the mechanism. Everywhere
  else the evidence a student produces is written, counted, drawn or played.
  A device used in half the labs is not a device, it is a tic.

## The schedule

Lobby Labs run on the Thursday of the same week as their Monday lecture,
which puts each one the day before the deadline in weeks 4, 8 and 11 — so the
last chance to ask a question in person is always in the room. Say that once,
on the index page.

| Week | Lecture | Lobby Lab | Note |
|---|---|---|---|
| 1 | 2027-02-22 | 2027-02-25 | |
| 2 | 2027-03-01 | 2027-03-04 | |
| 3 | 2027-03-08 | 2027-03-11 | |
| 4 | 2027-03-15 | 2027-03-18 | A1 due the next day |
| 5 | 2027-03-22 | 2027-03-25 | |
| 6 | 2027-03-29 | 2027-04-01 | |
| 7 | 2027-04-19 | 2027-04-22 | |
| 8 | 2027-04-26 | 2027-04-29 | A2 due the next day |
| 9 | 2027-05-03 | 2027-05-06 | |
| 10 | 2027-05-10 | 2027-05-13 | |
| 11 | 2027-05-17 | 2027-05-20 | A3 due the next day; A4 teams form |
| 12 | 2027-05-24 | **2027-05-25 (Tuesday)** | match day — see below |

**Week 12 is the deliberate exception.** If match day were the Thursday the
review would be due at noon the next day; the Tuesday leaves three days to
write it. One week not falling on a Thursday is the price, and the page says
so rather than hiding it. (The alternative, pushing the review into the exam
period, moves `endDate` and the data-integrity test with it.)

---

## Lobby Lab 1 — First blood is not the point (week 1)

- **Bring:** a Dota 2 client that runs, and a headset with a working mic.
- **How it runs:** five-person groups, one bot match each. One rule: nobody
  looks at the scoreboard. Afterwards each person says one sentence about
  what they were doing.
- **spec:**
  - your client gets you into a match and you know which lane you are in
  - you finish a whole game without leaving
  - you can say what was destroyed at the moment the game ended
- **needs_others:** week one's real failure is a client that will not install
  or a student who does not know where to click — and nobody solves that
  alone in their room, or asks. The first Lobby Lab's hidden agenda is
  getting everyone's environment working.
- **PROPOSED:** Turbo, and say why on the page — week one's goal is that
  everybody finishes a game inside the session, not that the pace matches the
  rest of the course. Normal matches start in week 2.

## Lobby Lab 2 — Count the last hits (week 2)

- **Bring:** the hero you intend to use for A1.
- **How it runs:** in pairs, in practice mode, taking turns. One player takes
  last hits; the other **counts out loud** — the counter is learning too,
  because they have to judge which hits count. Swap. The last ten minutes:
  the tutor demonstrates the rhythm of denying.
- **spec:**
  - your partner counted your last hits over a fixed stretch and you wrote
    the number down
  - you denied at least once and your partner confirmed it
  - you can say whether the creeps you missed were hit early or late
- **needs_others:** counting your own last hits flatters you — you remember
  the ones you got. Somebody else counting is how you get a real baseline,
  and A1 asks for progress from that baseline.
- **Connects to A1:** today's number is your starting point, not your mark.
  A1 is due in two weeks; the threshold is on the assessment page.

## Lobby Lab 3 — Hold the line (week 3)

- **Bring:** the hero from week 2.
- **How it runs:** a one-versus-one solo lane in a custom lobby. **The win
  condition is not kills — it is which side of the lane the wave is sitting
  on at the end.** Two rounds, swapping sides.
- **spec:**
  - you played both sides
  - you deliberately let a last hit go in one round, and can say why
  - you can name the moment the wave got away from you
- **needs_others:** holding a lane is adversarial. You need an opponent who
  is also trying to hold it before the wave moves at all; bots do not teach
  this.
- **Quantity:** the tutor sets the round length. No explanation on the page —
  the index states the convention.

## Lobby Lab 4 — Stack against the clock (week 4)

- **Bring:** a hero from the course pool who can clear a camp — assigned by
  the tutor at the start of the session, so the class is not all stacking with
  the same hero.
- **How it runs:** practice mode, the whole class starting together. Stack as
  many camps as you can inside a fixed window; the tutor calls the timings.
  Second round adds a constraint: keep your lane off your own tower at the
  same time.
- **spec:**
  - you stacked at least one camp and can say at what point you pulled
  - in the second round you managed both, or can say which you dropped and why
  - you can predict the next camp spawn before it happens
- **needs_others:** stacking is pure timing, and timing is only learned when
  somebody is calling the clock and the person beside you is stacking more
  than you are. Alone, "close enough" always feels fine.
- **Note on the page:** A1 is due at noon tomorrow — this is the last chance
  to ask in person.

## Lobby Lab 5 — Three heroes, one item (week 5)

- **Bring:** nothing; heroes are assigned.
- **How it runs:** each student gets three heroes, one per primary attribute,
  and buys **the same item** on all three in practice mode, comparing what it
  does. Then the class pools results: what did that item buy on each
  attribute.
- **spec:**
  - you tried the same item on three heroes of different primary attributes
  - you can say which hero it was worth most on, for a reason other than
    "that hero is stronger"
  - you can look at an untried hero and infer from its attribute roughly how
    it plays
- **needs_others:** one student gets three data points; the class gets
  thirty, and "the same item is worth different amounts" only holds up with a
  sample. The session's product is one shared table.
- **Settled:** the three heroes are the week's three — Sven (Strength),
  Phantom Assassin (Agility), Zeus (Intelligence) — and the item is a
  **Circlet**, because it gives the same points of every attribute to all
  three. Identical stats, visibly different value: that is the whole lab in
  one purchase.

## Lobby Lab 6 — Watch one player (week 6)

- **Bring:** a client that can play replays.
- **How it runs:** the class watches one professional replay together. **Each
  student follows exactly one position**, start to finish, and does not watch
  anyone else. Afterwards the five positions report: what my player did all
  game, when they got strong, and one clear mistake.
- **spec:**
  - you followed one position for the whole game and can retell their timeline
  - you named their power spike and how you spotted it
  - you named one decision they made well or badly — a decision, not a
    piece of execution
- **needs_others:** five positions need five people watching at once to
  reassemble one game. One person watching five times is a different and
  worse exercise, because the second pass already knows the answer.
- **Connects to A2:** A2 opens this week, and this session is the
  demonstration of its form — here you learn what a review looks like; A2 is
  you doing one. **Say this on the page**, or students will not see that the
  two are connected.
- **Quantity:** the tutor chooses the replay and publishes it with the week's
  materials.

## Lobby Lab 7 — Build along (week 7)

- **Bring:** a hero you have never played, and the in-game recommended build.
- **How it runs:** one bot match, following the guide **exactly, changing
  nothing**. Write the build order down before the game starts, then mark each
  item as you buy it and write one word beside it for what it is for. Bring
  the marked-up list to the tutor at the end; the disagreements are the
  lesson.
- **spec:**
  - you followed one build guide for a whole game without changing it
  - every item on your written order carries a word for what it does
  - you marked at least one place you wanted to deviate, and what you would
    have bought instead
- **needs_others:** a build order you wrote alone is a build order you agree
  with. Handing it to somebody who has played the hero is the only way to find
  out which of your one-word reasons were wrong.

## Lobby Lab 8 — Hold the stun (week 8)

- **Bring:** a hero with a hard control spell.
- **How it runs:** a small custom match. One rule: **before you use a control
  spell you must call it out loud, and having called it you must use it.**
  Afterwards count how many calls you regretted, and how many times you did
  not call but afterwards thought you should have.
- **spec:**
  - you called your intent before every control spell
  - at least once you called it, saw the timing was wrong, and can say what
    was wrong
  - you can describe one time you held it and were right to
- **needs_others:** the mechanism of this drill is **being heard** — calling
  intent only means anything with teammates present, and an opponent who will
  punish bad timing.
- **Note on the page:** A2 is due at noon tomorrow.
- **Quantity:** five a side. **Author to sanity-check whether calling intent
  out loud is too awkward to actually play.**

## Lobby Lab 9 — Cross the map unseen (week 9)

- **Bring:** nothing.
- **How it runs:** two groups. The defenders get a fixed number of wards and
  place them; the attackers start from their base and try to reach a named
  point without being seen. Then swap. Record it, and review the defenders'
  vision together afterwards.
- **spec:**
  - you played both attack and defence
  - on defence, you can say what each ward was for — not "this is where
    people put them"
  - on attack, you can say how you went around a ward or walked into it
- **needs_others:** a ward's value only shows when somebody is trying to
  avoid it. Warding for yourself, you never find out whether it worked.
- **Quantity:** the tutor sets the number of wards. **Author to confirm a
  custom lobby can be set up this way** — if not, the fallback is reviewing a
  replay's global vision, and the page describes whichever one is real.

## Lobby Lab 10 — Call the objective (week 10)

- **Bring:** nothing.
- **How it runs:** five-person teams, one custom match. Rule: **after winning
  a fight, somebody must call the next objective out loud before the team
  moves.** A wrong call is still executed. Afterwards, reconstruct the game
  from its objective timeline alone — buildings and Roshan, no kills.
- **spec:**
  - your team called an objective after every won fight and executed it
  - you called at least once and can say why that objective and not another
  - your team can retell the game from the objective timeline without
    mentioning kills
- **needs_others:** calling needs four people to hear it and follow. And the
  habit this fixes — everyone going home to shop after a won fight — only
  breaks when somebody calls you back.
- **Version note:** 7.41 moved Roshan's pit preference to the top pit and
  Tormentor to the bottom chasm, so the available "next objective" is not
  what it was. Name the patch on the page.

## Lobby Lab 11 — Draft, don't play (week 11)

- **Bring:** your A4 team, formed this week.
- **How it runs:** a Captains Mode draft, **drafted but not played**. Two
  teams facing each other, seven bans and five picks each. Every ban and
  every pick is justified aloud. Run it twice, swapping captains.
- **spec:**
  - your team completed a full Captains Mode draft
  - your team gave a reason for every ban that was not "that hero is strong"
  - you can say at which stage of the game your lineup intends to win
- **needs_others:** drafting needs a real opponent. Drafting against yourself
  teaches nothing, because nobody is answering you.
- **Carries three things — keep them apart on the page:** A3 is due at noon
  tomorrow; A4 teams form this week; this is the only draft rehearsal before
  match day.
- **OPEN:** the exact phase order, confirmed when the data file lands.

## Lobby Lab 12 — Match day (week 12)

- **Bring:** your team.
- **How it runs:** the A4 best-of-three, Captains Mode, with a tutor present
  as coach. Ten minutes at the end, in the room: each team writes down three
  decision points as the seed of their review.
- **spec:**
  - your team played the games the series required
  - you wrote down at least three decision points before leaving
  - you know who is writing which part of your team's review, and when it
    is due
- **needs_others:** this week is the match.
- **Connects to A4:** the review — team part and individual reflection — is
  due at noon on the Friday. The winning MVP goes on the Hall of Fame and
  carries no marks.
- **PROPOSED:** the coach may speak during the draft and between games, and
  not during a game. It is the ordinary convention in this game's competition
  and it keeps the played games the students' own. A4's fairness rests on this
  line, so it is stated here **and** on the policies page.

---

## Spec checks these pages make possible

Worth writing once the pages exist:

1. Exactly twelve `sessions`, weeks 1–12, one each.
2. Every session's `date` is later than its week's lecture `date` and inside
   the same calendar week.
3. Every session declares `related:` to its week's lecture (declared on the
   session side; the lecture page renders it too).
4. Every session's `spec` has exactly three non-empty lines.
5. **Session titles are not questions** while lecture titles are — this turns
   the two-genres rule into something a machine can check. Slightly clever,
   and it protects the course's largest structural risk, so it goes in.
6. Every session has a non-empty `needs_others`, and the twelve are pairwise
   distinct.

Checks 5 and 6 are specific to this course — exactly the "promises your
course makes that the build cannot [check]" the brief asks for.
