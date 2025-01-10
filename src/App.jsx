import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Documents from './pages/Documents';
import ContactUs from './pages/ContactUs';
import Enquiry from './pages/Enquiry';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/enquiry/:pagenumber" element={<Enquiry />} />
      </Routes>
    </div>
  );
};

export default App;
