
require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import "cypress-real-events/support";

Cypress.Commands.add

describe('ALERTAS EN CYPRESS', () => {
    it("Alerta", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://demoqa.com/alerts')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        // Registrar primero el evento de alerta
        cy.on('window:alert', (str) => {
            expect(str).to.equal("You clicked a button");
        });

        // Luego hacer clic en el botón
        cy.xpath('//button[@id="alertButton"]').click();
        

})
})