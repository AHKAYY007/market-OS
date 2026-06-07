import Navbar from '../components/Navbar';
import PricingCard from '../PricingCard';
import HologramBackground from '../components/HologramBackground';
import HologramLines from '../components/HologramLines';

const PLANS = [
  {
    name:     'STARTER',
    price:    '0',
    period:   'month',
    tagline:  'Everything you need to begin trading through WhatsApp.',
    badge:    undefined,
    featured: false,
    cta:      'Get Started',
    features: [
      '1 connected WhatsApp number',
      '20 trade alerts per day',
      'Basic market signals',
      '5 active watchlists',
      'Manual trade execution',
      'Community support',
    ],
  },
  {
    name:     'TRADER',
    price:    '49',
    period:   'month',
    tagline:  'Advanced tools for traders who move with the market.',
    badge:    'MOST POPULAR',
    featured: true,
    cta:      'Start Trading',
    features: [
      '3 connected WhatsApp numbers',
      'Unlimited trade alerts',
      'Advanced market signals',
      'Unlimited watchlists',
      'Portfolio performance tracker',
      'Auto-execution on triggers',
      'REST API access',
      'Priority support',
    ],
  },
  {
    name:     'ENTERPRISE',
    price:    null,
    period:   'month',
    tagline:  'Custom infrastructure for institutions and trading desks.',
    badge:    undefined,
    featured: false,
    cta:      'Contact Sales',
    features: [
      'Unlimited WhatsApp numbers',
      'Unlimited everything',
      'AI-powered signal engine',
      'Custom alert rule builder',
      'Team roles and collaboration',
      'Dedicated account manager',
      'Custom integrations and webhooks',
      'SLA-backed uptime guarantee',
    ],
  },
];

export default function PricingPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--cream)' }}>
      <HologramBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* Content — starts below fixed navbar */}
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '120px 48px 96px' }}>
          <HologramLines />

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 1 }}>
            <span
              className="animate-fade-in-up"
              style={{
                display:       'inline-block',
                fontSize:      8,
                fontWeight:    700,
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                color:         'var(--green)',
                border:        '1px solid rgba(22,101,52,0.35)',
                padding:       '5px 12px',
                marginBottom:  24,
                animationDelay: '0.05s',
              }}
            >
              Pricing
            </span>

            <h1
              className="animate-fade-in-up"
              style={{
                fontFamily:    'var(--font-orbitron)',
                fontSize:      'clamp(2rem, 4.5vw, 3.4rem)',
                fontWeight:    900,
                color:         '#1a1a1a',
                lineHeight:    1.04,
                marginBottom:  20,
                animationDelay: '0.12s',
              }}
            >
              SIMPLE, TRANSPARENT<br />PRICING.
            </h1>

            <p
              className="animate-fade-in-up"
              style={{
                fontSize:      13.5,
                lineHeight:    1.8,
                color:         'var(--muted)',
                maxWidth:      420,
                margin:        '0 auto',
                animationDelay: '0.2s',
              }}
            >
              No hidden fees. No lock-ins. Pick the plan that fits your trading volume
              and scale up any time.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              position:             'relative',
              zIndex:               1,
              display:              'grid',
              gridTemplateColumns:  'repeat(3, 1fr)',
              gap:                  1,
              background:           'rgba(22,101,52,0.15)',
            }}
          >
            {PLANS.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} delay={0.28 + i * 0.12} />
            ))}
          </div>

          {/* Trial note */}
          <p
            className="animate-fade-in-up"
            style={{
              textAlign:     'center',
              fontSize:      10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         '#aaa',
              marginTop:     40,
              position:      'relative',
              zIndex:        1,
              animationDelay: '0.7s',
            }}
          >
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
