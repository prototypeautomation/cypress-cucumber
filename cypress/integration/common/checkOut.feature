Feature: Feature Checkout

  Scenario: User Checkout with wrong email format
    Given User Visit midtrans in the browser
    When User Click Buy Now
    Then User fill data on the right side with wrong email format
    Then User Checkout the transaction
  
  Scenario: User Checkout with valid email format
    Given User Visit midtrans in the browser
    When User Click Buy Now
    Then User fill data on the right side with valid email format
    Then User Checkout the transactions

  Scenario: user input with amount of 22 digits then the user matches the pillow price that has been inputted
    Given User Visit midtrans in the browser
    When User Click Buy Now
    Then User fill data on the right side with amount of 22 digits
    Then the user cancels the transaction

  Scenario: user input with amount less than 22 digits then the user matches the pillow price that has been inputted
    Given User Visit midtrans in the browser
    When User Click Buy Now
    Then User fill data on the right side with amount less than 22 digits
    Then the user cancels the transactions