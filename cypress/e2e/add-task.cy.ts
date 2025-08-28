describe('Funcionalidade de Adicionar Tarefa', () => {
  beforeEach(() => {
    // Visita a página do componente AddTaskForm no Storybook antes de cada teste
    cy.visit('/?path=/story/gerenciador-de-tarefas-addtaskform--default');
  });

  it('deve permitir que o usuário adicione uma tarefa e limpar o formulário', () => {
    const taskText = 'Nova tarefa via Cypress';

    // Interage com os elementos dentro do iframe do Storybook
    cy.getIframeBody().find('input[type="text"]').type(taskText);
    cy.getIframeBody().find('select').select('alta');
    cy.getIframeBody().find('button[type="submit"]').click();

    // A verificação principal é se o formulário foi resetado após o envio
    cy.getIframeBody().find('input[type="text"]').should('have.value', '');
    cy.getIframeBody().find('select').should('have.value', 'baixa');
  });
});