import React, { useState, useEffect } from 'react';
import SearchModal from './SearchModal';
import { fetchCategories, getImageSrc } from '../../services/api';
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  LogOut,
  Package
} from 'lucide-react';

export default function Header({
  cartCount = 0,
  wishlistCount = 0,
  currentPage = 'home',
  activeTab = 'home',
  onNavigate,
  currentUser = null,
  onOpenAuth,
  onLogout
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // 8 Primary Categories for Dropdown & Navigation
  const [collectionsList, setCollectionsList] = useState([
    { name: "Spiritual Oil Paintings", subcategories: ["Ganesha Canvases", "Krishna Folk Art", "Divine Lakshmi", "Vastu Wall Paintings"], slug: "paintings", target: "collection-paintings" },
    { name: "Brass Idols & Murtis", subcategories: ["Hanuman Ji Statues", "Khatu Shyam Ji", "Ram Darbar Set", "Durga Maa & Lakshmi"], slug: "idols", target: "collection-idols" },
    { name: "Copper & Pooja Sets", subcategories: ["Pure Copper Thalis", "Engraved Kalash", "Brass Aarti Bells", "Dhoop Stands"], slug: "pooja", target: "collection-pooja" },
    { name: "Marble Murtis & Carvings", subcategories: ["White Makrana Marble", "24K Gold Foil Idols", "Marble Chowki Plates"], slug: "marble-murtis", target: "collection-idols" },
    { name: "Guru Ji Devotional Line", subcategories: ["Gilded Swaroop Portraits", "Sandalwood Malas", "Satsang Accessories"], slug: "guruji", target: "collection-guruji" },
    { name: "Festive & Gift Hampers", subcategories: ["Royal Velvet Boxes", "Custom Logo Hampers", "Diwali Diya Sets"], slug: "gifting", target: "collection-gifting" },
    { name: "Brass Dhoop & Lamps", subcategories: ["Peacock Oil Diyas", "Brass Dhoop Burners", "Urli Bowls"], slug: "dhoop-lamps", target: "collection-pooja" },
    { name: "Devotional Malas", subcategories: ["108 Sandalwood Malas", "Spatik Crystal Rosaries", "Tulsi Bead Malas"], slug: "malas", target: "collection-malas" }
  ]);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = res.map(cat => ({
          name: cat.name,
          subtext: cat.subtitle || 'Handcrafted Devotional Artifacts',
          subcategories: Array.isArray(cat.subcategories) ? cat.subcategories : [],
          slug: cat.slug,
          target: `collection-${cat.slug}`
        }));
        setCollectionsList(mapped);
      }
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      window.location.hash = `#${target}`;
    }
    setIsMobileMenuOpen(false);
    setHoveredNav(null);
    setHoveredCategory(null);
  };

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Categories", href: "#categories" },
    { label: "Collections", href: "#collections" },
    { label: "Bestsellers", href: "#bestsellers" },
    { label: "Corporate Gifting", href: "#corporate-gifting" }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Official Brand Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <img
                  src="/logo.png"
                  alt="God Gift Arts"
                  className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 h-full text-xs font-semibold uppercase tracking-wider text-stone-700">
              {navLinks.map((link, idx) => {
                const label = link.label.toLowerCase();
                const isActive = activeTab === (label === 'categories' ? 'categories' : (label === 'collections' ? 'collections' : (label === 'bestsellers' ? 'bestsellers' : (label === 'shop' ? 'shop' : (label === 'corporate gifting' ? 'corporate-gifting' : 'home')))));
                const isHovered = hoveredNav === label;
                const hasDropdown = label === 'categories';

                return (
                  <div
                    key={idx}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => hasDropdown && setHoveredNav(label)}
                    onMouseLeave={() => {
                      if (hasDropdown) {
                        setHoveredNav(null);
                        setHoveredCategory(null);
                      }
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = label === 'categories' ? 'categories' : (label === 'collections' ? 'collections' : (label === 'bestsellers' ? 'bestsellers' : (label === 'shop' ? 'shop' : (label === 'corporate gifting' ? 'corporate-gifting' : 'home'))));
                        handleLinkClick(target);
                      }}
                      className={`relative py-1.5 flex items-center gap-1 transition-colors ${
                        isHovered || isActive ? 'text-amber-900 font-bold' : 'hover:text-amber-900'
                      }`}
                    >
                      <span>{link.label}</span>
                      {hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180 text-amber-900' : 'text-stone-400'}`} />
                      )}
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-900 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </a>

                    {/* Redesigned Ultra-Clean Category & Sub-Category Flyout Dropdown */}
                    {hasDropdown && isHovered && (
                      <div 
                        className="absolute top-full left-0 pt-2 w-64 bg-transparent z-50 animate-fadeIn font-sans normal-case text-left"
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl border border-stone-200/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] py-2">
                          <div className="py-0.5">
                            {collectionsList.map((cat, cIdx) => {
                              const isCatHovered = hoveredCategory === cat.slug || hoveredCategory === cIdx;
                              const subList = Array.isArray(cat.subcategories) ? cat.subcategories : [];

                              return (
                                <div
                                  key={cIdx}
                                  className="relative group/item"
                                  onMouseEnter={() => setHoveredCategory(cat.slug || cIdx)}
                                >
                                  <button
                                    onClick={() => handleLinkClick(cat.target || `collection-${cat.slug}`)}
                                    className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold tracking-wide transition-all flex items-center justify-between cursor-pointer rounded-xl mx-auto max-w-[94%] ${
                                      isCatHovered 
                                        ? 'bg-amber-900/10 text-amber-950 font-bold' 
                                        : 'text-stone-800 hover:bg-stone-50 hover:text-amber-900'
                                    }`}
                                  >
                                    <span className="line-clamp-1">{cat.name}</span>
                                    {subList.length > 0 && (
                                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                        isCatHovered ? 'translate-x-0.5 text-amber-900' : 'text-stone-400'
                                      }`} />
                                    )}
                                  </button>

                                  {/* Ultra-Clean Side Flyout Sub-Category Panel */}
                                  {isCatHovered && subList.length > 0 && (
                                    <div className="absolute left-full top-0 pl-2 w-60 bg-transparent z-50 animate-fadeIn text-left">
                                      <div className="bg-white/98 backdrop-blur-xl rounded-2xl border border-stone-200/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] p-2.5 space-y-1">
                                        {subList.map((subItem, sIdx) => (
                                          <button
                                            key={sIdx}
                                            onClick={() => handleLinkClick(cat.target || `collection-${cat.slug}`)}
                                            className="w-full text-left px-3 py-2 text-xs font-medium text-stone-700 hover:text-amber-950 hover:bg-stone-100/80 rounded-xl transition-all flex items-center justify-between cursor-pointer group/sub"
                                          >
                                            <span className="line-clamp-1">{subItem}</span>
                                            <ArrowRight className="w-3 h-3 text-stone-400 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all shrink-0 ml-1" />
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </nav>

            {/* Search, Wishlist, User Profile, & Cart Action Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-stone-700 hover:text-amber-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                aria-label="Search Catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => handleLinkClick('wishlist')}
                className="relative p-2 text-stone-700 hover:text-amber-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scaleIn">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* User Account Menu / Login Button */}
              <div className="relative">
                {currentUser ? (
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-bold transition-all cursor-pointer border border-stone-200"
                  >
                    <User className="w-4 h-4 text-amber-800" />
                    <span className="max-w-[80px] truncate">{currentUser.name || 'Account'}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenAuth}
                    className="flex items-center gap-1.5 py-2 px-4 rounded-full bg-amber-900 hover:bg-stone-950 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Login</span>
                  </button>
                )}

                {/* User Dropdown Menu */}
                {isUserDropdownOpen && currentUser && (
                  <div 
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-stone-200 shadow-2xl py-2 z-50 text-xs font-bold space-y-1 animate-fadeIn"
                    onMouseLeave={() => setIsUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-stone-100">
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider font-extrabold block">Signed In As</span>
                      <span className="text-stone-900 truncate block text-sm font-serif font-bold">{currentUser.name}</span>
                    </div>

                    <button
                      onClick={() => { setIsUserDropdownOpen(false); handleLinkClick('profile'); }}
                      className="w-full text-left px-4 py-2 text-stone-700 hover:text-amber-900 hover:bg-stone-50 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-4 h-4 text-amber-800" />
                      <span>My Profile & Address</span>
                    </button>

                    <button
                      onClick={() => { setIsUserDropdownOpen(false); handleLinkClick('orders'); }}
                      className="w-full text-left px-4 py-2 text-stone-700 hover:text-amber-900 hover:bg-stone-50 flex items-center gap-2 cursor-pointer"
                    >
                      <Package className="w-4 h-4 text-amber-800" />
                      <span>My Orders</span>
                    </button>

                    <button
                      onClick={() => { setIsUserDropdownOpen(false); onLogout && onLogout(); }}
                      className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-2 border-t border-stone-100 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Shopping Cart Button */}
              <button
                onClick={() => handleLinkClick('cart')}
                className="relative p-2 text-stone-700 hover:text-amber-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4.5 h-4.5 bg-amber-900 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-scaleIn">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-stone-700 hover:text-amber-900 rounded-full transition-colors cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-stone-950/70 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 space-y-6 overflow-y-auto shadow-2xl border-l border-stone-200">
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <span className="font-serif text-lg font-bold text-stone-900">Navigation Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-900 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-3 text-sm font-bold text-stone-800">
              {navLinks.map((link, idx) => {
                const label = link.label.toLowerCase();
                const target = label === 'categories' ? 'categories' : (label === 'collections' ? 'collections' : (label === 'bestsellers' ? 'bestsellers' : (label === 'shop' ? 'shop' : (label === 'corporate gifting' ? 'corporate-gifting' : 'home'))));
                return (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(target)}
                    className="w-full text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Categories & Dynamic Subcategories List */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 block">
                Explore Categories & Sub-Categories
              </span>
              <div className="space-y-2 text-xs font-semibold text-stone-700">
                {collectionsList.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-1">
                    <button
                      onClick={() => handleLinkClick(cat.target || `collection-${cat.slug}`)}
                      className="w-full text-left font-serif font-bold text-stone-900 hover:text-amber-900 flex items-center justify-between cursor-pointer"
                    >
                      <span>{cat.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                    </button>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <div className="pl-3 text-[11px] text-stone-500 space-y-0.5">
                        {cat.subcategories.map((sub, sIdx) => (
                          <div 
                            key={sIdx}
                            onClick={() => handleLinkClick(cat.target || `collection-${cat.slug}`)}
                            className="hover:text-amber-900 cursor-pointer"
                          >
                            • {sub}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => {
          setIsSearchOpen(false);
          const pId = typeof prod === 'object' ? prod.id : prod;
          handleLinkClick(`product-${pId}`);
        }}
        onAddToCart={() => { }}
      />
    </>
  );
}
