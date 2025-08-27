describe('Navegação', () => {
  it('deve navegar para a página Sobre e voltar', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('a', 'Sobre').click();
    cy.contains('h2', 'Sobre este Projeto').should('be.visible');
    cy.contains('a', 'Tarefas').click();
    cy.contains('h1', 'Minhas Tarefas').should('be.visible');
  });
});