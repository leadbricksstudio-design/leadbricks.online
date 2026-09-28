import {
  Globe, Target, Magnet, Users, Clapperboard, Palette, Gem, Search, Workflow,
} from 'lucide-react'

/**
 * Services shown in the Services bento grid.
 * `size` controls the bento footprint: 'xl' | 'md' | 'sm'
 * `visual` picks the small animated illustration inside the card.
 */
export const services = [
  {
    id: 'web',
    title: 'Website Design & Development',
    blurb: 'Fast, modern websites engineered to turn visitors into enquiries.',
    icon: Globe,
    accent: 'cyan',
    size: 'xl',
    visual: 'browser',
    items: ['Landing Pages', 'Business Websites', 'Portfolio Websites', 'Corporate Websites', 'Booking Websites', 'E-Commerce'],
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    blurb: 'Paid campaigns built around outcomes — not impressions.',
    icon: Target,
    accent: 'pink',
    size: 'xl',
    visual: 'chart',
    items: ['Meta Ads', 'Google Ads', 'Retargeting', 'Funnel Strategy', 'Campaign Optimization', 'Conversion Tracking'],
  },
  {
    id: 'leads',
    title: 'Lead Generation',
    blurb: 'Capture, qualify and route every enquiry automatically.',
    icon: Magnet,
    accent: 'yellow',
    size: 'md',
    visual: 'funnel',
    items: ['Lead Campaigns', 'Landing Pages', 'Lead Forms', 'WhatsApp Integration', 'CRM Integration', 'Lead Routing'],
  },
  {
    id: 'social',
    title: 'Social Media',
    blurb: 'Consistent content that keeps your brand in the feed.',
    icon: Users,
    accent: 'purple',
    size: 'md',
    visual: 'feed',
    items: ['Instagram', 'Facebook', 'LinkedIn', 'Content Calendar', 'Creatives', 'Reels', 'Stories'],
  },
  {
    id: 'video',
    title: 'Reels & Video',
    blurb: 'Scroll-stopping edits with hooks that hold attention.',
    icon: Clapperboard,
    accent: 'pink',
    size: 'md',
    visual: 'timeline',
    items: ['Social Reels', 'Promotional Videos', 'Performance Ads', 'Motion Graphics', 'Captions', 'Sound Design'],
  },
  {
    id: 'creative',
    title: 'Creative Design',
    blurb: 'On-brand creatives for every post and campaign.',
    icon: Palette,
    accent: 'cyan',
    size: 'sm',
    visual: 'swatch',
    items: ['Social Posts', 'Ad Creatives', 'Promotional Creatives', 'Carousels', 'Campaign Graphics'],
  },
  {
    id: 'branding',
    title: 'Branding',
    blurb: 'Identity systems that look consistent everywhere.',
    icon: Gem,
    accent: 'purple',
    size: 'sm',
    visual: 'mark',
    items: ['Logo', 'Brand Colors', 'Typography', 'Brand Guidelines', 'Stationery', 'Social Identity'],
  },
  {
    id: 'seo',
    title: 'SEO & Local Growth',
    blurb: 'Get found when customers search nearby.',
    icon: Search,
    accent: 'yellow',
    size: 'sm',
    visual: 'pin',
    items: ['Local SEO', 'On-Page SEO', 'Technical SEO', 'Google Business Profile', 'Keyword Optimization'],
  },
  {
    id: 'automation',
    title: 'Automation',
    blurb: 'Workflows that follow up while you sleep.',
    icon: Workflow,
    accent: 'cyan',
    size: 'sm',
    visual: 'nodes',
    items: ['WhatsApp Automation', 'CRM Integration', 'Google Sheets', 'Lead Routing', 'Follow-Ups', 'Zapier / Make'],
  },
]

export const serviceOptions = [
  'Website Development',
  'Meta Ads',
  'Google Ads',
  'Lead Generation',
  'Social Media',
  'Reels & Video',
  'Creative Design',
  'Branding',
  'SEO',
  'Automation',
  'Custom Requirement',
]

export const budgetOptions = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
]
