import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TaskItem } from './TaskItem';
import { renderWithProviders } from '../../utils/test-utils';
import type { Task } from '../../lib/redux/tasksSlice';

const mockTask: Task = {
  id: 1,
  title: 'Apresentar o projeto de Web II',
  priority: 'alta',
  completed: false,
};

describe('Componente TaskItem (com Redux)', () => {
  it('deve renderizar a tarefa corretamente', () => {
    renderWithProviders(<TaskItem task={mockTask} />, {
      preloadedState: {
        tasks: {
          items: [mockTask],
          status: 'succeeded',
        },
      },
    });

    expect(screen.getByText('Apresentar o projeto de Web II')).toBeInTheDocument();
    expect(screen.getByText('Pendente')).toBeInTheDocument();
    expect(screen.getByText('alta')).toBeInTheDocument();
  });
});