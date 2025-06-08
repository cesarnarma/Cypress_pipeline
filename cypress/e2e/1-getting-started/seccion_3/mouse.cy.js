
require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import "cypress-real-events/support";

Cypress.Commands.add

describe('EVENTOS DEL MOUSE', () => {

    it("DRAG AND DROP - ARRASTRAR Y SOLTAR", ()=>{
        let tiempo=1000

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title().should('eq', 'The Internet')
        cy.log('El Titulo es Correcto')
        cy.wait(tiempo)

        cy.get("#column-a").drag("#column-b")

        //cy.xpath('//div[@id="column-a"]').drag('//div[@id="column-b"]',{force:true})  
        
    })
    
        it("Debería arrastrar el item correctamente", () => {
        cy.visit("https://html5demos.com/drag/")
        cy.get("#one").drag("#bin")

     })
     
        it("Mouse despliega Menu cuando se selecciona un menu", () => {
        cy.visit("https://www.way2automation.com/")
        cy.title().should('eq', 'Get Online Selenium Certification Course | Way2Automation')
        cy.log('El Titulo es Correcto')
        cy.wait(1500) 

        // Simula cuando el mouse se pone en un MENU y este despliega las opciones    
        cy.get('#menu-item-27597').realHover()
        cy.contains("Video Tutorial").should('be.visible')
        cy.xpath('//li[@id="menu-item-27599"]//span[@class="menu-text"][normalize-space()="Selenium with Java"]').click()
    
    })
    it("Arrastrar un Slider", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/slider')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        //Mueve un slider como si se mantuviera seleccionado y se moviera de posicion
        cy.get('.range-slider').invoke('val', 95).trigger('input')

              
    })
})


