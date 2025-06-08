
describe('Opciones de Click', () => {

    it("Validar Click", ()=>{
    //cy.on('uncaught:exception', (err, runnable) => {
    //return false;
    //    });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()

    })
    it("Validar Click Forzado", ()=>{
    //cy.on('uncaught:exception', (err, runnable) => {
    //return false;
    //    });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click({force:true})

    })

     it.only("Click por Coordenadas (x,y) ", ()=>{
    //cy.on('uncaught:exception', (err, runnable) => {
    //return false;
    //    });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').click(50,5)
        


    })
    


})