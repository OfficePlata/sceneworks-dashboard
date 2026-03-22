import { Link } from 'react-router-dom';
import { ArrowRight, Award, Film, Network, Lightbulb } from 'lucide-react';

function PageHero({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>{label}</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>{title}</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>{sub}</p>
      </div>
    </section>
  );
}

const career = [
  { year: '2000年代', title: '俳優・芸能活動', body: '芸能事務所に所属し、俳優として映像・舞台作品に出演。現場での経験を通じ、エンターテインメントの「つくる側」の視点を深める。' },
  { year: '2010年代', title: 'プロデューサーへ転身', body: '俳優の経験を活かし、イベント・映像プロデュースの世界へ。大手事務所・地方自治体との連携プロジェクトを多数手がけ、独自の人脈ネットワークを構築。' },
  { year: '2020年代', title: 'SCENEWORKS 設立', body: '宮崎を拠点に、エンターテインメント×地方創生の新モデルを確立。DX技術を駆使した少人数高収益体制で、地方の経済インパクト創出に特化したプロデュース企業をスタート。' },
];

const strengths = [
  { icon: <Network size={24} color="#f59e0b" />, title: '芸能界との深い人脈', body: '俳優・プロデューサーとして長年築いた第一線のネットワーク。200名超のタレントと直接交渉できるパイプは、他社にはない圧倒的な差別化要因です。' },
  { icon: <Film size={24} color="#2563eb" />, title: '現場で磨かれた直感', body: 'どのタレントがどの地域のどのイベントで刺さるか——経験に裏打ちされた選球眼が、予算を超えた集客力を生みます。' },
  { icon: <Award size={24} color="#10b981" />, title: '実績による権威性', body: '年間50件超のコーディネート実績、動員5,000名超の大型イベント成功経験。数字が示す結果で、初めてのクライアントも安心してお任せいただけます。' },
  { icon: <Lightbulb size={24} color="#e63946" />, title: 'DXによる経営革新', body: 'Lark・Lステップ・Stripeを連携させた自動化システムで、事務コストを75%削減。高利益率を保ちながら複数プロジェクトを並行運営できる体制を実現。' },
];

export default function About() {
  return (
    <div>
      <PageHero
        label="VISION & FOUNDER"
        title="代表ビジョンと会社の想い"
        sub="直感と人脈を武器に、地方エンタメの未来を切り拓く"
      />

      {/* CEO Section */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Avatar placeholder */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '260px',
              height: '320px',
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              borderRadius: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(245,158,11,0.2)',
              gap: '1rem',
            }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '2px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Film size={40} color="#f59e0b" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#f8fafc', fontWeight: 800, fontSize: '1.25rem', margin: 0 }}>大田 拓也</p>
                <p style={{ color: '#f59e0b', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>代表取締役 / プロデューサー</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['元俳優', 'プロデューサー', '宮崎出身'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', border: '1px solid rgba(245,158,11,0.2)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>FOUNDER MESSAGE</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.35, marginBottom: '1.5rem' }}>
              「地方には、まだ眠っている<br />可能性がある。」
            </h2>
            <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 2, borderLeft: '3px solid #f59e0b', paddingLeft: '1.25rem' }}>
              <p>俳優として舞台に立ち、プロデューサーとして地方各地のイベントを手がけてきた中で、いつも感じていたことがあります。「この地域には、ちゃんとした仕掛けさえあれば、人が集まる力がある」ということです。</p>
              <p style={{ marginTop: '1rem' }}>SCENEWORKSは、私がこれまで積み上げてきた芸能界との人脈と、現代のDX技術を組み合わせることで、地方を「文化と経済が交差するシーン」に変えていくために設立しました。</p>
              <p style={{ marginTop: '1rem' }}>私たちの仕事は、ただイベントを開催することではありません。地域に残る「記憶」と「経済」をつくることです。</p>
            </div>
            <div style={{ marginTop: '1.5rem', fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>
              大田 拓也 / 代表取締役
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>CAREER</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a' }}>代表経歴</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '0.5rem', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #f59e0b, transparent)' }} />
            {career.map((item, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '2.5rem' }}>
                <div style={{ position: 'absolute', left: '-1.6rem', top: '0.3rem', width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', border: '2px solid #f8fafc' }} />
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>{item.year}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.85 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>OUR EDGE</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a' }}>SCENEWORKSの強み</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {strengths.map((s) => (
              <div key={s.title} style={{ background: '#f8fafc', borderRadius: '1rem', padding: '1.75rem', border: '1px solid #f1f5f9' }}>
                <div style={{ marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.85 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0f172a', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
            ビジネスモデルの詳細を知りたい方へ
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>
            収益構造とDX活用の全貌を、インフォグラフィックで解説しています。
          </p>
          <Link
            to="/model"
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
            ビジネスモデルを見る <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
