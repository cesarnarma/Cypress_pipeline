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
    

        it('Test cargando MASIVAMENTE desde Json CREADO EN INTERNET', ()=>{


            cy.fixture('MOCK_DATA').then(tesdata =>{
                tesdata.forEach(data => {
                    const d_nombre=data.nombre
                    const d_apellido=data.apellido
                    const d_email=data.email
                    const d_genero=data.genero
                    const d_celular=data.celular
                    const d_fechaNacimiento=data.fechaNacimiento
                    const d_materia=data.materia
                    const d_imagen=data.imagen
                    const d_direccion=data.direccion
                    const d_estado=data.estado
                    const d_ciudad=data.ciudad

                    let tiempo = 2000
                    cy.on('uncaught:exception', () => false);
                    cy.visit('https://demoqa.com/automation-practice-form')
                    cy.title().should('eq', 'DEMOQA')
                    cy.wait(tiempo)
                    
           
                    // Nombre, Apellido, Email
                    cy.get("#firstName").type(d_nombre);
                    cy.wait(tiempo)
                    cy.get("#lastName").type(d_apellido);
                    cy.wait(tiempo)
                    cy.get("#userEmail").type(d_email);
                    cy.wait(tiempo)
                    // Seleccionar género
                    cy.contains(".custom-control-label", d_genero).click({ force: true });
                    cy.wait(tiempo)
                    // Celular
                    cy.get("#userNumber").type(d_celular);
                    cy.wait(tiempo)
                    // Fecha de nacimiento (formato DD MMM YYYY, ejemplo: 10 May 1995)
                    cy.get("#dateOfBirthInput").click();
                    cy.wait(tiempo)
                    const [dia, mes, anio] = d_fechaNacimiento.split(" ");
                    cy.get(".react-datepicker__year-select").select(anio);
                    cy.get(".react-datepicker__month-select").select(mes);
                    cy.get(".react-datepicker__day:not(.react-datepicker__day--outside-month)").contains(dia).click();
                    // Materia
                    cy.get("#subjectsInput").type(d_materia).type("{enter}");
                    cy.wait(tiempo)
                    // Cargar imagen
                    cy.get("input#uploadPicture").selectFile(`cypress/fixtures/${d_imagen}`, { force: true });
                    cy.wait(tiempo)
                    // Dirección
                    cy.get("#currentAddress").type(d_direccion);
                    cy.wait(tiempo)
                    // Dropdown Estado
                    cy.get("#state").within(() => {
                        cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
                        cy.wait(tiempo)
                    });
                    cy.get("div[id^='react-select-3-option-']").contains(d_estado).click({ force: true });
                    cy.wait(tiempo)
                    // Dropdown Ciudad
                    cy.get("#city").within(() => {
                        cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
                        cy.wait(tiempo)
                    });
                    cy.get("div[id^='react-select-4-option-']").contains(d_ciudad).click({ force: true });
                    cy.wait(tiempo)
                    cy.get("#submit").click();
        
        })
    })
})
})