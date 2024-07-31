import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://flexipill-ui-new-staging.vercel.app/cart');
  await page.goto('https://flexipill-ui-new-staging.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your number', { exact: true }).click();
  await page.getByPlaceholder('Enter your number', { exact: true }).fill('1111111111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
});  