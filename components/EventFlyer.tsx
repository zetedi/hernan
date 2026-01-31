import React from 'react';
import { TranslationData, Language } from '../types';
import { IMAGES } from '../constants';
import { Logo } from './Logo';
import { Calendar, MapPin, Mail, Printer, Send, Clock, Phone } from 'lucide-react';

interface EventFlyerProps {
  t: any; // Can be Ausangate, Costa Rica, or generic retreat data
  flyerT: TranslationData['flyer'];
  contact: TranslationData['contact'];
  footer: TranslationData['footer'];
  type: 'ausangate' | 'ausangate3Day' | 'costaRica' | 'retreat2Day' | 'retreat1Day' | 'juchuy';
  lang: Language;
}

export const EventFlyer: React.FC<EventFlyerProps> = ({ t, flyerT, contact, footer, type, lang }) => {
  // Determine images and specific data based on type
  let bgImage = IMAGES.ausangate;
  let locationText = "Cusco, Peru";
  let dateText = t.subtitle || flyerT.flexibleDates;
  const isJuchuy = type === 'juchuy';
  const isAusangateType = type === 'ausangate' || type === 'ausangate3Day';
  const isCostaRica = type === 'costaRica';
  
  // Localization helpers
  const isSpanish = lang === Language.ES;
  
  // Localized Locations
  const locCusco = isSpanish ? "Cusco, Perú" : "Cusco, Peru";
  const locCostaRica = "Costa Rica";
  const locSacredValley = isSpanish ? "Valle Sagrado, Perú" : "Sacred Valley, Peru";
  const locJuchuy = isSpanish ? "Juchuy Qosqo, Perú" : "Juchuy Qosqo, Peru";
  const locAusangate = isSpanish ? "Ausangate, Perú" : "Ausangate, Peru";
  
  // Default Location
  locationText = locCusco;

  // Specific Contact for Costa Rica
  const costaRicaWhatsapp = "(Zoltan): +32 494 988 937";

  if (type === 'costaRica') {
      bgImage = IMAGES.crbg;
      locationText = locCostaRica;
      dateText = t.details?.dates || t.subtitle;
  } else if (type === 'retreat2Day') {
      bgImage = IMAGES.mayra;
      locationText = locSacredValley;
  } else if (type === 'retreat1Day') {
      bgImage = IMAGES.flowers;
      locationText = locSacredValley;
  } else if (type === 'juchuy') {
      bgImage = IMAGES.juchuy;
      locationText = locJuchuy;
  } else if (type === 'ausangate3Day') {
      bgImage = IMAGES.ausangate3;
      locationText = locAusangate;
      dateText = t.details?.dates || (isSpanish ? "31 Mar - 2 Abr, 2026" : "Mar 31 - Apr 2, 2026");
  }

  // QR Code URL Generation
  const currentOrigin = window.location.origin;
  const pagePath = type === 'juchuy' ? 'juchuy-qosqo' : type === 'costaRica' ? 'costa-rica' : type === 'retreat2Day' ? 'retreat-2day' : type === 'retreat1Day' ? 'retreat-1day' : type === 'ausangate3Day' ? 'ausangate-3day' : 'ausangate';
  const qrData = `${currentOrigin}/${pagePath}?lang=${lang}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrData)}&bgcolor=255-255-255`;

  const getDescription = () => {
      if (isCostaRica) return t.intro;
      
      let eventDesc = "";
      if (typeof t.description === 'string') {
          eventDesc = t.description;
      } else if (Array.isArray(t.description)) {
          eventDesc = t.description[0];
      } else if (t.intro) {
          eventDesc = t.intro;
      }
      return eventDesc;
  }

  const renderTitle = () => {
      if (t.title && t.title.includes('(')) {
          const parts = t.title.split('(');
          return (
              <>
                  {parts[0]}
                  <span className="block mt-1 md:mt-2 text-2xl md:text-5xl">
                      ({parts[1]}
                  </span>
              </>
          );
      }
      return t.title;
  };

  const getDayLabel = (l: Language) => {
    switch(l) {
        case Language.ES: return "Día";
        case Language.QU: return "P'unchay";
        default: return "Day";
    }
  };

  const dayLabel = getDayLabel(lang);
  const lineageText = isSpanish ? "Linaje Pre-Inca K'ana" : "Pre-Incan K'ana Lineage";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 md:p-4 print:p-0 print:bg-white relative">
        {/* Print Button */}
        <div className="fixed top-4 right-4 z-[100] print:hidden">
            <button 
                onClick={() => window.print()}
                className="bg-pacha-gold text-pacha-stone font-bold py-2 px-4 text-xs rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#b08d48] transition-all transform hover:scale-105 border-2 border-white ring-2 ring-black/10"
            >
                <Printer size={14} />
                <span>{flyerT.print}</span>
            </button>
        </div>

        <div className="w-full max-w-[210mm] aspect-[1/1.414] bg-white shadow-2xl relative overflow-hidden text-pacha-earth flex flex-col print:shadow-none print:w-full print:h-full print:aspect-auto">
            
            {/* Background Image with Gradient */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={bgImage} 
                    alt="Background" 
                    className="w-full h-[65%] object-cover object-center print:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white h-[65%] print:hidden"></div>
                <div className="absolute top-[50%] left-0 right-0 h-[15%] bg-gradient-to-b from-transparent to-white print:hidden"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">
                
                {/* Logo Area */}
                {!isJuchuy && (
                    <div className="p-2 text-center text-white drop-shadow-md pt-4 print:text-pacha-earth flex flex-col items-center">
                        <div className="w-14 h-14 md:w-20 md:h-20 mx-auto text-white mb-2 drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] filter shadow-black print:text-pacha-earth">
                            <Logo className="w-full h-full drop-shadow-lg" />
                        </div>
                        <h2 className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-pacha-gold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] font-cinzel bg-black/40 backdrop-blur-md py-1 px-3 inline-block rounded-full print:text-pacha-earth print:bg-transparent print:drop-shadow-none shadow-lg border border-white/10 mb-1">
                            <span className="text-white print:text-pacha-earth">Hernan</span>
                            <span className="mx-2 text-white/50 print:text-gray-400">|</span>
                            Raíces Quechua
                        </h2>
                        <span className="text-[8px] md:text-[10px] tracking-widest uppercase text-white/90 drop-shadow-md font-medium bg-black/20 px-2 py-0.5 rounded-full backdrop-blur-sm print:text-gray-500 print:bg-transparent">
                            {lineageText}
                        </span>
                    </div>
                )}
                
                {isJuchuy && (
                    <div className="absolute top-4 left-4 w-12 h-12 text-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] filter shadow-black z-20 print:text-pacha-earth">
                         <Logo className="w-full h-full drop-shadow-lg" />
                    </div>
                )}
                
                {isJuchuy && <div className="h-[15%]"></div>}

                {/* Main Title Area */}
                <div className={`mt-auto px-8 pt-2 pb-2 text-center ${isJuchuy ? 'mb-1' : ''}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">
                        {renderTitle()}
                    </h1>
                    <div className="w-16 h-0.5 bg-pacha-gold mx-auto my-2 shadow-lg"></div>
                    <div className="flex justify-center gap-3 text-sm md:text-base font-bold text-pacha-stone">
                        <div className="flex items-center gap-1 bg-pacha-sand/50 px-2 py-1 rounded-full backdrop-blur-sm print:bg-transparent print:border print:border-gray-300">
                            <Calendar className="w-4 h-4 text-pacha-earth" />
                            <span>{dateText}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-pacha-sand/50 px-2 py-1 rounded-full backdrop-blur-sm print:bg-transparent print:border print:border-gray-300">
                            <MapPin className="w-4 h-4 text-pacha-earth" />
                            <span>{locationText}</span>
                        </div>
                    </div>

                    {/* Special Image Row for Ausangate or Costa Rica */}
                    {(isAusangateType || isCostaRica) && (
                        <div className="flex justify-center items-center gap-4 mt-10 mb-1">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-white shadow-lg transform -rotate-3 z-0 bg-white">
                                <img src={isCostaRica ? IMAGES.cr1 : IMAGES.ausangate} className="w-full h-full object-cover" alt="Event Image 1" />
                            </div>
                            <div className="w-28 h-28 md:w-44 md:h-44 rounded-lg overflow-hidden border-2 border-white shadow-xl z-10 -mt-4 bg-white">
                                <img src={isCostaRica ? IMAGES.cr2 : IMAGES.hat} className="w-full h-full object-cover" alt="Event Image 2" />
                            </div>
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-white shadow-lg transform rotate-3 z-0 bg-white">
                                <img src={isCostaRica ? IMAGES.cr3 : IMAGES.wachuma} className="w-full h-full object-cover" alt="Event Image 3" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Body Content */}
                <div className="px-8 py-4 flex-grow flex flex-col justify-center">
                    <p className="text-[10px] md:text-sm lg:text-base text-center text-gray-800 font-medium leading-relaxed mb-6 italic max-w-3xl mx-auto bg-white/60 p-4 rounded-xl backdrop-blur-sm shadow-sm border border-white/50 print:bg-transparent print:shadow-none print:border-none print:text-black">
                        {getDescription()}
                    </p>

                    <div className="grid grid-cols-3 gap-4 lg:gap-8 items-center">
                        {/* Highlights */}
                        <div className="col-span-2 bg-pacha-sand/30 p-4 lg:p-6 rounded-xl border border-pacha-gold/20 print:bg-transparent print:border-gray-300">
                            <div className="flex items-center justify-between mb-3 border-b border-pacha-gold/30 pb-2">
                                <h3 className="text-pacha-gold font-bold uppercase tracking-widest text-[10px] md:text-sm print:text-black print:border-black">{flyerT.highlights}</h3>
                                {isCostaRica && (
                                    <div className="flex items-center gap-1 text-pacha-leaf font-bold text-[9px] md:text-xs">
                                        <Clock size={12} />
                                        <span>{flyerT.oneDayPossible}</span>
                                    </div>
                                )}
                            </div>
                            <ul className="space-y-2 lg:space-y-3">
                                {t.itinerary ? (
                                    t.itinerary.map((day: any, i: number) => (
                                        <li key={i} className="flex gap-2 lg:gap-4 text-[10px] md:text-sm lg:text-base items-baseline">
                                            <span className="font-bold text-pacha-leaf w-14 lg:w-20 flex-shrink-0 whitespace-nowrap print:text-black">
                                                {day.day}
                                            </span>
                                            <span className="text-gray-800 font-medium leading-tight">{day.title}</span>
                                        </li>
                                    ))
                                ) : t.days ? (
                                     t.days.slice(0, 3).map((day: any, i: number) => {
                                        const cleanTitle = day.title.includes(':') ? day.title.split(':')[1].trim() : day.title;
                                        return (
                                            <li key={i} className="flex gap-2 lg:gap-4 text-[10px] md:text-sm lg:text-base items-baseline">
                                                <span className="font-bold text-pacha-leaf w-14 lg:w-16 flex-shrink-0 whitespace-nowrap print:text-black">
                                                    {dayLabel} {i+1}
                                                </span>
                                                <span className="text-gray-800 font-medium leading-tight">{cleanTitle}</span>
                                            </li>
                                        );
                                     })
                                ) : (
                                    <li className="text-gray-600 italic text-sm">Contact us for details.</li>
                                )}
                            </ul>
                        </div>

                        {/* QR Code Section */}
                        <div className="col-span-1 flex flex-col items-center justify-center text-center">
                            <div className="bg-white p-1 md:p-2 rounded-lg shadow-sm border border-gray-200 mb-2 print:shadow-none print:border-black flex items-center justify-center w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0">
                                <img 
                                  src={qrCodeUrl} 
                                  alt="Scan for details" 
                                  className="w-full h-full object-contain" 
                                  style={{ imageRendering: 'pixelated' }}
                                />
                            </div>
                            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-pacha-stone">{flyerT.scan}</span>
                        </div>
                    </div>
                </div>

                {/* Footer / Contact */}
                <div className="bg-pacha-stone text-white p-4 md:p-6 mt-auto relative overflow-hidden print:bg-pacha-stone print:text-white print:print-color-adjust-exact">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 print:hidden"></div>
                    
                    <div className="flex justify-between items-center max-w-5xl mx-auto relative z-10">
                        <div className="text-left">
                            <h4 className="font-serif text-lg md:text-2xl lg:text-3xl text-pacha-gold mb-1">{flyerT.reserve}</h4>
                            <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-wider">{flyerT.limited}</p>
                        </div>
                        <div className="text-right space-y-1">
                            <div className="flex items-center justify-end gap-2 text-[10px] md:text-xs lg:text-sm font-medium">
                                <Mail size={14} className="text-pacha-gold" />
                                {footer.columns.contact.email}
                            </div>
                            <div className="flex items-center justify-end gap-2 text-[10px] md:text-xs lg:text-sm font-medium">
                                {isCostaRica ? <Send size={14} className="text-pacha-gold" /> : <Phone size={14} className="text-pacha-gold" />}
                                {isCostaRica ? `WhatsApp ${costaRicaWhatsapp}` : footer.columns.contact.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};