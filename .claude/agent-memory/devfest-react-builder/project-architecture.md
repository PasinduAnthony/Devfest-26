---
name: project-architecture
description: Full architecture of the DevFest Auckland 2026 React website — scaffold, file locations, tech stack, data structures, and routing
metadata:
  type: project
---

# Project Architecture

**Root project directory**: `/mnt/g/GDG Devfest Website/Devfest-26/devfest-26/`

**Why:** Vite project scaffolded inside the repo working directory using `npm create vite@latest devfest-26 -- --template react-ts`.

**How to apply:** All npm commands must be run from the `devfest-26/` subdirectory. Source files live under `devfest-26/src/`.

## Tech Stack
- Vite 8 + React 19 + TypeScript
- Tailwind CSS v3 (configured via `tailwind.config.js` + `postcss.config.js`)
- No external animation libraries — pure CSS keyframes + JS hooks
- No React Router (single-page with anchor-based navigation)
- No icon library — inline SVGs only

## File Structure
```
devfest-26/src/
  App.tsx                         — Root component, assembles all sections
  main.tsx                        — Entry point, imports index.css only
  index.css                       — Tailwind base + CSS custom properties + global styles
  App.css                         — Cleared (unused)
  components/
    Nav.tsx                       — Fixed glassmorphic nav, scroll progress bar, language toggle, hamburger
    Hero.tsx                      — Hero section + countdown timer + Auckland SVG skyline
    About.tsx                     — About section with 4-pillar card grid
    Highlights.tsx                — Infinite CSS marquee with placeholder gradient cards
    Tickets.tsx                   — Tickets placeholder with email notification form
    Sponsor.tsx                   — Sponsor strip with CTA buttons
    Team.tsx                      — Team section: 6 organizer cards + GDG on Campus block
    FAQ.tsx                       — Accordion FAQ (7 questions)
    Footer.tsx                    — Footer with quick links and copyright
  hooks/
    useCountdown.ts               — Pure React hook, setInterval-based, CFP deadline countdown
  data/                           — Empty; ready for future CMS/JSON data files
```

## Key Decisions
- All styling uses inline `style` props + a handful of global CSS classes (`.reveal`, `.glass-card`, `.kicker`, `.gradient-text`, `.section-heading`, `.marquee-track`) — this avoids Tailwind purge issues with dynamic class names
- `IntersectionObserver` used for scroll-reveal animations (`.reveal` → `.in` class toggle)
- CFP countdown target: `2026-09-30T23:59:59`
- Auckland skyline is a hand-crafted SVG inside `Hero.tsx`, includes Sky Tower with beacon, twinkling windows, water shimmer
- Marquee uses pure CSS `@keyframes marquee` with array doubled for seamless loop
- Language toggle (EN/MI) is UI state only — no i18n library

## Section IDs (anchor targets)
- `#about`, `#highlights`, `#tickets`, `#sponsor`, `#team`, `#faq`, `#cfp`

## Dev Server
- Run: `cd devfest-26 && npm run dev`
- URL: `http://localhost:5173/`
- Build: `npm run build`
