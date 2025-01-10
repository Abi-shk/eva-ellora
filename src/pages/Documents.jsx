import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Documents = () => {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <section className="text-center py-1">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white mt-8 h-auto md:h-[350px]">
          <div className="flex flex-col md:flex-row items-center md:pl-14 h-full">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-2xl">
                DOCUMENTS
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-2xl pt-6">
                REQUIRED
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 py-10">
          <button className="bg-blue-800 h-[250px] w-full sm:w-[300px] md:w-[400px] text-white p-4 rounded-3xl shadow-md hover:bg-blue-700 flex flex-col justify-center items-center overflow-hidden">
            <h1 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 text-center">Send Us Required Documents</h1>
            <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg font-medium">
              <li>Ownership Proof (Property Tax / Land Tax / Sale Deed / Any Other Proof)</li>
              <li>Owner ID (Aadhar Card and PAN Card)</li>
            </ol>
          </button>
          
          <button className="bg-blue-800 h-[250px] w-full sm:w-[300px] md:w-[400px] text-white p-4 rounded-3xl shadow-md hover:bg-blue-700 flex flex-col justify-center items-center overflow-hidden">
            <h1 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 text-center">Review Report</h1>
            <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg font-medium">
              <li>We will prepare a draft copy as per the applicable rate.</li>
              <li>We will send the draft copy for your review purpose.</li>
              <li>You can suggest changes if any, as per your requirement.</li>
            </ol>
          </button>
          
          <button className="bg-blue-800 h-[250px] w-full sm:w-[300px] md:w-[400px] text-white p-2 rounded-3xl shadow-md hover:bg-blue-700 flex flex-col justify-center items-center ">
            <h1 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 text-center">Get Signed Copy</h1>
            <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg font-medium">
              <li>Once the draft is approved by you, we will prepare the final signed and sealed copy with the letterhead of a government-approved valuer.</li>
              <li>We will provide an instant scanned copy for your records.</li>
              <li>The physical copy will be dispatched on the same day via courier.</li>
            </ol>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Documents;
