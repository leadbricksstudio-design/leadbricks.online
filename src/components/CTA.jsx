import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from './ui/Button'
import Photo from './ui/Photo'
import { MaskText, Reveal } from './ui/Reveal'
import { ease } from '../utils/motion'
import './CTA.css'

/* Floating bricks at different depths (z drives scale, blur and parallax speed) */
const bricks = [
  { c: 'yellow', x: '6%', y: '14%', w: 120, h: 44, r: -18, z: 1 },
  { c: 'cyan', x: '82%', y: '10%', w: 90, h: 34, r: 24, z: 0.7 },
  { c: 'pink', x: '88%', y: '62%', w: 130, h: 48, r: -30, z: 1.2 },
  { c: 'yellow', x: '64%', y: '82%', w: 56, h: 22, r: 12, z: 0.4 },
  { c: 'glass', x: '14%', y: '76%', w: 100, h: 38, r: 16, z: 0.6 },
  { c: 'cyan', x: '40%', y: '6%', w: 40, h: 16, r: -8, z: 0.3 },
  { c: 'pink', x: '28%', y: '90%', w: 36, h: 14, r: 30, z: 0.3 },
]

function FloatingBrick({ b, progress, i }) {
  const y = useTransform(progress, [0, 1], [80 * b.z, -80 * b.z])
  return (
    <motion.span
      className="cta__brick-wrap"
      style={{ left: b.x, top: b.y, y, filter: b.z < 0.5 ? 'blur(1.5px)' : undefined }}
    >
      <span
        className={`brick brick--${b.c} cta__brick`}
        style={{ width: b.w, height: b.h, '--r': `${b.r}deg`, animationDelay: `${i * -1.3}s` }}
      />
    </motion.span>
  )
}

export default function CTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <section className="section cta" ref={ref} aria-labelledby="cta-title">
      <div className="container">
        <motion.div
          className="cta__card"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <Photo src="/images/cta-success.webp" overlay="deep" position="50% 35%" />
          <div className="cta__bricks" aria-hidden="true">
            {bricks.map((b, i) => (
              <FloatingBrick key={i} b={b} i={i} progress={scrollYProgress} />
            ))}
          </div>

          <div className="cta__content">
            <MaskText
              as="h2"
              id="cta-title"
              className="cta__title"
              lines={["Don't just", 'get leads.', { text: 'Build a pipeline.', className: 'cta__shine' }]}
              each={0.14}
            />
            <Reveal delay={0.4}>
              <p className="cta__text">Build a marketing system that keeps your business moving.</p>
            </Reveal>
            <Reveal delay={0.55}>
              <Button href="#contact" variant="light" magnetic>
                Let's build together
              </Button>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
