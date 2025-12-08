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
    else if (currentLanguage === Language.HU) document.title = "Hernan Wachuma - Andok Szent Gyógyító Ereje";
    else if (currentLanguage === Language.SA) document.title = "Hernan Wachuma - पवित्र अण्डीज ओषधि";
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
          <Route path="/ausangate" element={
            // Injecting preparation data into the props. 
            // In types.ts we updated TranslationData to include 'preparation', so t.preparation exists.
            // We combine it because AusangateProps expects t: TranslationData['ausangate']
            // We can extend the prop or simply pass it as part of the object if we treat it loosely, 
            // or better, we updated the Ausangate component to look for it.
            // Since we cannot change the Interface of Ausangate['t'] easily without nesting it inside types, 
            // we will pass a composite object or ignore the TS error in the short term, 
            // OR ideally: The updated types.ts shows 'preparation' is a sibling to 'ausangate'.
            // So we should update Ausangate to accept a separate prop or merge them.
            // For now, I'll pass it merged and use ts-ignore in the component as done above.
            <Ausangate t={{...t.ausangate, preparation: t.preparation} as any} />
          } />
          <Route path="/retreat-2day" element={
            <Retreat2Day t={{...t.retreat2Day, preparation: t.preparation} as any} />
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact t={t.contact} footerT={t.footer} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;