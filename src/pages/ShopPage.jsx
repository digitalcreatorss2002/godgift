import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { fetchProducts, fetchCategories } from '../services/api';
import ProductCard from '../components/ecommerce/ProductCard';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  X, 
  Sparkles,
  RotateCcw,
  Check
} from 'lucide-react';

import PageLoader from '../components/common/PageLoader';

export default function ShopPage({ onAddToCart, onQuickView, onToggleWishlist, wishlistItems = [] }) {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [maxPrice, setMaxPrice] = useState(15000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).then(([pRes, cRes]) => {
      if (pRes && Array.isArray(pRes)) setProductsList(pRes);
      if (cRes && Array.isArray(cRes)) setCategoriesList(cRes);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const defaultCats = [
      { id: 'paintings', slug: 'paintings', label: 'Spiritual Oil Paintings' },
      { id: 'idols', slug: 'idols', label: 'Brass Idols & Murtis' },
      { id: 'pooja', slug: 'pooja', label: 'Copper & Pooja Sets' },
      { id: 'guruji', slug: 'guruji', label: 'Guru Ji Devotional Line' },
      { id: 'gifting', slug: 'gifting', label: 'Festive Gift Hampers' }
    ];

    const source = categoriesList.length > 0
      ? categoriesList.map(c => ({ id: c.slug, slug: c.slug, label: c.name }))
      : defaultCats;

    const mapped = source.map(c => {
      const matchCount = productsList.filter(p => {
        const pCat = (p.category || '').toLowerCase().trim();
        const cSlug = (c.slug || c.id || '').toLowerCase().trim();
        return pCat === cSlug || pCat.includes(cSlug) || cSlug.includes(pCat);
      }).length;
      return {
        id: c.slug || c.id,
        label: c.label,
        count: matchCount
      };
    });

    return [{ id: 'all', label: 'All Artifacts', count: productsList.length }, ...mapped];
  }, [categoriesList, productsList]);

  const materials = ['all', 'Solid Brass', 'Pure Copper & Brass', 'Oil on Canvas', 'Sandalwood & Brass', 'Teak Wood'];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      if (selectedCategory !== 'all') {
        const pCat = (product.category || '').toLowerCase().trim();
        const selCat = selectedCategory.toLowerCase().trim();
        if (pCat !== selCat && !pCat.includes(selCat) && !selCat.includes(pCat)) return false;
      }
      if (selectedMaterial !== 'all' && !product.material?.toLowerCase().includes(selectedMaterial.toLowerCase())) return false;
      if (Number(product.price) > maxPrice) return false;
      if (inStockOnly && !product.inStock) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return product.name.toLowerCase().includes(q) || product.description?.toLowerCase().includes(q);
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return Number(a.price) - Number(b.price);
      if (sortBy === 'price-high') return Number(b.price) - Number(a.price);
      if (sortBy === 'rating') return Number(b.rating || 0) - Number(a.rating || 0);
      return a.id - b.id;
    });
  }, [productsList, selectedCategory, selectedMaterial, maxPrice, inStockOnly, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setMaxPrice(15000);
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  if (loading) {
    return <PageLoader text="Loading devotional collection catalog..." />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Clean Premium Header with Jaali Background */}
      <div className="relative bg-[#FAF6F0] py-12 sm:py-16 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/10 text-amber-900 text-[11px] font-bold uppercase tracking-widest border border-amber-900/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Jaipur Artisan Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Devotional Artifacts Catalog
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm font-serif italic max-w-lg mx-auto">
            Handcrafted solid brass murtis, spiritual oil paintings & copper puja sets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Main Content Layout: Left Sidebar Filters + Product Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden w-full flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-stone-200 font-bold text-stone-900 text-sm mb-2 shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-800" />
              <span>Filters & Refine ({filteredProducts.length})</span>
            </div>
            <SlidersHorizontal className="w-4 h-4 text-stone-500" />
          </button>

          {/* Clean Left Sidebar Filters */}
          <aside className={`w-full lg:w-64 shrink-0 lg:sticky lg:top-24 space-y-6 bg-white p-6 rounded-3xl border border-[#EADBCA] shadow-2xs ${
            isMobileFilterOpen ? 'block mb-6' : 'hidden lg:block'
          }`}>
            
            {/* Sidebar Title & Reset */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm font-serif">
                <SlidersHorizontal className="w-4 h-4 text-amber-800" />
                <span>Filter Artifacts</span>
              </div>
              <button onClick={resetFilters} className="text-xs font-bold text-amber-900 hover:underline flex items-center gap-1">
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Categories List */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Categories</h3>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat.id 
                        ? 'bg-amber-900 text-white shadow-xs' 
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2 pt-4 border-t border-stone-100">
              <div className="flex justify-between text-xs font-bold text-stone-900">
                <span>Max Price</span>
                <span className="text-amber-900 font-mono">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-amber-800 h-2 bg-stone-100 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 font-medium">
                <span>₹500</span>
                <span>₹15,000+</span>
              </div>
            </div>

            {/* Materials List */}
            <div className="space-y-2 pt-4 border-t border-stone-100">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Material</h3>
              <div className="space-y-1">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedMaterial === mat ? 'text-amber-900 font-bold bg-amber-900/10' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>{mat === 'all' ? 'All Materials' : mat}</span>
                    {selectedMaterial === mat && <Check className="w-3.5 h-3.5 text-amber-900" />}
                  </button>
                ))}
              </div>
            </div>

            {/* In-Stock Toggle */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800">In-Stock Only</span>
              <button
                onClick={() => setInStockOnly(!inStockOnly)}
                className={`w-10 h-6 rounded-full transition-colors relative p-1 cursor-pointer ${
                  inStockOnly ? 'bg-amber-900' : 'bg-stone-300'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  inStockOnly ? 'translate-x-4' : 'translate-x-0'
                }`} />
              </button>
            </div>

          </aside>

          {/* Right Area: Top Search Bar & Product Catalog Grid */}
          <main className="flex-1 w-full space-y-6">
            
            {/* Top Toolbar: Search & Sort */}
            <div className="bg-white p-4 rounded-3xl border border-[#EADBCA] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search catalog by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 text-stone-900 text-xs font-medium rounded-full pl-9 pr-8 py-2.5 outline-none border border-stone-200 focus:border-amber-800/60"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Selector & Count */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <span className="text-xs text-stone-500 font-medium">
                  Showing <strong className="text-stone-900 font-bold">{filteredProducts.length}</strong> items
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-stone-50 text-stone-800 font-bold text-xs rounded-full px-3.5 py-2 border border-stone-200 outline-none cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-3 max-w-md mx-auto">
                <h3 className="text-lg font-serif font-bold text-stone-900">No Artifacts Found</h3>
                <p className="text-xs text-stone-500">Try adjusting your filters or max price slider.</p>
                <button
                  onClick={resetFilters}
                  className="bg-amber-900 text-white font-bold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider shadow-xs cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </main>

        </div>
      </div>

    </div>
  );
}
