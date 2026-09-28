import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Heart, Database, Workflow } from 'lucide-react'
import Card from './ui/Card'
import Photo from './ui/Photo'
import Button, { ArrowSwap } from './ui/Button'
import { Eyebrow } from './ui/SectionHead'
import { MaskText } from './ui/Reveal'
import { WhatsAppIcon } from './ui/BrandIcons'
import { useFinePointer } from '../hooks/useMediaQuery'
import { ease, fadeUp, stagger } from '../utils/motion'
import './HeroBento.css'

/* Logo chevron rebuilt as large glossy bricks (2× the logo geometry). */
const chevron = [
  { color: 'cyan', cx: 80, cy: 72, w: 120, h: 68, rot: 38, depth: 26, from: { x: -180, y: -140, rotate: -50 } },
  { color: 'pink', cx: 154, cy: 140, w: 84, h: 76, rot: 40, depth: 40, radius: 24, from: { x: 160, y: -40, rotate: 60 } },
  { color: 'yellow', cx: 76, cy: 208, w: 120, h: 68, rot: -38, depth: 18, from: { x: -160, y: 170, rotate: 40 } },
]
const floaters = [
  { color: 'glass', x: 210, y: 10, w: 56, h: 24, rot: -14, depth: 60, delay: 1.2 },
  { color: 'glass', x: -30, y: 250, w: 44, h: 20, rot: 18, depth: 70, delay: 1.3 },
  { color: 'purple', x: 212, y: 236, w: 30, h: 14, rot: -30, depth: 90, delay: 1.4 },
]

function Parallax({ mx, my, depth, children, className, style }) {
  const x = useTransform(mx, (v) => v * depth)
  const y = useTransform(my, (v) => v * depth)
  return (
    <motion.div className={className} style={{ ...style, x, y }}>
      {children}
    </motion.div>
  )
}

