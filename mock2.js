describe("Create a Preplan from Order Management Screen`", function () {

  // before("Should navigate to Order Management page", function () {

  //   cy.intercept('GET', '**api/v2/route_logs**', { fixture: 'route_logs.json' })  
  //   cy.intercept('GET', '**dashboard_stats?screen_from=DASHBOARD&org_id=**', { fixture: 'dashboard_stats.json' })  
  //   cy.intercept('GET', '**customer_orders/order_stats?org_id=**', { fixture: 'order_stats.json' })  
  //   cy.intercept('GET', '**users?type=driver&page=1&per_page=5&sort_by=true&sort_order=ASC&org_id**', { fixture: 'users.json' }) 
  //   cy.intercept('GET', '****/v2/organization?user_id**', { fixture: 'organization.json' })   
  // });
  it("Should navigate to Order Management page", function () {
  
    
    cy.visit(Cypress.env("baseUrl"));
    cy.intercept('GET', '**api/v2/route_logs**', { fixture: 'route_logs.json' })  
    cy.intercept('GET', '**dashboard_stats?screen_from=DASHBOARD&org_id=**', { fixture: 'dashboard_stats.json' })  
    cy.intercept('GET', '**customer_orders/order_stats?org_id=**', { fixture: 'order_stats.json' })  
    cy.intercept('GET', '**users?type=driver&page=1&per_page=5&sort_by=true&sort_order=ASC&org_id**', { fixture: 'users.json' }) 
    cy.intercept('GET', '****/v2/organization?user_id**', { fixture: 'organization.json' })   
    cy.title().should("include", "Fleetenable | Last Mile Operations");
    cy.get("form").within(() => {
      cy.get('[id="user_email"]').type(Cypress.env("username"));
      cy.get('[id="user_password"]').type(Cypress.env("password"), {
        log: false,
      });
      cy.get('[value="Sign In"]').click();
     
    });

    //cy.intercept('GET', '**/api/v2/route_logs?page=1&org_id=**', { fixture: 'route_logs.json' }).as("bookretrievals");

    cy.contains("Dashboard");
  });

  it("Should navigate to Order Management page", function () {
  
    cy.visit('https://fe-beta.fleetenable.com/invoices');
     cy.get('[id="user_email"]').type(Cypress.env("username"));
      cy.get('[id="user_password"]').type(Cypress.env("password"), {
        log: false,
      });
      cy.get('[value="Sign In"]').click();
      cy.intercept('GET', '**/v2/billing/filtered_customer_order_billings?account_id**', { fixture: 'stops_in_route.json' }) 
   
      cy.visit('https://fe-beta.fleetenable.com/invoices');
   
   
  });
});
