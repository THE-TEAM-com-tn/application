import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
    {/* Header */}
      <header className="g s r vd ya cj">
        <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
          

          <div className="vd wo/4 sd qo f ho oo wf yf">
            <nav>
              <ul className="tc _o sf yo cg ep">
                <li></li><a href="index.html" className="xl text-gray-800 hover:text-green-600">Home</a>

                <li><a href="index.html#features" className="xl text-yellow-400">Blog</a></li>
                <li className="c i">
                  <a href="#" className="xl tc wf yf bg text-green-500">
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
            <div className="animate_left xc gn gg jn/2 i">
              <div>
                <img src="images/shape-05.svg" alt="Shape" className="h -ud-left-5 x" />
                <img src="images/about-01-training.png" alt="About" className="ib" />
                <img src="images/about-02-training.png" alt="About" />
              </div>
              <div>
                <img src="images/shape-06.svg" alt="Shape" />
                
              </div>
            </div>
            <div className="animate_right jn/2">
              <h4 className="ek yj mk gb">Why Choose Us ?</h4>
              <h2 className="fk vj zp pr kk wm qb">We Make Our customers happy by giving Best services.</h2>
              <p className="uo">Our know-how and competencies are rooted in our mastery of project management domains, combined with a rich, solid, and diverse experience in managing public sector structures.
This foundation has become our strength in spreading managerial knowledge with the goal of supporting business development and improving organizational performance.</p>
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
{/* ===== Blog Start ===== */}
<section className="ji gp uq">
  {/* Section Title Start */}
  <div>
    <div className="animate_top bb ze rj ki xn vq">
      <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
        Latest Blogs & News
      </h2>
        <p className="bb on/5 wo/5 hq">
           <div className="flex justify-end">
  <a href="./blogs" className="vc ek rg lk gh sl ml il gi hi">
    All Blogs
  </a>
</div>

        </p>
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




    
     
<br>
</br>
<br>
</br>
<br>
</br>
{/*<!-- ===== Services Start ===== -->*/}
      <section className="lj tp kr">
        {/*<!-- Section Title Start -->*/}
        <div>
            <div className="relative z-10 animate_top bb ze rj ki xn vq">
                <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                We Offer The Best Quality Service for You
                </h2>
                <p className="bb on/5 wo/5 hq">
                We are here to ensure your needs are met with precision and care.
                </p>
            </div>
        </div>


        
        {/*<!-- Section Title End -->*/}

        <div className="bb ze ki xn yq mb en">
          <div className="wc qf pn xo ng">
            {/*<!-- Service Item -->*/}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-training.png" alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Training Offer</h4>
              <p>Training in project management (PMP®, Agile, SAFe®, PRINCE2®…)</p>


                <div className="tc tf yo zf mb">
                                <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                                   See our Trainings </a>
                </div>

            </div>

            {/*<!-- Service Item -->*/}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-puzzle.png" alt="Icon" />
              <h4 className="ek zj kk wm nb _b">Offre de conseil</h4>
              <p>Organizational maturity assessments (PM, Agile, quality, etc.)</p>

                <p>Support in establishing a Project Management Office (PMO)</p>

                <p>Definition and deployment of strategic plans</p>

                <p>Consulting in project governance and Agile/SAFe frameworks</p>

                <p>Support in change management and digital transformation</p>
            </div>

            {/*<!-- Service Item -->*/}
            <div className="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icone-software.png" alt="Icon" />
              <h4 className="ek zj kk wm nb _b"> Software Products</h4>
              <p>E-learning platforms</p> 

<p>Personalized learning experiences</p>

<p>Course and certification management</p>

