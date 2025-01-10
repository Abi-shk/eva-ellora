import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <section className="text-center py-1">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white mt-8 h-auto md:h-[350px]">
          <div className="flex flex-col md:flex-row items-center justify-center md:pl-14 h-full">
            <div className="text-center items-center justify-center md:text-left">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold drop-shadow-2xl italic">
                EVAS
              </h1>
              <p className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-2xl pt-2">
                ELLORA VALUATION & ADVISORY SERVICES
              </p>
              <p className="italic font-normal text-3xl">
                "Precision in Valuation, Excellence in Advisory"
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-6">Contact Us</h1>
        <p className="text-2xl mt-6 px-8 font-medium">
          We are here to help you with all your property valuation needs. Reach out to us using the details below.
          <br /><br />Office Hours: 9.00AM - 6.00PM
        </p>

        <div className="flex justify-center items-center w-full p-8">
          <div className="w-full max-w-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.331117457237!2d76.28562634458001!3d10.010021072035245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0f70bd89e7%3A0x9c18ff3e65dd4516!2sMamangalam%2C%20Elamakkara%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1736181211416!5m2!1sen!2sin"
              className="border-0 w-full h-[400px] md:h-[400px] rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
