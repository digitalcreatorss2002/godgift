import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Sparkles, Flame, ShieldCheck, Gift, Layers } from 'lucide-react';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';
import { fetchCollections, getImageSrc } from '../services/api';

const SECTION_ICON_MAP = {
  "Deity Devotional Series": Sparkles,
  "Mandir Ritual & Occasion Collections": Flame,
  "Heritage Craft & Material Editions": ShieldCheck,
  "Curated Gifting & Corporate Lines": Gift
};

// Fallback Static Collections Data (if API is unreachable)
const FALLBACK_COLLECTION_SECTIONS = [
  {
    sectionTitle: "Deity Devotional Series",
    sectionIcon: Sparkles,
    sectionSubtitle: "Sacred iconographic collections celebrating Lord Ganesha, Krishna, & Protective Deities",
    items: [
      {
        id: "ganesha-series",
        slug: "ganesha-series",
        tag: "idols",
        title: "The Siddhivinayak Ganesha Series",
        subtitle: "Obstacle Removal Murtis & Hand-Painted Oil Canvases",
        badge: "Divine Wisdom",
        image: "/ganesha-oil.jpg"
      },
      {
        id: "vrindavan-leela",
        slug: "vrindavan-leela",
        tag: "paintings",
        title: "Vrindavan Krishna Leela Collection",
        subtitle: "Radha Krishna Folk Canvases, Statues & Tulsi Malas",
        badge: "Folk Artisanal",
        image: "/col1.webp"
      },
      {
        id: "warrior-deities",
        slug: "warrior-deities",
        tag: "idols",
        title: "Khatu Shyam Ji & Hanuman Protection Series",
        subtitle: "Strength & Faith Statues for Family Altar",
        badge: "Sacred Power",
        image: "/col6.webp"
      }
    ]
  },
  {
    sectionTitle: "Mandir Ritual & Occasion Collections",
    sectionIcon: Flame,
    sectionSubtitle: "Complete worship ensembles for daily morning aarti, festive mandir setup, & consecration",
    items: [
      {
        id: "copper-rituals",
        slug: "copper-rituals",
        tag: "pooja",
        title: "Vedic Aarti & Copper Ritual Essentials",
        subtitle: "100% Pure Copper Thalis, Kalash & Panchapatra Sets",
        badge: "100% Pure Copper",
        image: "/col4.jpg"
      },
      {
        id: "brass-lighting",
        slug: "brass-lighting",
        tag: "pooja",
        title: "Peacock Diya & Lighting Collection",
        subtitle: "Solid Brass Multi-Wick Standing Diyas & Urli Bowls",
        badge: "Temple Lighting",
        image: "/col3.jpg"
      },
      {
        id: "festive-pooja",
        slug: "festive-pooja",
        tag: "pooja",
        title: "Deepawali Mahotsav Puja Samagri Line",
        subtitle: "Handcrafted Peacock Diyas, Dhoop Cones & Brass Bells",
        badge: "Festive Ritual",
        image: "/offer2.png"
      }
    ]
  },
  {
    sectionTitle: "Heritage Craft & Material Editions",
    sectionIcon: ShieldCheck,
    sectionSubtitle: "Limited edition sacred artifacts grouped by Jaipur master craftsmanship metallurgy & stone",
    items: [
      {
        id: "solid-brass-edition",
        slug: "solid-brass-edition",
        tag: "idols",
        title: "Jaipur Lost-Wax Solid Brass Edition",
        subtitle: "Heavy Solid Brass Sculptures with Antiqued Lacquer",
        badge: "Solid Brass",
        image: "/col1.webp"
      },
      {
        id: "makrana-marble-edition",
        slug: "makrana-marble-edition",
        tag: "idols",
        title: "Makrana Royal Marble & 24K Gold Line",
        subtitle: "White Makrana Marble Statues Hand-Gilded with Gold Foil",
        badge: "Makrana Marble",
        image: "/col2.jpg"
      },
      {
        id: "sandalwood-rosaries",
        slug: "sandalwood-rosaries",
        tag: "malas",
        title: "Original Sandalwood & Spatik Rosaries",
        subtitle: "108-Bead Pure Mysore Sandalwood & Crystal Japa Malas",
        badge: "108 Sacred Beads",
        image: "/col8.webp"
      }
    ]
  },
  {
    sectionTitle: "Curated Gifting & Corporate Lines",
    sectionIcon: Gift,
    sectionSubtitle: "Luxury gift hampers for family celebrations, Diwali gifting, & custom corporate branding",
    items: [
      {
        id: "royal-hampers",
        slug: "royal-hampers",
        tag: "gifting",
        title: "Royal Velvet Heritage Hampers",
        subtitle: "Velvet Gift Boxes with Solid Brass Diyas & Dry Fruits",
        badge: "Bespoke Hampers",
        image: "/col5.jpeg"
      },
      {
        id: "corporate-gifting",
        slug: "corporate-gifting",
        tag: "gifting",
        title: "Bespoke Corporate Executive Sets",
        subtitle: "Custom Logo Engraved Copper & Brass Gift Ensembles",
        badge: "Custom Logo",
        image: "/offer3.png"
      }
    ]
  }
];

