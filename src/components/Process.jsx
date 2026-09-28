import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { processSteps } from '../data/content'
import SectionHead from './ui/SectionHead'
import { Phone } from 'lucide-react'
import Card from './ui/Card'
import Photo from './ui/Photo'
import Button from './ui/Button'
import { telLink, whatsappLink } from '../utils/contact'
import { cardIn, inView, stagger } from '../utils/motion'
import './Process.css'

export default function Process() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 85%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 })
  const pct = useTransform(progress, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`)
  const [active, setActive] = useState(-1)

  useMotionValueEvent(progress, 'change', (v) => {
    const n = processSteps.length
    const idx = v <= 0.01 ? -1 : Math.min(n - 1, Math.floor(v * n + 0.15))
    setActive((prev) => (prev === idx ? prev : idx))
  })

  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          eyebrow="How we build"
          headingId="process-title"
          align="split"
          lines={[
            <>
              Idea <span className="process__arrow">→</span> system
            </>,
            {
              text: (
                <>
                  <span className="process__arrow">→</span> growth
                </>
              ),
              className: 'accent',
            },
          ]}
          description="A clear, repeatable path from first conversation to scalable results — every stage feeds the next."
        />

        <div className="process__track" ref={trackRef}>
          <div className="process__rail" aria-hidden="true">
            <motion.span className="process__fill" style={{ '--p': pct }} />
            <motion.span className="process__brick brick brick--yellow" style={{ '--p': pct }} />
          </div>

          <motion.ol className="process__steps" variants={stagger(0.08)} {...inView}>
            {processSteps.map((s, i) => (
              <Card
                as="li"
                key={s.n}
                className={`process__step${i <= active ? ' is-done' : ''}${i === active ? ' is-current' : ''}`}
                tilt={2}
              >
                <div className="process__head">
                  <span className="process__n">{s.n}</span>
                  <span className="process__icon">
                    <s.icon strokeWidth={2} />
                  </span>
                </div>
                <h3 className="process__title">{s.title}</h3>
                <p className="process__text">{s.text}</p>
              </Card>
            ))}
          </motion.ol>
        </div>

        <motion.div variants={stagger()} {...inView}>
          <Card className="process__banner" variant="dark" tilt={0} lift={false} variants={cardIn}>
            <Photo src="/images/process-workshop.webp" alt="Strategy workshop at a whiteboard with a client team" overlay="brand" position="50% 30%" />
            <div className="process__banner-body">
              <span className="glass-chip">Step 01 · Discover</span>
              <h3 className="process__banner-title">
                Every engagement starts with a <span>strategy session.</span>
              </h3>
              <p className="process__banner-text">
                We learn your business, your customers and your numbers first — then build the plan around them.
              </p>
              <div className="process__banner-actions">
                <Button
                  href={whatsappLink("Hi LeadBricks, I'd like to book a strategy call for my business.")}
                  external
                  variant="light"
                >
                  Book a strategy call
                </Button>
                <Button href={telLink()} variant="glass-dark" icon={Phone}>
                  Call us
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
