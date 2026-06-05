const BLOBS = [
  {
    // emerald to cyan — top-left anchor
    style: {
      width: 700, height: 700,
      top: -220, left: -200,
      background: 'radial-gradient(circle at 40% 40%, rgba(16,185,129,0.38) 0%, rgba(6,182,212,0.22) 40%, rgba(22,101,52,0.08) 70%, transparent 100%)',
      filter: 'blur(90px)',
      animation: 'blobA 22s ease-in-out infinite',
    },
  },
  {
    // dark-green to indigo — right side
    style: {
      width: 620, height: 620,
      top: '22%', right: -200,
      background: 'radial-gradient(circle at 55% 40%, rgba(22,101,52,0.3) 0%, rgba(99,102,241,0.16) 50%, transparent 100%)',
      filter: 'blur(85px)',
      animation: 'blobB 28s ease-in-out infinite',
    },
  },
  {
    // cyan to green — bottom-center
    style: {
      width: 520, height: 520,
      bottom: -120, left: '28%',
      background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.26) 0%, rgba(16,185,129,0.14) 55%, transparent 100%)',
      filter: 'blur(75px)',
      animation: 'blobC 19s ease-in-out infinite 3s',
    },
  },
  {
    // green to violet — top-right, subtle holographic hint
    style: {
      width: 460, height: 460,
      top: -60, right: '8%',
      background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.18) 0%, rgba(168,85,247,0.1) 55%, transparent 100%)',
      filter: 'blur(78px)',
      animation: 'blobD 31s ease-in-out infinite 1.5s',
    },
  },
];

export default function HologramBackground() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      {BLOBS.map((b, i) => (
        <div key={i} style={{ position: 'absolute', borderRadius: '50%', ...b.style }} />
      ))}
    </div>
  );
}
