import React from 'react';
import { STORE_CONFIG } from '../../constants/theme';
import { Truck, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-stone-950 text-stone-200 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-stone-800/80 tracking-tight">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        {/* Desktop View */}
        <div className="hidden sm:flex items-center justify-center gap-2">
          <Truck className="w-3.5 h-3.5 text-amber-400" />
          <span>{STORE_CONFIG.announcement}</span>
          <span className="text-stone-600">•</span>
          <span className="text-amber-400 font-bold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Handcrafted Jaipur Legacy
          </span>
        </div>

        {/* Mobile Compact View */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 py-0.5 text-stone-200 font-semibold">
          <Truck className="w-3 h-3 text-amber-400 shrink-0" />
          <span>Free Express Shipping Above ₹999</span>
        </div>
      </div>
    </div>
  );
}
