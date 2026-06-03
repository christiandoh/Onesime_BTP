import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ZoomableImage from '../components/ZoomableImage'
import { asset } from '../utils/asset'
import { ONESIME } from '../data/content'
import { slideUp, staggerContainer, itemSlideUp } from '../data/animations'

const categories = ['Tous', ...new Set(ONESIME.projects.map(p => p.category))]

export default function Realisations() {
  const [filter, setFilter] = useState('Tous')

  const filtered = filter === 'Tous' ? ONESIME.projects : ONESIME.projects.filter(p => p.category === filter)

  return (
    <>
      <section style={{
        paddingTop: 140, paddingBottom: 60,
        background: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7)), url(${asset('/images/image_header.jpg')})`,
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
            }}>Réalisations</span>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800,
              color: 'white', lineHeight: 1.2,
            }}>
              Nos <span style={{ color: '#E30613' }}>projets</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '8px 20px', borderRadius: 99, border: 'none',
                  background: filter === cat ? '#E30613' : '#f0f0f0',
                  color: filter === cat ? 'white' : '#374151',
                  fontWeight: 600, fontSize: '.85rem', cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map(project => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    borderRadius: 20, overflow: 'hidden',
                    border: '1px solid #eee',
                    position: 'relative',
                    cursor: 'pointer',
                    height: 300,
                  }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                >
                  <motion.img
                    src={asset(project.image)}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.85))',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: 24,
                    }}
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      style={{
                        background: '#E30613', color: 'white', padding: '3px 10px',
                        borderRadius: 99, fontSize: '.72rem', fontWeight: 600,
                        alignSelf: 'flex-start', marginBottom: 8,
                      }}
                    >
                      {project.category}
                    </motion.span>
                    <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>{project.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.78rem' }}>{project.location}</p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 0', background: '#111111' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>Témoignages</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: 'white' }}>
              Ce que disent nos <span style={{ color: '#E30613' }}>clients</span>
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="testi-grid"
          >
            {ONESIME.testimonials.map(t => (
              <motion.div
                key={t.name}
                variants={itemSlideUp}
                style={{
                  background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 20, padding: 32,
                }}
                whileHover={{ y: -6, background: 'rgba(227,6,19,.08)', borderColor: 'rgba(227,6,19,.2)' }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  style={{ display: 'flex', gap: 2, marginBottom: 16 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F4C400" stroke="#F4C400" strokeWidth="2">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </motion.div>
                <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <motion.img
                    src={asset(t.image)}
                    alt={t.name}
                    whileHover={{ scale: 1.1, borderColor: '#F4C400' }}
                    style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '2px solid transparent', transition: 'border-color 0.3s' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: '.88rem' }}>{t.name}</div>
                    <div style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '80px 0', background: '#F9F9F9' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>Galerie</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800 }}>
              Notre <span style={{ color: '#E30613' }}>galerie</span>
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}
          >
            {ONESIME.gallery.map(g => (
              <motion.div
                key={g.src}
                variants={itemSlideUp}
                style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 220, cursor: 'pointer' }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.12)' }}
              >
                <ZoomableImage src={g.src} alt={g.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                  padding: '20px 16px 12px',
                }}>
                  <span style={{
                    background: '#E30613', color: 'white', padding: '2px 8px',
                    borderRadius: 99, fontSize: '.65rem', fontWeight: 600,
                    display: 'inline-block', marginBottom: 4,
                  }}>{g.category}</span>
                  <p style={{ color: 'white', fontSize: '.82rem', fontWeight: 600, margin: 0 }}>{g.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
