import { test, expect } from '@playwright/test';

test.describe('Tier 1: Feature Coverage Happy Path Tests', () => {
  // Test 1
  test('Home Page Title Rendering', async ({ page }) => {
    await page.goto('/templates/aurora');
    const title = page.locator('text=AURORA').first();
    await expect(title).toBeVisible();
  });

  // Test 2
  test('Explore Menu Button Navigation', async ({ page }) => {
    await page.goto('/templates/aurora');
    const menuBtn = page.locator('text=اكتشف المنيو').first();
    await menuBtn.click({ force: true });
    await expect(page).toHaveURL(/\/templates\/aurora\/menu/);
  });

  // Test 3
  test('Reserve Table Button Navigation', async ({ page }) => {
    await page.goto('/templates/aurora');
    const reserveBtn = page.locator('text=احجز طاولتك').first();
    await reserveBtn.click({ force: true });
    await expect(page).toHaveURL(/\/templates\/aurora\/reserve/);
  });

  // Test 4
  test('Main Layout Coffee Logo', async ({ page }) => {
    await page.goto('/templates/aurora');
    // Check if the Coffee icon exists in the header logo link
    const coffeeIcon = page.locator('header a svg').first();
    await expect(coffeeIcon).toBeVisible();
  });

  // Test 5
  test('Main Layout Footer Fast Links', async ({ page }) => {
    await page.goto('/templates/aurora');
    const footer = page.locator('footer');
    await expect(footer.locator('text=المنيو')).toBeVisible();
    await expect(footer.locator('text=قصتنا')).toBeVisible();
    await expect(footer.locator('text=فروعنا')).toBeVisible();
  });

  // Test 6
  test('Menu Page Tabs Selection', async ({ page }) => {
    await page.goto('/templates/aurora/menu');
    const signatureTab = page.locator('button', { hasText: 'إبداعات أورورا' }).first();
    await expect(signatureTab).toBeVisible();
    await signatureTab.click({ force: true });
    // Verify it is active (check background style/color or active state)
    await expect(signatureTab).toHaveClass(/bg-\[#C5A059\]/);
  });

  // Test 7
  test('Menu Page Item Detail Modal', async ({ page }) => {
    await page.goto('/templates/aurora/menu');
    // Click a menu card
    const firstCard = page.locator('h3', { hasText: 'إسبريسو أورورا' }).first();
    await firstCard.click({ force: true });
    // Modal should be visible
    const modalHeader = page.locator('h2', { hasText: 'إسبريسو أورورا' }).first();
    await expect(modalHeader).toBeVisible();
  });

  // Test 8
  test('Menu Page Close Modal', async ({ page }) => {
    await page.goto('/templates/aurora/menu');
    const firstCard = page.locator('h3', { hasText: 'إسبريسو أورورا' }).first();
    await firstCard.click({ force: true });
    
    const closeBtn = page.locator('button[aria-label="إغلاق"]');
    await expect(closeBtn).toBeVisible();
    await closeBtn.click({ force: true });
    
    // Modal should disappear
    const modalHeader = page.locator('h2', { hasText: 'إسبريسو أورورا' }).first();
    await expect(modalHeader).not.toBeVisible();
  });

  // Test 9
  test('Story Page Sections Load', async ({ page }) => {
    await page.goto('/templates/aurora/story');
    await expect(page.locator('text=شغف وُلد من رحلة')).toBeVisible();
    await expect(page.locator('text=فن التحميص')).toBeVisible();
    await expect(page.locator('text=أجواء لا تُنسى')).toBeVisible();
  });

  // Test 10
  test('Locations Page Branches Render', async ({ page }) => {
    await page.goto('/templates/aurora/locations');
    await expect(page.locator('text=فرع العقيق (الرئيسي)')).toBeVisible();
    await expect(page.locator('text=فرع واجهة الرياض')).toBeVisible();
  });

  // Test 11
  test('Reserve Page Form Submit Happy Path', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'فحص E2E');
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0501234567');
    await page.fill('input[type="date"]', '2026-07-01');
    await page.fill('input[type="time"]', '18:00');
    await page.selectOption('select', '2');
    
    await page.click('button[type="submit"]', { force: true });
    
    // Success message should appear
    await expect(page.locator('text=تم استلام طلبك بنجاح!')).toBeVisible();
  });

  // Test 12
  test('Reserve Page Reset Form', async ({ page }) => {
    await page.goto('/templates/aurora/reserve');
    await page.fill('input[placeholder="مثال: أحمد عبد الله"]', 'فحص E2E');
    await page.fill('input[placeholder="+966 5X XXX XXXX"]', '0501234567');
    await page.fill('input[type="date"]', '2026-07-01');
    await page.fill('input[type="time"]', '18:00');
    await page.click('button[type="submit"]', { force: true });
    
    const anotherBtn = page.locator('text=إجراء حجز آخر');
    await expect(anotherBtn).toBeVisible();
    await anotherBtn.click({ force: true });
    
    // Form should render again
    await expect(page.locator('input[placeholder="مثال: أحمد عبد الله"]')).toBeVisible();
  });

  // Test 13
  test('Shop Page Product Detail Render', async ({ page }) => {
    await page.goto('/templates/aurora/shop');
    await expect(page.locator('text=مزيج أورورا الكلاسيكي')).toBeVisible();
    await expect(page.locator('span', { hasText: /^85 ر.س$/ }).first()).toBeVisible();
  });

  // Test 14
  test('Shop Page Add to Cart Toast', async ({ page }) => {
    await page.goto('/templates/aurora/shop');
    // Click add to cart button (first product)
    const cartButton = page.locator('button[aria-label="أضف إلى السلة"]').first();
    await cartButton.click({ force: true });
    
    // Toast should appear
    await expect(page.locator('text=تم إضافة المنتج للسلة')).toBeVisible();
  });

  // Test 15
  test('Shop Page Product Weight Tag', async ({ page }) => {
    await page.goto('/templates/aurora/shop');
    const firstWeight = page.locator('text=250g').first();
    await expect(firstWeight).toBeVisible();
  });
});
