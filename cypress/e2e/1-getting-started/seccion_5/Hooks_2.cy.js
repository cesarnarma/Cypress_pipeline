require('cypress-xpath');
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

const tiempo = 1000

describe('Hooks Ejemplos', () => {

    before(()=>{
        
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://demoqa.com/checkbox')
        cy.title().should('eq', 'DEMOQA')
        
        cy.wait(tiempo)
    })

        it('TEST 1', ()=>{
            cy.get('.rct-node-parent > .rct-text > .rct-collapse > .rct-icon').click()
            cy.wait(tiempo)
            cy.get('.rct-node-parent')
            .contains('Downloads')
            .parents('.rct-node')
            .find('.rct-checkbox')
            .first() // Asegura que sea solo uno
            .click()
            
        })
})