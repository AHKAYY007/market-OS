'use client';

const G = '#166534';

const MESSAGES = [
  { from: 'bot',  text: 'Inventory updated: Rice +10 units (bought at 5,000)', time: '09:41' },
  { from: 'user', text: 'What is my rice stock?',                          time: '09:42' },
  { from: 'bot',  text: 'Rice: 42 units available. Reorder suggested at 20.', time: '09:42' },
  { from: 'user', text: 'Add expense: transport 1,200',                    time: '09:43' },
  { from: 'bot',  text: 'Expense recorded. Today expenses: 3,400.',        time: '09:43' },
];

const phone: React.CSSProperties = {
  width:        300,
  borderRadius: 40,
  overflow:     'hidden',
  border:       '7px solid #111',
  background:   '#111',
  boxShadow:    '0 32px 80px rgba(0,0,0,0.35)',
  flexShrink:   0,
};

const statusBar: React.CSSProperties = {
  background:     '#111',
  height:         28,
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'space-between',
  padding:        '0 20px',
};

const header: React.CSSProperties = {
  background: G,
  padding:    '12px 16px',
  display:    'flex',
  alignItems: 'center',
  gap:        12,
};

const avatar: React.CSSProperties = {
  width:          36,
  height:         36,
  borderRadius:   '50%',
  background:     'rgba(255,255,255,0.2)',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  flexShrink:     0,
};

const chatWindow: React.CSSProperties = {
  background: '#e5ddd5',
  padding:    '10px 10px',
  minHeight:  300,
  display:    'flex',
  flexDirection: 'column',
  gap:        8,
};

const inputBar: React.CSSProperties = {
  background: '#f0f0f0',
  padding:    '10px 10px',
  display:    'flex',
  alignItems: 'center',
  gap:        8,
};

const sendBtn: React.CSSProperties = {
  width:          32,
  height:         32,
  borderRadius:   '50%',
  background:     G,
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  flexShrink:     0,
};

const homeBar: React.CSSProperties = {
  background:     '#111',
  height:         20,
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
};

export default function WhatsAppMockup() {
  return (
    <div style={phone}>

      {/* Status bar */}
      <div style={statusBar}>
        <span style={{ color: '#fff', fontSize: 9, fontWeight: 500 }}>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <div style={{ width: 12, height: 6, borderRadius: 2, background: 'rgba(255,255,255,0.6)' }} />
          <div style={{ width: 4,  height: 6, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </div>

      {/* Header */}
      <div style={header}>
        <div style={avatar}>
          <span style={{ color: '#fff', fontSize: 9, fontWeight: 900, fontFamily: 'var(--font-orbitron)', letterSpacing: '0.05em' }}>MO</span>
        </div>
        <div>
          <p style={{ color: '#fff', fontSize: 13, fontWeight: 600, lineHeight: 1, marginBottom: 3 }}>Market OS</p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10 }}>Online · business assistant</p>
        </div>
      </div>

      {/* Chat */}
      <div style={chatWindow}>
        {MESSAGES.map((msg, i) => {
          const isUser = msg.from === 'user';
          const bubble: React.CSSProperties = {
            maxWidth:     '78%',
            padding:      '7px 10px 5px',
            background:   isUser ? '#dcf8c6' : '#ffffff',
            borderRadius: isUser ? '12px 2px 12px 12px' : '2px 12px 12px 12px',
            boxShadow:    '0 1px 2px rgba(0,0,0,0.1)',
            whiteSpace:   'pre-line',
            fontSize:     11.5,
            lineHeight:   1.5,
            color:        '#111',
            animation:    'chatIn 0.4s cubic-bezier(0.22,1,0.36,1) both',
            animationDelay: `${0.35 + i * 0.22}s`,
          };
          return (
            <div key={i} style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
              <div style={bubble}>
                {msg.text}
                <span style={{ display: 'block', textAlign: 'right', fontSize: 8.5, color: '#999', marginTop: 2, lineHeight: 1 }}>
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', animation: 'chatIn 0.4s both', animationDelay: `${0.35 + MESSAGES.length * 0.22}s` }}>
          <div style={{ background: '#fff', borderRadius: '2px 12px 12px 12px', padding: '9px 12px', display: 'flex', gap: 5, alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            {[0, 1, 2].map(j => (
              <div
                key={j}
                style={{
                  width:          6,
                  height:         6,
                  borderRadius:   '50%',
                  background:     '#aaa',
                  animation:      'bounceDot 1.1s ease-in-out infinite',
                  animationDelay: `${j * 0.18}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={inputBar}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '8px 14px', fontSize: 10.5, color: '#aaa' }}>
          Type a command...
        </div>
        <div style={sendBtn}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Home indicator */}
      <div style={homeBar}>
        <div style={{ width: 80, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
      </div>

    </div>
  );
}
