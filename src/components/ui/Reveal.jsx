import { motion } from 'framer-motion'
import { fadeUp, lineUp, stagger } from '../../utils/motion'

/**
 * Text mask reveal — each line slides up from behind a clip.
 * lines: array of strings or { text, className }
 */
export function MaskText({ lines, as = 'h2', className = 'display', delay = 0, each = 0.1, animateNow = false, id }) {
  const Comp = motion[as]
  const trigger = animateNow
    ? { initial: 'hidden', animate: 'show' }
    : { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.4 } }
  return (
    <Comp className={className} variants={stagger(each, delay)} id={id} {...trigger}>
      {lines.map((line, i) => {
        const obj = line !== null && typeof line === 'object' && 'text' in line
        return (
          <span className="mask-line" key={i}>
            <motion.span variants={lineUp} className={obj ? line.className : undefined}>
              {obj ? line.text : line}
            </motion.span>
          </span>
        )
      })}
    </Comp>
  )
}

/** Simple fade-up on scroll. */
export function Reveal({ as = 'div', children, delay = 0, className, ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
