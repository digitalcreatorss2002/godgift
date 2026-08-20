import React from 'react';
import { Sparkles } from 'lucide-react';
import { JaaliPatternBackground, DecorativeWavyDivider } from '../common/BackgroundIllustrations';

export default function PartnersSection() {
  const row1Partners = [
    { name: "Vishal Mega Mart", image: "/part1.png", category: "Retail Superstore" },
    { name: "Walmart", image: "/part2.png", category: "Hypermarket" },
    { name: "Market 99", image: "/part3.png", category: "Value Retail" },
    { name: "Super 99", image: "/part4.png", category: "Departmental" },
    { name: "Lots Wholesale", image: "/part5.png", category: "B2B Wholesale" },
    { name: "Rajmandir", image: "/part6.jpeg", category: "Hypermarket" },
    { name: "Le Marché", image: "/part7.png", category: "Gourmet Retail" },
  ];

  const row2Partners = [
    { name: "Ferns N Petals (FNP)", image: "/part11.png", category: "Gifting Partner" },
    { name: "Dabur India", image: "/part13.png", category: "FMCG Giant" },
    { name: "Modern Bazaar", image: "/part9.png", category: "Luxury Retail" },
    { name: "24/7 Stores", image: "/part10.png", category: "Convenience Chain" },
    { name: "Hippo Stores", image: "/part8.jpg", category: "Home & Retail" },
    { name: "99nine Store", image: "/part12.png", category: "Retail Store" },
    { name: "Krishna Market", image: "/part14.png", category: "Regional Chain" },
  ];

  // Infinite loop arrays
  const doubleRow1 = [...row1Partners, ...row1Partners, ...row1Partners];
  const doubleRow2 = [...row2Partners, ...row2Partners, ...row2Partners];

  return (
    <section className="relative bg-[#FAF6F0] py-8 sm:py-12 border-t border-[#EADBCA]/70 overflow-hidden my-0">
      {/* Background Jaali Lattice */}
      <JaaliPatternBackground className="text-amber-900/10" />

      {/* Embedded CSS Keyframes for Dual Marquee */}
      <style>{`
        @keyframes continuousMarqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes continuousMarqueeRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: continuousMarqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: continuousMarqueeRight 38s linear infinite;
        }
        .marquee-track:hover .animate-marquee-left,
        .marquee-track:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Rich Devotional Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-800/20 text-amber-900 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>Esteemed Retail & Corporate Partners</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Trusted by India’s Premier Retailers & Corporate Giants
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-xl mx-auto">
            Providing handcrafted brass idols, divine pooja mandir essentials, and corporate gift hampers to leading superstores nationwide.
          </p>

          <div className="pt-0.5">
            <DecorativeWavyDivider className="w-40 h-3 text-amber-700/60" />
          </div>
        </div>

        {/* Dual Marquee Track with Larger Cards and Logos */}
        <div className="relative space-y-4 sm:space-y-5 marquee-track py-1">
          {/* Left & Right Smooth Gradient Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Leftward Motion */}
          <div className="overflow-hidden py-1">
            <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
              {doubleRow1.map((partner, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="group relative flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-700/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none min-w-[260px] sm:min-w-[300px] shrink-0"
                >
                  {/* Larger Logo Container */}
                  <div className="h-14 w-32 sm:w-36 flex items-center justify-center p-1 bg-stone-50 rounded-xl group-hover:bg-white transition-colors shrink-0">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-12 sm:max-h-13 max-w-[115px] sm:max-w-[130px] object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand info */}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-stone-900 tracking-wide line-clamp-1 group-hover:text-amber-900 transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-xs text-stone-500 font-medium tracking-normal">
                      {partner.category}
                    </span>
                  </div>

                  {/* Small Golden Accent Dot */}
                  <div className="ml-auto w-2 h-2 rounded-full bg-amber-500/50 group-hover:bg-amber-600 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Rightward Motion */}
          <div className="overflow-hidden py-1">
            <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
              {doubleRow2.map((partner, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="group relative flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-700/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none min-w-[260px] sm:min-w-[300px] shrink-0"
                >
                  {/* Larger Logo Container */}
                  <div className="h-14 w-32 sm:w-36 flex items-center justify-center p-1 bg-stone-50 rounded-xl group-hover:bg-white transition-colors shrink-0">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-12 sm:max-h-13 max-w-[115px] sm:max-w-[130px] object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand info */}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-stone-900 tracking-wide line-clamp-1 group-hover:text-amber-900 transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-xs text-stone-500 font-medium tracking-normal">
                      {partner.category}
                    </span>
                  </div>

                  {/* Small Golden Accent Dot */}
                  <div className="ml-auto w-2 h-2 rounded-full bg-amber-500/50 group-hover:bg-amber-600 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


