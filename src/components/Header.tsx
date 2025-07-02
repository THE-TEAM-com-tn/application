import { useEffect, useState } from 'react';

export default function AppHeader() {
  const [page, setPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      const value = JSON.parse(stored);
      setDarkMode(value);
      document.documentElement.classList.toggle('dark', value);
    }

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
                    <li><a href="/trainings" className={`xl ${page === 'training' ? 'mk' : ''}`}>Agility</a>
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
              <li><a href="/blogs" className="xl">Blog</a></li>
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
                    
                    <li><a href="./devis" className={`xl ${page === 'devis' ? 'mk' : ''}`}>Tailored need</a></li>
                    <li><a href="signin.html" className={`xl ${page === 'signin' ? 'mk' : ''}`}>Review</a></li>
                    <li><a href="./reclamation" className={`xl ${page === 'reclamation' ? 'mk' : ''}`}>Complaint</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <div className="tc wf ig pb no">
            <div className="pc h io pa ra">
              <label className="rc ab i">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="pf vd yc uk h r za ab"
                />
                <svg className={`th om ${page === 'home' ? 'wn' : ''} ${page === 'home' && stickyMenu ? 'xh' : ''}`} width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.0908 18.6363C10.3549 18.6363 8.69 17.9467..." fill="" />
                </svg>
                <img className="xc nm" src="images/icon-moon.svg" alt="Moon" />
              </label>
            </div>
           </div>
        </div>
      </div>
    </header>
  );
}
