import React from 'react';
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
                <span className="text-pacha-gold text-xs tracking-[0.2em] uppercase">Wachuma</span>
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
                <a href={data.columns.follow.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pacha-gold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href={data.columns.follow.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pacha-gold transition-colors">
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
           <p>&copy; {new Date().getFullYear()} Hernan Wachuma. {data.rights}</p>
        </div>
      </div>
    </footer>
  );
};