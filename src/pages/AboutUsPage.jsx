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
  Crown, 
  Phone, 
  Mail, 
  ExternalLink, 
  Users, 
  Target, 
  TrendingUp, 
  Coins, 
  Warehouse, 
  Briefcase, 
  Layers, 
  Globe, 
  Store, 
  BadgePercent, 
  Trophy, 
  Video, 
  Eye, 
  X, 
  Maximize2,
  Palette,
  HandHeart,
  Sun,
  Calendar
} from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider, DiyaIllustration } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';

export default function AboutUsPage({ onNavigate }) {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeZone, setActiveZone] = useState('all');
  const [activeMediaModal, setActiveMediaModal] = useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading GodGift Arts legacy & craftsmanship details..." />;
  }

  // Company Credentials & Corporate Profile Data
  const companyDetails = [
    { label: "Brand Name", value: "GodGift Arts" },
    { label: "Founding Legacy", value: "Established in 2006 (Past 2 Decades)" },
    { label: "Founder", value: "Mrs. Poonam (Fine Arts in Art Education)" },
    { label: "Manufacturing Setup", value: "In-House Setup with 30–40 Skilled Women Artisans" },
    { label: "Craftsmanship", value: "100% Handmade & Truly Handcrafted" },
    { label: "Trusted Partners", value: "Market99, Walmart, Vishal Mega Mart, Rajmandir" },
    { label: "Recognition", value: "Awarded & Recognized by Walmart (WEDP)" },
    { label: "Operational Base", value: "F-111, Bhagwan Nagar, Ashram, New Delhi - 110014, India" },
    { label: "Direct Desk", value: "+91 9211672167 / poonamgautam924@gmail.com" },
    { label: "Official Portfolio", value: "https://linktr.ee/godgiftarts" }
  ];

  // Trusted Retail & Corporate Partners
  const trustedPartners = [
    { name: "Walmart", desc: "Awarded & Partnered for Quality Excellence", tag: "Awarded Partner" },
    { name: "Market99", desc: "Longstanding Retail & Home Decor Supply", tag: "Retail Chain" },
    { name: "Vishal Mega Mart", desc: "Pan-India Hypermarket Supply Partner", tag: "Hypermarket" },
    { name: "Rajmandir", desc: "Regional Wholesale & Hypermarket Network", tag: "Wholesale Partner" }
  ];

  // Awards & Media Showcase (award3.mp4, award1.jpeg, award2.jpeg)
  const awardsData = [
    {
      id: "award-video",
      type: "video",
      src: "/award3.mp4",
      poster: "/award1.jpeg",
      title: "National Felicitation & Award Ceremony",
      organization: "Walmart & Industry Forum",
      description: "Official felicitation ceremony honoring Mrs. Poonam and GodGift Arts for manufacturing excellence, reliable business partnerships, and women empowerment in craft production."
    },
    {
      id: "award-hor",
      type: "image",
      src: "/award1.jpeg",
      title: "House of Rose Professional Keynote",
      organization: "House of Rose Professional",
      description: "Founder Mrs. Poonam addressing the House of Rose Professional leadership summit on traditional Indian craftsmanship, fine arts education, and scaling an artisanal enterprise."
    },
    {
      id: "award-walmart",
      type: "image",
      src: "/award2.jpeg",
      title: "Walmart Women Entrepreneurship Development Program",
      organization: "Walmart & WEConnect International",
      description: "Recognized and awarded by Walmart in the prestigious Women Entrepreneurship Development Program (WEDP), reflecting commitment to product excellence and trust."
    }
  ];

  // Expanded Product Portfolio Categories
  const productPortfolio = [
    {
      name: "Traditional & Decorative Diwali Diyas",
      category: "Signature Craft",
      image: "/col6.webp",
      desc: "Our foundational craft. Earthen, wax, patili, and designer decorative diyas intricately hand-painted and embellished to bring an auspicious glow."
    },
    {
      name: "Pure Ghee Diyas & Ghee Batti",
      category: "Sacred Rituals",
      image: "/col8.webp",
      desc: "Ready-to-light pure cow ghee diyas and pre-molded ghee battis offering effortless daily morning prayers, steady smokeless flame, and ritual purity."
    },
    {
      name: "Fragrant Dhoop Cones & Agarbatti",
      category: "Aroma & Devotion",
      image: "/col3.jpg",
      desc: "Natural aromatic dhoop cones and premium hand-rolled agarbatti infused with pure floral herbs, sandalwood, and sacred oils for sanctified spaces."
    },
    {
      name: "Pooja Essentials & Havan Samagri",
      category: "Pooja Supplies",
      image: "/col4.jpg",
      desc: "Comprehensive temple and ritual assortments, authentic havan samagri blends with pure Ayurvedic herbs, and sacred ceremonial accessories."
    },
    {
      name: "Seasonal Festival Collections",
      category: "Year-Round Celebrations",
      image: "/col1.webp",
      desc: "Full bespoke seasonal collections for Holi, Christmas, Rakhi, and Diwali, designed to meet the high seasonal demand of modern retail chains."
    },
    {
      name: "Corporate & Wholesale Festive Hampers",
      category: "B2B Solutions",
      image: "/col7.webp",
      desc: "Curated gift hampers combining handcrafted diyas, fragrances, and pooja items, backed by scalable bulk capacity and custom corporate branding."
    }
  ];

  // Specific Product Tags from User Prompt
  const allProductTags = [
    "Diwali Diyas",
    "Decorative Diyas",
    "Ghee Diyas",
    "Ghee Batti",
    "Dhoop Cones",
    "Agarbatti",
    "Pooja Essentials",
    "Havan Samagri",
    "Holi Collections",
    "Christmas Decor",
    "Rakhi Collections",
    "Custom Hampers"
  ];

  // Our Strengths (from User Prompt)
  const ourStrengths = [
    {
      icon: Warehouse,
      title: "In-House Manufacturing Setup",
      desc: "Fully equipped in-house manufacturing infrastructure allowing complete end-to-end quality control and prompt production timelines."
    },
    {
      icon: Users,
      title: "Skilled Women Workforce",
      desc: "A dedicated team of 30–40 skilled women artisans playing an integral role in creating, decorating, and finishing every creation."
    },
    {
      icon: TrendingUp,
      title: "Bulk Production Capacity",
      desc: "Engineered to deliver high-volume orders seamlessly for national retail hypermarkets and wholesale distribution networks."
    },
    {
      icon: Palette,
      title: "Customized Designs & Packaging",
      desc: "Bespoke color palettes, festive themes, private labeling, and custom corporate gift hampers tailored to client requirements."
    },
    {
      icon: Coins,
      title: "Competitive Factory Pricing",
      desc: "Cost-effective wholesale pricing models that empower our retail and distribution partners with healthy profit margins."
    },
    {
      icon: ShieldCheck,
      title: "Commitment to Premium Quality",
      desc: "100% handmade human craftsmanship where every stage of production undergoes strict personal inspection."
    }
  ];

  // Pan-India Regional Zones
  const distributionZones = [
    {
      id: "northern",
      name: "Northern Zone",
      states: ["Delhi", "Uttar Pradesh", "Uttarakhand", "Punjab", "Haryana", "Himachal Pradesh", "Jammu & Kashmir"]
    },
    {
      id: "western",
      name: "Western Zone",
      states: ["Gujarat", "Maharashtra", "Goa", "Rajasthan"]
    },
    {
      id: "central",
      name: "Central Zone",
      states: ["Madhya Pradesh", "Chhattisgarh", "Bihar"]
    },
    {
      id: "eastern",
      name: "Eastern Zone",
      states: ["West Bengal", "Odisha", "Jharkhand", "Assam", "Sikkim", "Meghalaya", "Tripura", "Manipur", "Nagaland", "Mizoram", "Arunachal Pradesh"]
    },
    {
      id: "south",
      name: "South Zone",
      states: ["Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"]
    },
    {
      id: "ut",
      name: "Union Territories",
      states: ["Chandigarh", "Puducherry", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Andaman and Nicobar Islands"]
    }
  ];

  // Interactive FAQs
  const faqs = [
    {
      q: "What products are included in the GodGift Arts portfolio?",
      a: "Our product portfolio has expanded well beyond decorative diyas to include Dhoop Cones, Agarbatti, Pooja Essentials, Havan Samagri, Ghee Diyas, Ghee Batti, a wide range of traditional and decorative Diwali Diyas, and all seasonal festive collections for Holi, Christmas, Rakhi, and Diwali."
    },
    {
      q: "Are GodGift Arts products truly handmade?",
      a: "Yes, 100%! Craftsmanship is at the heart of everything we create. Our products are handmade and handcrafted by skilled artisans. Our manufacturing process relies on traditional human handcrafting skills rather than automated machinery, with shaping, decorating, and finishing done by hand to ensure a personal artistic touch."
    },
    {
      q: "Which major retail chains and corporate partners trust GodGift Arts?",
      a: "Over the years, we have built strong, enduring partnerships with reputed retail and corporate giants across India, including Walmart, Market99, Vishal Mega Mart, and Rajmandir. We are also proud to be recognized and awarded by Walmart for quality and product excellence."
    },
    {
      q: "How does GodGift Arts support women empowerment?",
      a: "GodGift Arts operates with its own manufacturing setup and a dedicated team of 30–40 skilled women who play an integral role in creating, decorating, and finishing our products. We take immense pride in providing meaningful, dignified work opportunities to women while preserving traditional Indian craftsmanship."
    },
    {
      q: "Can businesses apply for Pan-India distributorship or bulk orders?",
      a: "Yes! We cater to nationwide wholesale supply and are actively appointing regional distributors with lucrative 40% margins. Contact our Founder Mrs. Poonam directly via Call/WhatsApp at +91 9211672167 or email at poonamgautam924@gmail.com."
    }
  ];

  const filteredZones = activeZone === 'all' 
    ? distributionZones 
    : distributionZones.filter(z => z.id === activeZone);

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* 1. Hero Banner: Our Legacy */}
      <div className="relative bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />

        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <DiyaIllustration className="w-80 h-80 text-amber-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Our Legacy • Past 2 Decades</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            Building a Legacy of <br />
            <span className="italic font-normal text-amber-900">Quality and Trust Since 2006</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-3xl mx-auto font-serif italic leading-relaxed">
            "A Journey of Creativity, Craftsmanship & Empowerment for the past 2 decades."
          </p>

          {/* Quick Badges Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold text-stone-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <HandHeart className="w-3.5 h-3.5 text-rose-600" />
              100% Handmade & Truly Handcrafted
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              Empowering 30–40 Skilled Women Artisans
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              Awarded & Recognized by Walmart
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-blue-600" />
              Pan-India & Global Supply
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">

        {/* 2. Our Journey & Founder's Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900">
                <Building2 className="w-4 h-4 text-amber-800" />
                <span>Our Story & Creative Vision</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                From Fine Arts to a Thriving Manufacturing Legacy
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                <p>
                  At <strong>GodGift Arts</strong>, our journey is a story of passion, creativity, determination and the vision to transform traditional Indian craftsmanship into a thriving manufacturing business.
                </p>
                <p>
                  With a background in <strong>Fine Arts in Art Education</strong>, our founder envisioned building a business that brings together artistic creativity, traditional Indian craftsmanship and entrepreneurial excellence.
                </p>
                <p>
                  What began as a passion for creating beautiful decorative diyas has evolved into an established manufacturing and wholesale business serving customers across India.
                </p>
                <p className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80 text-amber-950 font-serif leading-relaxed">
                  "At Present, <strong>GodGift Arts operates with its own manufacturing setup and a dedicated team of 30–40 skilled women</strong>, who play an integral role in creating, decorating and finishing our products. We take immense pride in providing meaningful work opportunities to women while preserving the beauty of traditional Indian craftsmanship."
                </p>
              </div>

              {/* Founder Profile Spotlight */}
              <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-900 text-amber-100 flex items-center justify-center font-serif font-bold text-xl shadow-md">
                    P
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-base">Mrs. Poonam</h4>
                    <p className="text-xs text-amber-900 font-semibold uppercase tracking-wider">Founder</p>
                    <p className="text-[11px] text-stone-500">Fine Arts in Art Education • Creative Leadership</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a 
                    href="tel:+919211672167" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-800 hover:text-amber-900 text-xs font-semibold transition-colors border border-stone-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>+91 9211672167</span>
                  </a>
                  <a 
                    href="mailto:poonamgautam924@gmail.com" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-800 hover:text-amber-900 text-xs font-semibold transition-colors border border-stone-200"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>Email Founder</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Credentials Table */}
            <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-wider">
                  Corporate Credentials
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Verified Since 2006
                </span>
              </div>

              <div className="divide-y divide-stone-200/80 text-xs">
                {companyDetails.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-start justify-between gap-4">
                    <span className="font-semibold text-stone-500 shrink-0">{item.label}</span>
                    {item.label === "Official Portfolio" ? (
                      <a 
                        href={item.value} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="font-bold text-amber-800 hover:text-amber-950 text-right inline-flex items-center gap-1 underline underline-offset-2 break-all"
                      >
                        linktr.ee/godgiftarts
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    ) : (
                      <span className="font-bold text-stone-900 text-right">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-200">
                <a
                  href="https://linktr.ee/godgiftarts"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Explore Official Linktree & Social Channels</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3. 100% Handmade. Truly Handcrafted. Section */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#EADBCA] space-y-8 relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-900/10" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <HandHeart className="w-3.5 h-3.5 text-amber-800" />
              <span>Authentic Human Artistry</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
              100% Handmade. Truly Handcrafted.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-sans max-w-3xl mx-auto">
              At GodGift Arts, <strong>craftsmanship is at the heart of everything we create</strong>. Our products are handmade and handcrafted by skilled artisans, with every stage of production, decoration and finishing carried out through dedicated human craftsmanship.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#EADBCA] space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Palette className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-base">Shaping & Designing</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From conceptual sketches to initial clay and wax molding, every shape is sculpted with patience and artisanal expertise.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#EADBCA] space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-base">Intricate Decoration</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hand-painted detailing, vibrant non-toxic colors, and sparkling traditional motifs applied by hand without automated machinery.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#EADBCA] space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-base">Personal Artistic Touch</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero machine automation. Every single item carries the unique warmth, human precision, and soul of traditional Indian craft.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Trusted Partnerships & Recognition (Walmart, Market99, Vishal Mega Mart, Rajmandir) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5 text-amber-800" />
              <span>Industry Standing & Credibility</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
              Trusted Partnerships & Recognition
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-serif italic max-w-2xl mx-auto">
              Over the years, we have established strong business relationships with reputed retail and corporate names, including <strong>Market99, Walmart, Vishal Mega Mart and Rajmandir</strong>.
            </p>
            <p className="text-xs sm:text-sm text-amber-900 font-semibold font-sans">
              We are also proud to be recognized and awarded by Walmart, reflecting our commitment to quality, product excellence and reliable business partnerships.
            </p>
          </div>

          {/* Partner Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustedPartners.map((partner, pIdx) => (
              <div 
                key={pIdx}
                className="bg-stone-50 rounded-2xl p-5 border border-stone-200 text-center space-y-1.5 hover:border-amber-400/50 hover:bg-amber-50/40 transition-all"
              >
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 inline-block">
                  {partner.tag}
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-base sm:text-lg">{partner.name}</h4>
                <p className="text-[11px] text-stone-500">{partner.desc}</p>
              </div>
            ))}
          </div>

          {/* Media Showcase: Pure Images & Video */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-wider">
                Award Felicitations & Stage Recognition
              </h3>
              <span className="text-xs text-stone-500 font-medium">Click photos to enlarge</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {awardsData.map((award) => (
                <div 
                  key={award.id}
                  className="relative aspect-4/3 bg-stone-950 rounded-3xl overflow-hidden border border-stone-200 shadow-md group"
                >
                  {award.type === "video" ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={award.poster}
                      className="w-full h-full object-cover"
                    >
                      <source src={award.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div 
                      className="w-full h-full cursor-pointer relative"
                      onClick={() => setActiveMediaModal(award)}
                    >
                      <img 
                        src={award.src} 
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white p-2.5 rounded-full backdrop-blur-xs shadow-lg">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Our Product Portfolio */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              Comprehensive Craft Catalog
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
              Our Product Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-2xl mx-auto">
              Our product portfolio has expanded beyond decorative diyas to include <strong>Dhoop Cones, Agarbatti, Pooja Essentials, Havan Samagri, Ghee Diyas, Ghee Batti</strong> and a wide range of traditional and decorative Diwali Diyas and all seasonal items like <strong>Holi, Christmas, Rakhi, Diwali</strong>.
            </p>

            {/* Product Range Badges */}
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              {allProductTags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1 rounded-full shadow-2xs hover:bg-amber-100 transition-colors"
                >
                  ✦ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPortfolio.map((prod, idx) => (
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
                  <span className="absolute top-3 left-3 bg-amber-900 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {prod.category}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug">{prod.name}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">{prod.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Our Strengths Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
              Our Strengths
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              With our own manufacturing capabilities, skilled workforce, bulk production capacity, customized designs, competitive pricing and commitment to premium quality, we continue to meet the evolving requirements of our business partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourStrengths.map((str, idx) => {
              const Icon = str.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-stone-50 border border-stone-200/80 space-y-3 hover:bg-amber-50/50 hover:border-amber-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6 text-amber-800" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">{str.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{str.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Guided Belief Quote Callout */}
          <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 text-center space-y-2 shadow-md">
            <p className="text-xs text-amber-300 uppercase tracking-widest font-bold">Our Guiding Belief</p>
            <p className="text-lg sm:text-2xl font-serif italic text-amber-100 max-w-3xl mx-auto leading-relaxed">
              "Quality in every creation, commitment in every order and trust in every relationship."
            </p>
            <p className="text-xs text-stone-400 pt-1 font-sans">
              From our humble beginnings to becoming an established name in the Indian wholesale and retail supply chain.
            </p>
          </div>
        </div>

        {/* 7. Looking Ahead: Future Vision */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#EADBCA] space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-amber-800" />
            <span>Our Future Horizon</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
            Looking Ahead
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-sans max-w-2xl mx-auto">
            As we look towards the future, our vision is to <strong>expand our presence into international markets</strong> while continuing to celebrate Indian traditions, empower women and deliver excellence through handcrafted products.
          </p>
        </div>

        {/* 8. Pan-India Distributorship Program */}
        <div id="distributorship" className="bg-gradient-to-b from-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 space-y-10 relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-400/5" />

          {/* Section Header */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Store className="w-3.5 h-3.5 text-amber-400" />
              <span>Partner With Us • Nationwide Expansion</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight text-white">
              Pan-India Distributorship & Wholesale Opportunities
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              We invite proactive, entrepreneurial partners to join the GodGift Arts distribution network with lucrative <strong>40% profit margins</strong>, dedicated marketing support, and guaranteed factory-backed fulfillment.
            </p>
          </div>

          {/* Distribution Zones Tabs */}
          <div className="relative z-10 space-y-6 pt-2 border-t border-stone-800">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h3 className="text-base font-serif font-bold text-amber-300 uppercase tracking-wider">
                Distributors Appointed Across All 6 National Zones
              </h3>

              {/* Zone Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setActiveZone('all')}
                  className={`px-3 py-1 text-xs rounded-full font-semibold transition-all cursor-pointer ${
                    activeZone === 'all' 
                      ? 'bg-amber-400 text-stone-950 font-bold' 
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  All Zones
                </button>
                {distributionZones.map(zone => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`px-3 py-1 text-xs rounded-full font-semibold transition-all cursor-pointer ${
                      activeZone === zone.id 
                        ? 'bg-amber-400 text-stone-950 font-bold' 
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {zone.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Zones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredZones.map((zone, zIdx) => (
                <div 
                  key={zIdx}
                  className="bg-stone-800/60 rounded-2xl p-6 border border-stone-700 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-stone-700 pb-2">
                    <h4 className="font-serif font-bold text-amber-300 text-base">{zone.name}</h4>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      {zone.states.length} Regions
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {zone.states.map((st, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[11px] font-medium bg-stone-900/90 text-stone-200 border border-stone-700 px-2.5 py-1 rounded-lg"
                      >
                        • {st}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distributorship Direct Contact Action Bar */}
          <div className="relative z-10 bg-amber-500/10 border border-amber-400/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <h4 className="font-serif font-bold text-lg sm:text-xl text-white">
              Connect with Founder Mrs. Poonam
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-sans">
              Discuss regional distributorship rights, bulk sample kits, and customized corporate order terms.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919211672167?text=Hello%20Mrs.%20Poonam%2C%20I%20am%20interested%20in%20partnering%20with%20GodGift%20Arts."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <span>WhatsApp Founder (+91 9211672167)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919211672167"
                className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91 9211672167</span>
              </a>

              <a
                href="mailto:poonamgautam924@gmail.com?subject=GodGift%20Arts%20Wholesale%20Enquiry"
                className="bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full border border-stone-600 transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>poonamgautam924@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* 9. Interactive FAQ Section */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Learn more about our craftsmanship, women-led manufacturing, and business partnerships
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

        {/* 10. Contact Desk & Final Call to Action */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-400/10" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Experience the Beauty of True Handmade Craftsmanship
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 font-serif italic max-w-2xl mx-auto">
              Explore our complete range of handcrafted Diwali diyas, ghee battis, dhoop cones, and seasonal festive collections.
            </p>

            {/* Direct Contact Pill */}
            <div className="bg-black/30 backdrop-blur-xs border border-white/10 rounded-2xl p-4 sm:p-6 max-w-xl mx-auto text-left space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider">
                <Store className="w-4 h-4" />
                <span>GodGift Arts • Operational Headquarters</span>
              </div>
              <p className="text-stone-300">
                <strong>Address:</strong> F-111, Bhagwan Nagar, Ashram, New Delhi - 110014, India
              </p>
              <p className="text-stone-300">
                <strong>Founder:</strong> Mrs. Poonam | <strong>Phone:</strong> +91 9211672167 / +91 82874 21378
              </p>
              <p className="text-stone-300">
                <strong>Email:</strong> poonamgautam924@gmail.com | <strong>Portfolio:</strong> linktr.ee/godgiftarts
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate('shop')}
                className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#distributorship"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Distributorship Program</span>
              </a>

              <a
                href="https://wa.me/919211672167"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>WhatsApp Founder</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Award Photographs */}
      {activeMediaModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveMediaModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 relative animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
                  {activeMediaModal.organization}
                </span>
                <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                  {activeMediaModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveMediaModal(null)}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative max-h-[70vh] bg-stone-950 flex items-center justify-center overflow-hidden">
              <img 
                src={activeMediaModal.src} 
                alt={activeMediaModal.title} 
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Description */}
            <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              {activeMediaModal.description}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
