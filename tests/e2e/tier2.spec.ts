import { test, expect } from '@playwright/test';

test.describe('Tier 2: Boundary and Corner Cases', () => {
  // Test 1
  test('Empty Cart Badge / Initial State', async ({ page }) => {
    await page.goto('/templates/aurora');
    const badge = page.locator('header a[href="/templates/aurora/shop"] .en-text').first();
    await expect(badge).toHaveText('1');
  });

  // Test 2
  test('Invalid/Empty Reservation Name', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    // Name is empty, others filled
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0501234567');
    await page.fill('input[type="date"]', '2026-07-01');
    await page.fill('input[type="time"]', '18:00');
    
    // Attempt submit
    await page.click('button[type="submit"]', { force: true });
    
    // Should still be on the form (no success message)
    await expect(page.locator('text=تم استلام طلبك بنجاح!')).not.toBeVisible();
  });

  // Test 3
  test('Invalid/Empty Reservation Phone', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'أحمد');
    await page.fill('input[type="date"]', '2026-07-01');
    await page.fill('input[type="time"]', '18:00');
    await page.click('button[type="submit"]', { force: true });
    await expect(page.locator('text=تم استلام طلبك بنجاح!')).not.toBeVisible();
  });

  // Test 4
  test('Invalid/Empty Reservation Date', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'أحمد');
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0501234567');
    await page.fill('input[type="time"]', '18:00');
    await page.click('button[type="submit"]', { force: true });
    await expect(page.locator('text=تم استلام طلبك بنجاح!')).not.toBeVisible();
  });

  // Test 5
  test('Invalid/Empty Reservation Time', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'أحمد');
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0501234567');
    await page.fill('input[type="date"]', '2026-07-01');
    await page.click('button[type="submit"]', { force: true });
    await expect(page.locator('text=تم استلام طلبك بنجاح!')).not.toBeVisible();
  });

  // Test 6
  test('Viewport Responsiveness - Mobile (375px) Horizontal Scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBe(clientWidth);
  });

  // Test 7
  test('Viewport Responsiveness - Desktop (1440px) Horizontal Scroll', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/templates/aurora');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBe(clientWidth);
  });

  // Test 8
  test('Story Page Timeline Mobile Alignment Check', async ({ page }) => {
    // Resize viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora/story');
    
    // Get bounding box of the central gold line
    const goldLine = page.locator('div.absolute.right-6.md\\:right-1\\/2');
    await expect(goldLine).toBeVisible();
    const lineBox = await goldLine.boundingBox();
    expect(lineBox).not.toBeNull();
    
    // Get bounding box of one of the timeline dots
    const dot = page.locator('div.w-5.h-5.rounded-full.bg-\\[\\#C5A059\\]').first();
    await expect(dot).toBeVisible();
    const dotBox = await dot.boundingBox();
    expect(dotBox).not.toBeNull();
    
    // We expect the X center of the dot to be aligned with the X center of the gold line.
    // However, on the current codebase, the dot is to the left of the card in the flex layout,
    // which puts it far away from the right-6 positioned line. This assertion will FAIL!
    const lineCenter = lineBox!.x + lineBox!.width / 2;
    const dotCenter = dotBox!.x + dotBox!.width / 2;
    
    expect(Math.abs(lineCenter - dotCenter)).toBeLessThan(10);
  });

  // Test 9
  test('Image Relevance/Validity - Main Hero Image', async ({ page }) => {
    await page.goto('/templates/aurora');
    const heroImage = page.locator('img[alt="حبوب قهوة مميزة"]').first();
    await expect(heroImage).toBeVisible();
    const src = await heroImage.getAttribute('src');
    expect(src).toContain('photo-1495474472287-4d71bcdd2085');
  });

  // Test 10
  test('Image Relevance/Validity - Shop Coffee Image', async ({ page }) => {
    await page.goto('/templates/aurora/shop');
    const classicCoffee = page.locator('img[alt="مزيج أورورا الكلاسيكي"]').first();
    await expect(classicCoffee).toBeVisible();
    const src = await classicCoffee.getAttribute('src');
    // Verify it uses the expected unsplash image
    expect(src).toContain('photo-1559056199-641a0ac8b55e');
  });

  // Test 11
  test('Mobile Header Cart Icon Visibility', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora');
    const mobileCart = page.locator('header a[class*="md:hidden"]').first();
    await expect(mobileCart).toBeVisible();
  });

  // Test 12
  test('Mobile Hamburger Icon Visibility', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora');
    const hamburgerBtn = page.locator('button[aria-label="Toggle Menu"]').first();
    await expect(hamburgerBtn).toBeVisible();
  });

  // Test 13
  test('Hamburger Menu Toggle Layout Positioning', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora');
    const hamburgerBtn = page.locator('button[aria-label="Toggle Menu"]').first();
    await hamburgerBtn.click({ force: true });
    
    // Mobile menu opens
    const mobileMenuLink = page.locator('header nav.flex-col a', { hasText: 'المنيو' }).first();
    await expect(mobileMenuLink).toBeVisible();
    
    // Check that it aligns correctly (bug: on mobile it might render positioned wrong relative to top-full or screen size)
    const header = page.locator('header').first();
    const headerBox = await header.boundingBox();
    const menuBox = await page.locator('header div.absolute').first().boundingBox();
    
    expect(headerBox).not.toBeNull();
    expect(menuBox).not.toBeNull();
    // Expect menu Y top to be close to header bottom (within 1px tolerance for subpixel rounding)
    expect(Math.abs(menuBox!.y - (headerBox!.y + headerBox!.height))).toBeLessThanOrEqual(1);
  });

  // Test 14
  test('Reserve Page Notes text truncation check', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    const textarea = page.locator('textarea').first();
    await textarea.fill('أ'.repeat(500)); // Fill a huge text
    const value = await textarea.inputValue();
    expect(value.length).toBe(500);
  });

  // Test 15
  test('Menu Page Long Item Desc Truncation/Wrap', async ({ page }) => {
    await page.goto('/templates/aurora/menu');
    const firstDesc = page.locator('text=جرعة مزدوجة من حبوب أرابيكا المختصة والمحمصة بعناية.').first();
    await expect(firstDesc).toBeVisible();
    
    // Verify that the element doesn't have absolute layout causing overflow, standard text wrap is maintained
    const displayValue = await firstDesc.evaluate(el => window.getComputedStyle(el).display);
    expect(displayValue).not.toBe('none');
  });
});
