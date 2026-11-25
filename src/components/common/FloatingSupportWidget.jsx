import React, { useState } from 'react';
import { 
  Headphones, 
  Phone, 
  MessageCircle, 
  X,
  ChevronDown
} from 'lucide-react';

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.76.78 1.76 1.75-.79 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function FloatingSupportWidget() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Floating Menu Card */}
      {isOpen && (
        <div className="mb-3 w-64 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* Card Header with Close button */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-stone-50 border-b border-stone-100">
            <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Direct Support
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-0.5 rounded-md hover:bg-stone-200/60 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Links */}
          <div className="p-2 space-y-1 text-xs">
            
            {/* 1. LinkedIn */}
            <a
              href="https://linktr.ee/godgiftarts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-stone-700 hover:text-blue-700 hover:bg-stone-50 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-stone-800 group-hover:text-blue-700 transition-colors">
                Follow us on Linkedin
              </span>
            </a>

            {/* 2. Instagram */}
            <a
              href="https://linktr.ee/godgiftarts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-stone-700 hover:text-pink-600 hover:bg-stone-50 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-stone-800 group-hover:text-pink-600 transition-colors">
                Follow us on Instagram
              </span>
            </a>

            {/* 3. Call Helpline */}
            <a
              href="tel:+919211672167"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-stone-700 hover:text-amber-900 hover:bg-stone-50 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center relative group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500 border border-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-stone-800 group-hover:text-amber-900 transition-colors">
                  Call +91 92116 72167
                </span>
                <span className="text-[10px] text-stone-400">or +91 82874 21378</span>
              </div>
            </a>

            {/* 4. Chat on WhatsApp */}
            <a
              href="https://wa.me/919211672167?text=Hello%20God%20Gift%20Arts%2C%20I%20have%20an%20enquiry%20regarding%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors group border-t border-stone-100"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center relative group-hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white animate-ping"></span>
              </div>
              <span className="font-bold text-emerald-800">
                Chat on Whatsapp
              </span>
            </a>

          </div>
        </div>
      )}

      {/* Floating Headset Trigger Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Toggle contact options"
        className="w-13 h-13 rounded-full bg-amber-800 hover:bg-amber-900 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white relative cursor-pointer"
      >
        {isOpen ? (
          <ChevronDown className="w-6 h-6 transition-transform" />
        ) : (
          <>
            <Headphones className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white"></span>
          </>
        )}
      </button>

    </div>
  );
}