export default function CollectionsPage({ onSelectCollection }) {
  const [loading, setLoading] = useState(true);
  const [apiCollections, setApiCollections] = useState([]);

  useEffect(() => {
    fetchCollections()
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setApiCollections(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Process and group API collections by section_title
  const collectionSections = useMemo(() => {
    if (!apiCollections || apiCollections.length === 0) {
      return FALLBACK_COLLECTION_SECTIONS;
    }

    const grouped = {};
    apiCollections.forEach((col) => {
      const sectionKey = col.section_title || "Curated Devotional Collections";
      if (!grouped[sectionKey]) {
        grouped[sectionKey] = {
          sectionTitle: sectionKey,
          sectionSubtitle: col.section_subtitle || "Exclusive handcrafted collections",
          sectionIcon: SECTION_ICON_MAP[sectionKey] || Layers,
          items: []
        };
      }
      grouped[sectionKey].items.push({
        id: col.id,
        slug: col.slug,
        tag: col.tag || col.slug,
        title: col.title,
        subtitle: col.subtitle || col.description || '',
        badge: col.badge || 'Curated',
        image: col.image ? getImageSrc(col.image) : '/col1.webp'
      });
    });

    return Object.values(grouped);
  }, [apiCollections]);

  if (loading) {
    return <PageLoader text="Loading curated devotional collections..." />;
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Museum Editorial Header Banner */}
      <div className="relative bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-900/10 text-amber-900 text-[11px] font-bold uppercase tracking-[0.25em] border border-amber-900/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Curated Devotional Concepts</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            Curated Devotional Collections
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm font-serif italic max-w-xl mx-auto leading-relaxed">
            Explore concept-driven sacred series curated by deity, mandir ritual occasion, heritage craftsmanship, & bespoke gifting lines.
          </p>
        </div>
      </div>

      {/* Main Concept-Driven Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {collectionSections.map((section, sIdx) => {
          const IconComp = section.sectionIcon || Layers;
          return (
            <div key={sIdx} className="space-y-6">
              
              {/* Section Header */}
              <div className="border-b border-[#EADBCA] pb-4 space-y-1">
                <div className="flex items-center gap-2 text-stone-900">
                  <IconComp className="w-5 h-5 text-amber-800" />
                  <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                    {section.sectionTitle}
                  </h2>
                </div>
                <p className="text-xs text-stone-500 font-serif italic">
                  {section.sectionSubtitle}
                </p>
              </div>

              {/* Section Items Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.slug || item.id}
                    onClick={() => onSelectCollection && onSelectCollection(item.slug || item.tag)}
                    className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-stone-950 border border-stone-200/80 shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent group-hover:via-stone-950/40 transition-colors" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1">
                      <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider line-clamp-1">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <div className="p-2 rounded-full bg-white/20 text-white group-hover:bg-primary transition-colors shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
