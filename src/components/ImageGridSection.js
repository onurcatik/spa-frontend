import React from 'react';

const ImageGridSection = () => {
  return (
    <section id="image-grid" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 dark:text-white">Başarılarımız</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700 flex items-center">
            <img src="https://via.placeholder.com/300" alt="Başarı Projesi 1" className="rounded-lg w-1/2" />
            <div className="ml-4 text-left">
              <h3 className="text-xl font-bold dark:text-white">Proje 1</h3>
              <p className="dark:text-gray-300">Bu proje, hastalarımız için sunduğumuz yenilikçi tedavi yöntemlerini içerir.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700 flex items-center">
            <img src="https://via.placeholder.com/300" alt="Başarı Projesi 2" className="rounded-lg w-1/2" />
            <div className="ml-4 text-left">
              <h3 className="text-xl font-bold dark:text-white">Proje 2</h3>
              <p className="dark:text-gray-300">Bu proje, ameliyat hizmetlerimizdeki son teknolojik yenilikleri içermektedir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGridSection;
