
require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import "cypress-real-events/support";
import { count } from 'rxjs';

Cypress.Commands.add

describe('ELEMENTOS DE UNA TABLA', () => {
    it("Seleccionar opcion", ()=>{
 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        //INICIAR SESION
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.xpath('//input[@placeholder="Username"]').type('Admin')
        //cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        //SELECIONAR MENU RECLUTAMIENTO
        cy.xpath('//span[text()="Admin"]').click();
        cy.get(":nth-child(2) > .oxd-input").should('be.visible').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()

        // BUSCAR EN LA TABLA EL RESULTADO
        // Validar que al menos una celda de la tabla contiene "Admin"
        cy.get('.oxd-table-body').contains('div', 'Admin').should('be.visible')

})
    it("Buscar todos los elementos de una tabla", ()=>{
 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        //INICIAR SESION
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.xpath('//input[@placeholder="Username"]').type('Admin')
        //cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        //SELECIONAR MENU RECLUTAMIENTO
        cy.xpath('//span[text()="Admin"]').click();
        // Obtener todos los datos de la tabla
        const datos=[]
        cy.get('.oxd-table-body').each(($el,index,$list)=> {
            datos[index]=$el.text()
        })
        .then(()=>{
            for(let i=0; i<=datos.length; i++)
                {
                    cy.log(datos[i])
                }
        })
       
})
    it("Contar todos los datos de la tabla", ()=>{
 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        //INICIAR SESION
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.xpath('//input[@placeholder="Username"]').type('Admin')
        //cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        //SELECIONAR MENU RECLUTAMIENTO
        cy.xpath('//span[text()="Admin"]').click();
        
        // CONTAR FILAS DE LA TABLA
        cy.get('.oxd-table-body > .oxd-table-card').then(($rows) => {
        const rowCount = $rows.length
        cy.log("Cantidad de registros en la tabla: " + rowCount)
       
})
})
    it("Buscar un elemento de la tabla", ()=>{
        const palabraBuscada = "Admin"
 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        //INICIAR SESION
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.xpath('//input[@placeholder="Username"]').type('Admin')
        //cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        //SELECIONAR MENU RECLUTAMIENTO
        cy.xpath('//span[text()="Admin"]').click()

      // FILTRAR POR LA PALABRA BUSCADA
        cy.get(":nth-child(2) > .oxd-input").should('be.visible').type(palabraBuscada)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()

        // ESPERAR RESULTADOS Y CONTAR LAS COINCIDENCIAS EN LA TABLA
        cy.get('.oxd-table-body .oxd-table-card').then($rows => {
        let coincidencias = 0

        // Recorremos cada fila
        $rows.each((index, row) => {
            if (row.innerText.includes(palabraBuscada)) {
                coincidencias++
            }
        })

        cy.log(`Cantidad de registros que contienen "${palabraBuscada}": ${coincidencias}`)
})
})
})