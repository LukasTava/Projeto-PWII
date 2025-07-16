
const getIframeBody = () => {
  return cy.get('#storybook-preview-iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
}

describe('Funcionalidade de Interação do TaskItem', () => {
  it('deve permitir que o usuário marque uma tarefa como concluída', () => {
    cy.visit('http://localhost:6006/?path=/story/gerenciador-de-tarefas-taskitem-com-redux--tarefa-de-prioridade-media');
    cy.getIframeBody().contains('.status-tag', 'Pendente').should('be.visible');
    cy.getIframeBody().find('input[type="checkbox"]').click();
    cy.getIframeBody().contains('.status-tag', 'Concluída').should('be.visible');
    cy.getIframeBody().contains('.status-tag', 'Pendente').should('not.exist');
  });
});