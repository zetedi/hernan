import React from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';

interface AboutProps {
  t: TranslationData['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  // Ensure description is an array
  const paragraphs = Array.isArray(t.description) ? t.description : [t.description];

  // Group paragraphs for sections
  const section1Text = paragraphs.slice(0, 2); // Intro + Tradition
  const section2Text = [paragraphs[2]]; // Ccana
  const section3Text = paragraphs.slice(3); // Spirit + Location

  return (
    <section id="about" className="pt-48 pb-24 bg-pacha-stone text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <span className="text-pacha-leaf font-bold tracking-widest uppercase text-sm mb-2 block animate-fade-in">
                {t.subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
                {t.title}
            </h2>
            <div className="w-24 h-1 bg-pacha-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-24">
            
            {/* Section 1: Intro (Image Left, Text Right - adjusted for alternating flow starting visually pleasant) */}
            {/* Let's actually start Text Left / Image Right based on "alternating from left to right" typically meaning visual flow */}
            
            {/* Section 1: Text Left | Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6 leading-relaxed font-light text-lg text-justify">
                    {section1Text.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img 
                            src={IMAGES.about} 
                            alt="Hernan" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Image Left | Text Right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2 space-y-6 leading-relaxed font-light text-lg text-justify">
                    {section2Text.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img 
                            src={IMAGES.ruins} 
                            alt="Ancient Ruins" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3: Text Left | Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6 leading-relaxed font-light text-lg text-justify">
                    {section3Text.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img 
                            src={IMAGES.canyon} 
                            alt="Sacred Canyon" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

        </div>

        <div className="mt-24 flex items-center justify-center gap-4 opacity-50">
            <div className="h-px bg-pacha-leaf w-24"></div>
            <div className="text-pacha-gold text-2xl">✤</div>
            <div className="h-px bg-pacha-leaf w-24"></div>
        </div>

      </div>
    </section>
  );
};