import ParallelogramButton from './ParallelogramButton';

interface Plan {
  name:      string;
  price:     string | null;
  period:    string;
  tagline:   string;
  features:  string[];
  cta:       string;
  featured?: boolean;
  badge?:    string;
}

const Check = ({ light }: { light?: boolean }) => (
  <svg
    width="13" height="13" viewBox="0 0 12 12" fill="none"
    style={{ flexShrink: 0, marginTop: 1 }}
  >
    <path
      d="M2 6l3 3 5-5"
      stroke={light ? '#ffffff' : '#166534'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingCard({ plan, delay }: { plan: Plan; delay: number }) {
  const f = plan.featured;

  return (
    <div
      className="animate-fade-in-up"
      style={{
        position:      'relative',
        display:       'flex',
        flexDirection: 'column',
        animationDelay: `${delay}s`,
        background:    f ? '#166534' : 'var(--cream)',
        padding:       '36px 28px 28px',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position:   'absolute',
        top:        0, left: 0, right: 0,
        height:     2,
        background: f ? 'rgba(255,255,255,0.3)' : '#166534',
        opacity:    f ? 1 : 0.6,
      }} />

      {/* Badge */}
      {plan.badge && (
        <span style={{
          fontSize:      8,
          fontWeight:    700,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color:         f ? 'rgba(255,255,255,0.55)' : '#166534',
          marginBottom:  10,
          display:       'block',
        }}>
          {plan.badge}
        </span>
      )}

      {/* Plan name */}
      <p style={{
        fontFamily:    'var(--font-orbitron)',
        fontSize:      11,
        fontWeight:    900,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color:         f ? '#ffffff' : '#166534',
        marginBottom:  16,
      }}>
        {plan.name}
      </p>

      {/* Price */}
      <div style={{ marginBottom: 8, display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: 'var(--font-orbitron)',
          fontSize:   plan.price === null ? 32 : 52,
          fontWeight: 900,
          lineHeight: 1,
          color:      f ? '#ffffff' : '#1a1a1a',
        }}>
          {plan.price === null ? 'CUSTOM' : plan.price === '0' ? 'FREE' : `$${plan.price}`}
        </span>
        {plan.price !== '0' && plan.price !== null && (
          <span style={{ fontSize: 11, color: f ? 'rgba(255,255,255,0.55)' : '#888' }}>
            / {plan.period}
          </span>
        )}
      </div>

      {/* Tagline */}
      <p style={{
        fontSize:     12,
        lineHeight:   1.75,
        color:        f ? 'rgba(255,255,255,0.65)' : '#5a5a52',
        marginBottom: 20,
      }}>
        {plan.tagline}
      </p>

      {/* Divider */}
      <div style={{
        height:       1,
        background:   f ? 'rgba(255,255,255,0.15)' : 'rgba(22,101,52,0.18)',
        marginBottom: 24,
      }} />

      {/* Feature list */}
      <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {plan.features.map((feat, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12, lineHeight: 1.55, color: f ? 'rgba(255,255,255,0.82)' : '#444' }}>
            <Check light={f} />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <ParallelogramButton
        variant="outline"
        tone={f ? 'light' : 'dark'}
        width={130}
        height={36}
        slantRatio={30 / 55}
      >
        {plan.cta}
      </ParallelogramButton>
    </div>
  );
}
