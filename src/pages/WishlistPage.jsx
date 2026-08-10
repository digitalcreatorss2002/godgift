import React from 'react';
import ProductCard from '../components/ecommerce/ProductCard';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { Heart, ArrowRight } from 'lucide-react';

export default function WishlistPage({ 
  wishlistItems = [], 
  onAddToCart, 
  onSelectProduct, 
  onNavigate 
}) {
  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Header Banner */}
      <div className="relative bg-[#FAF6F0] py-12 sm:py-16 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 text-amber-900 text-[11px] font-bold uppercase tracking-widest border border-amber-900/20">
            <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
            <span>Saved Sacred Artifacts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Your Devotional Wishlist
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm font-serif italic max-w-lg mx-auto">
            Your saved hand-sculpted idols, oil paintings, and temple essentials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {wishlistItems.length === 0 ? (
          /* Empty Wishlist State */
          <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center max-w-2xl mx-auto space-y-5 shadow-xs">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-600">
              <Heart className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Your Wishlist is Empty</h2>
              <p className="text-xs sm:text-sm text-stone-500 font-serif italic max-w-md mx-auto">
                Click the heart icon on any artifact while browsing to save your favorite sacred items here.
              </p>
            </div>

            <button
              onClick={() => onNavigate && onNavigate('shop')}
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Discover Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Saved Products Grid */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EADBCA] pb-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Saved Items ({wishlistItems.length})
              </h2>
              <span className="text-xs text-stone-500 font-medium">
                Click any item to view details or add to cart
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onQuickView={(p) => onSelectProduct && onSelectProduct(p.id)}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
