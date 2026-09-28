import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Plus } from 'lucide-react'
import { faqs } from '../data/faqs'
import { siteConfig } from '../config/siteConfig'
import { DEFAULT_MESSAGE, telLink, whatsappLink } from '../utils/contact'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import Button from './ui/Button'
import { ease, fadeUp, inView, stagger } from '../utils/motion'
import './FAQ.css'

function Item({ q, a, open, onToggle }) {
  const id = useId()
  return (
    <motion.div className={`faq__item${open ? ' is-open' : ''}`} variants={fadeUp}>
      <h3 className="faq__q">
        <button aria-expanded={open} aria-controls={`${id}-a`} id={`${id}-q`} onClick={onToggle}>
          <span>{q}</span>
          <span className="faq__icon" aria-hidden="true">
            <Plus strokeWidth={2.4} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            role="region"
            aria-labelledby={`${id}-q`}
            className="faq__a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <div className="faq__side">
          <SectionHead eyebrow="FAQ" headingId="faq-title" lines={['Good questions.', { text: 'Clear answers.', className: 'accent' }]} />
          <motion.div variants={stagger()} {...inView}>
            <Card className="faq__help" variant="tint-purple" tilt={2}>
              <p className="faq__help-title">Still have a question?</p>
              <p className="faq__help-text">Talk to us directly on WhatsApp or give us a call. No forms, no waiting for a callback.</p>
              <div className="faq__help-actions">
                <Button href={whatsappLink(DEFAULT_MESSAGE)} external size="sm">
                  Ask on WhatsApp
                </Button>
                <Button href={telLink()} variant="ghost" size="sm" icon={Phone} aria-label={`Call ${siteConfig.contact.phone}`}>
                  Call us
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div className="faq__list" variants={stagger(0.06)} {...inView}>
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
