import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Sun, Moon, Sparkles, Mountain } from 'lucide-react';

interface ServicesProps {
  t: TranslationData['services'];
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const icons = [Sun, Moon, Sparkles];

  return (
    <section id="services" className="pt-32 pb-24 bg-pacha-stone text-white relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-gold mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-pacha-leaf mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isRetreat2Day = item.title.includes("2 Day") || item.title.includes("2 Días") || item.title.includes("2 P'unchaw") || item.title.includes("لمدة يومين") || item.title.includes("2日間") || item.title.includes("2 Napos") || item.title.includes("२ दिवसीय");
            const isDeeperWork = item.title.includes("15 Day") || item.title.includes("15 Días") || item.title.includes("15 P'unchaw") || item.title.includes("15 يومًا") || item.title.includes("15日間") || item.title.includes("15 Napos") || item.title.includes("१५ दिवसीय") || item.title.includes("Deep") || item.title.includes("Profunda");
            const isPrivate = item.title.includes("Private") || item.title.includes("Privada") || item.title.includes("Sapalla") || item.title.includes("خاص") || item.title.includes("プライベート") || item.title.includes("Privát") || item.title.includes("व्यक्तिगत");

            const isSpecialCard = isRetreat2Day || isDeeperWork || isPrivate;

            // Base styling
            const baseClasses = "border border-pacha-leaf/30 p-8 rounded-xl transition-all duration-300 group flex flex-col relative overflow-hidden backdrop-blur-sm";
            // Conditional styling: If special card (retreat or deeper work), no bg color (image used). If normal, use earth color.
            const colorClasses = isSpecialCard
                ? "hover:border-pacha-gold" 
                : "bg-pacha-earth/50 hover:bg-pacha-earth hover:border-pacha-gold";

            // Determine Background Image
            let bgImage = null;
            if (isRetreat2Day) bgImage = IMAGES.mayra;
            if (isDeeperWork) bgImage = IMAGES.drum;
            if (isPrivate) bgImage = IMAGES.private;

            return (
              <div key={index} className={`${baseClasses} ${colorClasses}`}>
                
                {/* Background Image for Special Cards */}
                {bgImage && (
                    <>
                        <img 
                            src={bgImage} 
                            alt="Background" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                    </>
                )}

                {/* Content Container (z-10 to sit above image) */}
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-pacha-stone rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-pacha-gold/20 shrink-0">
                    <Icon className="text-pacha-gold w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-gray-100 group-hover:text-pacha-gold transition-colors">
                    {item.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {item.description}
                    </p>
                    <div className="border-t border-white/10 pt-4 mt-auto">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-pacha-sand font-mono text-sm uppercase tracking-wider">Contribution</span>
                            <span className="text-xl font-bold text-pacha-gold">{item.price}</span>
                        </div>
                        {isRetreat2Day ? (
                            <Link 
                                to="/retreat-2day"
                                className="block w-full text-center bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white font-bold py-2 rounded-lg transition-colors border border-pacha-leaf/50"
                            >
                                View Details
                            </Link>
                        ) : (
                          <Link 
                                to="/contact"
                                className={`block w-full text-center font-bold py-2 rounded-lg transition-colors border ${isSpecialCard ? 'bg-pacha-gold/20 hover:bg-pacha-gold/40 text-pacha-gold border-pacha-gold/50' : 'bg-pacha-leaf/20 hover:bg-pacha-leaf/40 text-white border-pacha-leaf/50'}`}
                            >
                                Inquire
                            </Link>
                        )}
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ausangate Featured Link */}
        <div className="relative rounded-2xl overflow-hidden group shadow-2xl">
          <div className="absolute inset-0">
              <img src={IMAGES.ausangate} alt="Ausangate" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"/>
             <div className="absolute inset-0 bg-gradient-to-r from-pacha-stone to-pacha-earth/80 z-10 mix-blend-multiply"></div>
          </div>
          <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-pacha-gold">
                   <Mountain />
                   <span className="font-bold tracking-widest uppercase text-sm">Featured Experience</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  {t.ausangateCta.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl">
                  {t.ausangateCta.description}
                </p>
             </div>
             <Link 
               to="/ausangate"
               className="bg-pacha-gold hover:bg-[#b08d48] text-pacha-stone font-bold py-4 px-10 rounded-full transition-all duration-300 whitespace-nowrap uppercase tracking-widest text-sm"
             >
               {t.ausangateCta.button}
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};