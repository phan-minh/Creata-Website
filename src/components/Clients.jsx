import { clients } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './Clients.module.css'

export default function Clients() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...clients.logos, ...clients.logos]

  return (
    <section className={styles.section} aria-label="Clients">
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className={styles.title}>{clients.title}</h2>
          <p className={styles.subtitle}>{clients.subtitle}</p>
        </Reveal>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {loop.map((name, i) => (
            <span key={i} className={styles.logo} aria-hidden={i >= clients.logos.length}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
