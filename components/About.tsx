import React from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';

interface AboutProps {
  t: TranslationData['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="pt-32 pb-20 bg-pacha-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clearfix">
          {/* Floated Image */}
          <div className="float-left mr-6 mb-4 w-40 md:w-72">
            <div className="relative">
                <div className="absolute inset-0 bg-pacha-gold/20 transform rotate-3 rounded-2xl"></div>
                <img 
                src={IMAGES.about}
                alt="Hernan during ceremony" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform -rotate-3 transition-transform hover:rotate-0 duration-500"
                />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-pacha-leaf font-bold tracking-widest uppercase text-sm mb-2 block">
              {t.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pacha-earth mb-8">
              {t.title}
            </h2>
            <div className="space-y-6 text-base text-gray-700 leading-relaxed font-light">
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