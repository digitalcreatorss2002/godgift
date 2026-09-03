import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Star, Gift } from 'lucide-react';
import { fetchHeroBanners, getImageSrc } from '../../services/api';

const DEFAULT_BANNER = {
  badge_text: "SACRED ARTS & HERITAGE",
  title: "Handcrafted with Devotion & Legacy",
  subtitle: "Explore our signature collection of hand-painted oil paintings, hand-cast brass murtis, copper puja sets, and bespoke corporate gift hampers.",
  media_type: "video",
  media_url: "/god-banner.mp4",
  button_text: "Explore Collection",
  button_link: "#collections",
  sec_button_text: "B2B Enquiry",
  sec_button_link: "#b2b-enquiry"
};

export default function HeroBanner() {
  const [banner, setBanner] = useState(DEFAULT_BANNER);

  useEffect(() => {
    fetchHeroBanners().then(res => {
      if (res && typeof res === 'object' && !Array.isArray(res) && res.title) {
        setBanner({
          ...res,
          media_url: getImageSrc(res.media_url)
        });
      } else if (res && Array.isArray(res) && res.length > 0) {
        setBanner({
          ...res[0],
          media_url: getImageSrc(res[0].media_url)
        });
      }
    });
  }, []);

  return (
    <section className="relative w-full h-[270px] sm:h-[350px] md:h-[380px] bg-stone-950 text-white overflow-hidden flex items-center rounded-b-2xl sm:rounded-b-[2.5rem] shadow-xl border-b border-stone-800/60">

      {/* Fixed Ambient Background Media (Video or Image) */}
      <div className="absolute inset-0 overflow-hidden">
        {banner.media_type === 'video' ? (
          <video
            key={banner.media_url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 filter brightness-125"
          >
            <source src={banner.media_url} type="video/mp4" />
          </video>
        ) : (
          <img
            key={banner.media_url}
            src={banner.media_url}
            alt={banner.title}
            className="w-full h-full object-cover scale-100 filter brightness-110"
          />
        )}

        {/* Dark Gradient Overlays for 100% Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-stone-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 w-full py-3 sm:py-4 space-y-2 sm:space-y-3">

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] sm:text-xs font-semibold backdrop-blur-md border border-white/20 shadow-sm">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{banner.badge_text || "Sacred Arts & Heritage"}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
          {banner.title}
        </h1>

        {/* Subtext */}
        {banner.subtitle && (
          <p className="hidden sm:block text-stone-200 text-xs sm:text-sm leading-relaxed font-normal max-w-xl drop-shadow-sm">
            {banner.subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={banner.button_link || "#collections"}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-900 hover:bg-stone-950 text-white font-bold text-[11px] sm:text-xs md:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{banner.button_text || "Explore Collection"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={banner.sec_button_link || "#b2b-enquiry"}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] sm:text-xs md:text-sm px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full backdrop-blur-md border border-white/25 transition-all cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>{banner.sec_button_text || "B2B Enquiry"}</span>
          </a>
        </div>

        {/* Trust Micro Stats Bar */}
        <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-stone-300 font-medium">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">4.9 / 5.0</span>
            <span className="hidden sm:inline">Rating (2,500+ Reviews)</span>
          </div>
          <span className="text-stone-600">•</span>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-white font-bold">100% Pure</span>
            <span className="hidden sm:inline">Guaranteed Quality</span>
          </div>
        </div>

      </div>

    </section>
  );
}