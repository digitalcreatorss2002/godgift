import React, { useState } from 'react';
import { 
  Gift, 
  Building2, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Award, 
  FileText, 
  Phone,
  Mail,
  User,
  Package,
  DollarSign
} from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider, DiyaIllustration } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';

export default function CorporateGiftingPage({ onNavigate, onAddToCart, onSelectProduct }) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: '50-100',
    budget: '1000-2500',
    customLogo: true,
    targetDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const corporateHampers = [
    {
      id: 51,
      name: "Royal Festive Devotional Gift Hamper Box",
      price: 2499,
      image: "/col5.jpeg",
      badge: "Bestseller Hamper",
      description: "Luxury velvet gift box with solid brass diya, pure mysore sandalwood agarbatti, dry fruit containers, and custom greeting card."
    },
    {
      id: 52,
      name: "Mahotsav Corporate Devotional Hampers Set",
      price: 1899,
      image: "/offer3.png",
      badge: "Custom Logo Printing",
      description: "Personalized corporate gifting hamper with custom company logo greeting card, handcrafted peacock diya, and dry fruit box."
    },
    {
      id: 53,
      name: "Deepawali Celebration Luxury Brass & Incense Hamper",
      price: 3499,
      image: "/col5.jpeg",
      badge: "Grand Executive Set",
      description: "Grand festive box containing a 7-inch brass Ganesha idol, twin peacock diyas, organic dhoop cones, and brass bell."
    },
    {
      id: 54,
      name: "Pure Copper Kalash & Aarti Devotional Gift Box",
      price: 1499,
      image: "/offer2.png",
      badge: "Wellness Special",
      description: "Engraved copper kalash vessel, brass diya, and pure sandalwood mala packed in a rigid golden gift box."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (loading) {
    return <PageLoader text="Loading bespoke corporate gifting showcase..." />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Museum Style Corporate Gifting Hero Banner Header matching Bestsellers Page */}
      <div className="relative bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />

        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <DiyaIllustration className="w-80 h-80 text-amber-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Gift className="w-4 h-4 text-amber-800" />
            <span>Bespoke B2B Wholesale & Bulk Orders</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
            B2B Bulk Enquiry & Custom Orders <br />
            <span className="italic font-normal text-amber-900">With Sacred Artisanal Craftsmanship</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Custom branded velvet hampers, hand-cast solid brass murtis, pure copper thali sets, and Jaipur master artisan heirlooms tailored for festive Diwali, employee appreciation, & VIP client relationships.
          </p>

          {/* Quick Specs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3 text-xs font-bold text-stone-800">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-stone-300/80 shadow-2xs">
              <Building2 className="w-4 h-4 text-amber-800" />
              <span>Company Logo Laser Printing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-stone-300/80 shadow-2xs">
              <FileText className="w-4 h-4 text-amber-800" />
              <span>100% GST Compliant Invoice</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-stone-300/80 shadow-2xs">
              <Truck className="w-4 h-4 text-amber-800" />
              <span>Multi-Address Pan-India Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Form & Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Why Corporate Choose God Gift Arts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">Custom Logo Branding</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Personalized company logo laser engraving on brass & copper items, foil embossing on velvet gift boxes, and custom greeting cards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">GST Invoice & Bulk Rates</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              100% Tax Compliant B2B invoicing with GST input credit support for corporate tax deductions and wholesale tier pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">Pan-India Direct Shipping</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Multi-address direct delivery to employee home addresses across 19,000+ Indian pincodes with real-time tracking portal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">Handcrafted Heirloom Guarantee</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every item is handmade by Jaipur master artisans using virgin brass, copper, Makrana marble, or oil on canvas.
            </p>
          </div>
        </div>

        {/* Corporate Hampers Showcase */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Popular Festive Corporate Hampers</h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto">
              Curated luxury hampers loved by Fortune 500 corporations for Diwali, New Year, and annual employee milestone celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateHampers.map((hamper) => (
              <div 
                key={hamper.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all cursor-pointer"
                onClick={() => onSelectProduct && onSelectProduct(hamper)}
              >
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img 
                    src={hamper.image} 
                    alt={hamper.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-stone-950 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {hamper.badge}
                  </span>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-stone-900 text-sm leading-snug line-clamp-2">{hamper.name}</h3>
                    <p className="text-xs text-stone-500 line-clamp-2">{hamper.description}</p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                    <div>
                      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Bulk Pricing From</span>
                      <span className="font-mono font-bold text-amber-900 text-sm">â‚¹{hamper.price.toLocaleString()}</span>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart && onAddToCart(hamper);
                      }}
                      className="px-4 py-2 bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Quote Request Form Section */}
        <div id="quote-form" className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-2 bg-stone-950 text-white p-8 sm:p-12 space-y-8 flex flex-col justify-between relative overflow-hidden">
            <LotusJaaliPatternBackground className="text-amber-400/10" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Quick Corporate Quotation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                Request Custom Quotation & Sample Kit
              </h2>

              <p className="text-xs text-stone-300 leading-relaxed font-serif italic">
                Our bespoke corporate gifting team responds within 2 business hours with a formal GST quote, sample mockups, and bulk discount structures.
              </p>

              <div className="space-y-4 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">B2B Corporate Desk</span>
                    <span className="font-bold text-white text-sm">+91 98290 12345</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Corporate Email</span>
                    <span className="font-bold text-white text-sm">corporate@godgiftarts.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-stone-800 text-[11px] text-stone-400">
              âš¡ Over 150+ Corporate Orders Delivered Last Diwali Season
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-3 p-8 sm:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">Quotation Request Received!</h3>
                <p className="text-xs text-stone-600 max-w-md">
                  Thank you <strong>{formData.fullName}</strong>. Our corporate relationship manager from God Gift Arts will contact you at <strong>{formData.phone}</strong> shortly with your custom sample mockup & GST quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-medium">
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Corporate Inquiry Form</h3>
                  <p className="text-stone-500 text-xs">Fill out the details below to receive bulk wholesale pricing</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Shashwat Mishra"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Company / Organization Name *</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Technologies Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Work Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="shashwat@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Mobile / WhatsApp Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Required Quantity *</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900 cursor-pointer"
                    >
                      <option value="25-50">25 to 50 Units</option>
                      <option value="50-100">50 to 100 Units</option>
                      <option value="100-250">100 to 250 Units</option>
                      <option value="250-500">250 to 500 Units</option>
                      <option value="500+">500+ Units (Bulk Enterprise)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Target Budget per Hamper (â‚¹)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900 cursor-pointer"
                    >
                      <option value="500-1000">â‚¹500 - â‚¹1,000</option>
                      <option value="1000-2500">â‚¹1,000 - â‚¹2,500</option>
                      <option value="2500-5000">â‚¹2,500 - â‚¹5,000</option>
                      <option value="5000+">â‚¹5,000+ (Executive Luxury)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Custom Requirements / Message</label>
                  <textarea
                    rows="3"
                    placeholder="Mention custom logo printing, preferred delivery dates, or specific hampers..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-medium text-stone-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quotation Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
