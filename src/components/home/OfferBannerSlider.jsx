import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Copy, Check, Tag, Sparkles, ArrowRight } from 'lucide-react';

export default function OfferBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);

  const slides = [
    {
      id: 1,
      tag: "Festive Season Special",
      title: "Devotional Festive Mahotsav — Up to 30% OFF",
      subtitle: "Flat 30% discount on all Hand-Cast Brass Idols & Antique Diyas.",
      code: "FESTIVE30",
      validity: "Valid on orders above ₹1,999",
      badgeColor: "bg-amber-400 text-stone-950",
      ctaText: "Shop Festive Sale",
      ctaLink: "#featured-products",
      image: "/offer1.png"
    },
    {
      id: 2,
      tag: "Free Gift Offer",
      title: "Complimentary Pure Copper Kalash with Every Order",
      subtitle: "Get an authentic engraved copper kalash free on purchase above ₹2,999.",
      code: "FREECOPPER",
      validity: "Auto-applied at checkout",
      badgeColor: "bg-emerald-400 text-stone-950",
      ctaText: "Claim Free Gift",
      ctaLink: "#featured-products",
      image: "/offer2.png"
    },
    {
      id: 3,
      tag: "Corporate & Festive Gifting",
      title: "Flat 20% OFF Corporate Gifting Hampers",
      subtitle: "Custom logo greeting cards & luxury velvet gift box packaging included.",
      code: "BULK20",
      validity: "Minimum order 10 hamper sets",
      badgeColor: "bg-rose-400 text-stone-950",
      ctaText: "Inquire Hampers",
      ctaLink: "#corporate-gifting",
      image: "/offer3.png"
    }
  ];

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  // const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  // const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950">

        {/* Uniform Height Slide Container */}
        <div className="relative h-[360px] sm:h-[380px] w-full overflow-hidden flex items-center">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
              >
                {/* 100% Full Cover Offer Banner Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover scale-100 filter brightness-95"
                  />

                  {/* High Contrast Gradient Scrim Overlay for 100% Crisp Text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/30" />
                </div>

                {/* Offer Content Box */}
                <div className="relative z-20 p-8 sm:p-12 max-w-2xl text-white space-y-4">

                  {/* Offer Tag Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-200 font-normal leading-relaxed max-w-lg drop-shadow-xs">
                    {slide.subtitle}
                  </p>

                  {/* Coupon Code Box & Action Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">

                    {/* Copy Coupon Box */}
                    <div className="inline-flex items-center gap-2 bg-stone-950/80 backdrop-blur-md border border-amber-400/40 rounded-2xl p-2 px-3.5 shadow-lg">
                      <Tag className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-stone-400 font-mono">Use Code:</span>
                      <span className="text-sm font-extrabold text-amber-300 tracking-wider font-mono">
                        {slide.code}
                      </span>
                      <button
                        onClick={() => handleCopyCode(slide.code)}
                        className="ml-2 p-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl transition-colors text-xs font-bold flex items-center gap-1 shadow-xs"
                        title="Copy Promo Code"
                      >
                        {copiedCode === slide.code ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* CTA Link */}
                    {/* <a
                      href={slide.ctaLink}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a> */}

                  </div>

                  {/* Validity Disclaimer */}
                  <div className="text-[11px] text-stone-300 font-medium">
                    * {slide.validity}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Previous & Next Slide Controls */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-stone-950/60 hover:bg-stone-950 text-white border border-white/20 backdrop-blur-md transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button> */}

        {/* <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-stone-950/60 hover:bg-stone-950 text-white border border-white/20 backdrop-blur-md transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button> */}

        {/* Slide Indicators / Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
