import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % IMAGES.gallery.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + IMAGES.gallery.length) % IMAGES.gallery.length);
    }
  };

  return (
    <section id="gallery" className="pt-32 pb-20 bg-pacha-stone min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            Gallery
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {IMAGES.gallery.map((src, idx) => (
                <div 
                    key={idx} 
                    className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group cursor-pointer relative border border-white/10"
                    onClick={() => setSelectedIndex(idx)}
                >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="text-white w-8 h-8 opacity-80" />
                    </div>
                    <img 
                        src={src} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedIndex(null)}
        >
            {/* Close Button */}
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none z-50"
                aria-label="Close gallery"
                onClick={() => setSelectedIndex(null)}
            >
                <X size={40} />
            </button>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 focus:outline-none z-50 hidden md:block"
                onClick={handlePrev}
                aria-label="Previous image"
            >
                <ChevronLeft size={60} />
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 focus:outline-none z-50 hidden md:block"
                onClick={handleNext}
                aria-label="Next image"
            >
                <ChevronRight size={60} />
            </button>

            <div className="relative max-w-7xl max-h-[90vh] flex items-center justify-center">
                <img 
                    src={IMAGES.gallery[selectedIndex]} 
                    alt="Full screen view" 
                    className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm">
                {selectedIndex + 1} / {IMAGES.gallery.length}
            </div>
        </div>
      )}
    </section>
  );
};