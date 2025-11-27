import React from 'react';
import { TranslationData } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  t: TranslationData['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section className="py-24 bg-pacha-leaf/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-pacha-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-pacha-earth/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pacha-earth mb-16 text-center">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl relative">
              <Quote className="absolute top-6 left-6 text-pacha-gold/30 w-12 h-12 transform -scale-x-100" />
              <div className="relative z-10">
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${index}/100/100`} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-pacha-earth font-serif">{item.name}</h4>
                        <span className="text-sm text-pacha-leaf uppercase tracking-wider">{item.location}</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};