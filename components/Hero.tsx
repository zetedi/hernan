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
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto h-full flex flex-col justify-start md:justify-center overflow-y-auto pt-36 pb-20 md:py-20 no-scrollbar">
        
        {/* Text Container */}
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-serif tracking-wide drop-shadow-lg shrink-0">
            {t.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light tracking-wider drop-shadow-md shrink-0">
            {t.subtitle}
          </p>
        </div>

        {/* Media Container: Stacked on mobile (Teaser first), Side-by-side on Desktop */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mb-10 shrink-0">
          
          {/* Ausangate Teaser (First on Mobile, Left on Desktop) */}
          <Link 
            to="/ausangate"
            className="w-full max-w-xl aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-pacha-gold/30 bg-black/50 group cursor-pointer block"
          >
            <img 
                src={IMAGES.ausangate} 
                alt="Ausangate" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-pacha-gold font-bold uppercase tracking-[0.2em] text-sm mb-2 bg-black/40 px-3 py-1 rounded-full border border-pacha-gold/50 backdrop-blur-sm">
                    {t.ausangateTeaser.label}
                </span>
                <h3 className="text-white font-serif text-3xl md:text-4xl drop-shadow-xl font-bold tracking-wide">
                    {t.ausangateTeaser.title}
                </h3>
            </div>
          </Link>

          {/* YouTube Video (Second on Mobile, Right on Desktop) */}
          <div className="w-full max-w-xl aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-pacha-gold/30 bg-black/50">
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
        <img src="/hero.svg" alt="Scroll down" className="w-6 h-6 text-white/70 opacity-70" />
      </div>
    </section>
  );
};