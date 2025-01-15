import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ImageGridSection from './components/ImageGridSection';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Navbar animation
    gsap.fromTo(
      '.nav-bar', 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Hero section animation
    gsap.fromTo(
      '.hero-section > *', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
    );
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <Helmet>
          <title>Doktor Web Sitesi | Hoşgeldiniz</title>
          <meta name="description" content="Doktorunuza kolayca ulaşabileceğiniz sağlık çözümleri." />
        </Helmet>

        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Define routes for the main sections and additional pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Main Sections */}
                <div id="home">
                  <HeroSection />
                </div>
                <div id="services">
                  <ServicesSection />
                </div>
                <div id="about">
                  <ImageGridSection />
                </div>
                <React.Suspense fallback={<div>Yükleniyor...</div>}>
                  <div id="about">
                    <About />
                  </div>
                  <div id="testimonials">
                    <Testimonials />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                </React.Suspense>
              </>
            }
          />
          {/* Additional pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
