import React, { useState, useEffect, useMemo } from 'react';
import { fetchProducts, fetchCategories, fetchCollections, getImageSrc } from '../services/api';
import ProductCard from '../components/ecommerce/ProductCard';
import QuickViewModal from '../components/ecommerce/QuickViewModal';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Award,
  Check,
  Tag
} from 'lucide-react';

const FALLBACK_COLLECTION_DATA = {
  paintings: {
    id: "paintings",
    slug: "paintings",
    title: "Spiritual Oil Paintings",
    subtitle: "Hand-Painted Canvas Art with Teak Wood Frames",
    description: "Every canvas in our Spiritual Oil Paintings collection is individually painted by Jaipur master artists using rich oil pigments, textured brushwork, and Vastu-compliant iconographic proportions.",
    bannerImage: "/ganesha-oil.jpg",
    artisanOrigin: "Jaipur Master Canvas Studio",
    material: "Oil on Canvas & Teak Wood",
    badge: "100% Hand-Painted"
  },
  idols: {
    id: "idols",
    slug: "idols",
    title: "Brass Idols & Murtis",
    subtitle: "Jaipur Lost-Wax Cast Solid Brass Sculptures",
    description: "Crafted per sacred Shilpa Shastras metallurgy, our solid brass murtis feature hand-chiseled facial expressions, antique gold lacquer polish, and lifetime durability for home mandirs.",
    bannerImage: "/col1.webp",
    artisanOrigin: "Jaipur Royal Bronze Guild",
    material: "100% Solid Virgin Brass",
    badge: "Lost-Wax Cast"
  },
  pooja: {
    id: "pooja",
    slug: "pooja",
    title: "Copper & Brass Puja Essentials",
    subtitle: "Sacred Consecrated Vessels, Thalis & Aarti Diyas",
    description: "Purify your daily worship rituals with 100% pure heavy-gauge copper thalis, engraved kalash vessels, Panchapatra sets, and multi-wick peacock oil diyas.",
    bannerImage: "/col4.jpg",
    artisanOrigin: "Moradabad & Jaipur Coppersmiths",
    material: "Pure Copper & Brass",
    badge: "Vedic Approved"
  },
  guruji: {
    id: "guruji",
    slug: "guruji",
    title: "Guru Ji Devotional Swaroop Line",
    subtitle: "Gilded Frames, Sandalwood Malas & Satsang Essentials",
    description: "Consecrated devotional swaroop frames, original sandalwood neck malas, satsang rumals, and car rear-mirror blessing accessories.",
    bannerImage: "/col6.webp",
    artisanOrigin: "Satsang Artisan Workshop",
    material: "Sandalwood, Velvet & Gilded Brass",
    badge: "Devotional Blessing"
  },
  gifting: {
    id: "gifting",
    slug: "gifting",
    title: "Festive & Corporate Gift Hampers",
    subtitle: "Bespoke Packaging, Brass Diyas & Dry Fruit Sets",
    description: "Luxury velvet gift box hampers containing solid brass diyas, pure mysore sandalwood incense, dry fruit containers, and custom logo greeting cards.",
    bannerImage: "/col5.jpeg",
    artisanOrigin: "God Gift Arts Gifting Guild",
    material: "Velvet, Brass & Sandalwood",
    badge: "Custom Logo Printing"
  },
  malas: {
    id: "malas",
    slug: "malas",
    title: "Devotional Malas & Rosaries",
    subtitle: "Original Vrindavan Tulsi, Sandalwood & Spatik Beads",
    description: "Authentic 108-bead japa rosaries hand-strung with pure Vrindavan Tulsi wood, Mysore Sandalwood, and natural crystal Spatik for prayer & meditation.",
    bannerImage: "/col8.webp",
    artisanOrigin: "Vrindavan Devotional Guild",
    material: "Natural Tulsi, Sandalwood & Spatik",
    badge: "108 Sacred Beads"
  },
  "dhoop-lamps": {
    id: "dhoop-lamps",
    slug: "dhoop-lamps",
    title: "Brass Dhoop Lamps & Urli Bowls",
    subtitle: "Traditional Handcrafted Brass Aarti Accessories & Decor",
    description: "Handcrafted heavy brass standing oil lamps, peacock-handled dhoop incense burners, and floating flower urli bowls.",
    bannerImage: "/col3.jpg",
    artisanOrigin: "Moradabad Brass Masters",
    material: "Solid Virgin Brass",
    badge: "Traditional Aarti"
  },
  "marble-murtis": {
    id: "marble-murtis",
    slug: "marble-murtis",
    title: "Marble Murtis & Carvings",
    subtitle: "Chaste White Makrana Marble Idols with 24K Gold Foil",
    description: "Flawlessly sculpted Makrana white marble deity idols embellished with hand-embossed 24K gold foil gold work.",
    bannerImage: "/col2.jpg",
    artisanOrigin: "Jaipur Marble Sculpture Artisans",
    material: "Makrana Marble & 24K Gold Foil",
    badge: "24K Gold Embossed"
  }
};

