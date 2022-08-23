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
Cypress.Commands.add("createTask", (tasKName) => {
  cy.visit("/");
  cy.get("#new-todo-input")
    .type(tasKName)
    .get("button:contains(Add)")
    .click({ force: true });
});
Cypress.Commands.add("FindCompletedByText", (tasKName) => {
  cy.get(".todo-list li").within(()=>{
    cy.contains(tasKName).parent().find("input[type='checkbox']").should("be.checked");

  }) ;
});
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
import '@testing-library/cypress/add-commands'
