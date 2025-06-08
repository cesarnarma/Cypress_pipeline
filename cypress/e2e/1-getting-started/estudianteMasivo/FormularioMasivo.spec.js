import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const tiempo = 1000;

Given('Abrir el formulario de estudiante', () => {
  cy.on('uncaught:exception', () => false);
  cy.visit('https://demoqa.com/automation-practice-form');
  cy.title().should('eq', 'DEMOQA');
  cy.wait(tiempo);
});

When('cargo nombre {string}', (nombre) => {
  cy.get("#firstName").type(nombre);
});

When('cargo apellido {string}', (apellido) => {
  cy.get("#lastName").type(apellido);
});

When('cargo email {string}', (email) => {
  cy.get("#userEmail").type(email);
});

When('cargo genero {string}', (genero) => {
  cy.contains(".custom-control-label", genero).click({ force: true });
});

When('cargo celular {string}', (celular) => {
  cy.get("#userNumber").type(celular);
});

When('cargo fechaNacimiento {string}', (fechaNacimiento) => {
  const [dia, mes, anio] = fechaNacimiento.split(" ");
  cy.get("#dateOfBirthInput").click();
  cy.get(".react-datepicker__year-select").select(anio);
  cy.get(".react-datepicker__month-select").select(mes);
  cy.get(".react-datepicker__day:not(.react-datepicker__day--outside-month)").contains(dia).click();
});

When('cargo materia {string}', (materia) => {
  cy.get("#subjectsInput").type(materia).type("{enter}");
});

When('cargo imagen {string}', (imagen) => {
  cy.get("input#uploadPicture").selectFile(`cypress/fixtures/${imagen}`, { force: true });
});

When('cargo direccion {string}', (direccion) => {
  cy.get("#currentAddress").type(direccion);
});

When('cargo estado {string}', (estado) => {
  cy.get("#state").within(() => {
                cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
            });
            cy.get("div[id^='react-select-3-option-']").contains(estado).click({ force: true });
});

When('cargo ciudad {string}', (ciudad) => {
  cy.get("#city").within(() => {
                cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
            });
            cy.get("div[id^='react-select-4-option-']").contains(ciudad).click({ force: true });

});

Then('el sistema crea el estudiante en el sistema', () => {
  cy.get("#submit").click({ force: true });
});
