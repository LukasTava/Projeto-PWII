import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export const createStore = () => configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

const tempStore = createStore();
export type RootState = ReturnType<typeof tempStore.getState>;
export type AppDispatch = typeof tempStore.dispatch;