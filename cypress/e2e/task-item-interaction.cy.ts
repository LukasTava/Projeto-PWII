describe('Funcionalidade de Interação do TaskItem', () => {
  beforeEach(() => {
    cy.intercept('PUT', 'http://localhost:3001/tasks/1', {
      statusCode: 200,
      body: {
        id: 1,
        title: 'Fazer compras de supermercado',
        completed: true, 
        priority: 'media',
      },
    }).as('updateTask');

    cy.visit('/?path=/story/gerenciador-de-tarefas-taskitem--pendente-media');
  });

  it('deve permitir que o usuário marque uma tarefa como concluída', () => {
    cy.getIframeBody().contains('.status-tag', 'Pendente').should('be.visible');
    cy.getIframeBody().find('input[type="checkbox"]').click();
    
    cy.wait('@updateTask');

    cy.getIframeBody().contains('.status-tag', 'Concluída').should('be.visible');
    cy.getIframeBody().contains('.status-tag', 'Pendente').should('not.exist');
  });
});