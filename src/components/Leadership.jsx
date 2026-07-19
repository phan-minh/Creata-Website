import { leadership } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './Leadership.module.css'

export default function Leadership() {
  const { name, alias, role, bio, bioExtended, highlights } = leadership
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <section className={`section ${styles.section}`} id="leadership">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Leadership</p>
          <h2 className="section-title">Meet our Founder</h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.portraitCol}>
            {/* Replace this placeholder with the founder's photo when provided */}
            <div className={styles.portrait} role="img" aria-label={`${name} portrait`}>
              <span className={styles.initials}>{initials}</span>
              <div className={styles.portraitGlow} />
            </div>
            <div className={styles.nameplate}>
              <h3 className={styles.name}>
                {name} <span className={styles.alias}>({alias})</span>
              </h3>
              <p className={styles.role}>{role}</p>
            </div>
          </Reveal>

          <Reveal className={styles.bioCol} delay={120}>
            <p className={styles.lead}>{bio}</p>
            <p className={styles.text}>{bioExtended}</p>

            <div className={styles.highlights}>
              {highlights.map((h, i) => (
                <div key={i} className={styles.highlight}>
                  <span className={styles.hValue}>{h.value}</span>
                  <span className={styles.hLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
