import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/header.jsx';
import Footer from './assets/components/footer.jsx';
import Home from './pages/home.jsx';
import Calendar from './pages/calendar.jsx';
  import Reclamation from './pages/reclamation.jsx';
  import Devis from './pages/devis.jsx';
  import Review from './pages/review.jsx';
{/* import Blog from './pages/blog.jsx';
import BlogSingle from './pages/blogSingle.jsx';
import Training from './pages/training.jsx';
import TrainingSingle from './pages/trainingSingle.jsx';
import FormPage from './pages/formPage.jsx';
 */}
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode !== null) {
      setDarkMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/calendar" element={<Calendar />} />
         <Route path="/reclamation" element={<Reclamation />} />
         <Route path="/devis" element={<Devis />} />
         <Route path="/review" element={<Review />} />
        {/*<Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />
        <Route path="/trainings" element={<Training />} />
        <Route path="/trainings/:slug" element={<TrainingSingle />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="/review" element={<Review />} /> */}
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
