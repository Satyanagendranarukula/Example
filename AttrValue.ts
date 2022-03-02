
describe('Reg form', ()=>{

    xit("get some value", ()=>{
        cy.visit('https://qavbox.github.io/demo/signup/')
        // cy.get('#username').type('qavbox').invoke('val').then((myValue:any)=>{
        //     cy.log(myValue)
        // })
        cy.get('#username').type('qavbox').should('have.value', 'qavbox')
      
    })

    it("fetch text some value", ()=>{
        cy.visit('https://qavbox.github.io/demo/signup/')
         //cy.get('#lblname').invoke('text').then((myValue:any)=>{
        //     cy.log(myValue)
        // })
        cy.get('#lblname').should('have.text', 'Full Name')
      
    })

    it.only("fetch properties or attitbutes", ()=>{
        cy.visit('https://qavbox.github.io/demo/signup/')
         cy.get('input[value=\'TestingBasics\']').click().invoke('prop', 'checked').then((myValue)=>{
             cy.log(myValue)
         })
        //     cy.log(myValue)
        // })
        cy.get('#lblname').should('have.text', 'Full Name')
      
    })


})