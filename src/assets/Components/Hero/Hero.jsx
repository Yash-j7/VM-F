import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-gray-100 py-12 px-6">
      <div className="text-content text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Heat Press Machine</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Established in 1988, Vision Media has solidified its position as a distinguished
          entity in the market, specializing in cutting-edge printing machines.
        </p>
        <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Read More
        </button>
      </div>
      <div className="images flex justify-center space-x-4">
        <img src="heatpress1.png" alt="Heat Press Machine 1" className="w-1/3 rounded-lg shadow-lg" />
        <img src="heatpress2.png" alt="Heat Press Machine 2" className="w-1/3 rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
