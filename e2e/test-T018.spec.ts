import { test, expect } from '@playwright/test';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

// Register the Jest snapshot matcher
expect.extend({ toMatchImageSnapshot });

test('visual regression testing', async ({ page }) => {
    await page.goto('http://127.0.0.1:8000/');
    
    // Take a screenshot
    const screenshot = await page.screenshot();
    
    // Match the screenshot with a snapshot
    expect(screenshot).toMatchSnapshot('e2e/test-T018.spec.ts-snapshots/logo-chromium-win32.png');

    // go to page change logo
});
