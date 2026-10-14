const capabilities = [
  ['POS & Counter Orders', 'Fast order entry for dine-in and takeaway workflows.', 'M4 4h16v12H4z M8 20h8 M12 16v4 M7 8h4 M7 11h8'],
  ['QR Ordering', 'Let guests browse the menu and place table orders from their phones.', 'M3 3h6v6H3z M15 3h6v6h-6z M3 15h6v6H3z M15 15h2v2h-2z M21 15v6h-6 M12 3v3 M3 12h3 M12 12h5'],
  ['Kitchen Workflow', 'Keep incoming, accepted, preparing and ready orders visible to the team.', 'M5 4h14v17l-3-2-4 2-4-2-3 2z M8 8h8 M8 12h5 M8 16h8'],
  ['Billing & Payments', 'Turn restaurant activity into clear bills and payment workflows.', 'M3 5h18v14H3z M3 10h18 M7 15h3 M15 15h2'],
  ['Expenses & Operations', 'Keep everyday restaurant expenses alongside operating activity.', 'M4 21V11h4v10 M10 21V6h4v15 M16 21V3h4v18 M2 21h20'],
  ['Customer Loyalty', 'Build restaurant-specific rewards designed to encourage repeat visits.', 'm12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z'],
]

function StepArrow() {
  return <svg className="micro-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 8h11 m-4-4 4 4-4 4" /></svg>
}

function CapabilityArt({ qr }: { qr: boolean }) {
  return <div className={`capability-art ${qr ? 'phone-art' : 'order-art'}`} aria-hidden="true"><div className="art-panel">{qr ? <><span className="art-phone-line" /><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={capabilities[1][2]} /></svg><span className="art-phone-line" /><span className="art-phone-line short" /></> : <>{[0, 1, 2].map(item => <div className="art-order-line" key={item}><i /><span /><b /></div>)}</>}</div></div>
}

export default function Capabilities() {
  return (
    <div className="capability-grid reveal-stagger">
      {capabilities.map(([title, copy, path], index) => (
        <article className={`capability capability-${index + 1} reveal-up`} key={title} data-reveal data-reveal-delay={index * 65}>
          <div className="capability-top"><span className="capability-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg></span><span className="capability-number">0{index + 1}</span></div>
          {index < 2 && <CapabilityArt qr={index === 1} />}
          <h3>{title}</h3><p>{copy}</p>
          <div className="capability-detail" aria-hidden="true">
            {index === 0 && <div className="mini-order"><span className="mini-table">04</span><span><strong>Table order</strong><small>Dine-in · 3 items</small></span><span className="mini-order-status">Accepted <i /></span></div>}
            {index === 1 && <div className="mini-qr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={path} /></svg><div><strong>Scan. Order. Enjoy.</strong><small>From your guests' phones.</small></div><span>↗</span></div>}
            {index === 2 && <div className="mini-workflow"><span>Accepted</span><StepArrow /><span className="mini-preparing">Preparing</span><StepArrow /><span>Ready</span></div>}
            {index === 3 && <div className="mini-bill"><span className="bill-step"><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={capabilities[2][2]} /></svg></b>Order</span><i /><span className="bill-step"><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={capabilities[3][2]} /></svg></b>Bill</span><i /><span className="bill-step mini-bill-check"><b>✓</b>Payment</span></div>}
            {index === 4 && <div className="mini-expense"><span>Daily expenses</span><div><i /><i /><i /><i /><i /></div></div>}
            {index === 5 && <div className="mini-loyalty"><span>✦</span><div><strong>Every visit counts.</strong><small>Rewards made for your restaurant.</small></div></div>}
          </div>
        </article>
      ))}
    </div>
  )
}
