import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         200,
        height:         64,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        '0 40px',
        background:     'rgba(241,236,223,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom:   '1px solid rgba(22,101,52,0.13)',
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <span
          style={{
            fontFamily:  'var(--font-orbitron)',
            fontSize:    15,
            fontWeight:  900,
            letterSpacing: '0.18em',
            color:       'var(--green)',
          }}
        >
          MARKET OS
        </span>
      </Link>
    </nav>
  );
}
