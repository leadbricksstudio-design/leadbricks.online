import { siteConfig } from '../config/siteConfig'
import { Mail, MapPin, Phone } from 'lucide-react'
import { whatsappLink, telLink, DEFAULT_MESSAGE } from '../utils/contact'
import Logo from './ui/Logo'
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './ui/BrandIcons'
import './Footer.css'

const serviceLinks = ['Websites', 'Performance Marketing', 'Lead Generation', 'Social Media', 'Branding', 'SEO & Automation']
const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
const socials = [
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__panel night-panel">
          <div className="footer__top">
            <div className="footer__brand">
              <Logo tone="light" size={30} />
              <p className="footer__descriptor">{siteConfig.descriptor}</p>
              <p className="footer__tagline">{siteConfig.footerTagline}</p>
              <div className="footer__socials">
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
            </div>

            <nav className="footer__cols" aria-label="Footer">
              <div>
                <h2 className="footer__h">Services</h2>
                <ul>
                  {serviceLinks.map((l) => (
                    <li key={l}>
                      <a href="#services">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="footer__h">Company</h2>
                <ul>
                  {companyLinks.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="footer__h">Contact</h2>
                <ul className="footer__contact">
                  <li>
                    <a href={telLink()}>
                      <Phone width={17} height={17} /> {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`}>
                      <Mail width={17} height={17} /> {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon width={17} height={17} /> Chat on WhatsApp
                    </a>
                  </li>
                  <li className="footer__loc">
                    <MapPin width={17} height={17} /> {siteConfig.contact.location}
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <p className="footer__giant" aria-hidden="true">
            leadbricks
          </p>

          <div className="footer__bottom">
            <p>© {new Date().getFullYear()} LeadBricks. All rights reserved.</p>
            <div className="footer__legal">
              <a href={siteConfig.legal.privacy}>Privacy Policy</a>
              <a href={siteConfig.legal.terms}>Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
