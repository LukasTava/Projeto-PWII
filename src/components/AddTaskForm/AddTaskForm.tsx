// src/components/AddTaskForm/AddTaskForm.tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddTaskForm.css';
import { type AppDispatch } from '../../lib/redux/store';
import { addTask } from '../../lib/redux/tasksSlice';

type Priority = 'Baixa' | 'Média' | 'Alta';

export const AddTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('Baixa');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.Event) => {
    event.preventDefault();
    if (!taskTitle.trim()) {
      alert('Por favor, digite um título para a tarefa.');
      return;
    }

    dispatch(addTask({ title: taskTitle, priority }));
    
    alert(`Tarefa "${taskTitle}" adicionada com sucesso!`);

    setTaskTitle('');
    setPriority('Baixa');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que precisa ser feito?"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};