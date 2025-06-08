
require('cypress-xpath');
import 'cypress-file-upload'

describe('Cargar Imagenes', () => {

    it("Seleccionar CheckBox", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        //ADJUNTAR ARCHIVO SUBIR ARCHIVO

        const ruta='img1.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)

           
        
    })
})
