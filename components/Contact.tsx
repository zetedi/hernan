import React from 'react';
import { TranslationData } from '../types';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { IMAGES } from '../constants';

interface ContactProps {
  t: TranslationData['contact'];
  footerT: TranslationData['footer'];
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="relative bg-pacha-stone text-gray-300 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img src={IMAGES.connect} alt="Connect Background" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-24 pb-12">
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-gold mb-8">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
            {t.info}
          </p>
          
          <div className="bg-pacha-earth/30 p-10 rounded-3xl border border-white/10 backdrop-blur-md inline-block">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-pacha-leaf/20 rounded-full flex items-center justify-center mb-2">
                        <MapPin className="text-pacha-gold w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">Location</h4>
                        <p className="text-gray-400">Sacred Valley, Cusco, Peru</p>
                    </div>
                </div>

                <div className="hidden md:block w-px h-24 bg-white/10"></div>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-pacha-leaf/20 rounded-full flex items-center justify-center mb-2">
                        <Mail className="text-pacha-gold w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">Email</h4>
                        <a href="mailto:hernan.wachuma@gmail.com" className="text-gray-400 hover:text-white transition-colors text-lg">
                            hernan.wachuma@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Connect with us</p>
                <div className="flex gap-6 justify-center">
                    <a href="https://www.instagram.com/hernan_wachuma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-pacha-gold hover:text-pacha-earth transition-colors transform hover:scale-110 duration-300">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/hernan.wachuma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-pacha-gold hover:text-pacha-earth transition-colors transform hover:scale-110 duration-300">
                        <Facebook size={24} />
                    </a>
                </div>
            </div>
          </div>

      </div>
    </section>
  );
};