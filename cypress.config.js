const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '92o9uq',
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
