import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.EN);
  const location = useLocation();

  const t = TRANSLATIONS[currentLanguage];

  // Set document title based on language
  useEffect(() => {
    document.title = currentLanguage === Language.EN 
      ? "Hernan Wachuma - Sacred Medicine" 
      : currentLanguage === Language.ES 
      ? "Hernan Wachuma - Medicina Sagrada"
      : "Hernan Wachuma - Hampi Wachuma";
  }, [currentLanguage]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navbar 
        t={t.nav} 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero t={t.hero} />} />
          <Route path="/about" element={
            <>
              <About t={t.about} />
              <Testimonials t={t.testimonials} />
            </>
          } />
          <Route path="/services" element={<Services t={t.services} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact t={t.contact} footerT={t.footer} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;