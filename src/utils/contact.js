import { siteConfig } from '../config/siteConfig'

export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN')

export function whatsappLink(message = '') {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const telLink = () => `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`

export function planMessage(plan) {
  const price = `${inr(plan.price)}${plan.period === 'month' ? '/month' : ''}`
  return `Hi LeadBricks, I'm interested in the ${plan.name} package (${price}). I'd like to discuss the details.`
}

export const DEFAULT_MESSAGE = "Hi LeadBricks, I'd like to discuss a project for my business."
export const CUSTOM_QUOTE_MESSAGE =
  "Hi LeadBricks, I'd like a custom package built around my goals. Can we discuss?"

export function leadMessage(d) {
  return [
    'Hi LeadBricks, new enquiry from the website:',
    '',
    `Name: ${d.name}`,
    d.business && `Business: ${d.business}`,
    `Phone: ${d.phone}`,
    d.email && `Email: ${d.email}`,
    d.service && `Service: ${d.service}`,
    d.budget && `Budget: ${d.budget}`,
    d.message && `Message: ${d.message}`,
  ]
    .filter((l) => l !== undefined && l !== false && l !== '')
    .join('\n')
}

/**
 * Deliver the contact form using the provider configured in siteConfig.form.
 * Resolves on success, throws on failure.
 */
export async function submitLead(data) {
  const cfg = siteConfig.form
  const subject = `New enquiry — ${data.service || 'General'} — ${data.name}`

  switch (cfg.provider) {
    case 'web3forms': {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: cfg.web3formsKey, subject, from_name: 'LeadBricks Website', ...data }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Submission failed')
      return
    }
    case 'formsubmit': {
      const res = await fetch(`https://formsubmit.co/ajax/${cfg.formsubmitEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, _template: 'table', ...data }),
      })
      if (!res.ok) throw new Error('Submission failed')
      return
    }
    case 'googleForms': {
      const body = new FormData()
      Object.entries(cfg.googleForms.fields).forEach(([key, entry]) => body.append(entry, data[key] || ''))
      // Google Forms does not return CORS headers; an opaque response means it was sent.
      await fetch(cfg.googleForms.action, { method: 'POST', mode: 'no-cors', body })
      return
    }
    case 'whatsapp':
    default:
      window.open(whatsappLink(leadMessage(data)), '_blank', 'noopener')
  }
}
