import { ShoppingBag, MessageCircle, Star, Shield, Truck, RotateCcw } from 'lucide-react';

const products = [
  {
    id: 1, badge: '人気 No.1',
    name: 'ボンボンドロップシール【公式】',
    sub: 'BIG HIT ITEM',
    price: '¥1,500', note: '税込',
    description: 'SNS で話題沸騰！独自デザインのカラフルなドロップ型シールセット。コレクション性の高いデザインでリピーター続出中。限定バリエーションも随時追加予定。',
    specs: ['サイズ：各約 3cm', 'セット内容：12 枚入り', '素材：防水 PET ラミネート', '製造：株式会社プリコム（宮崎）'],
    score: 4.8, reviews: 312, stock: '在庫あり',
  },
  {
    id: 2, badge: '限定',
    name: 'SCENEWORKS オフィシャル T シャツ',
    sub: 'LIMITED EDITION',
    price: '¥4,800', note: '税込',
    description: 'SCENEWORKS のロゴをあしらった限定 T シャツ。シンプルながらもこだわりのデザインで、イベント参加の記念にも最適です。',
    specs: ['素材：コットン 100%', 'サイズ：S/M/L/XL', 'カラー：ブラック・ホワイト', '製造：株式会社プリコム（宮崎）'],
    score: 4.6, reviews: 87, stock: '在庫あり',
  },
  {
    id: 3, badge: '数量限定',
    name: '限定イベント アクリルスタンド',
    sub: 'EVENT GOODS',
    price: '¥2,200', note: '税込',
    description: '過去の大型イベントを記念したアクリルスタンド。クリアな素材に高精細印刷で、飾っても楽しめるコレクターズアイテム。',
    specs: ['サイズ：H10cm × W7cm', '素材：アクリル 3mm', '台座付き', '製造：株式会社プリコム（宮崎）'],
    score: 4.9, reviews: 156, stock: '残りわずか',
  },
];

const guarantees = [
  { icon: <Shield size={18} color="#c4a35a" />, title: '品質保証', body: 'プリコム社によるクレーム率 3% 以下の高品質管理体制' },
  { icon: <Truck size={18} color="#c4a35a" />, title: '全国配送', body: 'ささエール社の配送システムで全国へ。追跡番号付き' },
  { icon: <RotateCcw size={18} color="#c4a35a" />, title: '返品対応', body: '到着後 7 日以内、未使用品は返品・交換対応' },
];

const lbl = { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const };

function Stars({ score }: { score: number }) {
  return (
    <div style={{ display: 'flex', gap: '0.15rem' }}>
      {[1,2,3,4,5].map(i => <Star key={i} size={11} fill={i <= Math.round(score) ? '#c4a35a' : 'none'} color="#c4a35a" />)}
    </div>
  );
}

export default function Store() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ ...lbl, marginBottom: '1.5rem' }}>Official Store</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>オフィシャルグッズストア</h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '2rem' }}>
            SCENEWORKS が手がけた限定グッズを全国へお届け。<br />
            LINE で友だち追加すると、新商品情報や限定クーポンをいち早くゲット！
          </p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#00B900', color: '#fff', fontWeight: 700, fontSize: '0.875rem', padding: '0.85rem 1.75rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            <MessageCircle size={18} /> LINE で友だち追加（Lステップ）
          </button>
        </div>
      </section>

      {/* Products */}
      <section style={{ background: '#f5f4ee', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <p style={lbl}>Products</p>
            <span style={{ flex: 1, height: '1px', background: '#dddad4' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: '#e0ddd7' }}>
            {products.map(p => (
              <div key={p.id} style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
                {/* Image placeholder */}
                <div style={{ height: '200px', background: '#0d0c0a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <ShoppingBag size={44} color="rgba(196,163,90,0.3)" />
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#c4a35a', color: '#0d0c0a', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', letterSpacing: '0.06em' }}>{p.badge}</span>
                  {p.stock === '残りわずか' && (
                    <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#111', color: '#f0ede5', fontSize: '0.62rem', padding: '0.2rem 0.5rem' }}>ALMOST SOLD OUT</span>
                  )}
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: '#999', marginBottom: '0.35rem' }}>{p.sub}</p>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '0.6rem', lineHeight: 1.4 }}>{p.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <Stars score={p.score} />
                    <span style={{ fontSize: '0.72rem', color: '#aaa' }}>{p.score} ({p.reviews} 件)</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.85, flex: 1 }}>{p.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
                    {p.specs.map(s => (
                      <li key={s} style={{ fontSize: '0.72rem', color: '#888', padding: '0.2rem 0', borderBottom: '1px solid #f5f4ee' }}>{s}</li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111' }}>{p.price}</span>
                      <span style={{ fontSize: '0.72rem', color: '#aaa', marginLeft: '0.3rem' }}>{p.note}</span>
                    </div>
                  </div>
                  <button style={{ background: '#111', color: '#f0ede5', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.06em', padding: '0.75rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'inherit' }}>
                    <ShoppingBag size={14} /> カートに追加（Stripe 決済）
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', background: '#e0ddd7', border: '1px solid #e0ddd7' }}>
            {guarantees.map(g => (
              <div key={g.title} style={{ background: '#fff', padding: '2rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{g.icon}</div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>{g.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#777', lineHeight: 1.75 }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section style={{ background: '#00B900', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <MessageCircle size={36} color="rgba(255,255,255,0.7)" style={{ marginBottom: '1.25rem' }} />
          <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
            LINE で友だち追加して、<br />最新情報をゲット
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.85, marginBottom: '2rem' }}>
            新商品の入荷情報・限定クーポン・イベント先行情報を LINE でお届け。Lステップで自動配信。
          </p>
          <button style={{ background: '#fff', color: '#00B900', fontWeight: 700, fontSize: '0.9rem', padding: '0.9rem 2rem', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit' }}>
            <MessageCircle size={16} /> LINE で友だち追加（無料）
          </button>
        </div>
      </section>
    </div>
  );
}
