import React, { useState, useEffect } from 'react';
import { Download, FileText, MapPin, Phone } from 'lucide-react';
import { fetchCatalogues, getImageSrc } from '../../services/api';

const DEFAULT_CATALOGUES = [
  { id: 1, title: "Brass Idols & Murtis", file_url: "/catalogues/brass-idols-catalogue.pdf", file_size: "PDF • 4.2 MB" },
  { id: 2, title: "Spiritual Oil Paintings", file_url: "/catalogues/oil-paintings-catalogue.pdf", file_size: "PDF • 3.8 MB" },
  { id: 3, title: "B2B Bulk Wholesale", file_url: "/catalogues/corporate-gifting-catalogue.pdf", file_size: "PDF • 5.1 MB" }
];

export default function Footer({ onNavigate }) {
  const [catalogues, setCatalogues] = useState(DEFAULT_CATALOGUES);

  useEffect(() => {
    fetchCatalogues().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = res.map(cat => ({
          ...cat,
          file_url: getImageSrc(cat.file_url)
        }));
        setCatalogues(mapped);
      }
    });
  }, []);

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
                <span>New Delhi & Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 92116 72167 / +91 96435 93295</span>
              </div>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Quick Collections
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#shop" onClick={(e) => handleNav(e, 'shop')} className="hover:text-amber-400 transition-colors">Spiritual Oil Paintings</a></li>
              <li><a href="#shop" onClick={(e) => handleNav(e, 'shop')} className="hover:text-amber-400 transition-colors">Brass Idols & Murtis</a></li>
              <li><a href="#shop" onClick={(e) => handleNav(e, 'shop')} className="hover:text-amber-400 transition-colors">100% Pure Copper Puja Sets</a></li>
              <li><a href="#shop" onClick={(e) => handleNav(e, 'shop')} className="hover:text-amber-400 transition-colors">Guru Ji Devotional Line</a></li>
              <li><a href="#b2b-enquiry" onClick={(e) => handleNav(e, 'b2b-enquiry')} className="hover:text-amber-400 transition-colors">B2B Bulk Hampers</a></li>
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
              <li><a href="#returns" onClick={(e) => handleNav(e, 'returns')} className="hover:text-amber-400 transition-colors">Easy Returns & Refunds</a></li>
              <li><a href="#terms" onClick={(e) => handleNav(e, 'terms')} className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#b2b-enquiry" onClick={(e) => handleNav(e, 'b2b-enquiry')} className="hover:text-amber-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Dynamic Download Catalogues */}
          <div className="space-y-4">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Catalogues</span>
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Download our official high-resolution product collection catalogues in PDF format:
            </p>
            
            <div className="space-y-2.5">
              {catalogues.map((cat, idx) => (
                <a
                  key={cat.id || idx}
                  href={cat.file_url}
                  download={`${cat.title.replace(/\s+/g, '_')}_Catalogue.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-400/50 rounded-xl transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-1.5 bg-amber-400/10 text-amber-400 rounded-lg group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-xs font-bold text-stone-200 group-hover:text-amber-400 transition-colors block truncate">
                        {cat.title}
                      </span>
                      <span className="text-[10px] text-stone-400 block font-mono">{cat.file_size || 'PDF'}</span>
                    </div>
                  </div>
                  <Download className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} God Gift Arts. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#terms" onClick={(e) => handleNav(e, 'terms')} className="hover:text-stone-300">Terms & Conditions</a>
            <span>•</span>
            <a href="#returns" onClick={(e) => handleNav(e, 'returns')} className="hover:text-stone-300">Return & Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}