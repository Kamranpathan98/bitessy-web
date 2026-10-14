const email = 'mailto:kamranp@bitessy.com'
const purposes = [
  ['Product inquiries', 'M4 4h16v12H9l-5 4z'],
  ['Partnership opportunities', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M2 21v-3a7 7 0 0 1 14 0v3 M17 4a4 4 0 0 1 0 8 M20 21v-3a7 7 0 0 0-3-5'],
  ['Early access & pilots', 'M4 21V12h4v9 M10 21V7h4v14 M16 21V3h4v18'],
  ['General questions', 'M3 5h18v14H3z m0-14 9 7 9-7'],
]

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3z m0-14 9 7 9-7" /></svg>
}

export default function Contact() {
  return <section id="contact" className="contact-section container reveal-fade" data-reveal aria-labelledby="contact-title">
    <div className="contact-copy">
      <p className="eyebrow reveal-up" data-reveal>Good software starts with a conversation</p>
      <h2 id="contact-title" className="reveal-up" data-reveal data-reveal-delay="65">Let's talk<span>.</span></h2>
      <p className="contact-description reveal-up" data-reveal data-reveal-delay="130">Interested in RewardBite, early access, partnerships or Bitessy? We'd love to hear from you.</p>
      <div className="contact-actions reveal-up" data-reveal data-reveal-delay="195"><a className="button contact-cta" href={email}><MailIcon />Email us <span aria-hidden="true">↗</span></a><a className="contact-email" href={email}>kamranp@bitessy.com</a></div>
      <ul className="contact-purposes">{purposes.map(([label, path], index) => <li key={label} className="reveal-up" data-reveal data-reveal-delay={230 + index * 55}><span className="contact-purpose-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg></span><span>{label}</span></li>)}</ul>
    </div>
    <article className="contact-founder reveal-up" data-reveal data-reveal-delay="220" aria-labelledby="contact-founder-title">
      <p className="eyebrow">Get in touch</p><h3 id="contact-founder-title">Directly from the founder.</h3>
      <p className="contact-founder-copy">Have a question, idea or want to explore a partnership? I personally read every message and get back as soon as possible.</p>
      <div className="contact-founder-identity"><span className="contact-monogram" aria-hidden="true">KP</span><div><h4>Kamran Pathan</h4><p>Founder, Bitessy</p></div></div>
      <a className="contact-founder-email" href={email}><span className="contact-purpose-icon"><MailIcon /></span><span>kamranp@bitessy.com</span><span aria-hidden="true">↗</span></a>
      <p className="contact-founder-note">Building practical software for modern businesses.</p>
    </article>
  </section>
}
