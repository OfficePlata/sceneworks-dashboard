import { ShoppingBag, MessageCircle, Star, Shield, Truck, RotateCcw } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ボンボンドロップシール【公式】',
    sub: 'BIG HIT ITEM',
    price: '¥1,500',
    priceNote: '税込',
    badge: '人気 No.1',
    badgeColor: '#e63946',
    description: 'SNSで話題沸騰！独自デザインのカラフルなドロップ型シールセット。コレクション性の高いデザインでリピーター続出中。限定バリエーションも随時追加予定。',
    specs: ['サイズ：各約3cm', 'セット内容：12枚入り', '素材：防水PETラミネート', '製造：株式会社プリコム（宮崎）'],
    stock: 'INSTOCK',
    reviews: 4.8,
    reviewCount: 312,
  },
  {
    id: 2,
    name: 'SCENEWORKSオフィシャルTシャツ',
    sub: 'LIMITED EDITION',
    price: '¥4,800',
    priceNote: '税込',
    badge: '限定',
    badgeColor: '#f59e0b',
    description: 'SCENEWORKSのロゴをあしらった限定Tシャツ。シンプルながらもこだわりのデザインで、イベント参加の記念にも最適です。',
    specs: ['素材：コットン100%', 'サイズ：S/M/L/XL', 'カラー：ブラック・ホワイト', '製造：株式会社プリコム（宮崎）'],
    stock: 'INSTOCK',
    reviews: 4.6,
    reviewCount: 87,
  },
  {
    id: 3,
    name: '限定イベントアクリルスタンド',
    sub: 'EVENT GOODS',
    price: '¥2,200',
    priceNote: '税込',
    badge: '数量限定',
    badgeColor: '#2563eb',
    description: '過去の大型イベントを記念したアクリルスタンド。クリアな素材に高精細印刷で、飾っても楽しめる一品。コレクターズアイテムとして根強い人気。',
    specs: ['サイズ：H10cm × W7cm', '素材：アクリル3mm', '台座付き', '製造：株式会社プリコム（宮崎）'],
    stock: 'REMAINING',
    reviews: 4.9,
    reviewCount: 156,
  },
];

const guarantees = [
  { icon: <Shield size={20} color="#10b981" />, title: '品質保証', body: '製造パートナーのプリコム社によるクレーム率3%以下の高品質管理' },
  { icon: <Truck size={20} color="#2563eb" />, title: '全国配送', body: 'ささエール社の配送システムで全国へ。追跡番号付きで安心' },
  { icon: <RotateCcw size={20} color="#f59e0b" />, title: '返品対応', body: '商品到着後7日以内の未使用品は返品・交換対応' },
];

function StarRating({ score }: { score: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={13} fill={i <= Math.round(score) ? '#f59e0b' : 'none'} color="#f59e0b" />
      ))}
    </div>
  );
}

export default function Store() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>OFFICIAL STORE</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>オフィシャルグッズストア</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>
            SCENEWORKSが手がけた限定グッズを全国へお届け。<br />
            LINEで友だち追加すると、新商品情報や限定クーポンをいち早くゲット！
          </p>
          {/* LINE CTA */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginTop: '2rem', background: '#00B900', padding: '0.75rem 1.5rem', borderRadius: '0.625rem', cursor: 'pointer' }}>
            <MessageCircle size={20} color="#fff" />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>LINE で友だち追加（Lステップ）</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>PRODUCTS</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a' }}>商品ラインナップ</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {products.map(product => (
              <div
                key={product.id}
                style={{
                  background: '#fff',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Product image placeholder */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <ShoppingBag size={48} color="rgba(245,158,11,0.4)" />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: product.badgeColor,
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                  }}>
                    {product.badge}
                  </div>
                  {product.stock === 'REMAINING' && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(230,57,70,0.9)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                    }}>
                      残りわずか
                    </div>
                  )}
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{product.sub}</p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.35 }}>{product.name}</h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <StarRating score={product.reviews} />
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{product.reviews} ({product.reviewCount}件)</span>
                  </div>

                  <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.8, flex: 1 }}>{product.description}</p>

                  <ul style={{ listStyle: 'none', margin: '1rem 0', padding: 0 }}>
                    {product.specs.map(spec => (
                      <li key={spec} style={{ fontSize: '0.75rem', color: '#64748b', padding: '0.2rem 0', borderBottom: '1px solid #f8fafc' }}>{spec}</li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>{product.price}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: '0.3rem' }}>{product.priceNote}</span>
                    </div>
                  </div>

                  <button
                    style={{
                      background: '#f59e0b',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      padding: '0.75rem',
                      borderRadius: '0.625rem',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <ShoppingBag size={16} /> カートに追加（Stripe決済）
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: '#fff', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>安心してお買い物いただける3つの保証</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {guarantees.map(g => (
              <div key={g.title} style={{ background: '#f8fafc', borderRadius: '0.875rem', padding: '1.5rem', textAlign: 'center', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{g.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{g.title}</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: 1.75 }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINE CTA Banner */}
      <section style={{ background: '#00B900', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <MessageCircle size={40} color="#fff" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            LINEで友だち追加して、最新情報をゲット
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            新商品の入荷情報、限定クーポン、イベント先行情報を<br />
            LINEでいち早くお知らせします。Lステップで自動配信！
          </p>
          <button
            style={{
              background: '#fff',
              color: '#00B900',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.9rem 2rem',
              borderRadius: '0.625rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'inherit',
            }}
          >
            <MessageCircle size={18} /> LINE で友だち追加（無料）
          </button>
        </div>
      </section>
    </div>
  );
}
