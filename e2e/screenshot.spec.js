// @ts-check
import { test } from "@playwright/test";

// Partie 8
const sizes = {
  mobile: { width: 375, height: 667 },
  tablette: { width: 768, height: 1024 },
  pc: { width: 1440, height: 900 },
};

for (const [name, size] of Object.entries(sizes)) {
  test(`Screenshot ${name}`, async ({ page }) => {
    await page.setViewportSize(size);
    await page.goto("https://www.cyu.fr/");
    await page.screenshot({ path: `screenshots/cyu-${name}.png` });
  });
}

test("Screenshot sans bandeau cookies", async ({ page }) => {
  await page.goto("https://www.cyu.fr/");
  const banner = page.locator(".cookiefirst-root");
  await banner.waitFor({ state: "attached" });
  await banner.evaluate((item) => item.remove());
  await page.screenshot({ path: "screenshots/cyu-sans-cookies.png" });
});
