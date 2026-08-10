import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import ProductCard from '../components/ecommerce/ProductCard';
import QuickViewModal from '../components/ecommerce/QuickViewModal';
import { LotusJaaliPatternBackground, DecorativeWavyDivider, DiyaIllustration } from '../components/common/BackgroundIllustrations';
import { 
  Flame, 
  Sparkles, 
  Star, 
  Trophy, 
  ShieldCheck, 
  Truck, 
  Heart,
  ShoppingBag,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function BestsellersPage({ onAddToCart, onQuickView }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Top 3 Spotlight Bestsellers
  const topRanked = [
    {
      rank: "#1 MOST BELOVED",
      rankBg: "bg-amber-400 text-stone-950",
      product: MOCK_PRODUCTS.find(p => p.id === 1) || MOCK_PRODUCTS[0],
      tagline: "Over 2,500+ Homes Sanctified"
    },
    {
      rank: "#2 TOP MURTI",
      rankBg: "bg-[#E2E8F0] text-stone-900 border border-stone-300",
      product: MOCK_PRODUCTS.find(p => p.id === 17) || MOCK_PRODUCTS[1],
      tagline: "Solid Jaipur Brass Casting"
    },
    {
      rank: "#3 TEMPLE RITUAL",
      rankBg: "bg-[#F59E0B]/20 text-amber-900 border border-amber-500/40",
      product: MOCK_PRODUCTS.find(p => p.id === 33) || MOCK_PRODUCTS[2],
      tagline: "100% Pure Copper Vessel Set"
    }
  ];

  // Filtered Bestsellers (Strictly Top 8 Curated Items excluding Top 3 Spotlight)
  const bestsellers = useMemo(() => {
    const topIds = topRanked.map(t => t.product.id);
    return MOCK_PRODUCTS.filter((product) => {
      if (topIds.includes(product.id)) return false;
      if (product.rating < 4.8 || product.reviewsCount < 100) return false;
      if (selectedFilter === 'paintings' && product.category !== 'paintings') return false;
      if (selectedFilter === 'idols' && product.category !== 'idols') return false;
      if (selectedFilter === 'pooja' && product.category !== 'pooja') return false;
      if (selectedFilter === 'guruji' && product.category !== 'guruji') return false;
      return true;
    })
    .sort((a, b) => b.reviewsCount - a.reviewsCount)
    .slice(0, 8);
  }, [selectedFilter]);

  const filterTabs = [
    { id: 'all', label: 'Top Bestsellers' },
    { id: 'idols', label: 'Top Murtis' },
    { id: 'paintings', label: 'Top Canvas Art' },
    { id: 'pooja', label: 'Top Puja Sets' },
    { id: 'guruji', label: 'Guru Ji Line' }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Museum Bestsellers Hero Banner Header */}
      <div className="relative bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />
        
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <DiyaIllustration className="w-80 h-80 text-amber-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Devotees' Most Loved Artifacts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            God Gift Arts <br />
            <span className="italic font-normal text-amber-900">Devotional Bestsellers</span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-serif leading-relaxed italic">
            Discover the most cherished hand-cast brass idols, spiritual oil paintings, and copper puja sets ordered by over 50,000+ devotees across India.
          </p>

          {/* Social Proof Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-bold text-stone-700">
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-4 py-1.5 rounded-full border border-stone-200 shadow-2xs">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>4.9 / 5 Average Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-4 py-1.5 rounded-full border border-stone-200 shadow-2xs">
              <Truck className="w-4 h-4 text-amber-700" />
              <span>Pan-India 24-Hour Shipping</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-4 py-1.5 rounded-full border border-stone-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>100% Solid Brass Guarantee</span>
            </div>
          </div>

        </div>
      </div>

      {/* Top 3 Bestseller Podium Spotlight Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        <div className="space-y-2 text-center sm:text-left border-b border-[#EADBCA] pb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-600 fill-amber-500" />
              <span>Top 3 Devotee Favorites</span>
            </h2>
            <span className="text-xs font-medium text-stone-500 hidden sm:inline">Based on verified customer orders</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topRanked.map((item, idx) => {
            const prod = item.product;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Rank Pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md ${item.rankBg}`}>
                    {item.rank}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-amber-300 block font-sans">
                      {item.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span>{prod.rating} ({prod.reviewsCount} Reviews)</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 line-through">₹{prod.originalPrice.toLocaleString('en-IN')}</span>
                      <div className="text-xl font-bold text-stone-900 font-sans">₹{prod.price.toLocaleString('en-IN')}</div>
                    </div>

                    <button
                      onClick={() => onAddToCart && onAddToCart(prod)}
                      className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Toolbar & Full Bestseller Inventory Grid */}
        <div className="pt-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EADBCA] pb-6">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'bg-white text-stone-700 border border-stone-200 hover:border-amber-800/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-stone-500 font-medium whitespace-nowrap">
              Showing {bestsellers.length} top rated items
            </span>
          </div>

          {/* Curated Bestsellers Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* Full Shop Catalog Banner */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 border border-[#EADBCA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-12">
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Looking for our entire collection?
              </h3>
              <p className="text-xs text-stone-600">
                Explore 50+ handcrafted brass murtis, spiritual oil paintings, and copper puja sets in our shop catalog.
              </p>
            </div>

            <a
              href="#shop"
              className="px-6 py-3 bg-stone-900 hover:bg-stone-950 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore Full Shop Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
