from playwright.sync_api import Page, expect


def test_T02(page: Page) -> None:
    page.goto("http://127.0.0.1:8000/register/")
    page.locator("#id_name").click()
    page.locator("#id_name").fill("Radhika")
    page.locator("#id_username").click()
    page.locator("#id_name").click()
    page.locator("#id_name").fill("Radhika Raina")
    page.locator("#id_username").click()
    page.locator("#id_username").fill("rainar")
    page.get_by_role("main").locator("form div").filter(has_text="Email").click()
    page.locator("#id_email").fill("rradhika$56@gmail.com")
    page.locator("#id_password1").click()
    page.locator("#id_password1").fill("1234")
    page.locator("#id_password2").click()
    page.locator("#id_password2").fill("1234")
    page.locator("#id_password2").press("Enter")
