import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { ease } from '../utils/motion'
import './Floating.css'

export default function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => {
    const next = v > 900
    setShow((s) => (s === next ? s : next))
  })

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.querySelector('.nav__brand')?.focus({ preventScroll: true })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="to-top"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease }}
        >
          <svg className="to-top__ring" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="21" className="to-top__track" />
            <motion.circle cx="24" cy="24" r="21" className="to-top__progress" style={{ pathLength: scrollYProgress }} />
          </svg>
          <ArrowUp strokeWidth={2.4} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
