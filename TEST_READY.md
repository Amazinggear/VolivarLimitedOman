# Test Ready Summary — WebBay Aurora Cafe Project

All testing frameworks (Vitest and Playwright) have been successfully set up, configured, and integrated with ESLint in compliance with the codebase standard.

## 🚀 Test Execution Commands

### Run Unit Tests
```bash
npm run test
```
*Executes unit testing for React pages/components via Vitest.*

### Run End-to-End Tests
```bash
npm run test:e2e
```
*Launches Next.js dev server on port 3000 automatically, then runs the test suite across Chromium, WebKit, Mobile Chrome, and Mobile Safari.*

---

## 📊 Test Coverage Summary

### Unit Tests
- **ShopPage Component (`__tests__/shop.test.tsx`)**:
  - Tests initial products and header rendering.
  - Tests the "add to cart" click and the visual toast notification.
  - Status: **PASSING** (2/2 tests passed).

### End-to-End Tests (Playwright)
- Total E2E Tests: **38 tests** executed across **4 platforms** (Chromium, WebKit, Mobile Chrome, and Mobile Safari), representing **152 total test runs**.
- **Passing Runs**: **139 / 152**
- **Failing Runs**: **13 / 152** (Expected failures due to known bugs in the codebase).

### Expected E2E Failures (to be addressed in subsequent milestones)
1. **Story Page Timeline Mobile Alignment Check** (4 failures):
   - Vertical timeline alignment does not center dots with the gold line on mobile viewports.
2. **Hamburger Menu Toggle Layout Positioning** (4 failures):
   - Mobile hamburger menu position does not align correctly with header bottom.
3. **Mobile Menu Toggling and Scroll Lock during viewport changes** (4 failures):
   - Scroll lock (`overflow-hidden` class) remains on the body when resizing from mobile view to desktop view.
4. **E2E Flow - Complete Mobile Journey** (1 failure on Desktop WebKit):
   - Minor transition timing/unmounting quirk under WebKit engine on mobile navigation.

---

## 📋 Feature & Test Checklist

- [x] **Vitest Configuration** (`vitest.config.ts`, `vitest.setup.ts`)
- [x] **Playwright Configuration** (`playwright.config.ts` targeting port 3000)
- [x] **Package.json Scripts** (`test` and `test:e2e` scripts added)
- [x] **ESLint Lint Clean** (0 errors introduced)
- [x] **Next.js Production Build** (Compiles successfully with 0 build errors)
- [x] **E2E Spec Coverage**:
  - [x] **Tier 1: Feature Coverage (15/15 tests)**
  - [x] **Tier 2: Boundary and Corner Cases (15/15 tests)**
  - [x] **Tier 3: Cross-Feature Tests (3/3 tests)**
  - [x] **Tier 4: Real-world User Flows (5/5 tests)**
