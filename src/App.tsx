import { Outlet, Link } from 'react-router-dom';
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>Gerenciador de Tarefas</h1>
          <nav>
            <Link to="/">Tarefas</Link>
            <Link to="/sobre">Sobre</Link>
          </nav>
        </div>
      </header>
      <main>
        <AddTaskForm />
        <Outlet />
      </main>
    </div>
  );
}

export default App;