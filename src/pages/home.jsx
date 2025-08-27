import ScrollReveal from "scrollreveal";
import { useState, useEffect } from 'react';
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogList from "../assets/components/BlogList";


const Home = () => {

const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const swiper = new Swiper(".testimonial-01", {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiper) swiper.destroy(); // cleanup
    };
  }, []);


  useEffect(() => {
   // Animate Left
    ScrollReveal().reveal(".animate_left", {
      duration: 2000,
      origin: "left",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Animate Right
    ScrollReveal().reveal(".animate_right", {
      duration: 2000,
      origin: "right",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Animate Top
    ScrollReveal().reveal(".animate_top", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Animate Bottom
    ScrollReveal().reveal(".animate_bottom", {
      duration: 2000,
      origin: "bottom",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Fade In (sans mouvement, juste opacité)
    ScrollReveal().reveal(".animate_fade", {
      duration: 2000,
      opacity: 0,
      distance: "0px",
      easing: "ease",
      reset: false,
    });

    // Zoom In
    ScrollReveal().reveal(".animate_zoom", {
      duration: 2000,
      scale: 0.85,
      easing: "ease",
      reset: false,
    });
  }, []);
  
  
  return (
    <main>
      {/* ===== Hero Start ===== */}
      <section className="gj do ir hj sp jr i pg">
        {/* Hero Images */}
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
          <img
            src="images/shape-01.svg"
            alt="shape"
            className="xc 2xl:ud-block h t -ud-left-[10%] ua"
          />
          <img
            src="images/shape-02.svg"
            alt="shape"
            className="xc 2xl:ud-block h u p va"
          />
          <img
            src="images/shape-03.svg"
            alt="shape"
            className="xc 2xl:ud-block h v w va"
          />
          <img src="images/shape-04.png" alt="shape" className="h q r" />
          <img src="images/hero.png" alt="Woman" className="h q r ua" />
        </div>

        {/* Hero Content */}
        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
              <h1 className="fk vj zp or kk wm wb">
                The Tunisian Establishment for Agile Management
              </h1>
              <p className="fq">
                The Team is a consulting agency specializing in digital transformation, marketing strategy, and technological support. For several years, we have been helping businesses grow by providing innovative, tailored, high-impact solutions.
              </p>

              <div className="tc tf yo zf mb">
                <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                  Get Started Now
                </a>

                <span className="tc sf">
                  <a href="#" className="inline-block ek xj kk wm">
                    Call us +216 92 600 991
                  </a>
                  <span className="inline-block">
                    For any question or concern
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Hero End ===== */}

      {/* ===== Small Features Start ===== */}
      <section id="features">
        <div className="bb ze ki yn 2xl:ud-px-12.5">
          <div className="tc uf zo xf ap zf bp mq">
            {/* Small Features Item */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg mh">
                <img src="images/icon-01.svg" alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">Accountability</h4>
                <p>Anticipate, respond with agility, and honor our commitments.</p>
              </div>
            </div>

            {/* Small Features Item */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg nh">
                <img src="images/icon-02.svg" alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">Openness & Passion</h4>
                <p>Be curious, embrace diversity, and challenge ourselves to grow.</p>
              </div>
            </div>

            {/* Small Features Item */}
            <div className="animate_top kn to/3 tc cg oq">
              <div className="tc wf xf cf ae cd rg oh">
                <img src="images/icon-03.svg" alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">Leadership</h4>
                <p>Inspire through teamwork and collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Small Features End ===== */}

      {/* ===== About Start ===== */}
      <section className="ji gp uq 2xl:ud-py-35 pg">
        <div className="bb ze ki xn wq">
          <div className="tc wf gg qq">
            {/* About Images */}
            <div className="animate_left xc gn gg jn/2 i">
              <div>
                <img
                  src="images/shape-05.svg"
                  alt="Shape"
                  className="h -ud-left-5 x"
                />
                <img src="images/about-01.png" alt="About" className="ib" />
                <img src="images/about-02.png" alt="About" />
              </div>
              <div>
                <img src="images/shape-06.svg" alt="Shape" />
                <img src="images/about-03.png" alt="About" className="ob gb" />
                <img src="images/shape-07.svg" alt="Shape" className="bb" />
              </div>
            </div>

            {/* About Content */}
            <div className="animate_right jn/2">
              <h4 className="ek yj mk gb">Why Choose Us</h4>
              <h2 className="fk vj zp pr kk wm qb">
                We Make Our customers happy by giving Best services.
              </h2>
              <p className="uo">
                Our know-how and competencies are rooted in our mastery of project management domains, 
               combined with a rich, solid, and diverse experience in managing public sector structures.
               This foundation has become our strength in spreading managerial knowledge with the goal 
               of supporting business development and improving organizational performance.
              </p>

              <a
                href="https://www.youtube.com/channel/UCBPlXrGX_sbk82XfwQAEc5w"
                data-fslightbox
                className="vc wf hg mb"
              >
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
      {/* ===== About End ===== */}

      {/* ===== Team Start ===== */}
<section className="i pg ji gp uq">
  {/* Bg Shapes */}
  <span className="rc h s r vd fd/5 fh rm "></span>
  <img src="images/shape-08.svg" alt="Shape Bg" className="h q r" />
  <img src="images/shape-09.svg" alt="Shape" className="of h y z/2" />
  <img src="images/shape-10.svg" alt="Shape" className="h _ aa" />
  <img src="images/shape-11.svg" alt="Shape" className="of h m ba" />

  {/* Section Title Start */}
  <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
              Meet With Our Creative Dedicated Team
            </h2>
            <p className="bb on/5 wo/5 hq">
              We are here to ensure your needs are met with precision and care.
            </p>
          </div>
        </div>
  {/* Section Title End */}

  <div className="bb ze i va ki xn xq jb jo">
    <div className="wc qf pn xo gg cp">
      {/* Team Item */}
      <div className="animate_top rj">
        <div className="c i pg z-1">
          <img className="vd" src="images/safia.jpeg" alt="Team" />

          <div className="ef im nl il">
            <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
            <span className="h s p rc vd hd mh va"></span>
            <div className="h s p vd ij jj xa">
              <ul className="tc xf wf gg">
                <li>
                  <a href="https://www.facebook.com/safiazbidi">
                    <svg
                      className="uh vl ml il"
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill="" />
                    </svg>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/in/safiya-zbidi/">
                    <svg
                      className="uh vl ml il"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill="" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="yj go kk wm ob zb">Safiya ZBIDI</h4>
        <p>CEO THE TEAM</p>
      </div>

      {/* Team Item */}
      <div className="animate_top rj">
        <div className="c i pg z-1">
          <img className="vd" src="images/monia.png" alt="Team" />

          <div className="ef im nl il">
            <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
            <span className="h s p rc vd hd mh va"></span>
            <div className="h s p vd ij jj xa">
              <ul className="tc xf wf gg">
                <li>
                  <a href="https://www.facebook.com/monia.sahbanichelbi">
                    <svg
                      className="uh vl ml il"
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill="" />
                    </svg>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/in/monia-sahbani/">
                    <svg
                      className="uh vl ml il"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill="" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="yj go kk wm ob zb">Monia SAHBANI</h4>
        <p>Directrice Département Formation et Certification</p>
      </div>
      {/* Team Item */}
      {/*<div className="animate_top rj">
        <div className="c i pg z-1">
          <img className="vd" src="images/team-02.png" alt="Team" />

          <div className="ef im nl il">
            <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
            <span className="h s p rc vd hd mh va"></span>
            <div className="h s p vd ij jj xa">
              <ul className="tc xf wf gg">
                <li>
                  <a href="#">
                    <svg
                      className="uh vl ml il"
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill="" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      className="uh vl ml il"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z" fill="" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      className="uh vl ml il"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill="" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="yj go kk wm ob zb">Monia SAHBANI</h4>
        <p>Directrice Département Formation et Certification</p>
      </div> */}

      {/* Team Item */}
      <div className="animate_top rj">
        <div className="c i pg z-1">
          <img className="vd" src="images/imen.jpeg" alt="Team" />

          <div className="ef im nl il">
            <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
            <span className="h s p rc vd hd mh va"></span>
            <div className="h s p vd ij jj xa">
              <ul className="tc xf wf gg">
                <li>
                  <a href="https://fr-fr.facebook.com/amouna.gharbi.714">
                    <svg
                      className="uh vl ml il"
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill="" />
                    </svg>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/in/imen-gharbi-/">
                    <svg
                      className="uh vl ml il"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill="" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h4 className="yj go kk wm ob zb">Imen GHARBI</h4>
        <p>Consultante en Management de Projet
           Responsable Appel d’Offre</p>
      </div>
    </div>
  </div>
</section>
{/* ===== Team End ===== */}


 {/* ===== Services Start ===== */}
      <section className="lj tp kr">
        {/* Section Title Start */}
        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
              We Offer The Best Quality Service for You
            </h2>
            <p className="bb on/5 wo/5 hq">
           Delivering excellence in every project</p>
          </div>
        </div>
        {/* Section Title End */}

        <div className="bb ze ki xn yq mb en">
          <div className="wc qf pn xo ng">
            {/* Service Item */}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/1.svg" alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Strategic Studies</h4>
              <p>We offer strategic studies and support, from maturity assessments to portfolio identification and strategic plan implementation, helping organizations turn vision into action.</p>
            </div>

            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/6.svg" alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Quality Management</h4>
              <p>We provide organizational development support, including implementing quality management systems and assisting with certification, helping companies enhance their processes and achieve recognized standards.</p>
            </div>

            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/2.svg" alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Project Management</h4>
              <p>We offer project management consulting, from maturity assessments to PMO setup, Agile/SAFe implementation, and tailored training and coaching to strengthen project delivery.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Services End ===== */}

      {/* ===== Pricing Table Start ===== */}
      <section className="i pg fh rm ji gp uq">
        {/* Bg Shapes */}
        <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
        <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
        <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
        <img src="images/shape-12.svg" alt="Shape" className="h p s" />
        <img src="images/shape-13.svg" alt="Shape" className="h r q" />

        {/* Section Title Start */}
        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
              We Offer Great Affordable Premium Prices.
            </h2>
            <p className="bb on/5 wo/5 hq">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
            </p>
          </div>
        </div>
        {/* Section Title End */}

        {/* Pricing switcher */}
        <div className="tc wf xf jb og">
          <span className="ek kk wm">Bill Monthly</span>
          <button className="i rg gm">
            <div className="fe id bl gh rg xk outline-none"></div>
            <div className="h vc wf xf ge jd cl jl ml mf hh rg yk ea fa ff"></div>
          </button>
          <span className="ek kk wm">Bill Annually</span>
        </div>

        {/* Pricing Table */}
        <div className="bb ze i va ki xn yq bc">
          <div className="wc qf pn xo jg">
            {/* Pricing Item - Basic */}
            <div className="animate_top rj sg hh sm vk xm hi nj oj">
              <h4 className="wj kk wm fb">Basic</h4>
              <div className="tc wf xf kg cc">
                <h2 className="fk _j kk wm text-green-500">$19</h2>
                <span className="sc ak kk wm">/per month</span>
              </div>
              <p className="ur dc">No credit card required</p>
              <a href="#" className="ek rg lk ml il gi ri mh tl">Try for free</a>
              <ul className="tc sf bg ob fb">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <p className="kk wm">7-day free trial</p>
            </div>

            {/* Pricing Item - Growth Plan */}
            <div className="animate_top rj sg hh sm vk xm hi nj oj">
              <h4 className="wj kk wm fb">Growth Plan</h4>
              <div className="tc wf xf kg cc">
                <h2 className="fk _j kk wm">$49</h2>
                <span className="sc ak kk wm">/per month</span>
              </div>
              <p className="ur dc">No credit card required</p>
              <a href="#" className="ek rg lk ml il gi ri gh sl">Try for free</a>
              <ul className="tc sf bg ob fb">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <p className="kk wm">7-day free trial</p>
            </div>

            {/* Pricing Item - Premium */}
            <div className="animate_top rj sg hh sm vk xm hi nj oj">
              <h4 className="wj kk wm fb">Premium</h4>
              <div className="tc wf xf kg cc">
                <h2 className="fk _j kk wm">$99</h2>
                <span className="sc ak kk wm">/per month</span>
              </div>
              <p className="ur dc">No credit card required</p>
              <a href="#" className="ek rg lk ml il gi ri mh tl">Try for free</a>
              <ul className="tc sf bg ob fb">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <p className="kk wm">7-day free trial</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Pricing Table End ===== */}

      {/* ===== Projects Start ===== */}
      <section className="pg pj vp mr oj wp nr">
        {/* Section Title Start */}
        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
              We Offer Great Affordable Premium Prices.
            </h2>
            <p className="bb on/5 wo/5 hq">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
            </p>
          </div>
        </div>
        {/* Section Title End */}

        <div className="bb ze ki xn 2xl:ud-px-0 jb">
          {/* Project Tabs */}
          <div className="projects-tab _e bb tc uf wf xf cg rg hh rm vk xm si ti fc">
            <button className="project-tab-btn ek rg ml il vi mi gh lk">All</button>
            <button className="project-tab-btn ek rg ml il vi mi">Branding Strategy</button>
            <button className="project-tab-btn ek rg ml il vi mi">Digital Experiences</button>
            <button className="project-tab-btn ek rg ml il vi mi">Ecommerce</button>
          </div>

          {/* Projects item wrapper */}
          <div className="projects-wrapper tc -ud-mx-5">
            <div className="project-sizer"></div>

            {/* Project Items */}
            <div className="project-item wi fb vd jn/2 to/3 branding ecommerce">
              <div className="c i pg sg z-1">
                <img src="images/project-01.png" alt="Project" />
                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-item wi fb vd jn/2 to/3 digital">
              <div className="c i pg sg z-1">
                <img src="images/project-02.png" alt="Project" />
                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-item wi fb vd jn/2 to/3 branding ecommerce">
              <div className="c i pg sg z-1">
                <img src="images/project-04.png" alt="Project" />
                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-item wi fb vd vo/3 digital ecommerce">
              <div className="c i pg sg z-1">
                <img src="images/project-03.png" alt="Project" />
                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                  <h4 className="ek tj kk hc">Photo Retouching</h4>
                  <p>Branded Ecommerce</p>
                  <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Projects End ===== */}

         {/* ===== Testimonials Start ===== */}
      <section className="hj rp hr">
        {/* Section Title Start */}
        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
              Client’s Testimonials
            </h2>
            <p className="bb on/5 wo/5 hq">
              The impact through our clients’ words.
            </p>
          </div>
        </div>
        {/* Section Title End */}

        <div className="bb ze ki xn ar">
          <div className="animate_top jb cq">
            {/* Slider main container */}
            <div className="swiper testimonial-01">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="i hh rm sg vk xm bi qj">
                    {/* Border Shape */}
                    <span className="rc je md/2 gh xg h q r"></span>
                    <span className="rc je md/2 mh yg h q p"></span>

                    <div className="tc sf rn tn un zf dp">
                      <img className="bf" src="images/images.jpeg" alt="User" />
                      <div>
                        <img src="images/icon-quote.svg" alt="Quote" />
                        <p className="ek ik xj _p kc fb">
                        I greatly appreciated the enthusiasm and energy of our coach, Mr. Ezzeddine Abbassi. His energy is contagious, and his passion for the topics presented is both inspiring and remarkable. Thank you, and wishing you continued success.                        </p>

                        <div className="tc yf vf">
                          <div>
                            <span className="rc ek xj kk wm zb">Oussema MELLOULI</span>
                            <span className="rc">Olympic Champion and World Champion in Swimming</span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <div className="i hh rm sg vk xm bi qj">
                    {/* Border Shape */}
                    <span className="rc je md/2 gh xg h q r"></span>
                    <span className="rc je md/2 mh yg h q p"></span>

                    <div className="tc sf rn tn un zf dp">
                      <img className="bf" src="images/sah.jpeg" alt="User" />
                      <div>
                        <img src="images/icon-quote.svg" alt="Quote" />
                        <p className="ek ik xj _p kc fb">
                        After months of consistent effort, working hard and trying to keep balance between work, studies and personal life. I’m Pmp certified now and feel so fortunate that I got above target score in all domains and obtaining this certification from Project Management Institut. My special thank to THE TEAM, Safiya ZBIDI, Meriem SKIK, Monia Sahbani, Abdelmalek Sfaxi and Imen Gharbi for his support. “…”
                         ~ Anyone Who stops learning is old, Anyone Who keeps learning stay young ~
                        </p>

                        <div className="tc yf vf">
                          <div>
                            <span className="rc ek xj kk wm zb">Sahar JOMLI</span>
                            <span className="rc">Project Manager Reengineering Business Process - ENDA TAMWEEL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="i hh rm sg vk xm bi qj">
                    {/* Border Shape */}
                    <span className="rc je md/2 gh xg h q r"></span>
                    <span className="rc je md/2 mh yg h q p"></span>

                    <div className="tc sf rn tn un zf dp">
                      <img className="bf" src="images/melek.jpeg" alt="User" />
                      <div>
                        <img src="images/icon-quote.svg" alt="Quote" />
                        <p className="ek ik xj _p kc fb">
                         After hard work period I am finally PMP Certified. Special thanks to my family, my wife and daughters who never stopped supporting me, my colleagues « … » and my training classmates « … ». I can’t forget the continious support of Safiya ZBIDI CEO of a special training company The Team : Agile Management & Consulting. « … » Thank you all for giving me the energy and the positive vibes to realize this big carreer’s achievement.
                        </p>
                        <div className="tc yf vf">
                          <div>
                            <span className="rc ek xj kk wm zb">Melek FAkHFAKH</span>
                            <span className="rc">Program Manager - SAFRAN</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                   {/* Navigation */}
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="swiper-button-prev static flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full cursor-pointer">
                     <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.52366 7.83336L7.99366 12.3034L6.81533 13.4817L0.333663 7.00002L6.81533 0.518357L7.99366 1.69669L3.52366 6.16669L13.667 6.16669L13.667 7.83336L3.52366 7.83336Z" />
                     </svg>
                    </div>
                    <div className="swiper-button-next static flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full cursor-pointer">
                     <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                     </svg>
                   </div>
                  </div>
              


            </div>
          </div>
        </div>
      </section>
      {/* ===== Testimonials End ===== */}

      {/* ===== Counter Start ===== */}
      <section className="i pg qh rm ji hp">
        <img src="images/shape-11.svg" alt="Shape" className="of h ga ha ke" />
        <img src="images/shape-07.svg" alt="Shape" className="h ia o ae jf" />
        <img src="images/shape-14.svg" alt="Shape" className="h ja ka" />
        <img src="images/shape-15.svg" alt="Shape" className="h q p" />

        <div className="bb ze i va ki xn br">
          <div className="tc uf sn tn xf un gg">
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">785</h2>
              <p className="ek bk aq">Global Brands</p>
            </div>
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">533</h2>
              <p className="ek bk aq">Happy Clients</p>
            </div>
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">865</h2>
              <p className="ek bk aq">Winning Award</p>
            </div>
            <div className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">346</h2>
              <p className="ek bk aq">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Counter End ===== */}

      {/* ===== Clients Start ===== */}
      <section className="pj vp mr">
        {/* Section Title Start */}
        <div>
          <div className="animate_top bb ze rj ki xn vq">
            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
              Our Partners & Clients
            </h2>
            <p className="bb on/5 wo/5 hq">
            Trusted by leading organizations and innovators.</p>
          </div>
        </div>
        {/* Section Title End */}

        <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
          <div className="wc rf qn zf cp kq xf wf">
            <a href="#" className="rc animate_top">
              <img className="th wl ml il zl om" src="images/uni (1).svg" alt="Clients" />
              
            </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/uni (5).png" alt="Clients" />
              
            </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/uni (1).png" alt="Clients" />
              
            </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/uni (2).png" alt="Clients" />
              
            </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/uni (3).png" alt="Clients" />
             
            </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/uni (4).png" alt="Clients" />
              
               </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/sts.svg" alt="Clients" />

               </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/(6).png" alt="Clients" />

               </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/(0).png" alt="Clients" />

               </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/(8).svg.png" alt="Clients" />

               </a>
            <a href="#" className="rc animate_top">
              <img className="tk ml il zl om" src="images/(9).svg.png" alt="Clients" />

               </a>
            <a href="https://www.sofrecom.com/" className="rc animate_top">
              <img className="tk ml il zl om" src="images/(10).png" alt="Clients" />
            </a>
            
          </div>
        </div>
      </section>
      {/* ===== Clients End ===== */}

      {/* ===== Blog Start ===== */}
      <section className="ji gp uq">
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Latest Blogs & News</h2>
          <p className="bb on/5 wo/5 hq">
            Discover insights, tips, and stories from our community.
          </p>
        </div>

        <BlogList limit={3} /> {/* only show 3 latest blogs */}
      </section>
      {/* ===== Blog End ===== */}

{/* ===== Contact Start ===== */}
<section id="support" className="i pg fh rm ji gp uq">
  {/* Bg Shapes */}
  <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
  <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
  <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
  <img src="images/shape-12.svg" alt="Shape" className="h p s" />
  <img src="images/shape-13.svg" alt="Shape" className="h r q" />

  {/* Section Title Start */}
  <div>
    <div className="animate_top bb ze rj ki xn vq">
      <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Let’s Stay Connected</h2>
      <p className="bb on/5 wo/5 hq">
       Connect with us for updates and opportunities.</p>
    </div>
  </div>
  {/* Section Title End */}

  <div className="i va bb ye ki xn wq jb mo">
    <div className="tc uf sn tf rn un zf xl:gap-10">
      <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
        {/* Bg Shapes */}
        <img src="images/shape-03.svg" alt="Shape" className="h la x wd" />
        <img src="images/shape-06.svg" alt="Shape" className="h la ma ne kf" />

        <div className="fb">
          <h4 className="wj kk wm cc">Email Address</h4>
          <p><a href="#">contact@theteam.com.tn</a></p>
        </div>
        <div className="fb">
          <h4 className="wj kk wm cc">Office Location</h4>
          <p>Impasse1, 14 RUE TAHAR SFAR, 2092 El MANAR II – TUNISIA</p>
        </div>
        <div className="fb">
          <h4 className="wj kk wm cc">Phone Number</h4>
          <p><a href="#">+ 216 31 172 672</a></p>
        </div>
      

        <span className="rc nd rh tm lc fb"></span>

        <div>
          <h4 className="wj kk wm qb">Social Media</h4>
          <ul className="tc wf fg">
            <li>
              <a href="https://www.facebook.com/TheteamTN" className="c tc wf xf ie ld rg ml il tl">
                <svg className="th lm ml il" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z" fill="" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_team_tn/" className="c tc wf xf ie ld rg ml il tl">
                <img src="images/insta.png"  />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-team-tunisie/" className="c tc wf xf ie ld rg ml il tl">
                <svg className="th lm ml il" width="20" height="16" viewBox="0 0 20 16" fill="none"xmlns="http://www.w3.org/2000/svg"
                    >
                  <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill="" />
                        </svg>
              </a>
            </li>
            {/* Other social icons omitted for brevity */}
          </ul>
        </div>
      </div>

      <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="tc sf yo ap zf ep qb">
            <div className=" to/2">
              <label className="rc ac" htmlFor="fullname">Full name</label>
              <input type="text" name="fullname" id="fullname" placeholder="Safiya Zbidi" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>

            <div className=" to/2">
              <label className="rc ac" htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" placeholder="thteam@gmail.com" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>
          </div>

          <div className="tc sf yo ap zf ep qb">
            <div className=" to/2">
              <label className="rc ac" htmlFor="phone">Phone number</label>
              <input type="text" name="phone" id="phone" placeholder="+216 92 600 991" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>

            <div className=" to/2">
              <label className="rc ac" htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Type your subject" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>
          </div>

          <div className="fb">
            <label className="rc ac" htmlFor="message">Message</label>
            <textarea placeholder="Message" rows="4" name="message" id="message" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"></textarea>
          </div>

          <div className="tc xf">
            <button className="vc rg lk gh ml il hi gi _l">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* ===== Contact End ===== */}

{/* ===== CTA Start ===== */}
<section className="i pg gh ji">
  {/* Bg Shape */}
  <img className="h p q" src="images/shape-16.svg" alt="Bg Shape" />

  <div className="bb ye i z-10 ki xn dr">
    <div className="tc uf sn tn un gg">
      <div className="animate_left to/2">
        <h2 className="fk vj zp pr lk ac">
          Join with 5000+ Startups Growing with Base.
        </h2>
        <p className="lk">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
        </p>
      </div>
      <div className="animate_right bf">
        <a href="#" className="vc ek kk hh rg ol il cm gi hi">
          Get Started Now
        </a>
      </div>
    </div>
  </div>
</section>
{/* ===== CTA End ===== */}

<button
        className={`xc wf xf ie ld vg sr gh tr g sa ta _a ${scrollTop ? 'uc' : ''}`}
        onClick={scrollToTop}
      >
        <svg className="uh se qd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </button>
      {/* ====== Back To Top End ===== */}

{/* Pricing Table Script */}
<script>
  {`
    const setup = () => {
      return {
        isNavOpen: false,

        billPlan: 'monthly',

        plans: [
          {
            name: 'Starter',
            price: {
              monthly: 29,
              annually: 29 * 12 - 199,
            },
            features: ['400 GB Storaget', 'Unlimited Photos & Videos', 'Exclusive Support'],
          },
          {
            name: 'Growth Plan',
            price: {
              monthly: 59,
              annually: 59 * 12 - 100,
            },
            features: ['400 GB Storaget', 'Unlimited Photos & Videos', 'Exclusive Support'],
          },
          {
            name: 'Business',
            price: {
              monthly: 139,
              annually: 139 * 12 - 100,
            },
            features: ['400 GB Storaget', 'Unlimited Photos & Videos', 'Exclusive Support'],
          },
        ],
      };
    };
  `}
</script>

<script defer src="bundle.js"></script>


    </main>
  );
};

export default Home;
