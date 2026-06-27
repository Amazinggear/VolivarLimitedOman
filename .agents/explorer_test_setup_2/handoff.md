# Handoff Report: WebBay Aurora Cafe Codebase Exploration & Testing Infrastructure

This report presents a read-only investigation and analysis of the **WebBay Aurora Cafe** project codebase. It includes findings on image integrity, layout navigation structure, responsiveness, hydration warnings, and detailed recommendations for setting up an E2E and unit testing infrastructure.

---

## 1. Observation

### A. Shop Page Code & Image Auditing
The shop page code is located at `app/templates/aurora/shop/page.tsx`.
* **Products List**: Lines 10–65 define a list of 6 products.
* **Specialty Costa Rica Coffee Image**: The Costa Rica coffee product is defined at lines 20–28:
  ```typescript
  {
    id: 2,
    name: "قهوة كوستاريكا المختصة",
    desc: "معالجة عسلية، تتميز بإيحاءات الفواكه الاستوائية والعسل الصافي.",
    price: "110 ر.س",
    weight: "250g",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  }
  ```
  The image ID in Unsplash (`photo-1611162617474-5b21e879e113`) displays a **"Sorry We're Closed" sign** on a window, not coffee beans or cups.

* **Other Site-Wide Images**:
  1. **Shop Page**:
     * Classic Aurora Blend (ID 1): `photo-1559056199-641a0ac8b55e` (Coffee bag mockup).
     * V60 Dripper (ID 3): `photo-1495474472287-4d71bcdd2085` (Pour-over preparation).
     * Travel Mug (ID 4): `photo-1514432324607-a09d9b4aefdd` (Coffee cup).
     * Hand Grinder (ID 5): `photo-1559056199-5c2c4a1d7e2f` (Grinder mechanism/beans).
     * Aurora Trial Pack (ID 6): `photo-1587734195503-904fca47e0e9` (Coffee bag/cup).
  2. **Landing Page (`app/templates/aurora/page.tsx`)**:
     * Hero Background: `photo-1495474472287-4d71bcdd2085?q=80&w=2000` (Pour-over V60).
  3. **Locations Page (`app/templates/aurora/locations/page.tsx`)**:
     * Branch 1: `photo-1521017432531-fbd92d768814` (Cozy cafe interior).
     * Branch 2: `photo-1559925393-8be0ec4767c8` (Cafe seating/plants).
     * Hero Banner: `photo-1554118811-1e0d58224f24` (Cafe table close-up).
  4. **Menu Page (`app/templates/aurora/menu/page.tsx`)**:
     * Featured Iced Caramel Latte: `photo-1558618666-fcd25c85cd64` (Iced coffee glass).
     * Aurora Espresso (ID 1): `photo-1510591509098-f4fdc6d0ff04` (Espresso extraction).
     * Flat White (ID 2): `photo-1572442388796-11668a67e53d` (Latte art).
     * Chemex (ID 3): `photo-1504630083234-14187a9df0f5` (Chemex container).
     * Cortado (ID 4): `photo-1514432324607-a09d9b4aefdd` (Coffee cup).
     * Golden Aurora (ID 5): `photo-1627484986780-84490e5f7eb7` (Gold dust latte).
     * Rose Latte (ID 6): `photo-1586201375761-83865001e31c` (Pink rose drink).
     * Smoked Cold Brew (ID 7): `photo-1461023058943-07fcbe16d735` (Cold brew bottle).
     * Croissant (ID 8): `photo-1555507036-ab1f4038808a` (Croissants).
     * Cranberry Tart (ID 9): `photo-1488477181946-6428a0291777` (Tarts).
     * Honey Cake (ID 10): `photo-1535141192574-5d4897c12636` (Cake plate).
     * Chicken Kabsa (ID 11): `photo-1585937421612-70a008356fbe` (Kabsa rice).
     * Madghout (ID 12): `photo-1517686469429-8bdb88b9f907` (Meat/rice dish).
     * Mandi (ID 13): `photo-1606491956689-2ea866880c84` (Mandi rice).
  5. **Story Page (`app/templates/aurora/story/page.tsx`)**:
     * Coffee Farm: `photo-1447933601403-0c6688de566e` (Farming landscape).
     * Coffee Roasting: `photo-1611162458324-aae1eb4129a4` (Industrial roaster).
     * Cafe Atmosphere: `photo-1445116572660-236099ec97a0` (Cafe table).
  6. **Reserve Page (`app/templates/aurora/reserve/page.tsx`)**:
     * Desktop Sidebar: `photo-1445116572660-236099ec97a0` (Cafe table).

