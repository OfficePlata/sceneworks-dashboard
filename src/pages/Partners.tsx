import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const lbl = { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const };

const partners = [
  {
    num: '01', region: '宮崎県', name: '株式会社プリコム', eng: 'PRICOM Co., Ltd.',
    role: '製造・印刷の高品質サプライヤー',
    body: '宮崎県を拠点とする製造・印刷の専門企業。SCENEWORKS が手がけるグッズ・ノベルティの製造パートナーとして、品質管理から納期管理まで一括サポート。「ボンボンドロップシール」をはじめとした物販商品の製造を担い、SCENEWORKS の物販収益の安全性を担保する重要なパートナーです。',
    highlight: 'クレーム率 3% 以下の高品質管理体制',
    points: ['小ロット〜大量生産まで柔軟な対応力', '地域密着による迅速な納期対応', 'ステッカー・グッズ・販促物の一括製造'],
    tags: ['グッズ製造', '印刷物', 'ノベルティ', '品質保証'],
  },
  {
    num: '02', region: '鹿児島県', name: 'ささエール', eng: 'SASA-YELL',
    role: 'EC・販売システムの構築専門',
    body: '鹿児島を拠点とする DX ソリューション企業。SCENEWORKS の EC 運営・決済システム・在庫管理の自動化基盤を担当し、グッズ販売の全国展開を支えています。Lステップ・Stripe との連携システムを共同設計し、「事務スタッフ 0 名でも回る販売フロー」を実現したDX化の核心パートナーです。',
    highlight: 'Lステップ × Stripe 連携システム設計',
    points: ['EC・決済の完全自動化フロー構築', '在庫管理と Lark Base 連携による無人運営', '九州地方の中小企業 DX 支援実績多数'],
    tags: ['EC 構築', '決済システム', 'DX 自動化', '在庫管理', 'LINE 連携'],
  },
];

export default function Partners() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ ...lbl, marginBottom: '1.5rem' }}>Strategic Partners</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>戦略的パートナーシップ</h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9 }}>
            九州の信頼できる専門パートナーと連携することで、より強固なサービス品質と供給体制を実現しています。
          </p>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: '#f5f4ee', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2px', background: '#e0ddd7' }}>
          {partners.map(p => (
            <div key={p.num} style={{ background: '#fff', padding: '3rem' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', paddingBottom: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid #f0ede5' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.5rem', fontWeight: 700, color: '#e8d9b3' }}>{p.num}</span>
                  <div>
                    <p style={{ fontSize: '0.68rem', color: '#999', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{p.region}</p>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>{p.name}</h2>
                  </div>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#bbb', letterSpacing: '0.08em' }}>{p.eng}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
                <div>
                  <p style={{ ...lbl, marginBottom: '0.75rem' }}>Overview</p>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '0.9rem' }}>{p.role}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.9 }}>{p.body}</p>
                </div>
                <div>
                  <p style={{ ...lbl, marginBottom: '0.75rem' }}>Strengths</p>
                  {/* highlight */}
                  <div style={{ padding: '0.85rem 1rem', background: '#f5f4ee', borderLeft: '2px solid #c4a35a', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.83rem', fontWeight: 700, color: '#111' }}>{p.highlight}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {p.points.map(pt => (
                      <li key={pt} style={{ fontSize: '0.83rem', color: '#555', padding: '0.4rem 0', borderBottom: '1px solid #f5f4ee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '4px', height: '4px', background: '#e0ddd7', flexShrink: 0 }} />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #f0ede5', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#999' }}>連携領域：</span>
                {p.tags.map(t => (
                  <span key={t} style={{ border: '1px solid #e0ddd7', color: '#666', fontSize: '0.72rem', padding: '0.2rem 0.65rem' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supply chain */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...lbl, marginBottom: '1.25rem' }}>Supply Chain</p>
          <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#111', marginBottom: '2.5rem' }}>確実なサプライチェーンで、品質を保証</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', padding: '2.5rem', background: '#f5f4ee', marginBottom: '1.5rem' }}>
            {[
              { label: 'SCENEWORKS', sub: '企画・プロデュース' },
              null,
              { label: 'プリコム', sub: '製造・品質管理' },
              null,
              { label: 'ささエール', sub: 'EC・販売システム' },
              null,
              { label: 'エンドユーザー', sub: '全国へ届ける' },
            ].map((item, i) =>
              item === null ? (
                <span key={i} style={{ color: '#c4a35a', fontSize: '1rem' }}>→</span>
              ) : (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111' }}>{item.label}</div>
                  <div style={{ fontSize: '0.7rem', color: '#999', marginTop: '0.15rem' }}>{item.sub}</div>
                </div>
              )
            )}
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.9 }}>企画から販売まで、九州の信頼できるパートナーネットワークで完結。外部委託リスクを最小化した堅牢なビジネスチェーンを構築しています。</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d0c0a', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div style={{ width: '2rem', height: '1px', background: '#c4a35a', margin: '0 auto 2.5rem' }} />
          <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#f0ede5', lineHeight: 1.4, marginBottom: '1rem' }}>
            このネットワークを<br />活用したい方へ
          </h2>
          <p style={{ color: '#6e6b62', fontSize: '0.875rem', marginBottom: '2.5rem' }}>包括的なソリューションをご提案します。</p>
          <Link to="/services" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #c4a35a', color: '#c4a35a', fontSize: '0.82rem', letterSpacing: '0.08em', padding: '0.85rem 2rem' }}>
            無料相談を予約する <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
