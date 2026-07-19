import { process } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section className={`section ${styles.section}`} id="how-we-work">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title">{process.subtitle}</h2>
        </Reveal>

        <div className={styles.grid}>
          {process.steps.map((s, i) => (
            <Reveal as="article" key={i} className={styles.step} delay={i * 80}>
              <span className={styles.no}>{s.no}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
