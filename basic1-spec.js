describe('Login page', () => {

    it('should render', () => {
        cy.visit('https://www.amazon.in/');
        cy.get('span[id="nav-link-accountList-nav-line-1"]').click();
        cy.get('h1[class="a-spacing-small"]').should('be.visible');
        cy.get('label[for="ap_email"]').should('contains.text', 'Email or mobile phone number');

        // # Enter username on Email or Username input box
        cy.get('input[id="ap_email"]').type('satish@gmail.com');
        // # Click on Continue button
        cy.get('span[id="continue"]').click();

        // # Enter password on "Password" input box
        cy.get('input[name="password"]').type('sdafsadfsaf');

        // # Click "Sign in" button
        cy.get('input[id="signInSubmit"]').click();

        // * Check that the Error Message displayed 
        cy.get('h4[class="a-alert-heading"]').should('have.text', 'Important Message!');


    });

});