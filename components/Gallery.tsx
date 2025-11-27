import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pacha-earth mb-12 text-center">
            Gallery
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {IMAGES.gallery.map((src, idx) => (
                <div 
                    key={idx} 
                    className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group cursor-pointer relative"
                    onClick={() => setSelectedImage(src)}
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
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none"
                aria-label="Close gallery"
                onClick={() => setSelectedImage(null)}
            >
                <X size={40} />
            </button>
            <div className="relative max-w-7xl max-h-[90vh]">
                <img 
                    src={selectedImage} 
                    alt="Full screen view" 
                    className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
        </div>
      )}
    </section>
  );
};