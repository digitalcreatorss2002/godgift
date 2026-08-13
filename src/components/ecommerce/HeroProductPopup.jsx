import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, X, ArrowRight, Flame, Star, Check, Zap } from 'lucide-react';
import { fetchProducts, getImageSrc } from '../../services/api';

export default function HeroProductPopup({ onAddToCart, onSelectProduct }) {
  const [heroProduct, setHeroProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Fetch products marked as is_hero = 1 or top bestseller
    fetchProducts({ hero: 1 }).then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const heroItem = res.find(p => Number(p.is_hero) === 1) || res[0];
        setHeroProduct(heroItem);
      } else {
        fetchProducts().then(allRes => {
          if (allRes && Array.isArray(allRes) && allRes.length > 0) {
            setHeroProduct(allRes[0]);
          }
        });
      }
    });

    // Check if user dismissed it during this session
    const isDismissed = sessionStorage.getItem('gga_hero_popup_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Slide in smoothly after 2s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('gga_hero_popup_dismissed', 'true');
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    if (heroProduct && onAddToCart) {
      onAddToCart(heroProduct);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2500);
    }
  };

  const handleCardClick = () => {
    if (heroProduct && onSelectProduct) {
      onSelectProduct(heroProduct);
      setIsVisible(false);
    }
  };

  if (!heroProduct || !isVisible) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 w-[92vw] sm:w-[380px] bg-white/95 backdrop-blur-xl rounded-3xl border border-amber-600/30 shadow-[0_20px_60px_-15px_rgba(180,83,9,0.3)] p-4 sm:p-5 text-stone-900 transition-all duration-500 hover:shadow-[0_25px_70px_-10px_rgba(180,83,9,0.4)] group overflow-hidden"
      style={{
        animation: 'heroSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      {/* Decorative Golden Ambient Glow Background Accent */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-amber-700/10 rounded-full blur-xl pointer-events-none" />

      {/* Top Header Badge & Close Button */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-2.5 mb-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-950 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500 animate-pulse" />
            <span>Devotional Spotlight</span>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="p-1 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100/80 transition-all cursor-pointer"
          title="Close Popup"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Product Card Interactive Body */}
      <div
        onClick={handleCardClick}
        className="flex items-center gap-3.5 cursor-pointer relative z-10"
      >
        {/* Animated Product Image Container */}
        <div className="relative w-22 h-22 rounded-2xl overflow-hidden bg-stone-100 border border-amber-900/15 shrink-0 shadow-md group-hover:border-amber-800 transition-colors">
          <img
            src={getImageSrc(heroProduct.image)}
            alt={heroProduct.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Discount Badge */}
          {heroProduct.discount && (
            <span className="absolute top-1 left-1 bg-amber-900 text-amber-300 text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow-xs">
              {heroProduct.discount}
            </span>
          )}
        </div>

        {/* Content & Price Details */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{heroProduct.rating || 4.9}</span>
            </div>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500 font-medium text-[10px]">
              {heroProduct.reviewsCount || 140} Devotees
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2 leading-tight">
            {heroProduct.name}
          </h4>

          <div className="flex items-baseline gap-2 pt-0.5">
            <span className="text-base font-serif font-extrabold text-amber-950">
              ₹{Number(heroProduct.price).toLocaleString('en-IN')}
            </span>
            {(heroProduct.original_price || heroProduct.originalPrice) && (
              <span className="text-xs text-stone-400 line-through font-mono">
                ₹{Number(heroProduct.original_price || heroProduct.originalPrice).toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer Button Bar */}
      <div className="mt-3.5 pt-3 border-t border-stone-100 flex items-center justify-between gap-3 relative z-10">
        <button
          onClick={handleCardClick}
          className="text-xs font-bold text-amber-900 hover:text-stone-950 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={handleAddToCartClick}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-md transform hover:scale-103 active:scale-97 ${addedToCart
            ? 'bg-emerald-600 text-white'
            : 'bg-gradient-to-r from-amber-900 to-amber-950 hover:from-amber-800 hover:to-stone-950 text-white'
            }`}
        >
          {addedToCart ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </>
          )}
        </button>
      </div>

      {/* Embedded CSS Animation for Smooth Entrance */}
      <style>{`
        @keyframes heroSlideIn {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          70% {
            opacity: 1;
            transform: translateY(-8px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
