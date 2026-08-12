import React, { useState, useEffect } from 'react';
import { fetchCategories, getImageSrc } from '../../services/api';
import { Sparkles, ArrowRight } from 'lucide-react';

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

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between mb-6 border-b border-[#EADBCA] pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-800" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 tracking-tight">
            Explore 8 Devotional Categories
          </h2>
        </div>
        <a
          href="#categories"
          className="text-xs font-bold text-amber-900 hover:underline inline-flex items-center gap-1"
        >
          <span>View All Categories</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 8 Circular Category Avatar Row Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 text-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            className="group flex flex-col items-center space-y-2 cursor-pointer transition-all focus:outline-none"
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
            <div className="space-y-0.5 max-w-[90px]">
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
