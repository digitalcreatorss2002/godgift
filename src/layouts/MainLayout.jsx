import React from 'react';
import AnnouncementBar from '../components/common/AnnouncementBar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function MainLayout({ children, cartCount = 2, wishlistCount = 4, currentPage = 'home', activeTab = 'home', onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-body font-sans selection:bg-primary selection:text-white">
      {/* Top Sliding Announcement Bar */}
      <AnnouncementBar />

      {/* Main Sticky Header (Logo, Nav, Action Icons) */}
      <Header 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        currentPage={currentPage}
        activeTab={activeTab}
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* E-Commerce Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
