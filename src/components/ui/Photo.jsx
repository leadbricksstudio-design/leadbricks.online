/**
 * Full-bleed background photo for a card or panel.
 * Sits behind the content (the parent needs `isolation: isolate`) with a tint overlay
 * set by the `overlay` modifier: 'bottom' (dark fade for text at the bottom) or 'brand' (purple wash).
 */
export default function Photo({ src, alt = '', overlay = 'bottom', position, priority = false, className = '' }) {
  return (
    <div className={`photo photo--${overlay} ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  )
}
