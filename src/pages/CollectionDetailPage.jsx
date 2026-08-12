import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { fetchProducts, fetchCategories, getImageSrc } from '../services/api';
import ProductCard from '../components/ecommerce/ProductCard';
import QuickViewModal from '../components/ecommerce/QuickViewModal';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Award,
  Check
} from 'lucide-react';

const COLLECTION_DATA = {
  paintings: {
    id: "paintings",
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

export default function CollectionDetailPage({ collectionId = 'paintings', onBackToCollections, onAddToCart, onSelectProduct, onToggleWishlist, wishlistItems = [] }) {
  const normalizedKey = useMemo(() => normalizeCollectionId(collectionId), [collectionId]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) setCategoriesList(res);
    });
    fetchProducts().then(res => {
      if (res && Array.isArray(res) && res.length > 0) setProductsList(res);
    });
  }, []);

  const info = useMemo(() => {
    const raw = decodeURIComponent(collectionId || '').toLowerCase().trim();
    const dbCat = categoriesList.find(c => (c.slug || '').toLowerCase().trim() === raw);
    if (dbCat) {
      return {
        id: dbCat.slug,
        title: dbCat.name,
        subtitle: dbCat.subtitle || 'Handcrafted Devotional Artifacts',
        description: `Explore our handcrafted collection of ${dbCat.name}. Every artifact is individually made by master artisans using traditional techniques.`,
        bannerImage: dbCat.image ? getImageSrc(dbCat.image) : '/col4.jpg',
        artisanOrigin: "Master Artisan Guild",
        material: "Devotional Quality",
        badge: "Handcrafted"
      };
    }
    return COLLECTION_DATA[normalizedKey] || COLLECTION_DATA.paintings;
  }, [collectionId, normalizedKey, categoriesList]);

  // Filter products strictly for this specific category
  const collectionProducts = useMemo(() => {
    return productsList.filter((product) => {
      const pCat = (product.category || '').toLowerCase().trim();
      const nKey = normalizedKey.toLowerCase().trim();
      const rawId = decodeURIComponent(collectionId || '').toLowerCase().trim();
      
      // Direct match with DB slug or raw ID
      if (pCat === nKey || pCat === rawId) return true;

      // Category slug mapping
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

  return (
    <div className="min-h-screen bg-brand-bg pb-20">

      {/* Top Collection Hero Banner with Image Background */}
      <div className="relative bg-stone-950 text-white min-h-[360px] sm:min-h-[420px] flex items-center overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0">
          <img
            src={info.bannerImage}
            alt={info.title}
            className="w-full h-full object-cover filter brightness-50 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/50 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
        </div>

        <LotusJaaliPatternBackground className="text-amber-400/10 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-6">

          {/* Back to All Collections Button */}
          <button
            onClick={onBackToCollections}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Collections</span>
          </button>

          {/* Title & Badge */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{info.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              {info.title}
            </h1>

            <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
              {info.description}
            </p>
          </div>

          {/* Provenance Pills */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-300 pt-2 border-t border-stone-800/80">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{info.artisanOrigin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{info.material}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{collectionProducts.length} Items Available</span>
            </div>
          </div>

        </div>
      </div>

      {/* Products Grid (No Filter Sidebar, Direct Full-Width Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">

        {/* Title Subheader */}
        <div className="flex items-center justify-between border-b border-[#EADBCA] pb-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Artifacts in {info.title}
          </h2>
          <span className="text-xs font-medium text-stone-500">
            {collectionProducts.length} items
          </span>
        </div>

        {/* 4-Column Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collectionProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onSelectProduct}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistItems.some(w => w.id === product.id)}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
