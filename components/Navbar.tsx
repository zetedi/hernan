import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, TranslationData } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  t: TranslationData['nav'];
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, currentLanguage, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Trigger shrink effect after scrolling 20px
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, path: '/' },
    { label: t.about, path: '/about' },
    { label: t.services, path: '/services' },
    { label: t.gallery, path: '/gallery' },
    { label: t.faq, path: '/faq' },
    { label: t.contact, path: '/contact' },
  ];

  const isActive = (path: string) => {
    // Determine active state styling
    if (location.pathname === path) {
        return 'text-pacha-gold font-bold border-b-2 border-pacha-gold';
    }
    return 'text-white/90 hover:text-pacha-gold hover:bg-white/10 rounded-md';
  };

  // Logic for navbar background: Transparent only on Home at the top, otherwise dark stone
  const navBackgroundClass = isHome && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-pacha-stone/95 shadow-lg backdrop-blur-md';

  // Logic for logo size:
  // Mobile/Tablet: Always w-12 h-12
  // Desktop (lg+):
  //   - Scrolled: w-12 h-12
  //   - Top: w-32 h-32 (Floating large) and more padding top (mt-20) to push it down
  const logoContainerClass = isScrolled 
    ? 'w-12 h-12' 
    : 'w-12 h-12 lg:w-32 lg:h-32 lg:mt-20';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
          
          {/* Logo - Floating Effect */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo(0,0)}
          >
            <div className={`relative transition-all duration-500 ease-in-out text-white ${logoContainerClass}`}>
              <Logo className="w-full h-full object-contain drop-shadow-md" />
            </div>
            
            <div className={`flex flex-col transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-80'}`}>
              <span className="text-white font-serif font-bold text-xl tracking-wider uppercase group-hover:text-pacha-gold transition-colors shadow-black drop-shadow-md">Hernan</span>
              <span className="text-pacha-gold text-xs tracking-[0.2em] uppercase drop-shadow-md">Wachuma</span>
            </div>
          </Link>

          {/* Desktop Menu (Visible on LG and up) */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-medium text-sm tracking-wide transition-all duration-300 px-4 py-2 uppercase ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pl-4 ml-4 border-l border-white/20">
               <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
            </div>
          </div>

          {/* Mobile Menu Button (Visible up to LG) */}
          <div className="lg:hidden flex items-center gap-4">
             <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-pacha-gold focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-pacha-earth/95 backdrop-blur-xl border-t border-pacha-leaf/30 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium text-center uppercase tracking-widest ${
                  location.pathname === link.path ? 'bg-pacha-leaf/20 text-pacha-gold' : 'text-gray-200 hover:text-white hover:bg-white/5'
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