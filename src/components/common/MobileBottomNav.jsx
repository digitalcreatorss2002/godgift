import React from 'react';
import {
  Home,
  LayoutGrid,
  User,
  Heart,
  ShoppingBag
} from 'lucide-react';

export default function MobileBottomNav({
  currentPage = 'home',
  cartCount = 0,
  wishlistCount = 0,
  onNavigate,
  currentUser = null,
  onOpenAuth
}) {
  const handleTabClick = (pageId) => {
    if (pageId === 'account') {
      if (currentUser) {
        onNavigate && onNavigate('profile');
      } else {
        onOpenAuth && onOpenAuth();
      }
      return;
    }

    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = `#${pageId}`;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: LayoutGrid },
    { id: 'account', label: currentUser ? (currentUser.name ? currentUser.name.split(' ')[0] : 'Account') : 'Login', icon: User },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, count: wishlistCount },
    { id: 'cart', label: 'Cart', icon: ShoppingBag, count: cartCount }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] py-1.5 px-2 flex items-center justify-around text-center font-sans pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id || (item.id === 'account' && (currentPage === 'profile' || currentPage === 'orders'));

        return (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`relative flex flex-col items-center justify-center w-full py-1 px-1 transition-all cursor-pointer ${
              isActive ? 'text-amber-900 font-extrabold' : 'text-stone-500 hover:text-stone-900 font-medium'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110 text-amber-900' : ''}`} />
              
              {/* Badge for Cart & Wishlist */}
              {item.count > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-amber-900 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-2xs animate-scaleIn">
                  {item.count}
                </span>
              )}
            </div>

            <span className="text-[10px] tracking-tight mt-0.5 truncate max-w-[64px]">
              {item.label}
            </span>

            {/* Active Pill Dot */}
            {isActive && (
              <span className="w-1 h-1 bg-amber-900 rounded-full mt-0.5" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
