import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Star, Gift, X } from 'lucide-react';

export default function HeroBanner() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background Video URL (Supports local video e.g., /hero-video.mp4 or online fallback)
  const videoUrl = "/god-banner.mp4";

  return (
    <>
      <section className="relative w-full h-[calc(100vh-80px)] min-h-[550px] sm:min-h-[600px] bg-stone-950 text-white overflow-hidden flex items-center">

        {/* Full Edge-to-Edge Ambient Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 filter brightness-140"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          {/* Dark Gradient Overlays for 100% Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/20" />
        </div>

        {/* Hero Content Container (Centered alignment within max-w-7xl) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full py-12 space-y-7">

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sacred Arts & Heritage Devotional Collection</span>
          </div>

          {/* Main Headline with Tight Underline Offset */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl drop-shadow-md">
            Handcrafted with <span className="text-amber-400 underline decoration-primary decoration-4 underline-offset-[2px]">Devotion</span> & Legacy
          </h1>

          {/* Subtext */}
          <p className="text-stone-200 text-base sm:text-xl leading-relaxed font-normal max-w-2xl drop-shadow-sm">
            Explore our signature collection of hand-painted oil paintings, hand-cast brass murtis, copper puja sets, and bespoke corporate gift hampers.
          </p>

          {/* CTA Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl shadow-primary/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#corporate-gifting"
              className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white font-semibold text-base sm:text-lg px-7 py-4 rounded-full backdrop-blur-md border border-white/25 transition-all"
            >
              <Gift className="w-5 h-5 text-amber-400" />
              <span>Corporate Gifting</span>
            </a>
          </div>

          {/* Trust Micro Stats */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-wrap items-center gap-8 text-xs sm:text-sm text-stone-300 font-medium">
            <div className="flex items-center gap-2">
              <Star className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
              <span className="text-white font-bold text-base">4.9 / 5.0</span> Rating (2,500+ Reviews)
            </div>
            <span className="hidden sm:inline text-stone-600">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-amber-400" />
              <span className="text-white font-bold text-base">18+ Years</span> Master Craftsmanship
            </div>
            <span className="hidden sm:inline text-stone-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
              <span className="text-white font-bold text-base">100% Guaranteed</span> Pure Quality
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
