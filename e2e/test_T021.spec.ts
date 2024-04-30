import { test, expect } from '@playwright/test';

test.describe("Testing performance", () => {
    test.only('Access the running dev tools and request CDP performance metrics', async ({ page, browser }) => {
        const client = await page.context().newCDPSession(page)
        await client.send("Performance.enable")
        await page.goto("http://127.0.0.1:8000/")
        await page.getByRole('link', { name: 'Login' }).click();
        await page.getByPlaceholder('Enter email').click();
        await page.getByPlaceholder('Enter email').fill('vanshikas2018@gmail.com');
        await page.getByPlaceholder('Enter password').click();
        await page.getByPlaceholder('Enter password').fill('radhikaraina560');
        await page.getByRole('button', { name: 'lock Login' }).click();
        await page.getByRole('link', { name: 'Maths' }).first().click();
        await page.getByText('arrow-left Study Room edit').click();
        await page.getByRole('link', { name: 'remove' }).click();
        await Promise.all([
            page.waitForEvent('response'),
            page.getByRole('button', { name: 'Confirm' }).click()
        ])
        console.log("Dev Tools Performance Metrics")
        let performanceMetrics = await client.send("Performance.getMetrics")
        console.log(performanceMetrics.metrics)
    });

    test.only("Capture Performance Timeline Trace during test execution and demonstrate marks", async ({ page, browser }) => {
        console.log("\n Devtools:start tracing ====\n")
        await browser.startTracing(page, { path: './trace.json', screenshots: true });

        await page.goto('http://127.0.0.1:8000/')

        // Use performance.mark API
        await page.evaluate(() => (window.performance.mark('perf:start')))
        await page.getByRole('heading', { name: 'Recent Activities' }).click();

        await page.evaluate(() => { window.performance.mark("perf:stop") })
        await page.evaluate(() => (window.performance.measure("overall", "perf:start", "perf:stop")))

        // Get all performance marks
        const allMarksJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByName("perf:start")))
        const allMarks = JSON.parse(allMarksJson)
        console.log('window.performance.getEntriesByName("perf:start")', allMarks)

        // Get all performance measures
        const allMeasuresJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByName("overall")))
        const allMeasures = JSON.parse(allMeasuresJson)
        console.log('window.performance.getEntriesByName("overall")', allMeasures)

        await Promise.all([
            page.waitForSelector('body'), // Placeholder selector
            page.getByRole('link', { name: 'StudyBuddy' }).click()
        ])
    });
});
