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
  Sparkles,
  Award,
  Flame,
  Gift,
  ArrowRight
} from 'lucide-react';

export default function Header({ cartCount = 2, wishlistCount = 3, activeTab = 'home', onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null); // 'shop' | 'collections' | null

  // Navigation Links
  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Categories", href: "#categories" },
    { label: "Collections", href: "#collections" },
    { label: "Bestsellers", href: "#bestsellers" },
    { label: "Corporate Gifting", href: "#corporate-gifting" }
  ];

  // 8 Category Items for Categories Dropdown (State fetched from API)
  const [collectionsList, setCollectionsList] = useState([
    { name: "Spiritual Oil Paintings", image: "/ganesha-oil.jpg", target: "collection-paintings" },
    { name: "Brass Idols & Murtis", image: "/col1.webp", target: "collection-idols" },
    { name: "Copper & Pooja Sets", image: "/col4.jpg", target: "collection-pooja" },
    { name: "Marble Murtis & Carvings", image: "/col2.jpg", target: "collection-idols" },
    { name: "Guru Ji Devotional Line", image: "/col6.webp", target: "collection-guruji" },
    { name: "Brass Dhoop Lamps & Urli", image: "/col3.jpg", target: "collection-pooja" },
    { name: "Devotional Malas & Rosaries", image: "/col8.webp", target: "collection-malas" },
    { name: "Festive & Gift Hampers", image: "/col5.jpeg", target: "collection-gifting" }
  ]);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        const mapped = res.map(cat => ({
          name: cat.name,
          image: cat.image,
          target: `collection-${cat.slug}`
        }));
        setCollectionsList(mapped);
      }
    });
  }, []);

  // Shop Categories Mega Menu Data
  const shopCategories = [
    {
      title: "Spiritual Oil Paintings",
      icon: Sparkles,
      items: ["Om Ganesha Abstract Canvas Art", "Vrindavan Krishna Folk Art", "Lotus Serenity Wall Painting", "Divine Maha Lakshmi Oil Painting"]
    },
    {
      title: "Brass Idols & Murtis",
      icon: Award,
      items: ["Hanuman Ji Strength Statue", "Khatu Shyam Ji Home Mandir Murti", "Ram Darbar Divine Family Set", "Durga Maa & Balaji Statues"]
    },
    {
      title: "Copper & Puja Sets",
      icon: Flame,
      items: ["100% Pure Copper Thali Sets", "Brass Ghanti & Aarti Diyas", "Copper Kalash & Water Bottles", "Brass Dhoop Lamps & Incense Stands"]
    },
    {
      title: "Guru Ji Devotional Line",
      icon: Gift,
      items: ["Guru Ji Swaroop Picture Frames", "Devotional Sandalwood Neck Malas", "Satsang Essentials & Rumals", "Car Rear Mirror Decor & Hampers"]
    }
  ];

  const handleLinkClick = (target) => {
    setHoveredNav(null);
    setIsMobileMenuOpen(false);
    if (onNavigate) onNavigate(target);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
                className="flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="God Gift Arts"
                  className="h-14 w-auto object-contain"
                />
              </a>
            </div>

            {/* Navbar Links */}
            <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-stone-700 h-full">
              {navLinks.map((link, idx) => {
                const label = link.label.toLowerCase();
                const isShop = label === 'shop';
                const isCategories = label === 'categories';
                const hasDropdown = isShop || isCategories;
                const isHovered = hoveredNav === label;
                const isActive = activeTab === label;

                return (
                  <div
                    key={idx}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => hasDropdown && setHoveredNav(label)}
                    onMouseLeave={() => hasDropdown && setHoveredNav(null)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = label === 'categories' ? 'categories' : (label === 'collections' ? 'collections' : (label === 'bestsellers' ? 'bestsellers' : (label === 'shop' ? 'shop' : (label === 'festive offers' ? 'offers' : (label === 'corporate gifting' ? 'corporate-gifting' : 'home')))));
                        handleLinkClick(target);
                      }}
                      className={`relative py-1.5 flex items-center gap-1 transition-colors ${
                        isHovered || isActive ? 'text-primary font-bold' : 'hover:text-primary'
                      }`}
                    >
                      <span>{link.label}</span>
                      {hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${isHovered ? 'rotate-180 text-primary' : 'text-stone-400'}`} />
                      )}
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </a>

                    {/* Shop Mega Menu */}
                    {isShop && isHovered && (
                      <div className="fixed top-full left-0 right-0 w-full bg-white/98 backdrop-blur-md border-t border-b border-stone-200/90 shadow-2xl py-8 px-8 z-50">
                        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-left">
                          {shopCategories.map((col, cIdx) => {
                            const IconComponent = col.icon;
                            return (
                              <div key={cIdx} className="space-y-3">
                                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-2 flex items-center gap-2">
                                  <IconComponent className="w-4 h-4 text-secondary" />
                                  <span>{col.title}</span>
                                </h4>
                                <ul className="space-y-2 text-xs text-stone-600">
                                  {col.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <a
                                        href="#shop"
                                        onClick={(e) => { e.preventDefault(); handleLinkClick('shop'); }}
                                        className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5 py-0.5"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                                        <span>{item}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                          <span className="text-stone-500 font-normal">All products handcrafted by Jaipur master artisans</span>
                          <a
                            href="#shop"
                            onClick={(e) => { e.preventDefault(); handleLinkClick('shop'); }}
                            className="font-bold text-primary hover:text-primary-hover flex items-center gap-1"
                          >
                            <span>Browse Full Catalog</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Categories 8 Circle Dropdown */}
                    {isCategories && isHovered && (
                      <div className="fixed top-full left-0 right-0 w-full bg-white/98 backdrop-blur-md border-t border-b border-stone-200/90 shadow-2xl py-6 px-4 z-50">
                        <div className="max-w-7xl mx-auto">
                          <div className="text-center mb-4 text-xs font-bold uppercase tracking-widest text-secondary">
                            Explore Categories
                          </div>
                          <div className="grid grid-cols-8 gap-4 justify-items-center">
                            {collectionsList.map((cat, cIdx) => (
                              <div
                                key={cIdx}
                                onClick={() => handleLinkClick(cat.target)}
                                className="flex flex-col items-center group/circle cursor-pointer text-center"
                              >
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-stone-100 border-2 border-stone-200 group-hover/circle:border-primary transition-all">
                                  <img src={getImageSrc(cat.image)} alt={cat.name} className="w-full h-full object-cover group-hover/circle:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-xs font-bold text-stone-800 mt-2 group-hover/circle:text-primary transition-colors line-clamp-1">
                                  {cat.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-stone-700 hover:text-primary rounded-full hover:bg-stone-100"
                title="Search Products"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href="#wishlist"
                onClick={(e) => { e.preventDefault(); handleLinkClick('wishlist'); }}
                className="hidden sm:flex p-2.5 text-stone-700 hover:text-primary rounded-full hover:bg-stone-100 relative"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] font-extrabold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center border border-white">
                    {wishlistCount}
                  </span>
                )}
              </a>

              <a
                href="#account"
                className="hidden sm:flex p-2.5 text-stone-700 hover:text-primary rounded-full hover:bg-stone-100"
                title="User Account"
              >
                <User className="w-5 h-5" />
              </a>

              <a
                href="#cart"
                onClick={(e) => { e.preventDefault(); handleLinkClick('cart'); }}
                className="p-2.5 text-stone-700 hover:text-primary rounded-full hover:bg-stone-100 relative"
                title="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-extrabold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center border border-white">
                    {cartCount}
                  </span>
                )}
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-stone-800"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-6 shadow-xl space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => {
                const label = link.label.toLowerCase();
                const target = label === 'categories' ? 'categories' : (label === 'collections' ? 'collections' : (label === 'bestsellers' ? 'bestsellers' : (label === 'shop' ? 'shop' : (label === 'festive offers' ? 'offers' : (label === 'corporate gifting' ? 'corporate-gifting' : 'home')))));
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(target);
                    }}
                    className="text-base font-medium text-stone-800 py-1.5 border-b border-stone-100"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectProduct={(prod) => {
          setIsSearchOpen(false);
          const pId = typeof prod === 'object' ? prod.id : prod;
          if (onNavigate) onNavigate(`product-${pId}`);
        }}
        onAddToCart={() => {}}
      />
    </>
  );
}
