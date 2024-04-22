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


print(get_data())
