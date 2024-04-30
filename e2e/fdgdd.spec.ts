import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('vanshikas2018@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('radhikaraina560');
  await page.getByRole('button', { name: 'lock Login' }).click();
  await page.getByRole('link', { name: 'Maths' }).first().click();
  await page.getByText('arrow-left Study Room edit').click();
  await page.getByRole('link', { name: 'remove' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});