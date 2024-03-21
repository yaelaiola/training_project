# An example of combining API and UI
Feature: Customer search

    @demo
    Scenario Outline: <TestID>: Search external customers
        Given get list of users from reqres.in
        When An as Admin user login to nopcommerce site
        When Search users in customer list
        Then Verify if all users exist in customers list

        Examples:
            | Test ID    | 
            | E2E_TC001 | 