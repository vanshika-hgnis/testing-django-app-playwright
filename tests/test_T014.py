from playwright.sync_api import sync_playwright


def test_T014(playwright):
    with sync_playwright() as p:
        browser = p.chromium.launch()  # Can use other browsers like firefox, webkit
        page = browser.new_page()
        page.goto("https://your-website.com")  # Replace with your target website

        # Get all navigation links
        nav_links = page.locator("nav a")

        for i in range(nav_links.count()):
            link_href = nav_links.nth(i).get_attribute("href")

            # Only process internal links (optional)
            if link_href and (
                link_href.startswith("/")
                or link_href.startswith("https://your-website.com")
            ):
                try:
                    response = page.goto(
                        link_href, timeout=5000
                    )  # Adjust timeout if needed
                    assert response.status in [
                        200,
                        201,
                        204,
                        301,
                        302,
                    ]  # Check for valid HTTP status codes
                except Exception as e:
                    print(f"Error navigating to {link_href}: {e}")

        browser.close()


if __name__ == "__main__":
    with sync_playwright() as p:
        test_T014(p)
