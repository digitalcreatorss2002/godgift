import React from 'react';
import { Hammer, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CraftProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Wax Mold Sculpting",
      desc: "Jaipur master sculptors hand-carve intricate wax models with traditional iconography.",
      icon: Sparkles
    },
    {
      step: "02",
      title: "1,000°C Brass Casting",
      desc: "Pure molten brass is poured into clay molds using the ancient lost-wax technique.",
      icon: Flame
    },
    {
      step: "03",
      title: "Hand Chiseling & Detailing",
      desc: "Artisans meticulously chisel facial expressions, ornaments, and divine attire.",
      icon: Hammer
    },
    {
      step: "04",
      title: "Antique Gold Buffing",
      desc: "Finished with protective organic lacquer and hand-buffed for enduring luster.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Jaipur Heritage Craftsmanship
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            The Lost-Wax Brass Casting Process
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-normal">
            How God Gift Arts preserves 400-year-old traditional Indian metal sculpting
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-stone-800/60 p-6 rounded-2xl border border-stone-700/80 hover:border-amber-400/40 transition-all space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-amber-400/40 font-mono group-hover:text-amber-400 transition-colors">
                    {s.step}
                  </span>
                  <div className="p-2.5 bg-stone-700 text-amber-400 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
