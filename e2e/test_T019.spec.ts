import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login/');
  
  // Fill in the email and password fields
  page.locator("#email").click()
  page.locator("#email").fill("vanshikas2018@gmail.com")
  await page.fill('[placeholder="••••••••"]', 'radhikaraina560');
  
  // Click the login button
  await page.click('button[type="submit"]');
  
  // Wait for the element with text 'Rooms available' to become visible
  // Assert that the element is visible
  const roomsAvailableElement = await page.$('text="Rooms available"');
  expect(roomsAvailableElement).not.toBeNull();
});
