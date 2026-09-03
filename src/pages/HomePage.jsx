import React, { useState } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CircularCategoryBar from '../components/home/CircularCategoryBar';
import NewArrivalsSection from '../components/home/NewArrivalsSection';
import OfferBannerSlider from '../components/home/OfferBannerSlider';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HeritageBanner from '../components/home/HeritageBanner';
import TrustBadges from '../components/home/TrustBadges';
import CorporateGiftingSection from '../components/home/CorporateGiftingSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import PartnersSection from '../components/home/PartnersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { DiyaIllustration, MandalaIllustration } from '../components/common/BackgroundIllustrations';

export default function HomePage({
  onAddToCart,
  onSelectCollection,
  onQuickView,
  onToggleWishlist,
  wishlistItems = []
}) {
  const handleSelectCategory = (catId) => {
    if (onSelectCollection) {
      onSelectCollection(catId);
    } else {
      window.location.hash = `#collection-${catId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-brand-bg pb-12">

      {/* Subtle Background Watermarks */}
      <div className="absolute top-160 left-0 -translate-x-1/3 opacity-30 pointer-events-none z-0">
        <MandalaIllustration className="w-[500px] h-[500px] text-amber-900/10" />
      </div>

      <div className="absolute bottom-1/3 right-0 translate-x-1/4 opacity-20 pointer-events-none z-0">
        <DiyaIllustration className="w-80 h-80 text-amber-800/15" />
      </div>

      {/* Streamlined, High-Impact Homepage Flow */}
      <div className="relative z-10 space-y-6">

        {/* 1. Ambient Hero Banner */}
        <HeroBanner />

        {/* 2. Prominent 8 Circular Category Avatar Bar */}
        <CircularCategoryBar onSelectCategory={handleSelectCategory} />

        {/* 3. New Arched Top Card "Our Best Sellers" Section matching satvikstore.in reference */}
        <NewArrivalsSection
          onSelectProduct={onQuickView}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlistItems={wishlistItems}
        />

        {/* 4. Promo Offers Carousel Slider */}
        <OfferBannerSlider />

        {/* 5. Signature Products Catalog */}
        <FeaturedProducts
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlistItems={wishlistItems}
        />

        {/* 6. Trust & Quality Badges */}
        <TrustBadges />

        {/* 7. Heritage Craftsmanship & Master Guild Banner */}
        <HeritageBanner />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 9. Esteemed Corporate Partners & Clients */}
        <PartnersSection />

        {/* 10. Devotee Reviews */}
        <TestimonialsSection />

      </div>

    </div>
  );
}
