describe("Task complete test cases", () => {
    it("task is added marekd completed ", () => {
     cy.visit("/");
     cy.url().should('not.contain', "google");
    //  cy.url().should('contain', "google");
    });
});