/**
 * Transparent pricing catalog.
 * price: number in INR · period: 'month' for recurring, omit for one-time
 * popular: true highlights the card with a "Most Popular" badge.
 */
export const pricing = [
  {
    id: 'websites',
    label: 'Websites',
    intro: 'From a single high-converting page to a full e-commerce store.',
    plans: [
      { name: 'One Page Starter Website', price: 3499, features: ['Hero Section & About', 'Services Grid', 'Contact & WhatsApp CTA', 'Mobile Responsive', '1 Revision'] },
      { name: 'Landing Page', price: 5499, popular: true, features: ['Conversion-Focused Architecture', 'Lead Capture Form', 'Meta Pixel & Analytics', 'Thank You Page', 'Speed Optimized'] },
      { name: 'Portfolio Website', price: 7999, features: ['Up to 4 Pages', 'Portfolio Gallery', 'Category Filters', 'Mobile Responsive', 'WhatsApp Quick Chat'] },
      { name: 'Business Website', price: 9999, popular: true, features: ['Up to 5 Pages', 'Google Maps', 'Basic SEO', 'Contact Form to Email', '2 Revisions'] },
      { name: 'Professional Business Website', price: 14999, features: ['Up to 8 Pages', 'Blog / Case Studies', 'Analytics Integration', 'Advanced Lead Funnels', '3 Revisions'] },
      { name: 'Premium Corporate Website', price: 19999, features: ['Up to 12 Pages', 'Premium Micro-Animations', 'Advanced Conversion Funnels', 'Technical SEO Architecture', 'Dedicated Webmaster'] },
      { name: 'Booking Website', price: 22999, features: ['Booking System', 'Payment Gateway', 'WhatsApp & Email Alerts', 'Dynamic Calendar', 'Admin Booking Portal'] },
      { name: 'Complete E-Commerce Store', price: 27999, features: ['Product Catalog', 'Filtering', 'Cart & Checkout', 'Razorpay / UPI', 'WhatsApp Alerts', 'Customer Accounts'] },
    ],
  },
  {
    id: 'bundles',
    label: 'Turnkey Bundles',
    intro: 'Everything needed to launch and grow — bundled into one plan.',
    plans: [
      { name: 'Business Starter Kit', price: 11999, features: ['One Page Website', 'Logo Refinement', 'Instagram + Facebook Setup', 'Google Business Profile', '6 Social Creatives', 'WhatsApp CTA'] },
      { name: 'Complete Digital Launch', price: 27999, popular: true, features: ['Professional 5-Page Website', 'Social Profile Setup', '12 Creatives', '4 Reels', 'Meta Business + Pixel', 'Lead Funnel', 'Marketing Roadmap'] },
      { name: 'Digital Growth Engine', price: 54999, features: ['Corporate Web Portal', 'Brand Identity', '1 Month Social Management', 'Meta + Google Ads Setup', 'CRM + WhatsApp Automation', 'Scalable Lead Funnel'] },
    ],
  },
  {
    id: 'meta',
    label: 'Meta Ads',
    intro: 'Facebook & Instagram campaigns managed for measurable results.',
    plans: [
      { name: 'Ad Account Setup', price: 2499, features: ['Business Manager', 'Ad Account', 'Payment Setup', 'Pixel & Events', 'Campaign Architecture'] },
      { name: 'Starter Ads Management', price: 5999, period: 'month', features: ['Audience Research', 'Single Funnel', 'Weekly Optimization', 'Bi-Weekly Reports'] },
      { name: 'Growth Ads Management', price: 9499, period: 'month', popular: true, features: ['Multiple Campaign Angles', 'A/B Testing', 'Retargeting', 'Lookalike Audiences', 'Weekly Reports'] },
      { name: 'Professional Scaling', price: 13999, period: 'month', features: ['TOFU / MOFU / BOFU', 'Audience Stacks', 'Budget Scaling', 'Daily CPL Optimization', 'Dedicated Media Buyer'] },
    ],
  },
  {
    id: 'leadgen',
    label: 'Lead Generation',
    intro: 'Done-for-you lead systems — ads, pages, tracking and routing.',
    plans: [
      { name: 'Starter Sprint', price: 11999, period: 'month', features: ['Meta Ads', 'Audience Research', 'Lead Forms', 'Pixel Tracking', 'WhatsApp Alerts'] },
      { name: 'Growth Sprint', price: 16999, period: 'month', popular: true, features: ['Meta Ads', 'Audience Research', 'Lead Forms', 'Retargeting', 'Ad Creatives', 'Qualification Sheets', 'WhatsApp Alerts'] },
      { name: 'Pro Funnel', price: 22999, period: 'month', features: ['Meta Ads + Retargeting', 'Landing Pages', 'Pixel Tracking', 'Ad Creatives', 'CRM Pipeline', 'Qualification Sheets', 'WhatsApp Alerts'] },
      { name: 'Scale Enterprise', price: 34999, period: 'month', features: ['Meta Ads + Google Search', 'Landing Pages', 'Ad Creatives', 'CRM Pipeline', 'Lead Routing', 'Retargeting', 'Scaling'] },
    ],
  },
  {
    id: 'reels',
    label: 'Reels & Video',
    intro: 'Short-form video edited for hooks, retention and action.',
    plans: [
      { name: 'Basic Reel', price: 399, features: ['Editing', 'Audio Sync', 'Captions'] },
      { name: 'Professional Reel', price: 599, popular: true, features: ['Editing', 'Audio Sync', 'Captions', 'Typography', 'SFX'] },
      { name: 'Promotional Reel', price: 799, features: ['Editing & Audio Sync', 'Captions & Typography', 'SFX', 'Color Grading', 'CTA'] },
      { name: 'Performance Ad Reel', price: 1099, features: ['Hook Strategy', 'Editing & Audio Sync', 'Captions & Typography', 'SFX & Color Grading', 'CTA'] },
      { name: '8 Reels Package', price: 3999, features: ['8 Edited Reels', 'Captions & Typography', 'Audio Sync & SFX', 'Hook Strategy', 'Content Calendar'] },
      { name: '20 Reels Package', price: 8999, features: ['20 Edited Reels', 'Captions & Typography', 'SFX & Color Grading', 'Hook Strategy & CTA', 'Content Calendar'] },
    ],
  },
  {
    id: 'creative',
    label: 'Creative Design',
    intro: 'Pay-per-creative design for posts, ads and carousels.',
    plans: [
      { name: 'Basic Social Post', price: 149, features: ['Single Static Creative', 'Brand Colors & Fonts', 'Social-Ready Size'] },
      { name: 'Professional Creative', price: 199, popular: true, features: ['Custom Layout', 'Copy Integration', 'Brand Consistency', 'Social-Ready Sizes'] },
      { name: 'Premium Promotional Creative', price: 299, features: ['Offer / Promo Design', 'Premium Visual Treatment', 'Ad-Ready Formats'] },
      { name: '5-Slide Carousel', price: 599, features: ['5 Connected Slides', 'Story-Led Layout', 'Brand Consistency'] },
      { name: '10-Slide Carousel', price: 1199, features: ['10 Connected Slides', 'Story-Led Layout', 'Brand Consistency'] },
    ],
  },
  {
    id: 'social',
    label: 'Social Media',
    intro: 'Monthly social management with content, stories and reporting.',
    plans: [
      { name: 'Starter', price: 7999, period: 'month', features: ['12 Creatives', '4 Reels', 'Instagram + Facebook', 'Captions & Hashtags', 'Monthly Report'] },
      { name: 'Growth', price: 13999, period: 'month', popular: true, features: ['16 Creatives', '6 Reels', 'Instagram + Facebook + LinkedIn', 'Stories Monday–Friday', 'Content Calendar', 'Strategic Review'] },
      { name: 'Premium', price: 22999, period: 'month', features: ['20 Creatives', '8 Reels', 'Multi-Platform Management', 'Daily Stories', 'Community Moderation', 'Analytics', 'Dedicated Account Manager'] },
    ],
  },
  {
    id: 'google',
    label: 'Google Ads & GBP',
    intro: 'Show up on Google Search and Maps when customers look for you.',
    plans: [
      { name: 'GBP Setup', price: 1499, features: ['Profile Creation', 'Categories & Services', 'Photos & Business Info', 'Verification Support'] },
      { name: 'GBP Complete Optimization', price: 2499, popular: true, features: ['Complete Profile Optimization', 'Keyword-Rich Description', 'Products & Services', 'Posts Setup', 'Review Strategy'] },
      { name: 'Google Search Ads Management', price: 6999, period: 'month', features: ['Keyword Research', 'Ad Copywriting', 'Conversion Tracking', 'Bid Optimization', 'Monthly Report'] },
      { name: 'Unified Meta + Google Ads', price: 16999, period: 'month', features: ['Meta + Google Management', 'Cross-Channel Retargeting', 'Unified Tracking', 'Budget Allocation', 'Weekly Reports'] },
    ],
  },
  {
    id: 'branding',
    label: 'Branding & Identity',
    intro: 'Identity kits from a first logo to a complete brand system.',
    plans: [
      { name: 'Starter Brand Kit', price: 3499, features: ['Logo Concepts', 'Color Palette', 'Typography', 'Vector Files'] },
      { name: 'Professional Brand Kit', price: 6999, popular: true, features: ['Logo Suite', 'Color Palette', 'Typography', 'Visiting Card', 'Letterhead', 'Social Kit', 'Vector Files'] },
      { name: 'Complete Brand System', price: 11999, features: ['Logo Suite', 'Color Palette & Typography', 'Brand Guidelines', 'Complete Stationery', 'Social Kit', 'Vector Files'] },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    intro: 'Keep your website secure, fast and up to date.',
    plans: [
      { name: 'Basic', price: 1499, period: 'month', features: ['Backups', 'Uptime Monitoring', 'SSL Checks'] },
      { name: 'Standard', price: 2499, period: 'month', popular: true, features: ['Backups', 'Uptime Monitoring', 'SSL Checks', 'Security', 'Speed Optimization', 'Content Updates'] },
      { name: 'Premium', price: 3499, period: 'month', features: ['Everything in Standard', 'Priority Support', 'Webmaster Support'] },
    ],
  },
  {
    id: 'seo',
    label: 'SEO & Automation',
    intro: 'Local visibility and automated lead handling.',
    plans: [
      { name: 'Local SEO', price: 7999, period: 'month', features: ['Google Maps Strategy', 'Citations', 'Local Landing Pages', 'Rank Tracking'] },
      { name: 'WhatsApp Inquiry Automation', price: 5999, features: ['Instant Greetings', 'Service Selection', 'Lead Capture', 'Notifications'] },
      { name: 'WhatsApp + CRM + Lead Routing', price: 16999, popular: true, features: ['CRM / Sheets Sync', 'Sales Team Alerts', 'Automated Follow-Ups', 'Webhooks', 'Zapier / Make'] },
    ],
  },
]

export const packageCount = pricing.reduce((sum, c) => sum + c.plans.length, 0)

export const pricingDisclaimer =
  'Prices shown are service fees and may vary depending on project scope, customization and requirements. Advertising media spend, third-party tools, hosting, domains, premium plugins, API charges and applicable taxes are not included unless specifically mentioned.'
