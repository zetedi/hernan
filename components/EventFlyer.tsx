
import React from 'react';
import { TranslationData, Language } from '../types';
import { IMAGES } from '../constants';
import { Logo } from './Logo';
import { Calendar, MapPin, Mail, Phone, Printer } from 'lucide-react';

interface EventFlyerProps {
  t: any; // Can be Ausangate, Costa Rica, or generic retreat data
  flyerT: TranslationData['flyer'];
  contact: TranslationData['contact'];
  footer: TranslationData['footer'];
  type: 'ausangate' | 'ausangate3Day' | 'costaRica' | 'retreat2Day' | 'retreat1Day' | 'juchuy';
  lang: Language;
}

// Translations specifically for the flyer bio
const FLYER_BIO_TRANSLATIONS: Record<Language, string> = {
    [Language.EN]: "Hernan Colque is a Quechua native and a devoted facilitator of Wachuma (San Pedro) ceremonies, deeply rooted in the sacred traditions of the Andes.",
    [Language.ES]: "Hernan Colque es nativo Quechua y un devoto facilitador de ceremonias de Wachuma (San Pedro), profundamente arraigado en las tradiciones sagradas de los Andes.",
    [Language.HU]: "Hernan Colque kecsua őslakos, a Wachuma (San Pedro) szertartások elkötelezett vezetője, aki mélyen gyökerezik az Andok szent hagyományaiban.",
    [Language.QU]: "Hernan Colqueqa Qichwa runam, Wachuma (San Pedro) raymikuna pusaq, Andeskunap willka yachayninkunapi saphichasqa.",
    [Language.JA]: "エルナン・コルケはケチュア族のネイティブであり、アンデスの神聖な伝統に深く根ざしたワチュマ（サンペドロ）セレモニーの献身的なファシリテーターです。",
    [Language.AR]: "هيرنان كولكي هو من السكان الأصليين للكيتشوا وميسر مخلص لمراسم الواتشوما (سان بيدرو)، متجذر بعمق في التقاليد المقدسة للأنديز.",
    [Language.SA]: "हर्नन् कोल्के क्वेशुआ देशीयः तथा वाचुमा (सेन् पेड्रो) संस्काराणाम् समर्पितः संचालकः अस्ति, यः अण्डीजस्य पवित्रपरम्परासु गभीररूपेण स्थितः अस्ति।"
};

