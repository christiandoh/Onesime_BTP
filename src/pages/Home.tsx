import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import { asset } from '../utils/asset'
import { ONESIME } from '../data/content'
import { slideUp, staggerContainer, itemSlideUp } from '../data/animations'

const ORBIT_IMAGES = [
  { src: '/images/services/gravier.jpg', label: 'Gravier' },
  { src: '/images/services/sable.jpg', label: 'Sable' },
  { src: '/images/services/laterite.jpg', label: 'Latérite' },
  { src: '/images/services/service-8.jpeg', label: 'Camions' },
  { src: '/images/services/batiment.jpeg', label: 'Gros œuvre' },
  { src: '/images/services/maison_fini.jpeg', label: 'Construction' },
  { src: '/images/electricite/electrique-1.jpeg', label: 'Électricité' },
  { src: '/images/eclairage/eclairage-1.jpeg', label: 'Éclairage' },
  { src: '/images/domotique/domotique-1.jpeg', label: 'Domotique' },
  { src: '/images/projects/project-25.jpeg', label: 'Génie civil' },
  { src: '/images/projects/project-26.jpeg', label: 'TCE' },
]

function getRadius(): number {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1024
  if (w <= 480) return 160
  if (w <= 768) return 220
  if (w <= 1024) return 300
  return 380
}

