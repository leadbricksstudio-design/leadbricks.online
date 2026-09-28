import { motion } from 'framer-motion'
import { whyCards } from '../data/content'
import { services } from '../data/services'
import { pricing, packageCount } from '../data/pricing'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import Counter from './ui/Counter'
import { inView, stagger } from '../utils/motion'
import './WhyLeadBricks.css'

const card = Object.fromEntries(whyCards.map((c) => [c.id, c]))

function Feature({ id, variant, children, big }) {
  const c = card[id]
  return (
    <Card className={`why why--${id}`} variant={variant}>
      <span className={`chip-icon${variant === 'dark' ? ' chip-icon--dark' : ''}`} data-accent="purple">
        <c.icon strokeWidth={2} />
      </span>
      {children}
      <div>
        <h3 className={`why__title${big ? ' why__title--big' : ''}`}>{c.title}</h3>
        <p className="why__text">{c.text}</p>
      </div>
    </Card>
  )
}

export default function WhyLeadBricks() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="container">
        <SectionHead
          eyebrow="Why LeadBricks"
          headingId="why-title"
          align="split"
          lines={['Built different.', { text: 'Built for growth.', className: 'accent' }]}
          description="One partner for the whole system — so strategy, creative, ads and technology finally pull in the same direction."
        />

        <motion.div className="why__grid" variants={stagger(0.07)} {...inView}>
          <Feature id="strat" variant="dark" big>
            <div className="why-plan" aria-hidden="true">
              {['Audience', 'Offer', 'Channel', 'Funnel'].map((l, i) => (
                <span key={l} className="why-plan__row" style={{ '--i': i }}>
                  <i className="why-plan__check" />
                  {l}
                  <b className="why-plan__bar" />
                </span>
              ))}
            </div>
          </Feature>

          <Feature id="conv" />

          <Card className="why why--stat1 why-stat" variant="tint-yellow">
            <span className="why-stat__num">
              <Counter value={services.length} />
            </span>
            <span className="why-stat__label">Service lines under one roof</span>
          </Card>

          <Feature id="crea" variant="tint-pink" />
          <Feature id="data">
            <div className="why-spark" aria-hidden="true">
              {[30, 46, 38, 60, 52, 74, 88].map((h, i) => (
                <i key={i} style={{ '--h': `${h}%` }} />
              ))}
            </div>
          </Feature>

          <Card className="why why--stat2 why-stat" variant="tint-cyan">
            <span className="why-stat__num">
              <Counter value={packageCount} />
            </span>
            <span className="why-stat__label">Fixed-price packages across {pricing.length} catalogs</span>
          </Card>

          <Feature id="trans" variant="yellow" big>
            <div className="why-receipt" aria-hidden="true">
              <span><i />Service fee<b /></span>
              <span><i />Inclusions<b /></span>
              <span><i />Hidden charges<b className="zero">₹0</b></span>
            </div>
          </Feature>

          <Feature id="scale" variant="tint-purple">
            <div className="why-scale" aria-hidden="true">
              {[1, 2, 3, 4].map((n) => (
                <span key={n} style={{ '--n': n }}>
                  {Array.from({ length: n }).map((_, k) => (
                    <i key={k} className="brick brick--purple" />
                  ))}
                </span>
              ))}
            </div>
          </Feature>
        </motion.div>
      </div>
    </section>
  )
}
