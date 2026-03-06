import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Language } from '../types';

interface ViewFlyerButtonProps {
  event: string;
  lang: Language;
  label: string;
  className?: string;
}

export const ViewFlyerButton: React.FC<ViewFlyerButtonProps> = ({ event, lang, label, className = "" }) => {
  return (
    <Link 
      to={`/flyer?event=${event}&lang=${lang}`} 
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className={`inline-flex items-center gap-2 bg-pacha-gold text-pacha-stone hover:bg-[#b08d48] font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg group uppercase tracking-widest text-sm border-2 border-white/20 ${className}`}
    >
      <FileText size={18} className="group-hover:scale-110 transition-transform" />
      <span>{label}</span>
    </Link>
  );
};
