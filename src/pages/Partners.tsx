import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Printer, Code2, PackageCheck, Award } from 'lucide-react';

export default function Partners() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>STRATEGIC PARTNERS</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>戦略的パートナーシップ</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>
            SCENEWORKSが単独で動くのではなく、九州の信頼できる専門パートナーと連携することで、<br />
            より強固なサービス品質と供給体制を実現しています。
          </p>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* プリコム */}
          <div style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ background: 'linear-gradient(90deg, #0f172a, #1e293b)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Printer size={22} color="#f59e0b" />
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 600, margin: 0 }}>PARTNER 01 ／ 宮崎県</p>
                <h2 style={{ color: '#f8fafc', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>株式会社プリコム</h2>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f59e0b', marginBottom: '0.75rem' }}>OVERVIEW</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>製造・印刷の高品質サプライヤー</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.9 }}>
                  宮崎県を拠点とする製造・印刷の専門企業。SCENEWORKSが手がけるグッズ・ノベルティの製造パートナーとして、品質管理から納期管理まで一貫したサポートを提供。
                </p>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.9, marginTop: '0.75rem' }}>
                  特に「ボンボンドロップシール」をはじめとした物販商品の製造を担い、SCENEWORKSの物販収益の安全性を担保する重要なパートナーです。
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f59e0b', marginBottom: '0.75rem' }}>STRENGTHS & CREDENTIALS</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: <ShieldCheck size={16} color="#10b981" />, text: 'クレーム率 3%以下の高品質管理体制', highlight: true },
                    { icon: <PackageCheck size={16} color="#2563eb" />, text: '小ロット〜大量生産まで柔軟な対応力' },
                    { icon: <Award size={16} color="#f59e0b" />, text: '地域密着による迅速な納期対応' },
                    { icon: <Printer size={16} color="#94a3b8" />, text: 'ステッカー・グッズ・販促物の一括製造' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      background: item.highlight ? '#ecfdf5' : '#f8fafc',
                      border: `1px solid ${item.highlight ? '#a7f3d0' : '#f1f5f9'}`,
                    }}>
                      <div style={{ flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</div>
                      <span style={{ fontSize: '0.825rem', color: '#374151', fontWeight: item.highlight ? 700 : 400 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', padding: '1.25rem 2rem', background: '#f8fafc', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>連携領域：</span>
              {['グッズ製造', '印刷物', 'ノベルティ', '品質保証'].map(tag => (
                <span key={tag} style={{ background: '#fff', border: '1px solid #e2e8f0', color: '#475569', fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '0.375rem' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* ささエール */}
          <div style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ background: 'linear-gradient(90deg, #0f172a, #1e293b)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Code2 size={22} color="#10b981" />
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 600, margin: 0 }}>PARTNER 02 ／ 鹿児島県</p>
                <h2 style={{ color: '#f8fafc', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>ささエール</h2>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#10b981', marginBottom: '0.75rem' }}>OVERVIEW</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>EC・販売システムの構築専門</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.9 }}>
                  鹿児島を拠点とするDXソリューション企業。SCENEWORKSのEC運営・決済システム・在庫管理の自動化基盤を担当し、グッズ販売の全国展開を支えています。
                </p>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.9, marginTop: '0.75rem' }}>
                  Lステップ・Stripeとの連携システム設計を共同で開発し、「事務スタッフ0名でも回る販売フロー」を実現した、SCENEWORKSのDX化の核心パートナーです。
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#10b981', marginBottom: '0.75rem' }}>STRENGTHS & CREDENTIALS</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: <Code2 size={16} color="#10b981" />, text: 'Lステップ × Stripe 連携システム設計', highlight: true },
                    { icon: <ShieldCheck size={16} color="#2563eb" />, text: 'EC・決済の完全自動化フロー構築' },
                    { icon: <PackageCheck size={16} color="#f59e0b" />, text: '在庫管理とLark Base連携による無人運営' },
                    { icon: <Award size={16} color="#94a3b8" />, text: '九州地方の中小企業DX支援実績多数' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      background: item.highlight ? '#ecfdf5' : '#f8fafc',
                      border: `1px solid ${item.highlight ? '#a7f3d0' : '#f1f5f9'}`,
                    }}>
                      <div style={{ flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</div>
                      <span style={{ fontSize: '0.825rem', color: '#374151', fontWeight: item.highlight ? 700 : 400 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', padding: '1.25rem 2rem', background: '#f8fafc', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>連携領域：</span>
              {['EC構築', '決済システム', 'DX自動化', '在庫管理', 'LINE連携'].map(tag => (
                <span key={tag} style={{ background: '#fff', border: '1px solid #e2e8f0', color: '#475569', fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '0.375rem' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section style={{ background: '#fff', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>SUPPLY CHAIN</p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>確実なサプライチェーンで、品質を保証</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { label: 'SCENEWORKS', sub: '企画・プロデュース', color: '#f59e0b' },
              { label: '→', sub: '', color: '#94a3b8' },
              { label: 'プリコム', sub: '製造・品質管理', color: '#2563eb' },
              { label: '→', sub: '', color: '#94a3b8' },
              { label: 'ささエール', sub: 'EC・販売システム', color: '#10b981' },
              { label: '→', sub: '', color: '#94a3b8' },
              { label: 'エンドユーザー', sub: '全国へ届ける', color: '#e63946' },
            ].map((item, i) => item.label === '→' ? (
              <span key={i} style={{ fontSize: '1.25rem', color: '#94a3b8', fontWeight: 300 }}>→</span>
            ) : (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: item.color }}>{item.label}</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.15rem' }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.9 }}>
            企画から販売まで、九州の信頼できるパートナーネットワークで完結。<br />
            外部委託リスクを最小化した、堅牢なビジネスチェーンを構築しています。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0f172a', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
            このネットワークを活用したい方へ
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>
            プリコム・ささエールとの連携を含む包括的なソリューションをご提案します。
          </p>
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            無料相談を予約する <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
