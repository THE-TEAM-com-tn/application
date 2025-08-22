import React from 'react';

export default function Devis() {
    return (
        <main>
      
<section id="support" className="i pg  rm ji gp uq">
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
              Do you have a
              specific need that
              requires tailored support?
            </h2>
          </div>
        </div>

        <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="tc sf yo ap zf ep qb">
            <div className="vd to/2">
              <label className="rc ac" htmlFor="fullname">Full name</label>
              <input type="text" name="fullname" id="fullname" placeholder="Devid Wonder" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>

            <div className="vd to/2">
              <label className="rc ac" htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" placeholder="example@gmail.com" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>
          </div>

          <div className="tc sf yo ap zf ep qb">
            <div className="vd to/2">
              <label className="rc ac" htmlFor="phone">Phone number</label>
              <input type="text" name="phone" id="phone" placeholder="+009 3342 3432" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
            </div>

            <div className="vd to/2">
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
</section>
        </main>
        );
}