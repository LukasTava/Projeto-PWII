import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { TaskItem } from './TaskItem';
import { createStore, type RootState } from '../../lib/redux/store';

const mockState: Partial<RootState> = {
  tasks: {
    items: [
      { id: '1', title: 'Apresentar o projeto de Web II', priority: 'Alta', isCompleted: false },
      { id: '2', title: 'Estudar para a prova', priority: 'Média', isCompleted: false },
    ],
    status: 'succeeded',
  },
};

describe('Componente TaskItem (com Redux)', () => {
  it('deve renderizar a tarefa com base no estado inicial do Redux', () => {
    const store = createStore(mockState);
    
    render(
      <Provider store={store}>
        <TaskItem id="1" />
      </Provider>
    );

    expect(screen.getByText('Apresentar o projeto de Web II')).toBeInTheDocument();
    expect(screen.getByText('Pendente')).toBeInTheDocument();
  });

  it('deve despachar a ação de toggle e mudar o status ao clicar no checkbox', async () => {
    const store = createStore(mockState);

    render(
      <Provider store={store}>
        <TaskItem id="1" />
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    await waitFor(() => {
      expect(screen.getByText('Concluída')).toBeInTheDocument();
    });
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});