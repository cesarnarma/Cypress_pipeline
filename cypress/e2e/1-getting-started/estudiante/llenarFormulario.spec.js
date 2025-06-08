import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let tiempo = 1000
let data = {
  nombre: "Juan",
  apellido: "Pérez",
  email: "juan.perez@example.com",
  genero: "Male",
  celular: "1234567890",
  fechaNacimiento: "10 May 1995",
  materia: "Maths",
  imagen: "img1.jpg",
  direccion: "Av. Siempre Viva 123",
  estado: "NCR",
  ciudad: "Delhi"
}

Given('Abrir el navegador',()=>{
    
    cy.on('uncaught:exception', () => false);
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq', 'DEMOQA')
    cy.wait(tiempo)
})

When('carga todos los campos del formulario y guardo',()=>{
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

})

Then('el sistema crea el estudiante en el sistema',()=>{
    cy.get("#submit").click();
    
})