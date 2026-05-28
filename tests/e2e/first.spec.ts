import { test, expect } from '@playwright/test';

test('Titlecheck', async ({ page }) => {
  await page.goto('https://Google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});
