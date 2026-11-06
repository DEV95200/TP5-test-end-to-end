// @ts-check
import { test, expect } from "@playwright/test";

// Partie 4
test("Should submit the form", async ({ page }) => {
  await page.goto("/");
  await page.locator("#lastname").fill("Dupont");
  await page.locator("#firstname").fill("Jean");
  for (const ue of ["ue1", "ue2", "ue3", "ue4", "ue5"]) {
    await page.locator(`#${ue}`).fill("12");
  }
  await page.locator("#parcours").selectOption("dev");
  await page.locator("#portfolio").fill("https://example.com");
  await page.locator("button[type=submit]").click();
  await expect(page.locator(".banner")).toBeVisible();
  await expect(page.locator(".banner")).toContainText("développement web");
});
