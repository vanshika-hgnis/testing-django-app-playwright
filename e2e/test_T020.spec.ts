import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(5_000)
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('vanshikas2018@gmail.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('radhikaraina560');
  await page.getByRole('button', { name: 'lock Login' }).click();
  await page.getByRole('link', { name: 'add Create Room' }).click();
  await page.getByRole('combobox').click();
  await page.getByRole('combobox').fill('Random Maths Problem');
  await page.locator('#id_name').click();
  await page.getByRole('combobox').click();
  await page.getByRole('combobox').click({
    button: 'right'
  });
  await page.getByRole('combobox').click();
  await page.locator('#id_name').click();
  await page.locator('#id_name').fill('Maths');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Expectation: Check if a certain element is not empty
  const successMessage = await page.waitForSelector('h2:has-text("Study Rooms")')
  expect(successMessage).not.toBe('');
});
