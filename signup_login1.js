/// <reference types="cypress" />

describe("Signup Test", () => {
    it("Test valid signup", () => {
        cy.visit("http://localhost:3000/#/");
        cy.get(".cdk-overlay-backdrop").click(-50, -50, {force: true})
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
        cy.get('#newCustomerLink').contains("Not yet a customer?").click({force: true});
    })
})