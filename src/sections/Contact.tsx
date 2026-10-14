const email = 'mailto:kamranp@bitessy.com'
const purposes = [
  ['Product questions', 'M4 4h16v12H9l-5 4z'],
  ['Partnership ideas', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M2 21v-3a7 7 0 0 1 14 0v3 M17 4a4 4 0 0 1 0 8 M20 21v-3a7 7 0 0 0-3-5'],
  ['Early access interest', 'M5 21V4 M5 4h11l-2.5 4 2.5 4H5'],
  ['General questions', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18 M9.5 9.2a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.6 M12 16.5h.01'],
]
const envelope = 'M3 5h18v14H3z M3 6.5l9 6.5 9-6.5'

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={envelope} /></svg>
}

export default function Contact() {
  return <section id="contact" className="contact-section container reveal-fade" data-reveal aria-labelledby="contact-title">
    <div className="contact-copy">
      <h2 id="contact-title" className="reveal-up" data-reveal>Let's talk<span>.</span></h2>
      <p className="contact-description reveal-up" data-reveal data-reveal-delay="130">Interested in RewardBite, partnerships or Bitessy? We'd love to hear from you.</p>
      <div className="contact-actions reveal-up" data-reveal data-reveal-delay="195"><a className="button contact-cta" href={email}><MailIcon />Email us <span aria-hidden="true">↗</span></a></div>
      <ul className="contact-purposes">{purposes.map(([label, path], index) => <li key={label} className="reveal-up" data-reveal data-reveal-delay={230 + index * 55}><span className="contact-purpose-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg></span><span>{label}</span></li>)}</ul>
    </div>
    <article className="contact-founder reveal-up" data-reveal data-reveal-delay="220" aria-labelledby="contact-founder-title">
      <p className="eyebrow">Get in touch</p><h3 id="contact-founder-title">Directly from the founder.</h3>
      <p className="contact-founder-copy">Have a question, idea or want to explore a partnership? I read every message myself and reply as soon as I can.</p>
      <div className="contact-founder-identity"><span className="contact-monogram" aria-hidden="true">KP</span><div><h4>Kamran Pathan</h4><p>Founder, Bitessy</p></div></div>
      <a className="contact-founder-email" href={email}><span className="contact-purpose-icon"><MailIcon /></span><span>kamranp@bitessy.com</span></a>
    </article>
  </section>
}
