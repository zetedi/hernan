import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Moon, Sun, Bed, Calendar } from 'lucide-react';
import { Preparation } from './Preparation';

interface Retreat2DayProps {
  t: TranslationData['retreat2Day'];
}

export const Retreat2Day: React.FC<Retreat2DayProps> = ({ t }) => {
  // Use a default object if t is undefined (e.g. if new language added without translation yet)
  const content = t || {
      title: "2 Day Retreat",
      subtitle: "Wayna Wasi & Kinsacocha",
      intro: "A deep immersion into the sacred medicine.",
      days: [],
      conclusion: ""
  };

  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header - Parallax (Disabled on Mobile) */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES.mayra})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
            {content.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-lg">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {content.intro}
          </p>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="space-y-12">
          {content.days && content.days.map((day, index) => {
            const Icon = index === 0 ? Sun : Moon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pacha-gold relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Icon size={100} className="text-pacha-leaf" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-pacha-earth mb-4 relative z-10">
                  {day.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  {day.content}
                </p>
                
                {day.accommodation && (
                    <div className="bg-pacha-sand/30 p-4 rounded-lg flex gap-3 items-start relative z-10">
                        <Bed className="w-5 h-5 text-pacha-leaf flex-shrink-0 mt-1" />
                        <p className="text-sm text-gray-600 italic">
                            <span className="font-bold text-pacha-earth not-italic block mb-1">Accommodation:</span>
                            {day.accommodation}
                        </p>
                    </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
            <p className="text-xl font-serif text-pacha-earth italic mb-10 max-w-2xl mx-auto">
                "{content.conclusion}"
            </p>
            <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-pacha-earth hover:bg-pacha-stone text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm"
            >
                <Calendar className="w-5 h-5" />
                <span>Book This Retreat</span>
            </Link>
        </div>

      </div>

      {/* Preparation Section */}
      {/* @ts-ignore */}
      <Preparation data={t['preparation']} />
    </div>
  );
};