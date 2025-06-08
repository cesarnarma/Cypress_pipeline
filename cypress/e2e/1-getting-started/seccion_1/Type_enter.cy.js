
describe('sección 1 Validar Titulo', () => {

    it("Funcion: Type Enter ", ()=>{
  //  cy.on('uncaught:exception', (err, runnable) => {
  //  return false;
  //      });
        cy.visit('https://duckduckgo.com/')
        cy.get('#searchbox_input').type('Cypress io {enter}')
        cy.get(':nth-child(1) > [data-testid="result"] > .ikg2IXiCD14iVX7AdZo1 > .LnpumSThxEWMIsDdAT17 > [data-testid="result-title-a"] > .EKtkFWMYpwzMKOYr0GYm').click()
       
    })
})
    