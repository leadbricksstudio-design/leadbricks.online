import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import { Mail, Phone } from 'lucide-react'
import { whatsappLink, telLink, DEFAULT_MESSAGE } from '../utils/contact'
import { ease } from '../utils/motion'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './ui/BrandIcons'
import './Navbar.css'

const socials = [
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedInIcon },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  // Frosted state after a little scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking (sections are lazy, so re-observe when DOM grows)
  useEffect(() => {
    const ids = siteConfig.nav.map((n) => n.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    const observeAll = () => ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(document.getElementById('main') || document.body, { childList: true, subtree: false })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  // Lock scroll + close on Escape while the drawer is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="nav__inner">
          <a href="#home" className="nav__brand" aria-label="LeadBricks — home" onClick={() => setOpen(false)}>
            <Logo animate />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav__link${active === item.href ? ' is-active' : ''}`}
                aria-current={active === item.href ? 'true' : undefined}
              >
                {active === item.href && (
                  <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="nav__call" href={telLink()} aria-label={`Call LeadBricks on ${siteConfig.contact.phone}`}>
              <span className="nav__call-icon">
                <Phone width={17} height={17} />
              </span>
              <span className="nav__call-num">{siteConfig.contact.phone}</span>
            </a>
            <div className="nav__cta">
              <Button href="#contact" size="sm">Start a project</Button>
            </div>
          </div>

          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="drawer__bricks" aria-hidden="true">
              <i className="brick brick--cyan" />
              <i className="brick brick--pink" />
              <i className="brick brick--yellow" />
            </div>
            <motion.nav
              className="drawer__links"
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
            >
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`drawer__link${active === item.href ? ' is-active' : ''}`}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                >
                  <span className="drawer__num">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
            <motion.div
              className="drawer__foot"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5, ease } }}
            >
              <Button href="#contact" variant="light" block onClick={() => setOpen(false)}>
                Start a project
              </Button>
              <a className="drawer__wa" href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <div className="drawer__contact">
                <a href={telLink()}>
                  <Phone width={16} height={16} /> {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  <Mail width={16} height={16} /> {siteConfig.contact.email}
                </a>
              </div>
              <div className="drawer__socials">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-btn social-btn--dark social-btn--${label.toLowerCase()}`}
                    aria-label={`LeadBricks on ${label}`}
                  >
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
