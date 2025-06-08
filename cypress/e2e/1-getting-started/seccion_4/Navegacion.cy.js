require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'



describe('Navegacion entre paginas', () => {

        it('Back, Forward', ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
            let tiempo = 1000
            cy.visit('https://demoqa.com/')
            cy.title().should('eq', 'DEMOQA')
            cy.log('El Titulo es Correcto')
            cy.wait(tiempo)

            cy.get(':nth-child(1) > :nth-child(1) > .card-up').should('be.visible').click()
            cy.wait(tiempo)
            cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible').click()
            cy.wait(tiempo)

            cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible').click()
            cy.wait(tiempo)

            cy.go("back")
            cy.go("forward")
           
        
        })
        it('Reload', ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
            let tiempo = 1000
            cy.visit('https://demoqa.com/')
            cy.title().should('eq', 'DEMOQA')
            cy.log('El Titulo es Correcto')
            cy.wait(tiempo)

            cy.get(':nth-child(1) > :nth-child(1) > .card-up').should('be.visible').click()
            cy.wait(tiempo)
            cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible').click()
            cy.wait(tiempo)

            cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible').click()
            cy.wait(tiempo)

            cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click()
            cy.wait(tiempo)

            cy.get('#userName').should('be.visible').type('Cesar')
            cy.wait(tiempo)

            cy.get('#userEmail').should('be.visible').type('pruebas@gmail.com')
            cy.wait(tiempo)

            // Recarga la pagina
            cy.reload()

            cy.wait(tiempo)

            cy.go("back")

        })
})