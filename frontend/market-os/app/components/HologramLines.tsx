// Animated sweep lines — holographic scan effect for section backgrounds

const LINES = [
  { top: '8%',  delay: '0s',    dur: '9s'  },
  { top: '22%', delay: '3.2s',  dur: '13s' },
  { top: '41%', delay: '1.6s',  dur: '8s'  },
  { top: '60%', delay: '5.1s',  dur: '11s' },
  { top: '77%', delay: '2.4s',  dur: '10s' },
  { top: '91%', delay: '7.3s',  dur: '7s'  },
];

interface Props {
  color?:   string;
  opacity?: number;
}

export default function HologramLines({ color = '#166534', opacity = 1 }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {LINES.map((l, i) => (
        // Outer container clips the sweep; inner div does the translate animation
        <div
          key={i}
          style={{ position: 'absolute', top: l.top, left: 0, right: 0, height: 1, overflow: 'hidden' }}
        >
          <div
            style={{
              width:      '28%',
              height:     1,
              background: `linear-gradient(90deg, transparent 0%, ${color} 40%, ${color} 60%, transparent 100%)`,
              opacity:    (i % 2 === 0 ? 0.18 : 0.1) * opacity,
              animation:  `hologramSweep ${l.dur} linear ${l.delay} infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
