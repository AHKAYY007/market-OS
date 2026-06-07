'use client';

const G = '#166534';

// Deterministic star field spread across the FULL content area
// Using prime-number-based distribution to avoid visible patterns
const STARS = Array.from({ length: 55 }, (_, i) => ({
  x:    ((i * 41  + 17) % 95) + 2.5,
  y:    ((i * 67  + 5)  % 93) + 1,
  size: ((i % 5) * 0.45 + 0.65).toFixed(2),
  twinkleDur:   (1.8 + (i * 0.27) % 3.2).toFixed(2),
  twinkleDelay: ((i  * 0.43) % 5).toFixed(2),
  driftDur:     (9   + (i * 0.61) % 7).toFixed(2),
  driftDelay:   ((i  * 0.53) % 6).toFixed(2),
}));

// A few slightly larger "distant objects" for depth
const OBJECTS = [
  { x: 7,  y: 12, size: 3.5, dur: '4s',   delay: '0s'    },
  { x: 88, y: 25, size: 3.0, dur: '5.5s', delay: '1.2s'  },
  { x: 52, y: 6,  size: 2.8, dur: '3.8s', delay: '2.8s'  },
  { x: 22, y: 72, size: 2.5, dur: '6s',   delay: '0.5s'  },
  { x: 76, y: 80, size: 2.8, dur: '4.5s', delay: '3.1s'  },
];

const Crosshair = ({ className, delay = '0s' }: { className: string; delay?: string }) => (
  <div
    className={`absolute pointer-events-none animate-marker ${className}`}
    style={{ animationDelay: delay }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <line x1="8" y1="0"  x2="8"  y2="5"  stroke={G} strokeWidth="1" />
      <line x1="8" y1="11" x2="8"  y2="16" stroke={G} strokeWidth="1" />
      <line x1="0" y1="8"  x2="5"  y2="8"  stroke={G} strokeWidth="1" />
      <line x1="11" y1="8" x2="16" y2="8"  stroke={G} strokeWidth="1" />
      <rect x="6" y="6" width="4" height="4" stroke={G} strokeWidth="1" fill="none" />
    </svg>
  </div>
);

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Star field — full coverage */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left:            `${s.x}%`,
            top:             `${s.y}%`,
            width:           `${s.size}px`,
            height:          `${s.size}px`,
            backgroundColor: G,
            animation: `
              twinkle ${s.twinkleDur}s ease-in-out ${s.twinkleDelay}s infinite,
              drift    ${s.driftDur}s  ease-in-out ${s.driftDelay}s  infinite
            `,
          }}
        />
      ))}

      {/* Larger distant objects */}
      {OBJECTS.map((o, i) => (
        <div
          key={`obj-${i}`}
          className="absolute rounded-full"
          style={{
            left:            `${o.x}%`,
            top:             `${o.y}%`,
            width:           `${o.size}px`,
            height:          `${o.size}px`,
            backgroundColor: G,
            animation: `twinkle ${o.dur} ease-in-out ${o.delay} infinite`,
          }}
        />
      ))}

      {/* Corner crosshairs */}
      <Crosshair className="top-3 left-3"     delay="0s"   />
      <Crosshair className="top-3 right-3"    delay="1.1s" />
      <Crosshair className="bottom-3 left-3"  delay="2.2s" />
      <Crosshair className="bottom-3 right-3" delay="3.3s" />

    </div>
  );
}
