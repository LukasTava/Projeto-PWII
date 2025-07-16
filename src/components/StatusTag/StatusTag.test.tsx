import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusTag } from './StatusTag';

describe('Componente StatusTag', () => {
  it('deve renderizar o texto passado via props', () => {
    render(<StatusTag text="Pendente" variant="default" />);

    expect(screen.getByText('Pendente')).toBeInTheDocument();
  });

  it('deve aplicar a classe CSS correta para a variante "success"', () => {
    render(<StatusTag text="Concluído" variant="success" />);

    const tagElement = screen.getByText('Concluído');

    expect(tagElement).toHaveClass('success');
  });
});