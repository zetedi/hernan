import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';

interface HeroProps {
  t: TranslationData['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero}
          alt="Sacred Valley Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-pacha-stone" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto h-full flex flex-col justify-center overflow-y-auto py-20 no-scrollbar">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-serif tracking-wide drop-shadow-lg shrink-0">
          {t.title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light tracking-wider drop-shadow-md shrink-0">
          {t.subtitle}
        </p>

        {/* YouTube Video */}
        <div className="w-full max-w-xl mx-auto mb-10 shrink-0">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-pacha-gold/30 bg-black/50">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yfB7mFZmvNs?rel=0" 
              title="Hernan Wachuma Ceremony"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="shrink-0 pb-8">
          <Link 
            to="/contact"
            className="inline-block bg-pacha-gold hover:bg-[#b08d48] text-pacha-stone font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm"
          >
            {t.cta}
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on small screens/landscape where height is limited */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <svg className="w-6 h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};