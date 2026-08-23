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

export default function ProductDetailPage({ productId = 1, onBack, onAddToCart, onSelectProduct, onToggleWishlist, wishlistItems = [] }) {
  const [liveProduct, setLiveProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'artisan' | 'vastu' | 'reviews'
  const [selectedImage, setSelectedImage] = useState(null);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    setLiveProduct(null);
    setSelectedImage(null);
    fetchProductById(productId).then(res => {
      if (res) {
        setLiveProduct(res);
        if (res.image) setSelectedImage(res.image);
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

  // Extract gallery list of multiple images
  const galleryList = useMemo(() => {
    if (!product) return [];
    const list = [];
    if (product.image) list.push(product.image);

    if (Array.isArray(product.gallery) && product.gallery.length > 0) {
      product.gallery.forEach(img => {
        if (img && !list.includes(img)) list.push(img);
      });
    } else if (product.images) {
      try {
        const parsed = typeof product.images === 'string' ? JSON.parse(product.images) : product.images;
        if (Array.isArray(parsed)) {
          parsed.forEach(img => {
            if (img && !list.includes(img)) list.push(img);
          });
        }
      } catch (e) {
        const parts = String(product.images).split(',').map(s => s.trim()).filter(Boolean);
        parts.forEach(img => {
          if (img && !list.includes(img)) list.push(img);
        });
      }
    }
    return list.length > 0 ? list : ['/ganesha-oil.jpg', '/col1.webp', '/col4.jpg'];
  }, [product]);

  const isWishlisted = useMemo(() => {
    if (!product) return false;
    return wishlistItems.some(w => w.id === product.id);
  }, [product, wishlistItems]);

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

  const activeMainImg = selectedImage || product.image || galleryList[0];

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
            className="inline-flex items-center gap-1.5 font-bold text-stone-800 hover:text-primary transition-colors shrink-0 ml-4 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </button>
        </div>
      </div>

      {/* Main Product Display Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Compact Image Showcase & Gallery Selector */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Featured Image Container (Height Constrained so text fits comfortably) */}
            <div className="relative h-[320px] sm:h-[400px] md:h-[440px] bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-md group flex items-center justify-center p-2">
              <img
                src={getImageSrc(activeMainImg)}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Badge Overlays */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                {product.badge && (
                  <span className="px-3 py-1 bg-stone-900/90 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest rounded-full backdrop-blur-md">
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="px-3 py-1 bg-amber-900 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-xs">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => onToggleWishlist && onToggleWishlist(product)}
                className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer ${
                  isWishlisted ? 'bg-rose-500 text-white' : 'bg-white/90 text-stone-700 hover:text-rose-500 hover:bg-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Interactive Multiple Gallery Thumbnails Strip */}
            {galleryList.length > 1 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Product Gallery ({galleryList.length} Views)
                </span>
                <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                  {galleryList.map((imgUrl, idx) => {
                    const isSelected = activeMainImg === imgUrl;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(imgUrl)}
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 bg-white p-1 ${
                          isSelected 
                            ? 'border-amber-900 ring-2 ring-amber-900/30 scale-105 shadow-md' 
                            : 'border-stone-200/90 opacity-70 hover:opacity-100 hover:border-amber-700'
                        }`}
                      >
                        <img
                          src={getImageSrc(imgUrl)}
                          alt={`${product.name} View ${idx + 1}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

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
          <div className="lg:col-span-6 space-y-5">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 5)
                          ? 'fill-amber-500 text-amber-500'
                          : 'fill-amber-200 text-amber-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-900">{product.rating || 4.9}</span>
                <span className="text-xs text-stone-400 font-medium">({product.reviewsCount || 140} Devotee Reviews)</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
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
                  <span className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-900">
                    ₹{Number(product.price).toLocaleString('en-IN')}
                  </span>
                  {(product.originalPrice || product.original_price) && (
                    <span className="text-sm text-stone-400 line-through font-mono">
                      ₹{Number(product.originalPrice || product.original_price).toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">
                  Inclusive of all taxes & free protective wooden crating
                </span>
              </div>
            </div>

            {/* Quantity Selector & Add to Shopping Cart Button */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-300 rounded-2xl bg-white p-1 shadow-2xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-extrabold font-mono text-stone-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg cursor-pointer ${
                  addedToast 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-amber-900 hover:bg-stone-950 text-white shadow-amber-900/20'
                }`}
              >
                {addedToast ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Shopping Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Shopping Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Micro Guarantees list */}
            <div className="space-y-2 pt-2 text-xs font-semibold text-stone-700 border-t border-stone-200/80">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Handcrafted by Jaipur Master Artisans with Vastu Iconography</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Packed in Multi-Layer Cushion Foam & Heavy Duty Box</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Dispatched within 24 Hours from Jaipur Workshop</span>
              </div>
            </div>

            {/* Tabbed Specs & Vastu Details Section */}
            <div className="pt-4 border-t border-stone-200/80 space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 overflow-x-auto scrollbar-none">
                {[
                  { id: 'specs', label: 'Specifications' },
                  { id: 'artisan', label: 'Artisan Process' },
                  { id: 'vastu', label: 'Vastu Direction' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2.5 text-xs font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'border-amber-900 text-amber-900'
                        : 'border-transparent text-stone-500 hover:text-stone-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs leading-relaxed text-stone-600 bg-white p-4 rounded-2xl border border-stone-200/80">
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div><span className="font-bold text-stone-900 block">Material:</span> {product.material || 'Pure Devotional Metallurgy'}</div>
                    <div><span className="font-bold text-stone-900 block">Craftsmanship:</span> Lost-Wax Jaipur Casting</div>
                    <div><span className="font-bold text-stone-900 block">Finish:</span> Antique Gold Lacquer</div>
                    <div><span className="font-bold text-stone-900 block">Origin:</span> Jaipur, Rajasthan</div>
                  </div>
                )}
                {activeTab === 'artisan' && (
                  <p>Handcrafted by traditional 5th-generation Jaipur artisan guilds using sacred lost-wax (Cire Perdue) casting and hand-carving techniques. Each piece requires 18+ hours of meticulous artisan finishing.</p>
                )}
                {activeTab === 'vastu' && (
                  <p>Recommended Vastu placement: East or North-East direction of your home temple, living room, or entrance for maximum spiritual harmony and prosperity.</p>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Devotional Artifacts */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-stone-200 space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Related Sacred Artifacts You May Like
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map((relProd) => (
                <ProductCard
                  key={relProd.id}
                  product={relProd}
                  onQuickView={onSelectProduct}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistItems.some(w => w.id === relProd.id)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
