declare namespace Cypress {
  interface Chainable {

    getIframeBody(): Chainable<JQuery<HTMLBodyElement>>
  }
}

Cypress.Commands.add('getIframeBody', () => {
  return cy.get('#storybook-preview-iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(body => {
      return cy.wrap(Cypress.$(body))
    })
});