function useRotation() {
  const [angle, setAngle] = useState(0)
  const ref = useRef(0)
  const last = useRef(performance.now())

  useEffect(() => {
    let id: number
    let frameCount = 0
    const tick = (now: number) => {
      frameCount++
      if (frameCount % 2 === 0) {
        const dt = (now - last.current) / 1000
        last.current = now
        ref.current = (ref.current + 0.12 * dt) % (2 * Math.PI)
        setAngle(ref.current)
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  return angle
}

export default function Home() {
  const [radius, setRadius] = useState(380)
  const angle = useRotation()

  useEffect(() => {
    const update = () => setRadius(getRadius())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const twoPi = 2 * Math.PI

  return (
    <>
      <section style={{
        height: '100dvh',
        background: `linear-gradient(135deg, rgba(0,0,0,0.82), rgba(0,0,0,0.65)), url(${asset('/images/image_header.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', width: '60vw', height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(227,6,19,.1) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          zIndex: 1,
        }} />

        {/* Orbital ring container */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          perspective: '1400px',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-24deg)',
          }}>
            {ORBIT_IMAGES.map((item, i) => {
              const theta = i * (twoPi / ORBIT_IMAGES.length) + angle
              const x = radius * Math.cos(theta)
              const z = radius * Math.sin(theta)
              const depthNorm = (z + radius) / (2 * radius)
              const scale = 0.6 + 0.4 * depthNorm
              const opacity = 0.35 + 0.65 * depthNorm
              const blur = (1 - depthNorm) * 4

              return (
                <div
                  key={item.label}
                  aria-hidden
                  style={{
                    position: 'absolute',
                    width: 'clamp(64px, 12vw, 110px)',
                    height: 'clamp(64px, 12vw, 110px)',
                    transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                    willChange: 'transform',
                    pointerEvents: 'none',
                  }}
                >
                  <img
                    src={asset(item.src)}
                    alt={item.label}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                      border: '2px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Center content */}
        <div style={{
          position: 'relative', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 16,
        }}>
          <motion.img
            src={asset('/images/logo/logo.png')}
            alt="Onesime BTP"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              width: 'clamp(120px, 22vw, 200px)',
              height: 'auto',
              filter: 'drop-shadow(0 8px 32px rgba(227,6,19,0.3))',
            }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 300, color: 'rgba(255,255,255,0.7)',
              textAlign: 'center', margin: 0, maxWidth: 500,
              letterSpacing: '0.02em',
            }}
          >
            {ONESIME.slogan}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
            className="hero-buttons-mobile"
          >
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 14,
              background: '#E30613', color: 'white', fontWeight: 600,
              fontSize: '.9rem', textDecoration: 'none',
              transition: 'all 0.3s',
            }}>
              <Icon name="Phone" size={16} />
              Devis gratuit
            </Link>
            <Link to="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 14,
              background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
              color: 'white', fontWeight: 600, fontSize: '.9rem',
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s',
            }}>
              <Icon name="Briefcase" size={16} />
              Nos services
            </Link>
          </motion.div>
        </div>

        {/* Bottom decorative stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            position: 'absolute', bottom: 40, left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: 48,
            flexWrap: 'wrap', padding: '0 24px',
          }}
        >
          {ONESIME.heroStats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F4C400' }}>{s.value}</div>
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          display: 'flex', justifyContent: 'center', padding: '24px 0',
          background: 'transparent', marginTop: -60, position: 'relative', zIndex: 5,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '.7rem', fontWeight: 500, textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          <div style={{ marginBottom: 4 }}>Scrollez</div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ margin: '0 auto' }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Services */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '4px 12px', borderRadius: 99, fontSize: '.7rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 12,
            }}>Nos Services</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800 }}>
              Ce que nous <span style={{ color: '#E30613' }}>proposons</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}
          >
            {ONESIME.services.slice(0, 6).map(s => (
              <motion.div
                key={s.id}
                variants={itemSlideUp}
                style={{
                  background: 'white', borderRadius: 16, padding: '28px 24px',
                  border: '1px solid #eee', cursor: 'pointer',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)', borderColor: '#E30613' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(227,6,19,.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <Icon name={s.icon} size={22} color="#E30613" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: '.84rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#E30613', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none',
            }}>
              Voir tous nos services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 0', background: '#F9F9F9' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '4px 12px', borderRadius: 99, fontSize: '.7rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 12,
            }}>Pourquoi nous</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800 }}>
              Pourquoi choisir <span style={{ color: '#E30613' }}>Onesime BTP</span> ?
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="home-features-grid"
          >
            {ONESIME.features.map(f => (
              <motion.div
                key={f.title}
                variants={itemSlideUp}
                style={{
                  background: 'white', borderRadius: 16, padding: '32px 24px',
                  textAlign: 'center', border: '1px solid #eee',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: '#E30613', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 16px',
                }}>
                  <Icon name={f.icon} size={24} color="white" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '.84rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section style={{ padding: '60px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '4px 12px', borderRadius: 99, fontSize: '.7rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 12,
            }}>Notre actualité</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800 }}>
              Découvrez <span style={{ color: '#E30613' }}>Onesime BTP</span> en images
            </h2>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              maxWidth: 800, margin: '0 auto',
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              aspectRatio: '16 / 9',
              position: 'relative',
            }}
          >
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100082741026610/videos/846885286297958&show_text=false&width=800"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: 20, position: 'absolute', inset: 0 }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Onesime BTP Video"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '60px 0',
        background: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.75)), url(${asset('/images/image_header.jpg')})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        textAlign: 'center', position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(227,6,19,.1) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 800, color: 'white', marginBottom: 12 }}>
              Prêt à démarrer votre <span style={{ color: '#E30613' }}>projet</span> ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.9rem', marginBottom: 28, lineHeight: 1.6 }}>
              Contactez-nous dès maintenant pour un devis gratuit. Nous vous répondons sous 2 heures.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px', borderRadius: 14,
                background: '#E30613', color: 'white', fontWeight: 600, fontSize: '.9rem',
                textDecoration: 'none',
              }}>
                <Icon name="MessageCircle" size={18} />
                Demander un devis
              </Link>
              <a href={`tel:${ONESIME.contact.phone1}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px', borderRadius: 14,
                background: '#F4C400', color: '#111', fontWeight: 600, fontSize: '.9rem',
                textDecoration: 'none',
              }}>
                <Icon name="Phone" size={18} />
                Appeler
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
        }
      `}</style>
    </>
  )
}
