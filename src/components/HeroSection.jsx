import React from 'react';

const HeroSection = () => (
  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white mt-8 h-auto md:h-[350px]">
    <div className="flex flex-col md:flex-row items-center md:pl-14 h-full">
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold drop-shadow-2xl">
          VISA VALUATION
        </h1>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-extrabold drop-shadow-2xl pt-2">
          ALLOVER IN KERALA
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;
