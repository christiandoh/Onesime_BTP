import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import Chatbot from './Chatbot'
import { ONESIME } from '../data/content'
import { waUrl, asset } from '../utils/asset'

export default function Layout() {
  const { pathname } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (pathname !== prevPath.current) {
      window.scrollTo(0, 0)
      prevPath.current = pathname
    }
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <Chatbot />

      {/* WhatsApp Float */}
      <motion.a
        href={waUrl(ONESIME.contact.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        whileHover={{ scale: 1.08 }}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 999,
          width: 56, height: 56, borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none', overflow: 'hidden',
          padding: 10,
          boxShadow: '0 6px 20px rgba(37,211,102,0.4)',
        }}
        title="WhatsApp"
      >
        <img
          src={asset('/images/logo/WHATSSAP_logo.jpg')}
          alt="WhatsApp"
          style={{
            width: '100%', height: '100%', objectFit: 'contain',
            mixBlendMode: 'multiply',
            filter: 'brightness(10)',
          }}
        />
      </motion.a>
    </>
  )
}
