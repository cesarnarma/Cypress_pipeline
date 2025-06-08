class ProyectoQADemo{
    
    abrirPagina(){

            let tiempo = 500
            cy.on('uncaught:exception', () => false);
            cy.visit('https://demoqa.com/automation-practice-form')
            cy.title().should('eq', 'DEMOQA')  
            cy.wait(tiempo)
        }

    Parte_1(nombre, apellido, email, genero, celular){
        cy.get("#firstName").type(nombre);
        cy.get("#lastName").type(apellido);
        cy.get("#userEmail").type(email);
        cy.contains(".custom-control-label", genero).click({ force: true });
        cy.get("#userNumber").type(celular);
    }

    Parte_2(fechaNacimiento, materia, imagen, direccion, estado, ciudad){
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
        cy.screenshot("Formulario")

    }

   }// FINAL
 

export default ProyectoQADemo