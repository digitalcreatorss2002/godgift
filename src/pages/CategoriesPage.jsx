import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { fetchCategories, getImageSrc } from '../services/api';

const DEFAULT_CATEGORIES = [
  {
    id: "paintings",
    slug: "paintings",
    num: "01",
    name: "Spiritual Oil Paintings",
    subtitle: "Hand-Painted Canvas Wall Art by Jaipur Master Artists",
    image: "/ganesha-oil.jpg",
    span: "lg:col-span-8 min-h-[360px] sm:min-h-[440px]"
  },
  {
    id: "idols",
    slug: "idols",
    num: "02",
    name: "Brass Idols & Murtis",
    subtitle: "Solid Brass Lost-Wax Cast Deities & Sculptures",
    image: "/col1.webp",
    span: "lg:col-span-4 min-h-[360px] sm:min-h-[440px]"
  },
  {
    id: "pooja",
    slug: "pooja",
    num: "03",
    name: "Copper & Pooja Sets",
    subtitle: "100% Pure Heavy Gauge Copper Thalis & Kalash",
    image: "/col4.jpg",
    span: "lg:col-span-4 min-h-[280px] sm:min-h-[320px]"
  },
  {
    id: "marble-murtis",
    slug: "marble-murtis",
    num: "04",
    name: "Marble Murtis & Carvings",
    subtitle: "Chaste White Makrana Marble Idols with 24K Gold Foil",
    image: "/col2.jpg",
    span: "lg:col-span-4 min-h-[280px] sm:min-h-[320px]"
  },
  {
    id: "guruji",
    slug: "guruji",
    num: "05",
    name: "Guru Ji Devotional Line",
    subtitle: "Gilded Swaroop Portraits, Sandalwood Malas & Accessories",
    image: "/col6.webp",
    span: "lg:col-span-4 min-h-[280px] sm:min-h-[320px]"
  },
  {
    id: "gifting",
    slug: "gifting",
    num: "06",
    name: "Festive & Gift Hampers",
    subtitle: "Luxury Velvet Box Sets with Brass Diyas & Dry Fruits",
    image: "/col5.jpeg",
    span: "lg:col-span-12 min-h-[280px] sm:min-h-[340px]"
  }
];

export default function CategoriesPage({ onSelectCategory }) {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const spans = [
          "lg:col-span-8 min-h-[360px] sm:min-h-[440px]",
          "lg:col-span-4 min-h-[360px] sm:min-h-[440px]",
          "lg:col-span-4 min-h-[280px] sm:min-h-[320px]",
          "lg:col-span-4 min-h-[280px] sm:min-h-[320px]",
          "lg:col-span-4 min-h-[280px] sm:min-h-[320px]",
          "lg:col-span-6 min-h-[280px] sm:min-h-[320px]",
          "lg:col-span-6 min-h-[280px] sm:min-h-[320px]",
          "lg:col-span-12 min-h-[280px] sm:min-h-[340px]"
        ];
        const mapped = res.map((cat, idx) => ({
          id: cat.slug,
          slug: cat.slug,
          num: (idx + 1).toString().padStart(2, '0'),
          name: cat.name,
          subtitle: cat.subtitle || 'Handcrafted Devotional Artifacts',
          image: cat.image,
          span: spans[idx % spans.length]
        }));
        setCategories(mapped);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Editorial Museum Header Banner */}
      <div className="relative bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-900/10 text-amber-900 text-[11px] font-bold uppercase tracking-[0.25em] border border-amber-900/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Product Medium Taxonomy</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            Browse Product Categories
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm font-serif italic max-w-xl mx-auto leading-relaxed">
            Explore our sacred inventory organized by physical artifact medium & material.
          </p>
        </div>
      </div>

      {/* Main Sharp Rectangular Editorial Collage Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Title Bar */}
        <div className="flex items-center justify-between border-b border-[#EADBCA] pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-amber-700" />
            <h2 className="text-sm font-bold text-stone-900 uppercase tracking-[0.2em]">
              Product Category Gallery ({categories.length})
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-serif italic">
            Select a category to explore items
          </span>
        </div>

        {/* 12-Column Balanced Rectangular Collage Grid (Sharp 0-Rounded Corners) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id + cat.num}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className={`group relative overflow-hidden cursor-pointer bg-stone-950 rounded-none shadow-sm transition-all duration-700 ${cat.span}`}
            >
              {/* Image with Sharp Edges & Smooth Zoom Effect */}
              <img
                src={getImageSrc(cat.image)}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Ambient Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/10 group-hover:via-stone-950/40 transition-colors duration-500" />

              {/* Animated Inner Golden Frame (Appears on Hover) */}
              <div className="absolute inset-4 border border-amber-300/0 group-hover:border-amber-300/50 transition-all duration-500 transform scale-95 group-hover:scale-100 pointer-events-none z-10" />

              {/* Top Left Numbering */}
              <div className="absolute top-5 left-5 z-20">
                <span className="text-xs font-mono font-bold tracking-widest text-amber-300/90 uppercase drop-shadow-sm">
                  {cat.num} —
                </span>
              </div>

              {/* Bottom Content Area with Slide-Up Motion */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 block opacity-90">
                  {cat.subtitle}
                </span>

                <div className="flex items-end justify-between">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors leading-tight drop-shadow-md">
                    {cat.name}
                  </h3>

                  {/* Sliding CTA Icon */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-500 p-2 bg-amber-400 text-stone-950 rounded-none shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
