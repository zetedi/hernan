import React from 'react';
import { TranslationData } from '../types';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface PreparationProps {
  data?: TranslationData['preparation'];
}

export const Preparation: React.FC<PreparationProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-20 border-t border-pacha-leaf/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-pacha-gold font-bold tracking-widest uppercase text-sm mb-2 block">
            {data.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-earth mb-6">
            {data.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {data.intro}
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Diet Section */}
          <div className="bg-pacha-sand/20 rounded-2xl p-8 md:p-10 border border-pacha-leaf/20">
            <h3 className="text-2xl font-serif font-bold text-pacha-earth mb-4">
              {data.diet.title}
            </h3>
            {data.diet.description && (
              <p className="text-gray-700 mb-6">{data.diet.description}</p>
            )}
            <ul className="space-y-4">
              {data.diet.items.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-pacha-leaf flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-pacha-earth block mb-1">{item.label}</span>
                    <span className="text-gray-600 leading-relaxed">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Packing Section */}
          <div className="bg-pacha-earth/5 rounded-2xl p-8 md:p-10 border border-pacha-stone/10">
            <h3 className="text-2xl font-serif font-bold text-pacha-earth mb-4">
              {data.packing.title}
            </h3>
            {data.packing.description && (
              <p className="text-gray-700 mb-6">{data.packing.description}</p>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {data.packing.items.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <span className="font-bold text-pacha-gold block mb-1 text-sm uppercase tracking-wide">{item.label}</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-pacha-earth mb-6 text-center">
              {data.suggestions.title}
            </h3>
            {data.suggestions.description && (
              <p className="text-gray-600 text-center mb-8">{data.suggestions.description}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              {data.suggestions.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 border-l-4 border-pacha-gold bg-pacha-sand/10">
                  <div>
                    <span className="font-bold text-pacha-earth block">{item.label}</span>
                    <span className="text-gray-600 text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center italic text-gray-500 max-w-2xl mx-auto border-t border-b border-gray-100 py-8">
            "{data.closing}"
          </div>

          {/* Risk Disclosure - Warning Style */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 md:p-10">
             <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-red-800 w-8 h-8" />
                <h3 className="text-2xl font-serif font-bold text-red-900">
                    {data.risks.title}
                </h3>
             </div>
             
             <p className="text-red-800/80 mb-8 font-medium">
                {data.risks.intro}
             </p>

             <div className="space-y-8">
                {data.risks.sections.map((section, idx) => (
                    <div key={idx}>
                        <h4 className="font-bold text-red-900 uppercase tracking-wide mb-4 text-sm border-b border-red-200 pb-2">
                            {section.title}
                        </h4>
                        <ul className="space-y-3">
                            {section.items.map((item, i) => (
                                <li key={i} className="text-red-900/90 text-sm">
                                    <strong className="text-red-950 block mb-1">{item.label}</strong>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};