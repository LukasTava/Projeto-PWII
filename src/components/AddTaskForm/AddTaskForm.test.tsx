import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest'; 
import { AddTaskForm } from './AddTaskForm';

describe('Componente AddTaskForm', () => {
  vi.spyOn(window, 'alert').mockImplementation(() => {});

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('deve permitir que o usuário digite no campo de input', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);
    const input = screen.getByPlaceholderText('O que precisa ser feito?');
    await user.type(input, 'Comprar pão');
    expect(input).toHaveValue('Comprar pão');
  });

  it('deve chamar o alerta com o texto da tarefa e limpar o campo após a submissão', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);
    const input = screen.getByPlaceholderText('O que precisa ser feito?');
    const button = screen.getByRole('button', { name: /adicionar/i });
    await user.type(input, 'Pagar a conta de luz');
    await user.click(button);
    expect(window.alert).toHaveBeenCalledWith('Tarefa adicionada: Pagar a conta de luz');
    expect(input).toHaveValue('');
  });

  // **** TESTE MELHORADO ****
  it('deve mostrar um alerta de validação se o campo estiver vazio', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);
    const button = screen.getByRole('button', { name: /adicionar/i });
    await user.click(button);

    expect(window.alert).toHaveBeenCalledWith('Por favor, digite um título para a tarefa.');
  });
});