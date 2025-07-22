import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { TaskItem } from './TaskItem';
import { createStore } from '../../lib/redux/store'; 

describe('Componente TaskItem (com Redux)', () => {
  it('deve renderizar a tarefa com base no estado inicial do Redux', () => {
    const store = createStore();
    
    render(
      <Provider store={store}>
        <TaskItem id="1" />
      </Provider>
    );

    expect(screen.getByText('Apresentar o projeto de Web II')).toBeInTheDocument();
    expect(screen.getByText('Pendente')).toBeInTheDocument();
  });

  it('deve despachar a ação de toggle e mudar o status ao clicar no checkbox', () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <TaskItem id="1" />
      </Provider>
    );

    expect(screen.getByText('Pendente')).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('Concluída')).toBeInTheDocument();
    expect(screen.queryByText('Pendente')).not.toBeInTheDocument();
  });
});