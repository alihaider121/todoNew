describe("Task complete test cases", () => {
  it("task is added marekd completed ", () => {
    cy.createTask("unique");
    cy.get(".todo-list li").within(()=>{
      cy.contains("unique").parent().find("input[type='checkbox']").check().should("be.checked");

    }) ;
  });
  it("completed task sould be reflected under completed tab", () => {
    cy.get('button:contains("Completed")').should("exist").click({force:true});
    cy.FindCompletedByText("unique");
 });
 it("all the tasks with checked status should be reflected as completed", () => {
  // cy.get('button:contains("Completed")').should("exist").click({force:true});
  cy.get('input[type="checkbox"]')
  .as('checkboxes');
  cy.get('@checkboxes')
      .each(checkbox => {
        expect(checkbox[0].checked).to.equal(true)
      })
 
});
});
