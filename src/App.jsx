import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/header.jsx';
import Footer from './assets/components/footer.jsx';
import Home from './pages/home.jsx';
import Calendar from './pages/calendar.jsx';
import Reclamation from './pages/reclamation.jsx';
import Devis from './pages/devis.jsx';
import Review from './pages/review.jsx';
import Blog from './pages/blog.jsx';
import BlogSingle from './pages/blogSingle.jsx';
import Trainings from './pages/training.jsx';


function App() {
  
  return (
    <Router>
      <Header  />
      
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/calendar" element={<Calendar />} />
         <Route path="/reclamation" element={<Reclamation />} />
         <Route path="/devis" element={<Devis />} />
         <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />
        <Route path="/trainings" element={<Trainings />} />

      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
