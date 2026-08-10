import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function DeityCollectionGrid({ onSelectCategory }) {
  const deities = [
    {
      id: "ganesha",
      name: "Lord Ganesha",
      tag: "Wisdom & New Beginnings",
      image: "/ganesha.jpg",
      items: "24+ Statues"
    },
    {
      id: "lakshmi",
      name: "Maha Lakshmi",
      tag: "Wealth & Prosperity",
      image: "/col1.webp",
      items: "18+ Statues"
    },
    {
      id: "ram-darbar",
      name: "Ram Darbar",
      tag: "Family Harmony & Virtue",
      image: "/col7.webp",
      items: "12+ Statues"
    },
    {
      id: "shyam-baba",
      name: "Khatu Shyam Ji",
      tag: "Devotion & Faith",
      image: "/col2.jpg",
      items: "15+ Statues"
    },
    {
      id: "guruji",
      name: "Guru Ji Swaroop",
      tag: "Spiritual Connection",
      image: "/col6.webp",
      items: "30+ Essentials"
    },
    {
      id: "shiva",
      name: "Shiv Mahadev",
      tag: "Peace & Meditation",
      image: "/col3.jpg",
      items: "16+ Statues"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shop By Deity & Faith</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
            Auspicious Deity Collections
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 max-w-xs">
          Find divine murtis and wall art tailored to your daily worship and home mandir
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {deities.map((deity) => (
          <div
            key={deity.id}
            onClick={() => onSelectCategory && onSelectCategory("idols")}
            className="bg-brand-surface rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-[4/5] bg-stone-100 relative overflow-hidden">
              <img
                src={deity.image}
                alt={deity.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block line-clamp-1">
                  {deity.tag}
                </span>
                <h3 className="text-sm font-serif font-bold group-hover:text-amber-300 transition-colors">
                  {deity.name}
                </h3>
              </div>
            </div>

            <div className="p-3 bg-stone-50 text-[11px] font-semibold text-stone-500 flex items-center justify-between group-hover:text-primary transition-colors">
              <span>{deity.items}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
