import { motion } from 'framer-motion'
import { useTilt } from '../../hooks/useTilt'
import { cardIn } from '../../utils/motion'

const hoverLift = { y: -6, transition: { type: 'spring', stiffness: 300, damping: 24 } }

/**
 * Glass bento card: staggered entrance (via parent variants), cursor spotlight,
 * glowing edge, subtle 3D tilt and hover lift.
 */
export default function Card({
  as = 'div',
  className = '',
  variant,
  tilt = 2.5,
  lift = true,
  variants = cardIn,
  children,
  style,
  ...rest
}) {
  const t = useTilt(tilt)
  const Comp = motion[as]
  const cls = ['card', variant && `card--${variant}`, className].filter(Boolean).join(' ')
  return (
    <Comp
      ref={t.ref}
      className={cls}
      variants={variants}
      style={{ ...t.style, ...style }}
      onPointerMove={t.onPointerMove}
      onPointerLeave={t.onPointerLeave}
      whileHover={lift ? (typeof lift === 'number' ? { ...hoverLift, y: lift } : hoverLift) : undefined}
      {...rest}
    >
      {children}
    </Comp>
  )
}
