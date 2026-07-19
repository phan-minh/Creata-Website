import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './About.module.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h2 className="section-title">
            Great decisions begin with <span className="gradient-text">meaningful insights.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.intro} delay={80}>
            <p>{about.intro}</p>
          </Reveal>

          <div className={styles.pillars}>
            <Reveal as="article" className={styles.pillar} delay={120}>
              <span className={styles.pillarTag}>Our Mission</span>
              <p>{about.mission}</p>
            </Reveal>
            <Reveal as="article" className={styles.pillar} delay={200}>
              <span className={styles.pillarTag}>Our Vision</span>
              <p>{about.vision}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
