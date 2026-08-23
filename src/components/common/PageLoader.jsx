import React from 'react';

export default function PageLoader({ text = "Loading sacred devotional artifacts..." }) {
  return (
    <div className="min-h-[65vh] flex items-center justify-center bg-brand-bg">
      <div className="text-center space-y-4 p-8">
        <div className="w-12 h-12 border-4 border-amber-900 border-t-transparent rounded-full animate-spin mx-auto shadow-sm"></div>
        <p className="text-xs sm:text-sm font-serif italic text-stone-600 tracking-wide">{text}</p>
      </div>
    </div>
  );
}
