// src/components/AddTaskForm/AddTaskForm.tsx
import { useState } from 'react';
import './AddTaskForm.css';

export const AddTaskForm = () => {
  // Estado para armazenar o valor do campo de input
  const [taskTitle, setTaskTitle] = useState('');

  // Função chamada quando o formulário é enviado
  const handleSubmit = (event: React.FormEvent) => {
    // Previne o comportamento padrão do navegador de recarregar a página
    event.preventDefault();

    // Se o título estiver vazio, não faz nada
    if (!taskTitle.trim()) {
      alert('Por favor, digite um título para a tarefa.');
      return;
    }

    // Em uma aplicação real, aqui você chamaria uma função
    // para adicionar a tarefa à sua lista global.
    // Por enquanto, vamos apenas mostrar um alerta e limpar o campo.
    alert(`Tarefa adicionada: ${taskTitle}`);
    setTaskTitle(''); // Limpa o input após o envio
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que precisa ser feito?"
        value={taskTitle}
        // Atualiza o estado 'taskTitle' a cada letra digitada
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};