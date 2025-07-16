import './StatusTag.css'; 

interface StatusTagProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'default';
}

export const StatusTag = ({ text, variant = 'default' }: StatusTagProps) => {
  return (
    <div className={`status-tag ${variant}`}>
      {text}
    </div>
  );
};