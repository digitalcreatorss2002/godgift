import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Star, Gift } from 'lucide-react';
import { fetchHeroBanners, getImageSrc } from '../../services/api';

const DEFAULT_BANNER = {
  badge_text: "SACRED ARTS & HERITAGE",
  title: "Handcrafted with Devotion & Legacy",
  subtitle: "Explore our signature collection of hand-painted oil paintings, hand-cast brass murtis, copper puja sets, and bespoke corporate gift hampers.",
  media_type: "none",
  media_url: "",
  button_text: "Explore Collection",
  button_link: "#collections",
  sec_button_text: "B2B Enquiry",
  sec_button_link: "#b2b-enquiry"
};

export default function HeroBanner() {
  const [banner, setBanner] = useState(DEFAULT_BANNER);

  useEffect(() => {
    fetchHeroBanners().then(res => {
      let b = null;
      if (res && typeof res === 'object' && !Array.isArray(res) && res.title) {
        b = res;
      } else if (res && Array.isArray(res) && res.length > 0) {
        b = res[0];
      }

      if (b) {
        const rawUrl = (b.media_url || '').trim();
        const isDummyFallback = !rawUrl || rawUrl.includes('god-banner.mp4') || rawUrl.includes('col3.jpg');
        setBanner({
          ...b,
          media_type: isDummyFallback ? 'none' : (b.media_type || 'image'),
          media_url: isDummyFallback ? '' : getImageSrc(rawUrl)
        });
      }
    });
  }, []);

  return (
    <section className="relative w-full h-[270px] sm:h-[350px] md:h-[380px] bg-stone-950 text-white overflow-hidden flex items-center rounded-b-2xl sm:rounded-b-[2.5rem] shadow-xl border-b border-stone-800/60">

      {/* Clean Black Ambient Background Media (Renders only if custom media uploaded in Admin) */}
      <div className="absolute inset-0 overflow-hidden">
        {banner.media_type === 'video' && banner.media_url ? (
          <video
            key={banner.media_url}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setBanner(prev => ({ ...prev, media_type: 'none', media_url: '' }))}
            className="w-full h-full object-cover scale-100 filter brightness-125"
          >
            <source src={banner.media_url} type="video/mp4" />
          </video>
        ) : banner.media_type === 'image' && banner.media_url ? (
          <img
            key={banner.media_url}
            src={banner.media_url}
            alt={banner.title}
            onError={() => setBanner(prev => ({ ...prev, media_type: 'none', media_url: '' }))}
            className="w-full h-full object-cover scale-100 filter brightness-110"
          />
        ) : null}

        {/* Soft Localized Left Vignette (Keeps 75% of background image bright, ensures 100% text contrast on left) */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 bg-gradient-to-r from-stone-950/85 via-stone-950/50 to-transparent pointer-events-none z-5" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 w-full py-3 sm:py-4 space-y-2 sm:space-y-3">

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/60 text-amber-300 text-[10px] sm:text-xs font-bold backdrop-blur-md border border-white/20 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{banner.badge_text || "Sacred Arts & Heritage"}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {banner.title}
        </h1>

        {/* Subtext */}
        {banner.subtitle && (
          <p className="hidden sm:block text-stone-100 text-xs sm:text-sm leading-relaxed font-medium max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            {banner.subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={banner.button_link || "#collections"}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-900 hover:bg-stone-950 text-white font-bold text-[11px] sm:text-xs md:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer border border-amber-700/50"
          >
            <span>{banner.button_text || "Explore Collection"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={banner.sec_button_link || "#b2b-enquiry"}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-stone-950/60 hover:bg-stone-950/80 text-white font-bold text-[11px] sm:text-xs md:text-sm px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full backdrop-blur-md border border-white/30 transition-all shadow-lg cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>{banner.sec_button_text || "B2B Enquiry"}</span>
          </a>
        </div>

        {/* Trust Micro Stats Bar */}
        <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-stone-200 font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">4.9 / 5.0</span>
            <span className="hidden sm:inline">Rating (2,500+ Reviews)</span>
          </div>
          <span className="text-stone-400">•</span>
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