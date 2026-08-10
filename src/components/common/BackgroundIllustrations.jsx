import React from 'react';

/**
 * Reusable Subtle Spiritual Background Illustrations (Diya, Mandala & Sacred Motifs)
 * Uses low opacity pointer-events-none SVG watermarks to give a rich devotional aura.
 */

export function JaaliPatternBackground({ className = "text-amber-800/15" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="jaaliLatticePattern"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Outer square grid line */}
            <rect x="0" y="0" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
            
            {/* Inner diagonal diamond */}
            <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
            
            {/* Inner upright square inside diamond */}
            <rect x="20" y="20" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
            
            {/* Center dot */}
            <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.45" />
            
            {/* Corner intersection dots */}
            <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.3" />
            <circle cx="64" cy="0" r="1.5" fill="currentColor" opacity="0.3" />
            <circle cx="0" cy="64" r="1.5" fill="currentColor" opacity="0.3" />
            <circle cx="64" cy="64" r="1.5" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jaaliLatticePattern)" />
      </svg>
    </div>
  );
}

export function LotusJaaliPatternBackground({ className = "text-amber-900/10" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="lotusJaaliPattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Eight pointed star outer grid */}
            <path d="M40 0 L52 28 L80 40 L52 52 L40 80 L28 52 L0 40 L28 28 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
            {/* Inner lotus petal curves */}
            <circle cx="40" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />
            <circle cx="40" cy="40" r="6" fill="currentColor" opacity="0.2" />
            {/* Corner dots */}
            <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.25" />
            <circle cx="80" cy="0" r="2" fill="currentColor" opacity="0.25" />
            <circle cx="0" cy="80" r="2" fill="currentColor" opacity="0.25" />
            <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lotusJaaliPattern)" />
      </svg>
    </div>
  );
}

export function SacredEmblem({ className = "w-10 h-10 text-amber-700" }) {
  return (
    <svg className={`mx-auto ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="44" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <circle cx="50" cy="50" r="36" strokeWidth="1.5" />
      {/* Sacred Petals */}
      <path d="M50 14 C42 30, 42 38, 50 50 C58 38, 58 30, 50 14 Z" fill="currentColor" opacity="0.3" />
      <path d="M50 86 C42 70, 42 62, 50 50 C58 62, 58 70, 50 86 Z" fill="currentColor" opacity="0.3" />
      <path d="M14 50 C30 42, 38 42, 50 50 C38 58, 30 58, 14 50 Z" fill="currentColor" opacity="0.3" />
      <path d="M86 50 C70 42, 62 42, 50 50 C62 58, 70 58, 86 50 Z" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}


export function DecorativeWavyDivider({ className = "w-48 h-4 text-amber-700/50" }) {
  return (
    <svg className={`mx-auto ${className}`} viewBox="0 0 240 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M 0 10 Q 30 2, 60 10 T 120 10 T 180 10 T 240 10" opacity="0.4" />
      <circle cx="120" cy="10" r="3" fill="currentColor" stroke="none" />
      <circle cx="120" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function DiyaIllustration({ className = "w-64 h-64 text-amber-900/10" }) {
  return (
    <svg 
      className={`pointer-events-none select-none ${className}`} 
      viewBox="0 0 200 200" 
      fill="currentColor"
    >
      {/* Flame */}
      <path 
        d="M100 20C100 20 80 55 80 80C80 95 90 105 100 105C110 105 120 95 120 80C120 55 100 20 100 20Z" 
        className="text-amber-500/20 fill-current"
      />
      {/* Inner Flame Glow */}
      <path 
        d="M100 45C100 45 90 65 90 80C90 88 95 93 100 93C105 93 110 88 110 80C110 65 100 45 100 45Z" 
        className="text-amber-400/30 fill-current"
      />
      {/* Diya Oil Base */}
      <path 
        d="M30 110C30 110 40 165 100 165C160 165 170 110 170 110H30Z" 
        className="text-amber-900/15 fill-current"
      />
      {/* Stand Base */}
      <path 
        d="M80 165L75 185H125L120 165H80Z" 
        className="text-amber-900/15 fill-current"
      />
    </svg>
  );
}

export function MandalaIllustration({ className = "w-96 h-96 text-stone-900/5" }) {
  return (
    <svg 
      className={`pointer-events-none select-none ${className}`} 
      viewBox="0 0 400 400" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <circle cx="200" cy="200" r="180" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="150" />
      <circle cx="200" cy="200" r="120" strokeDasharray="8 8" />
      <circle cx="200" cy="200" r="80" />
      <circle cx="200" cy="200" r="40" />

      {/* Radial Petals Pattern */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 200 200)`}>
          <path d="M200 50 C220 100, 220 150, 200 50 Z" />
          <circle cx="200" cy="30" r="5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function TempleBellIllustration({ className = "w-48 h-48 text-amber-900/10" }) {
  return (
    <svg 
      className={`pointer-events-none select-none ${className}`} 
      viewBox="0 0 100 120" 
      fill="currentColor"
    >
      {/* Chain */}
      <rect x="48" y="0" width="4" height="30" rx="2" />
      {/* Bell Top Dome */}
      <path d="M20 70C20 40 35 30 50 30C65 30 80 40 80 70H20Z" />
      {/* Bell Rim */}
      <path d="M15 70C15 70 10 85 50 85C90 85 85 70 85 70H15Z" />
      {/* Clapper */}
      <circle cx="50" cy="95" r="7" />
    </svg>
  );
}
