import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Charka Nurture/);
}); 

test('men shoes', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');
  await page.getByRole('link', { name: 'Men', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Seasonal color chuck' }).click();
  await page.getByRole('heading', { name: 'Seasonal color chuck' }).click();
});