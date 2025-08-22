// contexts/DarkModeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored ? JSON.parse(stored) : false;
    }
    return false;
  });

  useEffect(() => {
    // SOLUTION SIMPLE : Supprimer toutes les classes et ajouter seulement 'dark' si besoin
    const htmlElement = document.documentElement;
    
    // 1. Supprimer TOUTES les classes existantes
    htmlElement.className = '';
    
    // 2. Ajouter UNIQUEMENT la classe 'dark' si en mode sombre
    if (darkMode) {
      htmlElement.classList.add('dark');
    }
    
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}