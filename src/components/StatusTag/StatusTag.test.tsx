import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusTag } from './StatusTag';

// 'describe' agrupa testes relacionados a um mesmo componente
describe('Componente StatusTag', () => {
  // 'it' ou 'test' define um caso de teste específico
  it('deve renderizar o texto passado via props', () => {
    // 1. Arrange (Organizar): Renderizamos o componente com as props necessárias.
    render(<StatusTag text="Pendente" variant="default" />);

    // 2. Act (Agir) & Assert (Afirmar): Procuramos pelo elemento e verificamos se ele existe.
    // A função 'getByText' procura por um elemento que contenha o texto.
    // A asserção 'toBeInTheDocument' verifica se o elemento foi encontrado no DOM.
    expect(screen.getByText('Pendente')).toBeInTheDocument();
  });

  it('deve aplicar a classe CSS correta para a variante "success"', () => {
    render(<StatusTag text="Concluído" variant="success" />);

    const tagElement = screen.getByText('Concluído');

    // 'toHaveClass' verifica se o elemento contém a classe CSS especificada.
    expect(tagElement).toHaveClass('success');
  });
});