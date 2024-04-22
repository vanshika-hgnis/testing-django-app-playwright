import re
from playwright.sync_api import Page, expect


def test_T03(page: Page) -> None:
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
