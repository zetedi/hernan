
import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Use the image list directly from constants (which is already sorted and dynamic)
  const galleryImages = IMAGES.gallery;

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
      setSelectedIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      // Swiped Left -> Next Image
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
    }
    if (isRightSwipe) {
      // Swiped Right -> Previous Image
      setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
    }
  };

  return (
    <section id="gallery" className="pt-32 pb-20 bg-pacha-stone min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            Gallery
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, idx) => (
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
                        loading="lazy"
                        decoding="async"
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
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Close Button */}
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none z-50 p-2 bg-black/20 rounded-full"
                aria-label="Close gallery"
                onClick={() => setSelectedIndex(null)}
            >
                <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 md:p-3 focus:outline-none z-50 bg-black/20 rounded-full backdrop-blur-sm"
                onClick={handlePrev}
                aria-label="Previous image"
            >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 md:p-3 focus:outline-none z-50 bg-black/20 rounded-full backdrop-blur-sm"
                onClick={handleNext}
                aria-label="Next image"
            >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <div className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center px-8 md:px-12 select-none">
                <img 
                    src={galleryImages[selectedIndex]} 
                    alt="Full screen view" 
                    className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl pointer-events-none md:pointer-events-auto"
                    // Pointer events none on mobile image to allow touch events to pass through for swiping if needed, 
                    // though touch events on container should handle it.
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                {selectedIndex + 1} / {galleryImages.length}
            </div>
        </div>
      )}
    </section>
  );
};
