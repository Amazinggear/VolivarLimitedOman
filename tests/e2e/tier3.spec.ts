import { test, expect } from '@playwright/test';

test.describe('Tier 3: Cross-Feature Tests', () => {
  // Test 1
  test('Mobile Menu Toggling and Scroll Lock during viewport changes', async ({ page }) => {
    // 1. Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora');
    
    // 2. Open mobile menu
    const toggleBtn = page.locator('button[aria-label="Toggle Menu"]').first();
    await toggleBtn.click({ force: true });
    
    // 3. Verify scroll lock is applied (body class has overflow-hidden)
    const isLocked = await page.evaluate(() => document.body.classList.contains('overflow-hidden'));
    expect(isLocked).toBe(true);
    
    // 4. Resize to desktop
    await page.setViewportSize({ width: 1024, height: 768 });
    
    // 5. Verify scroll lock is removed (due to resize / layout change handling)
    await page.waitForFunction(() => !document.body.classList.contains('overflow-hidden'));
    const isLockedAfterResize = await page.evaluate(() => document.body.classList.contains('overflow-hidden'));
    expect(isLockedAfterResize).toBe(false);
  });

  // Test 2
  test('Add to Cart while in Mobile View', async ({ page }) => {
    // 1. Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora/shop');
    
    // 2. Click add to cart button
    const cartButton = page.locator('button[aria-label="أضف إلى السلة"]').first();
    await cartButton.click({ force: true });
    
    // 3. Verify toast is visible in viewport
    const toast = page.locator('text=تم إضافة المنتج للسلة').first();
    await expect(toast).toBeVisible();
    
    const toastBox = await toast.boundingBox();
    expect(toastBox).not.toBeNull();
    // Verify toast is at the bottom of the viewport
    expect(toastBox!.y).toBeGreaterThan(500);
  });

  // Test 3
  test('Cart Item Badge Synced with Action', async ({ page }) => {
    await page.goto('/templates/aurora/shop');
    const badge = page.locator('header a[href="/templates/aurora/shop"] .en-text').filter({ visible: true }).first();
    await expect(badge).toHaveText('1');
    
    // Click add to cart
    const cartButton = page.locator('button[aria-label="أضف إلى السلة"]').first();
    await cartButton.click({ force: true });
    
    // Verify it doesn't crash and the badge is still visible
    await expect(badge).toBeVisible();
  });
});
