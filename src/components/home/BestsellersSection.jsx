import React, { useState, useEffect } from 'react';
import { fetchProducts, getImageSrc } from '../../services/api';

export default function BestsellersSection({ onSelectProduct, onAddToCart }) {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        // Pick top 4 bestsellers
        const top = res.slice(0, 4);
        setBestsellers(top);
      }
    });
  }, []);

  if (bestsellers.length === 0) return null;

  return (
    <section className="bg-stone-50/50 py-12 sm:py-16 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Section Header matching satvikstore.in reference */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Our Best Sellers
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-stone-500">
            Most Loved by Customers
          </p>
        </div>

        {/* Exactly 4 Clean Arched Cards (2 per row on mobile, 4 per row on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-t-[100px] sm:rounded-t-[120px] rounded-b-2xl border border-stone-200/70 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between items-center text-center group cursor-pointer"
                onClick={() => onSelectProduct && onSelectProduct(product)}
              >
                {/* 100% Flush Arched Top Image (Zero extra shadow, badges, or inner borders) */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={getImageSrc(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content Section below Image */}
                <div className="p-3 sm:p-4 w-full flex-1 flex flex-col justify-between items-center text-center space-y-3">
                  <h3 className="font-serif font-bold text-stone-900 text-xs sm:text-sm leading-snug line-clamp-2 min-h-[36px] flex items-center justify-center group-hover:text-amber-900 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rectangular "Shop Now" Outline Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onAddToCart) onAddToCart(product);
                      else if (onSelectProduct) onSelectProduct(product);
                    }}
                    className="w-full py-2 sm:py-2.5 border border-stone-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-900 hover:bg-stone-950 hover:text-white transition-all rounded-md cursor-pointer shadow-2xs"
                  >
                    Add to Cart
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
