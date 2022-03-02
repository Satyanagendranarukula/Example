import {login} from "./utils/auth-utils";
import {NavigationLinks, NavigationSelectors} from "./selectors/navigation-links";
import {LocationSearchSelectors} from "./selectors/location-search-selectors";
import {LocationSearchRoutes} from "./routes/location-search-routes";
import {LocationProfileRoutes} from "./routes/location-profile-routes";
import {SearchUtils} from "./utils/search-utils";
import {AccountProfileRoutes} from "./routes/account-profile-routes";
import {AppSelectors} from "./selectors/app-selectors";
import {AccountSearchConfig} from "./es-queries/account-queries";
import {default as messages} from "../../../messages.en";
import {AppRoutes} from "./routes/app-routes";

type BundleMessages = keyof typeof messages;

Cypress.Commands.add('navigate', (customURL) => {
  cy.route(AppRoutes.KEYCLOAK_CONFIG).as('config');
  cy.visit(customURL || (Cypress.config().baseUrl + '/'));
  cy.wait('@config');
  return cy.wait('@config');
});

Cypress.Commands.add('login', login);

Cypress.Commands.add('searchForAccountAndNavigateToProfile', (config: AccountSearchConfig, resultIndex = 0) => {
  cy.server()
    .route(AccountProfileRoutes.ACCOUNT_INFORMATIONS).as('informations')
    .route(AccountProfileRoutes.ACCOUNT_PROFILE).as('profile');
  return SearchUtils.accountSearch(config, resultIndex).then(account => {
    if (account) {
      cy.navigate(`/accountprofile/${account.PartyID}`);
      return cy.wait(['@informations', '@profile'], {timeout: 15000}).then(([info, profile]) => {
        console.log('********************* done waiting *****************************');
        return {
          info: info.response.body,
          profile: profile.response.body,
          acc: account
        };
      });
    } else {
      cy.log('Failed to find an account');
    }
  });
});

Cypress.Commands.add('menuNavigation', (link: NavigationLinks) => {
  cy.get(NavigationSelectors.NAVIGATION_MENU)
    .find(link)
    .click();
});

//SEARCH THE LOCATION AND NAVIGATE TO PROFILE
Cypress.Commands.add('searchForLocationAndNavigateToProfile', (query, resultIndex = 0) => {
  cy.server()
    .route(LocationProfileRoutes.LOCATION_PROFILE).as('profile');
  return SearchUtils.LocationSearch(query, resultIndex).then(location => {
    if (location) {
      cy.navigate(`/locationdetails/${location._id}`);
      return cy.wait('@profile', {timeout: 10000}).then((profile) => ({
        profile: profile.response.body
      }));
    } else {
      cy.log('Failed to find a location');
    }
  });
});

Cypress.Commands.add('editLocation', () => {
  cy.get('.panelBgColor > .panel-title').should('have.text', 'LOCATION INFORMATION');
  cy.get('#informationPanelEditIcon > .ng-star-inserted').should('be.visible').click();
  cy.wait(1000);
});

//SEARCH THE LOCATION AND GET THE RESULTS
Cypress.Commands.add('searchLocation', () => {
  cy.route(LocationSearchRoutes.LOCATION_SEARCH).as('search');
  cy.get(LocationSearchSelectors.SEARCH_LINK).click();
  cy.get(LocationSearchSelectors.SEARCH_BAR).clear().type('walmart');
  cy.wait(500);
  cy.get(LocationSearchSelectors.SEARCH_ENTER).click({force: true});
  cy.wait('@search');
});

// VERIFIES THE INPUT VALUE OF AN INPUT FIELD WITH THE GIVEN IDENTIFIER
Cypress.Commands.add("verifyInputField", (identifier, input) => {
  cy.log('INPUTTING ' + `*********${input}*********` + ' INTO FIELD');
  cy.get(identifier, {log: false}).clear({log: false})
    .type(input).invoke('val')
    .should((text) => {
      expect(text).to.eq(input);
    });
});
// VERFIES THE SELECTION OF A DROPDOWN
Cypress.Commands.add("verifyDropdownSelection", (dropdownText) => {
  cy.log(`*********VERIFYING IF "${dropdownText.toUpperCase()}" IS FOUND*********`);
  cy.wait(3000);
  cy.get("selector").should(($x) => {
    expect($x).to.have.text(dropdownText);
  });
  cy.wait(0, {log: false});
});
// VERIFIES THE CURRENT URL
Cypress.Commands.add("verifyURL", (URL) => {
  cy.log(`*********VERIFYING URL: ${URL}*********`);
  cy.url().should(($x) => {
    expect($x).to.include(URL);
  });
});

// VERIFIES THE TEXT OF THE GIVEN IDENTIFIER
Cypress.Commands.add("verifyText", (identifier, text) => {
  cy.log(`*********VERIFYING IF "${text.toUpperCase()}" IS FOUND*********`);
  cy.get(identifier, {timeout: 10000}).then(($x) => {
    expect($x.text()).to.eql(text);
  });
});

Cypress.Commands.add('clearAndType', {prevSubject: 'element'}, (subject, text) => {
  cy.wrap(subject.is('input') || subject.is('textarea')).should('eq', true);
  cy.wrap(subject).clear();
  if (text) {
    cy.wrap(subject).type(text);
  }
  return cy.wrap(subject);
});

Cypress.Commands.add('assertInputValue', {prevSubject: 'element'}, (subject, value) => {
  cy.wrap(subject.is('input')).should('eq', true);
  cy.wrap(subject)
    .invoke('val')
    .should('eq', value);
  return cy.wrap(subject);
});

Cypress.Commands.add('checkValidationText', {prevSubject: 'element'}, (subject, text) => {
  cy.wrap(subject)
    .find(AppSelectors.JBH_VALIDATOR_TEXT)
    .should('contain.text', text);
  return cy.wrap(subject);
});

Cypress.Commands.add('checkMessageBundleText', {prevSubject: 'element'}, (subject, token: BundleMessages) => {
  cy.wrap(subject)
    .should('contain.text', messages[token]);
  return cy.wrap(subject);
});

Cypress.Commands.add('checkValidationPassed', {prevSubject: 'element'}, (subject) => {
  cy.wrap(subject)
    .find(AppSelectors.JBH_VALIDATOR_TEXT)
    .should('not.exist');
  return cy.wrap(subject);
});
