/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("User Visit midtrans in the browser", () => {
    cy.visit("https://demo.midtrans.com/")
});
  
When("User Click Buy Now",() => {
    cy.get('.buy').click().wait(3000)
})

Then("User fill data on the right side with wrong email format",() => {
    cy.get('.input > .text-right').type("{selectAll}30000").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("{selectAll}Erik").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("{selectAll}erikwidiantojs@@gmail.com").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("{selectAll}0817272727272").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("{selectAll}Malang").wait(3000)
    cy.get('textarea').type("{selectAll}Jalan Raya Ampeldento Kec. Pakis Kab. Malang").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("{selectAll}54211").wait(3000)
})

Then("User Checkout the transaction",() => {
    cy.get('.cart-checkout').click().wait(3000)
    cy.get('[data-reactid=".0.0.0.2.0.1.0.0:0"]').should(($p) => {
        expect($p).to.contain('Sorry, something went wrong.')
    })
})

Then("User fill data on the right side with valid email format",() => {
    cy.get('.input > .text-right').type("{selectAll}30000").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("{selectAll}Erik").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("{selectAll}Jaya@gmail.com").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("{selectAll}0817272727272").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("{selectAll}Malang").wait(3000)
    cy.get('textarea').type("{selectAll}Jalan Raya Ampeldento Kec. Pakis Kab. Malang").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("{selectAll}54211").wait(3000)
})

Then("User Checkout the transactions",() => {
    cy.get('.cart-checkout').click().wait(3000)
})

Then("User fill data on the right side with amount of 22 digits",() => {
    cy.get('.input > .text-right').type("{selectAll}1000000000000000000000").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("{selectAll}Erik").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("{selectAll}Jaya@gmail.com").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("{selectAll}0817272727272").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("{selectAll}Malang").wait(3000)
    cy.get('textarea').type("{selectAll}Jalan Raya Ampeldento Kec. Pakis Kab. Malang").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("{selectAll}54211").wait(3000)
})

Then("User fill data on the right side with amount less than 22 digits",() => {
    cy.get('.input > .text-right').type("{selectAll}10000").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').type("{selectAll}Erik").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').type("{selectAll}Jaya@gmail.com").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').type("{selectAll}0817272727272").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').type("{selectAll}Malang").wait(3000)
    cy.get('textarea').type("{selectAll}Jalan Raya Ampeldento Kec. Pakis Kab. Malang").wait(3000)
    cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').type("{selectAll}54211").wait(3000)
})

Then("the user cancels the transaction",() => {
    cy.get('.cancel-btn').click().wait(3000)
    cy.get('[data-reactid=".0.0.0.2.0.0.2.1"]').should(($element) => {
        expect($element).to.have.text('1')
    })

})

Then("the user cancels the transactions",() => {
    cy.get('.cancel-btn').click().wait(3000)
    cy.get('[data-reactid=".0.0.0.2.0.0.2.1"]').should(($element) => {
        expect($element).to.have.text('10,000')
    })
})



