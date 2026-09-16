import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see. Change them to Studios, Tutorials, Expeditions, etc.
export const sessionLabels = {
  singular: "Lobby Lab",
  plural: "Lobby Labs",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "Heroes", href: "/heroes/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  // The card is the PNG, not the SVG beside it: Astro's image service refuses
  // to re-encode an SVG source (`dangerouslyProcessSVG` is off by default),
  // and the og:image has to be a raster anyway because scrapers do not render
  // SVG. `card.svg` is the source the PNG was rasterised from; regenerate the
  // PNG from it rather than editing the PNG.
  socialImage: "/src/assets/images/card.png",
  socialImageAlt:
    "Twelve gold stems rising left to right, each forking into a thick branch and a thin one — the course's twelve decisions, and the branch not taken at each",
});
