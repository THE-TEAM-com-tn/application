import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkmodeToggle';

export default function AppHeader() {
  const [page, setPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
    <header className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}>
       
      <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
        <div className="vd to/4 tc wf yf">
          

          {/* Hamburger Toggle BTN */}
          <button className="po rc" onClick={() => setNavigationOpen(!navigationOpen)}>
            <span className="rc i pf re pd">
              <span className="du-block h q vd yc">
                <span className={`rc i r s eh um tg te rd eb ml jl dl ${!navigationOpen ? 'ue el' : ''}`} />
                <span className={`rc i r s eh um tg te rd eb ml jl fl ${!navigationOpen ? 'ue qr' : ''}`} />
                <span className={`rc i r s eh um tg te rd eb ml jl gl ${!navigationOpen ? 'ue hl' : ''}`} />
              </span>
              <span className="du-block h q vd yc lf">
                <span className={`rc eh um tg ml jl el h na r ve yc ${!navigationOpen ? 'sd dl' : ''}`} />
                <span className={`rc eh um tg ml jl qr h s pa vd rd ${!navigationOpen ? 'sd rr' : ''}`} />
              </span>
            </span>
          </button>
        </div>

        <div className={`vd wo/4 sd qo f ho oo wf yf ${navigationOpen ? 'd hh rm sr td ud qg ug jc yh' : ''}`}>
          <nav>
            <ul className="tc _o sf yo cg ep">
              <li>
                <a href="http://localhost:5173/" className={`xl ${page === 'home' ? 'mk' : ''}`}>Home</a>
              </li>
              <li>
                <a href="index.html#features" className="xl">Calendar</a>
              </li>
              <li className="c i">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdown(!dropdown);
                  }}
                  className={`xl tc wf yf bg ${['blog-grid', 'blog-single', 'signin', 'signup', '404'].includes(page) ? 'mk' : ''}`}
                >
                  Training
                  <svg className={`th mm we fd pf ${dropdown ? 'wh' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </a>

                {dropdown && (
                  <ul className="a tc">
                    <li><a href="http://localhost:5173/trainings" className={`xl ${page === 'training' ? 'mk' : ''}`}>Agility</a>
                        <li><a href="blog-grid.html" className={`xl ${page === 'blog-grid' ? 'mk' : ''}`}>Business Analysis</a></li>
                        <li><a href="blog-single.html" className={`xl ${page === 'blog-single' ? 'mk' : ''}`}>Lean Management</a></li>
                        <li><a href="signin.html" className={`xl ${page === 'signin' ? 'mk' : ''}`}>Project Management</a></li>
                        <li><a href="signup.html" className={`xl ${page === 'signup' ? 'mk' : ''}`}>Process Management</a></li>
                        <li><a href="signup.html" className={`xl ${page === 'signup' ? 'mk' : ''}`}>Strategic Management</a></li>
                        <li><a href="404.html" className={`xl ${page === '404' ? 'mk' : ''}`}>SI</a></li>
                    </li>
                  </ul>
                )}
              </li>
              <li><a href="http://localhost:5173/blogs" className="xl">Blog</a></li>
              <li className="c i">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdown(!dropdown);
                  }}
                  className={`xl tc wf yf bg ${['blog-grid', 'blog-single', 'signin', 'signup', '404'].includes(page) ? 'mk' : ''}`}
                >
                  Support
                  <svg className={`th mm we fd pf ${dropdown ? 'wh' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </a>

                {dropdown && (
                  <ul className="a tc">
                    
                    <li><a href="http://localhost:5173/devis" className={`xl ${page === 'devis' ? 'mk' : ''}`}>Tailored need</a></li>
                    <li><a href="http://localhost:5173/review" className={`xl ${page === 'review' ? 'mk' : ''}`}>Review</a></li>
                    <li><a href="http://localhost:5173/reclamation" className={`xl ${page === 'reclamation' ? 'mk' : ''}`}>Complaint</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

           <div className="flex items-center ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
  <img src="/images/icon-moon.svg" alt="Dark Mode" className="w-6 h-6" />
) : (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-yellow-500"
  >
    <path d="M12 4.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12.75A.75.75 0 0 1 12 4.5zM4.5 11.25a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 11.25zM12 19.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12.75A.75.75 0 0 1 12 19.5zM19.5 11.25a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H20.25A.75.75 0 0 1 19.5 11.25zM16.97 7.03a.75.75 0 0 1 1.06 0h.01a.75.75 0 0 1-1.06 1.06h-.01a.75.75 0 0 1 0-1.06zM7.03 16.97a.75.75 0 0 1 1.06 0h.01a.75.75 0 0 1-1.06 1.06h-.01a.75.75 0 0 1 0-1.06zM7.03 7.03a.75.75 0 0 1 1.06 0h.01a.75.75 0 0 1-1.06 1.06h-.01a.75.75 0 0 1 0-1.06zM16.97 16.97a.75.75 0 0 1 1.06 0h.01a.75.75 0 0 1-1.06 1.06h-.01a.75.75 0 0 1 0-1.06zM12 7.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9z" />
  </svg>
)}

          </button>
        </div>
      </div>
      </div>

    </header>
  );
}