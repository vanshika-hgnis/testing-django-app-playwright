import re, pytest
import csv
from playwright.sync_api import Page, expect
from pathlib import Path


def get_data():
    with open("tests/data/reg_testing.csv", "r") as f:
        reader = csv.reader(f)
        next(reader)
        data = [tuple(row) for row in reader]
    return data


@pytest.mark.parametrize("name,username,email,password1,password2", get_data())
def test_T06(page: Page, email, username, password1, name, password2) -> None:
    page.goto("http://127.0.0.1:8000/register/")
    name_input = page.locator('input[name="name"]')
    username_input = page.locator('input[name="username"]')
    password_input = page.locator('input[name="password"]')
    email_input = page.locator('input[name="email"]')
    password1_input = page.locator('input[name="password1"]')
    password2_input = page.locator('input[name="password2"]')

    name_input.fill(name)
    username_input.fill(username)
    email_input.fill(email)
    password1_input.fill(password1)
    password2_input.fill(password2)

    page.click('button[type="submit"]')

    heading_study_rooms = page.wait_for_selector('h2:has-text("Study Rooms")')
    assert heading_study_rooms.is_visible(), "Heading not visible after login"
