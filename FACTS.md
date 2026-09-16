# FACTS.md — every figure this site states

The adjudicated layer between `content/source/mechanics-7.41f.md` (the
captured source) and `src/data/facts.ts` (what the pages are checked against).

**Small by design.** A fact only appears here if a page actually states it.
The captured source holds a good deal more; carrying figures the site never
uses would make this file look thorough and mean nothing, and every extra row
is one more thing to keep true.

Everything is patch **7.41f**. That is the only patch string permitted
anywhere on the site.

| Value | What it means | Where it is stated | Source |
|---|---|---|---|
| **50%** | A creep or other non-hero unit can be denied below half its health | Week 2, *Mechanics* | Denying |
| **50%** | A denied lane creep gives the enemy half its experience — and no gold at all | Week 2, *Mechanics* | Denying |
| **1:00** | The first neutral camp spawn of a match | Week 4, *Mechanics* | Neutral camps |
| **every minute** | The interval between camp spawns thereafter, on the game clock rather than from when the camp was cleared. The page spells this one out rather than writing "every 1 minute" | Week 4, *Mechanics* | Neutral camps |
| **four** | The number of camps on the map that can be pulled into a lane, spelled out on the page because prose is the point: the two small camps, and the large camp inside each main jungle by the off lane | Week 4, *Mechanics* | Neutral camps |
| **+1** | Attack damage added by each point of a hero's **primary** attribute, on top of what that attribute already gives | Week 5, *Mechanics* | Attributes |
| **+0.45** | Attack damage a **universal** hero gets from every point of *any* attribute | Week 5, *Mechanics* | Attributes |

## Gathered but deliberately not stated

These are in the captured source and the pages do not use them, so they are
not carried here. Listing them is the point: the omissions were decided, not
overlooked.

- **The per-attribute conversion rates** (+22 max health per Strength, +0.167
  armour and +1 attack speed per Agility, +12 max mana, +0.05 mana
  regeneration and +0.1% magic resistance per Intelligence). Week 5's argument
  is that the same item is worth different amounts to different heroes, and
  six rates on the page would bury that in a table the week does not need.
  The two figures it does carry are the ones the argument turns on.
- **Deny thresholds for towers (10%) and heroes (25%).** No page teaches
  either; week 2 is about creeps.
- **The 30-second creep wave interval**, and the flagbearer and siege wave
  numbers. No page states a wave schedule.
- **Neutral aggro (240) and guard (400) distances**, and Roshan's 140. Week 4
  teaches pulling as four places, not as a radius.
- **Camp counts by tier**, and the flooded-camp evolution schedule. Week 4
  says the jungle changes over a game; it does not tabulate it.

## Missing — needed but not in the source

Nothing. Every figure the pages state is in
`content/source/mechanics-7.41f.md`.
