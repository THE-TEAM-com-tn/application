import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Review() {
  const [formData, setFormData] = useState({
    fullname: '',
    client_email: '',
    message: '',
    
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
  !formData.fullname.trim() ||
  !formData.client_email.trim() ||
  !formData.message.trim() 
) {
  setStatus('All fields must be filled out before submitting.');
  return;
}
console.log("Sending formData:", formData);

    try {
      const response = await fetch('https://app.the-team.tn/api/review-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({ fullname: '', client_email: '',   message: '' }); // Reset form fields
      } else {
       const errorData = await response.json();
console.error('Error response:', errorData);
setStatus(errorData.message || 'Something went wrong.');

      }
    } catch (error) {
      console.error('Request failed:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };
return (
    <main>
      <Header />
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
              Your opinon matters to us
            </h2>
          </div>
        </div>

        {/* Form */}
        <div className="i va bb ye ki xn wq jb mo">
          <div className="tc uf sn tf rn un zf xl:gap-10">
            <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
              <form onSubmit={handleSubmit}>
                <div className="tc sf yo ap zf ep qb">
                  <div className="vd to/2">
                    <label className="rc ac" htmlFor="fullname">Full name</label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Safiya Zbidi"
                      className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    />
                  </div>

                  <div className="vd to/2">
                    <label className="rc ac" htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="client_email"
                      id="email"
                      value={formData.client_email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    />
                  </div>
                </div>

                <div className="fb">
                  <label className="rc ac" htmlFor="message">Message</label>
                  <textarea
                    placeholder="What did you like or dislike about our service? How can we improve?"
                    rows={4}
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"
                  ></textarea>
                </div>

                <div className="tc xf mt-4">
                  <button type="submit" className="vc text-green-500 lk gh ml il hi gi _l">
                    Send Message
                  </button>
                </div>

                {status && <p className="text-center mt-2 text-sm text-gray-600">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}