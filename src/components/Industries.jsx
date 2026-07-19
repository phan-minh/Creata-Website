import { industries } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { IndustryIcon } from './Icons.jsx'
import styles from './Industries.module.css'

export default function Industries() {
  return (
    <section className={`section ${styles.section}`} id="industries">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Business Areas</p>
          <h2 className="section-title">Industries we serve</h2>
          <p className="section-lead">
            Deep, hyperlocal fluency across the sectors defining Southeast Asia's next decade of
            growth.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {industries.map((it, i) => (
            <Reveal as="article" key={i} className={styles.card} delay={(i % 4) * 60}>
              <span className={styles.icon}>
                <IndustryIcon name={it.icon} />
              </span>
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.text}>{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
