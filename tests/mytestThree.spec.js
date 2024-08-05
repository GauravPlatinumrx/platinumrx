import { test, expect } from '@playwright/test';

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