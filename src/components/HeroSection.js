import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Bienvenidos a nuestra comunidad</h1>
        <p className="text-xl text-blue-800 max-w-2xl mx-auto mb-8">
          Un lugar donde encontrarás amor, fe y esperanza en Cristo Jesús.
        </p>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition-colors">
          Conoce más
        </button>
      </div>
    </section>
  );
};

export default HeroSection;