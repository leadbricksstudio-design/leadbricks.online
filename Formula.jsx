import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { formula } from '../data/content'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Reveal } from './ui/Reveal'
import { inView, stagger } from '../utils/motion'
import './Formula.css'

const runners = ['cyan', 'pink', 'yellow']

export default function Formula() {
  return (
    <section id="formula" className="section formula" aria-labelledby="formula-title">
      <div className="container">
        <div className="night-panel formula__panel">
          <SectionHead
            dark
            eyebrow="The LeadBricks formula"
            headingId="formula-title"
            align="split"
            lines={['From attention', { text: 'to customer.', className: 'accent-yellow' }]}
            description="Four bricks, placed in order. Skip one and the whole wall wobbles — that's why every piece of your marketing is built to move people one step closer."
          />

          {/* Journey rail with travelling bricks */}
          <div className="formula__rail" aria-hidden="true">
            <span className="formula__line" />
            {formula.map((s, i) => (
              <span key={s.title} className={`formula__station formula__station--${s.color}`} style={{ '--i': i }} />
            ))}
            {runners.map((c, i) => (
              <span key={c} className="formula__runner" style={{ '--d': `${i * -1.6}s` }}>
                <i className={`brick brick--${c}`} />
              </span>
            ))}
          </div>

          <motion.ol className="formula__steps" variants={stagger(0.12)} {...inView}>
            {formula.map((s, i) => (
              <Card as="li" key={s.title} variant="night" className="formula__step" tilt={3}>
                <div className="formula__head">
                  <span className="formula__num">0{i + 1}</span>
                  <span className={`formula__icon formula__icon--${s.color}`}>
                    <s.icon strokeWidth={2} />
                  </span>
                </div>
                <h3 className="formula__title">{s.title}</h3>
                <p className="formula__text">{s.text}</p>
                <div className="formula__stack" aria-hidden="true">
                  {Array.from({ length: i + 1 }).map((_, k) => (
                    <i key={k} className={`brick brick--${formula[k].color}`} />
                  ))}
                </div>
                {i < formula.length - 1 && (
                  <span className="formula__arrow" aria-hidden="true">
                    <ArrowRight strokeWidth={2.4} />
                  </span>
                )}
              </Card>
            ))}
          </motion.ol>

          <Reveal className="formula__tagline">
            <span className="formula__tag-bricks" aria-hidden="true">
              <i className="brick brick--cyan" />
              <i className="brick brick--pink" />
              <i className="brick brick--yellow" />
            </span>
            Every brick has a purpose.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
