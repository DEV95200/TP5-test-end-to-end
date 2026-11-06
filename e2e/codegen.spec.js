// @ts-check
import { test, expect } from "@playwright/test";

// Partie 9 : test généré avec codegen puis retouché
test("Should search Venus on wikipedia", async ({ page }) => {
  await page.goto("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
  const search = page.locator('input[name="search"]').first();
  await search.fill("venus");
  await search.press("Enter");
  await page.locator('a[href*="Vénus_(planète)"]').first().click();
  await expect(page).toHaveURL(/V%C3%A9nus_\(plan%C3%A8te\)|Vénus_\(planète\)/);
  await expect(page.getByText("Vénus est la deuxième planète").first()).toBeVisible();
});
