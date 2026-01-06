
import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES } from '../constants';
import { Calendar, ChevronDown, Palmtree, Flower } from 'lucide-react';

interface HeroProps {
  t: TranslationData['hero'];
  lang?: Language;
  retreatPrice?: string;
}

export const Hero: React.FC<HeroProps> = ({ t, lang, retreatPrice }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background Image - Parallax (Disabled on Mobile) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_25%] md:bg-center bg-scroll md:bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-pacha-stone" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full my-auto">
        
        {/* Text Container */}
        <div className="max-w-4xl mx-auto w-full mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif tracking-wide drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6 font-light tracking-wider drop-shadow-md">
            {t.subtitle}
          </p>
        </div>

        {/* Media Container: 2x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* 1. 2 Day Retreat Card (First) */}
          <Link 
            to="/retreat-2day"
            className="w-full h-48 relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black/50 group cursor-pointer block"
          >
            <img 
                src={IMAGES.mayra} 
                onError={(e) => { e.currentTarget.src = IMAGES.hero; }}
                alt="2 Day Retreat" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-2 bg-black/40 px-2 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                    {t.retreatTeaser.label}
                </span>
                <h3 className="text-white font-serif text-3xl drop-shadow-xl font-bold tracking-wide mb-2">
                    {t.retreatTeaser.title}
                </h3>
                 <div className="flex items-center gap-2 text-white/90 bg-black/30 px-3 py-1 rounded-md backdrop-blur-sm">
                    <Flower className="w-4 h-4 text-white" />
                    <span className="font-light tracking-wide text-xs">{t.retreatTeaser.location}</span>
                 </div>
            </div>
            {/* Price Badge */}
            {retreatPrice && (
                <div className="absolute bottom-3 right-3 bg-pacha-gold/90 text-pacha-stone text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm z-20 border border-white/20">
                    {retreatPrice}
                </div>
            )}
          </Link>

          {/* 2. Ausangate 3-Day Teaser (Updated for Full Moon Special) */}
          <Link 
            to="/ausangate-3day"
            className="w-full h-48 relative rounded-xl overflow-hidden shadow-2xl border border-pacha-gold/30 bg-black/50 group cursor-pointer block"
          >
            <img 
                src={IMAGES.ausangate3} 
                alt="Ausangate Full Moon" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-pacha-gold font-bold uppercase tracking-[0.2em] text-xs mb-2 bg-black/40 px-2 py-1 rounded-full border border-pacha-gold/50 backdrop-blur-sm">
                    {t.ausangateTeaser.label}
                </span>
                <h3 className="text-white font-serif text-3xl drop-shadow-xl font-bold tracking-wide mb-2">
                    {t.ausangateTeaser.title}
                </h3>
                 <div className="flex items-center gap-2 text-white/90 bg-black/30 px-3 py-1 rounded-md backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-pacha-gold" />
                    <span className="font-light tracking-wide text-xs">{t.ausangateTeaser.date}</span>
                 </div>
            </div>
          </Link>

          {/* 3. Costa Rica Teaser */}
          <Link 
            to="/costa-rica"
            className="w-full h-48 relative rounded-xl overflow-hidden shadow-2xl border border-pacha-leaf/50 bg-black/50 group cursor-pointer block"
          >
            <img 
                src={IMAGES.costa} 
                onError={(e) => { e.currentTarget.src = IMAGES.hero; }}
                alt="Costa Rica" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-pacha-leaf font-bold uppercase tracking-[0.2em] text-xs mb-2 bg-black/40 px-2 py-1 rounded-full border border-pacha-leaf/50 backdrop-blur-sm">
                    {t.costaRicaTeaser?.label || "Special Event"}
                </span>
                <h3 className="text-white font-serif text-3xl drop-shadow-xl font-bold tracking-wide mb-2">
                    {t.costaRicaTeaser?.title || "Costa Rica Pilgrimage"}
                </h3>
                 <div className="flex items-center gap-2 text-white/90 bg-black/30 px-3 py-1 rounded-md backdrop-blur-sm">
                    <Palmtree className="w-4 h-4 text-pacha-leaf" />
                    <span className="font-light tracking-wide text-xs">{t.costaRicaTeaser?.date || "Coming Soon"}</span>
                 </div>
            </div>
          </Link>

          {/* 4. YouTube Video */}
          <div className="w-full h-48 relative rounded-xl overflow-hidden shadow-2xl border border-pacha-gold/30 bg-black/50">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yfB7mFZmvNs?rel=0" 
              title="Hernan Wachuma Ceremony"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

        </div>
        
        <div>
          <Link 
            to="/contact"
            className="inline-block bg-pacha-gold hover:bg-[#b08d48] text-pacha-stone font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm"
          >
            {t.cta}
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block z-20">
        <ChevronDown className="w-10 h-10 text-white/80 drop-shadow-md" />
      </div>
    </section>
  );
};
