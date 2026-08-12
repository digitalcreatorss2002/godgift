import React, { useState } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import OfferBannerSlider from '../components/home/OfferBannerSlider';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HeritageBanner from '../components/home/HeritageBanner';
import CorporateGiftingSection from '../components/home/CorporateGiftingSection';
import InstagramGallery from '../components/home/InstagramGallery';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TrustBadges from '../components/home/TrustBadges';
import QuickViewModal from '../components/ecommerce/QuickViewModal';
import { DiyaIllustration, MandalaIllustration } from '../components/common/BackgroundIllustrations';

import ArtisanalIntentionSection from '../components/home/ArtisanalIntentionSection';
import DeityCollectionGrid from '../components/home/DeityCollectionGrid';

export default function HomePage({ onAddToCart, onSelectCollection, onQuickView, onToggleWishlist, wishlistItems = [] }) {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleSelectCategory = (catId) => {
    if (onSelectCollection) {
      onSelectCollection(catId);
    } else {
      window.location.hash = `#collection-${catId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">

      {/* Subtle Background Watermarks */}
      <div className="absolute top-160 left-0 -translate-x-1/3 opacity-40 pointer-events-none z-0">
        <MandalaIllustration className="w-[500px] h-[500px] text-amber-900/10" />
      </div>

      <div className="absolute top-430 right-0 translate-x-1/4 opacity-30 pointer-events-none z-0">
        <DiyaIllustration className="w-80 h-80 text-amber-800/15" />
      </div>

      <div className="absolute bottom-1/3 left-0 -translate-x-1/4 opacity-30 pointer-events-none z-0">
        <DiyaIllustration className="w-96 h-96 text-primary/10" />
      </div>

      <div className="absolute bottom-20 right-0 translate-x-1/3 opacity-30 pointer-events-none z-0">
        <MandalaIllustration className="w-[600px] h-[600px] text-stone-900/10" />
      </div>

      {/* Clean Homepage Flow */}
      <div className="relative z-10 space-y-8">

        {/* 1. Full-Screen Ambient Video Hero Banner */}
        <HeroBanner />

        {/* 2. Artisanal Intention & Brand Essence Section (with Jaali Background Illustration) */}
        <ArtisanalIntentionSection />

        {/* 3. Festive Offer & Promo Code Carousel Slider */}
        <OfferBannerSlider />

        {/* 5. Category Bento Image Collage Highlights */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* 4. Featured Products Catalog with Interactive Filters & Cards */}
        <FeaturedProducts
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlistItems={wishlistItems}
        />

        {/* 5. Trust Badges Bar */}
        <TrustBadges />

        {/* 6. Master Artisan Heritage & 4-Step Lost-Wax Process */}
        <HeritageBanner />

        {/* 7. Corporate & Bulk Gifting Hampers Quote Form */}
        <CorporateGiftingSection />

        {/* 8. Customer Mandir Setups Instagram Gallery */}
        <InstagramGallery />

        {/* 9. Devotee Reviews & Testimonials */}
        <TestimonialsSection />

      </div>

    </div>
  );
}
