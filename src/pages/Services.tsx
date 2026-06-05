import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { asset } from '../utils/asset'
import { ONESIME } from '../data/content'
import { slideUp, staggerContainer, itemSlideUp } from '../data/animations'

function truncate(text: string, max = 120): string {
  if (text.length <= max) return text
  return text.slice(0, max).trimEnd() + '...'
}

export default function Services() {
  const [selected, setSelected] = useState<typeof ONESIME.services[0] | null>(null)

  return (
    <>
      <section style={{
        paddingTop: 140, paddingBottom: 60,
        background: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7)), url(${asset('/images/image_header.jpg')})`,
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
            }}>Nos Services</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              Ce que nous <span style={{ color: '#E30613' }}>proposons</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '12px auto 0', fontSize: '.95rem' }}>
              Une gamme complète de solutions BTP pour vos projets de construction en Côte d'Ivoire.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}
          >
            {ONESIME.services.map(s => (
              <motion.div
                key={s.id}
                variants={itemSlideUp}
                style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #eee', cursor: 'pointer' }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                onClick={() => setSelected(s)}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img
                    src={asset(s.image)}
                    alt={s.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: '#E30613', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: 16,
                  }}>
                    <Icon name={s.icon} size={24} color="white" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: '.88rem', color: '#6B7280', lineHeight: 1.6, marginBottom: 20 }}>{truncate(s.desc)}</p>
                  <span style={{
                    fontSize: '.85rem', fontWeight: 600, color: '#E30613',
                    display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                  }}>
                    En savoir plus <Icon name="ArrowRight" size={16} />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24, cursor: 'zoom-out',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: 700, width: '100%',
                background: 'white', borderRadius: 24, overflow: 'hidden',
                cursor: 'default', boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
              }}
            >
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: 12, right: 12, zIndex: 5,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(0,0,0,0.4)', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                <img src={asset(selected.image)} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.7))' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: '#E30613', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={selected.icon} size={24} color="white" strokeWidth={1.5} />
                  </div>
                  <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>{selected.title}</h2>
                </div>
              </div>

              <div style={{ padding: '28px 32px' }}>
                <p style={{ fontSize: '.95rem', color: '#374151', lineHeight: 1.8, margin: '0 0 24px' }}>{selected.desc}</p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', padding: '16px 20px', background: '#F9F9F9', borderRadius: 14, marginBottom: 24 }}>
                  <Icon name="Clock" size={18} color="#E30613" />
                  <span style={{ fontSize: '.85rem', color: '#6B7280' }}>Livraison rapide sous 24h à Abidjan et environs</span>
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href={`https://wa.me/${ONESIME.contact.whatsapp}?text=${encodeURIComponent('Bonjour, je suis int\u00e9ress\u00e9 par le service : ' + selected.title)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: '#25D366', color: 'white', fontWeight: 600, fontSize: '.88rem', textDecoration: 'none' }}>
                    <Icon name="MessageCircle" size={18} />
                    Contactez-nous
                  </a>
                  <Link to="/contact" onClick={() => setSelected(null)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: '#E30613', color: 'white', fontWeight: 600, fontSize: '.88rem', textDecoration: 'none' }}>
                    <Icon name="FileText" size={18} />
                    Demander un devis
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section style={{ padding: '80px 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>Nos Matériaux</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800 }}>
              Matériaux de <span style={{ color: '#E30613' }}>construction</span>
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
            className="materials-grid"
          >
            {ONESIME.materials.map(m => (
              <motion.div
                key={m.id}
                variants={itemSlideUp}
                style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #eee' }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={asset(m.image)} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ fontSize: '.87rem', color: '#6B7280', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #fafafa 0%, #fff 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{
              display: 'inline-block', background: '#F4C400', color: '#111',
              padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
              fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>Comment ça marche</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800 }}>
              Commandez en <span style={{ color: '#E30613' }}>4 étapes</span>
            </h2>
            <p style={{ color: '#6B7280', marginTop: 12, fontSize: '.95rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
              Du contact à la livraison, un processus simple et rapide
            </p>
          </motion.div>

          <div style={{ position: 'relative', padding: '20px 0' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute', top: 80, left: '12%', right: '12%', height: 3,
              background: 'linear-gradient(90deg, #E30613, #F4C400, #E30613)',
              zIndex: 0, borderRadius: 2,
            }} className="process-line" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
                position: 'relative',
              }}
              className="process-steps"
            >
              {ONESIME.processSteps.map((s, i) => {
                const icons = ['Phone', 'FileText', 'CheckCircle', 'Truck']
                return (
                  <motion.div
                    key={s.num}
                    variants={itemSlideUp}
                    style={{
                      textAlign: 'center', position: 'relative', zIndex: 1,
                      background: 'white', borderRadius: 20, padding: '32px 20px 28px',
                      border: '1px solid #eee',
                      transition: 'all 0.3s',
                    }}
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)', borderColor: 'transparent' }}
                  >
                    {/* Step number badge */}
                    <div style={{
                      position: 'absolute', top: -12, right: 16,
                      background: '#111', color: '#F4C400',
                      fontSize: '.7rem', fontWeight: 700, padding: '2px 10px',
                      borderRadius: 99,
                    }}>
                      ÉTAPE {s.num}
                    </div>

                    {/* Icon circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: i * 0.1 }}
                      style={{
                        width: 72, height: 72, borderRadius: '50%',
                        background: `linear-gradient(135deg, ${i % 2 === 0 ? '#E30613' : '#111'}, ${i % 2 === 0 ? '#B8000D' : '#333'})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: `0 6px 20px rgba(${i % 2 === 0 ? '227,6,19' : '0,0,0'},.25)`,
                      }}
                    >
                      <Icon name={icons[i]} size={28} color="white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8, color: '#111' }}>{s.title}</h4>
                    <p style={{ fontSize: '.84rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .materials-grid { grid-template-columns: 1fr !important; }
          .process-steps { grid-template-columns: 1fr !important; gap: 32px !important; }
          .process-line { display: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .materials-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}
