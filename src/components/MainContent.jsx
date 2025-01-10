import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => (
  <main className="text-center py-6 px-4">
    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-gray-700">
      Are You Looking for Property Valuation Report?
    </h2>
    <p className="text-pink-500 mt-6 text-lg sm:text-2xl md:text-4xl font-semibold">
      BY GOVERNMENT APPROVED PROPERTY VALUER
    </p>

    {/* Buttons */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Link to={"/enquiry/0"}>
        <button className="bg-blue-800 h-48 w-full text-white p-6 rounded-3xl shadow-md hover:bg-blue-700">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Valuation For VISA
          </h1>
        </button>
      </Link>
      <Link to={"/enquiry/1"}>
        <button className="bg-blue-800 h-48 w-full text-white p-6 rounded-3xl shadow-md hover:bg-blue-700">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Tax Valuation
          </h1>
        </button>
      </Link>
      <Link to={"/enquiry/2"}>
        <button className="bg-blue-800 h-48 w-full text-white p-6 rounded-3xl shadow-md hover:bg-blue-700">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Valuation For Stamp Duty
          </h1>
        </button>
      </Link>
    </div>
  </main>
);

export default MainContent;
