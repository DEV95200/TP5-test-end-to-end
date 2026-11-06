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

// Partie 3
test("Should search on wikipedia", async ({ page }) => {
  await page.goto("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
  await page.locator('input[name="search"]').first().fill("Playwright");
  await page.locator('input[name="search"]').first().press("Enter");
  await expect(page).toHaveURL(/Playwright/);
});
