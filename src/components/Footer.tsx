import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


export default function Footer() {
  return (
    <>
   {/* Footer Section */}
            <footer>
            
  <div className="bb zee ki xn 2xl:ud-px-0">
    {/* Footer Top*/}
    <div className="ji gp">
      <div className="tc uf ap gg fp">
        <div className="animate_top zd/2 to/4">
          <a href="index.html">
            <img src="images/logoo.png" alt="Logo" className="om" />
            
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


 </>  );
}

