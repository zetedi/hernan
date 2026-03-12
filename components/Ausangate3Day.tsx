import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES, getWhatsAppLink } from '../constants';
import { ViewFlyerButton } from './ViewFlyerButton';
import { Mountain, Droplets, Calendar, Camera, Info, Flame, FileText, Send } from 'lucide-react';
import { Preparation } from './Preparation';
import { MediaCarousel, MediaItem } from './MediaCarousel';

interface Ausangate3DayProps {
  t: TranslationData['ausangate3Day'];
  preparation: TranslationData['preparation'];
  ui: TranslationData['ui'];
  lang?: Language;
  contactPhone: string;
}

export const Ausangate3Day: React.FC<Ausangate3DayProps> = ({ t, preparation, ui, lang, contactPhone }) => {
  return (
    <div className="bg-pacha-stone min-h-screen">
      {/* Hero Header - Parallax */}
      <div className="relative min-h-[85vh] flex items-center justify-center py-20">
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
          
          {/* Inquiry Prompt */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <p className="text-pacha-gold font-serif italic text-xl mb-4 leading-relaxed">
                {t.inquiryPrompt}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                 <div className="flex items-center gap-2">
                    <Calendar className="text-pacha-gold w-4 h-4" />
                    <span>{t.details.dates}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Info className="text-pacha-gold w-4 h-4" />
                    <span>{t.details.price}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* WhatsApp + Flyer Link */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={getWhatsAppLink(contactPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(37,211,102,0.3)] uppercase tracking-widest text-sm transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>{ui.whatsapp}</span>
            </a>
            <ViewFlyerButton 
              event="ausangate3Day" 
              lang={lang || Language.ES} 
              label={ui.viewFlyer} 
            />
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
