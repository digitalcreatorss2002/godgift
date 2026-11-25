import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Headphones,
  ShieldCheck,
  FileQuestion,
  ArrowRight
} from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider } from '../components/common/BackgroundIllustrations';

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg pb-16 font-sans">
      
      {/* Hero Header */}
      <div className="relative bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <DecorativeWavyDivider className="w-40 h-4 text-amber-800/40" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Headphones className="w-3.5 h-3.5 text-amber-800" />
            <span>Customer Care & Helplines</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Contact Support
          </h1>

          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Have questions about an existing order, wholesale inquiries, or custom artisanal creations? We are here to help you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Helplines & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Direct Assistance
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900">
                  How Can We Help You?
                </h2>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Our team responds to all inquiries within 1 working day.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Customer Support Helplines</span>
                    <a href="tel:+919211672167" className="font-bold text-stone-900 hover:text-amber-800 transition-colors block">
                      +91 92116 72167
                    </a>
                    <a href="tel:+918287421378" className="font-bold text-stone-900 hover:text-amber-800 transition-colors block">
                      +91 82874 21378
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider block">Direct WhatsApp Desk</span>
                    <span className="font-bold text-emerald-950 block">+91 92116 72167</span>
                    <a
                      href="https://wa.me/919211672167?text=Hello%20God%20Gift%20Arts%20Support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 mt-1"
                    >
                      <span>Start WhatsApp Chat</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Email Support</span>
                    <a href="mailto:godgiftarts1@gmail.com" className="font-semibold text-stone-800 hover:text-amber-800 transition-colors block">
                      godgiftarts1@gmail.com
                    </a>
                    <a href="mailto:poonamgautam924@gmail.com" className="font-semibold text-stone-800 hover:text-amber-800 transition-colors block">
                      poonamgautam924@gmail.com
                    </a>
                  </div>
                </div>

                {/* Operating Address */}
                <div className="flex items-start gap-3.5 p-3.5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Operational Base & Office</span>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      F-111, Bhagwan Nagar, Ashram, New Delhi - 110014, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Working Hours</span>
                    <p className="text-stone-700 font-medium">
                      Monday to Saturday: 9:30 AM – 7:30 PM IST
                    </p>
                    <span className="text-[10px] text-stone-400 block">Sunday: Closed (WhatsApp queries answered next morning)</span>
                  </div>
                </div>
              </div>

              {/* Quick links to policies */}
              <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => onNavigate && onNavigate('returns')}
                  className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold transition-colors cursor-pointer"
                >
                  Returns & Refunds
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('terms')}
                  className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('profile')}
                  className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold transition-colors cursor-pointer"
                >
                  Track Order
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Support Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Send a Message
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Leave Us an Enquiry
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Fill in your details below and our customer relationship representative will reach out to you within 1 working day.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting God Gift Arts. Our support desk will review your inquiry and connect with you within 1 working day.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', topic: 'general', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 uppercase tracking-wider text-[10px]">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:border-amber-800 outline-none text-stone-900 font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 uppercase tracking-wider text-[10px]">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:border-amber-800 outline-none text-stone-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 uppercase tracking-wider text-[10px]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:border-amber-800 outline-none text-stone-900 font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 uppercase tracking-wider text-[10px]">Nature of Query *</label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:border-amber-800 outline-none text-stone-900 font-semibold cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Status & Delivery Tracking</option>
                        <option value="returns">Return, Exchange or Replacement</option>
                        <option value="wholesale">Distributorship / Bulk Retail Wholesale</option>
                        <option value="packaging">Crinkle Shredded Paper & Hamper Packaging</option>
                        <option value="corporate">Corporate Gifting & Custom Logo Printing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 uppercase tracking-wider text-[10px]">Your Message / Inquiry *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please describe your question or requirement in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 focus:border-amber-800 outline-none text-stone-900 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
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

