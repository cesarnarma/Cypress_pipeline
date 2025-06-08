
require('cypress-plugin-tab')

describe('Funcion Tab', () => {

    it("Type Tab", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')
       
        cy.get('#firstName').type('Cesar').tab().
        type('Narvaez').tab().
        type('cnarvazm@gmail.com')

    })

})
    