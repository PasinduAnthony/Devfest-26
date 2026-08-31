---
name: design-system
description: Design tokens, visual language, and CSS patterns for DevFest Auckland 2026 — extracted from gdg-auckland-hero.html reference
metadata:
  type: project
---

# Design System

## CSS Custom Properties (defined in index.css :root)
```css
--bg: #08090b           /* near-black primary background */
--bg-alt: #101216       /* slightly lighter card background */
--text: #f5f5f7         /* primary text */
--text-dim: #8d8f96     /* secondary text, nav links */
--text-dimmer: #5a5c62  /* muted text, labels */
--line: rgba(245,245,247,0.09)  /* subtle borders */
--blue: #4285F4         /* Google Blue */
--red: #EA4335          /* Google Red */
--yellow: #FBBC05       /* Google Yellow */
--green: #34A853        /* Google Green */
--radius: 14px
```

## Fonts (loaded via Google Fonts in index.html)
- `Space Grotesk` (400, 500, 600, 700) — headings, logo, card titles
- `Inter` (400, 500, 600) — body text, buttons, badges
- `JetBrains Mono` (400, 500) — kickers, countdown digits, labels, eyebrows

## Typography Rules
- Kickers: JetBrains Mono, 11-12px, 2.5px letter-spacing, uppercase, `--text-dim`
- Headings: Space Grotesk 600, `clamp()` sizing, tight letter-spacing (-1px to -2.5px)
- Hero H1: clamp(40px, 8vw, 90px), letter-spacing -2.5px
- Section H2: clamp(28px, 4vw, 44px), letter-spacing -1px
- Body: Inter, 14-15px, line-height 1.65-1.7, color `--text-dim`

## Animation Keyframes (all defined in index.css)
- `riseIn` — opacity 0→1, translateY(110%)→0; used for hero stagger animations
- `pulseDot` — green glow pulse on eyebrow dot (2.4s)
- `beaconPulse` — red glow on Sky Tower beacon
- `twinkle` — building window opacity flicker (4.5s)
- `shimmer` — water reflection horizontal shimmer (7s)
- `skylineIn` — Auckland skyline rises in (1.3s, delayed 0.8s)
- `marquee` — infinite horizontal scroll for highlights (38s)

## Global CSS Classes
- `.reveal` + `.in` — IntersectionObserver scroll reveal (opacity + translateY)
- `.glass-card` — glassmorphic card: bg-alt + border + backdrop-filter
- `.kicker` — JetBrains Mono eyebrow label style
- `.section-heading` — Space Grotesk section H2 style
- `.gradient-text` — blue→green→yellow gradient text clip
- `.marquee-track` — infinite scroll animation container

## Component Patterns
- Cards hover: `translateY(-4px)` + border-color change + subtle box-shadow glow
- Buttons: pill shape (border-radius: 100px), primary = white bg/dark text, ghost = transparent/border
- Nav CTA hover: `translateY(-1px)` + opacity 0.9
- Countdown cards: glass with Google Blue border glow (`rgba(66,133,244,0.35)`)

## Mobile Breakpoints
- Nav hamburger appears at 760px
- Grid columns collapse at ~768px (auto-fit minmax)
- Hero padding reduces on mobile
