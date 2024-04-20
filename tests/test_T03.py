import re
from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://127.0.0.1:8000/register/")
    page.locator("#id_email").click()
    page.locator("#id_name").click()
    page.locator("#id_name").fill("Vanshika")
    page.locator("#id_username").click()
    page.locator("#id_username").fill("vanshika")
    page.locator("#id_email").click()
    page.locator("#id_email").click()
    page.locator("#id_email").fill("vanshikas2018@gmail.com")
    page.locator("#id_password1").click()
    page.locator("#id_password1").fill("cursedchild")
    page.locator("#id_password2").click()
    page.locator("#id_password2").fill("cursedchild")
    page.locator("#id_password2").press("Enter")

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
