
require('cypress-xpath');
describe('CheckBox', () => {

    it("Seleccionar CheckBox", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/checkbox')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        // Asegurar que la página cargó correctamente
    cy.contains('Check Box').should('be.visible');

    // Hacer clic en el botón "Toggle" (la flechita al lado de 'Home')
    cy.get('.rct-node-parent > .rct-text > .rct-collapse > .rct-icon').click()

    cy.get('.rct-node-parent')
      .contains('Downloads')
      .parents('.rct-node')
      .find('.rct-checkbox')
      .first() // Asegura que sea solo uno
      .click();

    // Validar que se seleccionó Downloads
    cy.get('#result').should('contain.text', 'downloads')
    cy.get('.rct-node-parent')
      .contains('Downloads')
      .parents('.rct-node')
      .find('.rct-checkbox')
      .first()
      .click();

    // Validar que el resultado ya no contenga "downloads"
    //cy.wait(4000)
   // cy.get('#result').should('not.contain.text', 'downloads');



    
        
    })
})

