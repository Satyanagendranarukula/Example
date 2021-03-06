describe("Test suite ", () => {
  it("Test case for checkbox", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });

  it("Test cases for dynamic dropdown", () => {
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });

    cy.get("#autocomplete").should("have.value", "India");
  });

  it("Test cases for static dropdown", () => {
    cy.get("select").select("option2").should("have.value", "option2");
  });

  it("Test cases for verify the visible", () => {
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });

  it("Test cases for verify the invisible ", () => {
    cy.get("select").select("option2").should("have.value", "option2");
  });

  it("Test case for radio buttons", () => {
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
