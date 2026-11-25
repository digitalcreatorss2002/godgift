import React from 'react';
import { 
  Sparkles, 
  Layers, 
  BadgeCheck, 
  Headphones 
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Handcrafted Material",
      description: "Our products feature premium, 100% handmade materials crafted with meticulous attention to detail for an authentic, lasting finish."
    },
    {
      icon: Layers,
      title: "Variety Products",
      description: "Explore an extensive variety of traditional & decorative diyas, candles, dhoop, havan samagri, and seasonal festive collections for every occasion."
    },
    {
      icon: BadgeCheck,
      title: "Quality Assurance",
      description: "Every creation is carefully handcrafted and inspected by skilled artisans, ensuring the highest standards of craftsmanship, durability, and beauty."
    },
    {
      icon: Headphones,
      title: "Dedicated Customer Support",
      description: "We're here for you with prompt assistance for wholesale, corporate, and retail queries. Your complete satisfaction is our highest priority."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-14 sm:py-20 border-t border-[#EADBCA]/70 my-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Why Choose Us?
          </h2>
        </div>

        {/* 4 Clean Centered Cards matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F4EE] hover:bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] hover:border-amber-700/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
              >
                {/* Centered Minimal Icon */}
                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-amber-50 text-stone-800 group-hover:text-amber-900 flex items-center justify-center border border-stone-200/80 group-hover:border-amber-300 transition-colors shadow-2xs">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>

                {/* Centered Title */}
                <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg leading-snug">
                  {item.title}
                </h3>

                {/* Centered Description */}
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
