import React, { useState } from 'react';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        .card {
          animation: float 3s ease-in-out infinite;
        }
        .glow-box {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div style={{ width: '100%', maxWidth: '800px' }}>
        {/* ヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #a78bfa, #ec4899, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            Welcome
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '18px' }}>Next-Gen React Experience</p>
        </div>

        {/* メインカード */}
        <div className="card" style={{
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
        }}>
          {/* フィーチャーグリッド */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '32px'
          }}>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="glow-box"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))',
                  borderRadius: '8px',
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>✨</div>
                <p style={{ color: '#e5e7eb', fontWeight: 'bold' }}>Feature {item}</p>
              </div>
            ))}
          </div>

          <p style={{
            color: '#d1d5db',
            textAlign: 'center',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Reactの力で、美しく、高速で、インタラクティブなWebアプリケーションを構築できます。
          </p>

          {/* ボタン */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: '100%',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 'bold',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              background: isHovered
                ? 'linear-gradient(90deg, #a855f7, #ec4899)'
                : 'linear-gradient(90deg, #9333ea, #db2777)',
              boxShadow: isHovered ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
          >
            {isHovered ? '🚀 Let\'s Go!' : 'Get Started'}
          </button>
        </div>

        {/* フッター */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>
            Built with React • Styled with Inline Styles
          </p>
        </div>
      </div>
    </div>
  );
}