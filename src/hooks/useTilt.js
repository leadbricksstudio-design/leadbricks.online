import { useCallback, useRef } from 'react'
import { useReducedMotion, useSpring } from 'framer-motion'
import { useFinePointer } from './useMediaQuery'

const spring = { stiffness: 180, damping: 18, mass: 0.6 }

/**
 * Subtle 3D tilt + cursor position CSS vars (--mx / --my) for the glass spotlight.
 * Tilt is disabled for touch devices and reduced-motion users.
 */
export function useTilt(max = 2.5) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const enabled = max > 0 && fine && !reduce
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || e.pointerType === 'touch') return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.setProperty('--mx', `${x * 100}%`)
      el.style.setProperty('--my', `${y * 100}%`)
      if (enabled) {
        rotateY.set((x - 0.5) * max * 2)
        rotateX.set(-(y - 0.5) * max * 2)
      }
    },
    [enabled, max, rotateX, rotateY]
  )

  const onPointerLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return {
    ref,
    style: enabled ? { rotateX, rotateY, transformPerspective: 1100 } : undefined,
    onPointerMove,
    onPointerLeave,
  }
}
