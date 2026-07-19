import { contact, company } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { MapPinIcon, MailIcon, PhoneIcon } from './Icons.jsx'
import styles from './Contact.module.css'

const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'zalo', label: 'Zalo' },
]

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery,
  )}&z=16&output=embed`

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — invitation + details */}
          <Reveal className={styles.info}>
            <p className="eyebrow">Contact Us</p>
            <h2 className={styles.title}>
              Let's turn complexity into <span className="gradient-text">clarity.</span>
            </h2>
            <p className={styles.lead}>
              Visit us, or reach out through the channels below — we'd be glad to discuss the decision
              you're facing.
            </p>

            <ul className={styles.details}>
              <li>
                <span className={styles.detailIcon}>
                  <MapPinIcon />
                </span>
                <div>
                  <span className={styles.detailLabel}>Office</span>
                  <p>{contact.address}</p>
                </div>
              </li>
              {contact.emails.length > 0 && (
                <li>
                  <span className={styles.detailIcon}>
                    <MailIcon />
                  </span>
                  <div>
                    <span className={styles.detailLabel}>Email</span>
                    {contact.emails.map((em) => (
                      <p key={em}>
                        <a href={`mailto:${em}`}>{em}</a>
                      </p>
                    ))}
                  </div>
                </li>
              )}
              {contact.phone && (
                <li>
                  <span className={styles.detailIcon}>
                    <PhoneIcon />
                  </span>
                  <div>
                    <span className={styles.detailLabel}>Phone</span>
                    <p>
                      <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                    </p>
                  </div>
                </li>
              )}
            </ul>

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
          </Reveal>

          {/* Right — map */}
          <Reveal className={styles.mapCol} delay={120}>
            <div className={styles.map}>
              <iframe
                title={`Map to ${company.name}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
