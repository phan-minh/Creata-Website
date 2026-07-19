import { values } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './Values.module.css'

export default function Values() {
  return (
    <section className={`section ${styles.section}`} id="why-us">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">
            The <span className="gradient-text">CREATA</span> DNA
          </h2>
          <p className="section-lead">
            Six principles spell out how we work — and why leaders trust our intelligence to guide
            their most consequential decisions.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <Reveal as="article" key={i} className={styles.card} delay={i * 70}>
              <span className={styles.letter}>{v.letter}</span>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.text}>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
