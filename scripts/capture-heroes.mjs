/**
 * capture-heroes.mjs
 * Captures high-resolution Hero screenshots for the Outfit & Ellipse templates.
 *
 * PREREQ:  Dev server running on http://localhost:3000  (npm run dev)
 * RUN:     node scripts/capture-heroes.mjs
 * OUTPUT:  public/assets/thumbnails/outfit-hero.png
 *          public/assets/thumbnails/ellipse-hero.png
 *
 * After capture, swap the SVG placeholder paths in components/TemplatesSection.tsx:
 *   /assets/thumbnails/outfit_hero.svg   ->  /assets/thumbnails/outfit-hero.png
 *   /assets/thumbnails/ellipse_hero.svg  ->  /assets/thumbnails/ellipse-hero.png
 */
import { chromium } from "@playwright/test";
import { mkdir } from "fs/promises";
import path from "path";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const OUT_DIR = path.resolve("public/assets/thumbnails");

async function capture() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2, // 2x for high-resolution
  });

  // ── Outfit Hero ──────────────────────────────────────────────
  const pageOutfit = await context.newPage();
  await pageOutfit.goto(`${BASE}/templates/outfit`, {
    waitUntil: "networkidle",
  });
  // Wait for preloader to exit (it slides up after ~2s)
  await pageOutfit.waitForTimeout(3000);
  // Screenshot the first <section> (the Hero)
  await pageOutfit.locator("section").first().screenshot({
    path: path.join(OUT_DIR, "outfit-hero.png"),
  });
  console.log("✅ Captured outfit-hero.png");
  await pageOutfit.close();

  // ── Ellipse Hero ─────────────────────────────────────────────
  const pageEllipse = await context.newPage();
  await pageEllipse.goto(`${BASE}/templates/ellipse`, {
    waitUntil: "networkidle",
  });
  await pageEllipse.waitForTimeout(2500); // let entrance animations settle
  await pageEllipse.locator("section").first().screenshot({
    path: path.join(OUT_DIR, "ellipse-hero.png"),
  });
  console.log("✅ Captured ellipse-hero.png");
  await pageEllipse.close();

  await browser.close();
  console.log("\nDone. Files saved to public/assets/thumbnails/");
}

capture().catch((err) => {
  console.error("❌ Capture failed:", err);
  process.exit(1);
});
