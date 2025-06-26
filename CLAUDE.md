# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Development Server

```bash
npm run dev    # Uses Turbopack for faster builds (--turbopack flag in package.json)
```

### Build & Production

```bash
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint checks
```

### Package Management

This project uses **npm** as the package manager. The `bun.lock` file exists but npm is used for scripts. Use `npm install` for dependencies.

## Architecture Overview

This is a **Next.js 15 App Router** application for Cambodia's crypto community platform. The architecture follows modern Next.js patterns with TypeScript and Tailwind CSS.

### Key Directories

- `/app/` - App Router pages (layout.tsx, page.tsx, events/, community/, teams/, partners/)
- `/components/` - Reusable components with layout/ and ui/ subdirectories
- `/types/` - TypeScript type definitions
- `/public/` - Static assets including community logos and icons

### Technology Stack

- **Next.js 15.3.4** with App Router and Turbopack
- **React 19** with TypeScript 5
- **Tailwind CSS 4** with PostCSS integration and custom golden crypto theme
- **Framer Motion 12** for animations
- **Lucide React** for icons
- **ESLint 9** with Next.js recommended rules

## Code Patterns & Conventions

### Styling System

- **Forced dark mode** with golden/amber color scheme (#fbbf24, #fcd34d)
- **Glass-morphism design** using backdrop-blur and custom CSS properties
- **CSS custom properties** in globals.css with comprehensive theme variables including:
  - Color palette (background, foreground, primary variations)
  - Custom gradients (crypto, primary, glow)
  - Shadows and glow effects
  - Animation definitions
  - Border radius and blur values
- **Custom animations**: float, pulse-glow, crypto-float with keyframe definitions
- **Utility classes**: `.crypto-gradient`, `.primary-gradient`, `.text-gradient`, `.glass-card`

### Component Architecture

- **Compound components** (Button supports both Link and button behavior)
- **TypeScript interfaces** for all component props
- **Client components** explicitly marked with "use client" directive
- **Absolute imports** using `@/` path mapping

### Page Structure

- All pages use the shared layout with Navbar and Footer
- Events page is fully implemented with registration system
- Other pages (community, teams, partners) are placeholder implementations
- Homepage features community stats, features grid, and call-to-action sections

### Development Notes

- Uses **Turbopack** for faster development builds (enabled via --turbopack flag)
- **Strict TypeScript** configuration with `@/*` path mapping for absolute imports
- **PostCSS** configuration with Tailwind CSS 4 plugin integration
- **ESLint** uses FlatCompat for configuration with Next.js core-web-vitals and TypeScript rules
- Mobile-responsive design with glass-morphism cards and hover animations
- Forced dark mode with system preference overrides in CSS

### Data Patterns

- Static data arrays for community statistics and features
- TypeScript interfaces in `/types/index.ts` for type safety
- Mock data used for development (events, community stats)
- No external state management - uses React hooks for local state
