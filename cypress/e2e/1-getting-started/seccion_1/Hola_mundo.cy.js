describe('Bienvenido al curso de Cypress sección 1', () => {

    it('Mi primer Test -> Hola mundo', () => {
    cy.log('Hola Mundo');
    cy.wait(4000)
        
    });

    it("Segundo Test -> campo name", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        
        cy.get('#userName').type('CESAR NARVAEZ')
        cy.wait(4000)
        cy.get('#userEmail').type(' CESAR@example.com');
        cy.get('#currentAddress').type('Dirección 123');
        cy.get('#permanentAddress').type('Otra dirección');
        cy.get('#submit').click();

        cy.get('#name').should('contain', 'CESAR NARVAEZ');
    })
    
});