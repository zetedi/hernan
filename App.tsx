import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Benefits } from './components/Benefits';
import { Ausangate } from './components/Ausangate';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.EN);
  const location = useLocation();

  const t = TRANSLATIONS[currentLanguage];

  // Handle document title and RTL direction based on language
  useEffect(() => {
    // Set Title
    if (currentLanguage === Language.EN) document.title = "Hernan Wachuma - Sacred Medicine";
    else if (currentLanguage === Language.ES) document.title = "Hernan Wachuma - Medicina Sagrada";
    else if (currentLanguage === Language.QU) document.title = "Hernan Wachuma - Hampi Wachuma";
    else if (currentLanguage === Language.JA) document.title = "ヘルナン・ワチュマ - アンデスの聖なる薬";
    else document.title = "هيرنان واتشوما - الطب المقدس"; // Arabic Title

    // Set Text Direction (RTL/LTR)
    if (currentLanguage === Language.AR) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = currentLanguage.toLowerCase();
    }

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
          <Route path="/" element={
            <>
              <Hero t={t.hero} />
              <Benefits t={t.benefits} />
            </>
          } />
          <Route path="/about" element={
            <>
              <About t={t.about} />
              <Testimonials t={t.testimonials} />
            </>
          } />
          <Route path="/services" element={<Services t={t.services} />} />
          <Route path="/ausangate" element={<Ausangate t={t.ausangate} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact t={t.contact} footerT={t.footer} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;