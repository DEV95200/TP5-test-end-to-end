// @ts-check
import { test, expect } from "@playwright/test";

async function fillForm(page) {
  await page.goto("/");
  await page.getByTestId("lastname").fill("Dupont");
  await page.getByTestId("firstname").fill("Jean");
  for (const ue of ["ue1", "ue2", "ue3", "ue4", "ue5"]) {
    await page.getByTestId(ue).fill("12");
  }
  await page.getByTestId("parcours").selectOption("dev");
  await page.getByTestId("portfolio").fill("https://example.com");
  await page.getByTestId("image").setInputFiles("e2e/files/image.png");
}

// Partie 6
test("Should submit the form", async ({ page }) => {
  await fillForm(page);
  await page.getByTestId("submit").click();
  await expect(page.getByTestId("banner")).toBeVisible();
  await expect(page.getByTestId("banner")).toContainText("développement web");
});

test("Should submit the form with Enter key", async ({ page }) => {
  await fillForm(page);
  await page.getByTestId("lastname").press("Enter");
  await expect(page.getByTestId("banner")).toBeVisible();
});

// Partie 6
test("Should reset the form with 'rechoisir'", async ({ page }) => {
  await fillForm(page);
  await page.getByTestId("submit").click();
  await page.getByTestId("reselect").click();
  await expect(page.getByTestId("banner")).toBeHidden();
  await expect(page.getByTestId("lastname")).toHaveValue("");
  await expect(page.getByTestId("lastname")).toBeEnabled();
});
