import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Truck, CheckCircle2, Heart } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    setAdded(true);
    if (onAddToCart) onAddToCart(product, quantity);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-brand-surface w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Product Image Showcase */}
          <div className="relative bg-stone-100 p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[380px] w-auto object-contain rounded-xl shadow-md"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Product Details & Buy Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            
            <div className="space-y-3">
              {/* Category Tag & Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider font-bold text-secondary">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-semibold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                {product.name}
              </h2>

              {/* Pricing */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-extrabold text-stone-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                {product.description}
              </p>

              {/* Material & Specifications */}
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                <div>
                  <span className="text-stone-400">Material:</span> <span className="font-semibold text-stone-800">{product.material}</span>
                </div>
                <div>
                  <span className="text-stone-400">Weight:</span> <span className="font-semibold text-stone-800">{product.weight}</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Button */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold text-stone-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-primary hover:bg-primary-hover text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Added to Shopping Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Cart • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Authentic Artisan Product
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-secondary" /> Express Pan-India Delivery
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
