import { Link } from 'react-router-dom';
import { Clapperboard, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Clapperboard size={20} color="#f59e0b" />
            <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '0.06em', color: '#f8fafc' }}>
              SCENE<span style={{ color: '#f59e0b' }}>WORKS</span>
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', lineHeight: 1.8 }}>
            直感と人脈が、地方の新たなシーンを創る。<br />
            エンターテインメントの力で地域を動かす、次世代型プロデュース企業。
          </p>
        </div>

        <div>
          <h4 style={{ color: '#f8fafc', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>サービス</h4>
          {[
            { path: '/services', label: 'ロケコーディネート' },
            { path: '/services', label: 'キャスティング' },
            { path: '/services', label: '地域ブランディング' },
            { path: '/services', label: 'Web・SNS運用' },
          ].map(item => (
            <Link key={item.label} to={item.path} style={{ display: 'block', textDecoration: 'none', color: '#64748b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ color: '#f8fafc', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>企業情報</h4>
          {[
            { path: '/about', label: 'ビジョン・代表メッセージ' },
            { path: '/model', label: 'ビジネスモデル' },
            { path: '/partners', label: 'パートナー企業' },
            { path: '/company', label: '会社概要' },
          ].map(item => (
            <Link key={item.label} to={item.path} style={{ display: 'block', textDecoration: 'none', color: '#64748b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ color: '#f8fafc', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>お問い合わせ</h4>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <MapPin size={14} style={{ marginTop: '0.15rem', flexShrink: 0 }} />
            <span style={{ fontSize: '0.8rem' }}>宮崎県宮崎市</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Mail size={14} />
            <span style={{ fontSize: '0.8rem' }}>info@sceneworks.jp</span>
          </div>
          <Link
            to="/services"
            style={{
              textDecoration: 'none',
              background: '#f59e0b',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '0.8rem',
              padding: '0.6rem 1.2rem',
              borderRadius: '0.5rem',
              display: 'inline-block',
            }}
          >
            無料相談を予約
          </Link>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 1.5rem', maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.75rem', margin: 0 }}>© 2026 SCENEWORKS INC. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/company" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.75rem' }}>特定商取引法に基づく表記</Link>
          <Link to="/company" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.75rem' }}>プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  );
}
