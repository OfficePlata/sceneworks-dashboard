import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, ShoppingBag, Download } from 'lucide-react';

const cases = [
  {
    tag: 'キャスティング × イベント',
    tagColor: '#2563eb',
    tagBg: '#eff6ff',
    icon: <Users size={20} color="#2563eb" />,
    title: '宮崎市大型エンターテインメントイベント',
    challenge: '地方都市が抱えていた「若者の市外流出による集客力・活気の低下」という慢性的な課題。地域単独での集客施策に限界を感じていた主催者から相談があった。',
    solution: '代表・大田の直感で、宮崎出身のみならず全国で人気を獲得していた若手アーティストを選定。事務所との直接交渉でコストを最小化しつつ、株式会社プリコムと連携して地域限定の公式グッズを制作。SNS拡散を前提とした映えるフォトスポットも会場内に設計した。',
    results: [
      { label: '来場者数', value: '3,200名', color: '#2563eb' },
      { label: 'グッズ売上', value: '¥4,800,000', color: '#10b981' },
      { label: '地域経済効果', value: '¥2,800万円', color: '#f59e0b' },
    ],
    date: '2025年8月',
  },
  {
    tag: 'グッズ物販 × EC展開',
    tagColor: '#e63946',
    tagBg: '#fff1f2',
    icon: <ShoppingBag size={20} color="#e63946" />,
    title: 'ボンボンドロップシール 全国通販展開',
    challenge: '地域限定でファンから爆発的な支持を集めていたオリジナルグッズを「全国で買えるようにしてほしい」という要望が急増。自社にEC運営ノウハウがなかった。',
    solution: 'ささエール社のECシステムと、Lステップによる自動応答LINEを組み合わせ、注文→確認→発送通知のフローを完全自動化。プリコム社による高品質・低クレーム率（3%以下）の製品供給ラインを確立し、全国展開を実現。',
    results: [
      { label: '累計販売数', value: '18,000個', color: '#e63946' },
      { label: 'リピート購入率', value: '42%', color: '#10b981' },
      { label: '月間ピーク売上', value: '¥1,200,000', color: '#f59e0b' },
    ],
    date: '2024年12月〜継続',
  },
  {
    tag: '地域ブランディング × SNS',
    tagColor: '#10b981',
    tagBg: '#ecfdf5',
    icon: <TrendingUp size={20} color="#10b981" />,
    title: 'A市観光PR・デジタルブランディング支援',
    challenge: '地方自治体の観光PRコンテンツが「40〜50代には届いているが、旅行消費の中心である20〜30代の若者層にまったく届かない」というデジタルリーチ不足の課題。',
    solution: '地域にゆかりのある人気インフルエンサーをキャスティングし、現地ロケのショートムービーを制作。TikTok・Instagramリールでの拡散に特化した縦型動画を複数本制作。並行してWebサイトのSEOリニューアルと、Lステップを使った観光情報LINEマガジンを立ち上げた。',
    results: [
      { label: 'SNSフォロワー増加', value: '+15,000名', color: '#10b981' },
      { label: '観光来訪者数', value: '前年比 +28%', color: '#2563eb' },
      { label: 'Web問い合わせ', value: '前年比 +3.2倍', color: '#f59e0b' },
    ],
    date: '2025年4月〜継続',
  },
];

export default function Works() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>WORKS & CASE STUDIES</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>実績・ケーススタディ</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>
            「ストーリー」と「数字」で語る、SCENEWORKSの実証済みアプローチ。<br />
            地方の課題に直面したとき、私たちがどう解決したかをご覧ください。
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {cases.map((c, i) => (
            <article
              key={i}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              {/* Header bar */}
              <div style={{ background: 'linear-gradient(90deg, #0f172a, #1e293b)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ background: c.tagBg, color: c.tagColor, fontSize: '0.7rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>{c.tag}</span>
                  <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{c.date}</span>
                </div>
                <span style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>CASE {String(i + 1).padStart(2, '0')}</span>
              </div>

              <div style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.75rem', lineHeight: 1.35 }}>{c.title}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#e63946', marginBottom: '0.5rem' }}>CHALLENGE ── 課題</p>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.9, borderLeft: '3px solid #fecaca', paddingLeft: '0.875rem' }}>{c.challenge}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#2563eb', marginBottom: '0.5rem' }}>SOLUTION ── SCENEWORKSのアプローチ</p>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.9, borderLeft: '3px solid #bfdbfe', paddingLeft: '0.875rem' }}>{c.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div style={{ background: '#f8fafc', borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#10b981', marginBottom: '1rem' }}>RESULTS ── 成果・数値</p>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {c.results.map(r => (
                      <div key={r.label}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: r.color, lineHeight: 1.1 }}>{r.value}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    to="/services"
                    style={{
                      textDecoration: 'none',
                      background: '#f59e0b',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '0.5rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    無料相談を予約 <ArrowRight size={15} />
                  </Link>
                  <button
                    style={{
                      background: 'none',
                      border: '1.5px solid #e2e8f0',
                      color: '#475569',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'inherit',
                    }}
                  >
                    <Download size={15} /> 資料ダウンロード
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lead Generation Banner */}
      <section style={{ background: '#0f172a', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
            あなたの課題も、数字に変えてみませんか？
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '2rem' }}>
            「地方に人が集まらない」「ブランド力が足りない」——<br />
            そのお悩み、まずは無料相談でお聞かせください。
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              無料相談を予約する <ArrowRight size={16} />
            </Link>
            <button
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#f8fafc',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.85rem 2rem',
                borderRadius: '0.625rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'inherit',
              }}
            >
              <Download size={16} /> 会社資料をダウンロード
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
