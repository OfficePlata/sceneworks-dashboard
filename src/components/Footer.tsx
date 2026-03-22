import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0d0c0a', color: '#6e6b62', borderTop: '1px solid #252219' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '4rem 2rem 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem' }}>

        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            <span style={{ color: '#f0ede5' }}>SCENE</span>
            <span style={{ color: '#c4a35a' }}>WORKS</span>
          </div>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.9, color: '#6e6b62' }}>
            直感と人脈が、<br />地方の新たなシーンを創る。
          </p>
        </div>

        <div>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: '#c4a35a', marginBottom: '1rem', textTransform: 'uppercase' }}>Services</p>
          {['ロケコーディネート', 'キャスティング', '地域ブランディング', 'Web・SNS運用'].map(t => (
            <Link key={t} to="/services" style={{ display: 'block', textDecoration: 'none', color: '#6e6b62', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{t}</Link>
          ))}
        </div>

        <div>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: '#c4a35a', marginBottom: '1rem', textTransform: 'uppercase' }}>Company</p>
          {[
            { path: '/about', label: 'ビジョン・代表' },
            { path: '/model', label: 'ビジネスモデル' },
            { path: '/partners', label: 'パートナー' },
            { path: '/company', label: '会社概要' },
          ].map(item => (
            <Link key={item.label} to={item.path} style={{ display: 'block', textDecoration: 'none', color: '#6e6b62', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{item.label}</Link>
          ))}
        </div>

        <div>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: '#c4a35a', marginBottom: '1rem', textTransform: 'uppercase' }}>Contact</p>
          <p style={{ fontSize: '0.8rem', color: '#6e6b62', marginBottom: '0.5rem' }}>宮崎県宮崎市</p>
          <p style={{ fontSize: '0.8rem', color: '#6e6b62', marginBottom: '1.5rem' }}>info@sceneworks.jp</p>
          <Link to="/services" style={{
            textDecoration: 'none',
            display: 'inline-block',
            border: '1px solid #c4a35a',
            color: '#c4a35a',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            padding: '0.55rem 1.2rem',
          }}>
            無料相談を予約
          </Link>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #252219', maxWidth: '1360px', margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.72rem', color: '#47443d' }}>© 2026 SCENEWORKS INC. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/company" style={{ textDecoration: 'none', color: '#47443d', fontSize: '0.72rem' }}>特定商取引法に基づく表記</Link>
          <Link to="/company" style={{ textDecoration: 'none', color: '#47443d', fontSize: '0.72rem' }}>プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  );
}
