// One entry per team. To add a team after the event: copy an object,
// fill it in, drop screenshots in /public/projects/<slug>/, done.

export type Team = {
  /** URL-safe id — becomes the page route /projects/<slug> */
  slug: string;
  teamName: string;
  projectName: string;
  members: string[];
  /** One-liner shown on the project card */
  pitch: string;
  /** Longer write-up shown on the project's own page (plain paragraphs) */
  description: string;
  /** Optional links — omit any that don't exist */
  demoUrl?: string;
  repoUrl?: string;
  /** e.g. "1st Place", "Best Design" — shows a badge when present */
  prize?: string;
  /** Filenames inside /public/projects/<slug>/, first one is the card image */
  images?: string[];
};

export const teams: Team[] = [
  {
    slug: "sample-team",
    teamName: "Sample Team",
    projectName: "Placeholder Project",
    members: ["Hacker One", "Hacker Two"],
    pitch: "A placeholder entry showing what a project card looks like.",
    description:
      "Replace this with what the team built, how it works, and what happened along the way. A couple of paragraphs is plenty.\n\nSecond paragraphs are separated by a blank line, like this one.",
    prize: "1st Place",
  },
  {
    slug: "second-sample",
    teamName: "Second Sample",
    projectName: "Another Placeholder",
    members: ["Hacker Three"],
    pitch: "A second entry so the grid layout has something to show.",
    description:
      "Delete both sample entries once real teams are added after the event.",
  },
];
