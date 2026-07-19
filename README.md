# Creata Communications — Website

Marketing website for **Creata Communications** (CREATA COMMUNICATIONS COMPANY LIMITED),
a market intelligence advisory. Built with **React 18 + Vite**.

> _Creating Clarity. Cultivating Confidence._

## Tech stack

- **React 18** (functional components + hooks)
- **Vite 5** (dev server + build)
- **CSS Modules** with a central design-token layer (`src/styles/global.css`)
- Zero runtime UI dependencies — inline SVG icons, IntersectionObserver scroll reveals

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├─ main.jsx              # app entry
├─ App.jsx               # section composition
├─ data/content.js       # ← ALL site copy lives here (single source of truth)
├─ styles/global.css     # design tokens, resets, shared utilities
└─ components/
   ├─ Header / Hero / About / Values (CREATA DNA) / Stats
   ├─ Services / Industries / Products
   ├─ Leadership / Process / Projects / Clients
   ├─ Contact (form + Google Map) / Footer
   ├─ Reveal.jsx          # scroll-reveal wrapper
   ├─ Icons.jsx           # inline SVG icon set
   └─ Logo.jsx            # brand mark
```

## Editing content

All copy is centralized in [`src/data/content.js`](src/data/content.js) — update text,
services, industries, stats, founder bio, contact details and social links there without
touching components.

## Assets to replace before launch

These placeholders should be swapped for real brand assets when available:

- **Logo** — the SVG mark in `src/components/Logo.jsx` and `public/favicon.svg`
- **Founder photo** — replace the initials placeholder in `Leadership.jsx`
- **Client logos** — currently rendered as text in `content.js → clients.logos`
- **Emails** — `alese.pham@creata.xxx` / `connect@creata.xxx` (2 mailboxes still to be created)
- **Social links** — Facebook / Zalo / LinkedIn URLs in `content.js → contact.social`
- **Contact form** — wire `handleSubmit` in `Contact.jsx` to an email service / CRM endpoint

## Design system

| Token         | Value                                             |
| ------------- | ------------------------------------------------- |
| Background    | `#08070c` (near-black) with ambient violet glows  |
| Brand grad.   | `#7c3aed → #c026d3 → #e11d8f` (violet → magenta)   |
| Display font  | Merriweather (serif)                              |
| UI font       | Inter (sans)                                      |

Fully responsive (mobile-first), respects `prefers-reduced-motion`, and dark-theme native.
