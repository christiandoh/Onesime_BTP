import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../components/Icon'
import { asset } from '../utils/asset'
import { ONESIME } from '../data/content'
import { slideUp, staggerContainer, itemSlideUp } from '../data/animations'

const ORBIT_IMAGES = [
  { src: '/images/domotique/domotique.jpg', label: 'Domotique', serviceId: 'domotique' },
  { src: '/images/services/tce_btp.jpg', label: 'TCE', serviceId: 'tce' },
  { src: '/images/chantier/chantier_bingerville.jpg', label: 'Gros œuvre', serviceId: 'gros-oeuvre' },
  { src: '/images/eclairage/eclairage.jpg', label: 'Éclairage', serviceId: 'eclairage' },
  { src: '/images/electricite/electricite.jpg', label: 'Électricité', serviceId: 'electricite' },
  { src: '/images/transport_machine_BTP/camion_beine.jpg', label: 'Camions', serviceId: 'camions' },
  { src: '/images/services/gravier.jpg', label: 'Gravier', serviceId: 'gravier' },
  { src: '/images/services/sable.jpg', label: 'Sable', serviceId: 'sable' },
  { src: '/images/services/laterite.jpg', label: 'Latérite', serviceId: 'laterite' },
  { src: '/images/services/maison_fini.jpeg', label: 'Construction', serviceId: 'construction' },
  { src: '/images/services/genicivil.jpg', label: 'Génie civil', serviceId: 'genie-civil' },
]

const TWO_PI = 2 * Math.PI
const BASE_SPEED = 0.12
const FRICTION = 0.92
const MIN_SPEED = 0.05

function getRadius(): number {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1024
  if (w <= 480) return 160
  if (w <= 768) return 220
  if (w <= 1024) return 300
  return 380
}

