import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Calendar() {
  return (
    <>
      <Header/>
      

      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#259d79]">
            Calendrier
          </h1>
          <div className="text-center text-gray-500 italic">Calendrier en cours de développement.</div>
        </section>
        <Footer/>
        </main>
        </>
    );
}
