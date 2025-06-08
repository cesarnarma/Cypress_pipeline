require('cypress-xpath');
describe('ASSERTS', () => {

    
    it("Assert Contains", ()=>{
 
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        cy.wait(1000)

        cy.get('#block_top_menu').contains('Women').click()

        })
    it("Assert find, eq", ()=>{
 
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        cy.wait(1000)

        cy.xpath('//a[normalize-space()="Best Sellers"]').click()
        cy.xpath('//img[@title="Blouse"]').click()

        })
    it("Assert find, validando que el vestido es nuevo", ()=>{
 
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq', 'My Shop')
        cy.log('El Titulo es Correcto')
        cy.wait(1000)

        cy.xpath('//a[normalize-space()="Best Sellers"]').click()
        cy.xpath('//img[@title="Printed Dress"]').click()
        
        cy.get('#product_condition > .editable').should('contain.text', 'New product')
        .then((e)=>{
            let estado =e.text()
            if(estado=='New product'){
                cy.log('El vestido es nuevo')
            }
        })
         cy.get('#our_price_display').then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            cy.log(precio)
            precio=precio.slice(1.3)
            cy.log(precio)

            if(precio > 30) {
                cy.log('El vestido sale de nuestro presupuesto, no lo podemos comprar')
            }
            else{
                cy.log('El vestido esta dentro del presupuesto, continua con la compra')
                cy.xpath('//a[@class="sf-with-ul"][normalize-space()="Women"]').click()
                cy.wait(2000)
            }
    })
    
})
    it("Contains o Have Text", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        cy.get('#userName').should('be.visible').type('Cesar')
        cy.get('#userEmail').should('be.visible').type('cnarvaezm@gmail.com')
        cy.get('#submit').should('be.visible').click()
        cy.wait(2000)
        
        cy.get('#name').should('have.text','Name:Cesar')
        cy.get('#name').should('contains.text','Cesar')
})

 it("Assert Have.Text mas Then", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')

        cy.get('#userName').should('be.visible').type('Cesar')

        cy.get('#userName').should("have.value", "Cesar").then(()=>{
            cy.get('#userEmail').should('be.visible').type('cnarvaezm@gmail.com')
            cy.get('#submit').should('be.visible').click()
        })
    })
 it("Assert Have.class - Valida el nombre de la siguiente clase del campo", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')


        cy.get('#userName').should('be.visible').should("have.class", "mr-sm-2").then(()=>{
            cy.get('#userName').type('cnarvaezm@gmail.com')
            
        })

    })
    it("Assert Have.class y funcion AND ", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')


        cy.get('#userName').should('be.visible').and("have.class", "mr-sm-2").then(()=>{
            cy.get('#userName').type('cnarvaezm@gmail.com')
            
        })

    })

    it("Assert Not have class ", ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
    return false;
        });
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.log('El Titulo es Correcto')


        cy.get('#userName').should('be.visible').and("not.have.class", "mr-sm-22").then(()=>{
            cy.get('#userName').type('cnarvaezm@gmail.com')
            
        })

    })
    it("Validar cantidad de elementos de una tabla", ()=>{
 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.log('El Titulo es Correcto')
         //INICIAR SESION
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
       
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible').click()

         //SELECIONAR MENU RECLUTAMIENTO
        cy.xpath('//span[text()="Recruitment"]').click();

        //Validar cuantos elementos tiene la tabla
        cy.get('div.orangehrm-paper-container', { timeout: 10000 }).should('be.visible');

        // VALIDAR CANTIDAD DE COLUMNAS DE LA TABLA
        cy.get('.orangehrm-container').should('have.length', 1); // cambia 8 si son más o menos columnas
   
        

})
})


        