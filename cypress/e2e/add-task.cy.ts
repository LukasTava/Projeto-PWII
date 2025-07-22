describe('Funcionalidade de Adicionar Tarefa', () => {
  it('deve permitir que o usuário adicione uma tarefa com prioridade', () => {
    cy.visit('http://localhost:6006/?path=/story/gerenciador-de-tarefas-addtaskform--default');

    const taskText = 'Teste';

    cy.getIframeBody().find('input[type="text"]').type(taskText);

    cy.getIframeBody().find('select').select('Alta');

    cy.getIframeBody().find('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains(`Tarefa "${taskText}" adicionada com sucesso!`);
    });

    cy.getIframeBody().find('input[type="text"]').should('have.value', '');
    
    cy.getIframeBody().find('select').should('have.value', 'Baixa');
  });
});