import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TaskItem } from './TaskItem';
import type { Task } from '../../lib/redux/tasksSlice';

const mockTask: Task = {
  id: 1,
  title: 'Fazer compras de supermercado',
  completed: false,
  priority: 'media',
};

const Mockstore = ({ children }: { children: React.ReactNode }) => (
  <Provider
    store={configureStore({
      reducer: {
        tasks: createSlice({
          name: 'tasks',
          initialState: [mockTask],
          reducers: {},
          extraReducers: (builder) => {
            builder.addMatcher(
              (actionMatcher) => actionMatcher.type.startsWith('tasks/'),
              (state, actionObj) => {
                console.log('[Storybook] Redux Action Dispatched:', actionObj);
              }
            );
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta: Meta<typeof TaskItem> = {
  title: 'Gerenciador de Tarefas/TaskItem',
  component: TaskItem,
  decorators: [(story) => <Mockstore>{story()}</Mockstore>],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PendenteMedia: Story = {
  args: {
    task: { ...mockTask },
  },
};

export const PendenteAlta: Story = {
  args: {
    task: { ...mockTask, priority: 'alta' },
  },
};

export const PendenteBaixa: Story = {
  args: {
    task: { ...mockTask, priority: 'baixa' },
  },
};

export const Concluida: Story = {
  args: {
    task: { ...mockTask, completed: true, priority: 'baixa' },
  },
};