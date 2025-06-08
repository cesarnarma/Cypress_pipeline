require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

Cypress.Commands.add

describe('Configuracion y uso de los SNIPPETS', () => {
    it("SNIPPETS", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        let tiempo=1000

        cy.get('#userName').should("be.visible").type("Cesar")

        cy.get('#userEmail').should('be.visible').type('Texto')
        cy.wait(tiempo)
        


})

})