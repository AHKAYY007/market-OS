import Navbar from '../components/Navbar';
import PricingCard from '../PricingCard';
import HologramBackground from '../components/HologramBackground';
import HologramLines from '../components/HologramLines';

const PLANS = [
  {
    name:     'STARTER',
    price:    '0',
    period:   'month',
    tagline:  'Everything you need to manage your business through WhatsApp.',
    badge:    undefined,
    featured: false,
    cta:      'Get Started',
    features: [
      '1 connected WhatsApp number',
      'Up to 200 transactions/month',
      'Basic inventory tracking',
      'Manual transaction verification',
      'Community support',
    ],
  },
  {
    name:     'GROWTH',
    price:    '49',
    period:   'month',
    tagline:  'Tools to scale operations and get real business insights.',
    badge:    'MOST POPULAR',
    featured: true,
    cta:      'Start Now',
    features: [
      '3 connected WhatsApp numbers',
      'Unlimited transactions',
      'Automated data extraction from images and voice notes',
      'Business performance reports',
      'Priority support',
    ],
  },
  {
    name:     'ENTERPRISE',
    price:    null,
    period:   'month',
    tagline:  'Custom solutions for larger merchants and partners.',
    badge:    undefined,
    featured: false,
    cta:      'Contact Sales',
    features: [
      'Unlimited WhatsApp numbers',
      'Dedicated onboarding',
      'Custom integrations and webhooks',
      'SLA-backed uptime guarantee',
      'Dedicated account manager',
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
        <div className="max-w-[90%]" style={{ position: 'relative', margin: '0 auto', paddingTop: '120px' }}>
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
              No hidden fees. No lock-ins. Pick the plan that fits your business size and scale up any time.
            </p>
          </div>

          {/* Cards grid */}
            <div className="relative z-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
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
