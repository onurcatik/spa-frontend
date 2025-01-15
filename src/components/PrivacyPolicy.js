import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Gizlilik Politikası</h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Giriş</h2>
        <p>
          Bu gizlilik politikası, web sitemizi kullanırken kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır. Web sitemizi kullanarak, bu gizlilik politikasında belirtilen şartları kabul etmiş sayılırsınız.
        </p>
      </section>

      {/* Data Collection Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Veri Toplama</h2>
        <p>
          Web sitemizi kullandığınızda, aşağıdaki bilgileri toplayabiliriz:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adınız ve iletişim bilgileriniz (e-posta, telefon numarası vb.).</li>
          <li>Web sitemize erişim sağladığınız cihaz ve IP adresi gibi teknik veriler.</li>
          <li>Çerezler aracılığıyla toplanan tarama geçmişiniz ve tercih ettiğiniz ayarlar.</li>
        </ul>
      </section>

      {/* Use of Data Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Verilerin Kullanımı</h2>
        <p>
          Topladığımız verileri, size daha iyi hizmet sunabilmek için aşağıdaki amaçlarla kullanabiliriz:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Web sitemizi ve hizmetlerimizi iyileştirmek.</li>
          <li>Kişisel ayarlarınızı ve tercihleriniz doğrultusunda hizmet sağlamak.</li>
          <li>Pazarlama, promosyon ve duyuru amaçlı e-postalar göndermek (onay verdiyseniz).</li>
        </ul>
      </section>

      {/* Data Sharing Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Verilerin Paylaşımı</h2>
        <p>
          Kişisel verilerinizi, aşağıdaki durumlar dışında üçüncü şahıslarla paylaşmayız:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Yasal yükümlülükler gerektirdiğinde.</li>
          <li>Hizmet sağlayıcılarımıza veya iş ortaklarımıza hizmet sağlama amacıyla.</li>
          <li>Web sitemizin güvenliğini ve hizmetlerimizi koruma amaçlı durumlarda.</li>
        </ul>
      </section>

      {/* User Rights Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kullanıcı Hakları</h2>
        <p>
          Kişisel bilgilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kişisel verilerinize erişim talep etme.</li>
          <li>Yanlış veya eksik olan verilerin düzeltilmesini talep etme.</li>
          <li>Verilerinizin silinmesini veya işlenmesinin durdurulmasını talep etme.</li>
        </ul>
      </section>

      {/* Cookies Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Çerezler</h2>
        <p>
          Web sitemiz, deneyiminizi iyileştirmek amacıyla çerezler kullanır. Çerezleri kabul etmeyi veya reddetmeyi seçebilirsiniz, ancak bazı özelliklerin düzgün çalışabilmesi için çerezler gerekli olabilir.
        </p>
      </section>

      {/* Changes to Privacy Policy Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gizlilik Politikasında Değişiklikler</h2>
        <p>
          Gizlilik politikamızda zaman zaman değişiklikler yapabiliriz. Herhangi bir değişiklik, bu sayfada güncellenmiş olarak yayınlanacaktır.
        </p>
      </section>

      {/* Contact Information Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
        <p>
          Bu gizlilik politikasıyla ilgili sorularınız varsa, lütfen bizimle iletişime geçin:
          <br />
          Email: info@doktorwebsitesi.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
