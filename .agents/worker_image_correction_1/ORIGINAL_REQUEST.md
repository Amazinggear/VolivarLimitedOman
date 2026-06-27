## 2026-06-24T11:37:42Z

You are a Worker agent.
Your ID: worker_image_correction_1
Your coordinator metadata directory: c:\Google Antigravity Projects\WebBay\webbay_business_solutions\.agents\worker_image_correction_1
Your task: Implement Milestone 2: Image Correction for the WebBay Aurora Cafe project.

Key Responsibilities:
1. In `app/templates/aurora/shop/page.tsx`:
   - Replace the Costa Rica coffee Unsplash image (`photo-1611162617474-5b21e879e113`) with a relevant coffee-themed image: `photo-1607681034540-2c46cc71896d` (representing a bag of specialty coffee).
2. In `app/templates/aurora/menu/page.tsx`:
   - Replace the Meat Madghout Unsplash image (`photo-1517686469429-8bdb88b9f907` - flour/dough scaffolding) with a relevant meat plate image: `photo-1633945274405-b6c8069047b0` (spiced meat rice plate).
   - Replace the Mandi Ghazal Unsplash image (`photo-1606491956689-2ea866880c84` - Mexican tacos) with a relevant Arabic grilled meat/mandi image: `photo-1541832676-9b763b0239ab` (Arabic grilled meat platter).
3. Do NOT modify any existing relevant and working images (such as coffee dripper, farm, branches, etc.).
4. Run `npm run test` (Vitest) to make sure unit tests still pass.
5. Run `npm run test:e2e` (Playwright) to verify that some of the image relevance tests now pass (some layout/timeline failures will still remain, which is expected!).
6. Run `npm run lint` and `npm run build` to verify there are zero errors/warnings in the build process.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT
hardcode test results, create dummy/facade implementations, or
circumvent the intended task. A Forensic Auditor will independently
verify your work. Integrity violations WILL be detected and your
work WILL be rejected.

Scope boundaries:
- Implement ONLY the requested image URL updates in the shop and menu pages.
- Do NOT touch the layout or responsiveness styles yet.
- Write your handoff report to `handoff.md` in your coordinator metadata directory when finished.
