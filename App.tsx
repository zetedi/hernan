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
import { Retreat2Day } from './components/Retreat2Day';
import { Retreat1Day } from './components/Retreat1Day';
import { CostaRica } from './components/CostaRica';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { GoogleReviewsWidget } from './components/GoogleReviewsWidget';
import { SEO } from './components/SEO';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.EN);
  const location = useLocation();

  const t = TRANSLATIONS[currentLanguage];

  // Helper to get title based on language
  const getTitle = (lang: Language) => {
    switch (lang) {
        case Language.EN: return "Hernan Wachuma - Sacred Medicine";
        case Language.ES: return "Hernan Wachuma - Medicina Sagrada";
        case Language.QU: return "Hernan Wachuma - Hampi Wachuma";
        case Language.JA: return "ヘルナン・ワチュマ - アンデスの聖なる薬";
        case Language.HU: return "Hernan Wachuma - Andok Szent Gyógyító Ereje";
        case Language.SA: return "Hernan Wachuma - पवित्र अण्डीज ओषधि";
        case Language.AR: return "هيرنان واتشوما - الطب المقدس";
        default: return "Hernan Wachuma";
    }
  };

  // Helper to get text direction
  const getDir = (lang: Language) => lang === Language.AR ? 'rtl' : 'ltr';

  // Helper to get HTML lang attribute
  const getHtmlLang = (lang: Language) => lang.toLowerCase();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <SEO 
        title={getTitle(currentLanguage)}
        description={t.footer.description}
        lang={getHtmlLang(currentLanguage)}
        dir={getDir(currentLanguage)}
      />

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
              <GoogleReviewsWidget />
            </>
          } />
          <Route path="/about" element={
            <>
              <About t={t.about} />
              <Testimonials t={t.testimonials} />
            </>
          } />
          <Route path="/services" element={<Services t={t.services} ui={t.ui} />} />
          <Route path="/ausangate" element={
            <Ausangate t={{...t.ausangate, preparation: t.preparation} as any} />
          } />
          <Route path="/costa-rica" element={
            <CostaRica t={t.costaRica} preparation={t.preparation} ui={t.ui} />
          } />
          <Route path="/retreat-2day" element={
            <Retreat2Day t={{...t.retreat2Day, preparation: t.preparation} as any} ui={t.ui} />
          } />
          <Route path="/retreat-1day" element={
            <Retreat1Day t={t.retreat1Day} preparation={t.preparation} ui={t.ui} />
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ t={t.faq} />} />
          <Route path="/contact" element={<Contact t={t.contact} footerT={t.footer} ui={t.ui} />} />
        </Routes>
      </main>
      <Footer data={t.footer} />
    </div>
  );
};

export default App;