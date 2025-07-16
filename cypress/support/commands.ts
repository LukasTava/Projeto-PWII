// cypress/support/commands.ts

// A declaração de tipos correta e específica
declare namespace Cypress {
  interface Chainable {
    /**
     * Comando customizado para pegar o corpo do iframe do Storybook
     * @example cy.getIframeBody()
     */
    getIframeBody(): Chainable<JQuery<HTMLBodyElement>>
  }
}

// A implementação corrigida para retornar o tipo prometido
Cypress.Commands.add('getIframeBody', () => {
  return cy.get('#storybook-preview-iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(body => {
      return cy.wrap(Cypress.$(body))
    })
});