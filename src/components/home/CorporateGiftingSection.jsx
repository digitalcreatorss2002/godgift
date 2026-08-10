import React, { useState } from 'react';
import { Gift, CheckCircle2, Send, PhoneCall, Building2 } from 'lucide-react';
import { JaaliPatternBackground } from '../common/BackgroundIllustrations';

export default function CorporateGiftingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="corporate-gifting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#EADBCA] relative shadow-sm overflow-hidden">
        <JaaliPatternBackground className="text-amber-900/10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          {/* Info */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider">
              <Gift className="w-4 h-4" />
              <span>Festive & Bulk Orders</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Bespoke Corporate Gifting & Custom Hampers
            </h2>

            <p className="text-stone-600 text-sm leading-relaxed">
              Elevate your corporate relationships with handcrafted devotional hampers. Custom brass diyas, dry fruit boxes, pure agarbatti, and personalized company logo branding.
            </p>

            <div className="space-y-2 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom Logo Printing & Personalized Greeting Cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tiered Wholesale Discounts on Bulk Quantities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pan-India Individual Address Shipping</span>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-lg space-y-4">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span>Request Bulk Pricing Quote</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-600 font-semibold mb-1">Company / Organization Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Enterprises Ltd."
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-600 font-semibold mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-semibold mb-1">Est. Quantity</label>
                  <select className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:border-primary">
                    <option>50 - 100 Hampers</option>
                    <option>100 - 500 Hampers</option>
                    <option>500+ Hampers</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Bulk Quote Request</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold text-center border border-emerald-200">
                  Thank you! Our Corporate Gifting Team will call you within 2 hours.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
