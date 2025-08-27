import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer>
      <div className="bb ze ki xn 2xl:ud-px-0">
        {/* Footer Top */}
        <div className="ji gp">
          <div className="tc uf ap gg fp">
            <div className="animate_top zd/2 to/4">
              <a href="index.html">
                {/* Logo light - visible seulement quand darkMode est false */}
                <img
                  className={`om ${darkMode ? "hidden" : "block"}`}
                  src="images/the_team.png"
                  alt="Logo Light"
                />

                {/* Logo dark - visible seulement quand darkMode est true */}
                <img
                  className={`xc nm ${darkMode ? "block" : "hidden"}`}
                  src="images/the_team_dark.png"
                  alt="Logo Dark"
                />
              </a>

              <p className="lc fb">
                The Tunisian Establishment for Agile Management
              </p>

              {/* Social Icons */}
              <ul className="tc wf cg">
                {/* Facebook */}
                <li>
                  <a href="#">
                    <svg
                      className="vh ul cl il"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>

                {/* Twitter */}
                <li>
                  <a href="#">
                    <svg
                      className="vh ul cl il"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>

                {/* LinkedIn */}
                <li>
                  <a href="#">
                    <svg
                      className="vh ul cl il"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>

                {/* Dribbble */}
                <li>
                  <a href="#">
                    <svg
                      className="vh ul cl il"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1508)">
                        <path d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.70301 5.63814 10.1708 5.82293 10.59 6.0921C10.984 6.3391 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.77 8.1211 11.77 8.7141C11.77 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.77 12.8691C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.77 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3825 9.92084 18.6165 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1508">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer link sections */}
            <div className="vd ro tc sf rn un gg vn">
              <div className="animate_top">
                <h4 className="kk wm tj ec">Quick Links</h4>
                <ul>
                  <li><a href="#" className="sc xl vb">Home</a></li>
                  <li><a href="#" className="sc xl vb">Calendar</a></li>
                  <li>
                    <a href="#" className="sc xl vb">
                      Blogs <span className="sc ek uj lk nh rg zi _i nc">Blog</span>
                    </a>
                  </li>
                  <li><a href="#" className="sc xl vb">Pricing</a></li>
                </ul>
              </div>

              <div className="animate_top">
                <h4 className="kk wm tj ec">Training</h4>
                <ul>
                  <li><a href="#" className="sc xl vb">Agility</a></li>
                  <li><a href="#" className="sc xl vb">Business Analysis</a></li>
                  <li><a href="#" className="sc xl vb">Lean Management</a></li>
                  <li><a href="#" className="sc xl vb">Project Management</a></li>
                  <li><a href="#" className="sc xl vb">Process Management</a></li>
                  <li><a href="#" className="sc xl vb">Strategic Management</a></li>
                </ul>
              </div>

              <div className="animate_top">
                <h4 className="kk wm tj ec">Support</h4>
                <ul>
                  <li><a href="#" className="sc xl vb">Complaint</a></li>
                  <li><a href="#" className="sc xl vb">Tailored need</a></li>
                  <li><a href="#" className="sc xl vb">Review</a></li>
                  
                </ul>
              </div>

              <div className="animate_top">
                
                  <div className="i">
                       
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* Footer Top End */}

        {/* Footer Bottom */}
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
        {/* Footer Bottom End */}
      </div>
    </footer>
  );
};

export default Footer;
