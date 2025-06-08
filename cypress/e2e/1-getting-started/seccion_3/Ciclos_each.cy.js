
require('cypress-xpath');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import "cypress-real-events/support";

Cypress.Commands.add

describe('Bucles For y each', () => {


it("Ciclo for", () => {
        for(let b=1; b<=10; b++){
                cy.log("Numero: " + b)
        }
})
it("Ciclo for tabla del 5", () => {
        for(let b=1; b<=10; b++){
                let j=5
                cy.log(j + " X " + b + "=" + j*b)
        }
})

it("Each uno Escoger elementos de la lista", () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        cy.wait(1000)

        // Con el nombre de la clase (el index y list) puedo saber cuantos clases con la misma propiedades
        //existen
        cy.get(".product-container").each(($el,index,$list)=>{
               //index para saber cuantos existen
               // cy.log(index) 
               // para saber la lista todo lo que lleva dentro de la estructura
               // cy.log($el)
               // trae la descripcion de cada elemento
               // cy.log($list)

               let vestido=$el.text()
               cy.log(vestido)
        })
})

it("Each uno Escoger elementos de la lista", () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        cy.wait(1000)

        cy.get('#block_top_menu').contains('Women').click()
        cy.get(".product-container").each(($el) => {
                  if ($el.text().includes("Blouse")) {
                  cy.wrap($el).find('.product-name[title="Blouse"]').click()
                  return false // salir del each después de hacer clic
               }
        })
})

it("Escoger varios elementos y validar etiqueta o cualquier cosa", () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        let delay=1500
        cy.wait(delay)

        cy.get('#block_top_menu').contains('Women').click()

        // Con este ciclo el ROBOT ingresa a cada producto a validar si tiene la etiqueta 
        // New product, igualmente sirve para que genericamente ingrese a cada producto y
        // realice alguna accion en este caso el carrito no funciona entonces se realizo
        // validando el producto.
        for (let x = 0; x < 6; x++) {
        cy.get(".product-container").eq(x).find('.product-name').click({ force: true })
        cy.wait(delay)
        cy.get('#product_condition > .editable').should('contain.text', 'New product')
        
       
        // Volver a la categoría
        cy.go('back')
        cy.wait(delay)
  }
})
it("Valida # elementos y los recorre todos ", () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        let delay=1000
        cy.wait(delay)

        cy.get('#block_top_menu').contains('Women').click()
// En esta funciona el sistema valida cuantos elementos existen y luego los valida todos
        const datos=[];
        cy.get(".product-container").each(($el,index,$list)=>{
                datos[index]=$el.text()
                
        })
        .then(()=>{
        for (let x = 0; x <datos.length; x++) {
                cy.get(".product-container").eq(x).find('.product-name').click({ force: true })
                cy.wait(delay)
                cy.get('#product_condition > .editable').should('contain.text', 'New product')
                       
        // Volver a la categoría
        cy.go('back')
        cy.wait(delay)
  }

        })
        //Con esta linea en consola se saben cuantos elementos hay
        //cy.log(datos)

})
})