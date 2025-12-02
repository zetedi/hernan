import React from 'react';
import { TranslationData } from '../types';
import { Heart, Leaf, Eye } from 'lucide-react';

interface BenefitsProps {
  t: TranslationData['benefits'];
}

export const Benefits: React.FC<BenefitsProps> = ({ t }) => {
  const icons = [Heart, Leaf, Eye];

  return (
    <section className="py-20 bg-pacha-sand/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pacha-leaf font-bold tracking-widest uppercase text-sm mb-2 block">
            {t.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-earth">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 border border-pacha-gold/20">
                  <Icon className="text-pacha-earth w-10 h-10 group-hover:text-pacha-gold transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold text-pacha-stone mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};