### B. Layout Navigation & Hydration Issues
The layout code is located at `app/templates/aurora/layout.tsx`.
* **Mobile Drawer DOM Nesting**: The mobile drawer menu is a sibling (not a child) of the `<header>` element inside the outer wrapper `div`:
  ```typescript
  return (
    <div className="min-h-screen bg-[#050505] ... relative flex flex-col">
      {/* Background ambient glow - shared across all Aurora pages */}
      <div className="absolute top-0 right-0 ... z-0" />
      
      {/* Aurora Navbar */}
      <header className="relative z-50 ...">
        ...
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ...
            className="absolute top-full left-0 w-full bg-[#050505]/95 ... z-40 lg:hidden"
          >
  ```
  The layout outer wrapper `div` has the class `relative` and wraps the entire page (header + children content + footer).
* **Scroll-Lock Logic**:
  Lines 22–31 manage the scroll lock when the drawer is toggled:
  ```typescript
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
  ```
  There is no listener to clear `isMenuOpen` when the window width increases to desktop sizes.
* **Dynamic Active Link Styles**:
  Active nav link highlights are evaluated at render-time using Next.js `usePathname()`:
  ```typescript
  const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/templates/aurora');
  const isExactHome = pathname === '/templates/aurora' && link.href === '/templates/aurora';
  const isLinkActive = link.href === '/templates/aurora' ? isExactHome : isActive;
  ```
  These apply `text-[#C5A059] border-b border-[#C5A059] pb-1` classes directly. There is no `mounted` state check to ensure the client-side active state matches the server-prerendered HTML.

### C. Layout Responsiveness & Styling Analysis
* **Header Layout**: Uses `px-6 md:px-16` for spacing, hiding desktop nav `hidden lg:flex` and showing mobile toggle `flex lg:hidden`.
* **Main Landing Page**: Splits content with `w-full lg:w-1/2` for text and `absolute w-full lg:w-3/5` for the hero image.
* **Stats Section (`locations/page.tsx`)**: The stats grid is structured as:
  ```typescript
  <div className="grid grid-cols-3 gap-4 md:gap-8">
  ```
  The labels have the class `text-gray-400 text-[10px] md:text-sm`. The `text-[10px]` styling on mobile devices is at the threshold of poor readability.
* **Scrollbar hiding on Category Tabs (`menu/page.tsx`)**:
  Line 289 of `menu/page.tsx` uses the class `scrollbar-hide`:
  ```typescript
  <div className="w-full max-w-[1000px] mx-auto mb-10 overflow-x-auto scrollbar-hide">
  ```
  `app/globals.css` does not define a `.scrollbar-hide` class, nor is the `tailwind-scrollbar-hide` plugin listed in `package.json`.
* **Timeline Alignments (`story/page.tsx`)**:
  Lines 252–257 alternate layout text-alignments based on the timeline item index:
  ```typescript
  index % 2 === 0
    ? "md:flex-row-reverse md:text-right"
    : "md:flex-row md:text-left"
  ```
  This left-aligns Arabic text (`md:text-left`) for odd indices, breaking standard RTL right-to-left alignment rules.

---

## 2. Logic Chain

### A. Costa Rica Image Bug
1. Specialty Costa Rica Coffee is an e-commerce product.
2. The image URL is `photo-1611162617474-5b21e879e113`.
3. This photo is a "Sorry We're Closed" store sign.
4. **Conclusion**: This violates Image Integrity (relevance/broken elements in UI). It must be replaced with a coffee-themed image.

### B. Mobile Drawer Positioning Bug
1. The closest positioned ancestor for absolute elements in `layout.tsx` is the outermost page wrapper `div` because it has the class `relative`.
2. The mobile drawer has `absolute top-full`.
3. An element with `absolute top-full` positions its top boundary at `100%` of its closest positioned ancestor's height.
4. The page wrapper's height wraps the entire page (header, main page content, and footer).
5. **Conclusion**: The top of the mobile drawer is placed at the absolute bottom of the web page (below the footer), making it completely invisible to mobile users who tap the toggle at the top of the screen.

### C. Scroll-Lock Window Resize Bug
1. `isMenuOpen` sets `document.body` to `overflow-hidden`.
2. When the viewport is resized from mobile to desktop, the drawer is hidden visually via CSS classes (`lg:hidden`).
3. However, `isMenuOpen` remains `true` in state because there is no resize handler to reset it.
4. **Conclusion**: Desktop users are locked from scrolling if they expand/rotate their device screen while the mobile menu was open.

