import { Check } from 'lucide-react'
import Card from './ui/Card'
import Button from './ui/Button'
import { inr, planMessage, whatsappLink } from '../utils/contact'
import { ease } from '../utils/motion'
import { useMediaQuery } from '../hooks/useMediaQuery'

const makeVariants = (raised) => ({
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: raised ? -8 : 0, scale: 1, transition: { duration: 0.55, ease } },
})
const base = makeVariants(false)
const raised = makeVariants(true)

export default function PricingCard({ plan }) {
  const monthly = plan.period === 'month'
  // Raised look only when cards sit side by side
  const multiCol = useMediaQuery('(min-width: 768px)')
  const isRaised = plan.popular && multiCol
  return (
    <Card
      as="article"
      className={`pcard${plan.popular ? ' pcard--popular' : ''}`}
      variants={isRaised ? raised : base}
      lift={isRaised ? -14 : -6}
      tilt={1.5}
      aria-label={`${plan.name} — ${inr(plan.price)}${monthly ? ' per month' : ''}`}
    >
      <div className="pcard__head">
        <span className="pcard__type">{monthly ? 'Monthly' : 'One-time'}</span>
        {plan.popular && <span className="pcard__badge">Most popular</span>}
      </div>

      <h3 className="pcard__name">{plan.name}</h3>

      <p className="pcard__price">
        <span className="pcard__amount">{inr(plan.price)}</span>
        {monthly && <span className="pcard__per">/month</span>}
      </p>

      <ul className="pcard__features">
        {plan.features.map((f) => (
          <li key={f}>
            <span className="pcard__check" aria-hidden="true">
              <Check strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Button
        href={whatsappLink(planMessage(plan))}
        external
        variant={plan.popular ? 'primary' : 'ghost'}
        block
        className="pcard__cta"
        aria-label={`Choose the ${plan.name} plan on WhatsApp`}
      >
        Choose plan
      </Button>
    </Card>
  )
}
