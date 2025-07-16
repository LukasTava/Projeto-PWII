// src/lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Função para criar uma nova store, útil para os testes e Storybook
export const createStore = () => configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Tipos para nos ajudar com o TypeScript
const tempStore = createStore();
export type RootState = ReturnType<typeof tempStore.getState>;
export type AppDispatch = typeof tempStore.dispatch;