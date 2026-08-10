import React from 'react';
import { Award, Truck, ShieldCheck, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "100% Authentic Legacy",
      desc: "Handcrafted by Master Jaipur Artisans"
    },
    {
      icon: Truck,
      title: "Pan-India Express Shipping",
      desc: "Free shipping on all orders over ₹999"
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment Gateway",
      desc: "Encrypted UPI, Credit Cards & NetBanking"
    },
    {
      icon: Headphones,
      title: "Dedicated Support Desk",
      desc: "Mon - Sat: 9 AM - 7 PM IST Assistance"
    }
  ];

  return (
    <section className="border-t border-b border-[#EADBCA] bg-[#FAF6F0] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="p-3 bg-primary/10 text-primary rounded-xl flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider">{b.title}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
