import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const revenueData = [
  { name: 'キャスティング', value: 6000000 },
  { name: 'ロケコーデ',     value: 2400000 },
  { name: 'イベント制作',   value: 6000000 },
  { name: 'Web/SNS運用',    value: 3600000 },
];
const COLORS = ['#111111', '#c4a35a', '#888888', '#e0ddd7'];

const dxData = [
  { name: '1月', manual: 160, automated: 40 },
  { name: '2月', manual: 160, automated: 35 },
  { name: '3月', manual: 160, automated: 30 },
  { name: '4月', manual: 180, automated: 32 },
  { name: '5月', manual: 240, automated: 45 },
];

const kpis = [
  { label: '年間目標売上',   value: '¥18,000,000', note: '前年比 +12.5%' },
  { label: '想定営業利益',   value: '¥6,600,000',  note: '利益率 36.6%' },
  { label: 'DX 削減時間',    value: '128 h / 月',  note: '事務コスト 75% 削減' },
  { label: '確定済み報酬',   value: '¥600,000',    note: '5 月イベント分' },
];

const invest = [
  { item: '営業活動費（招聘・商談）', amount: '¥1,500,000', intent: '大手事務所トップ層の宮崎招聘、独占契約交渉。', result: '¥27,000,000（グッズ権利）' },
  { item: 'IT / システム構築費',      amount: '¥500,000',   intent: 'Lark / Lステップによる事務局自動化インフラ構築。', result: '人件費 200 万円 / 年 削減' },
  { item: '運転予備資金',             amount: '¥1,000,000', intent: '不測の事態（イベント延期等）への備え。', result: 'キャッシュフローの安定確保' },
];

const lbl = { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const };
const card = { background: '#fff', border: '1px solid #e0ddd7', padding: '2rem' };

