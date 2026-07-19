import Logo from './Logo.jsx'
import { company, nav, contact } from '../data/content.js'
import styles from './Footer.module.css'

const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'zalo', label: 'Zalo' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo />
            <p className={styles.slogan}>{company.slogan}</p>
            <p className={styles.tag}>“{company.tagline}”</p>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Explore</span>
            <nav>
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.contactCol}>
            <span className={styles.colTitle}>Get in touch</span>
            <p className={styles.address}>{contact.address}</p>
            {contact.emails.map((em) => (
              <a key={em} href={`mailto:${em}`} className={styles.email}>
                {em}
              </a>
            ))}
            <div className={styles.social}>
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={contact.social[s.key] || '#'}
                  aria-label={s.label}
                  target={contact.social[s.key] ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className={styles.legalVi}>{company.legalNameVi}</p>
        </div>
      </div>
    </footer>
  )
}
