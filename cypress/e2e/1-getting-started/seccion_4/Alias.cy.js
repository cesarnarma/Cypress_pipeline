
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
        cy.visit('https://testpages.eviltester.com/styled/reference/input.html')
        cy.title().should('eq', 'Input Elements - HTML Testing Reference')
        cy.log('El Titulo es Correcto')

        cy.get("#text-input").should("be.visible").as("texto")
        cy.get("@texto").type("PRUEBA")

        cy.get("#search-input").should("be.visible").as("buscar")
        cy.get("@buscar").type("BUSCAR")

        cy.get('#password-input').should("be.visible").as("contraseña")
        cy.get("@contraseña").type("123")

        cy.get('#email-input').should("be.visible").as("correo")
        //cy.get('#url-input').should("be.visible").as("url")
        cy.get('#tel-input').should("be.visible").as("tel")
        cy.get('#number-input').should("be.visible").as("numero")

        cy.get("@correo").type("prueba@gmail.com")
        //cy.get("@url").type("www.test.com")
        cy.get("@tel").type("1234567")
        cy.get("@numero").type("-2")

        cy.get('#submit-input').click()

})
})