import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'  // import your template’s CSS here
import { DarkModeProvider } from './contexts/DarkModeContext.jsx' // 👈 importe ton provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>   {/* 👈 wrap App ici */}
      <App />
    </DarkModeProvider>
  </React.StrictMode>
)
