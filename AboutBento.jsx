import { motion } from 'framer-motion'
import { aboutPillars } from '../data/content'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import Photo from './ui/Photo'
import { ease, inView, stagger } from '../utils/motion'
import './AboutBento.css'

/* Growth system shown as a wall of labelled bricks (top → bottom; strategy is the foundation) */
const wall = [
  ['Technology', 'Conversion'],
  ['Content', 'Advertising'],
  ['Strategy'],
]

const statement = ['Every campaign.', 'Every creative.', 'Every landing page.', 'Every lead.']

export default function AboutBento() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead
          eyebrow="Who we are"
          headingId="about-title"
          align="split"
          lines={["Marketing shouldn't", { text: 'be random.', className: 'accent' }]}
          description="Structured growth instead of random marketing — strategy, creative, ads, technology and conversion working as one system."
        />

        <motion.div className="about__grid" variants={stagger(0.09)} {...inView}>
          <Card className="about__desc">
            <p className="about__big">
              <strong>LeadBricks</strong> is a growth-focused marketing agency helping startups, MSMEs and growing
              businesses build stronger digital foundations.
            </p>
            <p className="lead">
              Instead of random marketing activities, we create structured systems where strategy, content, advertising,
              technology and conversion work together.
            </p>

            <motion.div
              className="wall"
              aria-label="Our growth system: strategy, content, advertising, technology and conversion"
              role="img"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2, staggerDirection: -1 } } }}
            >
              {wall.map((row, r) => (
                <div className={`wall__row wall__row--${r}`} key={r}>
                  {row.map((label) => (
                    <motion.span
                      key={label}
                      className={`wall__brick${label === 'Conversion' ? ' wall__brick--key' : ''}`}
                      variants={{
                        hidden: { opacity: 0, y: -60, rotate: -6 },
                        show: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 160, damping: 16 } },
                      }}
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>
          </Card>

          <div className="about__pillars">
            {aboutPillars.map((p) => (
              <Card key={p.title} className="pillar" variant={`tint-${p.accent}`}>
                <span className="chip-icon" data-accent={p.accent}>
                  <p.icon strokeWidth={2} />
                </span>
                <div>
                  <h3 className="pillar__title">{p.title}</h3>
                  <p className="pillar__text">{p.text}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="about__statement" variant="dark" tilt={1}>
            <Photo src="/images/about-team.webp" alt="The LeadBricks team collaborating on client work" overlay="brand" position="50% 40%" />
            <div className="statement__lines">
              {statement.map((line, i) => (
                <motion.p
                  key={line}
                  className="statement__line"
                  initial={{ opacity: 0.18 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 1, margin: '0px 0px -12% 0px' }}
                  transition={{ duration: 0.6, delay: i * 0.18, ease }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="statement__end">
              <div className="statement__stack" aria-hidden="true">
                {['cyan', 'pink', 'purple', 'yellow'].map((c, i) => (
                  <motion.i
                    key={c}
                    className={`brick brick--${c}`}
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.5 + i * 0.16 }}
                  />
                ))}
              </div>
              <p className="statement__final">
                Another brick in your <span>growth system.</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
