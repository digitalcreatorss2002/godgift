import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { fetchProducts, fetchCategories } from '../../services/api';
import ProductCard from '../ecommerce/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts({ onQuickView, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [productsList, setProductsList] = useState(MOCK_PRODUCTS);
  const [categoriesList, setCategoriesList] = useState([
    { id: 'all', label: 'All Products', slug: 'all' },
    { id: 'paintings', label: 'Oil Paintings', slug: 'paintings' },
    { id: 'idols', label: 'Brass Statues', slug: 'idols' },
    { id: 'pooja', label: 'Copper & Pooja Sets', slug: 'pooja' },
    { id: 'guruji', label: 'Guru Ji Collection', slug: 'guruji' }
  ]);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = [
          { id: 'all', label: 'All Products', slug: 'all' },
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
    <section id="featured-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Section Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            God Gift Arts Signature Category Showcase
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Handcrafted spiritual oil paintings, deity brass murtis, copper puja sets & Guru Ji essentials
          </p>
        </div>

        {/* Dynamic Filter Tabs */}
        <div className="flex flex-wrap gap-2 bg-stone-100 p-1.5 rounded-2xl border border-stone-200/80 w-fit max-w-full overflow-x-auto">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.slug
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* View Full Catalog CTA Button */}
      <div className="mt-10 text-center">
        <a
          href="#shop"
          className="inline-flex items-center gap-2.5 bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full border border-stone-300 shadow-xs hover:border-primary transition-all group"
        >
          <span>Explore All {productsList.length}+ Artifacts</span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </section>
  );
}
