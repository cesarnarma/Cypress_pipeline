
describe('Reto 1', () => {

    it("Formulario Ingresar", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        cy.get('#searchBox').should('be.visible').type('Cierra')
        cy.wait(1500)
        cy.get('#searchBox').should('be.visible').clear()

        //Agragar campo
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.wait(1000)
        cy.get('#firstName').should('be.visible').type('Cesar')
        cy.get('#lastName').should('be.visible').type('Narvaez')
        cy.get('#userEmail').should('be.visible').type('cnarvaezm@gmail.com')
        cy.get('#age').should('be.visible').type('35')
        cy.get('#salary').should('be.visible').type('6000000')
        cy.get('#department').should('be.visible').type('Cundinamarca')
        cy.get('#submit').should('be.visible').click()
      

    })

    it("Formulario Editar", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        //Editar campo
        cy.get('#edit-record-1>svg').click()
        cy.get('#age').should('be.visible').clear().type('50')
        cy.get('#salary').should('be.visible').clear().type('123456')
        cy.get('#submit').should('be.visible').click()

        // Borrar campo
        cy.wait(2000)
        cy.get('#delete-record-1>svg>path').click()


  })

})