import React from 'react';
import { STORE_CONFIG } from '../../constants/theme';

export default function AnnouncementBar() {
  return (
    <div className="bg-stone-950 text-stone-200 text-xs sm:text-sm py-2 px-4 text-center tracking-wide font-medium border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
        <span>{STORE_CONFIG.announcement}</span>
        <span className="text-stone-500">•</span>
        <span className="text-amber-400 font-semibold">Handcrafted Legacy</span>
      </div>
    </div>
  );
}
