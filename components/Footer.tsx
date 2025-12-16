import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FooterData } from '../types';
import { Logo } from './Logo';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  data: FooterData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-pacha-stone text-white pt-16 pb-8 border-t border-pacha-leaf/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 text-pacha-gold">
                <Logo className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wider uppercase">Hernan</span>
                <span className="text-pacha-gold text-xs tracking-[0.2em] uppercase">Raíces Quechua</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="font-bold text-pacha-gold uppercase tracking-wider text-sm mb-4">
              {data.columns.links.title}
            </h3>
            <ul className="space-y-2">
              {data.columns.links.items.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reviews & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-pacha-gold uppercase tracking-wider text-sm mb-4">
                {data.columns.reviews.title}
              </h3>
              <div className="flex items-center gap-2">
                 <div className="flex text-yellow-400 text-sm">★★★★★</div>
                 <span className="font-bold text-white">{data.columns.reviews.rating}</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-pacha-gold uppercase tracking-wider text-sm mb-4">
                {data.columns.follow.title}
              </h3>
              <div className="flex gap-4">
                <a href={data.columns.follow.facebook} target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href={data.columns.follow.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Find Us */}
          <div className="space-y-8">
            <div>
               <h3 className="font-bold text-pacha-gold uppercase tracking-wider text-sm mb-4">
                {data.columns.contact.title}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail size={16} className="text-pacha-leaf" />
                  <a href={`mailto:${data.columns.contact.email}`} className="hover:text-white transition-colors">{data.columns.contact.email}</a>
                </li>
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone size={16} className="text-pacha-leaf" />
                  <span>{data.columns.contact.phone}</span>
                </li>
                 {/* WhatsApp Link */}
                <li className="flex items-center gap-3 text-sm text-gray-400">
                   <a 
                      href={`https://wa.me/${data.columns.contact.phone.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-white transition-colors"
                   >
                     <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-green-500">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                     </svg>
                     <span>WhatsApp</span>
                   </a>
                </li>
              </ul>
            </div>
            <div>
               <h3 className="font-bold text-pacha-gold uppercase tracking-wider text-sm mb-4">
                {data.columns.find.title}
              </h3>
               <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-pacha-leaf mt-1" />
                  <span>{data.columns.find.address}</span>
                </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
           <p>&copy; {new Date().getFullYear()} Hernan Raíces Quechua. {data.rights}</p>
        </div>
      </div>
    </footer>
  );
};