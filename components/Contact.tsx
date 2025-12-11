import React, { useState } from 'react';
import { TranslationData } from '../types';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { IMAGES } from '../constants';

interface ContactProps {
  t: TranslationData['contact'];
  footerT: TranslationData['footer'];
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:info@hernan-wachuma.com?subject=${encodeURIComponent(subject)}&body=${body}`; // Note: body isn't fully supported in all mail clients via URL, but works in many

    // Open mail client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative bg-pacha-stone text-gray-300 min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img src={IMAGES.connect} alt="Connect Background" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-20 md:pt-56 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-pacha-gold mb-8">
              {t.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light">
              {t.info}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-pacha-gold w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Sacred Valley of the Incas, Cusco, Peru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-pacha-gold w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">info@hernan-wachuma.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pacha-gold hover:text-pacha-earth transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pacha-gold hover:text-pacha-earth transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-pacha-earth/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-pacha-gold mb-2 uppercase tracking-wider">{t.form.name}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pacha-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pacha-gold mb-2 uppercase tracking-wider">{t.form.email}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pacha-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pacha-gold mb-2 uppercase tracking-wider">{t.form.message}</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pacha-gold transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-pacha-leaf hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors uppercase tracking-widest shadow-lg"
              >
                {t.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};