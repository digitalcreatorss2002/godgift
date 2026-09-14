import React, { useState, useEffect } from 'react';
import { fetchCategories, getImageSrc } from '../../services/api';

export default function CircularCategorySlider({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res)) {
        const mapped = res.map(cat => ({
          id: cat.slug || cat.id,
          name: cat.name,
          image: cat.image ? getImageSrc(cat.image) : '/col4.jpg'
        }));
        setCategories(mapped);
      }
    });
  }, []);

  if (categories.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      {/* Fixed 8-Column Grid Layout for God Gift Arts Collections */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 justify-items-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            className="flex flex-col items-center group cursor-pointer select-none text-center"
          >
            {/* Clean Circle Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 rounded-full overflow-hidden bg-stone-100 border-2 border-stone-200/80 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Category Name Label */}
            <span className="text-xs sm:text-sm font-bold text-stone-800 mt-2.5 group-hover:text-primary transition-colors tracking-tight line-clamp-1">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
