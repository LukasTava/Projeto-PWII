describe('Funcionalidade de Excluir Tarefa', () => {
  it('deve excluir uma tarefa ao clicar no botão', () => {
    cy.visit('http://localhost:5173/');
    // Encontra a tarefa que contém "Fazer compras", depois encontra o botão de excluir dentro dela e clica
    cy.contains('.task-item', 'Fazer compras').find('.delete-button').click();
    // Verifica se a tarefa "Fazer compras" não existe mais na tela
    cy.contains('.task-item', 'Fazer compras').should('not.exist');
  });
});