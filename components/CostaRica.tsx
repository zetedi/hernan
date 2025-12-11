import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { Palmtree, Waves, Users, Eye } from 'lucide-react';
import { Preparation } from './Preparation';

interface CostaRicaProps {
  t: TranslationData['costaRica'];
  preparation: TranslationData['preparation'];
}

export const CostaRica: React.FC<CostaRicaProps> = ({ t, preparation }) => {
  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header - Parallax (Disabled on Mobile) */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES.costa})` }}
        >
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-pacha-sand via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in drop-shadow-md">
            {t.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-xl">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            {t.intro}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-pacha-leaf/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Left Column: Details Card */}
            <div className="md:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pacha-gold sticky top-32">
                    <h3 className="font-serif font-bold text-2xl text-pacha-earth mb-6">Event Details</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                <Palmtree className="w-5 h-5 text-pacha-leaf" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Location</span>
                                <span className="text-pacha-stone font-medium">{t.details.location}</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                <Users className="w-5 h-5 text-pacha-leaf" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Capacity</span>
                                <span className="text-pacha-stone font-medium">{t.details.capacity}</span>
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="bg-pacha-leaf/20 p-2 rounded-full">
                                <Waves className="w-5 h-5 text-pacha-leaf" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Theme</span>
                                <span className="text-pacha-stone font-medium">Ocean & Mountain</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <Link 
                            to="/contact"
                            className="block w-full text-center bg-pacha-earth hover:bg-pacha-stone text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg uppercase tracking-widest text-xs"
                        >
                            {t.cta}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column: Description */}
            <div className="md:col-span-2 space-y-8">
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                    {(Array.isArray(t.description) ? t.description : [t.description]).map((paragraph, idx) => (
                        <p key={idx} className="mb-6 first:text-xl first:font-light first:text-pacha-earth">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="bg-pacha-leaf/10 p-8 rounded-xl border border-pacha-leaf/20 flex gap-4 items-start">
                    <Eye className="w-8 h-8 text-pacha-leaf flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-serif font-bold text-xl text-pacha-earth mb-2">A Vision from the Medicine</h4>
                        <p className="text-gray-700 italic">
                            This gathering is not just a retreat; it is a response to a call. The medicine spoke of connecting the wisdom held in the high Andes with the purifying, fluid energy of the ocean. A pilgrimage of spirit and body.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* Preparation Section */}
      <Preparation data={preparation} />
    </div>
  );
};