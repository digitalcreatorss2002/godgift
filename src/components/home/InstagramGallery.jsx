import React from 'react';
import { Camera, Heart } from 'lucide-react';

export default function InstagramGallery() {
  const photos = [
    { id: 1, image: "/col1.webp", title: "Living Room Mandir Setup", likes: "340" },
    { id: 2, image: "/col2.jpg", title: "Diwali Peacock Diya Decor", likes: "512" },
    { id: 3, image: "/ganesha.jpg", title: "Brass Ganesha Housewarming", likes: "420" },
    { id: 4, image: "/col4.jpg", title: "Pure Copper Puja Thali Set", likes: "289" },
    { id: 5, image: "/col6.webp", title: "Guru Ji Swaroop Corner", likes: "675" },
    { id: 6, image: "/col3.jpg", title: "Aromatic Sandal Dhoop Setup", likes: "310" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          <Camera className="w-4 h-4 text-primary" />
          <span>#GodGiftArtsHome</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Devotees Mandir Gallery
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 font-normal">
          Tag @GodGiftArts on Instagram to feature your home mandir setup
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {photos.map((p) => (
          <div 
            key={p.id}
            className="aspect-square rounded-2xl overflow-hidden bg-stone-100 relative group cursor-pointer border border-stone-200"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white text-xs">
              <div className="flex items-center justify-end text-amber-300 gap-1 font-bold">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>{p.likes}</span>
              </div>
              <div className="font-semibold line-clamp-1 text-[11px]">
                {p.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
