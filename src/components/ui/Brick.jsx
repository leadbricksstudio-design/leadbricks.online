/** Abstract brand brick. Size via w/h (px), color: cyan | pink | yellow | purple | glass */
export default function Brick({ color = 'yellow', w = 44, h = 22, rotate = 0, className = '', style }) {
  return (
    <span
      className={`brick brick--${color} ${className}`}
      style={{ width: w, height: h, transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
      aria-hidden="true"
    />
  )
}
