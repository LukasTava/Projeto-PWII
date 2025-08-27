import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../lib/redux/tasksSlice';
import type { AppDispatch } from '../../lib/redux/store';
import './AddTaskForm.css';

export const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'baixa' | 'media' | 'alta'>('baixa');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addNewTask({ title, priority }));
      setTitle('');
      setPriority('baixa');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="O que precisa ser feito?"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};