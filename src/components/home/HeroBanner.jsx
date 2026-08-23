import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Star, Gift, X } from 'lucide-react';

export default function HeroBanner() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background Video URL (Supports local video e.g., /hero-video.mp4 or online fallback)
  const videoUrl = "/god-banner.mp4";

  return (
    <>
      <section className="relative w-full h-[270px] sm:h-[350px] md:h-[380px] bg-stone-950 text-white overflow-hidden flex items-center rounded-b-2xl sm:rounded-b-[2.5rem] shadow-xl border-b border-stone-800/60">

        {/* Full Edge-to-Edge Ambient Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 filter brightness-125"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          {/* Dark Gradient Overlays for 100% Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-stone-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/20" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 w-full py-3 sm:py-4 space-y-2 sm:space-y-3">

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] sm:text-xs font-semibold backdrop-blur-md border border-white/20 shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">Sacred Arts & Heritage Devotional Collection</span>
            <span className="sm:hidden">Sacred Devotional Collection</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
            Handcrafted with <span className="text-amber-400 underline decoration-amber-600 decoration-3 sm:decoration-4 underline-offset-[2px]">Devotion</span> & Legacy
          </h1>

          {/* Subtext (Hidden on mobile to keep banner clean & compact) */}
          <p className="hidden sm:block text-stone-200 text-xs sm:text-sm leading-relaxed font-normal max-w-xl drop-shadow-sm">
            Explore our signature collection of hand-painted oil paintings, hand-cast brass murtis, copper puja sets, and bespoke corporate gift hampers.
          </p>

          {/* CTA Buttons */}
          <div className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="#collections"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-900 hover:bg-stone-950 text-white font-bold text-[11px] sm:text-xs md:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#corporate-gifting"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] sm:text-xs md:text-sm px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full backdrop-blur-md border border-white/25 transition-all cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5 text-amber-400" />
              <span>Corporate Gifting</span>
            </a>
          </div>

          {/* Trust Micro Stats Bar (Optimized for Mobile) */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-stone-300 font-medium">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-white font-bold">4.9 / 5.0</span>
              <span className="hidden sm:inline">Rating (2,500+ Reviews)</span>
            </div>
            <span className="text-stone-600">•</span>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span className="text-white font-bold">100% Pure</span>
              <span className="hidden sm:inline">Guaranteed Quality</span>
            </div>
          </div>

        </div>

      </section>

      {/* Full Screen Video Modal Overlay */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-colors"
              aria-label="Close Video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
