
describe('Funcionalidade de Adicionar Tarefa', () => {
  it('deve permitir que o usuário digite no formulário, adicione a tarefa e limpe o campo', () => {
    cy.visit('http://localhost:6006/?path=/story/gerenciador-de-tarefas-addtaskform--default');

    const taskText = 'Criar o primeiro teste e2e';

    cy.getIframeBody().find('input[type="text"]').type(taskText).should('have.value', taskText);
    cy.getIframeBody().find('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains(`Tarefa adicionada: ${taskText}`);
    });

    cy.getIframeBody().find('input[type="text"]').should('have.value', '');
  });
});