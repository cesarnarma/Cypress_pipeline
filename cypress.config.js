const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  //projectId: '782qv1',
  projectId: '6kie42',
  e2e: {
    async setupNodeEvents(on, config) {
      await cucumber.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    // 👇 Aquí defines el patrón para encontrar tus .feature
    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}", // tus pruebas previas de Cypress
      "cypress/e2e/**/*.spec.{js,ts,jsx,tsx}" // pruebas tipo Mocha
    ],
    baseUrl: "https://demoqa.com",
    supportFile: false
    
  }
  
});
