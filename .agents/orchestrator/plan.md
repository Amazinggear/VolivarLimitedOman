# WebBay Aurora Cafe Plan

## Phase 1: Codebase Audit & Setup (Milestone 1)
- Setup E2E testing framework (Playwright) using a worker subagent.
- Write Tier 1 (Feature Coverage), Tier 2 (Boundary), Tier 3 (Cross-Feature Combinations), and Tier 4 (Real-World Application) test cases based on user requirements.
- Verify existing code states and list any initial errors or warnings.
- Publish `TEST_READY.md`.

## Phase 2: Image Verification & Correction (Milestone 2)
- Dispatch Explorer/Worker to audit image tags and replace irrelevant/Costa Rica coffee sign image in `app/templates/aurora/shop/page.tsx`.
- Review and verify changes using E2E tests (Tier 1).

## Phase 3: UI Functionality & Hamburger Menu Fix (Milestone 3)
- Dispatch Worker to inspect `app/templates/aurora/layout.tsx`.
- Resolve the hamburger menu hydration error and check open/close behavior.
- Reviewer checks code logic, Challenger runs E2E tests for navigation.

## Phase 4: Responsive Design Optimization (Milestone 4)
- Dispatch Worker to ensure all layout elements stack correctly and do not overflow on mobile (375px) / tablet / desktop.
- Reviewer/Challenger verifies with viewport responsive tests.

## Phase 5: Verification & E2E Acceptance (Milestone 5)
- Run 100% of E2E tests.
- Perform adversarial tests (Challenger) to ensure visual integrity (Tier 5).
- Forensic audit checks.
- Final build verify (`npm run build`) runs cleanly with 0 errors or warnings.
