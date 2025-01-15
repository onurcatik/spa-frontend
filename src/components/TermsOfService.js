import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Kullanım Şartları</h1>
      
      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Giriş</h2>
        <p>
          Bu web sitesini kullanarak, aşağıdaki şartları kabul etmiş olursunuz. Lütfen kullanım şartlarını dikkatlice okuyun. Eğer bu şartları kabul etmiyorsanız, bu web sitesini kullanmaktan kaçının.
        </p>
      </section>

      {/* Terms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kullanım Koşulları</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Bu web sitesinin içeriği sadece bilgilendirme amaçlıdır.</li>
          <li>Web sitesi üzerinden yapılan işlemler için kullanıcı sorumluluk kabul eder.</li>
          <li>Bu web sitesi üzerinden paylaşılan içerikler telif haklarına tabidir.</li>
          <li>Web sitesi yöneticisi, içeriklerde değişiklik yapma hakkını saklı tutar.</li>
        </ol>
      </section>

      {/* User Responsibilities Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kullanıcı Sorumlulukları</h2>
        <p>
          Kullanıcılar bu web sitesini yalnızca yasal ve ahlaki amaçlarla kullanmayı kabul ederler. Kullanıcılar, web sitesine zarar verebilecek herhangi bir kötü amaçlı yazılım veya benzeri faaliyetlerde bulunmamayı taahhüt ederler.
        </p>
      </section>

      {/* Changes to the Terms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Şartlardaki Değişiklikler</h2>
        <p>
          Web sitesi yöneticisi, bu kullanım şartlarını istediği zaman değiştirme hakkını saklı tutar. Bu şartlar üzerindeki değişiklikler, web sitesinde yayımlandığı tarihten itibaren geçerli olacaktır.
        </p>
      </section>

      {/* Contact Information Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
        <p>
          Bu şartlarla ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
          <br />
          Email: info@doktorwebsitesi.com
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
