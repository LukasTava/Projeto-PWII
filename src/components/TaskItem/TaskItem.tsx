// src/components/TaskItem/TaskItem.tsx
import { useDispatch, useSelector } from 'react-redux';
import { StatusTag } from '../StatusTag/StatusTag';
import './TaskItem.css';
import { type RootState, type AppDispatch } from '../../lib/redux/store';
import { toggleTaskCompletion } from '../../lib/redux/tasksSlice';

// Props agora só precisam do ID da tarefa, o resto virá do Redux
interface TaskItemProps {
  id: string;
}

export const TaskItem = ({ id }: TaskItemProps) => {
  // useDispatch é o hook que usamos para "enviar" ações para a store
  const dispatch: AppDispatch = useDispatch();

  // useSelector é o hook que usamos para "ler" dados da store
  // Encontramos a tarefa específica pelo ID
  const task = useSelector((state: RootState) => 
    state.tasks.find(t => t.id === id)
  );

  // Se a tarefa não for encontrada por algum motivo, não renderiza nada
  if (!task) {
    return null;
  }

  // Removemos o useState! O estado 'isCompleted' agora vem do Redux.
  const { title, priority, isCompleted } = task;

  const getPriorityVariant = (p: typeof priority) => {
    if (p === 'Alta') return 'error';
    if (p === 'Média') return 'warning';
    return 'default';
  };

  const handleToggle = () => {
    // Ao clicar, despachamos a ação com o ID da tarefa como payload
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