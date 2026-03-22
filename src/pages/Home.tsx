import { Link } from 'react-router-dom';
import { ArrowRight, Users, CalendarDays, ShoppingBag, Star, Building2, Heart, TrendingUp } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

function MetricCard({ end, suffix, label, sub }: { end: number; suffix: string; label: string; sub: string }) {
  const { count, ref } = useCounter(end, 2000);
  return (
    <div
      ref={ref}
      style={{
        background: '#fff',
        borderRadius: '1rem',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        border: '1px solid #f1f5f9',
      }}
    >
      <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
        {count.toLocaleString()}<span style={{ fontSize: '1.2rem', color: '#f59e0b' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', marginTop: '0.5rem' }}>{label}</div>
      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{sub}</div>
    </div>
  );
}

const audiences = [
  {
    icon: <Building2 size={28} color="#2563eb" />,
    bg: '#eff6ff',
    tag: '金融機関・投資家向け',
    tagColor: '#2563eb',
    title: '数字で証明される収益モデル',
    body: '高利益率の物販・イベントと安定ストック収益のハイブリッド構造。Lark等DX活用による低コスト体質と、代表の人脈資産を数値化して提示します。',
    link: '/model',
    linkLabel: 'ビジネスモデルを見る',
  },
  {
    icon: <TrendingUp size={28} color="#10b981" />,
    bg: '#ecfdf5',
    tag: '自治体・企業 (B2B)',
    tagColor: '#10b981',
    title: '地方課題を、エンタメで解決',
    body: '「地方に人が集まらない」「自社ブランドが弱い」という課題に、ロケコーディネートやキャスティングで具体的な経済効果を生み出します。',
    link: '/works',
    linkLabel: '実績を見る',
  },
  {
    icon: <Heart size={28} color="#e63946" />,
    bg: '#fff1f2',
    tag: 'エンドユーザー・ファン',
    tagColor: '#e63946',
    title: '今すぐ手に入れる、熱狂の一品',
    body: 'ボンボンドロップシールをはじめとしたSCENEWORKS限定グッズ。LINEで友だち追加するだけで最新情報をゲット。',
    link: '/store',
    linkLabel: 'ストアへ',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Gold accent lines */}
        <div style={{ position: 'absolute', top: '20%', left: '-5%', width: '35%', height: '2px', background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', bottom: '25%', right: '-5%', width: '35%', height: '2px', background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)', opacity: 0.4 }} />

        <div style={{ position: 'relative', maxWidth: '860px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#f59e0b',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            marginBottom: '2rem',
          }}>
            地方×エンターテインメント × DX
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: '#f8fafc',
            lineHeight: 1.25,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            直感と人脈が、<br />
            <span style={{ color: '#f59e0b' }}>地方の新たなシーンを創る。</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#94a3b8', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            SCENEWORKSは、芸能界での経験と独自ネットワークを活かし、<br />
            キャスティング・ロケコーディネート・地域ブランディングで<br />
            地方に経済的なインパクトをもたらすプロデュース企業です。
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/services"
              style={{
                textDecoration: 'none',
                background: '#f59e0b',
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.85rem 2rem',
                borderRadius: '0.625rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              無料相談を予約する <ArrowRight size={18} />
            </Link>
            <Link
              to="/works"
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.08)',
                color: '#f8fafc',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.85rem 2rem',
                borderRadius: '0.625rem',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              実績を見る
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: '#475569' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, #475569, transparent)' }} />
        </div>
      </section>

      {/* Trust Metrics */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>TRUST METRICS</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>実績が証明する、信頼の指標</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <MetricCard end={200} suffix="名+" label="独自タレントネットワーク" sub="芸能界の第一線とのパイプ" />
            <MetricCard end={50} suffix="件+" label="年間コーディネート実績" sub="ロケ・イベント・キャスティング累計" />
            <MetricCard end={30000} suffix="個+" label="グッズ累計販売数" sub="ボンボンドロップシール等" />
            <MetricCard end={5000} suffix="名+" label="過去最大動員記録" sub="単一イベント来場者数" />
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>FOR EVERYONE</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>あなたのための、SCENEWORKS</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.95rem' }}>3つのターゲット層それぞれに最短の価値提供を設計しています</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {audiences.map((a) => (
              <div
                key={a.tag}
                style={{
                  background: '#fff',
                  border: '1px solid #f1f5f9',
                  borderRadius: '1rem',
                  padding: '2rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {a.icon}
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: a.tagColor, letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{a.tag}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>{a.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.8, flex: 1 }}>{a.body}</p>
                <Link
                  to={a.link}
                  style={{
                    marginTop: '1.5rem',
                    textDecoration: 'none',
                    color: a.tagColor,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {a.linkLabel} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Teaser */}
      <section style={{ background: '#0f172a', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>OUR SERVICES</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.3, marginBottom: '1.25rem' }}>
                エンタメの力で、<br />地方を動かす4つのサービス
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '2rem' }}>
                キャスティングから地域ブランディングまで、SCENEWORKSは一貫したプロデュース力で課題を解決します。
              </p>
              <Link
                to="/services"
                style={{
                  textDecoration: 'none',
                  background: '#f59e0b',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '0.625rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                事業内容を詳しく見る <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: <Star size={20} color="#f59e0b" />, title: 'キャスティング', sub: 'タレント・俳優・モデル手配' },
                { icon: <CalendarDays size={20} color="#10b981" />, title: 'ロケコーディネート', sub: 'ロケ地選定・撮影管理' },
                { icon: <Users size={20} color="#2563eb" />, title: '地域ブランディング', sub: 'イベント企画・地域PR' },
                { icon: <ShoppingBag size={20} color="#e63946" />, title: 'Web・SNS運用', sub: 'ストック型収益の構築' },
              ].map((s) => (
                <div key={s.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ marginBottom: '0.75rem' }}>{s.icon}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.25rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            地方を変えるプロジェクト、一緒に始めませんか？
          </h2>
          <p style={{ color: 'rgba(15,23,42,0.7)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            まずは無料の個別相談会でお気軽にご相談ください。Larkカレンダーで即日予約可能です。
          </p>
          <Link
            to="/services"
            style={{
              textDecoration: 'none',
              background: '#0f172a',
              color: '#f8fafc',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '1rem 2.5rem',
              borderRadius: '0.625rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            無料相談を予約する <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
