cy.get('[id=boardCodeSearch]').type('Z1B').then(()=>{
    cy.wait(200);
    cy.get('[id=boardColumn-0]')
    .click();
});
cy.get('[id=editBoard]')
.click();
cy.get('[id=BoardCreateEdit] [role=searchbox]').clear().type('100012', { timeout: 1000 }).then(()=>{
    cy.wait(500);
    cy.get('.ui-autocomplete-list-item')
    .first()
    .click();
});

cy.get('.pi-step-forward').eq(1)
.click()
.log('Second Forward');
cy.get('.pi-step-forward').eq(1)
.click()
.log('Third Forward');
cy.get('.ui-corner-right').eq(1)
.click()
.log('Number of columns Dropdown');
cy.get('.ui-dropdown-item').eq(1)
.click();
cy.get('.ui-corner-right').eq(1)
.click();
cy.get('.ui-dropdown-item').eq(2)
.click();