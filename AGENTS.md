<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project notes

Hackathon after-event recap site. Static export (`output: "export"` in `next.config.ts`) — no server features: no Server Actions, no route handlers with dynamic requests, dynamic routes need `generateStaticParams`, `next/image` runs unoptimized.

- All editable content lives in `content/` and `public/photos/` — see `EDITING.md`. Don't hardcode event facts in components.
- Design tokens (night/dawn/sodium palette, display/mono fonts) are defined in `app/globals.css` — use those, not ad-hoc colors.
- Verify with `npm run build` (strictest check for static export), not just the dev server.
- Port 3000 is often occupied on this machine; `npm run dev` falls back to 3001 — read the server output for the real port.
