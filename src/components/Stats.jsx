import { stats } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Company at a glance">
      <div className="container">
        <Reveal className={styles.headRow}>
          <p className="eyebrow">At a Glance</p>
          <h2 className={styles.heading}>
            A new advisory, built to the highest standard.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <Reveal className={styles.item} key={i} delay={i * 80}>
              <span className={styles.value}>{s.value}</span>
              <span className={styles.label}>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
