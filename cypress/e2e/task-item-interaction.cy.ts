describe('Funcionalidade de Interação do TaskItem', () => {
  beforeEach(() => {
    cy.visit('/?path=/story/gerenciador-de-tarefas-taskitem--pendente-media');
  });

  it('deve permitir que o usuário marque uma tarefa como concluída', () => {
    cy.getIframeBody().contains('.status-tag', 'Pendente').should('be.visible');
    cy.getIframeBody().find('input[type="checkbox"]').click();
    cy.getIframeBody().contains('.status-tag', 'Concluída').should('be.visible');
    cy.getIframeBody().contains('.status-tag', 'Pendente').should('not.exist');
  });
});