'use client';

const CORNER = 5;

interface Props {
  children: React.ReactNode;
  variant?:    'outline' | 'fill';
  tone?:       'dark' | 'light';   // 'light' = white strokes/text (for use on green backgrounds)
  width?:      number;
  height?:     number;
  slantRatio?: number;
  onClick?:    () => void;
}

export default function ParallelogramButton({
  children,
  variant    = 'outline',
  tone       = 'dark',
  width      = 180,
  height     = 38,
  slantRatio = 30 / 55,
  onClick,
}: Props) {
  const s      = height * slantRatio;
  const totalW = width + s;
  const isFill = variant === 'fill';
  const color  = tone === 'light' ? '#ffffff' : '#166534';

  const dLen = Math.sqrt(s * s + height * height);
  const nx   = s / dLen;
  const ny   = height / dLen;

  const d = `
    M ${nx * CORNER},${ny * CORNER}
    Q 0,0 ${CORNER},0
    L ${width - CORNER},0
    Q ${width},0 ${width + nx * CORNER},${ny * CORNER}
    L ${totalW - nx * CORNER},${height - ny * CORNER}
    Q ${totalW},${height} ${totalW - CORNER},${height}
    L ${s + CORNER},${height}
    Q ${s},${height} ${s - nx * CORNER},${height - ny * CORNER}
    Z
  `;

  return (
    <button
      onClick={onClick}
      className="group relative cursor-pointer active:scale-[0.97] transition-transform duration-150"
      style={{ width: totalW, height }}
    >
      <svg
        className="absolute inset-0 transition-all duration-300 group-hover:opacity-80"
        width={totalW}
        height={height}
        viewBox={`0 0 ${totalW} ${height}`}
      >
        <path
          d={d}
          fill={isFill ? color : 'none'}
          stroke={color}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-[0.15em] uppercase"
        style={{
          fontFamily:  'var(--font-orbitron)',
          color:       isFill ? (tone === 'light' ? '#166534' : '#ffffff') : color,
          paddingLeft: `${s * 0.4}px`,
        }}
      >
        {children}
      </span>
    </button>
  );
}
