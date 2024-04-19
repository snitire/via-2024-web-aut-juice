const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Update this url (if necessary) to one that is used by juice-shop
    baseUrl: "http://127.0.0.1:3000",
    testIsolation: true,
  },
});
