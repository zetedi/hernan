import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Sun, Calendar, Clock, MapPin, FileText } from 'lucide-react';
import { Preparation } from './Preparation';

interface Retreat1DayProps {
  t: TranslationData['retreat1Day'];
  preparation: TranslationData['preparation'];
  ui: TranslationData['ui'];
}

export const Retreat1Day: React.FC<Retreat1DayProps> = ({ t, preparation, ui }) => {
  const content = t;

  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header - Parallax (Disabled on Mobile) */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES.flowers})` }}
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
          {/* Flyer Link Button */}
          <div className="mt-8 flex justify-center">
            <Link 
                to="/flyer?event=retreat1Day" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-pacha-gold text-white hover:text-pacha-stone border border-white/30 hover:border-pacha-gold font-bold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg group uppercase tracking-widest text-sm"
            >
                <FileText size={18} className="group-hover:scale-110 transition-transform" />
                <span>{ui.viewFlyer}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-pacha-leaf/10">
                <Clock className="w-8 h-8 text-pacha-leaf mx-auto mb-3" />
                <h3 className="font-bold text-pacha-earth mb-1">{t.details.durationLabel}</h3>
                <p className="text-gray-600 text-sm">{t.details.durationValue}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-pacha-leaf/10">
                <MapPin className="w-8 h-8 text-pacha-leaf mx-auto mb-3" />
                <h3 className="font-bold text-pacha-earth mb-1">{t.details.locationLabel}</h3>
                <p className="text-gray-600 text-sm">{t.details.locationValue}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-pacha-leaf/10">
                <Sun className="w-8 h-8 text-pacha-leaf mx-auto mb-3" />
                <h3 className="font-bold text-pacha-earth mb-1">{t.details.focusLabel}</h3>
                <p className="text-gray-600 text-sm">{t.details.focusValue}</p>
            </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-4 border-pacha-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Sun size={150} className="text-pacha-leaf" />
            </div>
            
            {content.days && content.days.map((day, index) => (
                <div key={index} className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-pacha-earth mb-4">
                        {day.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {day.content}
                    </p>
                    
                    {day.accommodation && (
                        <div className="bg-pacha-sand/30 p-4 rounded-lg flex gap-3 items-start mt-8">
                            <p className="text-sm text-gray-600 italic">
                                <span className="font-bold text-pacha-earth not-italic block mb-1">{ui.note}:</span>
                                {day.accommodation}
                            </p>
                        </div>
                    )}
                </div>
            ))}
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
                <span>{ui.bookCeremony}</span>
            </Link>
        </div>

      </div>

      {/* Preparation Section */}
      <Preparation data={preparation} />
    </div>
  );
};