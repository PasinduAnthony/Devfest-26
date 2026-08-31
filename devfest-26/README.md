# DevFest Auckland 2026 — Official Website

The official event website for **DevFest Auckland 2026**, organized by [GDG Auckland](https://www.facebook.com/GDGAuckland/). Built with React, TypeScript, and Vite, deployed on Firebase Hosting.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v3 + inline styles |
| Fonts | Google Sans, Roboto Mono |
| Hosting | Firebase Hosting |
| Linter | Oxlint |

## Project Structure

```
src/
├── assets/
│   ├── moments/        # Event photo gallery images
│   └── team/           # Organizer profile photos
├── components/
│   ├── Nav.tsx         # Responsive navigation with mobile hamburger
│   ├── Hero.tsx        # Hero section with live CFP countdown
│   ├── About.tsx       # About DevFest & core pillars
│   ├── Highlights.tsx  # Scrolling photo marquee
│   ├── Tickets.tsx     # Registration / ticket status
│   ├── Sponsor.tsx     # Sponsorship CTA
│   ├── Team.tsx        # Organizer & volunteer cards
│   ├── FAQ.tsx         # Accordion FAQ
│   └── Footer.tsx      # Site footer
├── index.css           # Global design tokens & animations
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

## Building & Deploying

> **Note:** The production build uses Vite 8 with the Rolldown bundler. Due to a native binary incompatibility, **builds must be run from Windows PowerShell** (not WSL) when the project lives on an NTFS drive.

### Build

```powershell
npm run build
```

### Deploy to Firebase

```powershell
firebase deploy
```

Requires the [Firebase CLI](https://firebase.google.com/docs/cli) and access to the `devfest-26` Firebase project.

## Design System

The site uses the official Google color palette:

| Token | Value | Usage |
|---|---|---|
| Blue | `#4285F4` | Primary accent |
| Red | `#EA4335` | Secondary accent |
| Yellow | `#fbbc04` | Highlight |
| Green | `#34A853` | Success / accent |
| Halftone Blue | `#57caff` | CTA buttons |
| Off-White | `#f0f0f0` | Body text |

Typography: **Google Sans** (headings & body) + **Roboto Mono** (kickers & labels).

## Contributing

This is a private GDG Auckland event website. For questions or contributions, reach out to the organizing team or open an issue.

---

Organized by [GDG Auckland](https://www.facebook.com/GDGAuckland/) &nbsp;|&nbsp; DevFest is a global event series by [Google Developer Groups](https://developers.google.com/community/devfest)
