// src/components/StatusTag/StatusTag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from '../StatusTag/StatusTag';

// Configuração global do componente no Storybook
const meta: Meta<typeof StatusTag> = {
  title: 'Meus Componentes/StatusTag', // Como vai aparecer na barra lateral
  component: StatusTag,
  tags: ['autodocs'], // Gera uma aba de documentação automática
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Exportando a primeira história: "Aprovado"
export const Aprovado: Story = {
  args: {
    text: 'Aprovado',
    variant: 'success',
  },
};

// Exportando a segunda história: "Pendente"
export const Pendente: Story = {
  args: {
    text: 'Pendente',
    variant: 'warning',
  },
};

// Exportando a terceira história: "Recusado"
export const Recusado: Story = {
  args: {
    text: 'Recusado',
    variant: 'error',
  },
};

// Exportando a quarta história: "Padrão"
export const Padrao: Story = {
  args: {
    text: 'Padrão',
    variant: 'default',
  },
};