function HeroBricks({ mx, my }) {
  return (
    <div className="hero-bricks" aria-hidden="true">
      {chevron.map((b, i) => (
        <motion.div
          key={b.color}
          className="hero-bricks__slot"
          style={{ left: b.cx - b.w / 2, top: b.cy - b.h / 2, width: b.w, height: b.h }}
          initial={{ opacity: 0, ...b.from }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 14, mass: 1, delay: 0.7 + i * 0.12 }}
        >
          <Parallax mx={mx} my={my} depth={b.depth} className="hero-bricks__float" style={{ animationDelay: `${i * -2}s` }}>
            <span
              className={`brick brick--${b.color}`}
              style={{ width: '100%', height: '100%', transform: `rotate(${b.rot}deg)`, borderRadius: b.radius }}
            />
          </Parallax>
        </motion.div>
      ))}
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className="hero-bricks__slot"
          style={{ left: f.x, top: f.y, width: f.w, height: f.h }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: f.delay, ease }}
        >
          <Parallax mx={mx} my={my} depth={f.depth} className="hero-bricks__float hero-bricks__float--slow">
            <span className={`brick brick--${f.color}`} style={{ width: '100%', height: '100%', transform: `rotate(${f.rot}deg)` }} />
          </Parallax>
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroBento() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 })
  const my = useSpring(rawY, { stiffness: 60, damping: 18 })

  const onPointerMove = (e) => {
    if (!fine || reduce) return
    rawX.set(e.clientX / window.innerWidth - 0.5)
    rawY.set(e.clientY / window.innerHeight - 0.5)
  }

  return (
    <section id="home" className="hero" onPointerMove={onPointerMove} aria-labelledby="hero-title">
      <div className="container">
        <motion.div className="hero__grid" initial="hidden" animate="show" variants={stagger(0.08, 0.55)}>
          {/* ---------- Main card ---------- */}
          <Card className="hero__main" tilt={0} lift={false}>
            <HeroBricks mx={mx} my={my} />
            <motion.div variants={fadeUp}>
              <Eyebrow>Growth-focused marketing agency</Eyebrow>
            </motion.div>
            <MaskText
              as="h1"
              id="hero-title"
              className="hero__title"
              animateNow
              delay={0.35}
              each={0.12}
              lines={[
                'Build your',
                'brand.',
                { text: 'Brick by', className: 'accent' },
                {
                  text: (
                    <>
                      brick.
                      <motion.i
                        className="hero__brick-dot brick brick--yellow"
                        initial={{ y: -180, opacity: 0, rotate: -30 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 1.35 }}
                      />
                    </>
                  ),
                  className: 'accent',
                },
              ]}
            />
            <motion.div
              className="hero__foot"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
            >
              <p className="hero__desc">
                Strategy, creativity and performance marketing built to turn attention into leads and leads into customers.
              </p>
              <div className="hero__actions">
                <Button href="#contact" magnetic>Start growing</Button>
                <Button href="#services" variant="ghost" icon={ArrowUpRight}>Explore services</Button>
              </div>
              <p className="hero__supporting">
                <span>Strategy</span>
                <span>Creativity</span>
                <span>Performance</span>
                <span>Growth</span>
              </p>
            </motion.div>
          </Card>

          {/* ---------- Performance ---------- */}
          <Card as="a" href="#services" className="hero__perf" variant="dark">
            <Photo src="/images/hero-strategy.webp" alt="Marketing team planning a campaign strategy" priority position="50% 35%" />
            <div className="hcard__top">
              <span className="glass-chip">
                <span className="hero__live" aria-hidden="true" /> Performance marketing
              </span>
              <ArrowSwap dark />
            </div>
            <div>
              <ul className="hero__perf-tags" aria-label="Channels">
                <li className="glass-chip">Meta Ads</li>
                <li className="glass-chip">Google Ads</li>
                <li className="glass-chip">Retargeting</li>
              </ul>
              <h2 className="hcard__title">Campaigns built<br />to convert.</h2>
              <p className="hcard__text">Strategy, creative and media buying working as one team.</p>
            </div>
          </Card>

          {/* ---------- Lead generation ---------- */}
          <Card as="a" href="#pricing" className="hero__lead">
            <span className="kicker">Leads system</span>
            <div className="lead-flow" aria-hidden="true">
              <span className="lead-flow__step" style={{ '--w': '100%' }}>Attention</span>
              <span className="lead-flow__step" style={{ '--w': '78%' }}>Lead</span>
              <span className="lead-flow__step lead-flow__step--end" style={{ '--w': '56%' }}>Customer</span>
            </div>
            <div>
              <h2 className="hcard__title hcard__title--sm">Lead Generation</h2>
              <p className="hcard__text">Attention → Lead → Customer</p>
            </div>
          </Card>

          {/* ---------- Growth ---------- */}
          <Card as="a" href="#formula" className="hero__growth" variant="yellow">
            <svg className="growth-line" viewBox="0 0 120 80" aria-hidden="true">
              <path d="M4 72 L34 50 L56 58 L86 26 L116 8" />
            </svg>
            <span className="growth__label">Growth</span>
            <span className="growth__arrow" aria-hidden="true">
              <ArrowUpRight strokeWidth={2.6} />
            </span>
          </Card>

          {/* ---------- Websites ---------- */}
          <Card as="a" href="#services" className="hero__web">
            <div className="mini-browser" aria-hidden="true">
              <div className="mini-browser__bar">
                <i /> <i /> <i />
              </div>
              <div className="mini-browser__body">
                <span className="mb-hero" />
                <span className="mb-line" />
                <span className="mb-line mb-line--short" />
                <span className="mb-btn" />
              </div>
            </div>
            <div>
              <h2 className="hcard__title hcard__title--sm">Websites</h2>
              <p className="hcard__text">Fast. Modern. Conversion-focused.</p>
            </div>
          </Card>

          {/* ---------- Social ---------- */}
          <Card as="a" href="#services" className="hero__social" variant="tint-pink">
            <div className="social-stack" aria-hidden="true">
              <span className="social-stack__post social-stack__post--1" />
              <span className="social-stack__post social-stack__post--2" />
              <span className="social-stack__post social-stack__post--3">
                <Heart className="social-stack__heart" fill="currentColor" strokeWidth={0} />
              </span>
            </div>
            <div className="hcard__row">
              <div>
                <h2 className="hcard__title hcard__title--sm">Social Media</h2>
                <p className="hcard__text">Content people actually notice.</p>
              </div>
              <ArrowSwap />
            </div>
          </Card>

          {/* ---------- Automation ---------- */}
          <Card as="a" href="#services" className="hero__auto" variant="tint-cyan">
            <div className="auto-flow" aria-hidden="true">
              <span className="auto-flow__node"><Database /></span>
              <svg className="auto-flow__wire" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 H100" /></svg>
              <span className="auto-flow__node auto-flow__node--wa"><WhatsAppIcon /></span>
              <svg className="auto-flow__wire" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 H100" /></svg>
              <span className="auto-flow__node"><Workflow /></span>
            </div>
            <div>
              <h2 className="hcard__title hcard__title--sm">Automation</h2>
              <p className="hcard__text">CRM + WhatsApp + Workflows</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
