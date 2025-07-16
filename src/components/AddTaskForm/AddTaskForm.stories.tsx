import type { Meta, StoryObj } from '@storybook/react';
import { AddTaskForm } from './AddTaskForm';

const meta: Meta<typeof AddTaskForm> = {
  title: 'Gerenciador de Tarefas/AddTaskForm',
  component: AddTaskForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};