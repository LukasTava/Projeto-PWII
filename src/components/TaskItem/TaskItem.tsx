import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../lib/redux/store';
import type { Task } from '../../lib/redux/tasksSlice';
import { toggleTask, deleteTask } from '../../lib/redux/tasksSlice';
import { StatusTag } from '../StatusTag/StatusTag';
import { PriorityTag } from '../PriorityTag/PriorityTag';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = () => {
    dispatch(toggleTask(task));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const priorityClass = `priority-${task.priority}`;

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${priorityClass}`}>
      <div className="task-content">
        <div className="task-main">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle} 
          />
          <span className="task-title">{task.title}</span>
        </div>
        <div className="tags-container">
          <StatusTag completed={task.completed} />
          <PriorityTag priority={task.priority} />
        </div>
      </div>
      <button onClick={handleDelete} className="delete-button">&times;</button>
    </div>
  );
};