import {
  Compass, Target, Sparkles, TrendingUp, Eye, ShieldCheck, Magnet, Handshake,
  Search, Route, PenTool, Rocket, Gauge, ChartLine, Receipt, Layers,
} from 'lucide-react'

export const trustWords = ['Strategy', 'Creative', 'Performance', 'Technology', 'Automation']

export const aboutPillars = [
  { title: 'Strategy First', text: 'Every activity starts with a plan.', icon: Compass, accent: 'cyan' },
  { title: 'Conversion Focused', text: 'Built around enquiries, not likes.', icon: Target, accent: 'pink' },
  { title: 'Creative + Performance', text: 'Design backed by data.', icon: Sparkles, accent: 'yellow' },
  { title: 'Built to Scale', text: 'Systems that grow with you.', icon: TrendingUp, accent: 'purple' },
]

export const formula = [
  { title: 'Attention', text: 'Get discovered by the right audience.', icon: Eye, color: 'cyan' },
  { title: 'Trust', text: 'Build credibility through content and branding.', icon: ShieldCheck, color: 'pink' },
  { title: 'Lead', text: 'Turn interest into measurable opportunities.', icon: Magnet, color: 'yellow' },
  { title: 'Customer', text: 'Turn qualified interest into business.', icon: Handshake, color: 'purple' },
]

export const philosophy = [
  { id: 'machine', title: 'The Lead Machine', text: 'Build systems that consistently generate opportunities.' },
  { id: 'flow', title: 'Attention → Trust → Lead', text: "Attention alone doesn't build businesses." },
  { id: 'followers', title: 'Stop Chasing Followers', text: 'Start building customers.' },
  { id: 'random', title: 'No Random Activity', text: 'Every campaign needs a purpose.' },
  { id: 'content', title: 'Content Is a Brick', text: 'Every piece strengthens your brand.' },
  { id: 'next', title: 'Your Next Customer Is Out There', text: 'We help them discover you.' },
  { id: 'missing', title: 'The Missing Brick', text: 'Find the gap. Fix the funnel.' },
  { id: 'pipeline', title: 'Build a Pipeline', text: "Don't just get leads. Build predictable growth." },
]

export const processSteps = [
  { n: '01', title: 'Discover', text: 'Understand the business.', icon: Search },
  { n: '02', title: 'Strategize', text: 'Build the roadmap.', icon: Route },
  { n: '03', title: 'Create', text: 'Design the assets.', icon: PenTool },
  { n: '04', title: 'Launch', text: 'Go live.', icon: Rocket },
  { n: '05', title: 'Optimize', text: 'Improve using data.', icon: Gauge },
  { n: '06', title: 'Scale', text: 'Grow what works.', icon: TrendingUp },
]

export const whyCards = [
  { id: 'strat', title: 'Strategy First', text: 'No random marketing. Every brick is placed with a purpose — audience, offer, channel and funnel mapped before a single rupee is spent.', icon: Compass },
  { id: 'conv', title: 'Conversion Focused', text: 'Business outcomes over vanity metrics.', icon: Target },
  { id: 'crea', title: 'Creative + Performance', text: 'Design backed by marketing strategy.', icon: Sparkles },
  { id: 'data', title: 'Data Driven', text: 'Make decisions using performance.', icon: ChartLine },
  { id: 'trans', title: 'Transparent Pricing', text: "Know exactly what you're paying for — fixed, published service fees.", icon: Receipt },
  { id: 'scale', title: 'Built to Scale', text: 'Systems designed to grow with your business.', icon: Layers },
]
