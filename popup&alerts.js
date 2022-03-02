describe('Alerts and pop up', ()=>{

    it('Handle alerts and pop up', ()=>{
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click();

        //window.alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    })

})