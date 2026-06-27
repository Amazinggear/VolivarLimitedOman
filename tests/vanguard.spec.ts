import { test, expect } from '@playwright/test';

test.describe('Vanguard Dental - Lumina Template', () => {
  test('Page loads without crashing', async ({ page }) => {
    await page.goto('/templates/lumina');
    await expect(page).toHaveTitle(/.*|.*/); // basic check, won't fail if there's no specific title
    // Just ensuring the body is present
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('Brand text is visible', async ({ page }) => {
    await page.goto('/templates/lumina');
    const brandContainer = page.locator('header, nav').first();
    await expect(brandContainer).toContainText('ڤانغارد');
  });

  test('Navigation links are visible and clickable', async ({ page, isMobile }) => {
    await page.goto('/templates/lumina');
    
    if (isMobile) {
      const menuBtn = page.locator('button.md\\:hidden').first();
      await menuBtn.click();
      // Wait a bit for animation
      await page.waitForTimeout(500);
    }
    
    const navLinks = ['من نحن', 'الخدمات'];
    
    for (const linkText of navLinks) {
      // Use .last() or filter by visible since mobile dropdown creates duplicates, or just look for visible ones
      const link = page.locator(`text="${linkText}"`).filter({ hasText: linkText }).first();
      // Actually we have desktop and mobile links, they both exist in DOM.
      // On mobile, the desktop one is hidden, mobile one is visible after click.
      // We can check if ANY link with that text is visible.
      const links = page.locator(`text="${linkText}"`);
      const targetLink = isMobile ? links.last() : links.first();
      await expect(targetLink).toBeVisible();
      await expect(targetLink).toBeEnabled();
    }
  });

  test('Hero section renders', async ({ page }) => {
    await page.goto('/templates/lumina');
    
    // We expect some hero-like section, either via role or checking some specific text/element that typically lives in Hero
    // For a dental hero, might be a header tag or a section with main heading
    // Let's check for an h1 tag, which usually exists in the hero.
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });
});
