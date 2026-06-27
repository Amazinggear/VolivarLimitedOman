import { test, expect } from '@playwright/test';

test.describe('Tier 4: Real-World User Flows', () => {
  // Test 1
  test('E2E Flow - Simple Guest Checkout/Browse', async ({ page }) => {
    await page.goto('/templates/aurora');
    
    // Click Explore Menu
    await page.locator('text=اكتشف المنيو').first().click({ force: true });
    await expect(page).toHaveURL(/\/templates\/aurora\/menu/);
    
    // Click signature tab
    await page.locator('text=إبداعات أورورا').first().click({ force: true });
    
    // Click on Aurora Gold item
    await page.locator('text=أورورا الذهبي').first().click({ force: true });
    
    // Check modal
    await expect(page.locator('h2', { hasText: 'أورورا الذهبي' })).toBeVisible();
    
    // Click order now inside modal (using specific selector and force option)
    await page.locator('.fixed button', { hasText: 'اطلب الآن' }).first().click({ force: true });
  });

  // Test 2
  test('E2E Flow - Shop and Reserve Flow', async ({ page }) => {
    await page.goto('/templates/aurora');
    
    // Click shop link
    const shopLink = page.locator('a[href="/templates/aurora/shop"]').filter({ visible: true }).first();
    await shopLink.click({ force: true });
    await expect(page).toHaveURL(/\/templates\/aurora\/shop/);
    
    // Add first item to cart
    const firstCartBtn = page.locator('button[aria-label="أضف إلى السلة"]').nth(0);
    await firstCartBtn.click({ force: true });
    await expect(page.locator('text=تم إضافة المنتج للسلة').first()).toBeVisible();
    
    // Add second item to cart
    const secondCartBtn = page.locator('button[aria-label="أضف إلى السلة"]').nth(1);
    await secondCartBtn.click({ force: true });
    await expect(page.locator('text=تم إضافة المنتج للسلة').first()).toBeVisible();
    
    // Click reserve link
    if (await page.locator('button[aria-label="Toggle Menu"]').isVisible()) {
      await page.click('button[aria-label="Toggle Menu"]', { force: true });
      await page.waitForTimeout(500); // Wait for transition animation
      const mobileReserveLink = page.locator('header nav.flex-col a[href="/templates/aurora/reserve"]').first();
      await mobileReserveLink.click({ force: true });
    } else {
      const reserveLink = page.locator('header a[href="/templates/aurora/reserve"]').first();
      await reserveLink.click({ force: true });
    }
    await expect(page).toHaveURL(/\/templates\/aurora\/reserve/);
    
    // Fill form
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'رحلة مستخدم');
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0509999999');
    await page.fill('input[type="date"]', '2026-07-02');
    await page.fill('input[type="time"]', '20:00');
    await page.selectOption('select', '4');
    
    await page.click('button[type="submit"]', { force: true });
    await expect(page.locator('text=تم استلام طلبك بنجاح!').first()).toBeVisible();
  });

  // Test 3
  test('E2E Flow - Locations and Contact', async ({ page }) => {
    await page.goto('/templates/aurora');
    
    // Click branches link
    if (await page.locator('button[aria-label="Toggle Menu"]').isVisible()) {
      await page.click('button[aria-label="Toggle Menu"]', { force: true });
      await page.waitForTimeout(500); // Wait for transition animation
      const mobileLocationsLink = page.locator('header nav.flex-col a[href="/templates/aurora/locations"]').first();
      await mobileLocationsLink.click({ force: true });
    } else {
      const locationsLink = page.locator('header a[href="/templates/aurora/locations"]').first();
      await locationsLink.click({ force: true });
    }
    await expect(page).toHaveURL(/\/templates\/aurora\/locations/);
    
    // Verify stats
    await expect(page.locator('text=سنوات من الإبداع')).toBeVisible();
    await expect(page.locator('text=كوب يومياً')).toBeVisible();
    
    // Click map directions for Al-Aqeeq branch
    const mapBtn = page.locator('button', { hasText: 'اتجاهات الخريطة' }).first();
    await expect(mapBtn).toBeVisible();
    await mapBtn.click({ force: true });
  });

  // Test 4
  test('E2E Flow - Complete Mobile Journey', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/templates/aurora');
    
    // Open mobile menu
    await page.click('button[aria-label="Toggle Menu"]', { force: true });
    await page.waitForTimeout(500); // Wait for transition animation
    
    // Go to Menu page inside mobile drawer navigation
    await page.locator('header nav.flex-col a[href="/templates/aurora/menu"]').first().click({ force: true });
    await expect(page).toHaveURL(/\/templates\/aurora\/menu/);
    
    // Open a menu item modal
    await page.locator('text=فلات وايت').first().click({ force: true });
    await expect(page.locator('h2', { hasText: 'فلات وايت' })).toBeVisible();
    
    // Close modal
    await page.click('button[aria-label="إغلاق"]', { force: true });
    
    // Open mobile menu again
    await page.click('button[aria-label="Toggle Menu"]', { force: true });
    await page.waitForTimeout(500); // Wait for transition animation
    
    // Go to Reserve page inside mobile drawer navigation
    await page.locator('header nav.flex-col a[href="/templates/aurora/reserve"]').first().click({ force: true });
    await expect(page).toHaveURL(/\/templates\/aurora\/reserve/);
    
    // Fill and submit
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'مستخدم جوال');
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0507777777');
    await page.fill('input[type="date"]', '2026-07-03');
    await page.fill('input[type="time"]', '15:30');
    await page.click('button[type="submit"]', { force: true });
    await expect(page.locator('text=تم استلام طلبك بنجاح!').first()).toBeVisible();
  });

  // Test 5
  test('E2E Flow - Story and Timeline Read', async ({ page }) => {
    await page.goto('/templates/aurora/story');
    
    // Scroll and check section visibility
    await expect(page.locator('text=بداية الحكاية').first()).toBeVisible();
    await expect(page.locator('text=تأسست عام ٢٠١٨')).toBeVisible();
    
    // Check timeline milestones
    await expect(page.locator('text=التوسع والنضج')).toBeVisible();
    await expect(page.locator('text=مدرسة القهوة')).toBeVisible();
  });
});
