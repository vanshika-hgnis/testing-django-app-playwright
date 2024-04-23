import { chromium, firefox, BrowserContext, Browser } from 'playwright';
import { test, expect } from "@playwright/test"

test.only('Compare UI snapshots in different browsers', async ({ page }) => {
  const browserTypes = ['chromium', 'firefox'];
  const contextPromises: Promise<BrowserContext>[] = [];
  const browserInstances: Browser[] = [];

  // Launch browsers and create contexts
  for (const browserType of browserTypes) {
    let browser: Browser;
    switch (browserType) {
      case 'chromium':
        browser = await chromium.launch();
        break;
      case 'firefox':
        browser = await firefox.launch();
        break;
      default:
        throw new Error('Invalid browser type');
    }
    browserInstances.push(browser);
    contextPromises.push(browser.newContext());
  }

  // Navigate and take screenshots in each context
  const pagePromises = contextPromises.map(async (contextPromise, index) => {
    const context = await contextPromise;
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:8000/room/17/");
    return page;
  });

  // Wait for all pages to load and take screenshots
  const pages = await Promise.all(pagePromises);
  const screenshotPromises = pages.map(async (page, index) => {
    const browserType = browserTypes[index];
    await expect(page).toHaveScreenshot(`e2e/screenshot_${browserType}.png`);
  });

  // Wait for all screenshots to be captured
  await Promise.all(screenshotPromises);

  // Close all browser instances
  await Promise.all(browserInstances.map(browser => browser.close()));
});
