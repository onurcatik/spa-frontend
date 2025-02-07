import React from 'react';

function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 dark:text-white">Hastalarımız Ne Diyor?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 flex items-center">
            <img
              src="https://placehold.co/600x400"
              alt="Hasta A Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-lg dark:text-gray-300">
                "Doktorumun sunduğu yenilikçi çözümler sayesinde sağlığımda büyük bir gelişme kaydettim. Kesinlikle tavsiye ederim!"
              </p>
              <p className="text-right font-bold mt-4 dark:text-white">- Hasta A</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800 flex items-center">
            <img
              src="https://placehold.co/600x400"
              alt="Hasta B Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-lg dark:text-gray-300">
                "Doktorumuzun ekibi profesyonel, verimli ve sonuç odaklı. Hizmetlerinden çok memnunuz!"
              </p>
              <p className="text-right font-bold mt-4 dark:text-white">- Hasta B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
