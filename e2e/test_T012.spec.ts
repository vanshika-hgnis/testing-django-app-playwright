import {test,expect} from "@playwright/test"
import { Page } from "@playwright/test"

test.only('test', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/room/17/")
    await expect(page).toHaveScreenshot("vue-form.png")
  });