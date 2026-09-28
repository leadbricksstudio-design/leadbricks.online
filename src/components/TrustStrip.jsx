import { Fragment } from 'react'
import { trustWords } from '../data/content'
import { Reveal } from './ui/Reveal'
import './TrustStrip.css'

function Row({ words, hidden }) {
  return (
    <div className="trust__group" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <Fragment key={w}>
          <span className="trust__word">{w}</span>
          <span className={`trust__x trust__x--${i % 3}`} aria-hidden="true">×</span>
        </Fragment>
      ))}
    </div>
  )
}

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Everything under one roof">
      <div className="trust__bands">
        <div className="trust__band trust__band--back" aria-hidden="true">
          <div className="trust__track trust__track--reverse">
            {[0, 1, 2, 3].map((k) => (
              <span className="trust__small" key={k}>
                Building growth · Brick by brick · Building growth · Brick by brick ·
              </span>
            ))}
          </div>
        </div>
        <div className="trust__band trust__band--front">
          <div className="trust__track">
            {[0, 1, 2, 3].map((k) => (
              <Row key={k} words={trustWords} hidden={k > 0} />
            ))}
          </div>
        </div>
      </div>
      <Reveal className="container">
        <p className="trust__text">
          Everything your business needs to grow online — <strong>under one roof.</strong>
        </p>
      </Reveal>
    </section>
  )
}