export const EventFlyer: React.FC<EventFlyerProps> = ({ t, flyerT, contact, footer, type, lang }) => {
  // Determine images and specific data based on type
  let bgImage = IMAGES.ausangate;
  let locationText = "Cusco, Peru";
  let dateText = t.subtitle || flyerT.flexibleDates;
  const isJuchuy = type === 'juchuy';
  const isAusangateType = type === 'ausangate' || type === 'ausangate3Day';
  
  // Localization helpers
  const isSpanish = lang === Language.ES;
  const bioText = FLYER_BIO_TRANSLATIONS[lang] || FLYER_BIO_TRANSLATIONS[Language.ES];
  
  // Localized Locations
  const locCusco = isSpanish ? "Cusco, Perú" : "Cusco, Peru";
  const locCostaRica = "Costa Rica";
  const locSacredValley = isSpanish ? "Valle Sagrado, Perú" : "Sacred Valley, Peru";
  const locJuchuy = isSpanish ? "Juchuy Qosqo, Perú" : "Juchuy Qosqo, Peru";
  const locAusangate = isSpanish ? "Ausangate, Perú" : "Ausangate, Peru";
  
  // Default Location
  locationText = locCusco;

  if (type === 'costaRica') {
      bgImage = IMAGES.costa;
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
      // Changed background to ausangate3.jpg as requested
      bgImage = IMAGES.ausangate3;
      locationText = locAusangate;
      dateText = t.details?.dates || (isSpanish ? "28 - 30 Ene, 2026" : "Jan 28 - 30, 2026");
  }

  // QR Code URL Generation
  const currentOrigin = window.location.origin;
  const pagePath = type === 'juchuy' ? 'juchuy-qosqo' : type === 'costaRica' ? 'costa-rica' : type === 'retreat2Day' ? 'retreat-2day' : type === 'retreat1Day' ? 'retreat-1day' : type === 'ausangate3Day' ? 'ausangate-3day' : 'ausangate';
  const qrData = `${currentOrigin}/${pagePath}?lang=${lang}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}&bgcolor=255-255-255`;

  // Helper to extract plain text description, combining event description AND bio
  const getDescription = () => {
      let eventDesc = "";
      // Try to get the event specific description (e.g. "Un viaje de medicina vegetal...")
      if (typeof t.description === 'string') {
          eventDesc = t.description;
      } else if (Array.isArray(t.description)) {
          // If description is array, use first paragraph or join
          eventDesc = t.description[0];
      } else if (t.intro) {
          // Fallback to intro if description not found (e.g. some retreat types)
          eventDesc = t.intro;
      }

      return (
        <>
            {eventDesc && <span className="block mb-4">{eventDesc}</span>}
            <span className="block">{bioText}</span>
        </>
      );
  }

  // Helper to split title for layout
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
        case Language.HU: return "Nap";
        case Language.QU: return "P'unchay";
        case Language.AR: return "اليوم";
        case Language.SA: return "दिनम्";
        case Language.JA: return "日目";
        default: return "Day";
    }
  };

  const dayLabel = getDayLabel(lang);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 md:p-4 print:p-0 print:bg-white relative">
        {/* Print Button - Fixed and High Z-Index */}
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
                
                {/* Juchuy Special: Logo Absolute Top Left */}
                {isJuchuy && (
                    <div className="absolute top-4 left-4 w-12 h-12 text-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] filter shadow-black z-20 print:text-pacha-earth">
                         <Logo className="w-full h-full drop-shadow-lg" />
                    </div>
                )}

                {/* Header / Logo Area - Standard (Hidden for Juchuy) */}
                {!isJuchuy && (
                    <div className="p-2 text-center text-white drop-shadow-md pt-4 print:text-pacha-earth">
                        <div className="w-14 h-14 md:w-20 md:h-20 mx-auto text-white mb-2 drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] filter shadow-black print:text-pacha-earth">
                            <Logo className="w-full h-full drop-shadow-lg" />
                        </div>
                        <h2 className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-pacha-gold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] font-cinzel bg-black/40 backdrop-blur-md py-1 px-3 inline-block rounded-full print:text-pacha-earth print:bg-transparent print:drop-shadow-none shadow-lg border border-white/10">
                            <span className="text-white print:text-pacha-earth">Hernan</span>
                            <span className="mx-2 text-white/50 print:text-gray-400">|</span>
                            Raíces Quechua
                        </h2>
                    </div>
                )}
                
                {/* Spacer for Juchuy to push Title down. */}
                {isJuchuy && <div className="h-[15%]"></div>}

                {/* Main Title Area */}
                <div className={`mt-auto px-8 pt-2 pb-2 text-center ${isJuchuy ? 'mb-1' : ''}`}>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">
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

                    {/* Special Image Row for Ausangate Flyers - EVEN BIGGER IMAGES */}
                    {isAusangateType && (
                        <div className="flex justify-center items-center gap-4 mt-6 mb-4">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-white shadow-lg transform -rotate-3 z-0 bg-white">
                                <img src={IMAGES.ausangate} className="w-full h-full object-cover" alt="Ausangate" />
                            </div>
                            <div className="w-32 h-32 md:w-44 md:h-44 rounded-lg overflow-hidden border-2 border-white shadow-xl z-10 -mt-4 bg-white">
                                <img src={IMAGES.hat} className="w-full h-full object-cover" alt="Hernan's Hat" />
                            </div>
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-white shadow-lg transform rotate-3 z-0 bg-white">
                                {/* Changed to wachuma.jpg per request */}
                                <img src={IMAGES.wachuma} className="w-full h-full object-cover" alt="Wachuma" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Body Content - Bigger Fonts & Balanced Spacing */}
                <div className="px-8 py-4 flex-grow flex flex-col justify-center">
                    <p className="text-xs md:text-base text-center text-gray-800 font-medium leading-relaxed mb-8 italic max-w-3xl mx-auto bg-white/60 p-4 rounded-xl backdrop-blur-sm shadow-sm border border-white/50 print:bg-transparent print:shadow-none print:border-none print:text-black">
                        {getDescription()}
                    </p>

                    <div className="grid grid-cols-3 gap-6 items-center">
                        {/* Highlights / Itinerary Summary */}
                        <div className="col-span-2 bg-pacha-sand/30 p-5 rounded-xl border border-pacha-gold/20 print:bg-transparent print:border-gray-300">
                            <h3 className="text-pacha-gold font-bold uppercase tracking-widest mb-3 border-b border-pacha-gold/30 pb-2 text-xs md:text-sm print:text-black print:border-black">{flyerT.highlights}</h3>
                            <ul className="space-y-3">
                                {t.itinerary ? (
                                    t.itinerary.slice(0, 3).map((day: any, i: number) => (
                                        <li key={i} className="flex gap-4 text-sm md:text-lg items-baseline">
                                            {/* Using whitespace-nowrap to prevent line breaks in day number */}
                                            <span className="font-bold text-pacha-leaf w-16 flex-shrink-0 whitespace-nowrap print:text-black">
                                                {day.day}
                                            </span>
                                            <span className="text-gray-800 font-medium leading-tight">{day.title}</span>
                                        </li>
                                    ))
                                ) : t.days ? (
                                     t.days.slice(0, 3).map((day: any, i: number) => {
                                        // Clean up title if it contains "Day X :"
                                        const cleanTitle = day.title.includes(':') ? day.title.split(':')[1].trim() : day.title;
                                        return (
                                            <li key={i} className="flex gap-4 text-sm md:text-lg items-baseline">
                                                <span className="font-bold text-pacha-leaf w-16 flex-shrink-0 whitespace-nowrap print:text-black">
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
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 mb-2 print:shadow-none print:border-black">
                                <img src={qrCodeUrl} alt="Scan for details" className="w-24 h-24 md:w-32 md:h-32" />
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-pacha-stone">{flyerT.scan}</span>
                        </div>
                    </div>
                </div>

                {/* Footer / Contact */}
                <div className="bg-pacha-stone text-white p-5 md:p-6 mt-auto relative overflow-hidden print:bg-pacha-stone print:text-white print:print-color-adjust-exact">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 print:hidden"></div>
                    
                    <div className="flex justify-between items-center max-w-4xl mx-auto relative z-10">
                        <div className="text-left">
                            <h4 className="font-serif text-xl md:text-3xl text-pacha-gold mb-1">{flyerT.reserve}</h4>
                            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">{flyerT.limited}</p>
                        </div>
                        <div className="text-right space-y-1">
                            <div className="flex items-center justify-end gap-3 text-xs md:text-sm font-medium">
                                <Mail size={16} className="text-pacha-gold" />
                                {footer.columns.contact.email}
                            </div>
                            <div className="flex items-center justify-end gap-3 text-xs md:text-sm font-medium">
                                <Phone size={16} className="text-pacha-gold" />
                                {footer.columns.contact.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
