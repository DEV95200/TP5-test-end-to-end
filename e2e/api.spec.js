// @ts-check
import { test, expect } from "@playwright/test";

// Partie 7
test("Should display holidays from mocked API", async ({ page }) => {
  await page.route("**/api", (route) =>
    route.fulfill({
      json: [
        { date: "01/05/2027", name: "Fête du Travail" },
        { date: "14/07/2027", name: "Fête nationale" },
      ],
    })
  );
  const response = page.waitForResponse("**/api");
  await page.goto("/");
  await response;
  const items = page.getByTestId("holidays").locator("li");
  await expect(items).toHaveCount(2);
  await expect(items.first()).toContainText("Fête du Travail");
});
