import { useCallback, useRef } from 'react'
import { useReducedMotion, useSpring } from 'framer-motion'
import { useFinePointer } from './useMediaQuery'

/** Magnetic pull toward the cursor for CTAs. */
export function useMagnetic(strength = 0.28) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const enabled = fine && !reduce
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.5 })
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.5 })

  const onPointerMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return
      const r = ref.current.getBoundingClientRect()
      x.set((e.clientX - (r.left + r.width / 2)) * strength)
      y.set((e.clientY - (r.top + r.height / 2)) * strength)
    },
    [enabled, strength, x, y]
  )
  const onPointerLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { ref, style: enabled ? { x, y } : undefined, onPointerMove, onPointerLeave }
}
