import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { AddTaskForm } from './AddTaskForm';

const Mockstore = ({ children }: { children: React.ReactNode }) => (
  <Provider
    store={configureStore({
      reducer: {
        tasks: createSlice({
          name: 'tasks',
          initialState: [],
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

const meta: Meta<typeof AddTaskForm> = {
  title: 'Gerenciador de Tarefas/AddTaskForm',
  component: AddTaskForm,
  decorators: [(story) => <Mockstore>{story()}</Mockstore>],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};