import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ZoomableImage from '../components/ZoomableImage'
import { ONESIME } from '../data/content'
import { slideUp, slideLeft, slideRight, staggerContainer, itemSlideUp } from '../data/animations'

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
        last.current = now
        ref.current = (ref.current + 0.15 * 0.016) % (2 * Math.PI)
        setAngle(ref.current)
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  return angle
}

export default function About() {
  return (
    <>
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7)), url(/images/image_header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(227,6,19,.08) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>À propos</span>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800,
              color: 'white', lineHeight: 1.2,
            }}>
              Qui sommes-<span style={{ color: '#E30613' }}>nous</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <span style={{
                display: 'inline-block', background: '#F4C400', color: '#111',
                padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
                fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
                marginBottom: 14,
              }}>Notre Histoire</span>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2,
                marginBottom: 20,
              }}>
                Plus de <span style={{ color: '#E30613' }}>8 ans</span> d'expertise en BTP
              </h2>
              <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 16, fontSize: '.95rem' }}>
                Depuis plus de 8 ans, Onesime BTP accompagne les particuliers, entreprises et administrations dans leurs projets de construction à Abidjan et dans toute la Côte d'Ivoire.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 16, fontSize: '.95rem' }}>
                Notre mission est de fournir des matériaux de construction de qualité supérieure — sable, gravier, latérite — avec un service de livraison rapide et fiable.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 24, fontSize: '.95rem' }}>
                Nous mettons à votre disposition une flotte de camions benne pour assurer vos approvisionnements dans les meilleurs délais.
              </p>
              <motion.div whileHover={{ x: 5 }} style={{ display: 'inline-block' }}>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 14,
                  background: '#E30613', color: 'white', fontWeight: 600, fontSize: '.95rem',
                  textDecoration: 'none',
                }}>
                  <Icon name="Phone" size={18} />
                  Nous contacter
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <ZoomableImage src="/images/a propos.jpg" alt="Onesime BTP" style={{
                  width: '100%', borderRadius: 24, height: 420, objectFit: 'cover',
                }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '80px 0', background: '#111111', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -200, right: -200, width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(227,6,19,.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="why-grid">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <span style={{
                display: 'inline-block', background: '#F4C400', color: '#111',
                padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
                fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
                marginBottom: 14,
              }}>Pourquoi nous</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, color: 'white' }}>
                Pourquoi choisir <span style={{ color: '#E30613' }}>Onesime BTP</span> ?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginTop: 16, fontSize: '.95rem' }}>
                Depuis plus de 8 ans, nous accompagnons les particuliers, entreprises et administrations dans leurs projets de construction avec sérieux et professionnalisme.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 40 }}>
                {ONESIME.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                      style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: '#E30613', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', flexShrink: 0,
                      }}
                    >
                      <Icon name={f.icon} size={20} color="white" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h4 style={{ fontSize: '.95rem', fontWeight: 700, color: 'white', marginBottom: 4 }}>{f.title}</h4>
                      <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
              className="why-right"
            >
              {ONESIME.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={itemSlideUp}
                  style={{
                    background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)',
                    borderRadius: 20, padding: '28px 24px', textAlign: 'center',
                    gridColumn: i === 0 ? 'span 2' : undefined,
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(227,6,19,.1)', borderColor: 'rgba(227,6,19,.3)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: i * 0.1 }}
                    style={{ fontSize: '2.4rem', fontWeight: 900, color: '#F4C400' }}
                  >{s.value}</motion.div>
                  <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients - Orbital */}
      <section style={{ padding: '60px 0', background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(227,6,19,.06) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>Ils nous font confiance</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: 'white' }}>
              Nos <span style={{ color: '#E30613' }}>partenaires</span>
            </h2>
          </motion.div>

          <OrbitalClients />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, marginBottom: 16 }}>
              Prêt à démarrer votre <span style={{ color: '#E30613' }}>projet</span> ?
            </h2>
            <p style={{ color: '#6B7280', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 32 }}>
              Contactez-nous dès maintenant pour un devis gratuit. Nous vous répondons sous 2 heures.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 14,
                  background: '#E30613', color: 'white', fontWeight: 600,
                  textDecoration: 'none',
                }}>
                  <Icon name="MessageCircle" size={18} />
                  Demander un devis
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href={`tel:${ONESIME.contact.phone1}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 14,
                  background: '#F4C400', color: '#111', fontWeight: 600,
                  textDecoration: 'none',
                }}>
                  <Icon name="Phone" size={18} />
                  Appeler maintenant
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-right { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}

function OrbitalClients() {
  const [radius, setRadius] = useState(200)
  const angle = useRotation()

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w <= 480) setRadius(130)
      else if (w <= 768) setRadius(160)
      else if (w <= 1024) setRadius(180)
      else setRadius(200)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const twoPi = 2 * Math.PI
  const logos = ONESIME.clients

  return (
    <div style={{
      position: 'relative',
      height: 400,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Orbital ring */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-20deg)',
        }}>
          {logos.map((c, i) => {
            const theta = i * (twoPi / logos.length) + angle
            const x = radius * Math.cos(theta)
            const z = radius * Math.sin(theta)
            const depthNorm = (z + radius) / (2 * radius)
            const scale = 0.5 + 0.5 * depthNorm
            const opacity = 0.2 + 0.8 * depthNorm

            return (
              <div
                key={c.name}
                aria-hidden
                style={{
                  position: 'absolute',
                  width: 'clamp(70px, 12vw, 110px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
                  opacity,
                  willChange: 'transform',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '8px 12px',
                }}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{
                    maxWidth: '100%', maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'brightness(0.9) contrast(0.9)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Center */}
      <div style={{
        width: 120, height: 120, borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        border: '2px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 2,
        backdropFilter: 'blur(8px)',
        padding: 16,
      }}>
        <img src="/images/logo/logo.png" alt="Onesime BTP" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  )
}
