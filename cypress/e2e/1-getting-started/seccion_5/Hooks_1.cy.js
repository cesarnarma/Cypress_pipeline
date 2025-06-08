require('cypress-xpath');
require('cypress-plugin-tab')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

describe('Hooks', () => {
  before(() => {
    cy.log("#### PRINCIPIO DE TODO #######")
    // runs once before all tests in the block
  })

  beforeEach(() => {
    cy.log("Esto se repite en cada uno de los test muy importante")
    // runs before each test in the block
  })

  afterEach(() => {
    cy.log("Esto se hace al final de todos los test")
    // runs after each test in the block
  })

  after(() => {
    cy.log("Final de todo Ultimo Ciclo")
    // runs once after all tests in the block
  })

    it('Test UNO', ()=>{
        cy.log("Test uno")
    })

        
    it('Test DOS', ()=>{
        cy.log("Test uno")
    })
})
