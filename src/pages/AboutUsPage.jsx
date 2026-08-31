import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Heart, 
  Building2, 
  MapPin, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Flame,
  Star,
  PackageCheck,
  Crown
} from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider, DiyaIllustration } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';

export default function AboutUsPage({ onNavigate }) {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading God Gift Arts company details & heritage..." />;
  }

  const companyDetails = [
    { label: "Official Name", value: "God Gift Arts Private Limited" },
    { label: "Headquarters", value: "Jaipur, Rajasthan, India" },
    { label: "Established Year", value: "2006 (18+ Years Legacy)" },
    { label: "Artisan Network", value: "45+ Master Guild Craftsmen" },
    { label: "Corporate Desk", value: "+91 98290 12345 / corporate@godgiftarts.com" },
    { label: "Tax & Compliance", value: "100% GST Registered Corporate Invoicing" }
  ];

  const heroProducts = [
    {
      name: "Jaipur Lost-Wax Solid Brass Murtis",
      category: "Sculpture & Idols",
      image: "/col1.webp",
      specs: ["100% Virgin Brass", "Heavy Solid Cast", "Hand-Buffed Antique Finish"],
      description: "Crafted using the 3,000-year-old Chola lost-wax casting technique. Each brass Ganesha, Krishna, and Hanuman idol undergoes 14 hand-finishing steps by Jaipur sculptors."
    },
    {
      name: "Handpainted Spiritual Oil Canvases",
      category: "Devotional Paintings",
      image: "/ganesha-oil.jpg",
      specs: ["Vastu-Compliant Themes", "Oil on Double Canvas", "Solid Teak Frame Included"],
      description: "Created by master painters capturing divine mudras, radiant auric colors, and intricate gold foil leafing designed to sanctify home altars and living spaces."
    },
    {
      name: "100% Pure Copper Pooja Thali Sets",
      category: "Temple Ritual Accessories",
      image: "/col4.jpg",
      specs: ["Unadulterated Copper", "Engraved Kalash", "Antibacterial & Sacred"],
      description: "Traditional hammered copper vessels, engraved kalash containers, and brass aarti bells forged for daily morning rituals and festive Diwali thali ceremonies."
    }
  ];

  const faqs = [
    {
      q: "Are God Gift Arts brass murtis solid metal or hollow?",
      a: "All deity murtis and statues from God Gift Arts are cast from 100% solid virgin brass using traditional Jaipur lost-wax casting. We never use cheap resin, hollow shells, or plastic fillers."
    },
    {
      q: "How do I maintain and clean the brass and copper artifacts?",
      a: "For daily care, wipe gently with a soft dry microfiber cloth. For periodic shine restoration on pure copper or brass, apply a mixture of pitambari powder, lemon juice, or tamarind paste, rinse with water, and dry thoroughly."
    },
    {
      q: "Can we order customized corporate gift hampers with company logos?",
      a: "Yes! We specialize in bespoke Corporate Gifting. We offer laser-etched company logos on brassware, custom foil embossing on velvet gift boxes, personalized greeting cards, and 100% GST input credit invoicing."
    },
    {
      q: "What is your transit packaging & replacement policy?",
      a: "Every product is encased in 5-layer reinforced shockproof transit armor. In the rare event of transit damage, we provide a 100% free doorstep replacement with zero questions asked."
    },
    {
      q: "Do you ship internationally outside India?",
      a: "Yes, we ship sacred artifacts to over 40+ countries globally via DHL Express and FedEx with full transit tracking and protective wooden crating."
    }
  ];

  const qualityGuarantees = [
    {
      icon: ShieldCheck,
      title: "100% Virgin Metal Guarantee",
      desc: "Virgin brass, unadulterated copper, and genuine Makrana marble blocks."
    },
    {
      icon: Award,
      title: "Authentic Jaipur Master Guild",
      desc: "Every item is handmade by traditional 4th-generation artisan families."
    },
    {
      icon: PackageCheck,
      title: "Zero Damage Transit Guarantee",
      desc: "5-layer reinforced shockproof armor with 100% instant free replacement."
    },
    {
      icon: Crown,
      title: "Corporate GST Invoicing Support",
      desc: "Full tax input credit for corporate Diwali & enterprise appreciation hampers."
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
            <span>Our Heritage & Corporate Profile</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            About <br />
            <span className="italic font-normal text-amber-900">God Gift Arts</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Preserving centuries-old Jaipur master craftsmanship, lost-wax brass murtis, pure copper thalis, and sacred oil paintings for homes & corporate leaders worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">

        {/* 1. Company Overview & Details Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900">
                <Building2 className="w-4 h-4 text-amber-800" />
                <span>Company Overview</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Pioneering Authentic Jaipur Artisanal Craft Since 2006
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Founded in 2006 in Jaipur, Rajasthan, <strong>God Gift Arts Private Limited</strong> is an artisanal house dedicated to creating heirloom-quality devotional sculptures, sacred oil paintings, pure copper puja sets, and luxury corporate hampers.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We work directly with a guild of over 45 master sculptors and painters whose families have honed lost-wax brass casting and marble chiseling across generations. Every creation is crafted with sacred intent, authentic materials, and strict quality control.
              </p>
            </div>

            {/* Quick Specs Table */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
              <h3 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-2">
                Corporate Credentials & Specs
              </h3>
              <div className="divide-y divide-stone-200/80 text-xs">
                {companyDetails.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                    <span className="font-semibold text-stone-500">{item.label}</span>
                    <span className="font-bold text-stone-900 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Hero Product Spotlight Details Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              Flagship Creations
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
              Our Signature Hero Products
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Detailed breakdown of our most celebrated master artisanal lines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroProducts.map((prod, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-amber-900 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug">{prod.name}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{prod.description}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Key Specifications</span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.specs.map((spec, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-semibold bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full border border-stone-200">
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Quality & Assurance Guarantees Grid (Bonus AI Section 1) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              The God Gift Arts Quality Promise
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Our four unshakeable standards for every single artifact dispatched
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Interactive FAQ Section (Requested: FAQ) */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Everything you need to know about our artifacts, materials, and corporate orders
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-stone-200 border-t border-b border-stone-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-900 text-sm sm:text-base py-2 hover:text-amber-900 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-900' : ''}`} />
                  </button>

                  {isOpen && (
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-2 pb-2 pl-1 font-sans">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Stats & Counter Strip */}
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

        {/* 6. Call to Action CTA Banner */}
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
                <span>Corporate Gifting Enquiries</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}