'use client';

import { useEffect, useRef } from 'react';
import ParallelogramButton from './ParallelogramButton';

const PAD = 10;
const C   = 5;
const NW  = 200;
const NH  = 45;
const DS  = 10; // extra depth the diagonal drops below the notch bottom

export default function BorderFrame() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    function draw() {
      if (!pathRef.current) return;

      const W = window.innerWidth;
      const H = window.innerHeight;

      const dX = C * 6;
      const dY = NH + DS;   // diagonal drops NH + DS pixels total
      const dLen = Math.sqrt(dX * dX + dY * dY);
      const nX = dX / dLen;
      const nY = dY / dLen;

      const bot = PAD + NH + DS; // y where diagonal lands and main top line sits

      const d = `
        M ${PAD},${PAD + C}
        A ${C},${C} 0 0 1 ${PAD + C},${PAD}
        L ${PAD + NW - C},${PAD}
        Q ${PAD + NW},${PAD} ${PAD + NW + nX * C},${PAD + nY * C}
        L ${PAD + NW + dX - nX * C},${PAD + dY - nY * C}
        Q ${PAD + NW + dX},${bot} ${PAD + NW + dX + C},${bot}
        L ${W - PAD - C},${bot}
        A ${C},${C} 0 0 1 ${W - PAD},${bot + C}
        L ${W - PAD},${H - PAD - C}
        A ${C},${C} 0 0 1 ${W - PAD - C},${H - PAD}
        L ${PAD + C},${H - PAD}
        A ${C},${C} 0 0 1 ${PAD},${H - PAD - C}
        Z
      `;

      pathRef.current.setAttribute('d', d);
    }

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return (
    <>
      {/* SVG border frame */}
      <svg
        className="fixed inset-0 w-screen h-screen pointer-events-none z-50"
        style={{ animation: 'glowBorder 4s ease-in-out infinite' }}
      >
        <path
          ref={pathRef}
          fill="none"
          stroke="#166534"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* MARKET OS wordmark — sits inside the notch tab */}
      <div
        className="fixed z-50 flex items-center justify-center pointer-events-none"
        style={{ top: PAD, left: PAD, width: NW, height: NH }}
      >
        <span
          className="text-base font-bold tracking-[0.2em] text-[#171717] text-[#166534]"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          MARKET OS
        </span>
      </div>

      {/* PRICING nav button — left edge traces the border diagonal */}
      <div
        className="fixed z-50"
        style={{ top: PAD, left: PAD + NW }}
      >
        <ParallelogramButton
          variant="outline"
          width={110}
          height={NH + DS}
          slantRatio={C * 6 / (NH + DS)}
        >
          Pricing
        </ParallelogramButton>
      </div>
    </>
  );
}
