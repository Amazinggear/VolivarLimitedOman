## 2026-06-24T11:21:53Z
You are a Worker agent.
Your ID: worker_test_setup_1
Your coordinator metadata directory: c:\Google Antigravity Projects\WebBay\webbay_business_solutions\.agents\worker_test_setup_1
Your task: Implement Milestone 1: E2E Test Setup for the WebBay Aurora Cafe project.

Key Responsibilities:
1. Install testing dependencies in the project root: `vitest`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/dom`, `jsdom`, and `@playwright/test`.
2. Configure Vitest:
   - Create `vitest.config.ts` in the root.
   - Create `tests/setup.ts` or `vitest.setup.ts` in the root.
   - Add a sample unit test (e.g. testing the ShopPage rendering and add-to-cart toast notification behavior) inside a `__tests__/` directory.
3. Configure Playwright:
   - Create `playwright.config.ts` at the root.
   - Set up test projects for Chromium, WebKit, Mobile Chrome, and Mobile Safari.
   - Make sure `webServer` is configured to run the dev server (`npm run dev`) at port 3000.
4. Write comprehensive E2E tests inside `tests/e2e/`:
   - Enumerate all project features (Image Integrity, Mobile Hamburger Menu positioning and scroll lock, and Viewport Layout responsiveness).
   - Write Tier 1, Tier 2, Tier 3, and Tier 4 E2E tests matching the specifications:
     - Tier 1: Feature coverage happy path tests (e.g. navigating pages, clicking toggle button, adding to cart, submitting reservation).
     - Tier 2: Boundary and corner cases (e.g. checking empty cart behavior, responsive viewport sizes at 375px and 1440px, check for horizontal scrollbars and text truncation).
     - Tier 3: Cross-feature tests (e.g. testing mobile menu toggling and checking scroll lock behavior during viewport changes, or testing adding to cart while in mobile view).
     - Tier 4: Real-world user flows (e.g. user goes to home page, scrolls to bottom, decides to navigate to shop, adds two different coffees to cart, views toast, navigates to reserve, fills reservation, and submits).
   - Write at least 38 tests total (Tier 1: 15, Tier 2: 15, Tier 3: 3, Tier 4: 5) to meet the minimum threshold requirements.
5. Create `TEST_READY.md` in the project root containing:
   - Command to run E2E and Unit tests.
   - Coverage summary.
   - Feature checklist.
6. Verify the tests compile and run properly. Note that E2E tests checking the hamburger menu rendering position, mobile timeline alignment, and some image relevance checks will FAIL on the current buggy codebase. This is expected! Document which tests pass and which fail in your handoff report.
7. Run `npm run lint` and `npm run build` (or verify that they compile, even with the tests added) to ensure no syntax/compilation issues are introduced.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT
hardcode test results, create dummy/facade implementations, or
circumvent the intended task. A Forensic Auditor will independently
verify your work. Integrity violations WILL be detected and your
work WILL be rejected.

Scope boundaries:
- Implement ONLY test infra, tests, and package script adjustments.
- Do NOT fix the source code bugs in `app/` yet. These will be fixed in the next milestones.
- Write your handoff report to `handoff.md` in your coordinator metadata directory when finished.
