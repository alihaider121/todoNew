const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: "http://localhost:3000",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json"
    },
    
    specPattern: "**/*.{feature,features,js}"
 },
});
