import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux'; 
import { createStore } from '../../lib/redux/store';
import { AddTaskForm } from './AddTaskForm';

describe('Componente AddTaskForm', () => {
  it('deve permitir que o usuário digite no campo de input e selecione uma prioridade', async () => {
    const user = userEvent.setup();
    const store = createStore();
    render(
      <Provider store={store}>
        <AddTaskForm />
      </Provider>
    );

    const input = screen.getByPlaceholderText('O que precisa ser feito?');
    const select = screen.getByRole('combobox'); 

    await user.type(input, 'Nova tarefa de teste');
    await user.selectOptions(select, 'Alta');

    expect(input).toHaveValue('Nova tarefa de teste');
    expect(select).toHaveValue('Alta');
  });
});