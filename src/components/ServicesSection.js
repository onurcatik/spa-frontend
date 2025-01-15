import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 dark:text-white">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Check-up Services */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 hover:rotate-2 hover:bg-gray-50 dark:hover:bg-gray-700">
            <img src="https://via.placeholder.com/300x200" alt="Check-up Hizmetleri" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-4 dark:text-white">Check-up Hizmetleri</h3>
            <p className="dark:text-gray-300">Düzenli sağlık kontrolleri ile sağlığınızı yakından takip ediyoruz.</p>
          </div>

          {/* Tedavi ve Danışmanlık */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 hover:rotate-2 hover:bg-gray-50 dark:hover:bg-gray-700">
            <img src="https://via.placeholder.com/300x200" alt="Tedavi ve Danışmanlık" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-4 dark:text-white">Tedavi ve Danışmanlık</h3>
            <p className="dark:text-gray-300">Uzman doktorlarımızla kişiye özel tedavi ve danışmanlık hizmetleri sunuyoruz.</p>
          </div>

          {/* Ameliyat Hizmetleri */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 hover:rotate-2 hover:bg-gray-50 dark:hover:bg-gray-700">
            <img src="https://via.placeholder.com/300x200" alt="Ameliyat Hizmetleri" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-4 dark:text-white">Ameliyat Hizmetleri</h3>
            <p className="dark:text-gray-300">Son teknoloji ameliyat hizmetleri ile sağlığınızı garanti altına alıyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
