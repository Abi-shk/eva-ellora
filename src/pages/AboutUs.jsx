import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const AboutUs = () => {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <section className="text-center py-1">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white mt-8 md:h-[350px]">
          <div className="flex flex-col md:flex-row items-center md:pl-14 h-full">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-4xl font-bold drop-shadow-2xl underline text-center">
                ABOUT US
              </h1>
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-medium drop-shadow-2xl p-8 sm:p-12 lg:p-8 md:text-left">
                Welcome to EVAS Property Valuation Services! We specialize in assisting you with obtaining your Property Valuation Certificate for VISA purposes, certified by government-approved Chartered Engineers and Valuers. Our services are exclusively available across Kerala. Contact us today for your Valuation Certificate needs!
              </p>
            </div>
          </div>
        </div>

        <MainContent />

      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
