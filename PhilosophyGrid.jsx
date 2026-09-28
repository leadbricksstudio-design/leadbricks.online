import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, UserCheck } from 'lucide-react'
import { philosophy } from '../data/content'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { inView, stagger } from '../utils/motion'
import './PhilosophyGrid.css'

const byId = Object.fromEntries(philosophy.map((p) => [p.id, p]))

function Title({ id, big }) {
  const p = byId[id]
  return (
    <div className="ph__copy">
      <h3 className={`ph__title${big ? ' ph__title--big' : ''}`}>{p.title}</h3>
      <p className="ph__text">{p.text}</p>
    </div>
  )
}

export default function PhilosophyGrid() {
  // Cards whose hover effect should also play on scroll (touch devices have no hover)
  const [on, setOn] = useState({})
  const activate = (id) => ({
    onViewportEnter: () => setOn((o) => (o[id] ? o : { ...o, [id]: true })),
    viewport: { once: true, amount: 0.8 },
  })
  const cls = (id) => (on[id] ? ' is-on' : '')

  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        <SectionHead
          eyebrow="How we think"
          headingId="philosophy-title"
          align="center"
          lines={['Growth is built,', { text: 'not bought.', className: 'accent' }]}
          description="The beliefs behind every plan, campaign and page we build."
        />

        <motion.div className="ph__grid" variants={stagger(0.07)} {...inView}>
          {/* 1 — The Lead Machine */}
          <Card className="ph ph--machine" variant="dark">
            <div className="ph-machine" aria-hidden="true">
              <div className="ph-machine__in">
                <span>Ads</span>
                <span>Content</span>
                <span>SEO</span>
              </div>
              <div className="ph-machine__core">
                <i className="brick brick--cyan" />
                <i className="brick brick--pink" />
                <i className="brick brick--yellow" />
              </div>
              <div className="ph-machine__belt">
                <div className="ph-machine__items">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="ph-machine__lead">
                      <UserCheck />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Title id="machine" big />
          </Card>

          {/* 2 — Attention → Trust → Lead */}
          <Card className="ph ph--flow">
            <div className="ph-flow" aria-hidden="true">
              <span className="ph-flow__chip ph-flow__chip--1">Attention</span>
              <ArrowRight className="ph-flow__arrow" />
              <span className="ph-flow__chip ph-flow__chip--2">Trust</span>
              <ArrowRight className="ph-flow__arrow" />
              <span className="ph-flow__chip ph-flow__chip--3">Lead</span>
            </div>
            <Title id="flow" />
          </Card>

          {/* 3 — Stop chasing followers */}
          <Card className={`ph ph--followers${cls('followers')}`} {...activate('followers')} variant="tint-pink">
            <div className="ph-follow" aria-hidden="true">
              <span className="ph-follow__old">Followers</span>
              <span className="ph-follow__new">Customers</span>
            </div>
            <Title id="followers" />
          </Card>

          {/* 4 — No random activity */}
          <Card className={`ph ph--random${cls('random')}`} {...activate('random')} variant="yellow">
            <div className="ph-random" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <i key={i} style={{ '--i': i }} />
              ))}
            </div>
            <Title id="random" />
          </Card>

          {/* 5 — Content is a brick */}
          <Card className={`ph ph--content${cls('content')}`} {...activate('content')}>
            <div className="ph-content" aria-hidden="true">
              <span className="ph-content__b ph-content__b--1">Post</span>
              <span className="ph-content__b ph-content__b--2">Reel</span>
              <span className="ph-content__b ph-content__b--3">Story</span>
              <span className="ph-content__b ph-content__b--4">Carousel</span>
            </div>
            <Title id="content" />
          </Card>

          {/* 6 — Your next customer is out there */}
          <Card className="ph ph--next" variant="tint-cyan">
            <div className="ph-radar" aria-hidden="true">
              <span className="ph-radar__ring" />
              <span className="ph-radar__ring ph-radar__ring--2" />
              <span className="ph-radar__ring ph-radar__ring--3" />
              <span className="ph-radar__sweep" />
              <span className="ph-radar__pin">
                <MapPin fill="currentColor" stroke="#fff" />
              </span>
              <i className="ph-radar__dot" style={{ top: '22%', left: '30%' }} />
              <i className="ph-radar__dot" style={{ top: '64%', left: '72%' }} />
              <i className="ph-radar__dot" style={{ top: '30%', left: '78%' }} />
            </div>
            <Title id="next" big />
          </Card>

          {/* 7 — The missing brick */}
          <Card className={`ph ph--missing${cls('missing')}`} {...activate('missing')}>
            <div className="ph-wall" aria-hidden="true">
              {Array.from({ length: 15 }).map((_, i) =>
                i === 8 ? (
                  <span key={i} className="ph-wall__gap">
                    <i className="brick brick--yellow ph-wall__fill" />
                  </span>
                ) : (
                  <span key={i} className="ph-wall__b" />
                )
              )}
            </div>
            <Title id="missing" big />
          </Card>

          {/* 8 — Build a pipeline */}
          <Card className="ph ph--pipeline" variant="dark">
            <div className="ph-pipe" aria-hidden="true">
              <div className="ph-pipe__stages">
                <span>New</span>
                <span>Contacted</span>
                <span>Qualified</span>
                <span className="is-won">Won</span>
              </div>
              <div className="ph-pipe__tube">
                {Array.from({ length: 4 }).map((_, i) => (
                  <i key={i} className={`brick brick--${['cyan', 'pink', 'yellow', 'purple'][i]}`} style={{ '--d': `${i * -1.1}s` }} />
                ))}
              </div>
            </div>
            <Title id="pipeline" big />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
