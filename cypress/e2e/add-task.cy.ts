describe('Funcionalidade de Adicionar Tarefa', () => {
  beforeEach(() => {
    cy.visit('/?path=/story/gerenciador-de-tarefas-addtaskform--default');
  });

  it('deve permitir que o usuário adicione uma tarefa e limpar o formulário', () => {
    const taskText = 'Nova tarefa via Cypress';

    cy.getIframeBody().find('input[type="text"]').type(taskText);
    cy.getIframeBody().find('select').select('alta');
    cy.getIframeBody().find('button[type="submit"]').click();

    cy.getIframeBody().find('input[type="text"]').should('have.value', '');
    cy.getIframeBody().find('select').should('have.value', 'baixa');
  });
});