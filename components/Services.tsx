import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { Sun, Moon, Sparkles, Mountain } from 'lucide-react';

interface ServicesProps {
  t: TranslationData['services'];
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const icons = [Sun, Moon, Sparkles];

  return (
    <section id="services" className="pt-32 pb-24 bg-pacha-stone text-white relative">
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
            return (
              <div key={index} className="bg-pacha-earth/50 border border-pacha-leaf/30 p-8 rounded-xl hover:bg-pacha-earth hover:border-pacha-gold transition-all duration-300 group">
                <div className="w-14 h-14 bg-pacha-stone rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-pacha-gold/20">
                  <Icon className="text-pacha-gold w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-100 group-hover:text-pacha-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                  {item.description}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-pacha-sand font-mono text-sm uppercase tracking-wider">Contribution</span>
                  <span className="text-xl font-bold text-pacha-gold">{item.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ausangate Featured Link */}
        <div className="relative rounded-2xl overflow-hidden group shadow-2xl">
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gradient-to-r from-pacha-stone to-pacha-earth/80 z-10"></div>
             {/* If you had the image here it would be good, but standard gradient works for now */}
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