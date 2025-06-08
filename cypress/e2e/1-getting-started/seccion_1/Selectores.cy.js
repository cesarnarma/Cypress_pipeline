
require('cypress-xpath');

describe('Tipos de Selectores', () => {

    it("Selector ID", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')
               
        cy.get('#userName').should('be.visible').type('Cesar')
        cy.get('#userEmail').should('be.visible').type('cnarvaezm@gmail.com')
        cy.wait(2000)

    })

    it("Selector por Atributo", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        cy.get('[placeholder="Full Name"]').should('be.visible').type('Cesar')
      

    })

    it("Selector por Xpath", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')

        cy.xpath('//*[@id="userName"]').should('be.visible').type('Cesar Armando Narvaez')
        cy.xpath('//input[@id="userEmail"]').should('be.visible').type('cnarvaezm@gmail.com')
        cy.xpath('//textarea[@id="currentAddress"]').should('be.visible').type('av americas 150')
        cy.xpath('//textarea[@id="permanentAddress"]').should('be.visible').type('carrera 10')
        

    })
it("Selector por Contenedores", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')

        cy.get(".custom-control-label").contains('Female').click()
        cy.get(".custom-control-label").contains('Other').click()
 

    })

    it.only("Selector por COPY_SELECTORES", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')

        cy.get('#userNumber').should('be.visible').type('123456789') 

    })


})

    