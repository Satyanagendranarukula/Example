describe('Open in new window', ()=>{

    it('New Window url', ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        // cy.get('.mouse-hover-content').invoke('show')
        // cy.contains('Top').click();
        // cy.url().should('include', 'top');
       cy.get('#opentab').then(function(e1){
           const url = e1.prop('href')
           cy.log(url)
           cy.visit(url)
       })
      
    })


})