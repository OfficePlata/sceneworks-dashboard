import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const cases = [
  {
    num: '01', date: '2025 年 8 月',
    tag: 'キャスティング × イベント',
    title: '宮崎市大型エンターテインメントイベント',
    challenge: '地方都市が抱えていた「若者の市外流出による集客力・活気の低下」という慢性的な課題。地域単独での集客施策に限界を感じていた主催者から相談があった。',
    solution: '代表・大田の直感で、宮崎出身のみならず全国で人気を獲得していた若手アーティストを選定。事務所との直接交渉でコストを最小化しつつ、株式会社プリコムと連携して地域限定の公式グッズを制作。SNS 拡散を前提とした映えるフォトスポットも会場内に設計した。',
    results: [
      { label: '来場者数',    value: '3,200 名' },
      { label: 'グッズ売上', value: '¥4,800,000' },
      { label: '経済効果',   value: '¥2,800 万円' },
    ],
  },
  {
    num: '02', date: '2024 年 12 月〜継続',
    tag: 'グッズ物販 × EC 展開',
    title: 'ボンボンドロップシール 全国通販展開',
    challenge: '地域限定でファンから爆発的な支持を集めていたオリジナルグッズを「全国で買えるようにしてほしい」という要望が急増。自社に EC 運営ノウハウがなかった。',
    solution: 'ささエール社の EC システムと、Lステップによる自動応答 LINE を組み合わせ、注文→確認→発送通知のフローを完全自動化。プリコム社による高品質・低クレーム率（3%以下）の製品供給ラインを確立し、全国展開を実現。',
    results: [
      { label: '累計販売数',    value: '18,000 個' },
      { label: 'リピート購入率', value: '42%' },
      { label: 'ピーク月間売上', value: '¥1,200,000' },
    ],
  },
  {
    num: '03', date: '2025 年 4 月〜継続',
    tag: '地域ブランディング × SNS',
    title: 'A 市観光 PR・デジタルブランディング支援',
    challenge: '地方自治体の観光 PR コンテンツが 40〜50 代には届いているが、旅行消費の中心である 20〜30 代の若者層にまったく届かないというデジタルリーチ不足の課題。',
    solution: '地域にゆかりのある人気インフルエンサーをキャスティングし、現地ロケのショートムービーを制作。TikTok・Instagram リールでの拡散に特化した縦型動画を複数本制作。並行して Web サイトの SEO リニューアルと、Lステップを使った観光情報 LINE マガジンを立ち上げた。',
    results: [
      { label: 'SNS フォロワー増加', value: '+15,000 名' },
      { label: '観光来訪者数',       value: '前年比 +28%' },
      { label: 'Web 問い合わせ',     value: '前年比 +3.2 倍' },
    ],
  },
];

const lbl = { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const };

export default function Works() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ ...lbl, marginBottom: '1.5rem' }}>Works & Case Studies</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>実績・ケーススタディ</h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9 }}>
            「ストーリー」と「数字」で語る、SCENEWORKS の実証済みアプローチ。
          </p>
        </div>
      </section>

      {/* Cases */}
      <section style={{ background: '#f5f4ee', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2px', background: '#e0ddd7' }}>
          {cases.map((c) => (
            <article key={c.num} style={{ background: '#fff', padding: '3rem' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid #f0ede5' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                  <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.5rem', fontWeight: 700, color: '#e8d9b3', lineHeight: 1 }}>{c.num}</span>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: '#999' }}>{c.tag}</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#bbb' }}>{c.date}</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)', fontWeight: 700, color: '#111', marginBottom: '2rem', lineHeight: 1.4 }}>{c.title}</h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: '#999', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Challenge ── 課題</p>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.9, borderLeft: '2px solid #e0ddd7', paddingLeft: '1rem' }}>{c.challenge}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: '#999', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Solution ── アプローチ</p>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.9, borderLeft: '2px solid #c4a35a', paddingLeft: '1rem' }}>{c.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div style={{ background: '#f5f4ee', padding: '1.5rem', marginBottom: '1.75rem' }}>
                <p style={{ ...lbl, marginBottom: '1.25rem' }}>Results ── 成果</p>
                <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                  {c.results.map(r => (
                    <div key={r.label}>
                      <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.5rem', fontWeight: 700, color: '#111', lineHeight: 1.1 }}>{r.value}</div>
                      <div style={{ fontSize: '0.72rem', color: '#999', marginTop: '0.25rem' }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/services" style={{ textDecoration: 'none', background: '#111', color: '#f0ede5', fontSize: '0.78rem', letterSpacing: '0.06em', padding: '0.6rem 1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  無料相談を予約 <ArrowRight size={13} />
                </Link>
                <button style={{ background: 'none', border: '1px solid #e0ddd7', color: '#777', fontSize: '0.78rem', letterSpacing: '0.06em', padding: '0.6rem 1.25rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'inherit' }}>
                  <Download size={13} /> 資料ダウンロード
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d0c0a', padding: '7rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <div style={{ width: '2rem', height: '1px', background: '#c4a35a', margin: '0 auto 2.5rem' }} />
          <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#f0ede5', lineHeight: 1.4, marginBottom: '1.25rem' }}>
            あなたの課題も、<br />数字に変えてみませんか？
          </h2>
          <p style={{ color: '#6e6b62', fontSize: '0.875rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            「地方に人が集まらない」「ブランド力が足りない」——<br />まずは無料相談でお聞かせください。
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" style={{ textDecoration: 'none', background: '#c4a35a', color: '#0d0c0a', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', padding: '0.85rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              無料相談を予約する <ArrowRight size={14} />
            </Link>
            <button style={{ background: 'none', border: '1px solid #252219', color: '#9a9590', fontSize: '0.82rem', letterSpacing: '0.06em', padding: '0.85rem 2rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'inherit' }}>
              <Download size={14} /> 会社資料をダウンロード
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
