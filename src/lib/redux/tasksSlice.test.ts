import tasksReducer, {
  fetchTasks,
  addNewTask,
  toggleTask,
  deleteTask,
  type Task,
  type TasksState, 
} from './tasksSlice';

describe('tasks slice', () => {
  const initialState: TasksState = {
    items: [],
    status: 'idle',
  };

  const mockTasks: Task[] = [
    { id: 1, title: 'Task 1', priority: 'baixa', completed: false },
    { id: 2, title: 'Task 2', priority: 'media', completed: true },
  ];

  it('deve retornar o estado inicial', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('fetchTasks extra reducers', () => {
    it('deve mudar o status para "loading" ao iniciar o fetchTasks', () => {
      const action = { type: fetchTasks.pending.type };
      const state = tasksReducer(initialState, action);
      expect(state.status).toBe('loading');
    });

    it('deve preencher as tarefas e mudar o status para "succeeded" quando o fetchTasks é bem-sucedido', () => {
      const action = { type: fetchTasks.fulfilled.type, payload: mockTasks };
      const state = tasksReducer(initialState, action);
      expect(state.status).toBe('succeeded');
      expect(state.items).toEqual(mockTasks);
    });

    it('deve mudar o status para "failed" quando o fetchTasks é rejeitado', () => {
      const action = { type: fetchTasks.rejected.type };
      const state = tasksReducer(initialState, action);
      expect(state.status).toBe('failed');
    });
  });

  describe('addNewTask extra reducers', () => {
    it('deve adicionar uma nova tarefa ao estado quando addNewTask é bem-sucedido', () => {
      const newTask: Task = { id: 3, title: 'Task 3', priority: 'alta', completed: false };
      const action = { type: addNewTask.fulfilled.type, payload: newTask };
      const currentState: TasksState = { items: mockTasks, status: 'succeeded' };
      const state = tasksReducer(currentState, action);
      expect(state.items).toHaveLength(3);
      expect(state.items[2]).toEqual(newTask);
    });
  });

  describe('toggleTask extra reducers', () => {
    it('deve alternar o estado "completed" de uma tarefa quando toggleTask é bem-sucedido', () => {
      const updatedTask = { ...mockTasks[0], completed: true };
      const action = { type: toggleTask.fulfilled.type, payload: updatedTask };
      const currentState: TasksState = { items: mockTasks, status: 'succeeded' };
      const state = tasksReducer(currentState, action);
      expect(state.items[0].completed).toBe(true);
    });
  });

  describe('deleteTask extra reducers', () => {
    it('deve remover uma tarefa do estado quando deleteTask é bem-sucedido', () => {
      const taskIdToDelete = 1;
      const action = { type: deleteTask.fulfilled.type, payload: taskIdToDelete };
      const currentState: TasksState = { items: mockTasks, status: 'succeeded' };
      const state = tasksReducer(currentState, action);
      expect(state.items.find(task => task.id === taskIdToDelete)).toBeUndefined();
      expect(state.items).toHaveLength(1);
    });
  });
});