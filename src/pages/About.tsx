import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const S = {
  pageHero: { background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' as const },
  label:    { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const },
  section:  { padding: '7rem 2rem' },
  inner:    { maxWidth: '1000px', margin: '0 auto' },
};

const career = [
  { year: '2000 年代', title: '俳優・芸能活動', body: '芸能事務所に所属し、俳優として映像・舞台作品に出演。エンターテインメントの「つくる側」の視点と、芸能界の第一線とのパイプを構築する。' },
  { year: '2010 年代', title: 'プロデューサーへ転身', body: '俳優の経験を活かし、イベント・映像プロデュースの世界へ。大手事務所・地方自治体との連携プロジェクトを多数手がけ、独自の人脈ネットワークを形成。' },
  { year: '2020 年代', title: 'SCENEWORKS 設立', body: '宮崎を拠点に、エンターテインメント × 地方創生のモデルを確立。DX技術を駆使した少人数高収益体制で、地方の経済インパクト創出に特化したプロデュース企業をスタート。' },
];

const strengths = [
  { num: '01', title: '芸能界との深い人脈', body: '200 名超のタレントと直接交渉できるパイプは、他社にはない圧倒的な差別化要因です。' },
  { num: '02', title: '現場で磨かれた直感', body: 'どのタレントがどの地域・どのイベントで刺さるか——経験に裏打ちされた選球眼が、予算を超えた集客力を生みます。' },
  { num: '03', title: '実績による権威性', body: '年間 50 件超のコーディネート実績、動員 5,000 名超の大型イベント成功。数字が示す結果が信頼の礎です。' },
  { num: '04', title: 'DX による経営革新', body: 'Lark・Lステップ・Stripe の連携で事務コスト 75% 削減。高利益率を保ちながら複数プロジェクトを並行運営。' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section style={S.pageHero}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ ...S.label, marginBottom: '1.5rem' }}>Vision & Founder</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            代表ビジョンと<br />会社の想い
          </h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9 }}>直感と人脈を武器に、地方エンタメの未来を切り拓く</p>
        </div>
      </section>

      {/* CEO */}
      <section style={{ ...S.section, background: '#fff' }}>
        <div style={{ ...S.inner, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* アバター */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '260px', background: '#0d0c0a', border: '1px solid #252219', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '80px', height: '80px', border: '1px solid #c4a35a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.5rem', color: '#c4a35a', fontWeight: 700 }}>大田</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#f0ede5', fontWeight: 700, fontSize: '1.3rem', fontFamily: "'Noto Serif JP', serif", marginBottom: '0.35rem' }}>大田 安臣</p>
                <p style={{ color: '#c4a35a', fontSize: '0.75rem', letterSpacing: '0.08em' }}>代表取締役 / プロデューサー</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
                {['元俳優', 'プロデューサー', '宮崎出身'].map(t => (
                  <span key={t} style={{ border: '1px solid #252219', color: '#6e6b62', fontSize: '0.7rem', padding: '0.25rem 0.75rem', textAlign: 'center', letterSpacing: '0.06em' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p style={{ ...S.label, marginBottom: '1.25rem' }}>Founder Message</p>
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#111', lineHeight: 1.4, marginBottom: '1.75rem' }}>
              「地方には、まだ眠っている<br />可能性がある。」
            </h2>
            <div style={{ fontSize: '0.875rem', color: '#555', lineHeight: 2.1, borderLeft: '2px solid #c4a35a', paddingLeft: '1.5rem' }}>
              <p>俳優として舞台に立ち、プロデューサーとして地方各地のイベントを手がけてきた中で、いつも感じていたことがあります。「この地域には、ちゃんとした仕掛けさえあれば、人が集まる力がある」ということです。</p>
              <p style={{ marginTop: '1rem' }}>SCENEWORKSは、私がこれまで積み上げてきた芸能界との人脈と、現代のDX技術を組み合わせることで、地方を「文化と経済が交差するシーン」に変えていくために設立しました。</p>
              <p style={{ marginTop: '1rem' }}>私たちの仕事は、ただイベントを開催することではありません。地域に残る「記憶」と「経済」をつくることです。</p>
            </div>
            <p style={{ marginTop: '1.75rem', fontFamily: "'Noto Serif JP', serif", fontWeight: 700, color: '#111', fontSize: '0.9rem' }}>大田 安臣 ／ 代表取締役</p>
          </div>
        </div>
      </section>

      {/* キャリア */}
      <section style={{ ...S.section, background: '#f5f4ee' }}>
        <div style={S.inner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <p style={S.label}>Career</p>
            <span style={{ flex: 1, height: '1px', background: '#dddad4' }} />
          </div>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '0.45rem', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #c4a35a, transparent)' }} />
            {career.map((item, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '3rem' }}>
                <div style={{ position: 'absolute', left: '-1.65rem', top: '0.35rem', width: '8px', height: '8px', background: '#c4a35a' }} />
                <p style={{ fontSize: '0.72rem', color: '#c4a35a', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>{item.year}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.9 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 強み */}
      <section style={{ ...S.section, background: '#fff' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <p style={S.label}>Our Edge</p>
            <span style={{ flex: 1, height: '1px', background: '#e0ddd7' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', border: '1px solid #e0ddd7' }}>
            {strengths.map(s => (
              <div key={s.num} style={{ padding: '2rem 1.75rem', borderRight: '1px solid #e0ddd7' }}>
                <p style={{ fontSize: '0.62rem', color: '#c4a35a', letterSpacing: '0.15em', marginBottom: '1rem' }}>{s.num}</p>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem', lineHeight: 1.4 }}>{s.title}</h3>
                <p style={{ fontSize: '0.825rem', color: '#666', lineHeight: 1.85 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d0c0a', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div style={{ width: '2rem', height: '1px', background: '#c4a35a', margin: '0 auto 2.5rem' }} />
          <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#f0ede5', marginBottom: '1rem', lineHeight: 1.4 }}>
            ビジネスモデルの詳細を<br />知りたい方へ
          </h2>
          <p style={{ color: '#6e6b62', fontSize: '0.875rem', marginBottom: '2.5rem' }}>収益構造と DX 活用の全貌を、インフォグラフィックで解説しています。</p>
          <Link to="/model" style={{
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: '1px solid #c4a35a', color: '#c4a35a', fontSize: '0.82rem', letterSpacing: '0.08em', padding: '0.85rem 2rem',
          }}>
            ビジネスモデルを見る <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
