// Everything about the event itself lives here. After the hackathon,
// update these values and the site rebuilds around them — no code changes.

export const event = {
  name: "Hack the Night",
  tagline: "24 hours. One room. Everything built from scratch.",
  // Display strings, not Date objects — this site is a recap, not a countdown.
  date: "TBD 2026",
  venue: "Venue TBD",
  city: "City TBD",
  // Shown as big numbers on the home page. Update after the event.
  stats: [
    { label: "Hackers", value: "0" },
    { label: "Teams", value: "0" },
    { label: "Hours", value: "24" },
    { label: "Projects shipped", value: "0" },
  ],
  // Short blurb used on the home page and in <meta> descriptions.
  summary:
    "A recap of everything that happened — the teams, the projects, the wins, and the photos to prove it.",
} as const;
