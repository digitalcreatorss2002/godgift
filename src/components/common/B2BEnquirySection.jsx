import React, { useState } from 'react';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Phone,
  Mail,
  User,
  ShieldCheck,
  Award,
  Truck
} from 'lucide-react';
import { LotusJaaliPatternBackground } from './BackgroundIllustrations';

export default function B2BEnquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: '50-100',
    budget: '1000-2500',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="b2b-enquiry" className="py-14 sm:py-20 bg-transparent border-t border-[#EADBCA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main B2B Container */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Dark Info Panel */}
          <div className="lg:col-span-2 bg-stone-950 text-white p-8 sm:p-12 space-y-8 flex flex-col justify-between relative overflow-hidden">
            <LotusJaaliPatternBackground className="text-amber-400/10" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>B2B Bulk Orders & Corporate Desk</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                Request B2B Wholesale Quote & Sample Kit
              </h2>

              <p className="text-xs text-stone-300 leading-relaxed font-serif italic">
                Get custom wholesale tier pricing, company logo laser printing, and 100% GST input credit invoicing. Our B2B relationship manager responds within 2 business hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">B2B Helpline</span>
                    <span className="font-bold text-white text-sm">+91 98290 12345</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">B2B Email Desk</span>
                    <span className="font-bold text-white text-sm">b2b@godgiftarts.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits Badges */}
            <div className="relative z-10 pt-6 border-t border-stone-800 flex flex-wrap gap-2 text-[10px] font-bold text-amber-300">
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/15">✓ 100% GST Invoice</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/15">✓ Custom Logo Printing</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full border border-white/15">✓ Pan-India Delivery</span>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-3 p-8 sm:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">B2B Inquiry Received!</h3>
                <p className="text-xs text-stone-600 max-w-md">
                  Thank you <strong>{formData.fullName}</strong>. Our B2B manager will contact you at <strong>{formData.phone}</strong> shortly with wholesale pricing & GST quotation.
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
                  <h3 className="text-xl font-serif font-bold text-stone-900">B2B Bulk Enquiry Form</h3>
                  <p className="text-stone-500 text-xs">Fill in your requirements below for instant wholesale catalog & quote</p>
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
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Company / Business Name *</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Enterprises"
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
                      <option value="500+">500+ Units (Enterprise Bulk)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Target Budget per Item (₹)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 outline-none focus:border-amber-800 text-xs font-semibold text-stone-900 cursor-pointer"
                    >
                      <option value="500-1000">₹500 - ₹1,000</option>
                      <option value="1000-2500">₹1,000 - ₹2,500</option>
                      <option value="2500-5000">₹2,500 - ₹5,000</option>
                      <option value="5000+">₹5,000+ (Executive Luxury)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-700 block uppercase tracking-wider text-[10px]">Specific Requirements / Message</label>
                  <textarea
                    rows="3"
                    placeholder="Mention custom logo engraving, delivery dates, or specific brass/copper items..."
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
                  <span>Submit B2B Bulk Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}