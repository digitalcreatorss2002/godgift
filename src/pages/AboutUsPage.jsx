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
  Play,
  Eye,
  X,
  Maximize2
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
    return <PageLoader text="Loading God Gift Arts company details & heritage..." />;
  }

  // Company Credentials & Profile Data
  const companyDetails = [
    { label: "Brand & Company Name", value: "God Gift Arts" },
    { label: "Business Category", value: "Gifts & Crafts • Festive & Decorative Lighting" },
    { label: "Established Year", value: "2006 (18+ Years Legacy)" },
    { label: "Leadership", value: "Mrs. Poonam (CEO)" },
    { label: "Core Operations", value: "Foremost Manufacturer, Wholesaler, Exporter, Importer & Trader" },
    { label: "Operational Headquarters", value: "F-111, Bhagwan Nagar, Ashram, New Delhi - 110014, India" },
    { label: "Direct Contact Desk", value: "+91 9211672167 / Poonamgautam924@gmail.com" },
    { label: "Global Reach", value: "Worldwide Shipping Available & Pan-India Network" },
    { label: "Official Portfolio", value: "https://linktr.ee/godgiftarts" }
  ];

  // Awards & Recognition Media Data (award1.jpeg, award2.jpeg, award3.mp4)
  const awardsData = [
    {
      id: "award-video",
      type: "video",
      src: "/award3.mp4",
      poster: "/award1.jpeg",
      title: "National Felicitation & Award Ceremony",
      organization: "National Industry Recognition",
      category: "Ceremony Video",
      badge: "Watch Live Video",
      description: "Official felicitation ceremony honoring Mrs. Poonam and God Gift Arts for outstanding manufacturing excellence, dedication to traditional handicrafts, and empowering women in the craft sector."
    },
    {
      id: "award-hor",
      type: "image",
      src: "/award1.jpeg",
      title: "House of Rose Professional Keynote",
      organization: "House of Rose Professional",
      category: "Leadership Summit",
      badge: "Keynote Address",
      description: "CEO Mrs. Poonam addressing the House of Rose Professional leadership summit, sharing insights on building a nationwide artisanal brand, manufacturing innovation, and women-led entrepreneurship."
    },
    {
      id: "award-walmart",
      type: "image",
      src: "/award2.jpeg",
      title: "Walmart Women Entrepreneurship Development Program",
      organization: "Walmart & WEConnect International",
      category: "WEDP National Cohort",
      badge: "Walmart Honoree",
      description: "Selected and recognized among the elite cohort of women entrepreneurs at the prestigious Walmart Women Entrepreneurship Development Program (WEDP) with WEConnect International."
    }
  ];

  // Core Product Range
  const productCategories = [
    {
      name: "Diwali Festival Diyas",
      category: "Festive Lighting",
      image: "/col6.webp",
      specs: ["Traditional & Modern Motifs", "Handcrafted Artistry", "Clean & Long Burn"],
      description: "Exquisite earthen and designer diyas crafted to enrich Diwali ceremonies, rangoli decorations, and temple altars with an auspicious, golden glow."
    },
    {
      name: "Tea Light Candles (White & Colors)",
      category: "Decorative Illumination",
      image: "/col3.jpg",
      specs: ["Smokeless Paraffin Wax", "Vibrant Assorted Hues", "Aluminum Cup Safety"],
      description: "Premium quality white and multicolored tea light candles designed for home ambient lighting, aromatherapy diffusers, celebrations, and festive decor."
    },
    {
      name: "Decorative & Wax Diyas",
      category: "Designer Home Decor",
      image: "/col8.webp",
      specs: ["Ready-to-Light Wax Fill", "Intricate Carved Patterns", "Zero Spill Design"],
      description: "Artistic wax-filled diyas combining traditional aesthetics with modern convenience. Perfect for effortless pooja rituals and grand festive hampers."
    },
    {
      name: "Pooja & Patili Diyas",
      category: "Sacred Rituals",
      image: "/col7.webp",
      specs: ["Deep Oil Reservoir", "Stable Base Casting", "Auspicious Heritage Styling"],
      description: "Sacred traditional patili and pooja diyas engineered for steady flame retention during morning prayers, temple aartis, and festive ceremonies."
    },
    {
      name: "Mini Matki Diyas & Fancy Diyas",
      category: "Ethnic Crafts",
      image: "/col1.webp",
      specs: ["Ethnic Earthen Vessel Style", "Glitter & Stone Accents", "Hand-Finished Polish"],
      description: "Charming mini-matki vessels and novelty fancy diyas decorated in vibrant festival colors, loved by retailers and devotees across India."
    },
    {
      name: "Festive Devotional & Corporate Hampers",
      category: "Wholesale & Gifting",
      image: "/col4.jpg",
      specs: ["Custom Box Packaging", "Bulk Invoicing Ready", "High Demand Festive Gifting"],
      description: "Curated wholesale hampers combining handcrafted diyas, tea lights, and traditional decorative accessories for corporate and family celebrations."
    }
  ];

  // All 11 Official Product Tags from AppointDistributors listing
  const offeredProductsList = [
    "Diwali festival diya",
    "Diya",
    "Tea Light Candle",
    "White Tea Light Candle",
    "Color Tea Light Candles",
    "Decorative Diya",
    "Wax Diya",
    "Pooja Diya",
    "Patili Diya",
    "Mini Matki Diya",
    "Fancy Diya"
  ];

  // USPs of our products (from Screenshot 3)
  const productUSPs = [
    {
      icon: Sparkles,
      title: "Unique & Handcrafted Designs",
      desc: "Each diya and candle is crafted with meticulous attention to detail, offering a unique aesthetic appeal and attractive patterns that delight customers."
    },
    {
      icon: ShieldCheck,
      title: "High-Quality Materials",
      desc: "Products are manufactured from top-quality components and refined wax adhering strictly to industry norms, ensuring clean burns and lasting durability."
    },
    {
      icon: Flame,
      title: "Festive & Decorative Focus",
      desc: "Our entire range is specifically envisioned and designed to illuminate festive occasions, Diwali celebrations, sacred ceremonies, and luxury home décor."
    },
    {
      icon: Layers,
      title: "Wide Variety of Options",
      desc: "We offer an extensive selection of vibrant colors, custom sizes, and bespoke artistic designs to satisfy diverse regional and consumer preferences."
    },
    {
      icon: Coins,
      title: "Affordable Factory Rates",
      desc: "Superior craftsmanship and excellent finishing standards provided at competitive, highly accessible pricing for domestic retail and export markets."
    },
    {
      icon: Globe,
      title: "Worldwide Shipping Available",
      desc: "Equipped for robust global exports and domestic pan-India dispatches with certified shockproof packaging for guaranteed zero-damage arrival."
    }
  ];

  // Features of our company (from Screenshot 3)
  const companyFeatures = [
    {
      title: "Dedicated Legacy Since 2006",
      desc: "Nearly two decades of uninterrupted dedication to manufacturing and distributing premium festive lighting goods."
    },
    {
      title: "Strategic New Delhi Location",
      desc: "Operating from the vibrant capital hub of Bhagwan Nagar, New Delhi, ensuring swift freight and pan-India reach."
    },
    {
      title: "End-to-End Capabilities",
      desc: "Foremost Manufacturer, Wholesaler, Exporter, Importer, and Trader offering integrated supply solutions."
    },
    {
      title: "Customer-Centric Approach",
      desc: "Prioritizing consumer satisfaction, consistent product quality, prompt responsiveness, and lasting partnerships."
    },
    {
      title: "Visionary National Leadership",
      desc: "Guided by CEO Mrs. Poonam with a dedicated vision to establish national leadership in the festive goods sector."
    }
  ];

  // Perks of being our distributor (from Screenshot 2 & 3)
  const distributorPerks = [
    {
      icon: BadgePercent,
      title: "Attractive 40% Profit Margin",
      desc: "Earn high recurring returns with a generous 40% margin on products across our in-demand festive catalogue."
    },
    {
      icon: TrendingUp,
      title: "High-Growth Festive Sector",
      desc: "Partner with an established brand in the booming, multi-crore Indian festive, wedding, and decorative lighting industry."
    },
    {
      icon: PackageCheck,
      title: "Diverse & In-Demand Product Range",
      desc: "Gain immediate access to fast-moving festive diyas, tea light candles, wax diyas, and ceremonial pooja supplies."
    },
    {
      icon: Award,
      title: "Dedicated Sales & Marketing Support",
      desc: "Full comprehensive marketing materials, product catalogues, seasonal support, and guidance from God Gift Arts."
    },
    {
      icon: Crown,
      title: "Potential for Exclusive Territorial Rights",
      desc: "Exceptional performers receive dedicated exclusive territory rights based on sales track record and regional market potential."
    }
  ];

  // Requirements for being our distributor (from Screenshot 2)
  const distributorRequirements = [
    {
      title: "Initial Investment Capacity",
      detail: "₹2 Lakh to ₹5 Lakh",
      desc: "Financial stability and capital capability to maintain adequate inventory and manage initial order volumes."
    },
    {
      title: "Storage Space Required",
      detail: "200 sq. ft. Minimum",
      desc: "Sufficient and secure storage space of at least 200 sqft to manage seamless inventory warehousing and dispatch."
    },
    {
      title: "Local Market Knowledge",
      detail: "Retail & Festive Landscape",
      desc: "A strong understanding of the local market dynamics for festive, lighting, and decorative items."
    },
    {
      title: "Proven Distribution Track Record",
      detail: "Sales & Distribution Experience",
      desc: "Prior experience in retail distribution, preferably in home décor, gifts, seasonal items, or similar sectors."
    },
    {
      title: "Commitment to Quality & Service",
      detail: "Customer Satisfaction",
      desc: "Unwavering commitment to upholding product quality standards, timely fulfillment, and exceptional client care."
    }
  ];

  // Distributors Required In: Regional Zones (from Screenshot 4)
  const distributionZones = [
    {
      id: "northern",
      name: "Northern Zone",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      states: ["Delhi", "Uttar Pradesh", "Uttarakhand", "Punjab", "Haryana", "Himachal Pradesh", "Jammu & Kashmir"]
    },
    {
      id: "western",
      name: "Western Zone",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      states: ["Gujarat", "Maharashtra", "Goa", "Rajasthan"]
    },
    {
      id: "central",
      name: "Central Zone",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      states: ["Madhya Pradesh", "Chhattisgarh", "Bihar"]
    },
    {
      id: "eastern",
      name: "Eastern Zone",
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
      states: ["West Bengal", "Odisha", "Jharkhand", "Assam", "Sikkim", "Meghalaya", "Tripura", "Manipur", "Nagaland", "Mizoram", "Arunachal Pradesh"]
    },
    {
      id: "south",
      name: "South Zone",
      badgeColor: "bg-violet-100 text-violet-900 border-violet-300",
      states: ["Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"]
    },
    {
      id: "ut",
      name: "Union Territories",
      badgeColor: "bg-stone-100 text-stone-900 border-stone-300",
      states: ["Chandigarh", "Puducherry", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Andaman and Nicobar Islands"]
    }
  ];

  // Interactive FAQs
  const faqs = [
    {
      q: "What products does God Gift Arts manufacture and supply?",
      a: "Established in 2006, God Gift Arts is a foremost manufacturer, wholesaler exporter, importer, and trader specializing in Diwali festival diyas, various diya designs, tea light candles (pure white & colored), wax diyas, pooja diyas, patili diyas, mini matki diyas, fancy decorative diyas, and artisanal festive gifting hampers."
    },
    {
      q: "How can I apply to become an authorized distributor for God Gift Arts in India?",
      a: "We are actively appointing Pan-India distributors across all zones! Requirements include an initial investment of ₹2 Lakh to ₹5 Lakh to manage inventory, a minimum of 200 sq. ft. storage space, and local market understanding in retail or home décor. Partners receive an attractive 40% margin, marketing collateral, and potential exclusive territorial rights. Contact our CEO Mrs. Poonam directly at +91 9211672167 or poonamgautam924@gmail.com to apply."
    },
    {
      q: "What profit margin and perks do distributors receive?",
      a: "Distributors enjoy an attractive profit margin of 40% on our high-demand festive and decorative lighting products. Additional perks include dedicated sales and marketing support, seasonal promotional materials, direct factory-backed order fulfillment, and potential for exclusive territorial rights based on market performance."
    },
    {
      q: "Do you offer Worldwide Shipping outside India?",
      a: "Yes! Worldwide Shipping is available. God Gift Arts exports to international clients and overseas festive retailers with reinforced, export-grade packaging ensuring zero transit damage."
    },
    {
      q: "What quality norms and standards do God Gift Arts products follow?",
      a: "All products are manufactured from top-quality components and premium wax following rigorous industry norms and standards. Our candles and wax diyas provide a clean, steady burn, safe cotton wicks, smokeless illumination, and superior finishing standards."
    },
    {
      q: "Where is God Gift Arts located and how can we visit or contact you?",
      a: "Our registered operational headquarters is located at F-111, Bhagwan Nagar, Ashram, New Delhi - 110014, India. You can connect with our CEO Mrs. Poonam via Call/WhatsApp at +91 9211672167 or email at poonamgautam924@gmail.com."
    }
  ];

  const filteredZones = activeZone === 'all' 
    ? distributionZones 
    : distributionZones.filter(z => z.id === activeZone);

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* 1. Hero Banner Header */}
      <div className="relative bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />

        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <DiyaIllustration className="w-80 h-80 text-amber-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Dedicated Manufacturer & Wholesaler Since 2006</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            About <br />
            <span className="italic font-normal text-amber-900">God Gift Arts</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-stone-700 max-w-3xl mx-auto font-serif leading-relaxed">
            One of India's foremost <strong>Manufacturers, Wholesalers, Exporters, Importers, and Traders</strong> of Diwali Festival Diyas, Tea Light Candles, Wax Diyas, and Exquisite Decorative Lighting. Operating from Bhagwan Nagar, New Delhi, enriching festive homes worldwide.
          </p>

          {/* Quick Badges Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold text-stone-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              18+ Years Manufacturing Legacy (Est. 2006)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-amber-600" />
              Worldwide Shipping Available
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <BadgePercent className="w-3.5 h-3.5 text-rose-600" />
              40% Distributor Profit Margin
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-stone-200 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              Bhagwan Nagar, New Delhi
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">

        {/* 2. Company Overview & Corporate Credentials */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900">
                <Building2 className="w-4 h-4 text-amber-800" />
                <span>Company Profile & Mission</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
                Illuminating Celebrations with Handcrafted Elegance Since 2006
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                <p>
                  <strong>Established in 2006, God Gift Arts</strong> is a dedicated manufacturer based in Bhagwan Nagar, New Delhi, India, specializing in a beautiful range of festive and decorative lighting products. Operating under our distinct brand name <strong>God Gift Arts</strong>, we are committed to enriching celebrations and homes with our exquisite collection.
                </p>
                <p>
                  Our extensive product range includes <strong>Diwali festival diyas, various Diya designs, Tea Light Candles, White Tea Light Candles, Color Tea Light Candles, Wax Diya, Pooja Diya, Patili Diya, Mini Matki Diya, Fancy Diya, and Decorative Diyas</strong>. God Gift Arts prides itself on meticulous craftsmanship and quality materials, ensuring that every product brings a warm and festive glow to any setting.
                </p>
                <p className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/70 text-amber-950 italic font-serif">
                  "Our offered products are manufactured from top quality components following industry norms and standards, and are highly admired by customers for their attractive patterns, ease of use, superior quality, and excellent finishing standards — offered at truly affordable rates."
                </p>
              </div>

              {/* Company Leadership Spotlight */}
              <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-900 text-amber-100 flex items-center justify-center font-serif font-bold text-xl shadow-md">
                    P
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-base">Mrs. Poonam</h4>
                    <p className="text-xs text-amber-900 font-semibold uppercase tracking-wider">Chief Executive Officer (CEO)</p>
                    <p className="text-[11px] text-stone-500">God Gift Arts • Leadership & Vision</p>
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
                    href="mailto:Poonamgautam924@gmail.com" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-800 hover:text-amber-900 text-xs font-semibold transition-colors border border-stone-200"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>Email CEO</span>
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
                  Verified
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

          {/* National Vision Card */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#EADBCA] space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900">
              <Target className="w-4 h-4 text-amber-800" />
              <span>Our National Vision</span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
              Building a Pan-India Festive Lighting & Decorative Network
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              "At God Gift Arts, our vision is to become a leading name in festive and decorative lighting across the nation. To achieve this, we are strategically building a robust Pan-India distribution network. We recognize that effective distribution is vital for reaching diverse consumer segments, from urban retailers to seasonal vendors nationwide. Therefore, we are actively seeking passionate and entrepreneurial individuals and businesses to partner with us as Pan-India distributors. We are committed to fostering strong, collaborative relationships, providing our partners with comprehensive support and resources to effectively market and distribute God Gift Arts products, contributing to our shared growth and solidifying our brand presence."
            </p>
          </div>
        </div>

        {/* 3. Awards, Accolades & Leadership Recognition Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5 text-amber-800" />
              <span>Accolades & Leadership Recognition</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
              Honors, Awards & National Felicitations
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-serif italic max-w-2xl mx-auto">
              Celebrating Mrs. Poonam's visionary leadership and God Gift Arts' milestone achievements in manufacturing excellence, women entrepreneurship, and industry recognition.
            </p>
          </div>

          {/* 3 Media Cards Grid: 1 Video + 2 Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {awardsData.map((award) => (
              <div 
                key={award.id}
                className="bg-stone-50 rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                {/* Media Player / Container */}
                <div className="relative aspect-4/3 bg-stone-950 overflow-hidden flex items-center justify-center">
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
                    <>
                      <img 
                        src={award.src} 
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => setActiveMediaModal(award)}
                      />
                      <button
                        onClick={() => setActiveMediaModal(award)}
                        className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                        title="Enlarge photograph"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  <span className="absolute top-3 left-3 bg-amber-900 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm pointer-events-none">
                    {award.badge}
                  </span>
                </div>

                {/* Card Text Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
                      {award.organization} • {award.category}
                    </span>
                    <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {award.description}
                    </p>
                  </div>

                  {award.type === "image" && (
                    <div className="pt-3 border-t border-stone-200/70">
                      <button
                        onClick={() => setActiveMediaModal(award)}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full Photograph</span>
                      </button>
                    </div>
                  )}

                  {award.type === "video" && (
                    <div className="pt-3 border-t border-stone-200/70">
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-emerald-600" />
                        <span>High-Definition Official Clip</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Recognition Highlights Strip */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#EADBCA] grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200/80">
            <div className="space-y-1.5">
              <div className="inline-flex p-2 rounded-xl bg-amber-900/10 text-amber-900 mb-1">
                <Crown className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Walmart WEDP Certified</h4>
              <p className="text-xs text-stone-600">Selected for the prestigious Walmart Women Entrepreneurship Development Program with WEConnect.</p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="inline-flex p-2 rounded-xl bg-amber-900/10 text-amber-900 mb-1">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">House of Rose Speaker</h4>
              <p className="text-xs text-stone-600">Invited to key leadership platforms to share insights on indigenous artisanal manufacturing & growth.</p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="inline-flex p-2 rounded-xl bg-amber-900/10 text-amber-900 mb-1">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">18+ Years Leadership</h4>
              <p className="text-xs text-stone-600">Recognized for consistent dedication to craftsmanship, product reliability, and national expansion.</p>
            </div>
          </div>
        </div>

        {/* 4. Offered Range of Products Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              Our Manufacturing Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
              Offered Range of Festive & Decorative Products
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Extensive collection of Diwali diyas, premium tea light candles, and designer spiritual lighting
            </p>

            {/* Product Range Badges */}
            <div className="pt-4 flex flex-wrap justify-center gap-2">
              {offeredProductsList.map((tag, tIdx) => (
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
            {productCategories.map((prod, idx) => (
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

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug">{prod.name}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">{prod.description}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Manufacturing Highlights</span>
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

        {/* 5. USPs of Our Products (Why Choose GGA) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              Unmatched Craft & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              USPs of God Gift Arts Products
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Crafted from top quality components following rigorous industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productUSPs.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">{usp.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{usp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. PAN-INDIA DISTRIBUTORSHIP OPPORTUNITY */}
        <div id="distributorship" className="bg-gradient-to-b from-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 space-y-12 relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-400/5" />

          {/* Section Header */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Store className="w-3.5 h-3.5 text-amber-400" />
              <span>Partner With Us • Pan-India Expansion</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-white">
              God Gift Arts is Looking for Decorative Items Distributors
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              We invite proactive, entrepreneurial, and financially stable partners to join the God Gift Arts family. This presents a compelling opportunity to be part of a rapidly growing brand in the high-demand festive and decorative goods sector with exclusive advantages.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="relative z-10 space-y-6">
            <h3 className="text-lg font-serif font-bold text-amber-300 text-center uppercase tracking-wider">
              ✦ Perks of Being Our Distributor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distributorPerks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-stone-800/80 backdrop-blur-xs rounded-2xl p-6 border border-stone-700/80 space-y-3 hover:border-amber-400/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-white text-base">{perk.title}</h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-sans">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirements Grid */}
          <div className="relative z-10 space-y-6 pt-4 border-t border-stone-800">
            <h3 className="text-lg font-serif font-bold text-amber-300 text-center uppercase tracking-wider">
              ✦ Requirements for Becoming Our Distributor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distributorRequirements.map((req, idx) => (
                <div 
                  key={idx}
                  className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 space-y-2 hover:border-amber-400/30 transition-all"
                >
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    Criterion #{idx + 1}
                  </span>
                  <h4 className="font-serif font-bold text-white text-base">{req.title}</h4>
                  <div className="inline-block px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 font-bold text-xs mb-2">
                    {req.detail}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed font-sans">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* National Geographic Zones */}
          <div className="relative z-10 space-y-6 pt-4 border-t border-stone-800">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h3 className="text-lg font-serif font-bold text-amber-300 uppercase tracking-wider">
                ✦ Distributors Required Across India (By Zones)
              </h3>
              <p className="text-xs text-stone-400">
                Actively appointing regional distributors across all 6 national operational zones
              </p>

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
                  All Zones (All India)
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
              Ready to Partner with God Gift Arts in Your City?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-sans">
              Connect directly with our CEO Mrs. Poonam to discuss distributorship terms, initial inventory packages, and 40% margin allocations.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919211672167?text=Hello%20Mrs.%20Poonam%2C%20I%20am%20interested%20in%20applying%20for%20a%20God%20Gift%20Arts%20Distributorship."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <span>WhatsApp CEO (+91 9211672167)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919211672167"
                className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: +91 9211672167</span>
              </a>

              <a
                href="mailto:Poonamgautam924@gmail.com?subject=God%20Gift%20Arts%20Distributorship%20Application"
                className="bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full border border-stone-600 transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Application</span>
              </a>
            </div>
          </div>

        </div>

        {/* 7. Company Features / Core Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">
              Our Organizational Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Features of God Gift Arts
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
              Proven credentials that make us India's preferred festive manufacturing partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 hover:bg-amber-50/50 transition-colors"
              >
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans pl-6">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Interactive FAQ Section */}
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
              Everything you need to know about our products, manufacturing standards, and distributorship
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

        {/* 9. Stats & Heritage Strip */}
        <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
          <div className="space-y-1">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">2006</div>
            <div className="text-xs text-stone-300 font-medium">Established Year (18+ Yrs)</div>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">40%</div>
            <div className="text-xs text-stone-300 font-medium">Distributor Profit Margin</div>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">28+</div>
            <div className="text-xs text-stone-300 font-medium">States & UTs Covered</div>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-400">Global</div>
            <div className="text-xs text-stone-300 font-medium">Worldwide Shipping Available</div>
          </div>
        </div>

        {/* 10. Contact Desk & Final Call to Action */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-400/10" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Bring Divine Warmth & Festive Radiance to Every Home
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 font-serif italic max-w-2xl mx-auto">
              Explore our complete collection of Diwali diyas, tea light candles, and decorative lighting — or partner with God Gift Arts as an authorized regional distributor.
            </p>

            {/* Direct Contact Pill */}
            <div className="bg-black/30 backdrop-blur-xs border border-white/10 rounded-2xl p-4 sm:p-6 max-w-xl mx-auto text-left space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider">
                <Store className="w-4 h-4" />
                <span>God Gift Arts • Operational Headquarters</span>
              </div>
              <p className="text-stone-300">
                <strong>Address:</strong> F-111, Bhagwan Nagar, Ashram, New Delhi - 110014, India
              </p>
              <p className="text-stone-300">
                <strong>CEO:</strong> Mrs. Poonam | <strong>Phone:</strong> +91 9211672167
              </p>
              <p className="text-stone-300">
                <strong>Email:</strong> Poonamgautam924@gmail.com | <strong>Portfolio:</strong> linktr.ee/godgiftarts
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
                <span>Distributorship Perks</span>
              </a>

              <a
                href="https://wa.me/919211672167"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>WhatsApp CEO</span>
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
