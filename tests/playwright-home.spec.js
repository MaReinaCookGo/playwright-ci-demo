const { test, expect } = require("@playwright/test");

test("Playwright homepage has correct title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
