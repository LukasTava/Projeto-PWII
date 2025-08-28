import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusTag } from './StatusTag';

describe('Componente StatusTag', () => {
  it('deve renderizar "Pendente" quando completed for false', () => {
    render(<StatusTag completed={false} />);
    expect(screen.getByText('Pendente')).toBeInTheDocument();
    expect(screen.getByText('Pendente')).toHaveClass('pendente');
  });

  it('deve renderizar "Concluída" quando completed for true', () => {
    render(<StatusTag completed={true} />);
    expect(screen.getByText('Concluída')).toBeInTheDocument();
    expect(screen.getByText('Concluída')).toHaveClass('concluida');
  });
});