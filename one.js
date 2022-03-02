context(`Maint : Read only access - 101`, () => {
    beforeEach(() => {
        cy.visit('https://www.snapdeal.com/');
    });

    describe('Sub: ', () => {

        it('Aging Reports view access - 101-1', () => {
            cy.visit('products/geysers?sort=plrty');
           
        });

        it('Aging Reports overlaypanel Create New Report read only validation 101-2', () => {
            cy.visit('/page/privacy-policy#bcrumbLabelId:46101955');
        });
    })
});
