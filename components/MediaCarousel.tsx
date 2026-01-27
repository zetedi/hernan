import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface MediaItem {
  type: 'video' | 'image';
  src: string;
  poster?: string;
  alt?: string;
  credit?: string;
}

export const MediaCarousel: React.FC<{ items: MediaItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[currentIndex];

  if (!current) return null;

  return (
    <div className="relative w-full h-full group select-none">
       {current.type === 'video' ? (
         <video 
            src={current.src}
            poster={current.poster}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
         />
       ) : (
         <img 
            src={current.src}
            alt={current.alt || 'Image'}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
         />
       )}
       
       {/* Overlay */}
       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

       {/* Credit Overlay */}
       {current.credit && (
         <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
            <span 
              className="text-[10px] text-white/80 bg-black/50 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
              dangerouslySetInnerHTML={{ __html: current.credit }} 
            />
         </div>
       )}

       {items.length > 1 && (
         <>
            {/* Arrows */}
            <button 
                onClick={prev} 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm"
                aria-label="Previous"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={next} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm"
                aria-label="Next"
            >
                <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {items.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full shadow-sm transition-all cursor-pointer ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                        onClick={(e) => {
                            e.preventDefault(); 
                            e.stopPropagation();
                            setCurrentIndex(idx);
                        }}
                    />
                ))}
            </div>
         </>
       )}
    </div>
  );
};