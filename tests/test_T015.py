from playwright.sync_api import sync_playwright


def test_button_responsiveness(playwright):
    viewports = [
        {"width": 1920, "height": 1080},  # Desktop
        {"width": 768, "height": 1024},  # Tablet
        {"width": 375, "height": 812},  # Mobile
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://127.0.0.1:8000/login/")  # Replace with your website

        for viewport in viewports:
            page.set_viewport_size(viewport)

            button = page.locator(
                "button#submit"
            )  # Replace 'submit' with your button's ID
            button_box = button.bounding_box()

            # Ensure the button is visible and clickable
            assert button.is_visible()
            assert button.is_enabled()

            # Optional: Simulate a click and check for expected actions
            button.click()
            # Add assertions to check post-click behavior

        browser.close()


if __name__ == "__main__":
    with sync_playwright() as p:
        test_button_responsiveness(p)
