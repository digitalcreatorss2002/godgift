import React, { useState, useEffect, useMemo } from 'react';
import { fetchProducts, fetchCategories } from '../../services/api';
import ProductCard from '../ecommerce/ProductCard';
import { ArrowRight, Sparkles, Flame, Layers, Award } from 'lucide-react';

export default function FeaturedProducts({ 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist,
  wishlistItems = [] 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([
    { id: 'all', label: 'All Products', slug: 'all' }
  ]);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = [
          { id: 'all', label: 'All Artifacts', slug: 'all' },
          ...res.map(c => ({
            id: c.slug,
            label: c.name,
            slug: c.slug
          }))
        ];
        setCategoriesList(mapped);
      }
    });

    fetchProducts().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        setProductsList(res);
      }
    });
  }, []);

  // Filter products matching active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return productsList.slice(0, 8);
    const target = activeCategory.toLowerCase().trim();
    const filtered = productsList.filter(p => {
      const pCat = (p.category || '').toLowerCase().trim();
      if (pCat === target) return true;
      const cleanTarget = target.replace(/[^a-z0-9]/g, '');
      const cleanPCat = pCat.replace(/[^a-z0-9]/g, '');
      return cleanPCat.includes(cleanTarget) || cleanTarget.includes(cleanPCat);
    });
    return filtered.length > 0 ? filtered.slice(0, 8) : productsList.slice(0, 8);
  }, [activeCategory, productsList]);

  return (
    <section id="featured-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      
      {/* Section Header & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EADBCA]/60 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-900 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Master Guild Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            God Gift Arts Signature Collection
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 max-w-sm">
          Handcrafted spiritual oil paintings, deity brass murtis, copper puja sets & Guru Ji essentials
        </p>
      </div>

      {/* Luxury Single-Row Horizontal Pill Filter Bar */}
      <div className="relative py-1">
        <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-2 pt-1 px-1">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-md shadow-amber-900/30 scale-102 ring-2 ring-amber-800/40'
                    : 'bg-white text-stone-700 hover:bg-amber-950/5 hover:text-amber-950 border border-stone-200/90 shadow-2xs hover:border-amber-900/30'
                }`}
              >
                {isActive && <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-2">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlistItems.some(w => w.id === product.id)}
          />
        ))}
      </div>

      {/* View Full Catalog CTA Button */}
      <div className="mt-10 text-center">
        <a
          href="#shop"
          className="inline-flex items-center gap-2.5 bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full border border-stone-300 shadow-xs hover:border-amber-800 transition-all group cursor-pointer"
        >
          <span>Explore All {productsList.length}+ Artifacts</span>
          <ArrowRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </section>
  );
}
