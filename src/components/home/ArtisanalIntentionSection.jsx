import React from 'react';
import { Hammer, Truck, ShieldCheck, RotateCcw, Sparkles, ArrowRight } from 'lucide-react';
import { JaaliPatternBackground, DecorativeWavyDivider } from '../common/BackgroundIllustrations';

export default function ArtisanalIntentionSection() {
  const features = [
    {
      icon: Hammer,
      title: "JAIPUR HANDCRAFTED",
      subtitle: "100% Solid Brass Casting"
    },
    {
      icon: Truck,
      title: "EXPRESS SHIPPING",
      subtitle: "Dispatched within 24 Hours"
    },
    {
      icon: ShieldCheck,
      title: "AUTHENTIC SHASTRA CARE",
      subtitle: "Prana Pratishtha Consecrated"
    },
    {
      icon: RotateCcw,
      title: "7-DAY EASY RETURNS",
      subtitle: "100% Safe Transit Guarantee"
    }
  ];

  return (
    <section className="relative bg-[#FAF6F0] py-14 sm:py-18 border-b border-[#EADBCA]/70 overflow-hidden -mt-8">
      {/* Seamless Jaali Lattice Background Pattern */}
      <JaaliPatternBackground className="text-amber-900/12" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Header & Intention Quote */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Top Decorative Flourish Line */}
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          {/* Minimal Pill Badge */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-amber-900/90 border border-amber-900/20 bg-amber-50/80">
              Devotional Heritage • Est. 2006
            </span>
          </div>

          {/* Clean Main Serif Headline */}
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 leading-tight">
            Divine Craftsmanship, <br />
            <span className="italic font-normal text-amber-900">Made for Every Sacred Space.</span>
          </h2>

          {/* Clean Italic Paragraph */}
          <p className="text-stone-600 italic text-xs sm:text-sm sm:leading-relaxed max-w-2xl mx-auto font-serif">
            Hand-sculpted idols, antique brass diyas, and authentic puja essentials — each piece crafted by Jaipur master artisans to bring peace, sanctity, and enduring beauty to your home mandir.
          </p>
        </div>

        {/* Clean E-Commerce Feature Row (Directly on Background, No Cards/Boxes) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 border-t border-b border-[#EADBCA]/60 py-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2.5 group">
                <div className="w-12 h-12 rounded-full bg-[#F3E7D7] border border-[#E0D0BD] flex items-center justify-center text-amber-900 shadow-xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-stone-900 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 mt-0.5 font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean E-Commerce Banner Footer Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-900/10 text-rose-900 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-rose-800" />
              <span>Fresh From The Jaipur Workshop</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Explore God Gift Arts Artifacts
            </h3>
            <p className="text-xs text-stone-500">
              Bestselling brass murtis, oil paintings, and handcrafted festive hampers.
            </p>
          </div>

          <a
            href="#shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <span>Shop Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
