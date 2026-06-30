import { test, expect } from '@playwright/test';

test('Scan all images for broken HTTP status', async ({ page }) => {
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/templates/verdant',
    'http://localhost:3000/templates/lumina',
    'http://localhost:3000/templates/aurora/menu'
  ];

  const brokenImages: { page: string; src: string; status: number }[] = [];

  page.on('response', response => {
    const url = response.url();
    const status = response.status();
    const type = response.request().resourceType();
    
    if (type === 'image' && status >= 400) {
      brokenImages.push({ page: page.url(), src: url, status });
    }
  });

  for (const url of urls) {
    console.log(`\nNavigating to: ${url}`);
    await page.goto(url, { waitUntil: 'load' });
    
    // Scroll to the bottom of the page to trigger all lazy-loaded images
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 50);
      });
    });

    // Wait a bit for requests to settle
    await page.waitForTimeout(1000);
  }

  console.log('\n--- Broken Images Summary ---');
  if (brokenImages.length === 0) {
    console.log('🎉 No broken images found!');
  } else {
    for (const img of brokenImages) {
      console.log(`❌ Page: ${img.page} | Src: ${img.src} | Status: ${img.status}`);
    }
  }
});
