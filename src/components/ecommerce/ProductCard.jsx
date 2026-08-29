import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Eye, Check } from 'lucide-react';
import { getImageSrc } from '../../services/api';

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted: propIsWishlisted
}) {
  const [localWishlisted, setLocalWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const isWishlisted = propIsWishlisted !== undefined ? propIsWishlisted : localWishlisted;

  const handleCartClick = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    if (onAddToCart) onAddToCart(product);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(product);
    } else {
      setLocalWishlisted(!localWishlisted);
    }
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(product)}
      className="bg-brand-surface rounded-xl sm:rounded-2xl border border-stone-200/90 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col cursor-pointer"
    >
      {/* Image & Badges Container */}
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <img
          src={getImageSrc(product.image)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src = '/col1.webp'; }}
        />

        {/* Badges Container */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex flex-wrap gap-1 max-w-[80%]">
          {product.discount && (
            <span className="bg-stone-950/85 backdrop-blur-md text-amber-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full border border-amber-300/30 shadow-2xs">
              {product.discount}
            </span>
          )}
          {product.badge && (
            <span className="hidden sm:inline-block bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-stone-200 shadow-2xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? 'bg-rose-500 text-white'
              : 'bg-white/80 text-stone-700 hover:text-rose-500 hover:bg-white'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">

        <div className="space-y-1 sm:space-y-1.5">
          {/* Rating */}
          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-500 font-semibold">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-stone-400 font-normal">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3 className="text-xs sm:text-base font-bold text-stone-900 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-1.5 sm:pt-2 flex items-center justify-between border-t border-stone-100">
          <div>
            <div className="text-xs sm:text-lg font-extrabold text-stone-900">
              ₹{Number(product.price).toLocaleString('en-IN')}
            </div>
            {(product.originalPrice || product.original_price) && (
              <div className="text-[10px] sm:text-xs text-stone-400 line-through">
                ₹{Number(product.originalPrice || product.original_price).toLocaleString('en-IN')}
              </div>
            )}
          </div>

          {/* Cart Action Button */}
          <button
            onClick={handleCartClick}
            className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
              addedToCart
                ? 'bg-emerald-600 text-white'
                : 'bg-primary hover:bg-primary-hover text-white shadow-xs'
            }`}
            title="Add to Shopping Bag"
          >
            {addedToCart ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
