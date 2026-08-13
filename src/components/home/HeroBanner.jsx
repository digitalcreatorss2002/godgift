import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Star, Gift, X } from 'lucide-react';

export default function HeroBanner() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background Video URL (Supports local video e.g., /hero-video.mp4 or online fallback)
  const videoUrl = "/god-banner.mp4";

  return (
    <>
      <section className="relative w-full h-[310px] sm:h-[350px] md:h-[380px] bg-stone-950 text-white overflow-hidden flex items-center rounded-b-3xl sm:rounded-b-[2.5rem] shadow-xl border-b border-stone-800/60">

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full py-4 space-y-3">

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] sm:text-xs font-semibold backdrop-blur-md border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sacred Arts & Heritage Devotional Collection</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
            Handcrafted with <span className="text-amber-400 underline decoration-amber-600 decoration-4 underline-offset-[2px]">Devotion</span> & Legacy
          </h1>

          {/* Subtext */}
          <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-normal max-w-xl drop-shadow-sm line-clamp-2">
            Explore our signature collection of hand-painted oil paintings, hand-cast brass murtis, copper puja sets, and bespoke corporate gift hampers.
          </p>

          {/* CTA Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 bg-amber-900 hover:bg-stone-950 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#corporate-gifting"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-4.5 py-2.5 rounded-full backdrop-blur-md border border-white/25 transition-all cursor-pointer"
            >
              <Gift className="w-4 h-4 text-amber-400" />
              <span>Corporate Gifting</span>
            </a>
          </div>

          {/* Trust Micro Stats Bar */}
          <div className="pt-3  flex flex-wrap items-center gap-6 text-[10px] sm:text-xs text-stone-300 font-medium">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-white font-bold">4.9 / 5.0</span> Rating (2,500+ Reviews)
            </div>
            <span className="hidden sm:inline text-stone-600">•</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-white font-bold">18+ Years</span> Master Craftsmanship
            </div>
            <span className="hidden sm:inline text-stone-600">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-bold">100% Guaranteed</span> Pure Quality
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
