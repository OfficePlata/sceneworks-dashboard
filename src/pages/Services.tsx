import { useState } from 'react';
import { MapPin, Users, Globe, ShoppingBag, CheckCircle2, Send } from 'lucide-react';

const services = [
  {
    icon: <MapPin size={28} color="#f59e0b" />,
    bg: 'rgba(245,158,11,0.1)',
    id: 'location',
    title: 'ロケコーディネート',
    sub: '九州・宮崎エリアの最適なロケ地を一括管理',
    description:
      '代表の地元ネットワークを活かし、映画・CM・ドラマのロケ地選定から撮影管理、地権者交渉まで一括でサポート。Lark Baseによる独自ロケ地データベースにより、最短1日での候補地提案が可能です。',
    points: ['独自ロケ地DB（300件以上）', '地権者・自治体との交渉代行', '撮影当日の現地立ち会い', '行政許可申請サポート'],
    price: '¥150,000〜 / 件',
  },
  {
    icon: <Users size={28} color="#2563eb" />,
    bg: 'rgba(37,99,235,0.1)',
    id: 'casting',
    title: 'キャスティング',
    sub: '200名超のタレントネットワークで最適な人選を',
    description:
      '俳優・モデル・タレントのキャスティングから、YouTuberや地域インフルエンサーの手配まで対応。代表の直接ネットワークにより、通常より迅速かつ低コストでの調整を実現します。',
    points: ['直接交渉による迅速対応', 'オーディション企画・運営', '契約書類の作成・管理', '地方在住クリエイターの発掘'],
    price: '¥200,000〜 / 件',
  },
  {
    icon: <Globe size={28} color="#10b981" />,
    bg: 'rgba(16,185,129,0.1)',
    id: 'branding',
    title: '地域ブランディング',
    sub: 'イベント企画からSNS展開まで、地域の魅力を発信',
    description:
      '自治体・観光協会・地域企業のブランド力強化を支援。大型イベントの企画・プロデュースから、SNSによる継続的な情報発信、グッズ展開まで一貫して担当します。',
    points: ['地域イベント企画・プロデュース', 'ブランドコンセプト設計', 'グッズ・コラボ商品企画', 'PR動画の企画・制作'],
    price: '¥500,000〜 / プロジェクト',
  },
  {
    icon: <ShoppingBag size={28} color="#e63946" />,
    bg: 'rgba(230,57,70,0.1)',
    id: 'web',
    title: 'Web・SNS運用',
    sub: '月額契約型のストック収益でデジタル基盤を構築',
    description:
      'Webサイト制作・保守から、Instagram・TikTok・X（Twitter）の運用代行まで。Lark連携による自動化で、低コストながら高品質なデジタル運用を実現します。',
    points: ['Webサイト制作・改善', 'SNS各種運用代行', 'Lステップによるシナリオ構築', 'データ分析レポート（月次）'],
    price: '¥50,000〜 / 月',
  },
];

export default function Services() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装ではLark Base APIに送信
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>OUR SERVICES</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>事業内容</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>
            地方の可能性を最大化する4つのサービス。<br />
            単発の案件から長期パートナーシップまで、柔軟にご対応します。
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              style={{
                background: '#fff',
                borderRadius: '1rem',
                padding: '2.5rem',
                border: '1px solid #f1f5f9',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.875rem', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>SERVICE 0{i + 1}</span>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{s.title}</h2>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.9, marginBottom: '1.25rem' }}>{s.description}</p>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#475569' }}>
                  参考価格：<span style={{ color: '#0f172a', fontSize: '1rem' }}>{s.price}</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>INCLUDES</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {s.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#374151' }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '0.75rem' }}>FREE CONSULTATION</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a' }}>無料相談・お問い合わせ</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '0.9rem' }}>
              フォームにご記入いただくと、Larkカレンダーで日程調整のご案内をお送りします。
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#ecfdf5', borderRadius: '1rem', border: '1px solid #a7f3d0' }}>
              <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#064e3b', marginBottom: '0.5rem' }}>送信完了しました！</h3>
              <p style={{ color: '#065f46', fontSize: '0.9rem' }}>担当者より2営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { id: 'name', label: 'お名前 *', type: 'text', placeholder: '山田 太郎', required: true },
                { id: 'company', label: '会社名 / 団体名', type: 'text', placeholder: '株式会社〇〇', required: false },
                { id: 'email', label: 'メールアドレス *', type: 'email', placeholder: 'info@example.com', required: true },
              ].map(field => (
                <div key={field.id}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>{field.label}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '0.625rem',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>ご希望のサービス</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '0.625rem', fontSize: '0.9rem', outline: 'none', background: '#fff', fontFamily: 'inherit', boxSizing: 'border-box' }}
                >
                  <option value="">選択してください</option>
                  <option value="location">ロケコーディネート</option>
                  <option value="casting">キャスティング</option>
                  <option value="branding">地域ブランディング</option>
                  <option value="web">Web・SNS運用</option>
                  <option value="other">その他・相談</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>お問い合わせ内容</label>
                <textarea
                  rows={5}
                  placeholder="課題やご要望などをお聞かせください"
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '0.625rem',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#f59e0b',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.9rem',
                  borderRadius: '0.625rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontFamily: 'inherit',
                }}
              >
                送信する <Send size={18} />
              </button>

              <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center' }}>
                ※ 送信後、Larkカレンダーで日程調整URLをお送りします
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