const normalizeCollectionId = (id) => {
  if (!id) return 'paintings';
  const c = decodeURIComponent(id).toLowerCase().replace(/[^a-z0-9]/g, '');
  if (c.includes('painting')) return 'paintings';
  if (c.includes('marble')) return 'marble-murtis';
  if (c.includes('idol') || c.includes('murti') || c.includes('statue')) return 'idols';
  if (c.includes('dhoop') || c.includes('lamp') || c.includes('urli')) return 'dhoop-lamps';
  if (c.includes('pooja') || c.includes('puja') || c.includes('copper')) return 'pooja';
  if (c.includes('guru')) return 'guruji';
  if (c.includes('gift') || c.includes('hamper')) return 'gifting';
  if (c.includes('mala') || c.includes('rosar')) return 'malas';
  return 'paintings';
};

export default function CollectionDetailPage({
  collectionId = 'paintings',
  selectedSubcategory = null,
  onBackToCollections,
  onAddToCart,
  onSelectProduct,
  onToggleWishlist,
  wishlistItems = []
}) {
  const normalizedKey = useMemo(() => normalizeCollectionId(collectionId), [collectionId]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [collectionsList, setCollectionsList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeSub, setActiveSub] = useState(selectedSubcategory);

  useEffect(() => {
    setActiveSub(selectedSubcategory);
  }, [selectedSubcategory]);

  useEffect(() => {
    Promise.all([fetchCategories(), fetchCollections(), fetchProducts()]).then(([cRes, colRes, pRes]) => {
      if (cRes && Array.isArray(cRes)) setCategoriesList(cRes);
      if (colRes && Array.isArray(colRes)) setCollectionsList(colRes);
      if (pRes && Array.isArray(pRes)) setProductsList(pRes);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const info = useMemo(() => {
    const raw = decodeURIComponent(collectionId || '').toLowerCase().trim();
    
    // 1. Check API collections first
    const dbCol = collectionsList.find(c => (c.slug || '').toLowerCase().trim() === raw || (c.title || '').toLowerCase().trim() === raw);
    if (dbCol) {
      return {
        id: dbCol.slug,
        slug: dbCol.slug,
        title: dbCol.title,
        subtitle: dbCol.subtitle || dbCol.section_subtitle || 'Curated Devotional Collection',
        description: dbCol.description || `Explore our exclusive ${dbCol.title} collection, handcrafted by traditional master artisans.`,
        bannerImage: dbCol.image ? getImageSrc(dbCol.image) : '/col1.webp',
        artisanOrigin: "Jaipur Master Artisan Guild",
        material: "Devotional Artisanal Quality",
        badge: dbCol.badge || 'Curated Series'
      };
    }

    // 2. Check API categories second
    const dbCat = categoriesList.find(c => (c.slug || '').toLowerCase().trim() === raw);
    if (dbCat) {
      return {
        id: dbCat.slug,
        slug: dbCat.slug,
        title: dbCat.name,
        subtitle: dbCat.subtitle || 'Handcrafted Devotional Artifacts',
        description: `Explore our handcrafted collection of ${dbCat.name}. Every artifact is individually made by master artisans using traditional techniques.`,
        bannerImage: dbCat.image ? getImageSrc(dbCat.image) : '/col4.jpg',
        artisanOrigin: "Master Artisan Guild",
        material: "Devotional Quality",
        badge: "Handcrafted"
      };
    }

    // 3. Fallback static collection data
    return FALLBACK_COLLECTION_DATA[normalizedKey] || FALLBACK_COLLECTION_DATA.paintings;
  }, [collectionId, normalizedKey, collectionsList, categoriesList]);

  // Subcategories list for current category/collection
  const currentSubcategories = useMemo(() => {
    const raw = decodeURIComponent(collectionId || '').toLowerCase().trim();
    const dbCat = categoriesList.find(c => (c.slug || '').toLowerCase().trim() === raw);
    if (dbCat && Array.isArray(dbCat.subcategories) && dbCat.subcategories.length > 0) {
      return dbCat.subcategories;
    }

    if (normalizedKey === 'paintings') return ["Ganesha Canvases", "Krishna Folk Art", "Divine Lakshmi", "Vastu Wall Paintings"];
    if (normalizedKey === 'idols') return ["Hanuman Ji Statues", "Khatu Shyam Ji", "Ram Darbar Set", "Durga Maa & Lakshmi"];
    if (normalizedKey === 'pooja') return ["Pure Copper Thalis", "Engraved Kalash", "Brass Aarti Bells", "Dhoop Stands"];
    if (normalizedKey === 'marble-murtis') return ["White Makrana Marble", "24K Gold Foil Idols", "Marble Chowki Plates"];
    if (normalizedKey === 'guruji') return ["Gilded Swaroop Portraits", "Sandalwood Malas", "Satsang Accessories"];
    if (normalizedKey === 'gifting') return ["Royal Velvet Boxes", "Custom Logo Hampers", "Diwali Diya Sets"];
    if (normalizedKey === 'dhoop-lamps') return ["Peacock Oil Diyas", "Brass Dhoop Burners", "Urli Bowls"];
    if (normalizedKey === 'malas') return ["108 Sandalwood Malas", "Spatik Crystal Rosaries", "Tulsi Bead Malas"];
    return [];
  }, [collectionId, normalizedKey, categoriesList]);

  // Filter products for this specific collection
  const collectionProducts = useMemo(() => {
    const rawId = decodeURIComponent(collectionId || '').toLowerCase().trim();
    const nKey = normalizedKey.toLowerCase().trim();

    return productsList.filter((product) => {
      const pColSlug = (product.collection_slug || '').toLowerCase().trim();
      const pCat = (product.category || '').toLowerCase().trim();

      // 1. Direct collection assignment from Admin Products
      if (pColSlug && pColSlug === rawId) return true;

      // 2. Category matching
      if (pCat === rawId || pCat === nKey) return true;

      if (nKey === 'paintings') return pCat === 'paintings' || pCat === 'spiritual-oil-paintings';
      if (nKey === 'marble-murtis') return pCat === 'marble-murtis' || pCat === 'marble-murtis-carvings';
      if (nKey === 'idols') return pCat === 'idols' || pCat === 'brass-idols-murtis';
      if (nKey === 'dhoop-lamps') return pCat === 'dhoop-lamps' || pCat === 'brass-dhoop-and-lamps';
      if (nKey === 'pooja') return pCat === 'pooja' || pCat === 'copper-pooja-sets';
      if (nKey === 'guruji') return pCat === 'guruji' || pCat === 'guru-ji-devotional-line';
      if (nKey === 'gifting') return pCat === 'gifting' || pCat === 'festive-corporate-gift-hampers';
      if (nKey === 'malas') return pCat === 'malas' || pCat === 'devotional-malas';
      
      return false;
    });
  }, [normalizedKey, collectionId, productsList]);

  // Sub-category specific filtered products
  const displayProducts = useMemo(() => {
    if (!activeSub) return collectionProducts;
    const target = activeSub.toLowerCase().trim();

    const matches = collectionProducts.filter(p => {
      const pName = (p.name || '').toLowerCase();
      const pDesc = (p.description || '').toLowerCase();
      const pMat = (p.material || '').toLowerCase();
      const pBadge = (p.badge || '').toLowerCase();
      const pSub = (p.subcategory || '').toLowerCase();

      const keywords = target.split(' ').filter(k => k.length > 2);
      return pSub.includes(target) || 
             pName.includes(target) || 
             pBadge.includes(target) ||
             keywords.some(k => pName.includes(k) || pDesc.includes(k) || pMat.includes(k));
    });

    return matches.length > 0 ? matches : collectionProducts;
  }, [collectionProducts, activeSub]);

  if (loading) {
    return <PageLoader text="Loading collection artifacts..." />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-20">

      {/* Top Collection Hero Banner with Image Background */}
      <div className="relative bg-stone-950 text-white min-h-[360px] sm:min-h-[420px] flex items-center overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0">
          <img
            src={info.bannerImage}
            alt={info.title}
            className="w-full h-full object-cover opacity-25 scale-105 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent" />
        </div>

        <LotusJaaliPatternBackground className="text-amber-500/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
          <button
            onClick={() => onBackToCollections ? onBackToCollections() : window.location.hash = '#collections'}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/80 hover:bg-amber-900 text-stone-300 hover:text-white text-xs font-bold tracking-wider uppercase transition-all mb-6 border border-stone-700/80 cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Collections</span>
          </button>

          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>{activeSub ? `Sub-Category: ${activeSub}` : info.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight leading-tight">
              {activeSub ? `${activeSub}` : info.title}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              {info.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-400 font-medium">
              <span className="flex items-center gap-1.5 text-stone-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                {info.artisanOrigin}
              </span>
              <span className="flex items-center gap-1.5 text-stone-300 font-semibold">
                <Award className="w-4 h-4 text-amber-400" />
                {info.material}
              </span>
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Check className="w-4 h-4" />
                {displayProducts.length} Items Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sub-Category Filter Pill Bar */}
      {currentSubcategories.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-xs flex items-center gap-2 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 shrink-0 pr-2 border-r border-stone-200">
              <Tag className="w-3.5 h-3.5" />
              <span>Sub-Categories:</span>
            </div>

            <button
              onClick={() => setActiveSub(null)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                !activeSub 
                  ? 'bg-amber-900 text-white shadow-xs' 
                  : 'bg-stone-100 text-stone-700 hover:bg-amber-50 hover:text-amber-900'
              }`}
            >
              All {info.title}
            </button>

            {currentSubcategories.map((sub, idx) => {
              const isActive = activeSub === sub;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSub(isActive ? null : sub)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'bg-amber-900 text-white shadow-xs' 
                      : 'bg-stone-100 text-stone-700 hover:bg-amber-50 hover:text-amber-900'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Products Display Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {activeSub ? `Artifacts in ${activeSub}` : `Artifacts in ${info.title}`}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Handcrafted Jaipur artifacts ready for dispatch
            </p>
          </div>
          <span className="text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
            {displayProducts.length} items
          </span>
        </div>

        {/* 2 Products Per Column on Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayProducts.length === 0 ? (
            <div className="col-span-full py-16 text-center text-stone-400 font-serif">
              No products found in this collection yet. Check back soon!
            </div>
          ) : (
            displayProducts.map((product) => {
              const isWishlisted = wishlistItems.some(w => w.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={() => setQuickViewProduct(product)}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={isWishlisted}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={onAddToCart}
          onSelectProduct={onSelectProduct}
        />
      )}

    </div>
  );
}
