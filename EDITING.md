# How to update this site after the event

Everything editable lives in two places: `content/` (words) and `public/` (images).
No component code needs to change.

## 1. Event facts — `content/event.ts`

Name, tagline, date, city, and the stats shown on the home page. Edit the values, save.

## 2. Teams & projects — `content/teams.ts`

One object per team. Copy an existing entry and fill it in:

- `slug` becomes the URL: `/projects/<slug>` — lowercase, hyphens, no spaces.
- `prize` is optional — set it (e.g. `"Best Design"`) and the team gets a badge
  everywhere plus a spot in the Winners list on the home page.
- Screenshots: create `public/projects/<slug>/` and drop images in, then list the
  filenames in `images`. The first one becomes the card image.
- Delete the two sample entries once real teams exist.

## 3. The story — `content/story.md`

Plain Markdown. Start a heading with a time to get the log-entry look:

```md
## 02:37 — The bug that almost won
```

Inline photos: `![caption](/photos/some-photo.jpg)`

## 4. Photos — `public/photos/`

Drop image files in the folder — the gallery finds them automatically at build
time (sorted by filename, so prefix with `01-`, `02-`, … to control order).
Delete the `placeholder-*.svg` files when real photos arrive.

## 5. Certificates — `/certificates`

A print-ready page with one certificate each for 1st, 2nd, and 3rd Place
(it's not linked in the nav — just open the URL). Set a team's `prize` to
exactly `"1st Place"`, `"2nd Place"`, or `"3rd Place"` in `content/teams.ts`
and the winner's name is filled in; otherwise the name line stays blank so
you can handwrite it. Click **Print / save as PDF**, choose landscape, and
turn off browser headers/footers.

## Preview and publish

```bash
npm run dev      # preview at the printed localhost URL
npm run build    # must pass before publishing; static site lands in out/
```

Publishing: commit and push — Vercel rebuilds and deploys automatically once
the repo is connected.
