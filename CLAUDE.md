# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `travel-for-cause/` directory.

```bash
npm run dev       # Start dev server with HMR (http://localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test framework is configured yet.

## Architecture

This is a React 19 + Vite 7 single-page application using plain JavaScript (`.jsx`), not TypeScript.

- Entry point: `index.html` → `src/main.jsx` → `src/App.jsx`
- Styling: plain CSS files (`src/index.css` for global styles, `src/App.css` for component styles)
- No routing, state management, or API layer is set up yet — the project is at its initial scaffolding stage

## ESLint

- Config: `eslint.config.js` (flat config format, ESLint 9+)
- Plugins: `react-hooks` (enforces hooks rules) and `react-refresh` (enforces component export conventions for HMR)
- `no-unused-vars` is set to error but ignores names matching `^[A-Z_]` (uppercase or underscore-prefixed variables are exempt)
