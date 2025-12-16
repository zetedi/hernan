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
import { JuchuyQosqo } from './components/JuchuyQosqo';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { EventFlyer } from './components/EventFlyer';
import { GoogleReviewsWidget } from './components/GoogleReviewsWidget';
import { SEO } from './components/SEO';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  // Set default language to Spanish
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.ES);
  const location = useLocation();

  const t = TRANSLATIONS[currentLanguage];

  // Helper to get title based on language
  const getTitle = (lang: Language) => {
    switch (lang) {
        case Language.EN: return "Hernan Raíces Quechua - Sacred Medicine";
        case Language.ES: return "Hernan Raíces Quechua - Medicina Sagrada";
        case Language.QU: return "Hernan Raíces Quechua - Hampi Wachuma";
        case Language.JA: return "ヘルナン・ライセス・ケチュア - アンデスの聖なる薬";
        case Language.HU: return "Hernan Raíces Quechua - Andok Szent Gyógyító Ereje";
        case Language.SA: return "Hernan Raíces Quechua - पवित्र अण्डीज ओषधि";
        case Language.AR: return "هيرنان جذور الكيتشوا - الطب المقدس";
        default: return "Hernan Raíces Quechua";
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

  const isFlyerRoute = location.pathname === '/flyer';

  if (isFlyerRoute) {
      // Parse query param to decide which flyer to show
      const searchParams = new URLSearchParams(location.search);
      const type = searchParams.get('event') as 'ausangate' | 'costaRica' | 'retreat2Day' | 'retreat1Day' | 'juchuy' || 'ausangate';
      
      let flyerData;
      if (type === 'costaRica') flyerData = t.costaRica;
      else if (type === 'retreat2Day') flyerData = t.retreat2Day;
      else if (type === 'retreat1Day') flyerData = t.retreat1Day;
      else if (type === 'juchuy') flyerData = t.juchuy;
      else flyerData = t.ausangate;

      return <EventFlyer t={flyerData} contact={t.contact} footer={t.footer} type={type} />;
  }

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
          <Route path="/juchuy-qosqo" element={
            <JuchuyQosqo t={t.juchuy} preparation={t.preparation} ui={t.ui} />
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