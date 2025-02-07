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
              src="https://placehold.co/600x400"
              alt="Doktor ve Hasta Görüşmesi"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
            <p className="mt-4 text-gray-700 text-md font-bold">
              Doktorlarımız, hastalarıyla birebir görüşmeler yaparak en doğru teşhisi koymak için çalışır.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://placehold.co/600x400"
              alt="Tıbbi Teknoloji ve Cihazlar"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
            <p className="mt-4 text-gray-700 text-md font-bold">
              Hastalarımıza en iyi hizmeti sunabilmek için en yeni tıbbi teknolojileri kullanıyoruz.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://placehold.co/600x400"
              alt="Ameliyat Ekibi"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
            <p className="mt-4 text-gray-700 text-md font-bold">
              Alanında uzman cerrahlarımız, yüksek başarı oranlarına sahip ameliyatlar gerçekleştirmektedir.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-400">
            <img
              src="https://placehold.co/600x400"
              alt="Sağlık Personeli ve Hasta İlgisi"
              className="rounded-lg w-full object-cover max-w-xs mx-auto"
            />
            <p className="mt-4 text-gray-700 text-md font-bold">
              Hemşirelerimiz ve sağlık personelimiz, hastalarımıza en iyi bakım ve ilgiyi göstermektedir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
