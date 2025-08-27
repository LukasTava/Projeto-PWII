import './StatusTag.css';

interface StatusTagProps {
  completed: boolean;
}

export const StatusTag = ({ completed }: StatusTagProps) => {
  const status = completed ? 'concluida' : 'pendente';
  const text = completed ? 'Concluída' : 'Pendente';

  return <span className={`status-tag ${status}`}>{text}</span>;
};