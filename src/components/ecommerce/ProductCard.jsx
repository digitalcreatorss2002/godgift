import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Eye, Check } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCartClick = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    if (onAddToCart) onAddToCart(product);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const getImageSrc = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    if (path.startsWith('/uploads/')) return `http://localhost/gga-backend${path}`;
    return path;
  };

  return (
    <div 
      onClick={() => onQuickView && onQuickView(product)}
      className="bg-brand-surface rounded-2xl border border-stone-200/90 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col cursor-pointer"
    >
      {/* Image & Badges Container */}
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <img
          src={getImageSrc(product.image)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges Container */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 max-w-[75%]">
          {product.discount && (
            <span className="bg-stone-950/85 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-300/30 shadow-2xs">
              {product.discount}
            </span>
          )}
          {product.badge && (
            <span className="bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-stone-200 shadow-2xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? 'bg-rose-500 text-white'
              : 'bg-white/80 text-stone-700 hover:text-rose-500 hover:bg-white'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Floating Overlay */}
        <div className="absolute inset-x-0 bottom-3 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView && onQuickView(product);
            }}
            className="w-full py-2 bg-stone-900/90 hover:bg-stone-950 text-white text-xs font-semibold rounded-xl backdrop-blur-md flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-stone-400 font-normal">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-stone-900 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-2 flex items-center justify-between border-t border-stone-100">
          <div>
            <div className="text-base sm:text-lg font-extrabold text-stone-900">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-stone-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          {/* Cart Action Button */}
          <button
            onClick={handleCartClick}
            className={`p-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              addedToCart
                ? 'bg-emerald-600 text-white'
                : 'bg-primary hover:bg-primary-hover text-white shadow-xs'
            }`}
            title="Add to Shopping Bag"
          >
            {addedToCart ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
