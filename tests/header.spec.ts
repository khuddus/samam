import { test, expect } from '@playwright/test';

test('should display Satyanveshana Mandali text in the header', async ({ page }) => {
  // Go to your app's URL
  await page.goto('http://localhost:3000'); // Change to your app's URL

  // Check if the text "Satyanveshana Mandali" is visible
  const headerText = await page.locator('header .navbar-start .btn-ghost .hidden.lg\\:inline');
  await expect(headerText).toBeVisible();
  await expect(headerText).toHaveText('Satyanveshana Mandali');
});
