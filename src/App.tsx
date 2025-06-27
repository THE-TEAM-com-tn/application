import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './assets/css/style.css'; // style de la template
import './index.css'; // Tailwind
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Page from './pages/Page';
import FormPage from './pages/FormPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />
        <Route path="/pages/:id" element={<Page />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}