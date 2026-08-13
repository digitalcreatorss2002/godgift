import React, { useState, useEffect, useMemo } from 'react';
import { fetchProductById, fetchProducts, getImageSrc } from '../services/api';
import ProductCard from '../components/ecommerce/ProductCard';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { 
  ArrowLeft, 
  Star, 
  ShoppingBag, 
  Heart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Award, 
  Check, 
  Sparkles,
  Share2,
  ChevronRight,
  Info,
  Clock,
  Plus,
  Minus
} from 'lucide-react';

import PageLoader from '../components/common/PageLoader';

export default function ProductDetailPage({ productId = 1, onBack, onAddToCart, onSelectProduct }) {
  const [liveProduct, setLiveProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'artisan' | 'vastu' | 'reviews'
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    setLiveProduct(null);
    fetchProductById(productId).then(res => {
      if (res) {
        setLiveProduct(res);
        if (res.category) {
          fetchProducts({ category: res.category }).then(relRes => {
            if (relRes && Array.isArray(relRes)) {
              setRelatedProducts(relRes.filter(p => p.id !== res.id).slice(0, 4));
            }
          });
        }
      }
    });
  }, [productId]);

  const product = liveProduct;

  const handleAdd = () => {
    if (onAddToCart && product) {
      onAddToCart(product, quantity);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 3000);
    }
  };

  if (!product) {
    return <PageLoader text="Loading sacred artifact details..." />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Top Breadcrumbs Bar */}
      <div className="bg-[#FAF6F0] border-b border-[#EADBCA] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-stone-600 font-medium">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button onClick={onBack} className="hover:text-primary transition-colors font-bold">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <button onClick={onBack} className="hover:text-primary transition-colors font-bold capitalize">
              {product.category || 'Catalog'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold line-clamp-1">{product.name}</span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 font-bold text-stone-800 hover:text-primary transition-colors shrink-0 ml-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main Product Display Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Image Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-md group">
              <img
                src={getImageSrc(product.image)}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge Overlays */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.badge && (
                  <span className="px-3 py-1 bg-stone-900/90 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest rounded-full backdrop-blur-md">
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="px-3 py-1 bg-secondary text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-xs">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-md transition-all shadow-md ${
                  isWishlisted ? 'bg-secondary text-white' : 'bg-white/90 text-stone-700 hover:text-secondary'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Quality Assurance Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-stone-200/80 text-center text-[11px] font-semibold text-stone-700 shadow-2xs">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
                <span>100% Authentic</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-stone-100 px-2">
                <Truck className="w-5 h-5 text-amber-700" />
                <span>Express Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-5 h-5 text-amber-700" />
                <span>Transit Insured</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Purchasing & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-500 text-amber-500'
                          : 'fill-amber-200 text-amber-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-900">{product.rating}</span>
                <span className="text-xs text-stone-400 font-medium">({product.reviewsCount} Devotee Reviews)</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Banner Box */}
            <div className="p-5 bg-[#FAF6F0] rounded-2xl border border-[#EADBCA] flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-serif font-bold text-stone-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-semibold text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                  Inclusive of all taxes & free protective wooden crating
                </span>
              </div>

              {product.inStock && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>In Stock</span>
                </span>
              )}
            </div>

            {/* Quantity & Add to Cart Action Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity Control */}
                <div className="flex items-center bg-white border border-stone-300 rounded-2xl p-1 shadow-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:bg-stone-100 rounded-xl text-stone-700 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:bg-stone-100 rounded-xl text-stone-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add to Cart Button */}
                <button
                  onClick={handleAdd}
                  className="flex-1 py-4 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Shopping Cart</span>
                </button>
              </div>

              {/* Toast Feedback */}
              {addedToast && (
                <div className="p-3 bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center justify-between animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added {quantity} x "{product.name}" to your cart!</span>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Bullet List */}
            <div className="pt-4 border-t border-stone-200 space-y-2.5 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-700" />
                <span>Handcrafted by Jaipur Master Artisans with Vastu Iconography</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-700" />
                <span>Packed in Multi-Layer Cushion Foam & Heavy Duty Box</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-700" />
                <span>Dispatched within 24 Hours from Jaipur Workshop</span>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16 bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-stone-200 gap-6 overflow-x-auto scrollbar-none pb-2">
            {[
              { id: 'specs', label: 'Specifications & Materials' },
              { id: 'artisan', label: 'Artisan Craftsmanship' },
              { id: 'vastu', label: 'Vastu & Mandir Guidelines' },
              { id: 'reviews', label: `Devotee Reviews (${product.reviewsCount})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap pb-3 border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700 pt-2">
              <div className="p-4 bg-stone-50 rounded-2xl space-y-1">
                <span className="font-bold text-stone-900 uppercase tracking-wider block text-[10px]">Primary Material</span>
                <span className="font-medium text-stone-700">{product.material || "Pure Virgin Brass / Hand-Painted Canvas"}</span>
              </div>
              <div className="p-4 bg-stone-50 rounded-2xl space-y-1">
                <span className="font-bold text-stone-900 uppercase tracking-wider block text-[10px]">Item Weight</span>
                <span className="font-medium text-stone-700">{product.weight || "1.8 kg approx."}</span>
              </div>
              <div className="p-4 bg-stone-50 rounded-2xl space-y-1">
                <span className="font-bold text-stone-900 uppercase tracking-wider block text-[10px]">Craft Origin</span>
                <span className="font-medium text-stone-700">Jaipur Master Artisan Guild, Rajasthan</span>
              </div>
              <div className="p-4 bg-stone-50 rounded-2xl space-y-1">
                <span className="font-bold text-stone-900 uppercase tracking-wider block text-[10px]">Finish Coating</span>
                <span className="font-medium text-stone-700">Tarnish-Resistant Antique Lacquer Polish</span>
              </div>
            </div>
          )}

          {activeTab === 'artisan' && (
            <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed pt-2 font-serif">
              <p>
                Each piece is individually hand-sculpted using lost-wax bronze casting or hand-painted on premium linen canvas by heritage families in Jaipur. No two items are identical, ensuring your home receives a unique sacred heirloom.
              </p>
            </div>
          )}

          {activeTab === 'vastu' && (
            <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed pt-2">
              <p className="font-bold text-stone-900">Recommended Placement per Shilpa Shastras:</p>
              <ul className="list-disc pl-5 space-y-1 text-stone-700">
                <li>Place facing East or North-East (Ishanya Kona) in your puja ghar.</li>
                <li>Keep elevated on a clean wooden altar or marble thali.</li>
                <li>Clean gently with a soft dry cloth. Avoid harsh chemical cleaners.</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#EADBCA] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="text-stone-900 ml-2">Rajesh Sharma (Delhi)</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold">✓ Verified Purchase</span>
                </div>
                <p className="text-xs text-stone-600 italic">
                  "Exceeded all expectations! The weight and detailed finish of this piece is divine. Arrived safely packaged within 2 days in Delhi."
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between border-b border-[#EADBCA] pb-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Devotees Also Explored
              </h2>
              <span className="text-xs text-stone-500 font-medium">Matching sacred artifacts</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
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
