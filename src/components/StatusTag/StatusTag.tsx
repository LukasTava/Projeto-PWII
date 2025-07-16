import './StatusTag.css'; // Vamos criar este arquivo de estilo a seguir

// Definindo os "tipos" de props que nosso componente aceitará
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