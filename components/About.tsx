import React from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';

interface AboutProps {
  t: TranslationData['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="pt-48 pb-20 bg-pacha-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clearfix">
          {/* Floated Image */}
          <div className="float-left mr-8 mb-4 w-40 md:w-72">
            <div className="relative">
                <img 
                src={IMAGES.about}
                alt="Hernan during ceremony" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-pacha-leaf font-bold tracking-widest uppercase text-sm mb-2 block">
              {t.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              {t.title}
            </h2>
            <div className="space-y-6 text-base text-gray-300 leading-relaxed font-light">
              {(Array.isArray(t.description) ? t.description : [t.description]).map((paragraph, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
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