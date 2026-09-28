import { motion } from 'framer-motion'
import { ease } from '../../utils/motion'

const pieces = [
  { fill: '#18A7E6', t: 'translate(40 36) rotate(38)', r: [-30, -17, 60, 34, 17], from: { x: -26, y: -30 } },
  { fill: '#E3196F', t: 'translate(77 70) rotate(40)', r: [-21, -19, 42, 38, 12], from: { x: 30, y: 0 } },
  { fill: '#FDB52B', t: 'translate(38 104) rotate(-38)', r: [-30, -17, 60, 34, 17], from: { x: -26, y: 30 } },
]

/** The three-brick chevron from the LeadBricks logo. */
export function LogoMark({ size = 30, animate = false, delay = 0 }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 140) / 110)}
      viewBox="0 0 110 140"
      aria-hidden="true"
      focusable="false"
      style={{ overflow: 'visible' }}
    >
      {pieces.map((p, i) => (
        <motion.g
          key={i}
          initial={animate ? { opacity: 0, x: p.from.x, y: p.from.y } : false}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: delay + i * 0.09, ease }}
        >
          <rect x={p.r[0]} y={p.r[1]} width={p.r[2]} height={p.r[3]} rx={p.r[4]} fill={p.fill} transform={p.t} />
        </motion.g>
      ))}
    </svg>
  )
}

/** Mark + wordmark. `tone="light"` for dark backgrounds. */
export default function Logo({ tone = 'dark', size = 24, animate = false, className = '' }) {
  return (
    <span className={`logo logo--${tone} ${className}`}>
      <LogoMark size={size} animate={animate} />
      <motion.span
        className="logo__word"
        initial={animate ? { opacity: 0, x: -8 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease }}
      >
        leadbricks<sup>™</sup>
      </motion.span>
    </span>
  )
}
