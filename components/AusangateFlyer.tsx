import React from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Logo } from './Logo';
import { Calendar, MapPin, Mail, Phone, Printer } from 'lucide-react';

interface FlyerProps {
  t: TranslationData['ausangate'];
  contact: TranslationData['contact'];
  footer: TranslationData['footer'];
}

export const AusangateFlyer: React.FC<FlyerProps> = ({ t, contact, footer }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8 print:p-0 print:bg-white relative">
        {/* Print Button - Fixed and High Z-Index */}
        <div className="fixed top-6 right-6 z-[100] print:hidden">
            <button 
                onClick={() => window.print()}
                className="bg-pacha-gold text-pacha-stone font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#b08d48] transition-all transform hover:scale-105 border-2 border-white ring-4 ring-black/10"
            >
                <Printer size={20} />
                <span>Print / Save PDF</span>
            </button>
        </div>

        <div className="w-full max-w-[210mm] aspect-[1/1.414] bg-white shadow-2xl relative overflow-hidden text-pacha-earth flex flex-col print:shadow-none print:w-full print:h-full print:aspect-auto">
            
            {/* Background Image with Gradient */}
            <div className="absolute inset-0 z-0">
                <img src={IMAGES.ausangate} alt="Ausangate" className="w-full h-[65%] object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white h-[65%]"></div>
                <div className="absolute top-[50%] left-0 right-0 h-[15%] bg-gradient-to-b from-transparent to-white"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">
                
                {/* Header / Logo Area */}
                <div className="p-8 text-center text-white pt-12">
                    <div className="w-28 h-28 mx-auto text-white mb-4 drop-shadow-2xl filter shadow-black">
                        <Logo className="w-full h-full drop-shadow-lg" />
                    </div>
                    <h2 className="text-xl tracking-[0.3em] uppercase font-bold text-pacha-gold drop-shadow-lg font-cinzel">Hernan Raíces Quechua</h2>
                </div>

                {/* Main Title Area */}
                <div className="mt-auto px-12 pt-4 pb-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-pacha-earth mb-2 leading-tight">
                        {t.title}
                    </h1>
                    <div className="w-32 h-1 bg-pacha-gold mx-auto my-6"></div>
                    <div className="flex justify-center gap-8 text-lg font-bold text-pacha-stone">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-pacha-gold" />
                            <span>{t.subtitle.split('-')[0].trim()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-pacha-gold" />
                            <span>Cusco, Peru</span>
                        </div>
                    </div>
                </div>

                {/* Body Content */}
                <div className="px-12 py-6 flex-grow flex flex-col justify-center">
                    <p className="text-xl text-center text-gray-600 font-light leading-relaxed mb-10 italic max-w-2xl mx-auto">
                        "{typeof t.description === 'string' ? t.description : t.description[0]}"
                    </p>

                    <div className="grid grid-cols-2 gap-12 items-start">
                        {/* Highlights */}
                        <div className="bg-pacha-sand/30 p-6 rounded-xl border border-pacha-gold/20">
                            <h3 className="text-pacha-gold font-bold uppercase tracking-widest mb-4 border-b border-pacha-gold/30 pb-2 text-sm">Sacred Highlights</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="text-pacha-leaf text-xl">✤</span>
                                    <span className="font-serif text-lg text-pacha-stone font-bold">3 Wachuma Ceremonies</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-pacha-leaf text-xl">✤</span>
                                    <span className="font-serif text-lg text-pacha-stone font-bold">Temazcal & Rapé Rituals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-pacha-leaf text-xl">✤</span>
                                    <span className="font-serif text-lg text-pacha-stone font-bold">Pacchanta Hot Springs</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-pacha-leaf text-xl">✤</span>
                                    <span className="font-serif text-lg text-pacha-stone font-bold">Apu Ausangate Hike</span>
                                </li>
                            </ul>
                        </div>

                        {/* Itinerary */}
                        <div>
                            <h3 className="text-pacha-gold font-bold uppercase tracking-widest mb-4 border-b border-pacha-gold/30 pb-2 text-sm">7-Day Journey</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {t.itinerary.map((day, i) => (
                                    <li key={i} className="flex gap-3 border-b border-dashed border-gray-200 pb-1 last:border-0">
                                        <span className="font-bold text-pacha-leaf w-12 flex-shrink-0">{day.day}</span>
                                        <span className="truncate text-gray-800 font-medium">{day.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer / Contact */}
                <div className="bg-pacha-stone text-white p-8 mt-4 relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    
                    <div className="flex justify-between items-center max-w-4xl mx-auto relative z-10">
                        <div className="text-left">
                            <h4 className="font-serif text-3xl text-pacha-gold mb-1">Reserve Your Spot</h4>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">Limited spaces available</p>
                        </div>
                        <div className="text-right space-y-2">
                            <div className="flex items-center justify-end gap-3 text-sm font-medium">
                                <Mail size={18} className="text-pacha-gold" />
                                {footer.columns.contact.email}
                            </div>
                            <div className="flex items-center justify-end gap-3 text-sm font-medium">
                                <Phone size={18} className="text-pacha-gold" />
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