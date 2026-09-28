import { motion } from 'framer-motion'
import { Play, MapPin, Search, Heart, Zap, Workflow, Send } from 'lucide-react'
import { LogoMark } from './ui/Logo'
import { services } from '../data/services'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import Button, { ArrowSwap } from './ui/Button'
import { inView, stagger } from '../utils/motion'
import './ServicesBento.css'

/* Small, service-specific illustrations (pure CSS/SVG, no images). */
function ServiceVisual({ type }) {
  switch (type) {
    case 'browser':
      return (
        <div className="sv sv-browser" aria-hidden="true">
          <div className="sv-browser__bar">
            <i /> <i /> <i />
            <span className="sv-browser__url" />
          </div>
          <div className="sv-browser__body">
            <div className="sv-browser__hero">
              <span className="sv-l sv-l--title" />
              <span className="sv-l sv-l--title sv-l--short" />
              <span className="sv-l sv-l--text" />
              <span className="sv-browser__cta" />
            </div>
            <div className="sv-browser__media" />
            <div className="sv-browser__cards">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )
    case 'chart':
      return (
        <div className="sv sv-chart" aria-hidden="true">
          <svg viewBox="0 0 320 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="svArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#E3196F" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#E3196F" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="sv-chart__area" d="M0 130 C 40 120, 70 112, 100 100 S 160 96, 190 70 S 260 40, 320 16 V150 H0 Z" />
            <path className="sv-chart__line" d="M0 130 C 40 120, 70 112, 100 100 S 160 96, 190 70 S 260 40, 320 16" />
            <path className="sv-chart__line sv-chart__line--ghost" d="M0 138 C 60 134, 120 128, 180 120 S 260 104, 320 96" />
          </svg>
          <div className="sv-chart__chips">
            <span className="sv-chip">Meta</span>
            <span className="sv-chip">Google</span>
            <span className="sv-chip sv-chip--hot">Retarget</span>
          </div>
        </div>
      )
    case 'funnel':
      return (
        <div className="sv sv-funnel" aria-hidden="true">
          <span style={{ '--w': '100%' }} />
          <span style={{ '--w': '76%' }} />
          <span style={{ '--w': '52%' }} />
          <span style={{ '--w': '30%' }} />
        </div>
      )
    case 'feed':
      return (
        <div className="sv sv-feed" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={`sv-feed__tile sv-feed__tile--${i}`}>
              {i === 4 && <Heart fill="currentColor" strokeWidth={0} />}
            </span>
          ))}
        </div>
      )
    case 'timeline':
      return (
        <div className="sv sv-timeline" aria-hidden="true">
          <span className="sv-timeline__play">
            <Play fill="currentColor" strokeWidth={0} />
          </span>
          <div className="sv-timeline__track">
            <div className="sv-timeline__wave">
              {Array.from({ length: 28 }).map((_, i) => (
                <i key={i} style={{ '--h': `${25 + ((i * 37) % 70)}%`, '--i': i }} />
              ))}
            </div>
            <div className="sv-timeline__clips">
              <span />
              <span />
              <span />
            </div>
            <span className="sv-timeline__head" />
          </div>
        </div>
      )
    default:
      return null
  }
}

/* Compact visuals for the smaller cards — elements reposition on hover */
function SmallVisual({ type }) {
  switch (type) {
    case 'swatch':
      return (
        <div className="sv-sm sv-swatch" aria-hidden="true">
          <i style={{ '--c': '#4A2372' }} />
          <i style={{ '--c': '#18A7E6' }} />
          <i style={{ '--c': '#E3196F' }} />
          <i style={{ '--c': '#FDB52B' }} />
        </div>
      )
    case 'mark':
      return (
        <div className="sv-sm sv-mark" aria-hidden="true">
          <span className="sv-mark__logo">
            <LogoMark size={22} />
          </span>
          <span className="sv-mark__type">Aa</span>
          <span className="sv-mark__lines">
            <i />
            <i />
          </span>
        </div>
      )
    case 'pin':
      return (
        <div className="sv-sm sv-pin" aria-hidden="true">
          <span className="sv-pin__bar">
            <Search />
            <i />
          </span>
          <span className="sv-pin__marker">
            <MapPin fill="currentColor" stroke="#fff" />
          </span>
        </div>
      )
    case 'nodes':
      return (
        <div className="sv-sm sv-nodes" aria-hidden="true">
          <span className="sv-nodes__n">
            <Zap />
          </span>
          <svg viewBox="0 0 60 10" preserveAspectRatio="none">
            <path d="M0 5 H60" />
          </svg>
          <span className="sv-nodes__n sv-nodes__n--mid">
            <Workflow />
          </span>
          <svg viewBox="0 0 60 10" preserveAspectRatio="none">
            <path d="M0 5 H60" />
          </svg>
          <span className="sv-nodes__n">
            <Send />
          </span>
        </div>
      )
    default:
      return null
  }
}

export default function ServicesBento() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          headingId="services-title"
          align="split"
          lines={['Everything you need', { text: 'to grow.', className: 'accent' }]}
          description="Nine service lines that plug into one another — so your website, ads, content and automation work as a single growth system."
        >
          <div style={{ marginTop: 22 }}>
            <Button href="#pricing" variant="ghost">See transparent pricing</Button>
          </div>
        </SectionHead>

        <motion.div className="services__grid" variants={stagger(0.07)} {...inView}>
          {services.map((s, i) => (
            <Card
              key={s.id}
              as="article"
              className={`svc svc--${s.size} svc--${s.id}`}
              variant={s.size === 'xl' && s.id === 'performance' ? 'dark' : undefined}
              tilt={s.size === 'xl' ? 1.5 : 2.5}
            >
              <div className="svc__top">
                <span className={`chip-icon${s.id === 'performance' ? ' chip-icon--dark' : ''}`} data-accent={s.accent}>
                  <s.icon strokeWidth={2} />
                </span>
                <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
              </div>

              {s.size !== 'sm' ? <ServiceVisual type={s.visual} /> : <SmallVisual type={s.visual} />}

              <div className="svc__body">
                <div className="svc__heading">
                  <h3 className="svc__title">{s.title}</h3>
                  <a
                    href="#pricing"
                    className="svc__link"
                    aria-label={`See pricing for ${s.title}`}
                  >
                    <ArrowSwap dark={s.id === 'performance'} />
                  </a>
                </div>
                <p className="svc__blurb">{s.blurb}</p>
                <ul className="tags svc__tags" aria-label={`${s.title} includes`}>
                  {s.items.map((it) => (
                    <li key={it} className={`tag${s.id === 'performance' ? ' tag--dark' : ''}`}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
