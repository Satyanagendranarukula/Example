describe('Handle Child Tab', ()=>{

    it('Handle the child browser', ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click();
    
    })

    
    it('include', ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.url().should('include', 'rahulshettyacademy')
    
    })


})