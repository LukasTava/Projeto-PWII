import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Gerenciador de Tarefas/StatusTag',
  component: StatusTag,
  tags: ['autodocs'],
  argTypes: {
    completed: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Pendente: Story = {
  args: {
    completed: false,
  },
};

export const Concluida: Story = {
  args: {
    completed: true,
  },
};