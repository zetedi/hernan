import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES } from '../constants';
import { Sun, Moon, Sparkles, Mountain, Utensils } from 'lucide-react';

interface ServicesProps {
  t: TranslationData['services'];
  ui: TranslationData['ui'];
  lang?: Language;
}

export const Services: React.FC<ServicesProps> = ({ t, ui, lang }) => {
  const icons = [Sun, Utensils, Sparkles, Moon];

  return (
    <section id="services" className="pt-32 pb-24 bg-pacha-stone text-white relative">
       {/* Background Pattern - Parallax (Disabled on Mobile) */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 bg-scroll md:bg-fixed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-gold mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-pacha-leaf mx-auto"></div>
        </div>

        {/* Featured Card - Costa Rica Sacred Pilgrimage */}
        <div className="relative rounded-xl overflow-hidden group shadow-2xl mb-12 border border-pacha-gold/30">
          {/* Image Background */}
          <img 
            src={IMAGES.chirripo1} 
            alt="Costa Rica Pilgrimage" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
          
          <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-pacha-gold">
                   <Mountain />
                   <span className="font-bold tracking-widest uppercase text-sm">{ui.featuredExperience}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  {t.ausangateCta.title}
                </h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  {t.ausangateCta.description}
                </p>
             </div>
             <Link 
               to="/costa-rica-pilgrimage"
               className="bg-pacha-gold hover:bg-[#b08d48] text-pacha-stone font-bold py-4 px-10 rounded-full transition-all duration-300 whitespace-nowrap uppercase tracking-widest text-sm shadow-xl"
             >
               {t.ausangateCta.button}
             </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            
            // Map based on index assuming structure from constants
            // 0: 2 Day Retreat
            // 1: Ausangate 3 Day
            // 2: Ausangate 7 Day
            // 3: Costa Rica 3 Day
            // 4: Costa Rica Pilgrimage
            // 5: Juchuy Qosqo
            // 6: 1 Day Ceremony
            // 7: Private Healing
            
            const isRetreat2Day = index === 0;
            const isAusangate3Day = index === 1;
            const isAusangate7Day = index === 2;
            const isCostaRica = index === 3;
            const isCostaRicaPilgrimage = index === 4;
            const isJuchuy = index === 5;
            const isOneDay = index === 6;
            const isPrivate = index === 7;

            // Base styling - Updated to border-[1.5px] and border-white
            const baseClasses = "border-[1.5px] border-white shadow-[0_0_25px_rgba(255,255,255,0.25)] p-6 rounded-xl transition-all duration-300 group flex flex-col relative overflow-hidden backdrop-blur-sm";
            const colorClasses = "hover:border-pacha-gold";

            // Determine Background Image
            let bgImage = null;
            if (isRetreat2Day) bgImage = IMAGES.mayra;
            if (isAusangate3Day) bgImage = IMAGES.ausangate3;
            if (isAusangate7Day) bgImage = IMAGES.ausangate;
            if (isCostaRica) bgImage = IMAGES.costa;
            if (isCostaRicaPilgrimage) bgImage = IMAGES.chirripo1;
            if (isJuchuy) bgImage = IMAGES.juchuy;
            if (isOneDay) bgImage = IMAGES.flowers; 
            if (isPrivate) bgImage = IMAGES.private;

            return (
              <div key={index} className={`${baseClasses} ${colorClasses}`}>
                
                {/* Background Image for Special Cards */}
                {bgImage && (
                    <>
                        <img 
                            src={bgImage} 
                            onError={(e) => { e.currentTarget.src = IMAGES.hero; }}
                            alt="Background" 
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                    </>
                )}

                {/* Content Container (z-10 to sit above image) */}
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-pacha-stone rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-pacha-gold/20 shrink-0">
                    <Icon className="text-pacha-gold w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-gray-100 group-hover:text-pacha-gold transition-colors">
                    {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                    {item.description}
                    </p>
                    <div className="border-t border-white/10 pt-4 mt-auto">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-pacha-sand font-mono text-xs uppercase tracking-wider">{ui.contribution}</span>
                            <span className="text-lg font-bold text-pacha-gold">{item.price}</span>
                        </div>
                        {isRetreat2Day ? (
                            <Link 
                                to="/retreat-2day"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : isAusangate3Day ? (
                             <Link 
                                to="/ausangate-3day"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : isAusangate7Day ? (
                             <Link 
                                to="/ausangate"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : isCostaRica ? (
                             <Link 
                                to="/costa-rica"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : isCostaRicaPilgrimage ? (
                             <Link 
                                to="/costa-rica-pilgrimage"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : isJuchuy ? (
                             <Link 
                                to="/juchuy-qosqo"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : isOneDay ? (
                             <Link 
                                to="/retreat-1day"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50 text-sm"
                            >
                                {ui.viewDetails}
                            </Link>
                        ) : (
                          <Link 
                                to="/contact"
                                className={`block w-full text-center font-bold py-2 rounded-lg transition-colors border text-sm bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white border-pacha-leaf/50`}
                            >
                                {ui.inquire}
                            </Link>
                        )}
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Comparison Table */}
        <div className="max-w-5xl mx-auto bg-pacha-stone/80 backdrop-blur-md rounded-xl overflow-hidden border border-pacha-gold/20 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/40 text-pacha-gold uppercase text-xs tracking-widest border-b border-pacha-gold/20">
                  <th className="p-4 font-bold min-w-[150px]">{ui.service || 'Service'}</th>
                  <th className="p-4 font-bold min-w-[120px]">{ui.location}</th>
                  <th className="p-4 font-bold min-w-[100px]">{ui.duration || 'Duration'}</th>
                  <th className="p-4 font-bold min-w-[100px]">{ui.capacity}</th>
                  <th className="p-4 font-bold text-right min-w-[100px]">{ui.contribution}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm text-gray-300">
                {t.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white">{item.title}</td>
                    <td className="p-4">{item.details?.location || '-'}</td>
                    <td className="p-4">{item.details?.duration || '-'}</td>
                    <td className="p-4">{item.details?.groupSize || '-'}</td>
                    <td className="p-4 text-right text-pacha-gold font-bold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};