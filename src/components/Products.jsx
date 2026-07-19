import { products } from '../data/content.js'
import Reveal from './Reveal.jsx'
import styles from './Products.module.css'

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Products &amp; Solutions</p>
          <h2 className="section-title">
            From raw signal to <span className="gradient-text">strategic asset.</span>
          </h2>
          <p className="section-lead">
            Productized intelligence — designed to keep your organization ahead of every market shift.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <Reveal as="article" key={i} className={styles.card} delay={(i % 2) * 90}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.text}>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
