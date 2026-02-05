import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES } from '../constants';
import { Mountain, Droplets, Calendar, Camera, Info, Flame, FileText } from 'lucide-react';
import { Preparation } from './Preparation';
import { MediaCarousel, MediaItem } from './MediaCarousel';

interface Ausangate3DayProps {
  t: TranslationData['ausangate3Day'];
  preparation: TranslationData['preparation'];
  ui: TranslationData['ui'];
  lang?: Language;
}

export const Ausangate3Day: React.FC<Ausangate3DayProps> = ({ t, preparation, ui, lang }) => {
  return (
    <div className="bg-pacha-stone min-h-screen">
      {/* Hero Header - Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES.ausangate3})` }}
        >
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-pacha-stone via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
            {t.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-xl">
            {t.title}
          </h1>
          <div className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow-md">
             {Array.isArray(t.description) 
                ? t.description.map((d, i) => <p key={i} className={i > 0 ? "mt-4" : ""}>{d}</p>) 
                : <p>{t.description}</p>
             }
          </div>
          
          {/* Key Details Badge */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-flex shadow-lg mb-8">
             <div className="flex items-center gap-2">
                <Calendar className="text-pacha-gold w-4 h-4" />
                <span>{t.details.dates}</span>
             </div>
             <div className="hidden md:block text-pacha-gold">|</div>
             <div className="flex items-center gap-2">
                <Info className="text-pacha-gold w-4 h-4" />
                <span className="text-pacha-gold text-lg">{t.details.price}</span>
             </div>
          </div>

          {/* Flyer Link Button */}
          <div className="flex justify-center">
            <Link 
                to={`/flyer?event=ausangate3Day&lang=${lang || 'ES'}`} 
                target="_blank"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-pacha-gold text-white hover:text-pacha-stone border border-white/30 hover:border-pacha-gold font-bold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg group uppercase tracking-widest text-sm"
            >
                <FileText size={18} className="group-hover:scale-110 transition-transform" />
                <span>{ui.viewFlyer}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bonus Section: Free Photography (Only show if text exists) */}
      {t.details.bonus && (
        <div className="bg-pacha-leaf/20 border-y border-pacha-leaf/30 py-8">
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-4 text-center">
                <Camera className="w-8 h-8 text-pacha-gold shrink-0" />
                <span className="text-white text-lg font-serif italic tracking-wide">
                    {t.details.bonus}
                </span>
            </div>
        </div>
      )}

      {/* Itinerary Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-pacha-leaf/20 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-24 relative z-10">
          {t.itinerary.map((day, index) => {
            const isLeft = index % 2 === 0;
            
            // Map days to specific images visually if possible, or fallback
            let dayImage = IMAGES.ausangate;
            if (index === 0) dayImage = IMAGES.day1;
            if (index === 1) dayImage = IMAGES.day2;
            if (index === 2) dayImage = IMAGES.day7;

            const descriptionStr = Array.isArray(day.description) ? day.description.join(' ') : day.description;
            
            let DayIcon = Mountain;
            if (descriptionStr.toLowerCase().includes('waters')) DayIcon = Droplets;
            if (descriptionStr.toLowerCase().includes('temazcal')) DayIcon = Flame;

            // Prepare Media Items
            let mediaItems: MediaItem[] = [];
            const isDay1 = index === 0;

            if (isDay1) {
                // Day 1: Carousel (Fire Video + Bungalow)
                mediaItems = [
                    { type: 'video', src: IMAGES.fireVideo, poster: dayImage || IMAGES.ausangate, alt: 'Temazcal Fire' },
                    { type: 'image', src: IMAGES.bungalow, alt: 'Bungalow Accommodation' }
                ];
            } else {
                // Other Days: Single Media
                const isTemazcalDay = descriptionStr.toLowerCase().includes('temazcal');
                if (isTemazcalDay) {
                    mediaItems = [{ type: 'video', src: IMAGES.fireVideo, poster: dayImage || IMAGES.ausangate, alt: 'Temazcal' }];
                } else {
                    mediaItems = [{ type: 'image', src: dayImage || IMAGES.ausangate, alt: day.title }];
                }
            }

            return (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-pacha-earth border-4 border-pacha-stone flex items-center justify-center transform -translate-x-1/2 z-20 shadow-xl">
                  <DayIcon className="w-5 h-5 text-pacha-gold" />
                </div>

                {/* Text Content Card */}
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
                
                {/* Image/Video Card */}
                <div className={`hidden md:block w-1/2 ${isLeft ? 'pl-16' : 'pr-16'}`}>
                   <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video w-full relative">
                        <MediaCarousel items={mediaItems} />
                   </div>
                </div>

                {/* Mobile Image */}
                 <div className="md:hidden w-full pl-12">
                   <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 aspect-video w-full relative">
                        <MediaCarousel items={mediaItems} />
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
      <Preparation data={preparation} />
    </div>
  );
};