import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, CircleCheck, LoaderCircle, Send, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { budgetOptions, serviceOptions } from '../data/services'
import { DEFAULT_MESSAGE, submitLead, telLink, whatsappLink } from '../utils/contact'
import Card from './ui/Card'
import Photo from './ui/Photo'
import Button, { ArrowSwap } from './ui/Button'
import { Eyebrow } from './ui/SectionHead'
import { MaskText } from './ui/Reveal'
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './ui/BrandIcons'
import { ease, inView, stagger } from '../utils/motion'
import './Contact.css'

const socials = [
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedInIcon },
]

const empty = { name: '', business: '', phone: '', email: '', service: '', budget: '', message: '', botcheck: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number.'
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email.'
  if (!v.service) e.service = 'Please choose a service.'
  return e
}

function Field({ label, name, error, children, full }) {
  return (
    <div className={`field${full ? ' field--full' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {children}
      {error && (
        <span className="field__error" id={`f-${name}-err`} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const viaWhatsApp = siteConfig.form.provider === 'whatsapp'

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }
  const a11y = (k) => ({
    id: `f-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `f-${k}-err` : undefined,
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.botcheck) return
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      // eslint-disable-next-line no-unused-vars
      const { botcheck, ...data } = values
      await submitLead(data)
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <motion.div className="contact__grid" variants={stagger(0.08)} {...inView}>
          <Card className="contact__intro" variant="dark" tilt={1}>
            <Photo src="/images/contact-meeting.webp" alt="LeadBricks team meeting with a client" overlay="brand" position="60% 30%" />
            <div className="contact__intro-bricks" aria-hidden="true">
              <i className="brick brick--cyan" />
              <i className="brick brick--pink" />
              <i className="brick brick--yellow" />
            </div>
            <Eyebrow dark>Start a project</Eyebrow>
            <MaskText
              as="h2"
              id="contact-title"
              className="contact__title"
              lines={['Your next customer', { text: 'is out there.', className: 'accent-yellow' }]}
            />
            <p className="contact__lead">
              Tell us what you're building. We'll help you create the system to grow it.
            </p>
          </Card>

          <Card className="contact__form-card" tilt={0} lift={false}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="ok"
                  className="contact__success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  role="status"
                >
                  <span className="contact__success-icon">
                    <CircleCheck />
                  </span>
                  <h3>{viaWhatsApp ? 'WhatsApp is ready.' : 'Enquiry received.'}</h3>
                  <p>
                    {viaWhatsApp
                      ? 'We opened WhatsApp with your details pre-filled — just press send and we’ll take it from there.'
                      : 'Thanks for reaching out. The LeadBricks team will get back to you shortly.'}
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setStatus('idle')}>
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form__head">
                    <h3>Project enquiry</h3>
                    <span className="kicker">Takes under a minute</span>
                  </div>

                  <Field label="Full name *" name="name" error={errors.name}>
                    <input type="text" autoComplete="name" placeholder="Your name" {...a11y('name')} />
                  </Field>
                  <Field label="Business name" name="business">
                    <input type="text" autoComplete="organization" placeholder="Company / brand" {...a11y('business')} />
                  </Field>
                  <Field label="Phone *" name="phone" error={errors.phone}>
                    <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" {...a11y('phone')} />
                  </Field>
                  <Field label="Email" name="email" error={errors.email}>
                    <input type="email" autoComplete="email" placeholder="you@business.com" {...a11y('email')} />
                  </Field>
                  <Field label="Service required *" name="service" error={errors.service}>
                    <select {...a11y('service')}>
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Estimated budget" name="budget">
                    <select {...a11y('budget')}>
                      <option value="">Select a range</option>
                      {budgetOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" name="message" full>
                    <textarea rows={4} placeholder="Tell us about your goals, timeline and anything else we should know." {...a11y('message')} />
                  </Field>

                  <input
                    type="text"
                    name="botcheck"
                    className="sr-only"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={values.botcheck}
                    onChange={set('botcheck')}
                  />

                  <div className="form__foot">
                    <Button type="submit" icon={status === 'sending' ? LoaderCircle : Send} disabled={status === 'sending'} className={status === 'sending' ? 'is-loading' : ''}>
                      {status === 'sending' ? 'Sending…' : viaWhatsApp ? 'Send via WhatsApp' : 'Send enquiry'}
                    </Button>
                    {status === 'error' && (
                      <p className="form__error" role="alert">
                        Something went wrong. Please try again or{' '}
                        <a href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
                          message us on WhatsApp
                        </a>
                        .
                      </p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>

          <Card as="a" href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className="contact__wa">
            <span className="contact__wa-icon">
              <WhatsAppIcon width={26} height={26} />
            </span>
            <div className="contact__wa-body">
              <h3 className="contact__wa-title">Prefer WhatsApp?</h3>
              <p className="contact__wa-cta">Chat with LeadBricks</p>
            </div>
            <ArrowSwap />
          </Card>

          <Card className="contact__info" tilt={0}>
            <p className="contact__info-kicker">Talk to us directly</p>
            <a href={telLink()} className="contact__line">
              <span className="contact__line-icon">
                <Phone />
              </span>
              <span className="contact__line-body">
                <small>Call us</small>
                <span>{siteConfig.contact.phone}</span>
              </span>
              <ArrowUpRight className="contact__line-go" />
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="contact__line">
              <span className="contact__line-icon">
                <Mail />
              </span>
              <span className="contact__line-body">
                <small>Email us</small>
                <span>{siteConfig.contact.email}</span>
              </span>
              <ArrowUpRight className="contact__line-go" />
            </a>
            <div className="contact__social">
              <small>Follow our work</small>
              <div className="contact__social-row">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-btn social-btn--${label.toLowerCase()}`}
                    aria-label={`LeadBricks on ${label}`}
                  >
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
