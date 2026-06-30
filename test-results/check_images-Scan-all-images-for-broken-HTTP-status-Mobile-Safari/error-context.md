# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: check_images.spec.ts >> Scan all images for broken HTTP status
- Location: tests\check_images.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "AURORA Coffee & Conversation" [ref=e4]:
        - /url: /templates/aurora
        - img [ref=e5]
        - generic [ref=e7]:
          - generic [ref=e8]: AURORA
          - generic [ref=e9]: Coffee & Conversation
      - generic [ref=e10]:
        - link "1" [ref=e11]:
          - /url: /templates/aurora/shop
          - img [ref=e12]
          - generic [ref=e16]: "1"
        - button "Toggle Menu" [ref=e17]:
          - img [ref=e18]
    - main [ref=e20]:
      - generic [ref=e21]:
        - heading "قائمة التذوق" [level=1] [ref=e22]
        - paragraph [ref=e23]: نقدم تشكيلة مختارة بعناية من أجود أنواع القهوة المختصة والمحمصة بعناية. كل صنف يروي قصة شغفنا بالكمال.
      - generic [ref=e24]:
        - button "القهوة الكلاسيكية" [ref=e25]
        - button "إبداعات أورورا" [ref=e26]
        - button "المخبوزات والحلويات" [ref=e27]
      - generic [ref=e28]:
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]:
            - heading "إسبريسو أورورا" [level=3] [ref=e31]
            - generic [ref=e32]: 18 ر.س
          - paragraph [ref=e33]: جرعة مزدوجة من حبوب أرابيكا المختصة والمحمصة بعناية.
        - generic [ref=e34] [cursor=pointer]:
          - generic [ref=e35]:
            - heading "فلات وايت" [level=3] [ref=e36]
            - generic [ref=e37]: 22 ر.س
          - paragraph [ref=e38]: توازن مثالي بين الإسبريسو والحليب المبخر بقوام مخملي.
        - generic [ref=e39] [cursor=pointer]:
          - generic [ref=e40]:
            - heading "كيمكس (قهوة مقطرة)" [level=3] [ref=e41]
            - generic [ref=e42]: 26 ر.س
          - paragraph [ref=e43]: تحضير يدوي يبرز إيحاءات الفواكه والشوكولاتة الداكنة.
        - generic [ref=e44] [cursor=pointer]:
          - generic [ref=e45]:
            - heading "كورتادو" [level=3] [ref=e46]
            - generic [ref=e47]: 20 ر.س
          - paragraph [ref=e48]: جرعة إسبريسو مع كمية متساوية من الحليب المبخر.
    - contentinfo [ref=e49]:
      - generic [ref=e50]:
        - generic [ref=e51]:
          - generic [ref=e52]:
            - img [ref=e53]
            - generic [ref=e55]: AURORA
          - paragraph [ref=e56]: نقدم لكم أرقى تجربة قهوة في المدينة. مزيج من الفخامة والشغف في كل كوب.
        - generic [ref=e57]:
          - heading "روابط سريعة" [level=4] [ref=e58]
          - list [ref=e59]:
            - listitem [ref=e60]:
              - link "المنيو" [ref=e61]:
                - /url: /templates/aurora/menu
            - listitem [ref=e62]:
              - link "قصتنا" [ref=e63]:
                - /url: /templates/aurora/story
            - listitem [ref=e64]:
              - link "فروعنا" [ref=e65]:
                - /url: /templates/aurora/locations
        - generic [ref=e66]:
          - heading "ساعات العمل" [level=4] [ref=e67]
          - list [ref=e68]:
            - listitem [ref=e69]: "السبت - الخميس: 7 ص - 12 م"
            - listitem [ref=e70]: "الجمعة: 1 م - 1 ص"
        - generic [ref=e71]:
          - heading "النشرة البريدية" [level=4] [ref=e72]
          - paragraph [ref=e73]: اشترك ليصلك جديدنا من القهوة المختصة والعروض الحصرية.
          - generic [ref=e74]:
            - textbox "البريد الإلكتروني" [ref=e75]
            - button "اشترك" [ref=e76]
      - generic [ref=e77]: جميع الحقوق محفوظة © 2026 - مقهى أورورا.
  - button [ref=e79]:
    - img [ref=e80]
  - button "Open Next.js Dev Tools" [ref=e87] [cursor=pointer]:
    - img [ref=e88]
  - alert [ref=e93]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Scan all images for broken HTTP status', async ({ page }) => {
  4  |   const urls = [
  5  |     'http://localhost:3000/',
  6  |     'http://localhost:3000/templates/verdant',
  7  |     'http://localhost:3000/templates/lumina',
  8  |     'http://localhost:3000/templates/aurora/menu'
  9  |   ];
  10 | 
  11 |   const brokenImages: { page: string; src: string; status: number }[] = [];
  12 | 
  13 |   page.on('response', response => {
  14 |     const url = response.url();
  15 |     const status = response.status();
  16 |     const type = response.request().resourceType();
  17 |     
  18 |     if (type === 'image' && status >= 400) {
  19 |       brokenImages.push({ page: page.url(), src: url, status });
  20 |     }
  21 |   });
  22 | 
  23 |   for (const url of urls) {
  24 |     console.log(`\nNavigating to: ${url}`);
  25 |     await page.goto(url, { waitUntil: 'load' });
  26 |     
  27 |     // Scroll to the bottom of the page to trigger all lazy-loaded images
  28 |     await page.evaluate(async () => {
  29 |       await new Promise<void>((resolve) => {
  30 |         let totalHeight = 0;
  31 |         const distance = 100;
  32 |         const timer = setInterval(() => {
  33 |           const scrollHeight = document.body.scrollHeight;
  34 |           window.scrollBy(0, distance);
  35 |           totalHeight += distance;
  36 | 
  37 |           if (totalHeight >= scrollHeight) {
  38 |             clearInterval(timer);
  39 |             resolve();
  40 |           }
  41 |         }, 50);
  42 |       });
  43 |     });
  44 | 
  45 |     // Wait a bit for requests to settle
> 46 |     await page.waitForTimeout(1000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  47 |   }
  48 | 
  49 |   console.log('\n--- Broken Images Summary ---');
  50 |   if (brokenImages.length === 0) {
  51 |     console.log('🎉 No broken images found!');
  52 |   } else {
  53 |     for (const img of brokenImages) {
  54 |       console.log(`❌ Page: ${img.page} | Src: ${img.src} | Status: ${img.status}`);
  55 |     }
  56 |   }
  57 | });
  58 | 
```