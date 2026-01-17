@Login @UI
Feature: Login Feature

Scenario Outline: Verify Login Functionality
    Given User navigates to the login page
    When User enters username "<username>" and password "<password>"
    And User clicks on the login button
    Then User should be logged in successfully

Examples:
    | username        | password   |
    | standard_user   | secret_sauce |
    | problem_user    | secret_sauce |
