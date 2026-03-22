import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import {
  TrendingUp, Settings, DollarSign,
  ShieldCheck, Zap, Activity, PieChart as PieIcon
} from 'lucide-react';

const App = () => {
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

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '2rem', fontFamily: 'sans-serif', color: '#1e293b' }}>
      {/* Header */}
      <header style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0 }}>SCENEWORKS 経営管理ダッシュボード</h1>
          <p style={{ color: '#64748b', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={18} color="#2563eb" />
            次世代型DXエンターテインメント経営モデル
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '0.75rem 1rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>融資希望額</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>¥5,000,000</p>
          </div>
          <div style={{ width: '1px', height: '2.5rem', background: '#e2e8f0' }}></div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>返済負担率 (初年度)</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981', margin: 0 }}>17.5%</p>
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { label: '年間目標売上', value: '¥18,000,000', icon: <TrendingUp color="#2563eb" />, trend: '+12.5%', trendBg: '#d1fae5', trendColor: '#065f46' },
          { label: '想定営業利益', value: '¥6,600,000', icon: <DollarSign color="#10b981" />, trend: '36.6% 利益率', trendBg: '#d1fae5', trendColor: '#065f46' },
          { label: 'DX削減時間', value: '128h / 月', icon: <Zap color="#f59e0b" />, trend: '事務コスト 75% 削減', trendBg: '#fef3c7', trendColor: '#92400e' },
          { label: '確定済み報酬', value: '¥600,000', icon: <Activity color="#ef4444" />, trend: '5月イベント分', trendBg: '#d1fae5', trendColor: '#065f46' },
        ].map((kpi, i) => (
          <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.75rem' }}>{kpi.icon}</div>
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '9999px', background: kpi.trendBg, color: kpi.trendColor }}>
                {kpi.trend}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 0.25rem' }}>{kpi.label}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{kpi.value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {/* Revenue Pie */}
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PieIcon size={20} color="#94a3b8" />
            事業別売上構成（多角化によるリスク分散）
          </h3>
          <div style={{ height: '16rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={revenueData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {revenueData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#eff6ff', borderRadius: '0.75rem', border: '1px solid #bfdbfe' }}>
            <p style={{ fontSize: '0.75rem', color: '#1d4ed8', margin: 0, lineHeight: 1.6 }}>
              <strong>銀行への訴求:</strong> 継続契約型（Web/SNS・ロケ）が売上の40%を占め、月次の安定した返済原資を確保。
            </p>
          </div>
        </div>

        {/* DX Bar Chart */}
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={20} color="#94a3b8" />
            IT自動化による「少人数高収益」モデルの証明
          </h3>
          <div style={{ height: '16rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dxEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} unit="h" />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Legend />
                <Bar name="手動作業 (ITなし想定)" dataKey="manual" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                <Bar name="IT自動化後の作業時間" dataKey="automated" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #f1f5f9' }}>
            <p style={{ fontSize: '0.75rem', color: '#475569', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              ※Lark BaseおよびLステップによる「ロケ地管理・在庫管理・収支計算」の自動化効果。事務スタッフ0名でも大規模イベントの運営が可能。
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Table */}
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', overflowX: 'auto' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Settings size={20} color="#94a3b8" />
          500万円融資の「使途」と「将来の利益創出」の論理
        </h3>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              {['投資項目', '金額', '戦略的意図', '期待される成果（リターン）'].map(h => (
                <th key={h} style={{ paddingBottom: '1rem', fontWeight: 600, color: '#64748b', fontSize: '0.85rem' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { item: '営業活動費（招聘・商談）', amount: '¥1,500,000', intent: '大手事務所トップ層の宮崎招聘、独占契約交渉。', result: '¥27,000,000 (グッズ権利)', resultColor: '#10b981' },
              { item: 'IT/システム構築費', amount: '¥500,000', intent: 'Lark/Lステップによる事務局自動化インフラ構築。', result: '人件費 200万円 / 年 削減', resultColor: '#2563eb' },
              { item: '運転予備資金', amount: '¥1,000,000', intent: '不測の事態（イベント延期等）への備え。', result: 'キャッシュフローの絶対安定', resultColor: '#94a3b8' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                <td style={{ padding: '1rem 0.5rem 1rem 0', fontWeight: 'bold', fontSize: '0.875rem' }}>{row.item}</td>
                <td style={{ padding: '1rem 0.5rem', fontSize: '0.875rem' }}>{row.amount}</td>
                <td style={{ padding: '1rem 0.5rem', fontSize: '0.75rem', color: '#475569' }}>{row.intent}</td>
                <td style={{ padding: '1rem 0 1rem 0.5rem', fontSize: '0.875rem', fontWeight: 'bold', color: row.resultColor, textAlign: 'right' }}>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer style={{ marginTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem' }}>
        <p>© 2026 SCENEWORKS INC. Powered by Sasa-yell DX Solutions</p>
      </footer>
    </div>
  );
};

export default App;
