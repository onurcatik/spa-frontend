import React from 'react';

function About() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hakkımızda</h2>
        <p className="text-lg mb-10">
          Biz, hastalarımızın sağlığını en üst düzeyde tutmayı amaçlayan tutkulu bir ekip olarak, yenilikçi çözümler sunuyoruz.
          Misyonumuz, en iyi hizmeti ve tedavi yöntemlerini sunarak, hastalarımızın memnuniyetini ve sağlığını garanti altına almaktır.
        </p>

        {/* 2x2 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder 1"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder 2"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder 3"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder 4"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
