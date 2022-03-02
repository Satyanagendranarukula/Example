/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    before(function () {
        cy.fixture('products').then((user) => {
            // "this" is still the test context object
            this.user = user
          })
    });

    beforeEach(function () {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    });
    it("Add specific items to basket", () => {
        // this.user.productName.forEach(function (element) {
        //     cy.addProductToBasket(element)
        // })
        cy.addProductToBasket(this.user.productName)
       cy.get('.dropdown-toggle > .fa').click();
    });
});
