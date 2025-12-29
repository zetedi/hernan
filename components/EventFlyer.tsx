
import React from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Logo } from './Logo';
import { Calendar, MapPin, Mail, Phone, Printer } from 'lucide-react';

interface EventFlyerProps {
  t: any; // Can be Ausangate, Costa Rica, or generic retreat data
  flyerT: TranslationData['flyer'];
  contact: TranslationData['contact'];
  footer: TranslationData['footer'];
  type: 'ausangate' | 'ausangate3Day' | 'costaRica' | 'retreat2Day' | 'retreat1Day' | 'juchuy';
}

export const EventFlyer: React.FC<EventFlyerProps> = ({ t, flyerT, contact, footer, type }) => {
  // Determine images and specific data based on type
  let bgImage = IMAGES.ausangate;
  let locationText = "Cusco, Peru";
  let dateText = t.subtitle || flyerT.flexibleDates;
  const isJuchuy = type === 'juchuy';
  
  if (type === 'costaRica') {
      bgImage = IMAGES.costa;
      locationText = "Costa Rica";
      dateText = t.details?.dates || t.subtitle;
  } else if (type === 'retreat2Day') {
      bgImage = IMAGES.mayra;
      locationText = "Sacred Valley, Peru";
  } else if (type === 'retreat1Day') {
      bgImage = IMAGES.flowers;
      locationText = "Sacred Valley, Peru";
  } else if (type === 'juchuy') {
      bgImage = IMAGES.juchuy;
      locationText = "Juchuy Qosqo, Peru";
  } else if (type === 'ausangate3Day') {
      bgImage = IMAGES.maestros;
      locationText = "Ausangate, Peru";
      dateText = t.details?.dates || "Jan 3-5, 2026";
  }

  // QR Code URL Generation
  // In production, this would be the actual domain. For now using window.location.origin
  const currentOrigin = window.location.origin;
  const pagePath = type === 'juchuy' ? 'juchuy-qosqo' : type === 'costaRica' ? 'costa-rica' : type === 'retreat2Day' ? 'retreat-2day' : type === 'retreat1Day' ? 'retreat-1day' : type === 'ausangate3Day' ? 'ausangate-3day' : 'ausangate';
  const qrData = `${currentOrigin}/${pagePath}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}&bgcolor=255-255-255`;

  // Helper to extract plain text description, with fallbacks for Intro
  const getDescription = () => {
      if (typeof t.description === 'string') return t.description;
      if (Array.isArray(t.description)) return t.description[0];
      if (t.intro) return t.intro;
      return "";
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 md:p-8 print:p-0 print:bg-white relative">
        {/* Print Button - Fixed and High Z-Index */}
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[100] print:hidden">
            <button 
                onClick={() => window.print()}
                className="bg-pacha-gold text-pacha-stone font-bold py-2 px-4 md:py-3 md:px-6 text-xs md:text-base rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#b08d48] transition-all transform hover:scale-105 border-2 border-white ring-2 md:ring-4 ring-black/10"
            >
                <Printer size={16} className="md:w-5 md:h-5" />
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
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-24 md:h-24 text-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] filter shadow-black z-20 print:text-pacha-earth">
                         <Logo className="w-full h-full drop-shadow-lg" />
                    </div>
                )}

                {/* Header / Logo Area - Standard (Hidden for Juchuy) */}
                {!isJuchuy && (
                    <div className="p-4 md:p-8 text-center text-white drop-shadow-md pt-8 md:pt-12 print:text-pacha-earth">
                        <div className="w-16 h-16 md:w-28 md:h-28 mx-auto text-white mb-2 md:mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] filter shadow-black print:text-pacha-earth">
                            <Logo className="w-full h-full drop-shadow-lg" />
                        </div>
                        <h2 className="text-xs md:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold text-pacha-gold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] font-cinzel bg-black/40 backdrop-blur-md py-1 px-3 md:px-4 inline-block rounded-full print:text-pacha-earth print:bg-transparent print:drop-shadow-none shadow-lg border border-white/10">
                            <span className="text-white print:text-pacha-earth">Hernan</span>
                            <span className="mx-2 text-white/50 print:text-gray-400">|</span>
                            Raíces Quechua
                        </h2>
                    </div>
                )}
                
                {/* Spacer for Juchuy to push Title down. */}
                {isJuchuy && <div className="h-[22%]"></div>}

                {/* Main Title Area */}
                <div className={`mt-auto px-4 md:px-12 pt-2 md:pt-4 pb-2 md:pb-4 text-center ${isJuchuy ? 'mb-1 md:mb-2' : ''}`}>
                    <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">
                        {t.title}
                    </h1>
                    <div className="w-16 md:w-32 h-0.5 md:h-1 bg-pacha-gold mx-auto my-3 md:my-6 shadow-lg"></div>
                    <div className="flex justify-center gap-3 md:gap-8 text-xs md:text-lg font-bold text-pacha-stone">
                        <div className="flex items-center gap-1 md:gap-2 bg-pacha-sand/50 px-2 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-sm print:bg-transparent print:border print:border-gray-300">
                            <Calendar className="w-3 h-3 md:w-5 md:h-5 text-pacha-earth" />
                            <span>{dateText}</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2 bg-pacha-sand/50 px-2 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-sm print:bg-transparent print:border print:border-gray-300">
                            <MapPin className="w-3 h-3 md:w-5 md:h-5 text-pacha-earth" />
                            <span>{locationText}</span>
                        </div>
                    </div>
                </div>

                {/* Body Content */}
                <div className="px-4 md:px-12 py-3 md:py-6 flex-grow flex flex-col justify-center">
                    <p className="text-xs md:text-xl text-center text-gray-800 font-medium leading-relaxed mb-4 md:mb-10 italic max-w-2xl mx-auto bg-white/60 p-2 md:p-4 rounded-xl backdrop-blur-sm shadow-sm border border-white/50 print:bg-transparent print:shadow-none print:border-none print:text-black line-clamp-3 md:line-clamp-none">
                        {getDescription()}
                    </p>

                    <div className="grid grid-cols-3 gap-4 md:gap-8 items-center">
                        {/* Highlights / Itinerary Summary */}
                        <div className="col-span-2 bg-pacha-sand/30 p-3 md:p-6 rounded-xl border border-pacha-gold/20 print:bg-transparent print:border-gray-300">
                            <h3 className="text-pacha-gold font-bold uppercase tracking-widest mb-2 md:mb-4 border-b border-pacha-gold/30 pb-1 md:pb-2 text-[10px] md:text-sm print:text-black print:border-black">{flyerT.highlights}</h3>
                            <ul className="space-y-1 md:space-y-2">
                                {t.itinerary ? (
                                    t.itinerary.map((day: any, i: number) => (
                                        <li key={i} className="flex gap-2 md:gap-3 text-[10px] md:text-sm">
                                            <span className="font-bold text-pacha-leaf w-8 md:w-12 flex-shrink-0 print:text-black">{day.day.replace(/Day /i, 'D')}</span>
                                            <span className="truncate text-gray-800 font-medium">{day.title}</span>
                                        </li>
                                    ))
                                ) : t.days ? (
                                     t.days.slice(0, 5).map((day: any, i: number) => (
                                        <li key={i} className="flex gap-2 md:gap-3 text-[10px] md:text-sm">
                                            <span className="font-bold text-pacha-leaf w-8 md:w-16 flex-shrink-0 print:text-black">Day {i+1}</span>
                                            <span className="text-gray-800 font-medium truncate">{day.title}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-600 italic text-xs">Contact us for detailed itinerary.</li>
                                )}
                            </ul>
                        </div>

                        {/* QR Code Section */}
                        <div className="col-span-1 flex flex-col items-center justify-center text-center">
                            <div className="bg-white p-1 md:p-2 rounded-lg shadow-md border border-gray-200 mb-1 md:mb-2 print:shadow-none print:border-black">
                                <img src={qrCodeUrl} alt="Scan for details" className="w-16 h-16 md:w-24 md:h-24" />
                            </div>
                            <span className="text-[8px] md:text-xs font-bold uppercase tracking-wider text-pacha-stone">{flyerT.scan}</span>
                        </div>
                    </div>
                </div>

                {/* Footer / Contact */}
                <div className="bg-pacha-stone text-white p-4 md:p-8 mt-2 md:mt-4 relative overflow-hidden print:bg-white print:text-black print:border-t print:border-black">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 print:hidden"></div>
                    
                    <div className="flex justify-between items-center max-w-4xl mx-auto relative z-10">
                        <div className="text-left">
                            <h4 className="font-serif text-lg md:text-3xl text-pacha-gold mb-0.5 md:mb-1 print:text-black">{flyerT.reserve}</h4>
                            <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-wider print:text-gray-600">{flyerT.limited}</p>
                        </div>
                        <div className="text-right space-y-1 md:space-y-2">
                            <div className="flex items-center justify-end gap-2 md:gap-3 text-[10px] md:text-sm font-medium">
                                <Mail size={12} className="text-pacha-gold print:text-black md:w-[18px] md:h-[18px]" />
                                {footer.columns.contact.email}
                            </div>
                            <div className="flex items-center justify-end gap-2 md:gap-3 text-[10px] md:text-sm font-medium">
                                <Phone size={12} className="text-pacha-gold print:text-black md:w-[18px] md:h-[18px]" />
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
