import React from 'react';
import { Award, Flame, Sparkles, CheckCircle2, Hammer } from 'lucide-react';

export default function HeritageBanner() {
  const steps = [
    {
      step: "01",
      title: "Wax Mold Sculpting",
      desc: "Jaipur master sculptors hand-carve wax models with intricate traditional iconography.",
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
      title: "Hand Chiseling",
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-14 border border-stone-800 shadow-2xl space-y-14 relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        {/* TOP HALF: Artisan Heritage Story & Visual Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/30 text-amber-300 text-xs font-bold uppercase tracking-widest border border-primary/40">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Artisan Heritage • Est. 2006</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Preserving Indian Craftsmanship & Spiritual Legacy
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed">
              Every idol and pooja artifact at God Gift Arts is hand-cast by traditional master artisans using centuries-old lost-wax casting and hand-carving techniques. We guarantee authentic solid brass, pure sandalwood ingredients, and timeless spiritual elegance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Solid Brass Casting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Jaipur Master Artisans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Charcoal-Free Agarbatti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Pan-India Safe Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-800">
            <img
              src="/ganesha.jpg"
              alt="Artisan Craftsmanship"
              className="w-full h-80 object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent p-6 flex flex-col justify-end">
              <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Hand-Polished Brass</div>
              <div className="text-lg font-serif font-bold text-white">Antique Ganesha Idol Crafting Process</div>
            </div>
          </div>

        </div>

        {/* BOTTOM HALF: The 4-Step Lost-Wax Brass Casting Process */}
        <div className="pt-8 border-t border-stone-800 space-y-8 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              4-Step Master Technique
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              The Lost-Wax Brass Casting Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx}
                  className="bg-stone-800/60 p-5 rounded-2xl border border-stone-700/80 hover:border-amber-400/40 transition-all space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-amber-400/40 font-mono group-hover:text-amber-400 transition-colors">
                      {s.step}
                    </span>
                    <div className="p-2 bg-stone-700 text-amber-400 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {s.title}
                  </h4>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
