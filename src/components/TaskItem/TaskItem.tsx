import { useDispatch, useSelector } from 'react-redux';
import { StatusTag } from '../StatusTag/StatusTag';
import './TaskItem.css';
import { type RootState, type AppDispatch } from '../../lib/redux/store';
import { toggleTaskCompletion } from '../../lib/redux/tasksSlice';

interface TaskItemProps {
  id: string;
}

export const TaskItem = ({ id }: TaskItemProps) => {
  const dispatch: AppDispatch = useDispatch();
  const task = useSelector((state: RootState) => 
    state.tasks.find(t => t.id === id)
  );

  if (!task) {
    return null;
  }

  const { title, priority, isCompleted } = task;

  const getPriorityVariant = (p: typeof priority) => {
    if (p === 'Alta') return 'error';
    if (p === 'Média') return 'warning';
    return 'default';
  };

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <div className="task-info">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggle}
        />
        <span className="task-title">{title}</span>
      </div>
      <div className="task-tags">
        <StatusTag
          text={isCompleted ? 'Concluída' : 'Pendente'}
          variant={isCompleted ? 'success' : 'default'}
        />
        <StatusTag
          text={priority}
          variant={getPriorityVariant(priority)}
        />
      </div>
    </div>
  );
};