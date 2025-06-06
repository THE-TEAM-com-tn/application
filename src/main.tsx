import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'; // style de la template
import './index.css';            // Tailwind
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
