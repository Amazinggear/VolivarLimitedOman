# Project: WebBay Aurora Cafe

## Architecture
Next.js 16 (App Router) project using Tailwind CSS v4, Framer Motion, and Lucide React.
Main files identified:
- Navigation layout and hamburger menu: `app/templates/aurora/layout.tsx`
- Shop page and coffee product images: `app/templates/aurora/shop/page.tsx`
- Menu page and Arabic food images: `app/templates/aurora/menu/page.tsx`
- Story page and timeline layout: `app/templates/aurora/story/page.tsx`
- Locations page and stats grid: `app/templates/aurora/locations/page.tsx`
- Global styles: `app/globals.css`

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | E2E Test Setup | Setup E2E testing infra (Playwright & Vitest), write Tiers 1-4 tests, publish TEST_READY.md | none | DONE |
| 2 | Image Correction | Replace shop coffee and menu food images | M1 | DONE |
| 3 | Hamburger Menu Fix | Ensure mobile hamburger menu functions, layout positioning, scroll lock resize listener, and hydration fixes | M1 | DONE |
| 4 | Responsive Design | Optimize responsive layouts (timeline, locations grid, scrollbar hide) | M1 | IN_PROGRESS |
| 5 | Verification & Build | Verify E2E suite passes, perform adversarial audits, run clean build | M2, M3, M4 | PLANNED |

## Interface Contracts
### Mobile Hamburger Menu State
- Managed via React state (isOpen, setIsOpen).
- Controlled click events to toggle menu visibility.
- Mobile navigation drawer placed inside `<header className="relative">` to ensure correct vertical rendering under navbar.
- Window resize listener resets `isMenuOpen` to `false` when window width >= 1024px.
- Mount guard `mounted` prevents hydration mismatch on pathname active link class.

### Product Image Schema
- Costa Rica Specialty Coffee in `app/templates/aurora/shop/page.tsx` uses image: `"https://images.unsplash.com/photo-1607681034540-2c46cc71896d"` (replaces warning sign).
- Meat Madghout in `app/templates/aurora/menu/page.tsx` uses image: `"https://images.unsplash.com/photo-1633945274405-b6c8069047b0"` (replaces wood construction scaffolding).
- Mandi Ghazal in `app/templates/aurora/menu/page.tsx` uses image: `"https://images.unsplash.com/photo-1541832676-9b763b0239ab"` (replaces Mexican tacos).
