import React, { useEffect, useState } from 'react';
import Header from './assets/components/header.jsx';
import Footer from './assets/components/footer.jsx';
import Home from './pages/home.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Charger darkMode depuis localStorage au démarrage
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode !== null) {
      setDarkMode(savedMode);
    }
  }, []);

  // Sauvegarder darkMode + appliquer la classe au <body>
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark');   // ajoute la classe "dark" au body
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
