import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <>
    <h1 className='title'>LISTA DE TAREAS</h1>
    <App />
  </>

);
