import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Star, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchHeroBanners, getImageSrc } from '../../services/api';

const DEFAULT_SLIDES = [
  {
    id: 1,
    badge_text: "SACRED ARTS & HERITAGE",
    title: "Handcrafted with Devotion & Legacy",
    subtitle: "Explore our signature collection of hand-painted oil paintings, hand-cast brass murtis, copper puja sets, and bespoke corporate gift hampers.",
    media_type: "video",
    media_url: "/god-banner.mp4",
    button_text: "Explore Collection",
    button_link: "#collections"
  },
  {
    id: 2,
    badge_text: "ROYAL JAIPUR CRAFT",
    title: "Authentic Jaipur Brass Idols & Murtis",
    subtitle: "Pure solid brass lost-wax cast idols sanctified for your home pooja mandir and workplace.",
    media_type: "image",
    media_url: "/hero-banner.jpeg",
    button_text: "Shop Brass Idols",
    button_link: "#shop"
  }
];

export default function HeroBanner() {
  const [slides, setSlides] = useState(DEFAULT_SLIDES);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchHeroBanners().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = res.map(slide => ({
          ...slide,
          media_url: getImageSrc(slide.media_url)
        }));
        setSlides(mapped);
      }
    });
  }, []);

  // Auto-play slider (Change slide every 7 seconds)
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex] || slides[0] || DEFAULT_SLIDES[0];

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[270px] sm:h-[350px] md:h-[380px] bg-stone-950 text-white overflow-hidden flex items-center rounded-b-2xl sm:rounded-b-[2.5rem] shadow-xl border-b border-stone-800/60 group">

      {/* Dynamic Slide Background Media (Video or Image) */}
      <div className="absolute inset-0 overflow-hidden">
        {currentSlide.media_type === 'video' ? (
          <video
            key={currentSlide.media_url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 filter brightness-125 transition-opacity duration-700"
          >
            <source src={currentSlide.media_url} type="video/mp4" />
          </video>
        ) : (
          <img
            key={currentSlide.media_url}
            src={currentSlide.media_url}
            alt={currentSlide.title}
            className="w-full h-full object-cover scale-100 filter brightness-110 transition-opacity duration-700"
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
          <span>{currentSlide.badge_text || "Sacred Arts & Heritage"}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
          {currentSlide.title}
        </h1>

        {/* Subtext */}
        {currentSlide.subtitle && (
          <p className="hidden sm:block text-stone-200 text-xs sm:text-sm leading-relaxed font-normal max-w-xl drop-shadow-sm">
            {currentSlide.subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={currentSlide.button_link || "#collections"}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-900 hover:bg-stone-950 text-white font-bold text-[11px] sm:text-xs md:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{currentSlide.button_text || "Explore Collection"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#b2b-enquiry"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-[11px] sm:text-xs md:text-sm px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full backdrop-blur-md border border-white/25 transition-all cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>B2B Enquiry</span>
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

      {/* Prev / Next Controls (Shown if more than 1 slide) */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            aria-label="Previous Banner Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            aria-label="Next Banner Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

    </section>
  );
}