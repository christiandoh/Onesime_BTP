import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ZoomableImage from '../components/ZoomableImage'
import { ONESIME } from '../data/content'
import { slideUp, staggerContainer, itemSlideUp } from '../data/animations'

export default function Actualites() {
  return (
    <>
      <section style={{
        paddingTop: 140, paddingBottom: 60,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7)), url(/images/image_header.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        textAlign: 'center', position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(227,6,19,.08) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>Actualités</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              Nos <span style={{ color: '#E30613' }}>actualités</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}
          >
            {ONESIME.actualites.map(a => (
              <motion.div
                key={a.id}
                variants={itemSlideUp}
                style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #eee', background: 'white' }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <ZoomableImage src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{
                      background: '#E30613', color: 'white', padding: '3px 10px',
                      borderRadius: 99, fontSize: '.7rem', fontWeight: 600,
                    }}>{a.category}</span>
                    <span style={{ fontSize: '.75rem', color: '#9CA3AF' }}>{a.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{a.title}</h3>
                  <p style={{ fontSize: '.85rem', color: '#6B7280', lineHeight: 1.6, marginBottom: 16 }}>{a.excerpt}</p>
                  <Link to="/contact" style={{
                    fontSize: '.85rem', fontWeight: 600, color: '#E30613',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>
                    En savoir plus <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
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
        }
      `}</style>
    </>
  )
}
