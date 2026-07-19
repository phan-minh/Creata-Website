import { projects } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { ArrowIcon } from './Icons.jsx'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Signature Engagements</p>
          <h2 className="section-title">
            Where our intelligence <span className="gradient-text">moved markets.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <Reveal as="article" key={i} className={styles.card} delay={i * 90}>
              <span className={styles.kicker}>{p.kicker}</span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.text}</p>
              <span className={styles.readMore}>
                Read the story <ArrowIcon />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
