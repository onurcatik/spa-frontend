import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section bg-gray-200 py-40 dark:bg-gray-800 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://via.placeholder.com/1200x600)' }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 dark:text-white">Doktorunuza Hoşgeldiniz</h1>
        <p className="text-lg mb-6 dark:text-gray-300">
          Sağlığınızı korumanız için yenilikçi sağlık çözümleri sunuyoruz.
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
          Hemen Randevu Al
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
