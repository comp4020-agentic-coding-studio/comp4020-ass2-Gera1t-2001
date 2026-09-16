# Mechanics reference — 7.41f

Compiled by the course author from the current Liquipedia *Attributes*,
*Denying*, *Lane Creeps* and *Neutral Creeps* pages, read 16 September 2026.

**This file holds figures; the pages do not — yet.** The no-figures rule on
the weekly pages still stands until `FACTS.md` exists. This is the raw
material `FACTS.md` will be built from, and the place any page or diagram
checks a mechanic against. Facts are restated in the course's own words.

---

## Denying (week 2)

- A deny is last-hitting a **friendly** unit.
- Thresholds: creeps and other non-hero units can be denied below **50%**
  health; towers below **10%**; heroes below **25%**, and only under special
  circumstances. Illusions and couriers cannot be denied.
- A denied lane creep gives the enemy **no gold** and **50%** of its
  experience. A denied **player-controlled** unit gives **0%** experience.
- Denying uses the attack command (default `A`).
- Denying a **tower** splits its gold bounty half to each team, and stops the
  enemy taking the 110–130 last-hit bonus.
- **Denying shifts the creep equilibrium toward your own tower.** This is the
  wiki's own framing and it is the bridge from week 2 to week 3.
- Denying matters most in the laning phase. Later, creeps are worth more as
  vision and pressure than as denied bounty.

## Lane creeps (weeks 2 and 3)

- A wave spawns from each barracks **every 30 seconds**.
- Four types: **melee**, **ranged**, **flagbearer**, **siege**.
  - Flagbearers are melee creeps with higher magic resistance and a
    regeneration aura, and on death **pay their gold to every enemy in an
    area**, not only the last-hitter. They start at the **fifth wave** and
    appear on every second wave after that, replacing one melee creep.
  - Siege creeps come on **every tenth wave**; they prioritise buildings.
- Killing an enemy barracks upgrades that lane to super creeps; killing all
  of them brings mega creeps.
- The wiki names three creep-control techniques, which are exactly weeks 2–4:
  pushing into towers, pulling neutrals onto your own lane creeps, and
  aggroing enemy melee creeps to change their target.

## Neutral camps (week 4)

**Counts.** Four tiers, and the flooded camps evolve.

| Tier | Total | Per side | Notes |
|---|---|---|---|
| Small | 4 | 1 dry + 1 flooded | |
| Medium | 10 | 3 dry + 2 flooded | the two small flooded camps grow into these |
| Large | 10 | 5, all dry | the four medium flooded camps grow into these |
| Ancient | 4 | 2, all dry | the four medium flooded camps end here |

- **Dry (terrestrial) camps are static.** **Flooded (amphibious) camps sit in
  the river and evolve upward over the game** — one creep in each flooded camp
  steps up a tier every five minutes, six evolutions in all, the last at
  minute thirty, so by then every flooded camp has risen two tiers. This is
  the fact week 4's diagram is built on: **the jungle is not the same jungle
  at minute five and minute thirty.**

**Spawning.**
- First spawn at **01:00**; then **every minute**, on the game clock — 02:00,
  03:00 and so on, **not** timed from when the camp was cleared.
- A camp will not respawn while any unit stands in its area, with a short
  list of exceptions (couriers and a handful of summons). Wards block a
  spawn — that is camp blocking.
- A camp cannot spawn the same set of creeps twice in a row.
- A yellow particle appears in a camp about **three seconds** before its
  respawn timer, whether or not the camp can actually spawn.

**Stacking.**
- A camp does not have to be cleared for the next spawn. Pull the creeps out
  of the camp's area before the next spawn and a second group appears.
- Usually done by aggroing them and walking away. A successful stack plays an
  audio cue. **There is no limit to how often a camp can be stacked.**
- Stacked creeps pay their killer less gold, and pay a share to the player
  who stacked them if an ally farms them.

**Aggro.**
- Neutral aggro is drawn by coming within **240** range (**140** for Roshan),
  or by damaging them or casting a single-target spell from within **1800**.
- A neutral that moves more than **400** range from its spot ("guard
  distance") drops aggro five seconds later and returns.
- **Only four camps can be pulled into a lane**: the two small camps, and the
  large camp inside each main jungle at the off lane. Lane creeps ignore
  neutrals from every other camp. This is a precise, teachable constraint and
  week 4 should state it.

**Roshan and Tormentor.** Roshan lives in the river dens and grows stronger
all game. The Tormentor cannot move or attack; it is hard to kill because of
a regenerating barrier and heavy damage reflection, and it pays one hero an
Aghanim's Shard plus a team gold bounty.

## Attributes (week 5) — corrected

The course's earlier note had Intelligence giving "spell damage". **It does
not.** The mapping is:

| Attribute | Each point gives |
|---|---|
| **Strength** | +22 max health, +0.1 health regeneration |
| **Agility** | +0.167 base armour, +1 attack speed |
| **Intelligence** | +12 max mana, +0.05 mana regeneration, +0.1% base magic resistance |
| **Universal** | +0.45 main attack damage, from **every** point of any attribute |

And the rule that ties it together: **for a hero whose primary attribute it
is, each point of that attribute also gives +1 main attack damage.** That
single line is why the same item is worth different amounts to different
heroes, which is week 5's whole argument — and it is what the attribute
diagram has to carry.

**Attribute items — week 5's item section, now settled.** They are grouped by
size, and the small ones are what a beginner actually buys:

- **Iron Branch**: +1 to all attributes.
- **Circlet**: +2 to all attributes. **Circlet of Nobility still exists.** An
  earlier note in this course said 7.41 removed it; that came from a garbled
  automated summary of the patch notes and is wrong.
- Attribute-specific smalls: **Gauntlets of Strength**, **Slippers of
  Agility**, **Mantle of Intelligence**, each +3 to their attribute.

For Lobby Lab 5 — the same item on three heroes — a **Circlet** is the clean
choice: identical stats on all three, visibly different value.

---

## Sources

Liquipedia's *Attributes*, *Denying*, *Lane Creeps* and *Neutral Creeps*
pages, supplied by the author as PDFs on 16 September 2026. No text or image
is reproduced; the facts are restated.
