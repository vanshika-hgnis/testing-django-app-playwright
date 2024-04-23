import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/vanshika-hgnis/testing-django-app-playwright');
  await page.goto('http://127.0.0.1:8000/profile/2/');
  await page.locator('.avatar > img').first().click();
  await page.getByRole('link', { name: 'Python 4' }).click();
  await page.locator('.roomListRoom__content').first().click();
  await page.locator('div1').filter({ hasText: 'Testing a Website Using' }).nth(2).click();
  await page.locator('.participants__list').click();
});