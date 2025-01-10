import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <section className="text-center py-1">
      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white mt-8 md:h-[350px]">
    <div className="flex flex-col md:flex-row items-center md:pl-14 h-full">
      <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-2xl">
      OUR SERVICES
        </h1>
        <p className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl drop-shadow-2xl pt-2 pl-4 italic font-normal">
        "Precision in Valuation, Excellence in Advisory"
        </p>
      </div>
    </div>
  </div>
        <section className=" py-12 w-full">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-500 via-blue-600 to-pink-500 pt-2 pb-2 rounded-3xl text-white">AREA OF SERVICES</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 font-semibold">
      {/* First Column */}
      <ul className="space-y-4 text-lg list-disc pl-6 text-left">
        <li>VISA and Education Loan Purpose</li>
        <li>Valuations for Banks, Financial Institutions, NBFC's</li>
        <li>Purchase or Sale of Property or Assets</li>
        <li>Asset Valuation under the Companies Act 2013</li>
        <li>Valuation for Central Government under Direct Tax Laws Taxation</li>
        <li>Valuation for Accounting Purposes (Asset Valuation)</li>
        <li>Valuation in Court Cases, Family Partition, or Divorce Settlements</li>
        <li>Liquidation and Insolvency (under IBBI / IBC, DRT, SARFAESI)</li>
      </ul>

      {/* Second Column */}
      <ul className="space-y-4 text-lg list-disc pl-6 text-left">
        <li>Quantity Surveying and Estimation</li>
        <li>Fixing Fair rent and ground rent</li>
        <li>Architectural and Structural Designs</li>
        <li>3D & 4D Simulations</li>
        <li>Lenders Engineering Services</li>
        <li>Project Management</li>
        <li>Chartered Engineer Certification Services</li>
        <li>Economic Feasibility Studies</li>
      </ul>
    </div>
  </div>
</section>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