function useDraggableOrbit() {
  const angleRef = useRef(0)
  const velocityRef = useRef(0)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const raf = useRef(0)
  const [angle, setAngle] = useState(0)

  const tick = useCallback(() => {
    if (!isDragging.current) {
      const dt = Math.min((performance.now() - lastTime.current) / 1000, 0.05)
      if (Math.abs(velocityRef.current) > MIN_SPEED) {
        velocityRef.current *= FRICTION
        angleRef.current = (angleRef.current + velocityRef.current * dt + TWO_PI) % TWO_PI
        setAngle(angleRef.current)
      } else if (Math.abs(velocityRef.current) > 0.001) {
        velocityRef.current = 0
      } else {
        angleRef.current = (angleRef.current + BASE_SPEED * dt + TWO_PI) % TWO_PI
        setAngle(angleRef.current)
      }
    }
    lastTime.current = performance.now()
    raf.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [tick])

  const onPointerDown = useCallback((clientX: number) => {
    isDragging.current = true
    lastX.current = clientX
  }, [])

  const onPointerMove = useCallback((clientX: number) => {
    if (!isDragging.current) return
    const dx = clientX - lastX.current
    lastX.current = clientX
    const radius = getRadius() || 300
    const deltaAngle = (dx / radius) * 0.5
    velocityRef.current = deltaAngle * 8
    angleRef.current = (angleRef.current + deltaAngle + TWO_PI) % TWO_PI
    setAngle(angleRef.current)
  }, [])

  const onPointerUp = useCallback(() => {
    isDragging.current = false
    lastTime.current = performance.now()
  }, [])

  return { angle, onPointerDown, onPointerMove, onPointerUp, isDragging }
}

export default function Home() {
  const [radius, setRadius] = useState(380)
  const { angle, onPointerDown, onPointerMove, onPointerUp } = useDraggableOrbit()
  const [selectedService, setSelectedService] = useState<typeof ONESIME.services[0] | null>(null)
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setRadius(getRadius())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    onPointerDown(e.clientX)
    orbitRef.current?.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    onPointerMove(e.clientX)
  }

  const handlePointerUp = () => {
    onPointerUp()
  }

  const handleItemClick = (serviceId: string) => {
    const service = ONESIME.services.find(s => s.id === serviceId)
    if (service) setSelectedService(service)
  }

  return (
    <>
      <section style={{
        height: '100dvh',
        background: `linear-gradient(135deg, rgba(0,0,0,0.82), rgba(0,0,0,0.65)), url(${asset('/images/image_header.jpg')})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', width: '60vw', height: '60vw',
          borderRadius: '50%', zIndex: 1,
          background: 'radial-gradient(circle, rgba(227,6,19,.1) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        }} />

        {/* Orbital ring - draggable */}
        <div
          ref={orbitRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            position: 'absolute', inset: 0, touchAction: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            perspective: '1400px', transformStyle: 'preserve-3d',
            cursor: 'grab', zIndex: 2,
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-24deg)',
          }}>
            {ORBIT_IMAGES.map((item, i) => {
              const theta = i * (TWO_PI / ORBIT_IMAGES.length) + angle
              const x = radius * Math.cos(theta)
              const z = radius * Math.sin(theta)
              const depthNorm = (z + radius) / (2 * radius)
              const scale = 0.6 + 0.4 * depthNorm
              const opacity = 0.35 + 0.65 * depthNorm
              const blur = (1 - depthNorm) * 4

              return (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: scale * 1.12, zIndex: 100 }}
                  onClick={() => handleItemClick(item.serviceId)}
                  style={{
                    position: 'absolute', cursor: 'pointer',
                    width: 'clamp(64px, 12vw, 110px)',
                    height: 'clamp(64px, 12vw, 110px)',
                    transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
                    opacity, filter: `blur(${blur}px)`,
                    willChange: 'transform',
                  }}
                >
                  <img
                    src={asset(item.src)}
                    alt={item.label}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      borderRadius: 16, boxShadow: `0 ${4 + 8 * depthNorm}px ${12 + 20 * depthNorm}px rgba(0,0,0,${0.25 + 0.25 * depthNorm})`,
                      border: `2px solid rgba(255,255,255,${0.08 + 0.12 * depthNorm})`,
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Center content */}
        <div style={{
          position: 'relative', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        }}>
          <motion.img
            src={asset('/images/logo/logo.png')} alt="Onesime BTP"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ width: 'clamp(120px, 22vw, 200px)', height: 'auto', filter: 'drop-shadow(0 8px 32px rgba(227,6,19,0.3))' }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 300, color: 'rgba(255,255,255,0.7)', textAlign: 'center', margin: 0, maxWidth: 500, letterSpacing: '0.02em' }}
          >
            {ONESIME.slogan}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
            className="hero-buttons-mobile"
          >
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 14, background: '#E30613', color: 'white', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>
              <Icon name="Phone" size={16} /> Devis gratuit
            </Link>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', color: 'white', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              <Icon name="Briefcase" size={16} /> Nos services
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          style={{ position: 'absolute', bottom: 40, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', padding: '0 24px' }}
        >
          {ONESIME.heroStats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F4C400' }}>{s.value}</div>
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: 600, width: '100%', maxHeight: '85vh', overflow: 'auto',
                background: 'white', borderRadius: 24, padding: 32,
                boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#E30613', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={selectedService.icon} size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#111' }}>{selectedService.title}</h2>
                </div>
                <button onClick={() => setSelectedService(null)} style={{
                  width: 34, height: 34, borderRadius: '50%', background: '#f0f0f0',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>

              {/* Image */}
              <div style={{ height: 220, borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
                <img src={asset(selectedService.image)} alt={selectedService.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <p style={{ fontSize: '.88rem', color: '#374151', lineHeight: 1.7, margin: '0 0 24px' }}>{selectedService.desc}</p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href={`https://wa.me/${ONESIME.contact.whatsapp}?text=${encodeURIComponent('Bonjour, je suis int\u00e9ress\u00e9 par le service : ' + selectedService.title)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 12, background: '#25D366', color: 'white', fontWeight: 600, fontSize: '.85rem', textDecoration: 'none' }}>
                  <Icon name="MessageCircle" size={17} /> WhatsApp
                </a>
                <Link to="/contact" onClick={() => setSelectedService(null)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 12, background: '#E30613', color: 'white', fontWeight: 600, fontSize: '.85rem', textDecoration: 'none' }}>
                  <Icon name="FileText" size={17} /> Devis gratuit
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ display: 'flex', justifyContent: 'center', padding: '24px 0', background: 'transparent', marginTop: -60, position: 'relative', zIndex: 5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '.7rem', fontWeight: 500, textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <div style={{ marginBottom: 4 }}>Scrollez</div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ margin: '0 auto' }}><path d="M6 9l6 6 6-6" /></svg>
        </motion.div>
      </motion.div>

      {/* Services section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: '#F4C400', color: '#111', padding: '4px 12px', borderRadius: 99, fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12 }}>Nos Services</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800 }}>Ce que nous <span style={{ color: '#E30613' }}>proposons</span></h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {ONESIME.services.slice(0, 6).map(s => (
              <motion.div key={s.id} variants={itemSlideUp}
                style={{ background: 'white', borderRadius: 16, padding: '28px 24px', border: '1px solid #eee', cursor: 'pointer' }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)', borderColor: '#E30613' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(227,6,19,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={s.icon} size={22} color="#E30613" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: '.84rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E30613', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>
              Voir tous nos services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 0', background: '#F9F9F9' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', background: '#F4C400', color: '#111', padding: '4px 12px', borderRadius: 99, fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12 }}>Pourquoi nous</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800 }}>Pourquoi choisir <span style={{ color: '#E30613' }}>Onesime BTP</span> ?</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="home-features-grid">
            {ONESIME.features.map(f => (
              <motion.div key={f.title} variants={itemSlideUp} style={{ background: 'white', borderRadius: 16, padding: '32px 24px', textAlign: 'center', border: '1px solid #eee' }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#E30613', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon name={f.icon} size={24} color="white" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '.84rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Gallery */}
      <section style={{ padding: '60px 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ display: 'inline-block', background: '#F4C400', color: '#111', padding: '4px 12px', borderRadius: 99, fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12 }}>Médias</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800 }}>Onesime BTP en <span style={{ color: '#E30613' }}>vidéos</span></h2>
          </motion.div>
          <VideoGallery />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 0', background: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.75)), url(${asset('/images/image_header.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(227,6,19,.1) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800, color: 'white', marginBottom: 12 }}>Prêt à démarrer votre <span style={{ color: '#E30613' }}>projet</span> ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.9rem', marginBottom: 28, lineHeight: 1.6 }}>Contactez-nous dès maintenant pour un devis gratuit. Nous vous répondons sous 2 heures.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 14, background: '#E30613', color: 'white', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>
                <Icon name="MessageCircle" size={18} /> Demander un devis
              </Link>
              <a href={`tel:${ONESIME.contact.phone1}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 14, background: '#F4C400', color: '#111', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>
                <Icon name="Phone" size={18} /> Appeler
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .home-features-grid { grid-template-columns: 1fr !important; }
          .hero-buttons-mobile { margin-top: 60px !important; }
          .videos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function PinterestEmbed({ pinId }: { pinId: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existing = document.querySelector('script[src="//assets.pinterest.com/js/pinit.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = '//assets.pinterest.com/js/pinit.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    } else if (typeof (window as any).PinUtils !== 'undefined') {
      (window as any).PinUtils.build()
    }
  }, [pinId])

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center', padding: 8 }}>
      <a data-pin-do="embedPin" data-pin-width="medium" href={`https://www.pinterest.com/pin/${pinId}/`}></a>
    </div>
  )
}

