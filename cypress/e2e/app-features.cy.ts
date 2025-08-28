describe('Funcionalidades da Aplicação de Tarefas', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/tasks', {
      fixture: 'tasks.json', 
    }).as('getTasks');
    cy.intercept('DELETE', 'http://localhost:3001/tasks/*', {
      statusCode: 200,
    }).as('deleteTask');
    
    cy.visit('http://localhost:5173/');
  });

  it('deve carregar e exibir as tarefas iniciais da API mockada', () => {
    cy.wait('@getTasks');
    cy.contains('.task-item', 'Apresentar o projeto').should('be.visible');
    cy.contains('.task-item', 'Estudar Cypress').should('be.visible');
  });

  it('deve excluir uma tarefa ao clicar no botão de exclusão', () => {
    cy.wait('@getTasks');

    const taskToDelete = 'Apresentar o projeto';
    cy.contains('.task-item', taskToDelete).find('.delete-button').click();
    cy.wait('@deleteTask');
    cy.contains('.task-item', taskToDelete).should('not.exist');
  });
});