### D. Hydration Warnings
1. `usePathname()` evaluates the path on the server (during build/SSR) and then on the client.
2. If Next.js pre-renders a template statically, `usePathname()` may return default/null values, leading to a render output of `text-gray-300` for active links.
3. On the client, `usePathname()` resolves to the actual URL, changing classes to `text-[#C5A059]`.
4. **Conclusion**: Next.js will flag a hydration mismatch error due to conflicting SSR/Client CSS classes.

### E. Menu Category Tabs Scrollbar
1. `scrollbar-hide` is applied to categories tab container to prevent scrollbar rendering on overflow.
2. Neither `globals.css` nor Tailwind configs define the `.scrollbar-hide` class.
3. **Conclusion**: The Category Tabs show a default, raw browser scrollbar on mobile devices, breaking the glassmorphic luxury aesthetic.

---

## 3. Caveats

* The Unsplash image IDs are checked by querying their ID metadata against their standard Unsplash catalog descriptions. We assume no redirection rules are modifying these assets on the CDN.
* The hydration mismatches are analyzed based on standard Next.js App Router pre-rendering behaviors for client layouts.
* There is no existing test framework in `package.json`, so our recommendations are designed from scratch for a clean integration.

---

## 4. Conclusion & Recommendations

### A. Core Fixes

1. **Costa Rica Coffee Image**: Replace the image URL in `app/templates/aurora/shop/page.tsx` on line 26:
   * *Before*: `"https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"`
   * *After (Proposed)*: `"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"` (A high-quality specialty coffee cup surrounded by coffee beans).

2. **Mobile Drawer Positioning**: Move the drawer `<motion.div>` inside the `<header>` element in `app/templates/aurora/layout.tsx`. Since `<header>` is `relative`, the drawer's `absolute top-full` will position it immediately below the header bar.

3. **Scroll-Lock Window Resize**: Update `app/templates/aurora/layout.tsx` to handle window resize events:
   ```typescript
   useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth >= 1024) {
         setIsMenuOpen(false);
       }
     };
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);
   ```

4. **Hydration Mismatch Fix**: Standardize layouts with a client-only mount state check:
   ```typescript
   const [mounted, setMounted] = useState(false);
   useEffect(() => { setMounted(true); }, []);
   // use mounted ? isLinkActive : false in classes
   ```

5. **Scrollbar Hiding**: Add the scrollbar-hide utility class to `app/globals.css`:
   ```css
   .scrollbar-hide::-webkit-scrollbar {
     display: none;
   }
   .scrollbar-hide {
     -ms-overflow-style: none;
     scrollbar-width: none;
   }
   ```

6. **Timeline Arabic Text Alignment**: Remove `md:text-left` from `app/templates/aurora/story/page.tsx` line 255 to maintain right-aligned Arabic text:
   * *Before*: `index % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"`
   * *After*: `index % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-right"`

---

### B. Testing Infrastructure Setup Recommendations

To set up a robust testing infrastructure for both End-to-End (E2E) testing and Unit/Component testing, the following structures should be implemented:

#### 1. Directory Layout
```
webbay_business_solutions/
├── e2e/                           # Playwright E2E Tests
│   └── aurora.spec.ts             # Aurora Cafe E2E flows
├── __tests__/                     # Vitest Unit/Component Tests
│   └── shop.test.tsx              # Shop Page component unit tests
├── playwright.config.ts           # Playwright Configuration
├── vitest.config.ts               # Vitest Configuration
├── vitest.setup.ts                # Vitest Test Setup (jest-dom import)
└── package.json                   # Scripts and dependencies
```

#### 2. Packages Needed
Install the required testing packages as developer dependencies:
```powershell
npm install -D @playwright/test vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

#### 3. package.json Scripts
Add these scripts to `package.json`:
```json
"scripts": {
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui",
  "test:unit": "vitest run",
  "test:unit:watch": "vitest"
}
```

#### 4. Playwright Configuration (`playwright.config.ts`)
Create this file at the root:
```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
```

#### 5. Sample E2E Test (`e2e/aurora.spec.ts`)
Create this file to test navigation, mobile responsiveness, shop features, and reservations:
```typescript
import { test, expect } from "@playwright/test";

