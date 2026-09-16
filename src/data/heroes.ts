// The course's fixed hero pool, in first-appearance order.
//
// Thirteen heroes carry the whole course. The pool is fixed so that a student
// meets the same faces repeatedly rather than a new name every week, and so
// that no page has to explain a hero twice.
//
// SLUGS VERIFIED against the rendered official site on 17 September 2026.
// All thirteen were checked two ways, because an HTTP 200 from dota2.com
// proves nothing — the JavaScript shell returns 200 for any path at all, and
// `/hero/definitelynotarealhero` comes back the same 46,681 bytes as a real
// hero. So: the slugs were harvested from the 127 hero links on the rendered
// `/heroes` index, and each of the thirteen pages was then loaded in a real
// browser and its displayed hero name read back.
//
// The guesses all turned out right, which is only worth trusting because the
// check was shown to fail on things it should fail on. Two of the 127 official
// slugs do *not* follow lowercase-remove-spaces — `anti-mage` keeps its hyphen
// and `nature'sprophet` its apostrophe — so the convention was not a given;
// loading `/hero/antimage` renders no hero name at all. Wraith King was the
// one flagged as most likely wrong, since its internal name is
// `skeleton_king`; its public slug is nevertheless `wraithking`.

export interface Hero {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly firstWeek: number;
  readonly slug: string;
  readonly liquipedia: string;
}

export const heroes: readonly Hero[] = [
  {
    id: "dragon-knight",
    name: "Dragon Knight",
    role: "Carry",
    firstWeek: 2,
    slug: "dragonknight",
    liquipedia: "Dragon_Knight",
  },
  {
    id: "wraith-king",
    name: "Wraith King",
    role: "Carry",
    firstWeek: 3,
    slug: "wraithking",
    liquipedia: "Wraith_King",
  },
  {
    id: "lion",
    name: "Lion",
    role: "Support",
    firstWeek: 4,
    slug: "lion",
    liquipedia: "Lion",
  },
  {
    id: "sven",
    name: "Sven",
    role: "Carry",
    firstWeek: 5,
    slug: "sven",
    liquipedia: "Sven",
  },
  {
    id: "phantom-assassin",
    name: "Phantom Assassin",
    role: "Carry",
    firstWeek: 5,
    slug: "phantomassassin",
    liquipedia: "Phantom_Assassin",
  },
  {
    id: "zeus",
    name: "Zeus",
    role: "Mid",
    firstWeek: 5,
    slug: "zeus",
    liquipedia: "Zeus",
  },
  {
    id: "crystal-maiden",
    name: "Crystal Maiden",
    role: "Support",
    firstWeek: 6,
    slug: "crystalmaiden",
    liquipedia: "Crystal_Maiden",
  },
  {
    id: "juggernaut",
    name: "Juggernaut",
    role: "Carry",
    firstWeek: 6,
    slug: "juggernaut",
    liquipedia: "Juggernaut",
  },
  {
    id: "lich",
    name: "Lich",
    role: "Support",
    firstWeek: 7,
    slug: "lich",
    liquipedia: "Lich",
  },
  {
    id: "sand-king",
    name: "Sand King",
    role: "Initiator",
    firstWeek: 8,
    slug: "sandking",
    liquipedia: "Sand_King",
  },
  {
    id: "vengeful-spirit",
    name: "Vengeful Spirit",
    role: "Support",
    firstWeek: 9,
    slug: "vengefulspirit",
    liquipedia: "Vengeful_Spirit",
  },
  {
    id: "enigma",
    name: "Enigma",
    role: "Initiator",
    firstWeek: 10,
    slug: "enigma",
    liquipedia: "Enigma",
  },
  {
    id: "tidehunter",
    name: "Tidehunter",
    role: "Initiator",
    firstWeek: 11,
    slug: "tidehunter",
    liquipedia: "Tidehunter",
  },
] as const;

export const officialUrl = (hero: Hero): string => `https://www.dota2.com/hero/${hero.slug}`;

export const liquipediaUrl = (hero: Hero): string =>
  `https://liquipedia.net/dota2/${hero.liquipedia}`;

export const heroById = (id: string): Hero | undefined => heroes.find((hero) => hero.id === id);
