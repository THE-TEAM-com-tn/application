import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';




export default function Footer() {

  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    fetch('https://app.the-team.tn/api/landing-page')
        .then(res => res.json())
        .then(data => setFooterData(data));
  }, []);

  return (
    <>
   {/* Footer Section */}
            <footer>
            
  <div className="bb zee ki xn 2xl:ud-px-0">
    {/* Footer Top*/}
    <div className="ji gp">
      <div className="tc uf ap gg fp">
        <div className="animate_top zd/2 to/4">

          {/* Map Column */}
          <div className="animate_top flex justify-center items-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0867425077995!2d10.152340376343352!3d36.84039856543168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd331d1cc461ed%3A0xea64759fdcb735cf!2sTHE%20TEAM%20%7C%20The%20Tunisian%20Establishment%20for%20Agile%20Management!5e0!3m2!1sfr!2stn!4v1750711497246!5m2!1sfr!2stn"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="rounded-lg shadow-md"
            ></iframe>
          </div>

         {/* <a href="index.html">
            <img src="images/logoo.png" alt="Logo" className="om" />
            
          </a>

          <p className="lc fb">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}



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


        <div className="grid grid-cols-3 gap-8">

          <div className="animate_top">
            <h4 className="kk wm tj ec">Contact</h4>
            <ul>
              <li>
                {/*<span className="sc xl vb">Address:</span>*/}
                 <a
                     href={footerData?.footer_gmaps_url || ''}
                     className="ml-2 sc xl vb"
                 >
                  <span className="ml-2">{"12 cités des médecins, Manar 2, Tunis" || 'Loading...'}</span>

                </a>
              </li>
              <li>
                {/* <span className="sc xl vb">Phone:</span>*/}
                <span className="sc xl vb">{footerData?.footer_phone_number || 'Loading...'}</span>
              </li>
              <li>
               {/* <span className="sc xl vb">Mobile:</span>*/}
                <span className="sc xl vb">{footerData?.footer_mobile_number || 'Loading...'}</span>
              </li>
              <li>
                <span className="sc xl vb">
                <a
                    href={`mailto:${footerData?.footer_contact_email || ''}`}

                    className="ml-2 sc xl vb"
                >
                  {footerData?.footer_contact_email || 'Loading...'}
                </a></span>
              </li>
            </ul>
          </div>

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

