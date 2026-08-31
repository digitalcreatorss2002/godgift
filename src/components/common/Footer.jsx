import React from 'react';
import { Download, FileText, MapPin, Phone } from 'lucide-react';

export default function Footer({ onNavigate }) {
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
              <li><a href="#corporate-gifting" onClick={(e) => handleNav(e, 'corporate-gifting')} className="hover:text-amber-400 transition-colors">Pan-India Express Shipping</a></li>
              <li><a href="#corporate-gifting" onClick={(e) => handleNav(e, 'corporate-gifting')} className="hover:text-amber-400 transition-colors">Easy Returns & Refunds</a></li>
              <li><a href="#corporate-gifting" onClick={(e) => handleNav(e, 'corporate-gifting')} className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#corporate-gifting" onClick={(e) => handleNav(e, 'corporate-gifting')} className="hover:text-amber-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Download Catalogues */}
          <div className="space-y-4">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Catalogues</span>
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Download our official high-resolution product collection catalogues in PDF format:
            </p>
            
            <div className="space-y-2.5">
              <a
                href="/catalogues/brass-idols-catalogue.pdf"
                download="GodGiftArts_Brass_Idols_Catalogue.pdf"
                className="flex items-center justify-between p-2.5 bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-400/50 rounded-xl transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 bg-amber-400/10 text-amber-400 rounded-lg group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-bold text-stone-200 group-hover:text-amber-400 transition-colors block truncate">
                      Brass Idols & Murtis
                    </span>
                    <span className="text-[10px] text-stone-400 block font-mono">PDF • 4.2 MB</span>
                  </div>
                </div>
                <Download className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
              </a>

              <a
                href="/catalogues/oil-paintings-catalogue.pdf"
                download="GodGiftArts_Oil_Paintings_Catalogue.pdf"
                className="flex items-center justify-between p-2.5 bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-400/50 rounded-xl transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 bg-amber-400/10 text-amber-400 rounded-lg group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-bold text-stone-200 group-hover:text-amber-400 transition-colors block truncate">
                      Spiritual Oil Paintings
                    </span>
                    <span className="text-[10px] text-stone-400 block font-mono">PDF • 3.8 MB</span>
                  </div>
                </div>
                <Download className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
              </a>

              <a
                href="/catalogues/corporate-gifting-catalogue.pdf"
                download="GodGiftArts_Corporate_Gifting_Catalogue.pdf"
                className="flex items-center justify-between p-2.5 bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-400/50 rounded-xl transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 bg-amber-400/10 text-amber-400 rounded-lg group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-bold text-stone-200 group-hover:text-amber-400 transition-colors block truncate">
                      Corporate Gifting Hampers
                    </span>
                    <span className="text-[10px] text-stone-400 block font-mono">PDF • 5.1 MB</span>
                  </div>
                </div>
                <Download className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
              </a>
            </div>
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