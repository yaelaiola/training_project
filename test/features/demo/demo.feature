Feature: Demo Feature

    @demo
    Scenario Outline: First test
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the firat search result
        Then The URL should match <ExpectedURL>

        Examples:
            | Test ID    | SearchItem | ExpectedURL             |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |