import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { whatsappLink, DEFAULT_MESSAGE } from '../utils/contact'
import { WhatsAppIcon } from './ui/BrandIcons'
import { ease } from '../utils/motion'
import './Floating.css'

export default function WhatsAppButton() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    // Hidden at the very top and at the very bottom (so it never covers the footer links)
    const onScroll = () => {
      const y = window.scrollY
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 140
      setShow(y > 500 && !nearEnd)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          className="wa-float"
          href={whatsappLink(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with LeadBricks on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.45, ease }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="wa-float__pulse" aria-hidden="true" />
          <WhatsAppIcon width={26} height={26} />
          <span className="wa-float__label">Chat with us</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
