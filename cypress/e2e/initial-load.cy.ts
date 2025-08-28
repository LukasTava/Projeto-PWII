describe('Carregamento Inicial', () => {
  it('deve carregar as tarefas iniciais da API', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('.task-item', 'Apresentar o projeto').should('be.visible');
  });
});