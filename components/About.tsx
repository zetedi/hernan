import React from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';

interface AboutProps {
  t: TranslationData['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-pacha-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-pacha-gold/20 transform rotate-3 rounded-2xl"></div>
            <img 
              src={IMAGES.about}
              alt="Hernan during ceremony" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform -rotate-3 transition-transform hover:rotate-0 duration-500"
            />
          </div>

          {/* Text Content */}
          <div>
            <span className="text-pacha-leaf font-bold tracking-widest uppercase text-sm mb-2 block">
              {t.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pacha-earth mb-8">
              {t.title}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
              {(Array.isArray(t.description) ? t.description : [t.description]).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px bg-pacha-leaf/30 flex-1"></div>
              <div className="text-pacha-gold text-2xl">✤</div>
              <div className="h-px bg-pacha-leaf/30 flex-1"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};