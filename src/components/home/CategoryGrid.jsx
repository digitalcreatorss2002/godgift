import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { fetchCategories, getImageSrc } from '../../services/api';

const DEFAULT_COLLAGE = [
  {
    id: "spiritual-oil-paintings",
    title: "Spiritual Oil Paintings",
    subtitle: "Hand-painted Om Ganesha, Krishna Folk Art & Divine Lakshmi canvas art",
    image: "/ganesha-oil.jpg",
    size: "lg:col-span-2 lg:row-span-2 h-[380px] sm:h-[480px]",
    badge: "Handmade Canvas Art"
  },
  {
    id: "brass-idols-murtis",
    title: "Brass Idols & Murtis",
    subtitle: "Hanuman Ji, Khatu Shyam Ji, Ram Darbar & Durga Maa murtis",
    image: "/col1.webp",
    size: "lg:col-span-1 h-[235px]",
    badge: "Pure Solid Brass"
  },
  {
    id: "copper-pooja-sets",
    title: "Copper & Pooja Sets",
    subtitle: "Pure copper thalis, kalash, brass ghanti & dhoop stands",
    image: "/col4.jpg",
    size: "lg:col-span-1 h-[235px]",
    badge: "Authentic Copper"
  },
  {
    id: "guru-ji-devotional-line",
    title: "Guru Ji Devotional Line",
    subtitle: "Guru Ji Swaroop frames, neck malas, rumals & gift hampers",
    image: "/col6.webp",
    size: "lg:col-span-2 h-[225px]",
    badge: "Guru Ji Special"
  }
];

export default function CategoryGrid({ onSelectCategory }) {
  const [collageItems, setCollageItems] = useState(DEFAULT_COLLAGE);

  useEffect(() => {
    fetchCategories().then(res => {
      if (res && Array.isArray(res) && res.length >= 4) {
        const sizes = [
          "lg:col-span-2 lg:row-span-2 h-[380px] sm:h-[480px]",
          "lg:col-span-1 h-[235px]",
          "lg:col-span-1 h-[235px]",
          "lg:col-span-2 h-[225px]"
        ];
        const badges = [
          "Handmade Canvas Art",
          "Pure Solid Brass",
          "Authentic Copper",
          "Guru Ji Special"
        ];
        
        const firstFour = res.slice(0, 4).map((cat, idx) => ({
          id: cat.slug,
          title: cat.name,
          subtitle: cat.subtitle || 'Handcrafted Devotional Artifacts',
          image: cat.image ? getImageSrc(cat.image) : DEFAULT_COLLAGE[idx].image,
          size: sizes[idx],
          badge: badges[idx] || "Handcrafted Art"
        }));
        setCollageItems(firstFour);
      }
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>God Gift Arts Categories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
            Explore Signature Categories
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 max-w-xs">
          Click any category tile to explore products
        </p>
      </div>

      {/* Bento Image Collage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {collageItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCategory && onSelectCategory(item.id)}
            className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-stone-200/80 group cursor-pointer transition-all duration-500 ${item.size}`}
          >
            {/* Background Photography Image */}
            <img
              src={getImageSrc(item.image)}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95"
              loading="lazy"
            />

            {/* Dark Gradient Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent group-hover:via-stone-950/50 transition-colors" />

            {/* Top Badge Tag */}
            {item.badge && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-stone-900 text-[11px] font-extrabold px-3 py-1 rounded-full border border-white/40 shadow-xs">
                {item.badge}
              </div>
            )}

            {/* Bottom Content & Click Indicator */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end space-y-1.5 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-serif font-bold group-hover:text-amber-300 transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-all shrink-0 ml-2">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-stone-300 line-clamp-2 font-medium">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