<p>Progress tracking and analytics</p>


            </div>
          </div>
        </div>
    </section>
      {/*<!-- ===== Services End ===== -->*/}

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
            Client’s Testimonials
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
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
I greatly appreciated the enthusiasm and energy of our coach, Mr. Ezzeddine Abbassi. His energy is contagious, and his passion for the topics covered is inspiring and remarkable.
Thank you and best wishes going forward.                </p>
                  <span className="rc ek xj kk wm zb block">Oussema Mellouli</span>
                  <span className="rc">Olympic and World Champion in Swimming</span>
                </div>
              </SwiperSlide>
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    Thank you for the warm welcome and the quality of the training content. The trainer, Ms. Safiya, is highly competent and attentive. She successfully shared her knowledge and experience while encouraging discussions among participants.
I highly recommend the PMP training to my entire network on Facebook, LinkedIn, and beyond, at THE TEAM.
Thank you also for the gifts 🙂
                  </p>
                  <span className="rc ek xj kk wm zb block">Tarek KSONTINI</span>
                  <span className="rc">Pre-Project & Costing Manager - SAFRAN</span>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    I highly recommend THE TEAM for management training. I sincerely thank Ms. Safiya, the trainer, for her excellent tools and support, which helped me obtain the PMP certificate.
                  </p>
                  <span className="rc ek xj kk wm zb block">Rima Ben Amor</span>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    After months of consistent effort, balancing work, studies, and personal life, I am now PMP certified and fortunate to have scored "Above Target" in all domains. I obtained this certification from the Project Management Institute. Special thanks to THE TEAM, Safiya ZBIDI, Meriem SKIK, Monia Sahbani, Abdelmalek Sfaxi, and Imen Gharbi for their support. 
~ Anyone who stops learning is old; anyone who keeps learning stays young ~
                  </p>
                  <span className="rc ek xj kk wm zb block">Sahar JOMLI</span>
                  <span className="rc">Project Manager, Business Process Reengineering - ENDA TAMWEEL</span>
                </div>
              </SwiperSlide>

              {/* Slide 5 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    Another international achievement 😊😊 This time from the American institute PMI. "..." Many thanks to Ms. Safiya ZBIDI for sharing her know-how and life experience with us. Thanks to the entire team at The Team. Thanks to all my colleagues.
                  </p>
                  <span className="rc ek xj kk wm zb block">Chawki Boumallouga</span>
                  <span className="rc">Project Manager and Dynamics NAV Expert</span>
                </div>
              </SwiperSlide>

              {/* Slide 6 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    I’m happy to share that I’ve obtained a new certification: Entry Certificate in Business Analysis™ from IIBA!
Thanks to my coaches Abdelkader AYED CBAP®, PMP®, CISA®, COBIT5® and Ms. Safiya Ben Abderrahmen ZBIDI, MBA, PMP, ACP, RMP, PECB, PSM, CBAP.
Thanks to The Team: Agile Management & Consulting
                  </p>
                  <span className="rc ek xj kk wm zb block">Anis FERHANI</span>
                </div>
              </SwiperSlide>

              {/* Slide 7 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    Excellent welcome, professionalism, and quality training. Special thanks to Ms. Meriem Skik for ensuring the smooth progress of the training.
Bravo and keep up the good work.
A wonderful experience that I sincerely look forward to repeating.
                  </p>
                  <span className="rc ek xj kk wm zb block">Radhia Satouri</span>
                </div>
              </SwiperSlide>

            {/* Slide 8 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
A truly effective experience. Thank you for the method, the atmosphere, and the group’s energy.
Thanks to Ms. Safia, a very pleasant and lively person. She provided a content-rich training with many exercises, promoting group work in a respectful, supportive, and encouraging environment.
I am very satisfied with both the content and the delivery.                  </p>
                  <span className="rc ek xj kk wm zb block">Mohamed JAFFEL</span>
                  <span className="rc">Methods Manager at FIGIAC Aero Tunisie
Feedback on PRACTICAL MANAGEMENT Training</span>
                </div>
              </SwiperSlide>

              {/* Slide 9 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
                    J’ai eu la chance d’assister à une session de formation sur le management de projet animée par Mr Ezzedine Abassi. J’ai découvert un professionnel de grande qualité. Il possède un talent avéré pour le management de projet. Bienveillant, motivant et empathique. Son énergie est contagieuse et sa passion pour les sujets présentés sont inspirantes et remarquables.


                  </p>
                  <span className="rc ek xj kk wm zb block">Mouna Fridhi</span>
                  <span className="rc">Experte Technique en Transformation Digitale - GIZ</span>
                </div>
              </SwiperSlide>

              {/* Slide 10 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
I have just celebrated earning my PMP certification with you, and I am deeply grateful for your help and efforts in the training. I wish to express my sincere appreciation and hope to continue advancing in this field to enhance my performance.


                  </p>
                  <span className="rc ek xj kk wm zb block">Ammar Abdelkarim</span>
                </div>
              </SwiperSlide>

{/* Slide 11 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
I highly recommend attending the training sessions organized by The Team. Personally, I am very satisfied with the trainings I attended, such as PMP and PSM & PSPO. Many thanks to Ms. Safiya Zbidi and the entire team at THE TEAM.

                  </p>
                  <span className="rc ek xj kk wm zb block">Ammar Abdelkarim</span>
                </div>
              </SwiperSlide>

              {/* Slide 1 */}
              <SwiperSlide>
                <div className="i hh rm sg vk xm bi qj text-center p-8 rounded shadow bg-green-50">
                  <img src="/images/testimonial.png" alt="User" className="w-20 h-20 mx-auto rounded-full mb-4" />
                  <img src="/images/icon-quote.svg" alt="Quote" className="mx-auto mb-4" />
                  <p className="ek ik xj _p kc fb mb-4">
