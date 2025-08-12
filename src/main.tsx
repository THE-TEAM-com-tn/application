// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/style.css';
import App from './App.tsx';
import { DarkModeProvider } from './contexts/DarkModeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
);