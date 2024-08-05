// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test('test', async ({ page }) => {
  await page.goto('https://flexipill-ui-new-staging.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your number', { exact: true }).fill('1111111111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'Upload Now' }).click();
  await page.locator('label').filter({ hasText: 'Upload Photo/PDF' }).click();
  await page.getByRole('img', { name: 'upload button' }).click();
  await page.locator('div').filter({ hasText: 'Add Images/docUpload Photo/PDF' }).nth(1).setInputFiles('Screenshot 2024-07-31 120443.png');
  await page.locator('.MuiBackdrop-root').click();
});








