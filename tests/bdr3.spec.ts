import { test, expect, Page } from '@playwright/test';

async function goToEvershop(page: Page) {
  await page.goto('https://demo.evershop.io/');
  await expect(page.locator('.logo-icon')).toBeVisible();
}

async function goToMenu(page: Page, menuName: string, headingName: string ) {
  await page.getByRole('link', { name: menuName}).click();
  await expect(page.getByRole('heading', { name: headingName})).toBeVisible();
}

async function goToShoesDetails(page: Page, shoeName: string) {
  await page.locator('a').filter({ hasText: shoeName }).click();
  await expect(page.getByRole('heading', { name: shoeName })).toBeVisible();
}

async function addToCart(page: Page, variantName: string, colourName: string ) {
  await page.getByRole('link', { name: variantName, exact: true }).click();
  await page.getByRole('link', { name: colourName }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
}

test('testWomen', async ({ page }) => {
  await goToEvershop(page)
  await goToMenu(page, 'Shop women', 'Women' )
  await goToShoesDetails(page, 'Alphaboost shoes'  )
  await expect(page.getByRole('heading', { name: 'Alphaboost shoes' })).toBeVisible();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('link', { name: 'L', exact: true }).click();
  await page.getByRole('link', { name: 'Blue' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
});


test('testMen', async ({ page }) => {
  await goToEvershop(page)
  await page.getByRole('link', { name: 'Shop men' }).click();
  await expect(page.getByRole('heading', { name: 'Men' })).toBeVisible();
  await page.locator('a').filter({ hasText: 'Hacked fashion chuck taylor' }).click();
  await expect(page.getByRole('heading', { name: 'Hacked fashion chuck taylor' })).toBeVisible();
  await page.getByRole('link', { name: 'S', exact: true }).click();
  await page.getByRole('link', { name: 'Brown' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
});


test('testKids', async ({ page }) => {
  await goToEvershop(page)
  await goToMenu(page, 'Shop kids', 'Kid' )
  await goToShoesDetails(page, 'Nmd_r1 shoes'  )
  await addToCart(page, 'X', 'Black')
});
