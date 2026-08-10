import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { JaaliPatternBackground } from '../common/BackgroundIllustrations';

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment: "The 8-inch Brass Ganesha idol is exquisite! Heavy solid brass with intricate detail. Packed with extra care and delivered in 3 days.",
      verified: true
    },
    {
      id: 2,
      name: "Pooja Verma",
      location: "Bengaluru, Karnataka",
      rating: 5,
      comment: "Ordered 150 corporate gift boxes for Diwali. All our employees loved the brass diya and mysore sandal agarbatti. Excellent service!",
      verified: true
    },
    {
      id: 3,
      name: "Anand Singhania",
      location: "Delhi NCR",
      rating: 5,
      comment: "Authentic Jaipur craftsmanship. The peacock diya set looks divine in our pooja mandir. Highly recommended for devotional items.",
      verified: true
    }
  ];

  return (
    <section className="relative bg-[#FAF6F0] pt-16 pb-20 sm:pb-24 border-t border-[#EADBCA]/60 overflow-hidden mt-6 mb-0">
      <JaaliPatternBackground className="text-amber-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
            Devotee Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
            Loved by Over 50,000+ Devotees
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            Real feedback from our valued customers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div 
            key={rev.id}
            className="bg-brand-surface p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-stone-300" />
              </div>
              
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-stone-900">{rev.name}</div>
                <div className="text-stone-400">{rev.location}</div>
              </div>
              {rev.verified && (
                <span className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

