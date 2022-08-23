/// <reference types="Cypress" />

describe("Task add test cases", () => {
  const task = "task";

  beforeEach(() => {
    cy.visit("/");
  });
  it("text filed is thier and uto foucsed ", () => {
    cy.focused().should("have.class", "input__lg");
  });

  it("text field is editable and accept input", () => {
    const task = "task1";
    cy.get("#new-todo-input").type(task).should("have.value", task);
  });
  it("add an task and verify it", () => {
    cy.createTask(task);
    cy.wait(1000);
    cy.get(".todo-list li").should("have.length", "4").and("contain", task);
    });
});
describe("Task add test cases", () => {
  it("make sure newly added task is not chekced", () => {
    cy.contains(".todo-list li", "task").should("not.be.checked");
  });
});
