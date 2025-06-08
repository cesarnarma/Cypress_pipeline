
describe('Funcion Page Up Down', () => {

    it("Type pageUp ", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')
       
        cy.get('#userName').type('{pageup}')
        cy.wait(2000)

    })

    it("Type pageDown ", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')
       
        cy.get('#userName').type('{pagedown}')
        cy.wait(2000)
})
})
    