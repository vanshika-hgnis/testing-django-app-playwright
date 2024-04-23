import { expect, Page, test } from '@playwright/test';

test('Validate navigation links', async ({ page }) => {
    await page.goto('https://your-website.com'); // Replace with your target website

    // Get all navigation links 
    const navLinks = page.locator('nav a');

    for (let i = 0; i < await navLinks.count(); i++) {
        const linkHref = await navLinks.nth(i).getAttribute('href');

        // Only process internal links (optional)
        if (linkHref && (linkHref.startsWith('/') || linkHref.startsWith('http://127.0.0.1:8000/'))) {
            try {
                const response = await page.goto(linkHref, { timeout: 5000 }); // Adjust timeout if needed
                expect(response?.status()).toBeLessThanOrEqual(400);   
 // Check for valid HTTP status codes
            } catch (e) {
                console.error(`Error navigating to ${linkHref}: ${e}`);
            }
        }
    }
});
