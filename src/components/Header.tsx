import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'

const navLinks = [
  { label: 'Accueil', path: '/', icon: 'Home' },
  { label: 'Services', path: '/services', icon: 'Briefcase' },
  { label: 'Réalisations', path: '/realisations', icon: 'Image' },
  { label: 'Actualités', path: '/actualites', icon: 'Clock' },
  { label: 'À propos', path: '/about', icon: 'Info' },
  { label: 'Contact', path: '/contact', icon: 'Mail' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => setMobileOpen(false), [])

  useEffect(() => { close() }, [pathname, close])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { type: 'spring' as const, stiffness: 300, damping: 30 } },
  }

  const linkVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.05 * i, duration: 0.3 },
    }),
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 20px',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          background: scrolled ? '#111111' : 'transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/logo/logo.png" alt="Onesime BTP" style={{ height: 38, width: 'auto' }} />
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {navLinks.map(link => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
              return (
                <Link
                  key={link.path} to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#F4C400' : 'rgba(255,255,255,0.8)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '.82rem', letterSpacing: '0.02em',
                    position: 'relative', transition: 'color 0.3s',
                  }}
                >
                  {link.label}
                  {isActive && <span style={{ position: 'absolute', left: 0, bottom: -4, right: 0, height: 2, background: '#F4C400', borderRadius: 1 }} />}
                </Link>
              )
            })}
            <Link to="/contact" style={{
              padding: '9px 20px', background: '#E30613', color: 'white', borderRadius: 12,
              fontWeight: 600, fontSize: '.82rem', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <Icon name="Phone" size={14} />
              Devis
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="hamburger-btn"
            style={{
              display: 'none', cursor: 'pointer', background: 'none', border: 'none', padding: 0,
              zIndex: 1100, position: 'relative', width: 28, height: 28,
            }}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.25 }}
              onClick={close}
              style={{
                position: 'fixed', inset: 0, zIndex: 1001,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 1002,
                width: 'min(300px, 80vw)',
                background: '#111111',
                display: 'flex', flexDirection: 'column',
                padding: '80px 28px 28px',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Logo in drawer */}
              <div style={{ marginBottom: 36, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <img src="/images/logo/logo.png" alt="Onesime BTP" style={{ height: 32, width: 'auto' }} />
              </div>

              {/* Nav links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                  return (
                    <motion.div
                      key={link.path}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.path}
                        onClick={close}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 14,
                          padding: '14px 16px',
                          borderRadius: 12,
                          textDecoration: 'none',
                          color: isActive ? '#F4C400' : 'rgba(255,255,255,0.7)',
                          fontWeight: isActive ? 700 : 500,
                          fontSize: '.95rem',
                          background: isActive ? 'rgba(244,196,0,0.08)' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      >
                        <Icon name={link.icon} size={20} color={isActive ? '#F4C400' : 'rgba(255,255,255,0.5)'} />
                        {link.label}
                        {isActive && (
                          <span style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: '#F4C400' }} />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                onClick={close}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '14px', borderRadius: 12,
                  background: '#E30613', color: 'white', fontWeight: 600,
                  textDecoration: 'none', fontSize: '.9rem', marginTop: 'auto',
                }}
              >
                <Icon name="Phone" size={16} />
                Demander un devis
              </Link>

              {/* Social */}
              <div style={{ display: 'flex', gap: 12, marginTop: 20, justifyContent: 'center' }}>
                <a href="https://www.facebook.com/share/1EtgM2wzhy/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '.75rem' }}>Facebook</a>
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
                <a href={`https://wa.me/2250709450970`} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '.75rem' }}>WhatsApp</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
