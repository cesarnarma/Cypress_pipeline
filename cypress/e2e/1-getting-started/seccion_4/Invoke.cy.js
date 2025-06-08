
require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import "cypress-real-events/support";

Cypress.Commands.add

describe('INVOKE', () => {
    it("Invocar un campo", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://testpages.eviltester.com/styled/reference/input.html')
        cy.title().should('eq', 'Input Elements - HTML Testing Reference')
        cy.log('El Titulo es Correcto')

        cy.get('.explanation > p').as("info")
        cy.get("@info").invoke("text").should("contain", "This page example input elements of various 'type'")

})
    it("Cambiar propiedades de un campo con INVOKE", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://testpages.eviltester.com/styled/reference/input.html')
        cy.title().should('eq', 'Input Elements - HTML Testing Reference')
        cy.log('El Titulo es Correcto')

        cy.get('[for="text-input"]').invoke("attr", "style", "color:Blue; fontSize:50px")

})
    it("Ocultar un campó", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://testpages.eviltester.com/styled/reference/input.html')
        cy.title().should('eq', 'Input Elements - HTML Testing Reference')
        cy.log('El Titulo es Correcto')

        // Ocultar campo
        cy.get('[for="text-input"]').invoke("hide", "4s")
        // Mostrar campo
        cy.get('[for="text-input"]').invoke("show", "4s")

})
    it("Validar existencia de una imagen", ()=>{
        
        cy.visit('https://testpages.eviltester.com/styled/search')
        cy.title().should('eq', 'Selenium Simplified Search Engine')
        cy.log('El Titulo es Correcto')

        cy.get("img[src='/cover_small.gif']").should('be.visible') // asegúrate de que esté visible
        .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0); // valida que esté cargada

})
})
    it.only("Invoke target blank", ()=>{
        
        cy.visit('https://www.dvwa.co.uk/')
        cy.title().should('eq', 'We;come DVWA - Damn Vulnerable Web Application')
        cy.log('El Titulo es Correcto')

        cy.xpath("//img[@alt='SOURCE CONTROL']").invoke("removeAttr", "target").click({force:true})


})
})