
require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import "cypress-real-events/support";

Cypress.Commands.add

describe('SELECCIONAR FECHAS', () => {


it("Seleccionar fecha en From Date", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        // INICIAR SESIÓN
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        // MENÚ "Leave"
        cy.xpath('//span[text()="Leave"]').click()

        // Esperar a que cargue el calendario
        cy.wait(1000)

        // Hacer clic en el ícono del calendario del campo "From Date"
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) .oxd-date-input .oxd-icon').click({force: true})
        cy.wait(1000)


        // Abrir el calendario (Forzar el clic por si está bloqueado)
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) .oxd-date-input .oxd-icon')
        .click({ force: true })

        // === Seleccionar Año ===
        cy.get('.oxd-calendar-selector-year').click()
        cy.get('.oxd-calendar-dropdown li').should('be.visible')
        cy.get('.oxd-calendar-dropdown li').contains(2025).click()

        // === Seleccionar Mes ===
        cy.get('.oxd-calendar-selector-month').click()
        cy.get('.oxd-calendar-dropdown li').should('be.visible')
        cy.get('.oxd-calendar-dropdown li').contains('May').click()

        // === Seleccionar Día ===
        cy.get('.oxd-calendar-date').contains(20).click()


})
})
