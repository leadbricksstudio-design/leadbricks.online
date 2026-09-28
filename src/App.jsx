import { lazy, Suspense, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroBento from './components/HeroBento'
import TrustStrip from './components/TrustStrip'

// Below-the-fold sections are code-split and loaded right after first paint
const AboutBento = lazy(() => import('./components/AboutBento'))
const Formula = lazy(() => import('./components/Formula'))
const ServicesBento = lazy(() => import('./components/ServicesBento'))
const PhilosophyGrid = lazy(() => import('./components/PhilosophyGrid'))
const Pricing = lazy(() => import('./components/Pricing'))
const Process = lazy(() => import('./components/Process'))
const WhyLeadBricks = lazy(() => import('./components/WhyLeadBricks'))
const CTA = lazy(() => import('./components/CTA'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))
const BackToTop = lazy(() => import('./components/BackToTop'))

/** Once lazy sections exist, honour a deep link like /#pricing */
function HashScroll() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView())
  }, [])
  return null
}

function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--purple" />
      <div className="ambient__orb ambient__orb--cyan" />
      <div className="ambient__orb ambient__orb--pink" />
      <div className="ambient__orb ambient__orb--yellow" />
      <div className="ambient__grid" />
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Ambient />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <HeroBento />
        <TrustStrip />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <AboutBento />
          <Formula />
          <ServicesBento />
          <PhilosophyGrid />
          <Pricing />
          <Process />
          <WhyLeadBricks />
          <CTA />
          <FAQ />
          <Contact />
          <HashScroll />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </Suspense>
    </MotionConfig>
  )
}
