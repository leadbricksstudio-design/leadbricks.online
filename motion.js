export const ease = [0.22, 1, 0.36, 1]

export const stagger = (each = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
})

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const cardIn = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease } },
}

export const lineUp = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.85, ease } },
}

export const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.15 } }
