describe('Navegação entre páginas', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/'); 
  });

  it('deve navegar para a página "Sobre" e depois voltar para a página de tarefas', () => {
    cy.contains('a', 'Sobre').click();
    cy.contains('h2', 'Sobre este Projeto').should('be.visible');
    cy.contains('a', 'Tarefas').click();
    cy.contains('h1', 'Gerenciador de Tarefas').should('be.visible');
  });
});