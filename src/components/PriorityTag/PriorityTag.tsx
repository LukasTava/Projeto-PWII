import './PriorityTag.css';

type Priority = 'baixa' | 'media' | 'alta';

interface PriorityTagProps {
  priority: Priority;
}

export const PriorityTag = ({ priority }: PriorityTagProps) => {
  return <span className={`priority-tag ${priority}`}>{priority}</span>;
};