import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  Sparkles 
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Solid Brass & Copper",
      description: "Pure virgin metals hand-cast without hollow fillers, resin, or synthetic substitutes."
    },
    {
      icon: Award,
      title: "Jaipur Master Artisans",
      description: "Handcrafted by 45+ 4th-generation sculptor families preserving lost-wax heritage."
    },
    {
      icon: Truck,
      title: "Insured Safe Transit",
      description: "5-layer shockproof armor packaging with 100% free doorstep damage replacement."
    },
    {
      icon: Sparkles,
      title: "Corporate Orders & GST",
      description: "Bespoke company logo laser engraving and 100% GST input credit invoicing."
    }
  ];

  return (
    <section className="bg-[#FAF6F0] py-12 sm:py-16 border-t border-[#EADBCA]/70 my-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Why Choose God Gift Arts
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-stone-500 max-w-xl mx-auto">
            Authentic devotional sculptures, oil paintings & pooja decor straight from Jaipur.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EADBCA] shadow-2xs hover:shadow-md hover:border-amber-900/40 transition-all space-y-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-500 leading-relaxed font-normal">
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