export default function BusinessModel() {
  return (
    <div style={{ background: '#f5f4ee' }}>
      {/* Hero */}
      <section style={{ background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ ...lbl, marginBottom: '1.5rem' }}>Business Model</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            大田の人脈を、<br /><em style={{ fontStyle: 'normal', color: '#c4a35a' }}>数字で裏付けるビジネスモデル</em>
          </h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            高利益フロー収益 × 安定ストック収益 × DX 自動化の三位一体モデル。<br />
            金融機関・投資家向けに収益の安全性と拡張性をご説明します。
          </p>
          <span style={{ display: 'inline-block', border: '1px solid #252219', color: '#6e6b62', fontSize: '0.72rem', padding: '0.4rem 1rem', letterSpacing: '0.08em' }}>
            銀行・投資家向け E-E-A-T 構築コンテンツ
          </span>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* KPI */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: '#e0ddd7', border: '1px solid #e0ddd7', marginBottom: '2.5rem' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ background: '#fff', padding: '1.75rem' }}>
              <p style={{ fontSize: '0.72rem', color: '#999', marginBottom: '0.5rem' }}>{k.label}</p>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.4rem', fontWeight: 700, color: '#111', marginBottom: '0.25rem' }}>{k.value}</p>
              <p style={{ fontSize: '0.72rem', color: '#c4a35a' }}>{k.note}</p>
            </div>
          ))}
        </div>

        {/* フロー vs ストック */}
        <div style={{ ...card, marginBottom: '2rem' }}>
          <p style={{ ...lbl, marginBottom: '1.25rem' }}>Hybrid Revenue Model</p>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>ハイブリッド収益モデル</h2>
          <p style={{ fontSize: '0.82rem', color: '#777', marginBottom: '1.75rem' }}>変動リスクを分散し、売上が落ちる月でも返済原資を確保できる二重収益構造</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#e0ddd7' }}>
            {[
              { type: 'フロー収益', eng: 'Flow Revenue', color: '#111', items: ['キャスティング費用（手数料型）', 'イベント制作・プロデュース', 'グッズ物販（原価率 20〜35%）', 'ロケコーディネート'], target: '目標 ¥14,400,000 / 年' },
              { type: 'ストック収益', eng: 'Stock Revenue', color: '#c4a35a', items: ['Web 制作・保守（月額契約）', 'SNS 運用代行（月額契約）', 'ロケ地登録・管理サービス', 'EC 運用・在庫管理サポート'], target: '目標 ¥3,600,000 / 年' },
            ].map(r => (
              <div key={r.type} style={{ background: '#fff', padding: '1.75rem' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: r.color, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{r.eng}</p>
                <p style={{ fontWeight: 700, color: '#111', fontSize: '0.95rem', marginBottom: '1rem' }}>{r.type}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {r.items.map(it => (
                    <li key={it} style={{ fontSize: '0.8rem', color: '#555', padding: '0.35rem 0', borderBottom: '1px solid #f5f4ee', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '4px', height: '4px', background: r.color, flexShrink: 0 }} />{it}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '1rem', fontWeight: 700, color: r.color, fontSize: '0.9rem' }}>{r.target}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', padding: '0.85rem 1rem', background: '#f5f4ee', borderLeft: '2px solid #c4a35a', fontSize: '0.78rem', color: '#555' }}>
            <strong>銀行への訴求：</strong>継続契約型（Web/SNS・ロケ）が売上の 40% を占め、月次の安定した返済原資を確保。フロー収益が落ちる月もストック収益がバッファとして機能します。
          </div>
        </div>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: '#e0ddd7', border: '1px solid #e0ddd7', marginBottom: '2rem' }}>
          <div style={{ background: '#fff', padding: '2rem' }}>
            <p style={{ ...lbl, marginBottom: '1.25rem' }}>Revenue Mix</p>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '1.5rem' }}>事業別売上構成（多角化リスク分散）</h3>
            <div style={{ height: '220px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={revenueData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                    {revenueData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v) => `¥${Number(v).toLocaleString()}`} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '0.75rem' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div style={{ background: '#fff', padding: '2rem' }}>
            <p style={{ ...lbl, marginBottom: '1.25rem' }}>DX Efficiency</p>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '1.5rem' }}>IT 自動化による「少人数高収益」モデル</h3>
            <div style={{ height: '220px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dxData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0ede5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#999', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#999', fontSize: 11 }} unit="h" />
                  <Tooltip cursor={{ fill: '#f5f4ee' }} />
                  <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
                  <Bar name="手動作業（IT 未導入想定）" dataKey="manual"    fill="#e0ddd7" radius={[2,2,0,0]} />
                  <Bar name="IT 自動化後の作業時間"     dataKey="automated" fill="#111"    radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* System diagram */}
        <div style={{ ...card, marginBottom: '2rem' }}>
          <p style={{ ...lbl, marginBottom: '1.25rem' }}>System Integration</p>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>システム連携図 ── 事務作業の極限自動化</h2>
          <p style={{ fontSize: '0.82rem', color: '#777', marginBottom: '1.75rem' }}>外部人材・事務スタッフ 0 名でも大規模イベント運営を実現する自動化インフラ</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', padding: '2rem', background: '#f5f4ee' }}>
            {[
              { label: 'Lark', sub: '業務管理 / DB' },
              null,
              { label: 'Lステップ', sub: 'LINE 自動応答' },
              null,
              { label: 'Stripe', sub: '決済処理' },
              null,
              { label: 'Lark Base', sub: '収支・在庫 DB' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                  <span style={{ color: '#c4a35a', fontSize: '1rem' }}>→</span>
                  <span style={{ fontSize: '0.6rem', color: '#999' }}>自動連携</span>
                </div>
              ) : (
                <div key={i} style={{ border: '1px solid #e0ddd7', background: '#fff', padding: '0.9rem 1.25rem', textAlign: 'center', minWidth: '100px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111' }}>{item.label}</div>
                  <div style={{ fontSize: '0.68rem', color: '#999', marginTop: '0.2rem' }}>{item.sub}</div>
                </div>
              )
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {['事務スタッフ 0 名運営', '在庫管理 自動化', '請求書 自動発行', 'LINE → 購買 自動導線'].map(t => (
              <span key={t} style={{ border: '1px solid #e0ddd7', color: '#777', fontSize: '0.7rem', padding: '0.3rem 0.75rem' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* 融資計画 */}
        <div style={{ ...card, marginBottom: '3rem', overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.75rem' }}>
            <div>
              <p style={{ ...lbl, marginBottom: '0.75rem' }}>Investment Plan</p>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111' }}>500 万円融資の「使途」と「将来の利益創出」の論理</h2>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div><p style={{ fontSize: '0.68rem', color: '#999', marginBottom: '0.2rem' }}>融資希望額</p><p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111' }}>¥5,000,000</p></div>
              <div><p style={{ fontSize: '0.68rem', color: '#999', marginBottom: '0.2rem' }}>返済負担率（初年度）</p><p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.3rem', fontWeight: 700, color: '#c4a35a' }}>17.5%</p></div>
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #111' }}>
                {['投資項目', '金額', '戦略的意図', '期待されるリターン'].map(h => (
                  <th key={h} style={{ paddingBottom: '0.75rem', textAlign: 'left', fontSize: '0.72rem', letterSpacing: '0.08em', color: '#999', paddingRight: '1.5rem' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invest.map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0ede5' }}>
                  <td style={{ padding: '1rem 1.5rem 1rem 0', fontWeight: 700, fontSize: '0.85rem', color: '#111' }}>{r.item}</td>
                  <td style={{ padding: '1rem 1.5rem 1rem 0', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>{r.amount}</td>
                  <td style={{ padding: '1rem 1.5rem 1rem 0', fontSize: '0.78rem', color: '#666' }}>{r.intent}</td>
                  <td style={{ padding: '1rem 0', fontSize: '0.85rem', fontWeight: 700, color: '#c4a35a', textAlign: 'right', whiteSpace: 'nowrap' }}>{r.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#777', fontSize: '0.875rem', marginBottom: '1.5rem' }}>詳細な事業計画書・収支シミュレーションをご希望の方はご相談ください</p>
          <Link to="/services" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#111', color: '#f0ede5', fontSize: '0.82rem', letterSpacing: '0.08em', padding: '0.85rem 2rem' }}>
            個別相談を予約する <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
