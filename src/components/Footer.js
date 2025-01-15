import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';  // For internal routing

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 dark:bg-gray-900">
      <div className="container mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Doktor Web Sitesi</h3>
          <p className="mb-2">
            Biz, sağlığınızı ön planda tutarak, size en iyi sağlık hizmetlerini sunmayı amaçlayan bir ekibiz. Sağlıklı bir gelecek için bizimle iletişime geçin.
          </p>
          <p>&copy; 2024 Doktor Web Sitesi. Tüm Hakları Saklıdır.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
          <ul>
            <li>
              <a href="#home" className="hover:underline">Ana Sayfa</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Hizmetler</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">Hakkımızda</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">İletişim</a>
            </li>
            {/* Use Link for Privacy Policy and Terms */}
            <li>
              <Link to="/privacy-policy" className="hover:underline">Gizlilik Politikası</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">İletişim</h3>
          <p>Adres: 123 Sağlık Sokak, İstanbul</p>
          <p>Telefon: +90 555 555 5555</p>
          <p>Email: info@doktorwebsitesi.com</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="container mx-auto text-center text-white mt-10">
        <p className="text-sm">
          <Link to="/terms-of-service" className="hover:underline">Kullanım Şartları</Link> | 
          <Link to="/privacy-policy" className="hover:underline ml-2">Gizlilik Politikası</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
