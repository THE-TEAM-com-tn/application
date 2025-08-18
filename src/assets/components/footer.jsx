import React from "react";

const Footer = () => {
  
  return (
    <footer>
      <div className="bb ze ki xn 2xl:ud-px-0">
        {/* Footer Top */}
        <div className="ji gp">
          <div className="tc uf ap gg fp">
            <div className="animate_top zd/2 to/4">
              <a href="index.html">
                <img src="images/logo-light.svg" alt="Logo" className="om" />
                <img src="images/logo-dark.svg" alt="Logo" className="xc nm" />
              </a>

              <p className="lc fb">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <ul className="tc wf cg">
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
                {/* ... keep the rest of the social icons and footer links here ... */}
              </ul>
            </div>

            {/* Footer link sections (Quick Links, Services, Support, Newsletter) */}
            {/* Keep the rest of the JSX you had here */}
          </div>
        </div>
        {/* Footer Top End */}

        {/* Footer Bottom */}
        <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
          <div className="animate_top">
            <ul className="tc wf gg">
              <li>
                <a href="#" className="xl">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="xl">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="xl">
                  Support
                </a>
              </li>
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
