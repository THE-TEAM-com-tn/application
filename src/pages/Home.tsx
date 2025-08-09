import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const logoItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8,
      type: 'spring',
      stiffness: 100
    } 
  }
};

const rightSlideIn = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const leftSlideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn"
    }
  }
};


export default function Home() {
  return (
    <>
      <Header />

      

      <section className="gj do ir hj sp jr i pg w-full">
  {/* Conteneur des images */}
  <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
    <img src="images/shape-01" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
    <img src="images/shape-02" alt="shape" className="xc 2xl:ud-block h u p va" />
    <img src="images/shape-03" alt="shape" className="xc 2xl:ud-block h v w va" />
    <img src="images/shape-04-green.svg" alt="shape" className="h q r" />
    <img src="images/hero.png" alt="Woman" className="h q r ua max-w-full" />
  </div>

  {/* Contenu texte */}
  <div className="bb ze ki xn 2xl:ud-px-0 max-w-screen-2xl mx-auto">
    <div className="tc _o">
      <motion.div 
        className="animate_left jn/2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="fk vj zp or kk wm wb" variants={logoItem}>
          <img alt="Logo" className="h-6 w-auto ml-0" src="/images/logo.png" />
        </motion.h1>
        
        <motion.p className="fq" variants={item}>
          The Team is a consulting agency specializing in digital transformation, marketing strategy,
          and technological support. For several years, we have been helping businesses grow by
          providing innovative, tailored, high-impact solutions.
        </motion.p>

        <motion.div className="tc tf yo zf mb" variants={item}>
          <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l hover:animate-pulse"
            >Get Started Now</a
          >

          <span className="tc sf">
            <a href="#" className="inline-block ek xj kk wm hover:animate-bounce"> Call us (0123) 456 – 789 </a>
            <span className="inline-block">For any question or concern</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>





  



      {/* Features Section 
      <section id="features">
        <div className="bb ze ki yn 2xl:ud-px-12.5">
          <div className="tc uf zo xf ap zf bp mq">
            {['Agility', 'Engagement', 'Respect'].map((title, i) => (
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
*/}
      {/* About Section */}
<section className="ji gp uq 2xl:ud-py-35 pg">
  <div className="bb ze ki xn wq">
    <div className="tc wf gg qq">
      <motion.div 
        className="animate_left xc gn gg jn/2 i"
        variants={leftSlideIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div>
          <img src="images/shape-05.svg" alt="Shape" className="h -ud-left-5 x" />
          <img src="images/about-01-training.png" alt="About" className="ib" />
          <img src="images/about-02-training.png" alt="About" />
        </div>
        <div>
          <img src="images/shape-06.svg" alt="Shape" />
        </div>
      </motion.div>

      <motion.div 
        className="animate_right jn/2"
        variants={rightSlideIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h4 
          className="ek yj mk "style={{ color: '#FFD700' }}
          variants={fadeIn}
        >
          Why Choose Us ?
        </motion.h4>
        
        <motion.h2 
          className="fk vj zp pr kk wm qb"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          We Make Our customers happy by giving Best services.
        </motion.h2>
        
        <motion.p 
          className="uo"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          Our know-how and competencies are rooted in our mastery of project management domains, 
          combined with a rich, solid, and diverse experience in managing public sector structures.
          This foundation has become our strength in spreading managerial knowledge with the goal 
          of supporting business development and improving organizational performance.
        </motion.p>
        
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" className="vc wf hg mb">
            <span className="tc wf xf be dd rg i gh ua">
              <span className="nf h vc yc vd rg gh qk -ud-z-1"></span>
              <img src="images/icon-play.svg" alt="Play" />
            </span>
            <span className="kk">SEE HOW WE WORK</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
{/* ===== Blog Start ===== */}
<section className="ji gp uq">
  {/* Section Title Start */}
  <div>
    <div className="animate_top bb ze rj ki xn vq text-center">
  <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
    Latest Blogs & News
  </h2>
  <div className="mt-6"> {/* Adjust margin as needed */}
    <a href="./blogs" className="vc ek rg lk gh sl ml il gi hi inline-block">
      All Blogs
    </a>
  </div>
</div>
  </div>
  {/* Section Title End */}

  <div className="bb ye ki xn vq jb jo">
    <div className="wc qf pn xo zf iq">
      {["01", "02", "03"].map((n, idx) => (
        <div key={idx} className="animate_top sg vk rm xm">
          <div className="c rc i z-1 pg">
            <img className="w-full" src={`images/blog-${n}.png`} alt="Blog" />
            <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
              <a href="./blog-single.html" className="vc ek rg lk gh sl ml il gi hi">
                Read More
              </a>
            </div>
          </div>
          <div className="yh">
            <div className="tc uf wf ag jq">
              <div className="tc wf ag">
                <img src="images/icon-man.svg" alt="User" />
                <p>Musharof Chy</p>
              </div>
              <div className="tc wf ag">
                <img src="images/icon-calender.svg" alt="Calender" />
                <p>25 Dec, 2025</p>
              </div>
            </div>
            <h4 className="ek tj ml il kk wm xl eq lb">
              <a href="blog-single.html">
                {[
                  "Free advertising for your online business",
                  "9 simple ways to improve your design skills",
                  "Tips to quickly improve your coding speed."
                ][idx]}
              </a>
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ===== Blog End ===== */}     

{/* ===== Services Start ===== */}
<section className="lj tp kr">
  {/* Section Title Start */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
  >
    <div className="relative z-10 bb ze rj ki xn vq">
      <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
        We Offer The Best Quality Service for You
      </h2>
      <p className="bb on/5 wo/5 hq">
        We are here to ensure your needs are met with precision and care.
      </p>
    </div>
  </motion.div>
  {/* Section Title End */}

  <div className="bb ze ki xn yq mb en">
    <div className="wc qf pn xo ng">
      {/* Service Item 1 */}
      <motion.div 
        className="sg oi pi zq ml il am cn _m"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
        }}
      >
        <div className="flex justify-center mb-4"> {/* Centered icon container */}
          <img src="images/icon-training.png" alt="Icon" className="mx-auto" />
        </div>
        <h4 className="ek zj kk wm nb _b text-center">Training Offer</h4>
        <p className="text-center">Training in project management (PMP®, Agile, SAFe®, PRINCE2®...)</p>

        <div className="tc tf yo zf mb mt-6 flex justify-center">
          <a href="#" className="vc ek rg lk gh sl ml il gi hi !text-white hover:!bg-yellow-500 transition-colors duration-300">
            See our Trainings
          </a>
        </div>
      </motion.div>

      {/* Service Item 2 */}
      <motion.div 
        className="sg oi pi zq ml il am cn _m"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
        }}
      >
        <div className="flex justify-center mb-4"> {/* Centered icon container */}
          <img src="images/icon-puzzle.png" alt="Icon" className="mx-auto" />
        </div>
        <h4 className="ek zj kk wm nb _b text-center">Offre de conseil</h4>
        <p className="text-center">Organizational maturity assessments (PM, Agile, quality, etc.)</p>
        <p className="text-center">Support in establishing a Project Management Office (PMO)</p>
        <p className="text-center">Definition and deployment of strategic plans</p>
        <p className="text-center">Consulting in project governance and Agile/SAFe frameworks</p>
        <p className="text-center">Support in change management and digital transformation</p>
      </motion.div>

      {/* Service Item 3 */}
      <motion.div 
        className="sg oi pi zq ml il am cn _m"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
        }}
      >
        <div className="flex justify-center mb-4"> {/* Centered icon container */}
          <img src="images/icone-software.png" alt="Icon" className="mx-auto" />
        </div>
        <h4 className="ek zj kk wm nb _b text-center">Software Products</h4>
        <p className="text-center">E-learning platforms</p>
        <p className="text-center">Personalized learning experiences</p>
        <p className="text-center">Course and certification management</p>
        <p className="text-center">Progress tracking and analytics</p>
      </motion.div>
    </div>
  </div>
</section>
{/* ===== Services End ===== */}


<section className="gj do ir hj sp jr i pg w-full min-h-[80vh] flex items-center">
  {/* Content Container */}
<div className="bb ze ki xn 2xl:ud-px-0 max-w-screen-2xl mx-auto flex flex-row items-center justify-between gap-8">    
    {/* Text Content - Left Side */}
    <motion.div 
      className="tc _o w-full lg:w-1/2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.8,
            ease: "easeOut"
          }
        }
      }}
    >
      <div className="animate_left jn/2">
        <h1 className="fk or kk mb-6 text-4xl md:text-5xl lg:text-6xl" >
          Do you have a specific need that requires tailored support?
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Développez l'habitude d'utiliser nos services pour vous et votre équipe pour développer des solutions sur mesure qui vous permettront d'accomplir efficacement votre rôle.
        </p>

        <div className="tc xf">
          <a href="#" className="vc ek rg lk gh sl ml il gi hi !text-white hover:!bg-yellow-500 transition-colors duration-300">
            Submit your Request
          </a>
        </div>
      </div>
    </motion.div>

    {/* Image Content - Right Side */}
    <motion.div
      className="w-full lg:w-1/2 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.8,
            ease: "easeOut"
          }
        }
      }}
    >
      <div className="animate_right relative">
        {/* Replace with your actual image */}
        <img 
          src="images/shape-home.png" 
          alt="Tailored support illustration"
         className="rounded-lg shadow-xl h-auto max-w-[600px] w-full"
        />
      </div>
    </motion.div>
  </div>
