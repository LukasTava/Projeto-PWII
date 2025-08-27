import type { Meta, StoryObj } from '@storybook/react';
import { PriorityTag } from './PriorityTag';

const meta: Meta<typeof PriorityTag> = {
  title: 'Gerenciador de Tarefas/PriorityTag',
  component: PriorityTag,
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: 'select',
      options: ['baixa', 'media', 'alta'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Baixa: Story = {
  args: {
    priority: 'baixa',
  },
};

export const Media: Story = {
  args: {
    priority: 'media',
  },
};

export const Alta: Story = {
  args: {
    priority: 'alta',
  },
};