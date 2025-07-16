// src/lib/redux/tasksSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  priority: 'Baixa' | 'Média' | 'Alta';
  isCompleted: boolean;
}

// Estado inicial com dados fictícios para nossos testes e histórias
const initialState: Task[] = [
  { id: '1', title: 'Implementar autenticação', priority: 'Alta', isCompleted: false },
  { id: '2', title: 'Criar componentes de login', priority: 'Média', isCompleted: false },
  { id: '3', title: 'Corrigir cor do rodapé', priority: 'Baixa', isCompleted: true },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  // Reducers são as funções que podem alterar o nosso estado
  reducers: {
    // Esta função irá alternar o estado 'isCompleted' de uma tarefa
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
  },
});

// Exportamos a ação para que nossos componentes possam "despachá-la"
export const { toggleTaskCompletion } = tasksSlice.actions;

// Exportamos o reducer para ser usado na nossa store
export default tasksSlice.reducer;