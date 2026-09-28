import { MaskText, Reveal } from './Reveal'

export function Eyebrow({ children, dark = false }) {
  return (
    <span className={`eyebrow${dark ? ' eyebrow--dark' : ''}`}>
      <span className="eyebrow__bricks" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {children}
    </span>
  )
}

/**
 * Eyebrow + masked display heading + optional description.
 * align: 'left' | 'center' | 'split'
 */
export default function SectionHead({ eyebrow, lines, description, align = 'left', dark = false, headingId, children }) {
  const layout = align === 'center' ? 'section-head--center' : align === 'split' ? 'section-head--split' : ''
  return (
    <header className={`section-head ${layout}`}>
      <div className="section-head__title">
        {eyebrow && (
          <Reveal>
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <MaskText lines={lines} as="h2" className="display" id={headingId} />
      </div>
      {(description || children) && (
        <Reveal delay={0.15} className="section-head__aside">
          {description && <p className="lead">{description}</p>}
          {children}
        </Reveal>
      )}
    </header>
  )
}
