import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkmodeToggle';

export default function AppHeader() {
  const [page, setPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownTraining, setDropdownTraining] = useState(false);
  const [dropdownSupport, setDropdownSupport] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const prefersDark = stored !== null ? JSON.parse(stored) : true;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);

    const handleScroll = () => {
      setStickyMenu(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
<header className={`app-header fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 ${stickyMenu ? 'sticky-header' : ''}`} style={{ right: 0 }}>
        <div className="header-container">
        {/* Bouton hamburger */}
        <button 
          className="hamburger-button" 
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          {/* Icône hamburger */}
          <div className={`hamburger-icon ${navigationOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation principale */}
        <div className={`nav-links-container ${navigationOpen ? 'mobile-menu-open' : ''}`}>
          <nav>
            <ul className="nav-links-list">
              <li>
                <a 
                  href="http://localhost:5173/" 
                  className={`nav-link ${page === 'home' ? 'active' : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="index.html#features" className="nav-link">Calendar</a>
              </li>
              
              {/* Menu Training */}
              <li className="nav-dropdown"
               onMouseEnter={() => setDropdownTraining(true)}
              onMouseLeave={() => setDropdownTraining(false)}>
              <a href="#"className={`nav-link ${dropdownTraining ? 'active' : ''}`}>
                  Training
                 <svg className={`dropdown-icon ${dropdownTraining ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                 </svg>
                 </a>

                {dropdownTraining && (
                  <ul className="dropdown-menu">
                    <li><a href="http://localhost:5173/trainings" className="nav-link">Agility</a></li>
                    <li><a href="blog-grid.html" className="nav-link">Business Analysis</a></li>
                    <li><a href="blog-single.html" className="nav-link">Lean Management</a></li>
                    <li><a href="signin.html" className="nav-link">Project Management</a></li>
                    <li><a href="signup.html" className="nav-link">Process Management</a></li>
                    <li><a href="signup.html" className="nav-link">Strategic Management</a></li>
                    <li><a href="404.html" className="nav-link">SI</a></li>
                  </ul>
                )}
              </li>

              <li><a href="http://localhost:5173/blogs" className="nav-link">Blog</a></li>
              
              {/* Menu Support */}
              <li className="nav-dropdown"
               onMouseEnter={() => setDropdownSupport(true)}
               onMouseLeave={() => setDropdownSupport(false)}>
               <a
                href="#"className={`nav-link ${dropdownSupport ? 'active' : ''}`}>
               Support
               <svg className={`dropdown-icon ${dropdownSupport ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
               </svg>
               </a>

                {dropdownSupport && (
                  <ul className="dropdown-menu">
                    <li><a href="http://localhost:5173/devis" className="nav-link">Tailored need</a></li>
                    <li><a href="http://localhost:5173/review" className="nav-link">Review</a></li>
                    <li><a href="http://localhost:5173/reclamation" className="nav-link">Complaint</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
         </div>
          {/* Bouton dark mode */}
          <div className="dark-mode-toggle">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="dark-mode-button"
    aria-label="Toggle Dark Mode"
  >
    {darkMode ? (
      <img src="/images/icon-moon.svg" alt="Dark Mode" className="dark-mode-icon" />
    ) : (
      <img src="/images/icons8-sun-50.png" alt="Light Mode" className="dark-mode-icon" />
    )}
  </button>
</div>
        
      </div>
    </header>
  );
}