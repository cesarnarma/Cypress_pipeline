require('cypress-xpath');
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'
import { data } from 'ospath';

describe('Carga por Fixture', () => {

 //   before(function(){
 //       cy.fixture('datos_formulario').then(function(data){
 //           globalThis.data = data
 //       })
 //   })
      before(function(){
        cy.fixture('datos_formulario').as('formulario')//este es poner el alias
      })  

        it('Test cargando desde Json', ()=>{
            let tiempo = 1000
            cy.on('uncaught:exception', () => false);
            cy.visit('https://demoqa.com/automation-practice-form')
            cy.title().should('eq', 'DEMOQA')
            cy.wait(tiempo)

            cy.get('@formulario').then((data)=>{

            
                // Nombre, Apellido, Email
                cy.get("#firstName").type(data.nombre);
                cy.get("#lastName").type(data.apellido);
                cy.get("#userEmail").type(data.email);
                // Seleccionar género
                cy.contains(".custom-control-label", data.genero).click({ force: true });
                // Celular
                cy.get("#userNumber").type(data.celular);
                // Fecha de nacimiento (formato DD MMM YYYY, ejemplo: 10 May 1995)
                cy.get("#dateOfBirthInput").click();
                const [dia, mes, anio] = data.fechaNacimiento.split(" ");
                cy.get(".react-datepicker__year-select").select(anio);
                cy.get(".react-datepicker__month-select").select(mes);
                cy.get(".react-datepicker__day:not(.react-datepicker__day--outside-month)").contains(dia).click();
                // Materia
                cy.get("#subjectsInput").type(data.materia).type("{enter}");
                // Cargar imagen
                cy.get("input#uploadPicture").selectFile(`cypress/fixtures/${data.imagen}`, { force: true });
                // Dirección
                cy.get("#currentAddress").type(data.direccion);
                // Dropdown Estado
                cy.get("#state").within(() => {
                    cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
                });
                cy.get("div[id^='react-select-3-option-']").contains(data.estado).click({ force: true });
                // Dropdown Ciudad
                cy.get("#city").within(() => {
                    cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
                });
                cy.get("div[id^='react-select-4-option-']").contains(data.ciudad).click({ force: true });
                cy.get("#submit").click();
    
        })
    })
})
