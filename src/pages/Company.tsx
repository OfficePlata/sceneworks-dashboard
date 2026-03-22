export default function Company() {
  const tableRows = [
    { label: '商号', value: '株式会社SCENEWORKS（スケーンワークス）' },
    { label: '代表取締役', value: '大田 拓也' },
    { label: '設立', value: '2023年4月' },
    { label: '所在地', value: '〒880-0000 宮崎県宮崎市（詳細は別途お問い合わせ）' },
    { label: '事業内容', value: 'ロケコーディネート、キャスティング、地域ブランディング、Web・SNS運用、グッズ企画・販売' },
    { label: '資本金', value: '300万円' },
    { label: '取引銀行', value: '宮崎銀行 / 南九州農業協同組合' },
    { label: '主要取引先', value: '株式会社プリコム（宮崎）、ささエール（鹿児島）、各地方自治体・観光協会' },
    { label: '使用システム', value: 'Lark（業務管理）、Lステップ（LINE自動化）、Stripe（決済）' },
    { label: '公式メール', value: 'info@sceneworks.jp' },
  ];

  const tokushoRows = [
    { label: '販売業者', value: '株式会社SCENEWORKS' },
    { label: '代表責任者', value: '大田 拓也' },
    { label: '所在地', value: '宮崎県宮崎市（詳細はご注文後にお知らせします）' },
    { label: '電話番号', value: 'お問い合わせフォームよりご連絡ください（電話対応：平日10:00〜18:00）' },
    { label: 'メールアドレス', value: 'info@sceneworks.jp' },
    { label: '販売価格', value: '各商品ページに記載（税込価格）' },
    { label: '送料', value: '全国一律 ¥550（税込）/ ¥5,000以上のご購入で送料無料' },
    { label: 'お支払い方法', value: 'クレジットカード（Stripe決済）/ LINE Pay' },
    { label: 'お支払い時期', value: 'ご注文時にお支払い確定' },
    { label: '商品の引渡し時期', value: 'ご入金確認後、3〜5営業日以内に発送' },
    { label: '返品・交換', value: '商品到着後7日以内、未開封・未使用品に限り返品・交換可（送料はお客様負担）' },
    { label: '不良品の場合', value: '当社負担にて返品・交換対応いたします。商品到着後7日以内にご連絡ください' },
    { label: '事業者の特別条件', value: '販売数量限定商品につきキャンセル不可の場合があります。商品ページに別途記載します' },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '6rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f59e0b', marginBottom: '1rem' }}>COMPANY</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#f8fafc', lineHeight: 1.25, marginBottom: '1rem' }}>会社概要</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.9 }}>
            SCENEWORKSの企業情報および特定商取引法に基づく表記をご確認いただけます。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '2px solid #f59e0b', display: 'inline-block' }}>
            会社情報
          </h2>
          <div style={{ background: '#fff', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.825rem', fontWeight: 600, color: '#64748b', background: '#f8fafc', whiteSpace: 'nowrap', width: '30%', verticalAlign: 'top' }}>
                      {row.label}
                    </th>
                    <td style={{ padding: '1rem 1.25rem', fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.7 }}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 特定商取引法 */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid #f59e0b', display: 'inline-block' }}>
            特定商取引法に基づく表記
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '2rem', marginTop: '0.5rem' }}>
            特定商取引に関する法律第11条（通信販売についての広告）に基づく表示
          </p>
          <div style={{ background: '#f8fafc', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {tokushoRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.825rem', fontWeight: 600, color: '#64748b', background: '#fff', whiteSpace: 'nowrap', width: '30%', verticalAlign: 'top' }}>
                      {row.label}
                    </th>
                    <td style={{ padding: '1rem 1.25rem', fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.7, background: '#f8fafc' }}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section style={{ background: '#f8fafc', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid #f59e0b', display: 'inline-block' }}>
            プライバシーポリシー（概要）
          </h2>
          <div style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', border: '1px solid #f1f5f9', fontSize: '0.875rem', color: '#475569', lineHeight: 2 }}>
            <p>株式会社SCENEWORKS（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下の方針に従って個人情報を取り扱います。</p>
            <ol style={{ paddingLeft: '1.25rem', marginTop: '1rem' }}>
              <li>個人情報は、お問い合わせ対応・商品発送・サービス提供の目的のみに使用します。</li>
              <li>法令に基づく場合を除き、第三者への提供は行いません。</li>
              <li>個人情報の開示・訂正・削除をご希望の場合は、info@sceneworks.jp までご連絡ください。</li>
              <li>当社ウェブサイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
