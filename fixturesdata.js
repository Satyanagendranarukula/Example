describe('User page', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('example').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })
  
    // the test callback is in "function () { ... }" form
    it('has user', function () {
      // this.user exists
      cy.addProductToBasket(this.user.name)
    })
  })