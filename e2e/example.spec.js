// @ts-check
import { test, expect } from "@playwright/test";

// Partie 2
test("Should visit one news on university's website", async ({ page }) => {
  await page.goto("https://www.cyu.fr/");
  const firstNews = page.locator('a[href^="/actualites/"]').first();
  const href = await firstNews.getAttribute("href");
  await firstNews.click();
  await expect(page).toHaveURL(/\/actualites\//);
  expect(href).toContain("actualites");
});
