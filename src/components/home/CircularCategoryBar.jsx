import React, { useState, useEffect, useRef } from 'react';
import { fetchCategories, getImageSrc } from '../../services/api';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_8_CATEGORIES = [
  { id: 'spiritual-oil-paintings', name: 'Oil Paintings', image: '/ganesha-oil.jpg', count: 12 },
  { id: 'brass-idols-murtis', name: 'Brass Idols', image: '/col1.webp', count: 8 },
  { id: 'copper-pooja-sets', name: 'Copper & Pooja', image: '/col4.jpg', count: 7 },
  { id: 'marble-murtis-carvings', name: 'Marble Murtis', image: '/col2.webp', count: 4 },
  { id: 'guru-ji-devotional-line', name: 'Guru Ji Special', image: '/col6.webp', count: 6 },
  { id: 'festive-corporate-gift-hampers', name: 'Gift Hampers', image: '/col5.webp', count: 4 },
  { id: 'brass-dhoop-and-lamps', name: 'Dhoop & Lamps', image: '/col3.webp', count: 1 },
  { id: 'devotional-malas', name: 'Devotional Malas', image: '/col6.webp', count: 6 }
];

export default function CircularCategoryBar({ onSelectCategory }) {
  const [categories, setCategories] = useState(DEFAULT_8_CATEGORIES);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = res.map((cat, idx) => ({
          id: cat.slug || cat.id,
          name: cat.name,
          image: cat.image ? getImageSrc(cat.image) : DEFAULT_8_CATEGORIES[idx % DEFAULT_8_CATEGORIES.length].image,
          count: cat.product_count || cat.count || (idx + 4)
        }));
        setCategories(mapped);
      }
    });
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      
      {/* Section Header with Slider Navigation Arrows */}
      <div className="flex items-center justify-between mb-5 border-b border-[#EADBCA] pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-800" />
          <h2 className="text-base sm:text-xl font-serif font-bold text-stone-900 tracking-tight">
            Explore Devotional Categories
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Left & Right Arrow Navigation Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-white hover:bg-amber-900 text-stone-700 hover:text-white border border-stone-300 shadow-2xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-white hover:bg-amber-900 text-stone-700 hover:text-white border border-stone-300 shadow-2xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <a
            href="#categories"
            className="text-xs font-bold text-amber-900 hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 100% Single-Row Horizontal Touch & Arrow Slider (No multi-row wrapping) */}
      <div
        ref={sliderRef}
        className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1 select-none"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            className="group flex flex-col items-center space-y-2 cursor-pointer transition-all focus:outline-none shrink-0 w-20 sm:w-24 md:w-28 text-center"
          >
            {/* Circular Image Ring */}
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-amber-800 via-amber-400 to-amber-900 shadow-md group-hover:shadow-xl group-hover:scale-108 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 border-2 border-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Category Title Label */}
            <div className="space-y-0.5 w-full px-0.5">
              <span className="text-[11px] sm:text-xs font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2 leading-tight">
                {cat.name}
              </span>
            </div>
          </button>
        ))}
      </div>

    </section>
  );
}