I highly recommend attending the training sessions organized by The Team. Personally, I am very satisfied with the trainings I attended, such as PMP and PSM & PSPO. Many thanks to Ms. Safiya Zbidi and the entire team at THE TEAM.

                  </p>
                  <span className="rc ek xj kk wm zb block">Ammar Abdelkarim</span>
                </div>
              </SwiperSlide>

             
            </Swiper>
          </div>
        </div>
      </section>
      {/* ===== Testimonials End ===== */}


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



      {/* Footer Section */}
         <footer>
            
  <div className="bb ze ki xn 2xl:ud-px-0">
    {/* Footer Top*/}
    <div className="ji gp">
      <div className="tc uf ap gg fp">
        <div className="animate_top zd/2 to/4">
          <a href="index.html">
            <img src="images/logo.png" alt="Logo" className="om" />
            
          </a>

          <p className="lc fb">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className="tc wf cg">
            <li>
              <a href="#">
                <svg className="vh ul cl il" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG PATH*/}
                </svg>
              </a>
            </li>
            {/* More social icons*/}
          </ul>
        </div>
<div className="absolute top-0 left-0 m-2 p-2 bg-white rounded shadow-md z-10">
  <div className="text-sm font-medium text-gray-700">
    <a
      href="https://maps.google.com/maps?ll=36.840394,10.154915&z=16&t=m&hl=fr&gl=TN&mapclient=embed&cid=16889753832009446863"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 transition-colors"
    >
      📍 Agrandir le plan
    </a>
  </div>
</div>


       <div className="grid grid-cols-2 gap-8">
  <div className="animate_top">
    <h4 className="kk wm tj ec">Services</h4>
    <ul>
      <li><a href="#" className="sc xl vb">Training Offer</a></li>
      <li><a href="#" className="sc xl vb">Consulting Services</a></li>
      <li><a href="#" className="sc xl vb">Software Products</a></li>
    </ul>
  </div>

  <div className="animate_top">
    <h4 className="kk wm tj ec">Support</h4>
    <ul>
      <li><a href="#" className="sc xl vb">The Team</a></li>
      <li><a href="#" className="sc xl vb">Training</a></li>
      <li><a href="#" className="sc xl vb">Our Blog</a></li>
      <li><a href="#" className="sc xl vb">Contact Us</a></li>
    </ul>
  </div>
</div>

      </div>
    </div>
    {/* Footer Top*/}

    {/*Footer Bottom */}
    <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
      <div className="animate_top">
        <ul className="tc wf gg">
          <li><a href="#" className="xl">English</a></li>
          <li><a href="#" className="xl">Privacy Policy</a></li>
          <li><a href="#" className="xl">Support</a></li>
        </ul>
      </div>

      <div className="animate_top">
        <p>&copy; 2025 Base. All rights reserved</p>
      </div>
    </div>
    {/*Footer Bottom */}
  </div>
</footer>

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