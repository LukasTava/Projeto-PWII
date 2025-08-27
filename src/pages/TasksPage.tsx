import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TaskItem } from '../components/TaskItem/TaskItem';
import { fetchTasks } from '../lib/redux/tasksSlice';
import type { RootState, AppDispatch } from '../lib/redux/store';
import './TasksPage.css'; 

export const TasksPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tasks, status } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return (
    <div className="task-list-container">
      {status === 'loading' && <p>Carregando tarefas...</p>}
      {status === 'failed' && <p>Erro ao carregar tarefas.</p>}
      {status === 'succeeded' && tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};