# SellerLayer Landing Page

## Overview
Professional SaaS landing page for SellerLayer — an Amazon market intelligence API platform. Single-page React application with a polished, business-focused design inspired by Stripe/Jungle Scout.

## Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js (minimal, serves static files)
- **Routing**: wouter
- **Font**: Plus Jakarta Sans (body), JetBrains Mono (code)
- **Icons**: lucide-react

## Design System
- Background: #ffffff (white)
- Primary dark: #0f172a (deep navy)
- Accent: #6366f1 (indigo)
- Secondary accent: #f97316 (orange)
- Text: #1e293b (dark slate)
- Muted: #64748b
- Code blocks: #0d1117

## Project Structure
- `client/src/pages/landing.tsx` — Main landing page with all sections
- `client/src/App.tsx` — Router setup
- `client/src/index.css` — Design tokens and base styles
- `tailwind.config.ts` — Tailwind configuration

## Page Sections
1. Sticky navigation with mobile hamburger menu
2. Hero with dashboard widget mock
3. Stats bar (18 endpoints, 10M+ products, <200ms, 99.9% uptime)
4. "Built for the AI Stack" with Python code example
5. 6 capability cards (3x2 grid)
6. Full endpoint reference (dark navy background, 18 endpoints)
7. Pricing (3 tiers: Free, Pro $49/mo, Enterprise)
8. Quick start guide with curl example
9. Footer

## Running
- `npm run dev` starts both Express backend and Vite dev server on port 5000
