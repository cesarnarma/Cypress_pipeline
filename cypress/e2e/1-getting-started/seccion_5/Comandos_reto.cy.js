require('cypress-xpath');
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'


describe('Comando Personalizado', () => {
    beforeEach(()=>{
        let tiempo = 1000
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        
        cy.wait(tiempo)
    })
 
    
    it('Reto 3: Formulario Estudiantes sin encapsulado', () => {
        let tiempo = 2000;

        // Datos
        const nombre = "Cesar";
        const apellido = "Narvaez";
        const email = "cesar@gmail.com";
        const telefono = "3125562279";
        const fechaNacimiento = { year: '1989', month: 'September', day: '17' };
        const asignatura = "Maths";
        const hobby = "Sports";
        const imagen = "img1.jpg"; // Debe estar en `cypress/fixtures`
        const direccion = "Calle 1856";
        const estado = "NCR";
        const ciudad = "Delhi";

        // Llenado
        cy.get("#firstName").type(nombre);
        cy.get("#lastName").type(apellido);
        cy.get("#userEmail").type(email);
        cy.get('label[for="gender-radio-1"]').click(); // Male
        cy.get("#userNumber").type(telefono);

        // Fecha
        cy.get("#dateOfBirthInput").click();
        cy.get(".react-datepicker__month-select").select(fechaNacimiento.month);
        cy.get(".react-datepicker__year-select").select(fechaNacimiento.year);
        cy.get(`.react-datepicker__day--0${fechaNacimiento.day}`).not('.react-datepicker__day--outside-month').click();

        // Asignatura
        cy.get(".subjects-auto-complete__value-container").type(asignatura + "{enter}");

        // Hobby
        cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports

        // Subir imagen (debe estar en cypress/fixtures)
        cy.get("#uploadPicture").attachFile(imagen);

        // Dirección
        cy.get("#currentAddress").type(direccion);

        // Estado y ciudad
        // Abrir dropdown de Estado
        cy.get("#state").within(() => {
        cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
        });
        cy.get("div[id^='react-select-3-option-']").contains(estado).click({ force: true });

        // Abrir dropdown de Ciudad
        cy.get("#city").within(() => {
        cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
        });
        cy.get("div[id^='react-select-4-option-']").contains(ciudad).click({ force: true });
        // Enviar
        cy.get("#submit").click();
    })

    it("Llena correctamente el formulario con encapsulado", () => {
    //cy.visit("https://demoqa.com/automation-practice-form");

    cy.llenarFormularioEstudiante({
      nombre:            "Carlos",
      apellido:          "Pérez",
      email:             "carlos@example.com",
      genero:            "Male",
      celular:           "3216549870",
      fechaNacimiento:   "10 May 1995",
      materia:           "Maths",
      imagen:            "img1.jpg", // Debe estar en `cypress/fixtures`
      direccion:         "Calle 1856",
      estado:            "NCR",
      ciudad:            "Delhi"
    });
    cy.get("#submit").click();
  })
    it("Nombre invalido", () => {
   // cy.visit("https://demoqa.com/automation-practice-form");

    cy.llenarFormularioEstudiante({
      nombre:            "12345/*-*/6",
      apellido:          "Pérez",
      email:             "carlos@example.com",
      genero:            "Male",
      celular:           "3216549870",
      fechaNacimiento:   "10 May 1995",
      materia:           "Maths",
      imagen:            "img1.jpg", // Debe estar en `cypress/fixtures`
      direccion:         "Calle 1856",
      estado:            "NCR",
      ciudad:            "Delhi"
    });
    cy.get("#submit").click();
  })
   it("Correo Invalido", () => {
   // cy.visit("https://demoqa.com/automation-practice-form");

    cy.llenarFormularioEstudiante({
      nombre:            "12345/*-*/6",
      apellido:          "Pérez",
      email:             "carlosexample.com",
      genero:            "Male",
      celular:           "3216549870",
      fechaNacimiento:   "10 May 1995",
      materia:           "Maths",
      imagen:            "img1.jpg", // Debe estar en `cypress/fixtures`
      direccion:         "Calle 1856",
      estado:            "NCR",
      ciudad:            "Delhi"
    });
    cy.get("#submit").click();
  })
  it("Celular Invalido", () => {
   // cy.visit("https://demoqa.com/automation-practice-form");

    cy.llenarFormularioEstudiante({
      nombre:            "12345/*-*/6",
      apellido:          "Pérez",
      email:             "carlos@example.com",
      genero:            "Male",
      celular:           "3216549asdfasdfas870",
      fechaNacimiento:   "10 May 1995",
      materia:           "Maths",
      imagen:            "img1.jpg", // Debe estar en `cypress/fixtures`
      direccion:         "Calle 1856",
      estado:            "NCR",
      ciudad:            "Delhi"
    });
    cy.get("#submit").click();
  })

})