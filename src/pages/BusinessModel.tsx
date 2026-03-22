import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Settings, DollarSign, Zap, Activity, ShieldCheck, PieChart as PieIcon } from 'lucide-react';

const revenueData = [
  { name: 'キャスティング', value: 6000000 },
  { name: 'ロケコーデ', value: 2400000 },
  { name: 'イベント制作', value: 6000000 },
  { name: 'Web/SNS運用', value: 3600000 },
];
const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

const dxEfficiencyData = [
  { name: '1月', manual: 160, automated: 40 },
  { name: '2月', manual: 160, automated: 35 },
  { name: '3月', manual: 160, automated: 30 },
  { name: '4月', manual: 180, automated: 32 },
  { name: '5月', manual: 240, automated: 45 },
];

const kpiCards = [
  { label: '年間目標売上', value: '¥18,000,000', icon: <TrendingUp color="#2563eb" />, trend: '+12.5%', trendBg: '#d1fae5', trendColor: '#065f46' },
  { label: '想定営業利益', value: '¥6,600,000', icon: <DollarSign color="#10b981" />, trend: '36.6% 利益率', trendBg: '#d1fae5', trendColor: '#065f46' },
  { label: 'DX削減時間', value: '128h / 月', icon: <Zap color="#f59e0b" />, trend: '事務コスト 75% 削減', trendBg: '#fef3c7', trendColor: '#92400e' },
  { label: '確定済み報酬', value: '¥600,000', icon: <Activity color="#ef4444" />, trend: '5月イベント分', trendBg: '#d1fae5', trendColor: '#065f46' },
];

const investTable = [
  { item: '営業活動費（招聘・商談）', amount: '¥1,500,000', intent: '大手事務所トップ層の宮崎招聘、独占契約交渉。', result: '¥27,000,000 (グッズ権利)', resultColor: '#10b981' },
  { item: 'IT/システム構築費', amount: '¥500,000', intent: 'Lark/Lステップによる事務局自動化インフラ構築。', result: '人件費 200万円 / 年 削減', resultColor: '#2563eb' },
  { item: '運転予備資金', amount: '¥1,000,000', intent: '不測の事態（イベント延期等）への備え。', result: 'キャッシュフローの絶対安定', resultColor: '#94a3b8' },
];

// System integration diagram node
function SysNode({ label, sub, color }: { label: string; sub: string; color: string }) {
  return (
    <div style={{ background: '#fff', border: `2px solid ${color}`, borderRadius: '0.75rem', padding: '1rem 1.25rem', minWidth: '110px', textAlign: 'center' }}>
      <div style={{ fontWeight: 800, fontSize: '0.95rem', color }}>{label}</div>
      <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.25rem' }}>{sub}</div>
    </div>
  );
}

