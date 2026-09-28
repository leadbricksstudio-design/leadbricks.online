import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { pricing, pricingDisclaimer } from '../data/pricing'
import { CUSTOM_QUOTE_MESSAGE, whatsappLink } from '../utils/contact'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import Button from './ui/Button'
import { Reveal } from './ui/Reveal'
import PricingCard from './PricingCard'
import { ease, inView, stagger } from '../utils/motion'
import './Pricing.css'

const colsFor = (n) => (n <= 4 ? n : n % 4 === 0 ? 4 : 3)

export default function Pricing() {
  const [active, setActive] = useState(pricing[0].id)
  const tabRefs = useRef({})
  const cat = pricing.find((c) => c.id === active)

  const select = (id, focus = false) => {
    setActive(id)
    const el = tabRefs.current[id]
    if (el) {
      // keep the active pill visible inside the horizontal scroller (mobile)
      const scroller = el.parentElement
      scroller.scrollTo({ left: el.offsetLeft - scroller.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' })
      if (focus) el.focus()
    }
  }

  const onKeyDown = (e) => {
    const i = pricing.findIndex((c) => c.id === active)
    let next = null
    if (e.key === 'ArrowRight') next = (i + 1) % pricing.length
    if (e.key === 'ArrowLeft') next = (i - 1 + pricing.length) % pricing.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = pricing.length - 1
    if (next !== null) {
      e.preventDefault()
      select(pricing[next].id, true)
    }
  }

  return (
    <section id="pricing" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHead
          eyebrow="Transparent catalog"
          headingId="pricing-title"
          align="split"
          lines={['Clear, fixed', { text: 'pricing.', className: 'accent' }]}
          description="No hidden fees. No opaque estimates. Transparent pricing designed for MSMEs, startups and expanding brands."
        />

        <Reveal className="pricing__tabs-wrap">
          <div className="pricing__tabs" role="tablist" aria-label="Pricing categories" onKeyDown={onKeyDown}>
            {pricing.map((c) => {
              const selected = c.id === active
              return (
                <button
                  key={c.id}
                  ref={(el) => (tabRefs.current[c.id] = el)}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls="pricing-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`pricing__tab${selected ? ' is-active' : ''}`}
                  onClick={() => select(c.id)}
                >
                  {selected && (
                    <motion.span
                      layoutId="pricing-pill"
                      className="pricing__pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="pricing__tab-label">{c.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="pricing__meta" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.p
              key={cat.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
            >
              <strong>{cat.label}</strong> — {cat.intro}
              <span className="pricing__count">{cat.plans.length} packages</span>
            </motion.p>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            id="pricing-panel"
            role="tabpanel"
            aria-labelledby={`tab-${cat.id}`}
            className="pricing__grid"
            style={{ '--cols': colsFor(cat.plans.length), '--cols-md': Math.min(colsFor(cat.plans.length), 2) }}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 16, transition: { duration: 0.25, ease } }}
            variants={stagger(0.06)}
          >
            {cat.plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div className="pricing__after" variants={stagger(0.1)} {...inView}>
          <Card className="pricing__note" tilt={0} lift={false}>
            <span className="chip-icon" data-accent="purple">
              <Info strokeWidth={2} />
            </span>
            <p>{pricingDisclaimer}</p>
          </Card>

          <Card className="pricing__custom" variant="dark" tilt={2}>
            <div className="pricing__custom-bricks" aria-hidden="true">
              <i className="brick brick--cyan" />
              <i className="brick brick--pink" />
              <i className="brick brick--yellow" />
              <i className="brick brick--glass" />
            </div>
            <div>
              <h3 className="pricing__custom-title">Need something custom?</h3>
              <p className="pricing__custom-text">Let's build a package around your goals.</p>
            </div>
            <Button href={whatsappLink(CUSTOM_QUOTE_MESSAGE)} external variant="light" magnetic>
              Get custom quote
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
