import React from 'react';

export default function PartnersSection() {
  const partnersList = [
    { name: "Vishal Mega Mart", image: "/part1.png" },
    { name: "Walmart", image: "/part2.png" },
    { name: "Market 99", image: "/part3.png" },
    { name: "Super 99", image: "/part4.png" },
    { name: "Lots Wholesale", image: "/part5.png" },
    { name: "Rajmandir", image: "/part6.jpeg" },
    { name: "Le Marché", image: "/part7.png" },
    { name: "Hippo", image: "/part8.jpg" },
    { name: "Modern Bazaar", image: "/part9.png" },
    { name: "24/7", image: "/part10.png" },
    { name: "FNP", image: "/part11.png" },
    { name: "99nine Store", image: "/part12.png" },
    { name: "Dabur India", image: "/part13.png" },
    { name: "Krishna Market", image: "/part14.png" },
    { name: "24/7 Express", image: "/part10.png" }
  ];

  // Duplicate for seamless 100% infinite marquee loop
  const doublePartners = [...partnersList, ...partnersList];

  return (
    <section className="bg-transparent py-8 sm:py-10 border-y border-[#EADBCA]/60 overflow-hidden">
      
      {/* Embedded CSS for 60fps Smooth Marquee */}
      <style>{`
        @keyframes continuousMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: continuousMarquee 35s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        {/* Simple Clean Header */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 tracking-widest uppercase">
            Our Partners
          </h2>
          <div className="w-12 h-0.5 bg-amber-800 mx-auto mt-1.5 rounded-full" />
        </div>

        {/* Silky Smooth Marquee Track Matching Homepage Background */}
        <div className="relative overflow-hidden group py-1">
          {/* Side Fade Overlays matching brand background */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-smooth flex items-center gap-4">
            {doublePartners.map((partner, idx) => (
              <div
                key={idx}
                className="w-36 sm:w-44 py-3.5 px-3 shrink-0 bg-white rounded-2xl border border-stone-200/80 shadow-2xs hover:shadow-md hover:border-amber-800/40 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer select-none space-y-2"
              >
                {/* LOGO CONTAINER */}
                <div className="h-12 w-full flex items-center justify-center p-1 group-hover:scale-108 transition-transform duration-300">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-full max-w-[100px] object-contain pointer-events-none"
                    loading="lazy"
                  />
                </div>

                {/* SMALL SUBTLE BRAND NAME */}
                <span className="text-[10px] font-bold text-stone-600 uppercase tracking-wider line-clamp-1 group-hover:text-amber-900 transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
