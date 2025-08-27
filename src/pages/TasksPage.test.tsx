import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { TasksPage } from './TasksPage';
import { createStore } from '../lib/redux/store';

it('deve renderizar o título "Minhas Tarefas"', () => {
  const store = createStore();
  render(
    <Provider store={store}>
      <TasksPage />
    </Provider>
  );
  expect(screen.getByRole('heading', { name: /minhas tarefas/i })).toBeInTheDocument();
});