</section>

{/* ===== Clients Start ===== */}
<section className="pj vp mr">
  {/* Section Title Start */}
  <div>
    <div className="animate_top bb ze rj ki xn vq">
      <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
        Trusted by Global Brands
      </h2>
    </div>
  </div>
  {/* Section Title End */}

  <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
    <div className="wc rf qn zf cp kq xf wf ">
      {[4,5,6,7].map((n) => (
        <a key={n} href="#" className="rc animate_top">
          <img className="th wl ml il zl om" src={`images/client-0${n}.png`} alt="Clients" />
        </a>
      ))}
      {[2,3].map((n) => (
        <a key={n} href="#" className="rc animate_top">
          <img className="th wl ml il zl om" src={`images/client-0${n}.jpg`} alt="Clients" />
        </a>
      ))}
    </div>
  </div>
</section>
{/* ===== Clients End ===== */}


{/* ===== Testimonials Start ===== */}
<section className="hj rp hr">
  {/* Section Title Start */}
  <div className="animate_top bb ze rj ki xn vq text-center">
    <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
      Client's Testimonials
    </h2>
  </div>
  {/* Section Title End */}

  <div className="bb ze ki xn ar">
    <div className="animate_top jb cq">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="relative"
      >
        {/* Slide 1 - With quote icon and proper italics */}
        <SwiperSlide>
          <div className="flex flex-row items-start p-8 rounded-lg shadow bg-green-50">
            {/* Larger image container */}
            <div className="mr-10 w-[220px] flex-shrink-0">
              <img 
                src="/images/oussema-mellouli.png" 
                alt="User" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Text content with quote icon and italics */}
            <div className="flex-1">
              <img src="/images/icon-quote.svg" alt="Quote" className="mb-4" />
              <div className="mb-6">
                <p className="ek ik xj _p kc fb italic"> {/* Italic applied here */}
                  I greatly appreciated the enthusiasm and energy of our coach, Mr. Ezzeddine Abbassi. His energy is contagious, and his passion for the topics covered is inspiring and remarkable.
                  Thank you and best wishes going forward.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <span className="rc ek xj kk wm zb block not-italic">Oussema Mellouli</span> {/* Not italic */}
                <span className="rc not-italic">Olympic and World Champion in Swimming</span> {/* Not italic */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-row items-start p-8 rounded-lg shadow bg-green-50">
            <div className="mr-10 w-[220px] flex-shrink-0">
              <img 
                src="/images/tarekksontini.png" 
                alt="User" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <img src="/images/icon-quote.svg" alt="Quote" className="mb-4" />
              <div className="mb-6">
                <p className="ek ik xj _p kc fb italic">
                  Thank you for the warm welcome and the quality of the training content. The trainer, Ms. Safiya, is highly competent and attentive.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <span className="rc ek xj kk wm zb block not-italic">Tarek KSONTINI</span>
                <span className="rc not-italic">Pre-Project & Costing Manager - SAFRAN</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>

{/* Team Section */}


      <section className="i pg ji gp uq">
        
        <span className="rc h s r vd fd/5 fh rm"></span>
        <img src="images/shape-08.svg" alt="Shape Bg" className="h q r absolute z-0" />
        <img src="images/shape-09.svg" alt="Shape" className="of h y z/2" />
        <img src="images/shape-10.svg" alt="Shape" className="h _ aa" />
        <img src="images/shape-11.svg" alt="Shape" className="of h m ba" />

        
       <div>
            <div className="relative z-10 animate_top bb ze rj ki xn vq">
                <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                Meet With Our Dedicated Team
                </h2>
                <p className="bb on/5 wo/5 hq">
                We are here to ensure your needs are met with precision and care.
                </p>
            </div>
        </div>

        

        <div className="bb ze i va ki xn xq jb jo">
          <div className="wc qf pn xo gg cp">
            {/*<!-- Team Item -->*/}
            <div className="animate_top rj">
              <div className="c i pg z-1">
                <img className="vd" src="images/safiyazbidi.jpg" alt="Team" />

                <div className="ef im nl il">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                  <span className="h s p rc vd hd mh va"></span>
                  <div className="h s p vd ij jj xa">
                    <ul className="tc xf wf gg">
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="yj go kk wm ob zb">Safiya Zbidi</h4>
              <p>CEO and Business management consultant
PMP trainer and coach
Certified in: MBA®, PMP®, TSPM™, PECB®, PSM™ I, ACP ® ,RMP ®</p>
            </div>

            {/*<!-- Team Item -->*/}
            <div className="animate_top rj">
              <div className="c i pg z-1">
                <img className="vd" src="images/team-02.png" alt="Team" />

                <div className="ef im nl il">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                  <span className="h s p rc vd hd mh va"></span>
                  <div className="h s p vd ij jj xa">
                    <ul className="tc xf wf gg">
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="yj go kk wm ob zb">Monia SAHBANI</h4>
              <p>Director of Training and Certification Department</p>
            </div>

            {/*<!-- Team Item -->*/}
            <div className="animate_top rj">
              <div className="c i pg z-1">
                <img className="vd" src="images/team-03.png" alt="Team" />

                <div className="ef im nl il">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                  <span className="h s p rc vd hd mh va"></span>
                  <div className="h s p vd ij jj xa">
                    <ul className="tc xf wf gg">
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="uh vl ml il" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="yj go kk wm ob zb">Imen GHARBI</h4>
              <p>Project Management Consultant
Tender Manager
Certified in: TSPM™,PSM™,SFC™, SSYB™
</p>
            </div>
          </div>
        </div>
      </section>
{/* ===== Contact Start ===== */}
<section id="support" className="i pg fhh rm ji gp uq">
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
        Let’s Stay Connected
      </h2>
      <p className="bb on/5 wo/5 hq">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
      </p>
    </div>
  </div>
  {/* Section Title End */}
            
  <div className="i va bb ye ki xn wq jb mo">
    <div className="tc uf sn tf rn un zf xl:gap-10">
      <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
        {/* Bg Shapes */}
        <img src="images/shape-03.svg" alt="Shape" className="h la x wd" />
        <img src="images/shape-06.svg" alt="Shape" className="h la ma ne kf" />
            <br>
        </br><br>
        </br><br>
        </br>
        <div className="fb">
          <h4 className="wj kk wm cc">Email Address</h4>
          <p><a href="#">service.desk@theteam.com.tn</a></p>
        </div>
        <div className="fb">
          <h4 className="wj kk wm cc">Office Location</h4>
          <p>12 cités des médecins, par l'avenue Taher Sfar, Tunis 2092</p>
        </div>
        <div className="fb">
          <h4 className="wj kk wm cc">Phone Number</h4>
          <p><a href="#">+216 92 600 991</a></p>
        </div>
        <br>
        </br>
            <br>
        </br><br>
        </br>

        <span className="rc nd rh tm lc fb"></span>

        <div>
          <h4 className="wj kk wm qb">Social Media</h4>
          <ul className="tc wf fg">
            <li>
              <a href="https://www.facebook.com/people/The-Team-The-Tunisian-Establishment-for-Agile-Management/61564380223219/?_rdr"
               className="c tc wf xf ie ld rg ml il tl">
                <svg className="th lm ml il" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z" fill="" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-team-tunisie/posts/?feedView=all" className="c tc wf xf ie ld rg ml il tl">
                <svg className="th lm ml il" width="20" height="20" viewBox="0 0 24 24" fill="#259d79 " xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.98 8.98H14v2.09h.09c.7-1.33 2.42-2.09 3.97-2.09 4.25 0 5.04 2.8 5.04 6.43V24h-5v-7.33c0-1.75-.03-4-2.44-4-2.45 0-2.83 1.9-2.83 3.87V24h-5V8.98z"/>
                </svg>
              </a>
            </li>
            
            {/* Remaining social media links */}
          </ul>
        </div>
      </div>

      <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="tc sf yo ap zf ep qb">
            <div className="vd to/2">
              <label className="rc ac" htmlFor="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Safiya Zbidi"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>

            <div className="vd to/2">
              <label className="rc ac" htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>
          </div>

          <div className="tc sf yo ap zf ep qb">
            <div className="vd to/2">
              <label className="rc ac" htmlFor="phone">Phone number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+216 92 600 991"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>

            <div className="vd to/2">
              <label className="rc ac" htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Type your subject"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>
          </div>

          <div className="fb">
            <label className="rc ac" htmlFor="message">Message</label>
            <textarea
              placeholder="Message"
              rows="4"
              name="message"
              id="message"
              className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"
            ></textarea>
          </div>

          <div className="tc xf">
                        <button className="vc text-green-500 lk gh ml il hi gi _l">Send Message</button>

          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* ===== Contact End ===== */}

<Footer />

      
{/* ====== Back To Top Start ===== */}
<button
  className="xc wf xf ie ld vg sr gh tr g sa ta _a"
  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
>
  <svg className="uh se qd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
  </svg>
</button>
    </>
  );
}