import React from 'react';
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif tracking-wide drop-shadow-lg">
          {t.title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light tracking-wider drop-shadow-md">
          {t.subtitle}
        </p>
        <a 
          href="#contact"
          className="inline-block bg-pacha-gold/90 hover:bg-pacha-gold text-pacha-earth font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm"
        >
          {t.cta}
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};