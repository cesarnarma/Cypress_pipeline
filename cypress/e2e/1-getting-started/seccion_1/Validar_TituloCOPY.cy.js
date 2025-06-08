
describe('sección 1 Validar Titulo', () => {

    it("Test: Validar Titulo de Pagina ", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')

        cy.log('El Titulo es Correcto')
       
    })
    
});