import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('e.g. dennis_ivy@email.com />\n          </div>\n          <div class=').click();
  await page.getByPlaceholder('e.g. dennis_ivy@email.com />\n          </div>\n          <div class=').fill('vanshikas2018');
  await page.getByPlaceholder('e.g. dennis_ivy@email.com />\n          </div>\n          <div class=').press('Shift+Enter');
  await page.getByPlaceholder('e.g. dennis_ivy@email.com />\n          </div>\n          <div class=').fill('vanshikas2018@gmail.com');
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('radhikaraina560');
  await page.getByPlaceholder('••••••••').press('Enter');
});