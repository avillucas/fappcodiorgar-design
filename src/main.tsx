import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGTM } from './utils/analytics';

// Inicializar Google Tag Manager (lee VITE_GTM_ID desde .env)
initGTM();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
