// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('capturar_texto', (selector,texto,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})
Cypress.Commands.add('capturar_texto_xpath', (selector,texto,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})
Cypress.Commands.add('click_boton', (selector,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
})
Cypress.Commands.add('click_boton_force', (selector,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})
Cypress.Commands.add('click_boton_xpath', (selector,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

// Funciones por conjunto o bloques completos
// DEMOQA formulario Text Box

Cypress.Commands.add('Formulario_Text_Box', (name,email,dir1,dir2,t) => {
    let tiempo=t
    cy.get("#userName").should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get("#permanentAddress").should('be.visible').type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should('be.visible').click()
    cy.wait(tiempo) 
})

// Funciones por conjunto o bloques completos
// DEMOQA formulario Registro de Estudicante

Cypress.Commands.add('Formulario_Estudiante', (nombre,apellido,email,genero,telefono,nacimiento,
    materia,hobbie,imagen,direccion,estado,ciudad,t
) => {
    let tiempo=t
    cy.get("#firstName").should('be.visible').type(nombre)
    cy.wait(tiempo)
    cy.get("#lastName").should('be.visible').type(apellido)
    cy.wait(tiempo)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get("#genterWrapper > .col-md-9").should('be.visible').type(genero)
    cy.wait(tiempo)
    cy.get("#userNumber").should('be.visible').type(telefono)
    cy.wait(tiempo)
    cy.get("").should('be.visible').type(nacimiento)
    cy.wait(tiempo) 
    cy.get(".subjects-auto-complete__value-container").should('be.visible').type(materia)
    cy.wait(tiempo) 
    cy.get("#hobbiesWrapper > .col-md-9").should('be.visible').type(hobbie)
    cy.wait(tiempo)
    const ruta='img1.jpg' 
    cy.get("#uploadPicture").attachFile(ruta)
    cy.wait(tiempo) 
    cy.get("##currentAddress").should('be.visible').type(direccion)
    cy.wait(tiempo) 
    cy.get("//div[@id='state']//div[contains(@class,'css-1hwfws3')]").should('be.visible').type(estado)
    cy.wait(tiempo)  
})


Cypress.Commands.add("llenarFormularioEstudiante", ({ nombre, apellido, email, genero, celular, fechaNacimiento, materia, imagen, direccion, estado, ciudad }) => {
    // Nombre, Apellido, Email
    cy.get("#firstName").type(nombre);
    cy.get("#lastName").type(apellido);
    cy.get("#userEmail").type(email);
    // Seleccionar género
    cy.contains(".custom-control-label", genero).click({ force: true });
    // Celular
    cy.get("#userNumber").type(celular);
    // Fecha de nacimiento (formato DD MMM YYYY, ejemplo: 10 May 1995)
    cy.get("#dateOfBirthInput").click();
    const [dia, mes, anio] = fechaNacimiento.split(" ");
    cy.get(".react-datepicker__year-select").select(anio);
    cy.get(".react-datepicker__month-select").select(mes);
    cy.get(".react-datepicker__day:not(.react-datepicker__day--outside-month)").contains(dia).click();
    // Materia
    cy.get("#subjectsInput").type(materia).type("{enter}");
    // Cargar imagen
    cy.get("input#uploadPicture").selectFile(`cypress/fixtures/${imagen}`, { force: true });
    // Dirección
    cy.get("#currentAddress").type(direccion);
    // Dropdown Estado
    cy.get("#state").within(() => {
        cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
    });
    cy.get("div[id^='react-select-3-option-']").contains(estado).click({ force: true });
    // Dropdown Ciudad
    cy.get("#city").within(() => {
        cy.get("div[class*='indicatorContainer'] svg").click({ force: true });
    });
    cy.get("div[id^='react-select-4-option-']").contains(ciudad).click({ force: true });
});