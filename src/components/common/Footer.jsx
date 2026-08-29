import React, { useState } from 'react';
import { Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const handleNav = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target);
    } else {
      window.location.hash = `#${target}`;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-stone-800">

          {/* Column 1: Brand & Legacy */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => handleNav(e, 'home')} className="inline-block">
              <img
                src="/logo.png"
                alt="God Gift Arts"
                className="h-14 w-auto object-contain brightness-110"
              />
            </a>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Handcrafted devotional arts, brass idols, and luxury pooja decor. Preserving Indian heritage and spiritual legacy since 2006.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-stone-300 pt-1 font-medium">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Quick Collections
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#collection-paintings" onClick={(e) => handleNav(e, 'collection-paintings')} className="hover:text-amber-400 transition-colors">Spiritual Oil Paintings</a></li>
              <li><a href="#collection-idols" onClick={(e) => handleNav(e, 'collection-idols')} className="hover:text-amber-400 transition-colors">Brass Idols & Murtis</a></li>
              <li><a href="#collection-pooja" onClick={(e) => handleNav(e, 'collection-pooja')} className="hover:text-amber-400 transition-colors">100% Pure Copper Puja Sets</a></li>
              <li><a href="#collection-guruji" onClick={(e) => handleNav(e, 'collection-guruji')} className="hover:text-amber-400 transition-colors">Guru Ji Devotional Line</a></li>
              <li><a href="#corporate-gifting" onClick={(e) => handleNav(e, 'corporate-gifting')} className="hover:text-amber-400 transition-colors">Festive Corporate Hampers</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Customer Support
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#about" onClick={(e) => handleNav(e, 'about')} className="hover:text-amber-400 transition-colors">About Our Legacy</a></li>
              <li><a href="#profile" onClick={(e) => handleNav(e, 'profile')} className="hover:text-amber-400 transition-colors">Track Order</a></li>
              <li><a href="#b2b-enquiry" onClick={(e) => handleNav(e, 'b2b-enquiry')} className="hover:text-amber-400 transition-colors">Pan-India Express Shipping</a></li>
              <li><a href="#b2b-enquiry" onClick={(e) => handleNav(e, 'b2b-enquiry')} className="hover:text-amber-400 transition-colors">Easy Returns & Refunds</a></li>
              <li><a href="#b2b-enquiry" onClick={(e) => handleNav(e, 'b2b-enquiry')} className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#b2b-enquiry" onClick={(e) => handleNav(e, 'b2b-enquiry')} className="hover:text-amber-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Devotional Newsletter
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe to receive exclusive festive discounts, new artisan collection alerts & sacred ritual guides.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-800 text-white text-xs rounded-xl px-4 py-3 border border-stone-700 outline-none focus:border-amber-400 transition-colors pr-10"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                  title="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} God Gift Arts. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-stone-300">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}