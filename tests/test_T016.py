from playwright.sync_api import sync_playwright


def test_search_functionality(playwright):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://127.0.0.1:8000/")  # Replace with your website

        search_bar = page.locator("#search-input")

        # Test Cases
        test_queries = [
            "valid search term",
            "empty query",
            "invalid&$#@",
        ]

        for query in test_queries:
            search_bar.fill(query)
            search_bar.press("Enter")  # Simulate pressing Enter

            if query == "valid search term":
                assert page.url().startswith("http://127.0.0.1:8000/")
                assert page.locator(".roomList").is_visible()
            elif query == "empty query":
                assert page.locator(".roomListRoom").is_visible()
            else:
                assert page.locator(".roomListRoom").is_visible()

        browser.close()


if __name__ == "__main__":
    with sync_playwright() as p:
        test_search_functionality(p)
