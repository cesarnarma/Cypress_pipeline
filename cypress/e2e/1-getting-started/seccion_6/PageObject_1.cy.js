require('cypress-xpath');
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import ProyectoQADemo from '../../../support/pageObjects/Proyecto_1_POM/Proyecto_1_QA.cy.js';

describe('Page Objects Models', () => {

    const plantilla = new ProyectoQADemo()

        it('Test 1: Seccion_1', ()=>{
            plantilla.abrirPagina() 
            plantilla.Parte_1("cesar","narvaez","cesar@gmail.com","Female","31245678941")
        })
        it('Test 2: Seccion_2', ()=>{
            plantilla.abrirPagina() 
            plantilla.Parte_2("10 May 1995", "Maths", "img1.jpg", "Calle 201 201", "NCR", "Delhi")
        })
        it('Test 3: Ejecutar Todo', ()=>{
            plantilla.abrirPagina()
            plantilla.Parte_1("cesar","narvaez","cesar@gmail.com","Female","31245678941") 
            plantilla.Parte_2("10 May 1995", "Maths", "img1.jpg", "Calle 201 201", "NCR", "Delhi")
            cy.get("#submit").click();
        })

})
