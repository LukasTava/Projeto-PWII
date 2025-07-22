import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux'; 
import { AddTaskForm } from './AddTaskForm';
import { createStore } from '../../lib/redux/store'; 

const meta: Meta<typeof AddTaskForm> = {
  title: 'Gerenciador de Tarefas/AddTaskForm',
  component: AddTaskForm,
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

export const Default: Story = {};