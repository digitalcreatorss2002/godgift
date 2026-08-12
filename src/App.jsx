import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/common/AnnouncementBar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CollectionsPage from './pages/CollectionsPage';
import CategoriesPage from './pages/CategoriesPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import BestsellersPage from './pages/BestsellersPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CorporateGiftingPage from './pages/CorporateGiftingPage';
import AuthModal from './components/common/AuthModal';
import { MOCK_PRODUCTS } from './data/mockProducts';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCollectionId, setSelectedCollectionId] = useState('paintings');
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('gga_user');
    if (saved) {
      try {
        setCurrentUser(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState([
    { product: MOCK_PRODUCTS[0], quantity: 1 },
    { product: MOCK_PRODUCTS[16], quantity: 1 }
  ]);
  const [wishlistItems, setWishlistItems] = useState([
    MOCK_PRODUCTS[2],
    MOCK_PRODUCTS[32]
  ]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  // Unified Hash & Route Synchronizer
  useEffect(() => {
    const syncRouteFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#cart') setCurrentPage('cart');
      else if (hash === '#wishlist') setCurrentPage('wishlist');
      else if (hash === '#bestsellers') setCurrentPage('bestsellers');
      else if (hash === '#categories') setCurrentPage('categories');
      else if (hash === '#collections') setCurrentPage('collections');
      else if (hash === '#shop') setCurrentPage('shop');
      else if (hash === '#corporate-gifting') setCurrentPage('corporate-gifting');
      else if (hash.startsWith('#collection-')) {
        setSelectedCollectionId(hash.replace('#collection-', ''));
        setCurrentPage('collection-detail');
      } else if (hash.startsWith('#product-')) {
        setSelectedProductId(Number(hash.replace('#product-', '')));
        setCurrentPage('product-detail');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', syncRouteFromHash);
    syncRouteFromHash();
    return () => window.removeEventListener('hashchange', syncRouteFromHash);
  }, []);

  // Central Navigation Handler
  const handleNavigate = (target) => {
    if (!target) return;
    if (target.startsWith('collection-')) {
      const colId = target.replace('collection-', '');
      setSelectedCollectionId(colId);
      window.location.hash = `#collection-${colId}`;
    } else if (target.startsWith('product-')) {
      const prodId = Number(target.replace('product-', ''));
      setSelectedProductId(prodId);
      window.location.hash = `#product-${prodId}`;
    } else if (target === 'offers') {
      window.location.hash = `#${target}`;
      setCurrentPage('home');
      setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    } else {
      window.location.hash = `#${target}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart & Product Action Handlers
  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      return existing
        ? prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
        : [...prev, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    setCartItems(prev => prev.map(item => item.product.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleSelectProduct = (prod) => {
    const id = typeof prod === 'object' ? prod.id : prod;
    handleNavigate(`product-${id}`);
  };

  const handleSelectCollection = (colId) => {
    handleNavigate(`collection-${colId}`);
  };

  // Dynamic View Renderer
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'cart':
        return <CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateCartQuantity} onRemoveItem={handleRemoveFromCart} onClearCart={() => setCartItems([])} onNavigate={handleNavigate} />;
      case 'wishlist':
        return <WishlistPage wishlistItems={wishlistItems} onAddToCart={handleAddToCart} onSelectProduct={handleSelectProduct} onNavigate={handleNavigate} />;
      case 'product-detail':
        return <ProductDetailPage productId={selectedProductId} onBack={() => handleNavigate('shop')} onAddToCart={handleAddToCart} onSelectProduct={handleSelectProduct} />;
      case 'bestsellers':
        return <BestsellersPage onAddToCart={handleAddToCart} onQuickView={handleSelectProduct} />;
      case 'corporate-gifting':
        return <CorporateGiftingPage onNavigate={handleNavigate} onAddToCart={handleAddToCart} onSelectProduct={handleSelectProduct} />;
      case 'categories':
        return <CategoriesPage onSelectCategory={(catId) => handleSelectCollection(catId)} />;
      case 'collection-detail':
        return <CollectionDetailPage collectionId={selectedCollectionId} onBackToCollections={() => handleNavigate('collections')} onAddToCart={handleAddToCart} onSelectProduct={handleSelectProduct} />;
      case 'collections':
        return <CollectionsPage onSelectCollection={handleSelectCollection} onAddToCart={handleAddToCart} />;
      case 'shop':
        return <ShopPage onAddToCart={handleAddToCart} onQuickView={handleSelectProduct} />;
      default:
        return <HomePage onAddToCart={handleAddToCart} onSelectCollection={handleSelectCollection} onQuickView={handleSelectProduct} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-body font-sans selection:bg-primary selection:text-white">
      <AnnouncementBar />
      <Header 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        currentPage={currentPage}
        activeTab={currentPage}
        onNavigate={handleNavigate}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => {
          localStorage.removeItem('gga_user');
          setCurrentUser(null);
        }}
      />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />
    </div>
  );
}