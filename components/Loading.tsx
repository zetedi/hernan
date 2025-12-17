
import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-pacha-sand/50 w-full">
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative">
            <div className="w-16 h-16 border-4 border-pacha-gold/30 border-t-pacha-gold rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">
                🌵
            </div>
        </div>
        <span className="text-pacha-earth font-serif font-bold tracking-widest text-sm animate-pulse">Loading...</span>
      </div>
    </div>
  );
};
