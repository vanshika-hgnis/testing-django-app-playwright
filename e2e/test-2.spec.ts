import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('e.g. dennis_ivy@email.com />\n          </div>\n          <div class=').click();
  await page.getByPlaceholder('e.g. dennis_ivy@email.com />\n          </div>\n          <div class=').fill('vanshikas2018@gmail.com');
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('radhikaraina560');
  await page.getByPlaceholder('••••••••').press('Enter');
  await page.getByRole('link', { name: 'add Create Room' }).click();
  await page.getByRole('combobox').click();
  await page.getByRole('combobox').fill('Testing a Website Using Playwright Help Needed');
  await page.getByRole('combobox').click();
  await page.getByRole('combobox').press('Control+a');
  await page.getByRole('combobox').press('Control+x');
  await page.locator('#id_name').click();
  await page.locator('#id_name').fill('Testing a Website Using Playwright Help Needed');
  await page.getByRole('combobox').click();
  await page.getByRole('combobox').fill('Testing');
  await page.locator('#id_description').click();
  await page.locator('#id_description').fill('Need to Intergrate Js with Python ');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: 'Testing a Website Using' }).nth(3).click();
  await page.locator('.threads').click();
  await page.locator('body').press('Control+-');
});