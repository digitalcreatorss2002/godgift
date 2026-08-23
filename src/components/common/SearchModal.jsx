import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { Search, X, TrendingUp, Sparkles, ArrowRight, Star, ShoppingBag } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  // Real-time live search matching against all 50 products
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();
    return MOCK_PRODUCTS.filter((product) => (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.material.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )).slice(0, 6); // Top 6 matching items
  }, [searchTerm]);

  if (!isOpen) return null;

  const popularSearches = [
    'Om Ganesha Oil Painting',
    'Hanuman Ji Brass Statue',
    'Khatu Shyam Ji Murti',
    'Pure Copper Puja Set',
    'Guru Ji Swaroop Frame',
    'Brass Dhoop Lamp'
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-start justify-center pt-16 px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-stone-200 bg-stone-50/70">
          <Search className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search all 50 artifacts (e.g. Ganesha, Copper Kalash, Guru Ji Mala)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-stone-900 placeholder-stone-400 font-medium focus:outline-none text-base"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-bold text-stone-400 hover:text-stone-700 px-2 py-1 mr-2 bg-stone-200/60 rounded-lg"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-stone-200 hover:bg-stone-300 text-stone-700 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">

          {/* A. LIVE SEARCH RESULTS */}
          {searchTerm.trim() !== '' ? (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                <span>Matching Products ({searchResults.length})</span>
                {searchResults.length > 0 && (
                  <span className="text-primary font-semibold">Showing top results</span>
                )}
              </div>

              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="p-3 bg-stone-50 hover:bg-amber-50/50 rounded-2xl border border-stone-200/80 hover:border-amber-400/50 transition-all flex items-center justify-between gap-4 group cursor-pointer"
                      onClick={() => {
                        onClose();
                        if (onSelectProduct) onSelectProduct(product);
                      }}
                    >
                      {/* Image Thumbnail & Product Details */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-200 border border-stone-300/60 flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-stone-500 font-medium">
                            <span className="text-amber-600 font-bold flex items-center gap-0.5">
                              <Star className="w-3 h-3 fill-current" /> {product.rating}
                            </span>
                            <span>•</span>
                            <span className="bg-stone-200/80 text-stone-700 px-2 py-0.5 rounded-md text-[10px]">
                              {product.material}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Price & Add To Cart Action */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-xs sm:text-sm font-extrabold text-stone-900">
                            ₹{product.price.toLocaleString()}
                          </div>
                          {product.originalPrice && (
                            <div className="text-[10px] text-stone-400 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onAddToCart) onAddToCart(product);
                          }}
                          className="p-2 bg-primary hover:bg-primary-hover text-white rounded-xl shadow-xs transition-transform transform active:scale-95"
                          title="Add to Cart"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* No Results Found State */
                <div className="py-8 text-center space-y-2">
                  <div className="text-stone-400 text-sm font-medium">
                    No artifacts found for "<span className="text-stone-900 font-bold">{searchTerm}</span>"
                  </div>
                  <p className="text-xs text-stone-500">
                    Try searching for "Ganesha", "Copper Puja Set", "Oil Painting", or "Guru Ji Mala".
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* B. DEFAULT STATE: POPULAR SEARCHES & FEATURED CATEGORIES */
            <>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span>Popular Trending Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(term)}
                      className="px-3.5 py-1.5 bg-stone-100 hover:bg-primary-light hover:text-primary text-stone-700 text-xs rounded-xl border border-stone-200/80 hover:border-primary/30 transition-all font-semibold flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-secondary" />
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Category Jump Shortcuts */}
              <div className="pt-4 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                  Featured Collections
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Spiritual Oil Paintings", count: "16 Artworks", search: "Oil Painting" },
                    { title: "Brass Idols & Murtis", count: "15 Statues", search: "Brass Statue" },
                    { title: "Guru Ji Devotional Line", count: "12 Essentials", search: "Guru Ji" }
                  ].map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchTerm(cat.search)}
                      className="p-3.5 bg-stone-50 rounded-2xl hover:bg-amber-50 hover:border-amber-300 border border-stone-200 transition-all text-left group"
                    >
                      <div className="font-bold text-stone-900 text-xs group-hover:text-primary transition-colors flex items-center justify-between">
                        <span>{cat.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                        {cat.count}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Hint */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200/80 text-stone-500 text-[11px] flex items-center justify-between">
          <span>Press ESC or click outside to close</span>
          <span className="font-semibold text-primary">God Gift Arts Search</span>
        </div>

      </div>
    </div>
  );
}