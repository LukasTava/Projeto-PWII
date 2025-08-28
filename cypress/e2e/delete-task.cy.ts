describe('Funcionalidade de Excluir Tarefa', () => {
  it('deve excluir uma tarefa ao clicar no botão', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('.task-item', 'Fazer compras').find('.delete-button').click();
    cy.contains('.task-item', 'Fazer compras').should('not.exist');
  });
});