import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  priority: 'baixa' | 'media' | 'alta';
  completed: boolean;
}

export interface TasksState {
  items: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: TasksState = {
  items: [],
  status: 'idle',
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('http://localhost:3001/tasks');
  return await response.json();
});

export const addNewTask = createAsyncThunk(
  'tasks/addNewTask',
  async (newTask: Omit<Task, 'id' | 'completed'>) => {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newTask, completed: false }),
    });
    return await response.json();
  }
);

export const toggleTask = createAsyncThunk('tasks/toggleTask', async (task: Task) => {
  const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...task, completed: !task.completed }),
  });
  return await response.json();
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: number) => {
  await fetch(`http://localhost:3001/tasks/${taskId}`, {
    method: 'DELETE',
  });
  return taskId;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => { state.status = 'failed'; })
      .addCase(addNewTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;