export default function BusinessModel() {
  return (
    <div style={{ background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>BUSINESS MODEL</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>
            大田の人脈を、<br /><span style={{ color: '#f59e0b' }}>数字で裏付けるビジネスモデル</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>
            高利益フロー収益 × 安定ストック収益 × DX自動化の三位一体モデル。<br />金融機関・投資家向けに、収益の安全性と拡張性をご説明します。
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', color: '#93c5fd', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
            <ShieldCheck size={16} /> 銀行・投資家向け E-E-A-T 構築コンテンツ
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {kpiCards.map((kpi, i) => (
            <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.75rem' }}>{kpi.icon}</div>
                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '9999px', background: kpi.trendBg, color: kpi.trendColor }}>{kpi.trend}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 0.25rem' }}>{kpi.label}</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* フロー vs ストック */}
        <div style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>ハイブリッド収益モデル</h2>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>変動リスクを分散し、売上が落ちる月でも返済原資を確保できる二重収益構造</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#eff6ff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #bfdbfe' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>FLOW REVENUE ／ フロー収益</div>
              <p style={{ fontWeight: 700, color: '#1e3a5f', fontSize: '0.95rem', marginBottom: '0.5rem' }}>高利益・プロジェクト型</p>
              <ul style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 2, paddingLeft: '1rem', margin: 0 }}>
                <li>キャスティング費用（手数料型）</li>
                <li>イベント制作・プロデュース</li>
                <li>グッズ物販（原価率 20〜35%）</li>
                <li>ロケコーディネート</li>
              </ul>
              <div style={{ marginTop: '1rem', fontWeight: 800, color: '#2563eb', fontSize: '1.1rem' }}>目標 ¥14,400,000 / 年</div>
            </div>
            <div style={{ background: '#ecfdf5', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #a7f3d0' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>STOCK REVENUE ／ ストック収益</div>
              <p style={{ fontWeight: 700, color: '#064e3b', fontSize: '0.95rem', marginBottom: '0.5rem' }}>安定・継続契約型</p>
              <ul style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 2, paddingLeft: '1rem', margin: 0 }}>
                <li>Web制作・保守（月額契約）</li>
                <li>SNS運用代行（月額契約）</li>
                <li>ロケ地登録・管理サービス</li>
                <li>EC運用・在庫管理サポート</li>
              </ul>
              <div style={{ marginTop: '1rem', fontWeight: 800, color: '#10b981', fontSize: '1.1rem' }}>目標 ¥3,600,000 / 年</div>
            </div>
          </div>
          <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: '#eff6ff', borderRadius: '0.5rem', border: '1px solid #bfdbfe', fontSize: '0.8rem', color: '#1d4ed8' }}>
            <strong>銀行への訴求:</strong> 継続契約型（Web/SNS・ロケ）が売上の40%を占め、月次の安定した返済原資を確保。フロー収益が落ちる月もストック収益がバッファとして機能します。
          </div>
        </div>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
              <PieIcon size={18} color="#94a3b8" /> 事業別売上構成（多角化リスク分散）
            </h3>
            <div style={{ height: '16rem' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={revenueData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={5} dataKey="value">
                    {revenueData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v) => `¥${Number(v).toLocaleString()}`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a' }}>
              <Zap size={18} color="#94a3b8" /> DX自動化による「少人数高収益」モデル
            </h3>
            <div style={{ height: '16rem' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dxEfficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} unit="h" />
                  <Tooltip cursor={{ fill: '#f8fafc' }} />
                  <Legend />
                  <Bar name="手動作業 (IT未導入想定)" dataKey="manual" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  <Bar name="IT自動化後の作業時間" dataKey="automated" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.75rem', fontStyle: 'italic' }}>
              ※Lark Base・Lステップによる「ロケ地管理・在庫管理・収支計算」自動化効果。
            </p>
          </div>
        </div>

        {/* System Integration Diagram */}
        <div style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
            <Settings size={18} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            システム連携図 ── 事務作業の極限自動化
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>外部人材・事務スタッフ0名でも大規模イベント運営を実現する自動化インフラ</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '0.75rem' }}>
            <SysNode label="Lark" sub="業務管理 / DB" color="#2563eb" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowRight size={20} color="#94a3b8" />
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>自動連携</span>
            </div>
            <SysNode label="Lステップ" sub="LINE自動応答" color="#10b981" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowRight size={20} color="#94a3b8" />
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>購買誘導</span>
            </div>
            <SysNode label="Stripe" sub="決済処理" color="#f59e0b" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowRight size={20} color="#94a3b8" />
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>売上計上</span>
            </div>
            <SysNode label="Lark Base" sub="収支・在庫DB" color="#2563eb" />
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['事務スタッフ 0名運営', '在庫管理 自動化', '請求書 自動発行', 'LINE→購買 自動導線'].map(tag => (
              <span key={tag} style={{ background: '#eff6ff', color: '#2563eb', fontSize: '0.7rem', fontWeight: 600, padding: '0.3rem 0.7rem', borderRadius: '9999px', border: '1px solid #bfdbfe' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Investment Table */}
        <div style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', border: '1px solid #f1f5f9', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>500万円融資の「使途」と「将来の利益創出」の論理</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>融資希望額</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563eb', margin: 0 }}>¥5,000,000</p>
              </div>
              <div style={{ width: '1px', background: '#e2e8f0' }} />
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>返済負担率 (初年度)</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', margin: 0 }}>17.5%</p>
              </div>
            </div>
          </div>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                {['投資項目', '金額', '戦略的意図', '期待されるリターン'].map(h => (
                  <th key={h} style={{ paddingBottom: '0.75rem', fontWeight: 600, color: '#64748b', fontSize: '0.8rem', paddingRight: '1rem' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investTable.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '1rem 1rem 1rem 0', fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>{row.item}</td>
                  <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#1e293b', whiteSpace: 'nowrap' }}>{row.amount}</td>
                  <td style={{ padding: '1rem', fontSize: '0.78rem', color: '#475569' }}>{row.intent}</td>
                  <td style={{ padding: '1rem 0 1rem 1rem', fontSize: '0.85rem', fontWeight: 700, color: row.resultColor, textAlign: 'right', whiteSpace: 'nowrap' }}>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>詳細な事業計画書・収支シミュレーションをご希望の方はご相談ください</p>
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
            個別相談を予約する <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
