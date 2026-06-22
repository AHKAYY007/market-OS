import Link from 'next/link';
import Navbar from './components/Navbar';
import WhatsAppMockup from './components/WhatsAppMockup';
import HologramBackground from './components/HologramBackground';
import HologramLines from './components/HologramLines';

const FEATURES = [
  {
    label: 'Inventory Management',
    desc: 'Update stock using text, voice or images; auto-extract handwritten records.',
  },
  {
    label: 'Sales & Expenses',
    desc: 'Record transactions automatically from chat conversations.',
  },
  {
    label: 'Real-time Tracking',
    desc: 'Live stock and sales tracking with low-friction updates.',
  },
  {
    label: 'Business Insights',
    desc: 'AI-generated profit/loss and performance insights delivered in chat.',
  },
];

const STATS = [
  { value: '12,000+', label: 'Active Merchants' },
  { value: '98M+',    label: 'Interactions Processed' },
  { value: '99.9%',   label: 'Uptime' },
  { value: '$2.4B+',  label: 'Transactions Recorded' },
];

export default function Home() {
  const whatsappLink =
    "https://wa.me/?text=Hello%20Market%20OS%20team%20—%20I%20want%20to%20connect%20my%20business%20and%20start%20taking%20inventory.";

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--cream)' }}>
      <HologramBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* ── Hero ── */}
        <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64 }}>
          <div className="hero-inner" style={{ width: '100%', maxWidth: 1152, margin: '0 auto', padding: '80px 48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 72, flexWrap: 'wrap', justifyContent: 'center' }}>

              {/* Left: copy */}
              <div>
                <span
                  className="animate-fade-in-up"
                  style={{
                    animationDelay: '0.05s',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.5em',
                    textTransform: 'uppercase', color: 'var(--green)',
                    border: '1px solid rgba(22,101,52,0.3)',
                    padding: '6px 12px', marginBottom: 32,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                  WhatsApp Business OS
                </span>

                <h1
                  className="animate-fade-in-up"
                  style={{
                    fontFamily:    'var(--font-orbitron)',
                    fontSize:      'clamp(2.6rem, 4.5vw, 4.4rem)',
                    fontWeight:    900,
                    lineHeight:    1.0,
                    letterSpacing: '-0.02em',
                    color:         'var(--ink)',
                    marginBottom:  32,
                    animationDelay: '0.14s',
                  }}
                >
                  MANAGE YOUR<br />
                  <span style={{ color: 'var(--green)' }}>BUSINESS.</span><br />
                  IN YOUR CHAT.
                </h1>

                <p
                  className="animate-fade-in-up"
                  style={{
                    fontSize: 14.5, lineHeight: 1.9, color: 'var(--muted)',
                    maxWidth: '38ch', marginBottom: 40,
                    animationDelay: '0.24s',
                  }}
                >
                  MarketOS lets small businesses update inventory, record sales and expenses, and get actionable insights via natural language, voice notes or images — all in WhatsApp. No new apps or training required.
                </p>

                <div
                  className="animate-fade-in-up hero-cta"
                  style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', animationDelay: '0.34s' }}
                >
                  <Link
                    href="/pricing"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      height: 48, padding: '0 32px',
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: '#fff',
                      background: 'var(--green)',
                      boxShadow: '0 4px 24px rgba(22,101,52,0.28)',
                      textDecoration: 'none',
                      transition: 'opacity .2s',
                    }}
                  >
                    Start for Free
                  </Link>
                  <Link
                    href="/pricing"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      height: 48, padding: '0 24px',
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--green)',
                      border: '1px solid rgba(22,101,52,0.35)',
                      textDecoration: 'none',
                      transition: 'background .2s',
                    }}
                  >
                    Learn How It Works
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: phone mockup */}
              <div
                className="animate-slide-right"
                style={{ flex: '1 1 320px', minWidth: 240, maxWidth: 340, animationDelay: '0.18s' }}
              >
                <WhatsAppMockup />
              </div>

            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="stats-section" style={{ position: 'relative', borderTop: '1px solid rgba(22,101,52,0.12)', borderBottom: '1px solid rgba(22,101,52,0.12)', background: 'rgba(241,236,223,0.7)', backdropFilter: 'blur(8px)' }}>
          <HologramLines />
          <div className="stats-grid" style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                className="animate-fade-in-up"
                style={{
                  padding: '40px 24px',
                  textAlign: 'center',
                  borderRight: i < 3 ? '1px solid rgba(22,101,52,0.1)' : 'none',
                  animationDelay: `${0.08 + i * 0.07}s`,
                }}
              >
                <p style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 900, color: 'var(--green)', marginBottom: 6 }}>
                  {s.value}
                </p>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section className="features-section" style={{ position: 'relative', padding: '112px 0' }}>
          <HologramLines />
          <div className="features-grid" style={{ position: 'relative', zIndex: 1, maxWidth: 1024, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(22,101,52,0.14)' }}>

            <div style={{ textAlign: 'center', marginBottom: 64, paddingTop: 40 }}>
              <p className="animate-fade-in-up" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 20 }}>
                Why Market OS
              </p>
              <h2
                className="animate-fade-in-up"
                style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1.06, animationDelay: '0.1s' }}
              >
                EVERYTHING YOU NEED.<br />INSIDE ONE CHAT.
              </h2>
            </div>

            {/* 2x2 card grid — gap used as border */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(22,101,52,0.14)' }}>
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="feature-card animate-fade-in-up"
                  style={{ padding: 40, cursor: 'default', animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <div className="f-line" style={{ width: 28, height: 1.5, background: 'var(--green)', marginBottom: 24 }} />
                  <h3 className="f-title" style={{ fontFamily: 'var(--font-orbitron)', fontSize: 11.5, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 14 }}>
                    {f.label}
                  </h3>
                  <p className="f-desc" style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--muted)' }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section" style={{
          position: 'relative', padding: '112px 32px', textAlign: 'center', background: '#0c0c0a',
          backgroundImage: 'linear-gradient(rgba(22,101,52,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(22,101,52,0.07) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}>
          <HologramLines color="#22c55e" opacity={2.5} />
          <div className="cta-inner" style={{ position: 'relative', zIndex: 1 }}>
          <p className="animate-fade-in-up" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(22,101,52,0.65)', marginBottom: 24 }}>
            Get Started
          </p>
          <h2
            className="animate-fade-in-up"
            style={{ fontFamily: 'var(--font-orbitron)', fontSize: 'clamp(1.8rem, 3.8vw, 3rem)', fontWeight: 900, color: '#fff', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.06, animationDelay: '0.1s' }}
          >
            MANAGE YOUR BUSINESS THROUGH WHATSAPP TODAY.
          </h2>
          <Link
            href="/pricing"
            className="animate-fade-in-up"
            style={{
              display: 'inline-flex', alignItems: 'center',
              height: 52, padding: '0 40px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#fff',
              background: 'var(--green)',
              boxShadow: '0 0 50px rgba(22,101,52,0.45)',
              textDecoration: 'none',
              animationDelay: '0.2s',
            }}
          >
            View Pricing Plans
          </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
