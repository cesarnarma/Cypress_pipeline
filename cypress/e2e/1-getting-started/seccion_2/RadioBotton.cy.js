
require('cypress-xpath');
describe('Radio Button', () => {

    it("Seleccionar CheckBox", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/radio-button')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        cy.get(':nth-child(2)>.custom-control-label').click()  

    
        
    })
})

