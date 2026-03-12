import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES, CREDITS, getWhatsAppLink } from '../constants';
import { ViewFlyerButton } from './ViewFlyerButton';
import { Palmtree, Waves, Users, Eye, Mountain, Calendar, MapPin, CheckCircle2, Banknote, Send } from 'lucide-react';
import { Preparation } from './Preparation';
import { MediaCarousel, MediaItem } from './MediaCarousel';

interface CostaRicaProps {
  t: TranslationData['costaRica'];
  preparation: TranslationData['preparation'];
  ui: TranslationData['ui'];
  lang?: Language;
  flyerEvent?: string;
  contactPhone: string;
}

export const CostaRica: React.FC<CostaRicaProps> = ({ t, preparation, ui, lang, flyerEvent = 'costaRica', contactPhone }) => {
  const bgImage = flyerEvent === 'costaRicaPilgrimage' ? IMAGES.crbg2 : IMAGES.costa;

  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header - Parallax (Disabled on Mobile) */}
      <div className="relative min-h-[85vh] flex items-center justify-center py-20">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-pacha-sand via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto md:mt-32">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in drop-shadow-md">
            {t.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-xl">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            {t.intro}
          </p>
          {/* WhatsApp + Flyer Link */}
          <div className="mt-8 flex flex-col items-center gap-4">
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
              event={flyerEvent} 
              lang={lang || Language.ES} 
              label={ui.viewFlyer} 
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-pacha-leaf/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Details Card */}
            <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-32 space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pacha-gold">
                        <h3 className="font-serif font-bold text-2xl text-pacha-earth mb-6">{ui.eventDetails}</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                    <Palmtree className="w-5 h-5 text-pacha-leaf" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{ui.location}</span>
                                    <span className="text-pacha-stone font-medium">{t.details.location}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                    <Calendar className="w-5 h-5 text-pacha-leaf" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{ui.duration}</span>
                                    <span className="text-pacha-stone font-medium">{t.details.dates}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                    <Users className="w-5 h-5 text-pacha-leaf" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{ui.capacity}</span>
                                    <span className="text-pacha-stone font-medium">{t.details.capacity}</span>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                    <Waves className="w-5 h-5 text-pacha-leaf" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{ui.theme}</span>
                                    <span className="text-pacha-stone font-medium">{t.themeValue}</span>
                                </div>
                            </div>

                            {t.oneDayPrice && (
                                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                                    <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                        <Banknote className="w-5 h-5 text-pacha-leaf" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">{ui.contribution}</span>
                                        <span className="text-pacha-stone font-medium">{t.oneDayPrice}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <Link 
                                to="/contact"
                                className="block w-full text-center bg-pacha-earth hover:bg-pacha-stone text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg uppercase tracking-widest text-xs"
                            >
                                {t.cta}
                            </Link>
                        </div>
                    </div>
                    
                    {/* Packages / Options Card */}
                    {t.packages && (
                        <div className="bg-pacha-leaf/10 p-8 rounded-2xl border border-pacha-leaf/20">
                            <h3 className="font-serif font-bold text-xl text-pacha-earth mb-4">{t.packages.title}</h3>
                            <ul className="space-y-3">
                                {t.packages.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-pacha-leaf flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-2 space-y-16">
                
                {/* Intro Text */}
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                    {(Array.isArray(t.description) ? t.description : [t.description]).map((paragraph, idx) => (
                        <p key={idx} className="mb-6 first:text-xl first:font-light first:text-pacha-earth">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-xl border-l-4 border-pacha-leaf shadow-sm flex gap-4 items-start">
                    <Eye className="w-8 h-8 text-pacha-leaf flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-serif font-bold text-xl text-pacha-earth mb-2">{t.visionTitle}</h4>
                        <p className="text-gray-600 italic">
                            {t.visionText}
                        </p>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div className="space-y-12">
                    <h3 className="text-3xl font-serif font-bold text-pacha-earth border-b-2 border-pacha-gold inline-block pb-2">
                        {ui.dailyJourney || 'Daily Journey'}
                    </h3>
                    
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-pacha-leaf/20"></div>
                        
                        <div className="space-y-12">
                            {t.itinerary && t.itinerary.map((day, index) => {
                                // Default placeholders
                                let dayImage = IMAGES.costa as string; 
                                let credit = null;
                                let isCarousel = false;
                                let carouselItems: MediaItem[] = [];

                                const descLower = (typeof day.description === 'string' ? day.description : day.description[0]).toLowerCase();
                                const titleLower = day.title.toLowerCase();
                                
                                // Logic for Duchí Start (The Carousel)
                                // Show carousel for all pilgrimage items or if specifically named
                                if (flyerEvent === 'costaRicaPilgrimage' || titleLower.includes('duchí') || titleLower.includes('medicinal journey')) {
                                    isCarousel = true;
                                    // Build the carousel items
                                    const duchiKeys = ['duchi1', 'duchi2', 'duchi3', 'duchi4', 'duchi5', 'duchi6', 'duchi7'];
                                    carouselItems = duchiKeys.map(key => ({
                                        type: 'image',
                                        src: IMAGES[key as keyof typeof IMAGES] as string,
                                        alt: 'Duchí',
                                        credit: CREDITS[key]
                                    }));
                                } else if (index === 0) {
                                    dayImage = IMAGES.diamante1;
                                } else if (index === 1) {
                                    dayImage = IMAGES.diamante2;
                                } else if (titleLower.includes('ocean')) {
                                    dayImage = IMAGES.costa;
                                } else {
                                    // Fallbacks
                                    if (titleLower.includes('eclipse') || titleLower.includes('celebration')) dayImage = IMAGES.ausangate3;
                                    else if (titleLower.includes('closing')) dayImage = IMAGES.flowers;
                                }

                                // Icons
                                let DayIcon = Palmtree;
                                if (flyerEvent === 'costaRicaPilgrimage' || titleLower.includes('duchí') || titleLower.includes('mountain') || titleLower.includes('medicinal journey')) DayIcon = Mountain;
                                if (titleLower.includes('ceremony') || titleLower.includes('opening') || titleLower.includes('walk')) DayIcon = Eye;
                                if (titleLower.includes('ocean')) DayIcon = Waves;

                                // Location Logic
                                const locationName = flyerEvent === 'costaRicaPilgrimage' ? 'The Mountains' : 'Diamante Valley';

                                return (
                                    <div key={index} className="relative pl-12 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-pacha-sand border-2 border-pacha-leaf flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                                            <DayIcon className="w-4 h-4 text-pacha-leaf" />
                                        </div>

                                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                            <div className="flex flex-col md:flex-row">
                                                {/* Text Side */}
                                                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                                    <span className="text-pacha-gold font-bold uppercase tracking-widest text-xs mb-1 block">
                                                        {day.day}
                                                    </span>
                                                    <h4 className="text-xl font-serif font-bold text-pacha-earth mb-3">
                                                        {day.title}
                                                    </h4>
                                                    <div className="text-gray-600 text-sm leading-relaxed">
                                                        {Array.isArray(day.description) ? (
                                                            day.description.map((desc, i) => (
                                                                <p key={i} className={i > 0 ? "mt-2" : ""}>{desc}</p>
                                                            ))
                                                        ) : (
                                                            <p>{day.description}</p>
                                                        )}
                                                    </div>
                                                    {/* Location Badge */}
                                                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                        <MapPin className="w-3 h-3" />
                                                        {locationName}
                                                    </div>
                                                </div>

                                                {/* Image Side */}
                                                <div className="h-48 md:h-auto md:w-1/3 relative group/image">
                                                    {isCarousel ? (
                                                        <MediaCarousel items={carouselItems} />
                                                    ) : (
                                                        <>
                                                            <img 
                                                                src={dayImage} 
                                                                alt={day.title}
                                                                className="absolute inset-0 w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black/10 group-hover/image:bg-transparent transition-colors pointer-events-none"></div>
                                                            {/* Credits Overlay for non-carousel items if needed */}
                                                            {credit && (
                                                                <div className="absolute bottom-1 right-1 max-w-[90%] text-[10px] text-white/80 bg-black/50 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity pointer-events-auto">
                                                                    <span dangerouslySetInnerHTML={{ __html: credit }} />
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
      </div>

      {/* Preparation Section */}
      <Preparation data={preparation} />
    </div>
  );
};
