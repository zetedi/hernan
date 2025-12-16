import React from 'react';
import { TranslationData } from '../types';
import { Mail, MapPin, Instagram, Facebook, Phone } from 'lucide-react';
import { IMAGES } from '../constants';

interface ContactProps {
  t: TranslationData['contact'];
  footerT: TranslationData['footer'];
  ui: TranslationData['ui'];
}

export const Contact: React.FC<ContactProps> = ({ t, footerT, ui }) => {
  return (
    <section id="contact" className="relative bg-pacha-stone text-gray-300 min-h-screen flex items-center">
      {/* Background Image - Parallax (Disabled on Mobile) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-scroll md:bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.connect})` }}
      >
         <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-24 pb-12">
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-gold mb-8">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
            {t.info}
          </p>
          
          <div className="bg-pacha-earth/30 p-10 rounded-3xl border border-white/10 backdrop-blur-md inline-block w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-center">
                
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-pacha-leaf/20 rounded-full flex items-center justify-center mb-2">
                        <MapPin className="text-pacha-gold w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">{ui.location}</h4>
                        <p className="text-gray-400">Sacred Valley, Cusco, Peru</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-pacha-leaf/20 rounded-full flex items-center justify-center mb-2">
                        <Mail className="text-pacha-gold w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">{ui.email}</h4>
                        <a href="mailto:hernan.wachuma@gmail.com" className="text-gray-400 hover:text-white transition-colors text-lg break-all">
                            hernan.wachuma@gmail.com
                        </a>
                    </div>
                </div>

                 <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-pacha-leaf/20 rounded-full flex items-center justify-center mb-2">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-green-500">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">{ui.whatsapp}</h4>
                        <a 
                            href={`https://wa.me/${footerT.columns.contact.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-lg"
                        >
                            {footerT.columns.contact.phone}
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">{ui.connectWithUs}</p>
                <div className="flex gap-6 justify-center">
                    <a href="https://www.instagram.com/hernan_wachuma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#E1306C] hover:bg-pacha-gold hover:text-pacha-earth transition-colors transform hover:scale-110 duration-300">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/hernan.wachuma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#1877F2] hover:bg-pacha-gold hover:text-pacha-earth transition-colors transform hover:scale-110 duration-300">
                        <Facebook size={24} />
                    </a>
                </div>
            </div>
          </div>

      </div>
    </section>
  );
};