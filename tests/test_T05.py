import pytest
from playwright.sync_api import Page, sync_playwright


# Test for SQL Injection Vulnerability
def test_sql_injection(page: Page):
    # Craft a malicious SQL injection payload
    malicious_payload = "' OR 1=1 --"

    # Navigate to a vulnerable endpoint with a query parameter
    page.goto(f"http://127.0.0.1:8000/{malicious_payload}")

    # Check if the response contains unexpected data indicating successful injection
    assert (
        "Unauthorized access" not in page.content()
    ), "SQL Injection vulnerability detected"


# Test for Cross-Site Scripting (XSS) Vulnerability
def test_xss(page: Page):
    # Craft a malicious XSS payload
    malicious_payload = "<script>alert('XSS')</script>"

    # Input the payload into a vulnerable input field or form
    page.fill("#message-body", malicious_payload)

    # Submit the form or trigger the action that reflects the input
    page.click("#submit-button")

    # Check if the injected script is executed
    assert page.dialog.is_visible(), "XSS vulnerability detected"


# Define fixtures to set up and tear down browser instances
@pytest.fixture(scope="function")
def page():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        yield page
        browser.close()


# Run the vulnerability tests
@pytest.mark.usefixtures("page")
def test_vulnerabilities():
    # Run SQL injection vulnerability test
    test_sql_injection()

    # Run XSS vulnerability test
    test_xss()


if __name__ == "__main__":
    test_vulnerabilities()
