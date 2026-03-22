import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

const services = [
  {
    num: '01', id: 'location', title: 'ロケコーディネート', sub: '九州・宮崎エリアの最適なロケ地を一括管理',
    description: '代表の地元ネットワークを活かし、映画・CM・ドラマのロケ地選定から撮影管理、地権者交渉まで一括でサポート。Lark Base による独自ロケ地データベースにより、最短 1 日での候補地提案が可能です。',
    points: ['独自ロケ地 DB（300 件以上）', '地権者・自治体との交渉代行', '撮影当日の現地立ち会い', '行政許可申請サポート'],
    price: '¥150,000〜 / 件',
  },
  {
    num: '02', id: 'casting', title: 'キャスティング', sub: '200 名超のタレントネットワークで最適な人選を',
    description: '俳優・モデル・タレントのキャスティングから、YouTuber や地域インフルエンサーの手配まで対応。代表の直接ネットワークにより、通常より迅速かつ低コストでの調整を実現します。',
    points: ['直接交渉による迅速対応', 'オーディション企画・運営', '契約書類の作成・管理', '地方在住クリエイターの発掘'],
    price: '¥200,000〜 / 件',
  },
  {
    num: '03', id: 'branding', title: '地域ブランディング', sub: 'イベント企画から SNS 展開まで、地域の魅力を発信',
    description: '自治体・観光協会・地域企業のブランド力強化を支援。大型イベントの企画・プロデュースから、SNS による継続的な情報発信、グッズ展開まで一貫して担当します。',
    points: ['地域イベント企画・プロデュース', 'ブランドコンセプト設計', 'グッズ・コラボ商品企画', 'PR 動画の企画・制作'],
    price: '¥500,000〜 / プロジェクト',
  },
  {
    num: '04', id: 'web', title: 'Web・SNS 運用', sub: '月額契約型のストック収益でデジタル基盤を構築',
    description: 'Web サイト制作・保守から、Instagram・TikTok・X（Twitter）の運用代行まで。Lark 連携による自動化で、低コストながら高品質なデジタル運用を実現します。',
    points: ['Web サイト制作・改善', 'SNS 各種運用代行', 'Lステップによるシナリオ構築', 'データ分析レポート（月次）'],
    price: '¥50,000〜 / 月',
  },
];

const lbl = { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const };

export default function Services() {
  const [form, setForm] = useState({ name: '', company: '', email: '', service: '', message: '' });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ ...lbl, marginBottom: '1.5rem' }}>Our Services</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>事業内容</h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9 }}>地方の可能性を最大化する 4 つのサービス。単発の案件から長期パートナーシップまで、柔軟にご対応します。</p>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#f5f4ee', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1px', background: '#e0ddd7', border: '1px solid #e0ddd7' }}>
          {services.map((s) => (
            <div key={s.id} id={s.id} style={{ background: '#fff', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.62rem', color: '#c4a35a', letterSpacing: '0.15em' }}>{s.num}</span>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111' }}>{s.title}</h2>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.85rem' }}>{s.sub}</p>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.9, marginBottom: '1.25rem' }}>{s.description}</p>
                <p style={{ fontSize: '0.82rem', color: '#777' }}>参考価格：<strong style={{ color: '#111' }}>{s.price}</strong></p>
              </div>
              <div>
                <p style={{ ...lbl, marginBottom: '1rem' }}>Includes</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {s.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#333' }}>
                      <CheckCircle2 size={14} color="#c4a35a" style={{ flexShrink: 0 }} />
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
      <section id="contact" style={{ background: '#fff', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ ...lbl, marginBottom: '1.25rem' }}>Free Consultation</p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#111', marginBottom: '0.75rem' }}>無料相談・お問い合わせ</h2>
            <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.9 }}>フォームにご記入いただくと、Lark カレンダーで日程調整のご案内をお送りします。</p>
          </div>

          {done ? (
            <div style={{ padding: '3rem', border: '1px solid #e0ddd7', textAlign: 'center' }}>
              <CheckCircle2 size={40} color="#c4a35a" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>送信完了しました</h3>
              <p style={{ color: '#777', fontSize: '0.875rem' }}>担当者より 2 営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { id: 'name',    label: 'お名前 *',          type: 'text',  ph: '山田 太郎',          req: true },
                { id: 'company', label: '会社名 / 団体名',    type: 'text',  ph: '株式会社〇〇',        req: false },
                { id: 'email',   label: 'メールアドレス *',   type: 'email', ph: 'info@example.com',   req: true },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>{f.label}</label>
                  <input type={f.type} required={f.req} placeholder={f.ph}
                    value={form[f.id as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e0ddd7', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' as const }} />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>ご希望のサービス</label>
                <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e0ddd7', fontSize: '0.875rem', outline: 'none', background: '#fff', fontFamily: 'inherit', boxSizing: 'border-box' as const }}>
                  <option value="">選択してください</option>
                  <option value="location">ロケコーディネート</option>
                  <option value="casting">キャスティング</option>
                  <option value="branding">地域ブランディング</option>
                  <option value="web">Web・SNS 運用</option>
                  <option value="other">その他・相談</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>お問い合わせ内容</label>
                <textarea rows={5} placeholder="課題やご要望などをお聞かせください"
                  value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e0ddd7', fontSize: '0.875rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' as const }} />
              </div>
              <button type="submit" style={{ background: '#111', color: '#f0ede5', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', padding: '1rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'inherit' }}>
                送信する <Send size={15} />
              </button>
              <p style={{ fontSize: '0.72rem', color: '#aaa', textAlign: 'center' }}>送信後、Lark カレンダーで日程調整 URL をお送りします</p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
