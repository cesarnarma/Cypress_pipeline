

describe('Referencias', () => {

    it("Windows propiedades charset", ()=>{

        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should('eq', 'The Number Game')
        cy.log('El Titulo es Correcto')
        cy.wait(1500)

        cy.document().should((doc) => {
        expect(doc.charset).to.equal('UTF-8')
        //cy.document().should("hace.property", "charset").and('eq','UTF-8')
        
    })
  })

    it("Windows URL", ()=>{

        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should('eq', 'The Number Game')
        cy.log('El Titulo es Correcto')
        cy.wait(1500)

        cy.url().should("include","random-number.html")
        
    })
  })


