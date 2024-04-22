import re, pytest
import csv
from playwright.sync_api import Page, expect
from pathlib import Path


def get_data():
    with open("tests/data/login_testing.csv", "r") as f:
        reader = csv.reader(f)
        next(reader)
        data = [tuple(row) for row in reader]
    return data


@pytest.mark.parametrize("email,password", get_data())
def test_T06(page: Page, email, password) -> None:
    page.goto("http://127.0.0.1:8000/login/")
    email_input = page.locator('input[name="email"]')
    password_input = page.locator('input[name="password"]')
    email_input.fill(email)
    password_input.fill(password)
    page.click('button[type="submit"]')
    heading_study_rooms = page.wait_for_selector('h2:has-text("Study Rooms")')
    assert heading_study_rooms.is_visible(), "Heading not visible after login"
