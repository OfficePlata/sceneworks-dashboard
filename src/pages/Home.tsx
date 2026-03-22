import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

/* ── カウンターカード ───────────────────────── */
function StatCard({ end, suffix, label, note }: { end: number; suffix: string; label: string; note: string }) {
  const { count, ref } = useCounter(end, 2200);
  return (
    <div ref={ref} style={{ padding: '2.5rem 2rem', borderRight: '1px solid #e0ddd7' }}>
      <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: '0.5rem' }}>
        {count.toLocaleString()}<span style={{ fontSize: '1.1rem', color: '#c4a35a', marginLeft: '0.1rem' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111', marginBottom: '0.2rem' }}>{label}</div>
      <div style={{ fontSize: '0.72rem', color: '#999' }}>{note}</div>
    </div>
  );
}

/* ── ターゲット層カード ───────────────────────── */
function AudienceCard({ num, tag, title, body, link, linkLabel }: {
  num: string; tag: string; title: string; body: string; link: string; linkLabel: string;
}) {
  return (
    <div style={{ padding: '2.5rem', borderTop: '1px solid #e0ddd7', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '2rem', fontWeight: 700, color: '#e8d9b3', lineHeight: 1 }}>{num}</span>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: '#999', textTransform: 'uppercase' }}>{tag}</span>
      </div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111', marginBottom: '0.9rem', lineHeight: 1.5 }}>{title}</h3>
      <p style={{ fontSize: '0.83rem', color: '#666', lineHeight: 1.9, flex: 1 }}>{body}</p>
      <Link to={link} style={{ marginTop: '1.5rem', textDecoration: 'none', fontSize: '0.78rem', color: '#c4a35a', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
        {linkLabel} <ArrowRight size={13} />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>

      {/* ── Hero ───────────────────────────────── */}
      <section style={{ background: '#0d0c0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem 6rem', position: 'relative', overflow: 'hidden' }}>
        {/* 薄いグリッドパターン */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#252219 1px, transparent 1px), linear-gradient(90deg, #252219 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.35 }} />
        {/* 中央グロー */}
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(196,163,90,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: '860px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: '#c4a35a' }} />
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: '#c4a35a', textTransform: 'uppercase' }}>Entertainment × Region × DX</span>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: '#c4a35a' }} />
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', color: '#f0ede5', lineHeight: 1.2, marginBottom: '1.75rem', letterSpacing: '-0.02em' }}>
            直感と人脈が、<br />
            <em style={{ fontStyle: 'normal', color: '#c4a35a' }}>地方の新たなシーンを創る。</em>
          </h1>

          <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: '#9a9590', lineHeight: 2, marginBottom: '3rem', maxWidth: '560px', margin: '0 auto 3rem' }}>
            芸能界で培った人脈とDX技術を掛け合わせ、<br />
            キャスティング・ロケ・地域ブランディングで<br />
            地方に経済的なインパクトをもたらすプロデュース企業。
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" style={{
              textDecoration: 'none', background: '#c4a35a', color: '#0d0c0a',
              fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em',
              padding: '0.9rem 2.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              無料相談を予約する <ArrowRight size={15} />
            </Link>
            <Link to="/works" style={{
              textDecoration: 'none',
              border: '1px solid #252219', color: '#9a9590',
              fontSize: '0.85rem', letterSpacing: '0.06em',
              padding: '0.9rem 2.2rem',
            }}>
              実績を見る
            </Link>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: '#47443d' }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, #47443d, transparent)' }} />
        </div>
      </section>

      {/* ── 実績指標 ───────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ borderBottom: '1px solid #e0ddd7', padding: '4rem 0 1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="label">Trust Metrics</span>
            <span style={{ flex: 1, height: '1px', background: '#e0ddd7' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', borderLeft: '1px solid #e0ddd7', marginBottom: '5rem' }}>
            <StatCard end={200}   suffix="名+" label="独自タレントネットワーク" note="芸能界第一線とのパイプ" />
            <StatCard end={50}    suffix="件+" label="年間コーディネート実績"   note="ロケ・イベント・キャスティング" />
            <StatCard end={30000} suffix="個+" label="グッズ累計販売数"         note="ボンボンドロップシール等" />
            <StatCard end={5000}  suffix="名+" label="過去最大動員記録"         note="単一イベント来場者数" />
          </div>
        </div>
      </section>

      {/* ── ターゲット別導線 ───────────────────────────── */}
      <section style={{ background: '#f5f4ee' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '6rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <span className="label">For Everyone</span>
            <span style={{ flex: 1, height: '1px', background: '#dddad4' }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111', lineHeight: 1.35 }}>あなたのための、<br />SCENEWORKS</h2>
          </div>
          <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '3rem' }}>3 つのターゲット層それぞれに最短の価値提供を設計しています</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0', border: '1px solid #e0ddd7', background: '#fff' }}>
            <AudienceCard
              num="01" tag="Financial / Investor"
              title="数字で証明される収益モデル"
              body="高利益率の物販・イベントと安定ストック収益のハイブリッド構造。Lark等DXによる低コスト体質と、代表の人脈資産を数値で提示します。"
              link="/model" linkLabel="ビジネスモデルを見る"
            />
            <AudienceCard
              num="02" tag="B2B / Municipality"
              title="地方課題を、エンタメで解決"
              body="「地方に人が集まらない」「自社ブランドが弱い」——ロケコーディネートやキャスティングで具体的な経済効果を生み出します。"
              link="/works" linkLabel="実績を見る"
            />
            <AudienceCard
              num="03" tag="End User / Fan"
              title="今すぐ手に入れる、熱狂の一品"
              body="ボンボンドロップシールをはじめとした限定グッズ。LINEで友だち追加するだけで最新情報をゲット。"
              link="/store" linkLabel="ストアへ"
            />
          </div>
        </div>
      </section>

      {/* ── サービス紹介 ───────────────────────────────── */}
      <section style={{ background: '#0d0c0a', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <span className="label">Our Services</span>
            <span style={{ flex: 1, height: '1px', background: '#252219' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f0ede5', lineHeight: 1.35, marginBottom: '1.25rem' }}>
                エンタメの力で、<br />地方を動かす4つのサービス
              </h2>
              <p style={{ color: '#6e6b62', lineHeight: 1.9, fontSize: '0.875rem', marginBottom: '2.5rem' }}>
                キャスティングから地域ブランディングまで、一貫したプロデュース力で課題を解決します。
              </p>
              <Link to="/services" style={{
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                border: '1px solid #c4a35a', color: '#c4a35a',
                fontSize: '0.8rem', letterSpacing: '0.08em', padding: '0.75rem 1.5rem',
              }}>
                事業内容を詳しく見る <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#252219' }}>
              {[
                { num: '01', title: 'キャスティング',      sub: 'タレント・俳優・モデル手配' },
                { num: '02', title: 'ロケコーディネート',  sub: 'ロケ地選定・撮影管理' },
                { num: '03', title: '地域ブランディング',  sub: 'イベント企画・地域 PR' },
                { num: '04', title: 'Web・SNS 運用',       sub: 'ストック型収益の構築' },
              ].map(s => (
                <div key={s.num} style={{ background: '#0d0c0a', padding: '1.75rem' }}>
                  <div style={{ fontSize: '0.62rem', color: '#c4a35a', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{s.num}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f0ede5', marginBottom: '0.3rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#47443d' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section style={{ background: '#f5f4ee', padding: '7rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="divider" style={{ margin: '0 auto 2.5rem' }} />
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#111', lineHeight: 1.4, marginBottom: '1.25rem' }}>
            地方を変えるプロジェクト、<br />一緒に始めませんか？
          </h2>
          <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            まずは無料の個別相談会でお気軽にご相談ください。<br />Lark カレンダーで即日予約可能です。
          </p>
          <Link to="/services" style={{
            textDecoration: 'none', background: '#111', color: '#f0ede5',
            fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em',
            padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            無料相談を予約する <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}
