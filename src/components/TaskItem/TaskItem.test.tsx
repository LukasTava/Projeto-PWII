// src/components/TaskItem/TaskItem.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { TaskItem } from './TaskItem';
import { createStore } from '../../lib/redux/store'; // Importamos nossa função que cria a store

describe('Componente TaskItem (com Redux)', () => {
  it('deve renderizar a tarefa com base no estado inicial do Redux', () => {
    // Criamos uma store especificamente para este teste
    const store = createStore();

    // Renderizamos o componente com o Provider, passando o ID '1'
    // que corresponde a uma tarefa no estado inicial do nosso slice.
    render(
      <Provider store={store}>
        <TaskItem id="1" />
      </Provider>
    );

    // Verificamos se o título e o status corretos foram lidos da store
    expect(screen.getByText('Implementar autenticação')).toBeInTheDocument();
    expect(screen.getByText('Pendente')).toBeInTheDocument();
  });

  it('deve despachar a ação de toggle e mudar o status ao clicar no checkbox', () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <TaskItem id="1" />
      </Provider>
    );

    // Estado inicial
    expect(screen.getByText('Pendente')).toBeInTheDocument();

    // Ação: Clicar no checkbox
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Verificação: O componente deve ter sido re-renderizado com o novo estado do Redux
    expect(screen.getByText('Concluída')).toBeInTheDocument();
    expect(screen.queryByText('Pendente')).not.toBeInTheDocument();
  });
});