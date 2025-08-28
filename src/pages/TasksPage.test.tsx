import { screen } from '@testing-library/react';
import { TasksPage } from './TasksPage';
import { renderWithProviders } from '../utils/test-utils';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const server = setupServer(
  http.get('http://localhost:3001/tasks', () => {
    return HttpResponse.json([]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('deve renderizar a mensagem de "Carregando tarefas..." inicialmente', () => {
  renderWithProviders(<TasksPage />);
  expect(screen.getByText(/carregando tarefas.../i)).toBeInTheDocument();
});

it('deve renderizar tarefas após o carregamento', async () => {
  const mockTasks = [
    { id: 1, title: 'Tarefa Mock 1', priority: 'baixa', completed: false },
  ];
  server.use(
    http.get('http://localhost:3001/tasks', () => {
      return HttpResponse.json(mockTasks);
    })
  );

  renderWithProviders(<TasksPage />);

  expect(await screen.findByText('Tarefa Mock 1')).toBeInTheDocument();
  expect(screen.queryByText(/carregando tarefas.../i)).not.toBeInTheDocument();
});