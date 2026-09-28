import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useMagnetic } from '../../hooks/useMagnetic'

export function ArrowSwap({ dark = false, icon: Icon = ArrowUpRight }) {
  return (
    <span className={`arrow-swap${dark ? ' arrow-swap--dark' : ''}`} aria-hidden="true">
      <Icon strokeWidth={2.2} />
      <Icon strokeWidth={2.2} />
    </span>
  )
}

/**
 * Pill button with animated arrow. Renders <a> when href is given.
 * magnetic: pulls toward the cursor on desktop.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size,
  block,
  magnetic = false,
  icon: Icon = ArrowUpRight,
  className = '',
  external,
  type = 'button',
  ...rest
}) {
  const mag = useMagnetic(0.25)
  const cls = ['btn', `btn--${variant}`, size && `btn--${size}`, block && 'btn--block', className]
    .filter(Boolean)
    .join(' ')
  const Comp = href ? motion.a : motion.button
  const linkProps = href
    ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : { type }

  return (
    <Comp
      ref={mag.ref}
      className={cls}
      style={magnetic ? mag.style : undefined}
      onPointerMove={magnetic ? mag.onPointerMove : undefined}
      onPointerLeave={magnetic ? mag.onPointerLeave : undefined}
      whileTap={{ scale: 0.97 }}
      {...linkProps}
      {...rest}
    >
      <span>{children}</span>
      <span className="btn__icon" aria-hidden="true">
        <Icon strokeWidth={2.4} />
        <Icon strokeWidth={2.4} />
      </span>
    </Comp>
  )
}
