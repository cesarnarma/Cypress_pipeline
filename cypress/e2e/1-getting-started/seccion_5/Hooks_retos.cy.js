require('cypress-xpath');
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'


describe('RETO DE LOS HOOKS', () => {
    let tiempo=1000
    
    beforeEach(()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.title().should('eq', 'OrangeHRM')
            cy.log('El Titulo es Correcto')
            cy.wait(tiempo)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
            cy.wait(tiempo)
            cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()
            cy.wait(tiempo)
    })
    after(()=>{
        cy.log("ultimo ciclo final de todo")
        cy.wait(tiempo)
        cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click()
        cy.wait(tiempo)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click()
    })
        it('TEST 1 Menu: Admin', ()=>{
            cy.xpath('//span[text()="Admin"]').should('be.visible').click();
            cy.wait(tiempo)
        })

        it('TEST 2 Menu: PIM', ()=>{
            cy.xpath('//span[text()="PIM"]').click();
            cy.wait(tiempo)
        })

        it('TEST 3 Menu: Recruitment', ()=>{
            cy.xpath('//span[text()="Recruitment"]').click();
            cy.wait(tiempo)
        })
        it('TEST 4 Menu: My Info', ()=>{
            cy.xpath('//span[text()="My Info"]').click();
            cy.wait(tiempo)
        })        
        
})