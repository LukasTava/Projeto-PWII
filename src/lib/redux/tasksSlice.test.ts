import tasksReducer, { fetchTasks } from './tasksSlice';

describe('tasks slice', () => {
  it('deve mudar o status para "loading" ao iniciar o fetchTasks', () => {
    const action = { type: fetchTasks.pending.type };
    const initialState = { items: [], status: 'idle' };
    const newState = tasksReducer(initialState, action);
    expect(newState.status).toBe('loading');
  });
});