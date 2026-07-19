import { services } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { ArrowIcon } from './Icons.jsx'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Our Services</p>
          <h2 className="section-title">
            Intelligence engineered for <span className="gradient-text">decisive action.</span>
          </h2>
          <p className="section-lead">
            Five advisory engagements that turn market complexity into a clear, defensible path
            forward.
          </p>
        </Reveal>

        <div className={styles.list}>
          {services.map((s, i) => (
            <Reveal as="article" key={i} className={styles.row} delay={i * 60}>
              <span className={styles.no}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.text}</p>
              </div>
              <ArrowIcon className={styles.arrow} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
