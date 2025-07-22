import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  priority: 'Baixa' | 'Média' | 'Alta';
  isCompleted: boolean;
}

const initialState: Task[] = [
  { id: '1', title: 'Apresentar o projeto de Web II', priority: 'Alta', isCompleted: false },
  { id: '2', title: 'Estudar para a prova', priority: 'Média', isCompleted: false },
  { id: '3', title: 'Fazer compras', priority: 'Baixa', isCompleted: true },
];

interface AddTaskPayload {
  title: string;
  priority: 'Baixa' | 'Média' | 'Alta';
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      const newTask: Task = {
        id: new Date().toISOString(), 
        title: action.payload.title,
        priority: action.payload.priority,
        isCompleted: false,
      };
      state.unshift(newTask);
    },
  },
});

export const { toggleTaskCompletion, addTask } = tasksSlice.actions;

export default tasksSlice.reducer;