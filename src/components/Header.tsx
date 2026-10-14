import { useRef, useState } from 'react'
import Brand from './Brand'
import { useScrolledHeader } from '../hooks/usePageMotion'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  useScrolledHeader(header)
  return <header ref={header} className="header"><div className="container header-inner"><Brand />
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    <nav id="navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }}>
      {[['Product', 'product'], ['Why RewardBite', 'why'], ['About', 'about'], ['Contact', 'contact']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="button button-small" href="mailto:kamranp@bitessy.com" onClick={() => setOpen(false)}>Get in touch <span aria-hidden="true">↗</span></a>
    </nav>
  </div></header>
}
