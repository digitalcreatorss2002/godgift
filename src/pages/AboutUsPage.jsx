import React, { useState } from 'react';
import { Sparkles, Award, ShieldCheck, Heart, Users, MapPin, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider, DiyaIllustration } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';

export default function AboutUsPage({ onNavigate }) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading God Gift Arts heritage & story..." />;
  }

  const pillars = [
    {
      icon: Award,
      title: "Jaipur Master Guild Legacy",
      description: "Crafted by 4th-generation master artisans using age-old lost-wax brass casting, Makrana marble chiseling, and oil-on-canvas techniques."
    },
    {
      icon: ShieldCheck,
      title: "100% Virgin Material Guarantee",
      description: "We use only pure solid brass, unadulterated copper, Makrana white marble, and 24K gold foil leafing—zero cheap synthetic resins."
    },
    {
      icon: Heart,
      title: "Sanctity & Devotional Intent",
      description: "Every deity idol, oil painting, and copper thali set is crafted with sacred intent to bring peace, prosperity, and divine energy to your home."
    },
    {
      icon: Truck,
      title: "Pan-India Sacred Delivery",
      description: "Reinforced 5-layer shockproof transit packaging delivering safely to 19,000+ pincodes across India and international destinations."
    }
  ];

  const craftSteps = [
    {
      number: "01",
      title: "Sacred Iconography",
      desc: "Studying traditional Shilpa Shastra scriptures to capture authentic deity mudras, postures, and expressions."
    },
    {
      number: "02",
      title: "Lost-Wax & Marble Casting",
      desc: "Hand-molding virgin brass molten alloys and hand-carving Makrana white marble blocks in our Jaipur ateliers."
    },
    {
      number: "03",
      title: "Hand-Polishing & Gold Detailing",
      desc: "Artisans meticulously buff, etch, and inlay 24K gold leafing and vibrant oil pigments to enhance divine luster."
    },
    {
      number: "04",
      title: "Ritual Transit Packaging",
      desc: "Inspected for zero defects and packed in golden velvet gift boxes ready for home altars or VIP corporate gifting."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Museum Style Hero Banner Header */}
      <div className="relative bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />

        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <DiyaIllustration className="w-80 h-80 text-amber-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Our Sacred Artisanal Heritage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            The Legacy of <br />
            <span className="italic font-normal text-amber-900">God Gift Arts</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Preserving centuries-old Jaipur master craftsmanship, lost-wax brass murtis, pure copper thalis, and sacred oil paintings for devotees across India and worldwide.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900">
              <MapPin className="w-4 h-4 text-amber-800" />
              <span>Jaipur, Rajasthan • Master Guild</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
              Handcrafting Devotional Heirlooms with Sacred Intent
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Founded in the heart of Jaipur, <strong>God Gift Arts</strong> was established with a singular vision: to honor and preserve traditional Indian spiritual craftsmanship while bringing divine grace into modern homes.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Our guild brings together over 45 master artisans whose families have practiced brass lost-wax casting, Makrana marble sculpting, and sacred oil painting for generations. Every piece we create is a bridge between timeless heritage and sacred devotion.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-stone-800">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Authentic Jaipur Craft</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Direct Artisan Support</span>
              </div>
            </div>
          </div>

          {/* Image Showcase Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/ganesha-oil.jpg"
                alt="Ganesha Oil Painting"
                className="rounded-3xl w-full h-56 object-cover border border-stone-200 shadow-md"
              />
              <img
                src="/col1.webp"
                alt="Brass Murti Craftsmanship"
                className="rounded-3xl w-full h-40 object-cover border border-stone-200 shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/col4.jpg"
                alt="Copper Pooja Thali"
                className="rounded-3xl w-full h-40 object-cover border border-stone-200 shadow-md"
              />
              <img
                src="/col5.jpeg"
                alt="Corporate Devotional Hampers"
                className="rounded-3xl w-full h-56 object-cover border border-stone-200 shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Why Devotees Choose God Gift Arts
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Our uncompromising commitment to purity, craftsmanship, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3 hover:shadow-lg hover:border-amber-800/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Craftsmanship Process */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              From Atelier to Altar
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Our Master Crafting Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {craftSteps.map((step, idx) => (
              <div key={idx} className="space-y-3 relative z-10">
                <span className="font-serif font-extrabold text-3xl text-amber-900/30 block">
                  {step.number}
                </span>
                <h3 className="font-serif font-bold text-stone-900 text-base">{step.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Counter Strip */}
        <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
          <div className="space-y-1">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">50,000+</div>
            <div className="text-xs text-stone-300 font-medium">Sacred Artifacts Sanctified</div>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">45+</div>
            <div className="text-xs text-stone-300 font-medium">Jaipur Master Artisans</div>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">150+</div>
            <div className="text-xs text-stone-300 font-medium">Corporate Partners</div>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">4.9 ★</div>
            <div className="text-xs text-stone-300 font-medium">Devotee Rating</div>
          </div>
        </div>

        {/* Call to Action CTA Banner */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-400/10" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Bring Sacred Artistry & Divine Grace into Your Home
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 font-serif italic">
              Explore our master handcrafted collection of brass murtis, spiritual oil paintings, and consecrated copper thalis.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate('shop')}
                className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('corporate-gifting')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
              >
                <span>Corporate B2B Enquiries</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}