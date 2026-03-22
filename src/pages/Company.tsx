const lbl = { fontSize: '0.68rem', letterSpacing: '0.18em', color: '#c4a35a', textTransform: 'uppercase' as const };

const tableRows = [
  { label: '商号',         value: '株式会社 SCENEWORKS（スケーンワークス）' },
  { label: '代表取締役',   value: '大田 安臣' },
  { label: '設立',         value: '2023 年 4 月' },
  { label: '所在地',       value: '〒880-0000 宮崎県宮崎市（詳細は別途お問い合わせ）' },
  { label: '事業内容',     value: 'ロケコーディネート、キャスティング、地域ブランディング、Web・SNS 運用、グッズ企画・販売' },
  { label: '資本金',       value: '300 万円' },
  { label: '取引銀行',     value: '宮崎銀行 / 南九州農業協同組合' },
  { label: '主要取引先',   value: '株式会社プリコム（宮崎）、ささエール（鹿児島）、各地方自治体・観光協会' },
  { label: '使用システム', value: 'Lark（業務管理）、Lステップ（LINE 自動化）、Stripe（決済）' },
  { label: '公式メール',   value: 'info@sceneworks.jp' },
];

const tokushoRows = [
  { label: '販売業者',         value: '株式会社 SCENEWORKS' },
  { label: '代表責任者',       value: '大田 安臣' },
  { label: '所在地',           value: '宮崎県宮崎市（詳細はご注文後にお知らせします）' },
  { label: '電話番号',         value: 'お問い合わせフォームよりご連絡ください（電話対応：平日 10:00〜18:00）' },
  { label: 'メールアドレス',   value: 'info@sceneworks.jp' },
  { label: '販売価格',         value: '各商品ページに記載（税込価格）' },
  { label: '送料',             value: '全国一律 ¥550（税込）/ ¥5,000 以上のご購入で送料無料' },
  { label: 'お支払い方法',     value: 'クレジットカード（Stripe 決済）/ LINE Pay' },
  { label: 'お支払い時期',     value: 'ご注文時にお支払い確定' },
  { label: '商品の引渡し時期', value: 'ご入金確認後、3〜5 営業日以内に発送' },
  { label: '返品・交換',       value: '商品到着後 7 日以内、未開封・未使用品に限り返品・交換可（送料はお客様負担）' },
  { label: '不良品の場合',     value: '当社負担にて返品・交換対応いたします。商品到着後 7 日以内にご連絡ください' },
  { label: '事業者の特別条件', value: '販売数量限定商品につきキャンセル不可の場合があります。商品ページに別途記載します' },
];

function InfoTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} style={{ borderBottom: '1px solid #f0ede5' }}>
            <th style={{ padding: '1.1rem 1.25rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', color: '#999', background: '#f5f4ee', whiteSpace: 'nowrap', width: '28%', verticalAlign: 'top' }}>
              {row.label}
            </th>
            <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.875rem', color: '#333', lineHeight: 1.8 }}>
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Company() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0d0c0a', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ ...lbl, marginBottom: '1.5rem' }}>Company</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f0ede5', lineHeight: 1.25, marginBottom: '1.25rem' }}>会社概要</h1>
          <p style={{ color: '#6e6b62', fontSize: '0.9rem', lineHeight: 1.9 }}>
            SCENEWORKS の企業情報および特定商取引法に基づく表記をご確認いただけます。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section style={{ background: '#f5f4ee', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <p style={lbl}>会社情報</p>
            <span style={{ flex: 1, height: '1px', background: '#dddad4' }} />
          </div>
          <div style={{ border: '1px solid #e0ddd7', overflow: 'hidden' }}>
            <InfoTable rows={tableRows} />
          </div>
        </div>
      </section>

      {/* 特定商取引法 */}
      <section style={{ background: '#fff', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <p style={lbl}>特定商取引法に基づく表記</p>
            <span style={{ flex: 1, height: '1px', background: '#e0ddd7' }} />
          </div>
          <p style={{ fontSize: '0.78rem', color: '#aaa', marginBottom: '2.5rem' }}>
            特定商取引に関する法律第 11 条（通信販売についての広告）に基づく表示
          </p>
          <div style={{ border: '1px solid #e0ddd7', overflow: 'hidden' }}>
            <InfoTable rows={tokushoRows} />
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section style={{ background: '#f5f4ee', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <p style={lbl}>プライバシーポリシー</p>
            <span style={{ flex: 1, height: '1px', background: '#dddad4' }} />
          </div>
          <div style={{ background: '#fff', padding: '2.5rem', border: '1px solid #e0ddd7' }}>
            <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 2, marginBottom: '1.5rem' }}>
              株式会社 SCENEWORKS（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下の方針に従って個人情報を取り扱います。
            </p>
            <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '個人情報は、お問い合わせ対応・商品発送・サービス提供の目的のみに使用します。',
                '法令に基づく場合を除き、第三者への提供は行いません。',
                '個人情報の開示・訂正・削除をご希望の場合は、info@sceneworks.jp までご連絡ください。',
                '当社ウェブサイトでは、Google アナリティクス等のアクセス解析ツールを使用しています。',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.9 }}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
