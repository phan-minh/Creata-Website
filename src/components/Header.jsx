import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { nav } from '../data/content.js'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
          open ? styles.menuOpen : ''
        }`}
      >
        <div className={`container ${styles.inner}`}>
          <Logo />

          <nav className={styles.desktopNav} aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#work" className={`btn btn-primary ${styles.cta}`}>
            Explore Our Work
          </a>

          <button
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? styles.barTop : ''} />
            <span className={open ? styles.barMid : ''} />
            <span className={open ? styles.barBot : ''} />
          </button>
        </div>
      </header>

      {/* Mobile drawer — kept OUTSIDE <header> so the header's backdrop-filter
          (added on scroll) never becomes its containing block and shrinks it. */}
      <div className={`${styles.mobileNav} ${open ? styles.mobileOpen : ''}`}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#work" className="btn btn-primary" onClick={() => setOpen(false)}>
            Explore Our Work
          </a>
        </nav>
      </div>
    </>
  )
}
