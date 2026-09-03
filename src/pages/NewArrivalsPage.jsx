import React, { useState, useEffect, useMemo } from 'react';
import { fetchNewArrivals, getImageSrc } from '../services/api';
import ProductCard from '../components/ecommerce/ProductCard';
import { LotusJaaliPatternBackground, DecorativeWavyDivider, DiyaIllustration } from '../components/common/BackgroundIllustrations';
import { Sparkles, ShoppingBag, Star, ShieldCheck } from 'lucide-react';
import PageLoader from '../components/common/PageLoader';

export default function NewArrivalsPage({ onAddToCart, onQuickView, onToggleWishlist, wishlistItems = [] }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewArrivals().then(res => {
      setLoading(false);
      if (res && Array.isArray(res)) setProductsList(res);
    });
  }, []);

  const filteredArrivals = useMemo(() => {
    if (productsList.length === 0) return [];
    if (selectedFilter === 'all') return productsList;
    return productsList.filter((product) => {
      const pCat = (product.category || '').toLowerCase().trim();
      const selCat = selectedFilter.toLowerCase().trim();
      return pCat === selCat || pCat.includes(selCat);
    });
  }, [productsList, selectedFilter]);

  const filterTabs = [
    { id: 'all', label: 'All New Arrivals' },
    { id: 'paintings', label: 'Oil Paintings' },
    { id: 'idols', label: 'Brass Idols' },
    { id: 'pooja', label: 'Copper Puja Sets' },
    { id: 'guruji', label: 'Guru Ji Line' }
  ];

  if (loading) {
    return <PageLoader text="Loading new devotional arrivals..." />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">

      {/* Museum Hero Banner Header */}
      <div className="relative bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />

        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <DiyaIllustration className="w-80 h-80 text-amber-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Fresh From Jaipur Artisans</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            God Gift Arts <br />
            <span className="italic font-normal text-amber-900">New Arrivals Collection</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Discover our newest handcrafted sacred oil paintings, lost-wax cast brass murtis, and consecrated copper thalis freshly added to our collection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EADBCA] pb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-900 text-white shadow-md shadow-amber-900/30 scale-102 ring-2 ring-amber-800/40'
                      : 'bg-white text-stone-700 border border-stone-200/90 shadow-2xs hover:border-amber-900/30 hover:bg-stone-50'
                  }`}
                >
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs text-stone-500 font-medium whitespace-nowrap">
            Showing {filteredArrivals.length} new arrival artifacts
          </span>
        </div>

        {/* Products Grid */}
        {filteredArrivals.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistItems.some(w => w.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
            <Sparkles className="w-10 h-10 text-amber-800 mx-auto" />
            <h3 className="font-serif font-bold text-stone-900 text-lg">No New Arrivals in this Category</h3>
            <p className="text-xs text-stone-500">Check back soon as our Jaipur master craftsmen add new sacred artifacts daily.</p>
          </div>
        )}

      </div>

    </div>
  );
}