function VideoGallery() {
  const [active, setActive] = useState(0)

  const videos = [
    {
      id: 'facebook',
      label: 'Onesime BTP',
      desc: 'Présentation de nos services BTP',
      thumbnail: '/images/image_header.jpg',
      type: 'facebook' as const,
    },
    {
      id: 'pinterest-fire',
      label: 'Sécurité Incendie',
      desc: 'Protection des tableaux électriques',
      thumbnail: '/images/securite_incendi/inxtincteur.jpg',
      type: 'pinterest' as const,
      pinId: '1081145454316662508',
    },
    {
      id: 'pinterest-domotique',
      label: 'Domotique Intelligente',
      desc: 'Solutions smart home connectées',
      thumbnail: '/images/domotique/domotique.jpg',
      type: 'pinterest' as const,
      pinId: '156359418309028491',
    },
  ]

  const activeVideo = videos[active]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Main player */}
      <div style={{
        background: '#111', borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0,0,0,0.15)', marginBottom: 20,
        minHeight: activeVideo.type === 'pinterest' ? 400 : 0,
      }}>
        {activeVideo.type === 'facebook' ? (
          <div style={{ aspectRatio: '16/9', position: 'relative' }}>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100082741026610/videos/846885286297958&show_text=false&width=800"
              width="100%" height="100%"
              style={{ border: 'none', position: 'absolute', inset: 0 }}
              scrolling="no" frameBorder="0" allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Onesime BTP Video"
            />
          </div>
        ) : (
          <PinterestEmbed pinId={activeVideo.pinId} />
        )}
      </div>

      {/* Thumbnails */}
      <div style={{
        display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4,
        scrollbarWidth: 'none',
      }}>
        {videos.map((v, i) => (
          <motion.div
            key={v.id}
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: '0 0 auto', width: 200, cursor: 'pointer', borderRadius: 14,
              overflow: 'hidden', position: 'relative',
              border: i === active ? '2px solid #E30613' : '2px solid transparent',
              transition: 'border 0.3s',
            }}
          >
            <div style={{ height: 110, overflow: 'hidden' }}>
              <img src={asset(v.thumbnail)} alt={v.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(transparent 30%, rgba(0,0,0,0.8))',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: '8px 10px',
            }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(227,6,19,0.9)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="6,3 20,12 6,21" /></svg>
              </div>
              <p style={{ color: 'white', fontSize: '.78rem', fontWeight: 600, margin: 0 }}>{v.label}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.65rem', margin: 0 }}>{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
