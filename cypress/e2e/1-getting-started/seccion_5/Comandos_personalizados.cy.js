require('cypress-xpath');
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'


describe('Comando Personalizado', () => {
    before(()=>{
        let tiempo = 1000
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        
        cy.wait(tiempo)
    })

        it('Prueba 1: Comando con selector', ()=>{
            cy.capturar_texto("#userName","Cesar",500)
            cy.capturar_texto("#userEmail","cesar@gmail.com",500)
            cy.capturar_texto("#currentAddress","calle 185 020 0",1000)
            cy.capturar_texto_xpath("//textarea[@id='permanentAddress']","demo",1000)
            cy.click_boton("#submit",100)
            
        })
        it.only('Prueba 2: Bloque con parametros', ()=>{
            cy.Formulario_Text_Box("Cesar","prue@gmail.com","direccion uno","dir dos",500)
            
        })
})