// src/components/TaskItem/TaskItem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { TaskItem } from './TaskItem';
import { createStore } from '../../lib/redux/store'; // Importamos nossa função

const meta: Meta<typeof TaskItem> = {
  title: 'Gerenciador de Tarefas/TaskItem (com Redux)',
  component: TaskItem,
  // Decorators são "invólucros" para nossas histórias.
  // Este decorator cria uma nova store para cada história e a provê ao componente.
  decorators: [
    (Story) => {
      const store = createStore();
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Nossas histórias agora passam apenas o ID da tarefa que queremos renderizar.
// O componente vai buscar o resto das informações (título, etc.) no Redux.
export const TarefaDePrioridadeAlta: Story = {
  args: {
    id: '1', // ID da tarefa no nosso estado inicial do slice
  },
};

export const TarefaDePrioridadeMedia: Story = {
  args: {
    id: '2',
  },
};

export const TarefaJaConcluida: Story = {
  args: {
    id: '3',
  },
};