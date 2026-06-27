# Original User Request

## Initial Request — 2026-06-24T14:17:46+03:00

Audit and refine the WebBay Aurora Cafe project with a strict focus on image relevance, comprehensive mobile responsiveness, and flawless UI functionality (specifically the hamburger menu).

Working directory: c:\Google Antigravity Projects\WebBay\webbay_business_solutions
Integrity mode: development

## Requirements

### R1. Image Verification & Correction
Audit all images across the site. Specifically fix the Shop page (`app/templates/aurora/shop/page.tsx`) where irrelevant images (e.g., the Costa Rica coffee having an "إن" sign image) must be replaced with accurate, relevant coffee images from Unsplash. Do NOT modify existing working and relevant images. Ensure there are absolutely ZERO broken images site-wide.

### R2. Comprehensive Mobile Optimization
Ensure all pages are fully responsive across all resolutions (mobile, tablet, desktop). Elements should not overflow, text should be readable, and grid layouts should stack correctly on mobile.

### R3. UI Functionality & Hamburger Menu
Ensure all interactive UI components, specifically the mobile hamburger menu in the navigation (`app/templates/aurora/layout.tsx`), are fully functional, open/close correctly, and have zero React or hydration errors.

## Acceptance Criteria

### Image Integrity
- [ ] The Costa Rica coffee product in the shop has a relevant coffee image, not a random sign.
- [ ] A visual audit confirms no broken image links (`404`) exist across the Aurora pages.
- [ ] No previously working, relevant images were unnecessarily changed.

### Responsiveness & Functionality
- [ ] The mobile hamburger menu opens, closes, and navigates correctly on mobile viewports.
- [ ] All pages render without horizontal scrollbars or overflowing text on small viewports (e.g., 375px).
- [ ] `npm run build` completes with 0 errors and 0 warnings.
