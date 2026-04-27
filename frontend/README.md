# Frontend - Freelance Website

Frontend application for [jordiparadelo.com](https://jordiparadelo.com), built with Next.js, TypeScript, SCSS modules, and GSAP-based micro-interactions.

## Getting Started

```bash
npm install
npm run dev
```

App runs on [http://localhost:3000](http://localhost:3000).

## File Organization

```text
frontend/
├── public/                  # Static assets (images, icons, OG image)
├── src/
│   ├── app/                 # Next.js app router entries (pages, layout, metadata)
│   ├── assets/              # UI assets used by components
│   ├── components/
│   │   ├── layouts/         # Layout-level building blocks (Navbar, Footer, etc.)
│   │   └── ui/              # Reusable UI components
│   ├── context/             # React context providers
│   ├── lib/                 # Constants, types, utils, data helpers
│   ├── config/              # App-level configuration
│   └── styles/              # Global styles and design variables
├── package.json
└── README.md
```

## Component Architecture (Wrapped Pattern)

Components follow a wrapped and modular structure where each concern lives in its own file:

- `index.tsx`: component markup + state/events (UI logic).
- `styles.module.scss`: component-scoped styles.
- `animations.ts`: animation hook/helpers (GSAP timelines, transitions).

Typical structure:

```text
src/components/ui/component-name/
├── index.tsx
├── styles.module.scss
└── animations.ts
```

### Example: `AvatarDropdown`

- `index.tsx` wires behavior (`isDropdownOpen`, keyboard/outside-click handlers) and renders the UI.
- `animations.ts` exposes `useDropdownAnimation()` to keep GSAP timeline setup isolated from the JSX.
- `styles.module.scss` keeps all visual rules local via CSS modules.

This separation keeps components easier to scale, test, and refactor:

- UI structure stays readable in `index.tsx`.
- Visual changes stay isolated in `styles.module.scss`.
- Motion logic is reusable and independent in `animations.ts`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```
