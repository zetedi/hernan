import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Mountain, Flame, Droplets, Calendar } from 'lucide-react';
import { Preparation } from './Preparation';

interface AusangateProps {
  t: TranslationData['ausangate'];
}

export const Ausangate: React.FC<AusangateProps> = ({ t }) => {
  return (
    <div className="bg-pacha-stone min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.ausangate}
            onError={(e) => { e.currentTarget.src = IMAGES.hero; }}
            alt="Ausangate Mountain" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
            {t.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-lg">
            {t.title}
          </h1>
          <div className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
             {Array.isArray(t.description) 
                ? t.description.map((d, i) => <p key={i} className={i > 0 ? "mt-4" : ""}>{d}</p>) 
                : <p>{t.description}</p>
             }
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-pacha-leaf/20 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-24 relative z-10">
          {t.itinerary.map((day, index) => {
            const isLeft = index % 2 === 0;
            const dayImageKey = `day${index + 1}` as keyof typeof IMAGES;
            // Ensure dayImage is string, as IMAGES contains gallery (string[])
            const dayImageRaw = IMAGES[dayImageKey];
            const dayImage = typeof dayImageRaw === 'string' ? dayImageRaw : undefined;

            // Handle potential string array for description
            const descriptionStr = Array.isArray(day.description) ? day.description.join(' ') : day.description;

            // Select icon based on content keywords
            let DayIcon = Mountain;
            if (descriptionStr.toLowerCase().includes('temazcal')) DayIcon = Flame;
            if (descriptionStr.toLowerCase().includes('waters') || descriptionStr.toLowerCase().includes('yaku')) DayIcon = Droplets;

            return (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-pacha-earth border-4 border-pacha-stone flex items-center justify-center transform -translate-x-1/2 z-20 shadow-xl">
                  <DayIcon className="w-5 h-5 text-pacha-gold" />
                </div>

                {/* Text Content Card (Left or Right) */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="bg-pacha-earth/40 p-6 rounded-xl border border-white/5 hover:border-pacha-gold/30 transition-all duration-300 h-full flex flex-col justify-center">
                    <span className="text-pacha-gold font-bold uppercase tracking-wider text-sm mb-2 block">
                      {day.day}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {day.title}
                    </h3>
                    <div className="text-gray-300 font-light leading-relaxed">
                       {Array.isArray(day.description) 
                          ? day.description.map((d, i) => <p key={i} className={i > 0 ? "mt-2" : ""}>{d}</p>) 
                          : <p>{day.description}</p>
                       }
                    </div>
                  </div>
                </div>
                
                {/* Image Card (Opposite Side) */}
                <div className={`hidden md:block w-1/2 ${isLeft ? 'pl-16' : 'pr-16'}`}>
                   <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 h-64 w-full relative group">
                        <img 
                            src={dayImage || IMAGES.ausangate} 
                            alt={day.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                   </div>
                </div>

                {/* Mobile Image (Below text on mobile) */}
                 <div className="md:hidden w-full pl-12">
                   <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 h-48 w-full relative">
                        <img 
                            src={dayImage || IMAGES.ausangate} 
                            alt={day.title}
                            className="w-full h-full object-cover"
                        />
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pacha-leaf/10 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Calendar className="w-16 h-16 text-pacha-gold mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
            {t.cta}
          </h2>
          <Link 
            to="/contact"
            className="inline-block bg-pacha-gold hover:bg-[#b08d48] text-pacha-stone font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm"
          >
            {t.cta}
          </Link>
        </div>
      </div>

      {/* Preparation Section */}
      {/* @ts-ignore */}
      <Preparation data={t['preparation']} />
    </div>
  );
};