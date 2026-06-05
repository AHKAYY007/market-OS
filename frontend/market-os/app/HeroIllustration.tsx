const G = '#166534';

const LAT_STEPS = [0.12, 0.3, 0.48, 0.64, 0.78, 0.9, 0.98];
const LNG_STEPS = [-0.92, -0.72, -0.5, -0.28, 0, 0.28, 0.5, 0.72, 0.92];

// Orbital rings: rx, ry, inclination rotation, animation duration, begin offset
const ORBITS = [
  { rx: 462, ry: 178, rot:  12, dur: '13s', begin: '0s'   },
  { rx: 538, ry: 212, rot: -10, dur: '20s', begin: '-9s'  },
  { rx: 625, ry: 252, rot:  24, dur: '29s', begin: '-17s' },
];

export default function HeroIllustration() {
  const W  = 1200;
  const H  = 440;
  const cx = 600;
  const cy = H;    // globe center sits at the very bottom edge — only top half visible
  const R  = 415;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      {/* ── Atmosphere glow — soft rings just outside the globe ── */}
      <circle cx={cx} cy={cy} r={R + 7}  stroke={G} strokeWidth="16" strokeOpacity="0.05" fill="none" />
      <circle cx={cx} cy={cy} r={R + 24} stroke={G} strokeWidth="10" strokeOpacity="0.025" fill="none" />
      <circle cx={cx} cy={cy} r={R + 44} stroke={G} strokeWidth="6"  strokeOpacity="0.01" fill="none" />

      {/* ── Orbital rings + satellites ── */}
      {ORBITS.map((orb, i) => {
        // Full ellipse path — bottom half goes below SVG viewBox (clipped = "behind" globe)
        const path = [
          `M ${cx - orb.rx} ${cy}`,
          `A ${orb.rx} ${orb.ry} 0 1 0 ${cx + orb.rx} ${cy}`,
          `A ${orb.rx} ${orb.ry} 0 1 0 ${cx - orb.rx} ${cy}`,
        ].join(' ');

        return (
          <g key={i} transform={`rotate(${orb.rot} ${cx} ${cy})`}>
            <ellipse
              cx={cx} cy={cy}
              rx={orb.rx} ry={orb.ry}
              stroke={G} strokeWidth="0.7" strokeOpacity="0.25"
              strokeDasharray="7 10"
            />
            {/* Satellite */}
            <circle r="2.8" fill={G} fillOpacity="0.75">
              <animateMotion dur={orb.dur} begin={orb.begin} repeatCount="indefinite" path={path} />
            </circle>
            {/* Second satellite on longer orbits for liveliness */}
            {i > 0 && (
              <circle r="2" fill={G} fillOpacity="0.5">
                <animateMotion
                  dur={orb.dur}
                  begin={`calc(${orb.begin} - ${parseFloat(orb.dur) / 2}s)`}
                  repeatCount="indefinite"
                  path={path}
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* ── Globe outline — top semicircle ── */}
      <path
        d={`M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`}
        stroke={G} strokeWidth="1.5" strokeOpacity="0.65"
      />

      {/* ── Latitude lines ── */}
      {LAT_STEPS.map((t, i) => {
        const h  = t * R;
        const hw = Math.sqrt(R * R - h * h);
        const y  = cy - h;
        return (
          <line
            key={i}
            x1={cx - hw} y1={y}
            x2={cx + hw} y2={y}
            stroke={G} strokeWidth="0.85"
            strokeOpacity={Math.max(0.28 - i * 0.027, 0.05)}
          />
        );
      })}

      {/* ── Longitude arcs (meridians) ── */}
      {LNG_STEPS.map((tx, i) => {
        const dx = tx * R;
        if (Math.abs(tx) < 0.01) {
          return (
            <line key={i}
              x1={cx} y1={cy - R} x2={cx} y2={cy}
              stroke={G} strokeWidth="0.85" strokeOpacity="0.22"
            />
          );
        }
        const adx   = Math.abs(dx);
        const sweep = dx > 0 ? 1 : 0;
        return (
          <path key={i}
            d={`M ${cx} ${cy - R} A ${adx} ${R} 0 0 ${sweep} ${cx + dx} ${cy}`}
            stroke={G} strokeWidth="0.85" strokeOpacity="0.2"
          />
        );
      })}

      {/* ── North pole ── */}
      <circle cx={cx} cy={cy - R} r="4" fill={G} fillOpacity="0.55" />
    </svg>
  );
}
