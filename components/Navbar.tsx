import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, TranslationData } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  t: TranslationData['nav'];
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, currentLanguage, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t.home, path: '/' },
    { label: t.about, path: '/about' },
    { label: t.services, path: '/services' },
    { label: t.gallery, path: '/gallery' },
    { label: t.contact, path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-pacha-gold font-bold' : 'text-gray-300 hover:text-pacha-gold';
  };

  return (
    <nav className="fixed w-full z-50 bg-pacha-stone/90 backdrop-blur-sm border-b border-pacha-leaf shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Leaf className="text-pacha-gold h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-xl tracking-wider uppercase">Hernan</span>
              <span className="text-pacha-gold text-xs tracking-[0.2em] uppercase">Wachuma</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-medium text-sm tracking-wide transition-colors uppercase ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-pacha-earth border-t border-pacha-leaf">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-center uppercase ${
                  location.pathname === link.path ? 'bg-pacha-leaf text-white' : 'text-gray-300 hover:text-white hover:bg-pacha-leaf/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};