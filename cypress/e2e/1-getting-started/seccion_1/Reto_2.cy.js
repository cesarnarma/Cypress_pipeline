
require('cypress-xpath');
describe('Reto 2', () => {

    it("Agregar Administrador", ()=>{
 //   cy.on('uncaught:exception', (err, runnable) => {
 //   return false;
 //       });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        //INICIAR SESION
        cy.xpath('//input[@placeholder="Username"]').type('Admin')
        cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        //SELECIONAR MENU ADMIN
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()

        //BUSCAR ADMIN
        cy.xpath('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').type('Admin')
        //COMBO  User Role
        cy.get('label').contains('User Role').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.get('.oxd-select-dropdown').should('contain', 'Admin').contains('Admin').click();

        // Abrir el dropdown de Status
        cy.get('label').contains('Status').parents('.oxd-input-group').find('.oxd-select-text').click();

        // Seleccionar la opción "Enabled"
        cy.get('.oxd-select-dropdown').contains('Enabled').click();

        // Validar que se seleccionó Enabled
        cy.get('label').contains('Status').parents('.oxd-input-group').find('.oxd-select-text').should('contain', 'Enabled');

        //Seleccionar boton "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
            

       
      

    })
})