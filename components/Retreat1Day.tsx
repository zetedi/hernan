
import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationData, Language } from '../types';
import { IMAGES, getWhatsAppLink } from '../constants';
import { ViewFlyerButton } from './ViewFlyerButton';
import { Sun, Calendar, Clock, MapPin, Send } from 'lucide-react';
import { Preparation } from './Preparation';

interface Retreat1DayProps {
  t: TranslationData['retreat1Day'];
  preparation: TranslationData['preparation'];
  ui: TranslationData['ui'];
  lang?: Language;
  contactPhone: string;
}

export const Retreat1Day: React.FC<Retreat1DayProps> = ({ t, preparation, ui, lang, contactPhone }) => {
  const content = t;

  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header - Parallax (Disabled on Mobile) */}
      <div className="relative min-h-[85vh] flex items-center justify-center py-20">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${IMAGES.flowers})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-32">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
            {content.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-lg">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {content.intro}
          </p>
          {/* WhatsApp + Flyer Link */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={getWhatsAppLink(contactPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(37,211,102,0.3)] uppercase tracking-widest text-sm transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>{ui.whatsapp}</span>
            </a>
            <ViewFlyerButton 
              event="retreat1Day" 
              lang={lang || Language.ES} 
              label={ui.viewFlyer} 
            />
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
