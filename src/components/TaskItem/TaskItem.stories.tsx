import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { TaskItem } from './TaskItem';
import { createStore } from '../../lib/redux/store'; 

const meta: Meta<typeof TaskItem> = {
  title: 'Gerenciador de Tarefas/TaskItem (com Redux)',
  component: TaskItem,
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

export const TarefaDePrioridadeAlta: Story = {
  args: {
    id: '1',
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