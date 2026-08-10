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
import { LotusJaaliPatternBackground, DecorativeWavyDivider } from '../components/common/BackgroundIllustrations';
import { MOCK_PRODUCTS } from '../data/mockProducts';

export default function CorporateGiftingPage({ onNavigate, onAddToCart, onSelectProduct }) {
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

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Hero Banner Header */}
      <div className="relative bg-stone-950 text-white py-16 sm:py-24 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" />
        <LotusJaaliPatternBackground className="text-amber-400/10 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-400/30">
            <Gift className="w-4 h-4 text-amber-400" />
            <span>Bespoke Corporate & Festive Gifting</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Elevate Corporate Gifting with <br />
            <span className="italic text-amber-300 font-normal">Sacred Artisanal Craftsmanship</span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto font-serif leading-relaxed italic">
            Custom branded velvet hampers, hand-cast solid brass murtis, pure copper thali sets, and Jaipur master artisan heirlooms tailored for festive Diwali, employee appreciation, & VIP client relationships.
          </p>

          {/* Quick Specs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-bold text-stone-300">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Company Logo Laser Printing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>100% GST Compliant Invoice</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <Truck className="w-4 h-4 text-amber-400" />
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
              Volume discounts ranging from 15% to 35% off retail prices with complete B2B GST tax credit invoice support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">Pan-India Doorstep Delivery</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Single bulk shipment to your office HQ or individual courier dispatch directly to employee home addresses across 20,000+ pincodes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">Zero Damage Guarantee</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Multi-layer protective foam, heavy duty rigid gift boxes, and transit insurance against breakage or loss.
            </p>
          </div>
        </div>

        {/* Corporate Gift Hampers Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#EADBCA] pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Popular Corporate Gift Box Collections
              </h2>
              <p className="text-xs text-stone-500 font-serif italic mt-0.5">
                Selected by leading tech companies, banks, and corporate enterprises across India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateHampers.map((hamper) => (
              <div
                key={hamper.id}
                onClick={() => onSelectProduct && onSelectProduct(hamper.id)}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-stone-950/85 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-300/30">
                      {hamper.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1">
                      {hamper.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {hamper.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block font-semibold uppercase">Bulk Starting From</span>
                      <span className="text-lg font-bold text-stone-900 font-mono">₹{hamper.price.toLocaleString('en-IN')}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart && onAddToCart(hamper);
                      }}
                      className="px-3.5 py-2 bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Sample Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bulk Quotation Request Form */}
        <div className="bg-white rounded-3xl border border-[#EADBCA] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-900/5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Instant Estimate & Bulk Catalog</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Request Custom Bulk Quote
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Fill in your corporate gifting requirements below. Our Jaipur corporate account manager will contact you within 2 business hours with digital samples, custom box mockups, & bulk pricing.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-100 text-xs text-stone-700">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Corporate Helpline</span>
                    <span className="font-bold text-stone-900">+91 98765 43210 / +91 141 234567</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Official Gifting Email</span>
                    <span className="font-bold text-stone-900">corporate@godgiftarts.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right Inputs */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-emerald-950">Corporate Quote Request Received!</h3>
                    <p className="text-xs text-emerald-800">
                      Thank you, {formData.fullName}! Our corporate gifting representative will email your customized bulk quotation & digital mockup to <strong>{formData.email}</strong> within 2 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Mehta"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-medium rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Reliance Tech Solutions"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-medium rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-medium rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-medium rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Required Box Quantity *</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                      >
                        <option value="10-50">10 to 50 Boxes</option>
                        <option value="50-100">50 to 100 Boxes</option>
                        <option value="100-250">100 to 250 Boxes</option>
                        <option value="250-500">250 to 500 Boxes</option>
                        <option value="500+">500+ Large Corporate Order</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Target Budget Per Box *</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                      >
                        <option value="500-1000">₹500 to ₹1,000 / box</option>
                        <option value="1000-2500">₹1,000 to ₹2,500 / box</option>
                        <option value="2500-5000">₹2,500 to ₹5,000 / box</option>
                        <option value="5000+">₹5,000+ Luxury Executive Set</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Customization & Delivery Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Specify custom logo printing details, required Diwali delivery date, or special packaging preferences..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-stone-50 text-stone-900 text-xs font-medium rounded-xl px-4 py-3 border border-stone-200 focus:outline-none focus:border-amber-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-900 hover:bg-stone-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Bulk Quotation Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