test.describe("Aurora Cafe E2E Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/templates/aurora");
  });

  test("Desktop navigation works", async ({ page }) => {
    await expect(page.locator("text=مزيج أورورا الكلاسيكي").or(page.locator("text=فنٌ في كل حبة."))).toBeVisible();
    await page.click("text=المنيو");
    await expect(page).toHaveURL(/\/menu/);
    await expect(page.locator("text=قائمة التذوق")).toBeVisible();
  });

  test("Mobile menu opens, is visible, and closes on item click", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Only run on mobile viewports");

    // Menu should be hidden initially
    const mobileDrawer = page.locator("nav").filter({ hasText: "الرئيسية" });
    await expect(mobileDrawer).not.toBeVisible();

    // Toggle menu
    await page.click("button[aria-label='Toggle Menu']");
    await expect(mobileDrawer).toBeVisible();

    // Click link and assert drawer closes
    await page.click("text=المتجر");
    await expect(page).toHaveURL(/\/shop/);
    await expect(mobileDrawer).not.toBeVisible();
  });

  test("Shop page product adding shows toast notification", async ({ page }) => {
    await page.goto("/templates/aurora/shop");
    
    // Add first item to cart
    const addToCartButton = page.locator("button[aria-label='أضف إلى السلة']").first();
    await addToCartButton.click();

    // Expect Success Toast
    const toast = page.locator("text=تم إضافة المنتج للسلة");
    await expect(toast).toBeVisible();
  });

  test("Reservation form works and advances steps", async ({ page }) => {
    await page.goto("/templates/aurora/reserve");

    // Step 1: Fill details
    await page.fill("input[placeholder='مثال: أحمد عبد الله']", "أحمد علي");
    await page.fill("input[placeholder='+966 5X XXX XXXX']", "+966 501234567");
    
    // Step 2: Date & Time & Guests
    await page.fill("input[type='date']", "2026-07-01");
    await page.fill("input[type='time']", "19:00");
    await page.selectOption("select", "2"); // 2 guests

    // Submit
    await page.click("button:has-text('تأكيد الحجز')");

    // Success screen validation
    await expect(page.locator("text=تم استلام طلبك بنجاح! 🎉")).toBeVisible();
  });
});
```

#### 6. Vitest Configuration (`vitest.config.ts`)
Create this file at the root:
```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
```

#### 7. Vitest Setup (`vitest.setup.ts`)
Create this file:
```typescript
import "@testing-library/jest-dom/vitest";
```

#### 8. Sample Unit Test (`__tests__/shop.test.tsx`)
Create this file:
```typescript
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ShopPage from "@/app/templates/aurora/shop/page";

// Mock next/image since it relies on server configurations
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("ShopPage Component", () => {
  test("renders all products correctly", () => {
    render(<ShopPage />);
    expect(screen.getByText("مزيج أورورا الكلاسيكي")).toBeInTheDocument();
    expect(screen.getByText("قهوة كوستاريكا المختصة")).toBeInTheDocument();
    expect(screen.getByText("طاحونة القهوة اليدوية")).toBeInTheDocument();
  });

  test("adds product to cart and shows success toast", async () => {
    vi.useFakeTimers();
    render(<ShopPage />);
    
    // Toast should not be visible initially
    expect(screen.queryByText("تم إضافة المنتج للسلة")).not.toBeInTheDocument();

    // Click "Add to Cart" button of first item
    const buttons = screen.getAllByRole("button", { name: "أضف إلى السلة" });
    fireEvent.click(buttons[0]);

    // Toast should appear
    expect(screen.getByText("تم إضافة المنتج للسلة")).toBeInTheDocument();

    // Advance timers past toast duration (2800ms)
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    // Toast should fade out/disappear
    expect(screen.queryByText("تم إضافة المنتج للسلة")).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});
```

---

## 5. Verification Method

To verify these observations and recommended configurations:

### A. Verifying Code Bugs
1. **Costa Rica Coffee Image**: Inspect the image URL in `app/templates/aurora/shop/page.tsx` on line 27. Try downloading/viewing the image from a browser; it renders a "Closed" sign.
2. **Mobile Menu Drawer Position**: Run the project locally (`npm run dev`), open the page in chrome responsive devtools (iPhone viewport), click the menu button. Notice that the drawer does not open under the header (it is rendering off-screen at the bottom of the long page document).
3. **Scroll Lock Mismatch**: Open the mobile drawer, change the devtools viewport back to desktop width. Observe that you cannot scroll the page because `document.body` still contains `overflow-hidden`.
4. **Scrollbar-hide CSS Mismatch**: Open `app/templates/aurora/menu/page.tsx` on line 289 and check `app/globals.css`. Confirm there is no styling rule for `.scrollbar-hide`.

### B. Verifying Testing Setup
1. Apply the recommended packages to `package.json` and install using `npm install`.
2. Save the configuration and mock files under the specified paths.
3. Run the unit tests via `npm run test:unit`. Verify that all tests pass.
4. Run the development server with `npm run dev`, then run E2E tests via `npm run test:e2e` (or `npm run test:e2e:ui`). Verify that Playwright launches, interacts with the app, and records green runs across Chromium, Firefox, WebKit, and mobile viewport simulations.
