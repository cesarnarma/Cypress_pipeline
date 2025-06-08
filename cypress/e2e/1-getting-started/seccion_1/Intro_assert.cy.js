
describe('Introduccion a los Assert', () => {

    it("Demo de los Asserts", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        cy.get('#firstName').should('be.visible').type('Cesar')
        cy.get('#lastName').should('be.visible').type('Narvaez')
        cy.get('#userEmail').should('be.visible').type('cnarvaezm@gmail.com')

    })

})