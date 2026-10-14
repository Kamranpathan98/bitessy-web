export default function ProductVisual() {
  return (
    <figure className="product-visual" aria-label="Illustrative RewardBite workspace. All orders and balances shown are fictional demo data.">
      <div className="visual-glow" aria-hidden="true" />
      <svg className="visual-connections" viewBox="0 0 600 650" fill="none" aria-hidden="true"><path d="M472 100V178H400M92 502V434H155M483 569V493H435" /><circle cx="400" cy="178" r="3"/><circle cx="155" cy="434" r="3"/><circle cx="435" cy="493" r="3"/></svg>
      <div className="workspace-card" aria-hidden="true">
        <div className="workspace-top">
          <span className="product-brand"><span className="product-symbol">r.</span>RewardBite</span>
          <span className="workspace-demo">Demo workspace</span>
        </div>
        <div className="workspace-tabs"><span className="active-tab">Orders</span><span>Menu</span><span>Customers</span><span className="workspace-more">•••</span></div>
        <div className="workspace-body">
          <div className="order-heading"><div><span className="mini-label">DINE-IN / ORDER #024</span><h3>Table 04<span className="table-detail">4 seats</span></h3></div><span className="status"><i />Open</span></div>
          <div className="order-column-labels"><span>Item</span><span>Amount</span></div>
          <div className="order-line"><span className="item-quantity">1</span><div><strong>Paneer Tikka</strong><small>Fresh from the tandoor</small></div><span className="item-price">₹280</span></div>
          <div className="order-line"><span className="item-quantity">2</span><div><strong>Masala Soda</strong><small>A little fizz, a little spice</small></div><span className="item-price">₹160</span></div>
          <div className="order-total"><span>Subtotal <small>3 items</small></span><strong>₹440<span>.00</span></strong></div>
          <div className="order-action"><span className="accepted-check">✓</span><span>Order accepted<small>Sent to the kitchen</small></span><span className="order-arrow">↗</span></div>
        </div>
        <div className="workspace-bottom"><span><i />All changes saved</span><span>Connected operations</span></div>
      </div>
      <div className="floating-card kitchen-card" aria-hidden="true">
        <div className="floating-heading"><span className="small-icon">♨</span><strong>Kitchen</strong><span className="ticket-number">#024</span></div>
        <div className="kitchen-table">Table 04 <span>Dine-in</span></div>
        <div className="ticket-item">1 × Paneer Tikka</div>
        <div className="preparing"><i />Preparing<span>→</span></div>
      </div>
      <div className="floating-card qr-card" aria-hidden="true">
        <svg className="qr-symbol" viewBox="0 0 40 40" fill="currentColor"><path d="M1 1h14v14H1zm3 3v8h8V4zM25 1h14v14H25zm3 3v8h8V4zM1 25h14v14H1zm3 3v8h8v-8z" fillRule="evenodd"/><path d="M6 6h4v4H6zM30 6h4v4h-4zM6 30h4v4H6zM19 1h3v7h-3zM18 11h4v11h-4zM1 19h8v3H1zM12 18h3v4h-3zM25 18h5v5h-5zM34 18h5v4h-5zM19 26h4v8h-4zM25 27h6v4h-6zM34 26h5v13h-5zM26 35h5v4h-5zM18 37h5v2h-5z"/></svg>
        <div><span className="mini-label">QR ORDER</span><strong>Table 04</strong><span className="qr-accepted"><i />Order received</span></div>
        <span className="qr-arrow">↗</span>
      </div>
      <div className="floating-card loyalty-card" aria-hidden="true"><span className="loyalty-icon">✦</span><div><span className="mini-label">LOYALTY BALANCE</span><strong>120 <span>points</span></strong></div><span className="loyalty-plus">+20<span>earned</span></span></div>
    </figure>
  )
}
