import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { GoogleReviewsWidget } from './components/GoogleReviewsWidget';
import { Benefits } from './components/Benefits';
import { SEO } from './components/SEO';
import { Loading } from './components/Loading';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

// Lazy load heavy page components
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Gallery = lazy(() => import('./components/Gallery').then(module => ({ default: module.Gallery })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Ausangate = lazy(() => import('./components/Ausangate').then(module => ({ default: module.Ausangate })));
const Ausangate3Day = lazy(() => import('./components/Ausangate3Day').then(module => ({ default: module.Ausangate3Day })));
const Retreat2Day = lazy(() => import('./components/Retreat2Day').then(module => ({ default: module.Retreat2Day })));
const Retreat1Day = lazy(() => import('./components/Retreat1Day').then(module => ({ default: module.Retreat1Day })));
const CostaRica = lazy(() => import('./components/CostaRica').then(module => ({ default: module.CostaRica })));
const JuchuyQosqo = lazy(() => import('./components/JuchuyQosqo').then(module => ({ default: module.JuchuyQosqo })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const EventFlyer = lazy(() => import('./components/EventFlyer').then(module => ({ default: module.EventFlyer })));

const App: React.FC = () => {
  const [searchParams] = useSearchParams();
  const urlLang = searchParams.get('lang') as Language;
  
  // Initialize language from URL if valid, otherwise default to ES
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    return Object.values(Language).includes(urlLang) ? urlLang : Language.ES;
  });
  
  const location = useLocation();
  const t = TRANSLATIONS[currentLanguage];

  // Helper to get title based on language
  const getTitle = (lang: Language) => {
    switch (lang) {
        case Language.EN: return "Hernan Raíces Quechua - Sacred Medicine";
        case Language.ES: return "Hernan Raíces Quechua - Medicina Sagrada";
        case Language.QU: return "Hernan Raíces Quechua - Hampi Wachuma";
        default: return "Hernan Raíces Quechua";
    }
  };

  // Helper to get HTML lang attribute
  const getHtmlLang = (lang: Language) => lang.toLowerCase();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isFlyerRoute = location.pathname === '/flyer';

  if (isFlyerRoute) {
      // Parse query param to decide which flyer to show
      const type = searchParams.get('event') as 'ausangate' | 'costaRica' | 'retreat2Day' | 'retreat1Day' | 'juchuy' | 'ausangate3Day' || 'ausangate';
      
      let flyerData;
      if (type === 'costaRica') flyerData = t.costaRica;
      else if (type === 'retreat2Day') flyerData = t.retreat2Day;
      else if (type === 'retreat1Day') flyerData = t.retreat1Day;
      else if (type === 'juchuy') flyerData = t.juchuy;
      else if (type === 'ausangate3Day') flyerData = t.ausangate3Day;
      else flyerData = t.ausangate;

      return (
        <Suspense fallback={<Loading />}>
            <EventFlyer t={flyerData} flyerT={t.flyer} contact={t.contact} footer={t.footer} type={type} lang={currentLanguage} />
        </Suspense>
      );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <SEO 
        title={getTitle(currentLanguage)}
        description={t.footer.description}
        lang={getHtmlLang(currentLanguage)}
      />

      <Navbar 
        t={t.nav} 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
            <Routes>
            <Route path="/" element={
                <>
                <Hero 
                    t={t.hero} 
                    lang={currentLanguage} 
                    retreatPrice={t.services.items[0].price}
                />
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
            <Route path="/services" element={<Services t={t.services} ui={t.ui} lang={currentLanguage} />} />
            <Route path="/ausangate" element={
                <Ausangate t={{...t.ausangate, preparation: t.preparation} as any} ui={t.ui} lang={currentLanguage} />
            } />
            <Route path="/ausangate-3day" element={
                <Ausangate3Day t={t.ausangate3Day} preparation={t.preparation} ui={t.ui} lang={currentLanguage} />
            } />
            <Route path="/costa-rica" element={
                <CostaRica t={t.costaRica} preparation={t.preparation} ui={t.ui} lang={currentLanguage} />
            } />
            <Route path="/juchuy-qosqo" element={
                <JuchuyQosqo t={t.juchuy} preparation={t.preparation} ui={t.ui} lang={currentLanguage} />
            } />
            <Route path="/retreat-2day" element={
                <Retreat2Day t={{...t.retreat2Day, preparation: t.preparation} as any} ui={t.ui} lang={currentLanguage} />
            } />
            <Route path="/retreat-1day" element={
                <Retreat1Day t={t.retreat1Day} preparation={t.preparation} ui={t.ui} lang={currentLanguage} />
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ t={t.faq} />} />
            <Route path="/contact" element={<Contact t={t.contact} footerT={t.footer} ui={t.ui} />} />
            </Routes>
        </Suspense>
      </main>
      <Footer data={t.footer} />
    </div>
  );
};

export default App;