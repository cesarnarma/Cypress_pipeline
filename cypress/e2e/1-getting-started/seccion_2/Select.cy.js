require('cypress-xpath');
describe('SELECCIONAR DE CAJA DE TEXTO', () => {

    function selectJobTitle(optionText) {}
    it("Seleccionar opcion", ()=>{
 //   cy.on('uncaught:exception', (err, runnable) => {
 //   return false;
 //       });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')

        //INICIAR SESION
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.xpath('//input[@placeholder="Username"]').type('Admin')
        //cy.xpath('//input[@placeholder="Password"]').type('admin123')
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

        //SELECIONAR MENU RECLUTAMIENTO
        cy.xpath('//span[text()="Recruitment"]').click();
   
         // Esperar que el campo Job Title esté visible
        cy.xpath('//label[text()="Job Title"]/../following-sibling::div//div[contains(@class,"oxd-select-text--after")]')
        .click();

    // Seleccionar "Automation Tester"
        cy.xpath('//div[@role="listbox"]//span[text()="Automaton Tester"]').click()
        cy.xpath('//label[text()="Job Title"]/../following-sibling::div//div[@class="oxd-select-text-input"]')
        .should('contain', 'Automaton Tester'); 
        cy.wait(4000)
        cy.xpath('//label[text()="Job Title"]/../following-sibling::div//div[contains(@class,"oxd-select-text--after")]')
        .click();
        cy.xpath('//div[@role="listbox"]//span[text()="qwer"]').click();
        
    // Verificación opcional: asegurarse que la opción fue seleccionada
        cy.xpath('//label[text()="Job Title"]/../following-sibling::div//div[@class="oxd-select-text-input"]')
        .should('contain', 'qwer'); 

    })

    it("Seleccionar opcion de un menu", ()=>{

        cy.visit('https://duckduckgo.com/')
        cy.wait(2000)
        cy.get('#searchbox_input').type('Cypress io').type('{enter}')
        cy.wait(2000)
        cy.get(':nth-child(2) > .kFFXe30DOpq5j1hbWU1q').click()
        cy.wait(2000)
    })

    it("Seleccionar MAS de 1 OPCION", ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });

        cy.visit('https://demoqa.com/select-menu')

        const opciones = ['Red', 'Blue', 'Green'];

        opciones.forEach(opcion => {
        cy.get('#react-select-4-input')
        .type(`${opcion}{enter}`, { force: true })
    })
})
})
