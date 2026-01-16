
import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES, CREDITS } from '../constants';
import { Palmtree, Waves, Users, Eye, FileText, Mountain, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Preparation } from './Preparation';
import { MediaCarousel, MediaItem } from './MediaCarousel';

interface CostaRicaProps {
  t: TranslationData['costaRica'];
  preparation: TranslationData['preparation'];
  ui: TranslationData['ui'];
  lang?: Language;
}

export const CostaRica: React.FC<CostaRicaProps> = ({ t, preparation, ui, lang }) => {
  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header - Parallax (Disabled on Mobile) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES.costa})` }}
        >
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-pacha-sand via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in drop-shadow-md">
            {t.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-xl">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            {t.intro}
          </p>
          {/* Flyer Link Button */}
          <div className="mt-8 flex justify-center">
            <Link 
                to={`/flyer?event=costaRica&lang=${lang || 'ES'}`} 
                target="_blank"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-pacha-gold text-white hover:text-pacha-stone border border-white/30 hover:border-pacha-gold font-bold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg group uppercase tracking-widest text-sm"
            >
                <FileText size={18} className="group-hover:scale-110 transition-transform" />
                <span>{ui.viewFlyer}</span>
            </Link>
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
                        Daily Journey
                    </h3>
                    
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-pacha-leaf/20"></div>
                        
                        <div className="space-y-12">
                            {t.itinerary && t.itinerary.map((day, index) => {
                                // Determine placeholder image based on location/context
                                let dayImage = IMAGES.costa as string; // Default Costa Rica - explicitly cast as string default
                                let credit = null;

                                const descLower = (typeof day.description === 'string' ? day.description : day.description[0]).toLowerCase();
                                const titleLower = day.title.toLowerCase();
                                
                                if (index === 0) {
                                    dayImage = IMAGES.diamante1;
                                } else if (index === 1) {
                                    dayImage = IMAGES.diamante2;
                                } else if (index >= 2) {
                                    // Chirripo leg - Cycle through specific images
                                    const chirripoKeys = ['chirripo1', 'chirripo2', 'chirripo3', 'chirripo4', 'chirripo5', 'chirripo6', 'chirripo7'];
                                    const key = chirripoKeys[(index - 2) % chirripoKeys.length];
                                    dayImage = IMAGES[key as keyof typeof IMAGES] as string;
                                    credit = CREDITS[key];
                                } else if (titleLower.includes('chirripó') || descLower.includes('mountain') || titleLower.includes('ceremony')) {
                                    dayImage = IMAGES.canyon; // Fallback
                                } else if (titleLower.includes('ocean')) {
                                    dayImage = IMAGES.costa;
                                }

                                // Icons
                                let DayIcon = Palmtree;
                                if (titleLower.includes('chirripó') || titleLower.includes('mountain')) DayIcon = Mountain;
                                if (titleLower.includes('ceremony')) DayIcon = Eye;
                                if (titleLower.includes('ocean')) DayIcon = Waves;

                                // Location Logic: Index 2+ (March 1 onwards) is El Chirripó leg
                                const locationName = index >= 2 ? 'The Mountains' : 'Diamante Valley';

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
                                                    <img 
                                                        src={dayImage} 
                                                        alt={day.title}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 group-hover/image:bg-transparent transition-colors"></div>
                                                    
                                                    {/* Credits Overlay */}
                                                    {credit && (
                                                        <div className="absolute bottom-1 right-1 max-w-[90%] text-[10px] text-white/80 bg-black/50 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity pointer-events-auto">
                                                            <span dangerouslySetInnerHTML={{ __html: credit }} />
                                                        </div>
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
