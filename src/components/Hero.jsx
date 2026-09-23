import { company } from '../data/content.js'
import { ArrowIcon } from './Icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* Animated mesh-gradient backdrop */}
      <div className={styles.mesh} aria-hidden="true">
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={styles.badge}>
          <span className={styles.dot} /> Market Intelligence Advisory · Est. {company.yearEstablished}
        </p>

        <h1 className={styles.title}>
          In a landscape overwhelmed by noise,
          <br />
          Creata is your <span className="gradient-text">definitive signal.</span>
        </h1>

        <p className={styles.slogan}>{company.slogan}</p>

        <p className={styles.lead}>
          We decode complex business ecosystems — fusing empirical data, technological rigor, and deep
          hyperlocal expertise to transform raw metrics into strategic clarity.
        </p>

        <div className={styles.actions}>
          <a href="#services" className="btn btn-primary">
            Explore Our Services <ArrowIcon />
          </a>
        </div>

        <p className={styles.tagline}>“{company.tagline}”</p>
      </div>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
