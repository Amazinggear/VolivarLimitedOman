## 2026-06-24T11:45:26Z

You are a Worker agent.
Your ID: worker_hamburger_fix_1
Your coordinator metadata directory: c:\Google Antigravity Projects\WebBay\webbay_business_solutions\.agents\worker_hamburger_fix_1
Your task: Implement Milestone 3: Hamburger Menu Fix for the WebBay Aurora Cafe project.

Key Responsibilities:
1. In `app/templates/aurora/layout.tsx`:
   - Move the mobile drawer `<AnimatePresence>` container (lines 99-108/150) inside the `<header>` element, immediately after the mobile toggler button. Since `<header>` has relative positioning and the header's height is defined, the drawer's `absolute top-full` will place it immediately below the header bar instead of at the bottom of the page.
   - Add a window resize event listener in a `useEffect` to clear `isMenuOpen` (set it to `false`) when `window.innerWidth >= 1024` (desktop width breakpoint), which releases the body overflow-hidden scroll lock.
   - Fix the layout hydration warning. Add a `mounted` state inside layout logic (e.g. `const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), []);`) and guard active nav link styling check using this state so that server-prerendered HTML classes match the initial client-side render state (reducing client/server mismatch).
2. Run `npm run test` (Vitest) to make sure unit tests still pass.
3. Run `npm run test:e2e` (Playwright) to verify that the mobile menu toggle positioning, and scroll-lock reset tests now pass (the timeline mobile alignment failures will still remain, which is expected!).
4. Run `npm run lint` and `npm run build` to verify there are zero errors/warnings in the build process.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT
hardcode test results, create dummy/facade implementations, or
circumvent the intended task. A Forensic Auditor will independently
verify your work. Integrity violations WILL be detected and your
work WILL be rejected.

Scope boundaries:
- Implement ONLY the requested mobile hamburger menu drawer, resize listener, and hydration fixes in `layout.tsx`.
- Do NOT touch the other responsiveness styles in `story/page.tsx` or `locations/page.tsx` yet.
- Write your handoff report to `handoff.md` in your coordinator metadata directory when finished.
