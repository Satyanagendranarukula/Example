// The following describe or context indicates "Test Suite" 
describe("Visiting Amazon website and login", function () {

    // The following it block indicates "Test case" 
    it("Should visit Amazon website", function () {
        cy.visit('https://www.amazon.in/');
        cy.get('span[id="nav-link-accountList-nav-line-1"]').click();
        cy.get('label[for="ap_email"]').should('contains.text', 'Email or mobile phone number');
        cy.get('input[id="ap_email"]').click();
        cy.get('input[id="ap_email"]').type('satish@gmail.com');
        cy.get('span[id="continue"]').click();
        cy.get('input[name="password"]').type('sdafsadfsaf');
        cy.get('input[id="signInSubmit"]').click();
        cy.get('h4[class="a-alert-heading"]').should('have.text', 'Important Message!');
    })

    

})

