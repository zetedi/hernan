import React, { useState } from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang: Language) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-white hover:text-pacha-gold transition-colors focus:outline-none"
        aria-label="Select Language"
      >
        <Globe size={20} />
        <span className="font-bold">{currentLanguage}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-pacha-earth rounded-md shadow-lg py-1 z-50 border border-pacha-leaf">
          {Object.values(Language).map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-pacha-leaf hover:text-white transition-colors ${
                currentLanguage === lang ? 'bg-pacha-leaf/50 text-white font-bold' : 'text-gray-200'
              }`}
            >
              {lang === Language.EN && 'English'}
              {lang === Language.ES && 'Español'}
              {lang === Language.QU && 'Runasimi'}
              {lang === Language.AR && 'العربية'}
              {lang === Language.JA && '日本語'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};