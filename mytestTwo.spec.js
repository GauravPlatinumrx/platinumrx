import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://flexipill-ui-new-staging.vercel.app/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your number', { exact: true }).fill('1111111111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.getByRole('button', { name: '1' }).click();
  await page.locator('div').filter({ hasText: /^Items in Your CartParacip 500 TabletCiplaStrip of 10 Tablet₹ 117MRP ₹ 232\.9626$/ }).getByRole('img').click();
  await page.getByRole('img').click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.locator('a').filter({ hasText: /^PlatinumRx$/ }).click();
  await page.getByPlaceholder('Search your Medicines').click();
  await page.getByPlaceholder('Search your Medicines').fill('dolo');
  await page.getByPlaceholder('Search your Medicines').press('Enter');
  await page.getByRole('link', { name: 'Salt composition for both: Paracetamol 500mg Dolo 500 Tablet 10 Tablet Strip of' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Salt composition for both: Paracetamol 500mg Dolo 500 Tablet 10 Tablet Strip of' }).click();
  await page.getByRole('link', { name: 'Salt composition for both: Paracetamol 500mg Dolo 500 Tablet 10 Tablet Strip of' }).click();
  await page.getByRole('button', { name: '1' }).click();
});