import React from "react";

export default function Home() {
  return (
    <>
    {/* Header */}
      <header className="g s r vd ya cj">
        <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
          

          <div className="vd wo/4 sd qo f ho oo wf yf">
            <nav>
              <ul className="tc _o sf yo cg ep">
                <li><a href="index.html" className="xl text-yellow-400">Home</a></li>
                <li><a href="index.html#features" className="xl text-yellow-400">Blog</a></li>
                <li className="c i">
                  <a href="#" className="xl tc wf yf bg text-yellow-400">
                    Trainings
                    <svg className="th mm we fd pf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </a>
                  <ul className="a tc">
                    <li><a href="blog-grid.html" className="xl">Blog Grid</a></li>
                    <li><a href="blog-single.html" className="xl">Blog Single</a></li>
                    <li><a href="signin.html" className="xl">Sign In</a></li>
                    <li><a href="signup.html" className="xl">Sign Up</a></li>
                    <li><a href="404.html" className="xl">404</a></li>
                  </ul>
                </li>
                <li><a href="index.html#support" className="xl text-yellow-400">Contact us</a></li>
              </ul>
            </nav>

            <div className="tc wf ig pb no">
              <div className="pc h io pa ra">
                <label className="rc ab i">
                  <input type="checkbox" className="pf vd yc uk h r za ab" />
                  <svg className="th om" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0908 18.6363...Z" fill="" />
                  </svg>
                  <img className="xc nm" src="images/icon-moon.svg" alt="Moon" />
                </label>
              </div>
              
            </div>
          </div>
        </div>
      </header>

      <section className="gj do ir hj sp jr i pg">
        {/* Hero Images */}
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
          <img alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" src="/images/shape-01.svg" />
          <img alt="shape" className="h q r" src="/images/shape-04-green.svg" />
<img
  alt="Woman"
  className="absolute w-6/10 left-[57%] top-[46%] -translate-x-1/2 -translate-y-1/2 ua"
  src="/images/womenn.png"
/>

        </div>

        {/* Hero Content */}
        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
  <h1 className="fk vj zp or kk wm wb">
    <img alt="Logo" className="h-6 w-auto ml-0" src="/images/logo.png" />
  </h1>

              <p className="fq">
                The Team is a consulting agency specializing in digital transformation, marketing strategy, and technological support. For several years, we have been helping businesses grow by providing innovative, tailored, high-impact solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    
  



      {/* Features Section */}
      <section id="features">
        <div className="bb ze ki yn 2xl:ud-px-12.5">
          <div className="tc uf zo xf ap zf bp mq">
            {['24/7 Support', 'Take Ownership', 'Team Work'].map((title, i) => (
              <div key={i} className="animate_top kn to/3 tc cg oq">
                <div className="tc wf xf cf ae cd rg mh">
                  <img src={`images/icon-0${i+1}.svg`} alt="Icon" />
                </div>
                <div>
                  <h4 className="ek yj go kk wm xb">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="ji gp uq 2xl:ud-py-35 pg">
        <div className="bb ze ki xn wq">
          <div className="tc wf gg qq">
            <div className="animate_left xc gn gg jn/2 i">
              <div>
                <img src="images/shape-05.svg" alt="Shape" className="h -ud-left-5 x" />
                <img src="images/about-01.png" alt="About" className="ib" />
                <img src="images/about-02.png" alt="About" />
              </div>
              <div>
                <img src="images/shape-06.svg" alt="Shape" />
                <img src="images/about-03.png" alt="About" className="ob gb" />
                <img src="images/shape-07.svg" alt="Shape" className="bb" />
              </div>
            </div>
            <div className="animate_right jn/2">
              <h4 className="ek yj mk gb">Why Choose Us</h4>
              <h2 className="fk vj zp pr kk wm qb">We Make Our customers happy by giving Best services.</h2>
              <p className="uo">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
              <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" className="vc wf hg mb">
                <span className="tc wf xf be dd rg i gh ua">
                  <span className="nf h vc yc vd rg gh qk -ud-z-1"></span>
                  <img src="images/icon-play.svg" alt="Play" />
                </span>
                <span className="kk">SEE HOW WE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>

            

      {/* Footer Section */}
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6">
              <img src="images/logo-light.svg" alt="Logo" className="h-8 mb-4" />
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Graphics Design</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">UI/UX Design</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Support</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Press Media</a></li>
                  <li><a href="#">Our Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Newsletter</h4>
                <form>
                  <input type="text" placeholder="Email address" className="w-full px-3 py-2 border rounded" />
                  <button className="mt-2 w-full bg-green-500 text-white py-2 rounded">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-sm text-gray-500">&copy; 2025 Base. All rights reserved</div>
        </div>
      </footer>
    </>
  );
}
