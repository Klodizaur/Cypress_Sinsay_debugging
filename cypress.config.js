const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.sinsay.com/pl/pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1400,
    viewportHeight: 900,
  },
});
