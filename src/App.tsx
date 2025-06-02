import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './assets/css/style.css'; // style de la template
import './index.css'; // Tailwind
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
   
      <Home />
   
  );
}

export default App;
