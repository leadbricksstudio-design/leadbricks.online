/**
 * LEADBRICKS — central site configuration.
 * Change contact details, social links and form provider here.
 * No component needs to be edited for these values.
 */
export const siteConfig = {
  name: 'LeadBricks',
  descriptor: 'Marketing Agency',
  url: 'https://leadbricks.in',

  tagline: ['Build your brand.', 'Brick by brick.'],
  positioning: "We don't just generate leads. We build growth systems.",
  supporting: 'Strategy. Creativity. Performance. Growth.',
  footerTagline: 'Building growth. Brick by brick.',

  contact: {
    // WhatsApp number in international format, digits only (country code + number).
    whatsapp: '919958044308',
    phone: '+91 99580 44308',
    email: 'admin@leadbricks.online',
    location: 'India · Serving clients remotely',
  },

  social: {
    instagram: 'https://www.instagram.com/leadbricks_agency/',
    facebook: 'https://www.facebook.com/leadbricksstudios',
    linkedin: 'https://www.linkedin.com/company/leadbricks-studio/',
  },

  legal: {
    privacy: '/privacy.html',
    terms: '/terms.html',
  },

  /**
   * Contact form delivery.
   * provider: 'whatsapp' | 'web3forms' | 'formsubmit' | 'googleForms'
   *  - whatsapp:    opens WhatsApp with the enquiry pre-filled (works with zero setup)
   *  - web3forms:   set web3formsKey (https://web3forms.com)
   *  - formsubmit:  set formsubmitEmail (https://formsubmit.co) — confirm the first email
   *  - googleForms: set googleForms.action + entry IDs for each field
   */
  form: {
    provider: 'whatsapp',
    web3formsKey: '',
    formsubmitEmail: 'admin@leadbricks.online',
    googleForms: {
      action: '', // e.g. https://docs.google.com/forms/d/e/FORM_ID/formResponse
      fields: {
        name: 'entry.0000000001',
        business: 'entry.0000000002',
        phone: 'entry.0000000003',
        email: 'entry.0000000004',
        service: 'entry.0000000005',
        budget: 'entry.0000000006',
        message: 'entry.0000000007',
      },
    },
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
}

export default siteConfig
