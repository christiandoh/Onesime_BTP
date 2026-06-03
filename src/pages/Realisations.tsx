import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../components/Icon'
import { asset } from '../utils/asset'
import { ONESIME } from '../data/content'
import { slideUp, staggerContainer, itemSlideUp } from '../data/animations'

const categories = [...new Set(ONESIME.projects.map(p => p.category))]

const categoryIcons: Record<string, string> = {
  'Génie Civil': 'Building2',
  'Gros Œuvre': 'HardHat',
  'Électricité': 'Zap',
  'Éclairage': 'Sun',
  'Domotique': 'Monitor',
  'Fourniture': 'Truck',
  'Transport': 'Truck',
}

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const grouped = useMemo(() => {
    const groups: Record<string, typeof ONESIME.projects> = {}
    categories.forEach(cat => {
      groups[cat] = ONESIME.projects.filter(p => p.category === cat)
    })
    return groups
  }, [])

  const filteredCategories = activeCategory
    ? categories.filter(c => c === activeCategory)
    : categories

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
            }}>Réalisations</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              Nos <span style={{ color: '#E30613' }}>projets</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {/* Filter chips */}
          <motion.div
            variants={slideUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'flex', gap: 10, marginBottom: 48, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <button onClick={() => setActiveCategory(null)} style={{
              padding: '8px 20px', borderRadius: 99, border: 'none',
              background: !activeCategory ? '#E30613' : '#f0f0f0',
              color: !activeCategory ? 'white' : '#374151',
              fontWeight: 600, fontSize: '.85rem', cursor: 'pointer',
            }}>Tous</button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '8px 20px', borderRadius: 99, border: 'none',
                background: activeCategory === cat ? '#E30613' : '#f0f0f0',
                color: activeCategory === cat ? 'white' : '#374151',
                fontWeight: 600, fontSize: '.85rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Icon name={categoryIcons[cat] || 'Briefcase'} size={16} color={activeCategory === cat ? 'white' : '#374151'} />
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects grouped by category */}
          {filteredCategories.map(cat => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 48 }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
                paddingBottom: 12, borderBottom: '2px solid #eee',
              }}>
                <Icon name={categoryIcons[cat] || 'Briefcase'} size={22} color="#E30613" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: '#111', letterSpacing: '0.02em' }}>{cat}</h2>
                <span style={{ background: '#E30613', color: 'white', padding: '2px 10px', borderRadius: 99, fontSize: '.72rem', fontWeight: 600 }}>
                  {grouped[cat].length} projet{grouped[cat].length > 1 ? 's' : ''}
                </span>
              </div>

              <motion.div
                variants={staggerContainer} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}
              >
                {grouped[cat].map(project => (
                  <motion.div
                    key={project.title}
                    variants={itemSlideUp}
                    style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #eee', position: 'relative', cursor: 'pointer', height: 260 }}
                    whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
                  >
                    <img src={asset(project.image)} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.85))',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: 20,
                    }}>
                      <h3 style={{ color: 'white', fontSize: '.95rem', fontWeight: 700, marginBottom: 2 }}>{project.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.76rem', margin: 0 }}>{project.location}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
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
            variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="testi-grid"
          >
            {ONESIME.testimonials.map(t => (
              <motion.div
                key={t.name}
                variants={itemSlideUp}
                style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, padding: 32 }}
                whileHover={{ y: -6, background: 'rgba(227,6,19,.08)', borderColor: 'rgba(227,6,19,.2)' }}
              >
                <motion.div
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  style={{ display: 'flex', gap: 2, marginBottom: 16 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F4C400" stroke="#F4C400" strokeWidth="2">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </motion.div>
                <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <motion.img src={asset(t.image)} alt={t.name}
                    whileHover={{ scale: 1.1, borderColor: '#F4C400' }}
                    style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '2px solid transparent' }}
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
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ textAlign: 'center', marginBottom: 40 }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {['Chantier', 'Engins', 'Construction', 'Équipe', 'Infrastructure', 'Architecture', 'Ingénierie', 'Outillage', 'Fourniture'].map(gc => {
              const items = ONESIME.gallery.filter(g => g.category === gc)
              if (items.length === 0) return null
              return <GalleryCard key={gc} category={gc} items={items} />
            })}
          </div>
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

/* ============= Gallery Card (diapo d'une catégorie) ============= */
function GalleryCard({ category, items }: { category: string; items: typeof ONESIME.gallery }) {
  const [current, setCurrent] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const next = () => setCurrent(p => (p + 1) % items.length)
  const prev = () => setCurrent(p => (p - 1 + items.length) % items.length)

  const openModal = (i: number) => {
    setModalIndex(i)
    setModalOpen(true)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          borderRadius: 18, overflow: 'hidden', position: 'relative',
          height: 260, cursor: 'pointer',
          background: '#fff', border: '1px solid #eee',
        }}
      >
        {/* Category label */}
        <div style={{
          position: 'absolute', top: 14, left: 14, zIndex: 3,
          background: '#E30613', color: 'white', padding: '4px 14px',
          borderRadius: 99, fontSize: '.72rem', fontWeight: 700,
          letterSpacing: '0.04em', boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          {category}
        </div>

        {/* Image */}
        <div onClick={() => openModal(current)} style={{ width: '100%', height: '100%', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={items[current].src}
              alt={items[current].title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '30px 14px 12px',
          }}>
            <p style={{ color: 'white', fontSize: '.82rem', fontWeight: 600, margin: 0 }}>{items[current].title}</p>
          </div>
        </div>

        {/* Arrows */}
        <button onClick={e => { e.stopPropagation(); prev() }} style={{
          position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 3,
          width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.85)',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={e => { e.stopPropagation(); next() }} style={{
          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 3,
          width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.85)',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* Dots */}
        <div style={{
          position: 'absolute', bottom: 42, left: 0, right: 0, zIndex: 3,
          display: 'flex', justifyContent: 'center', gap: 4,
        }}>
          {items.slice(0, Math.min(items.length, 7)).map((_, i) => (
            <div key={i} style={{
              width: i === current ? 18 : 5, height: 5, borderRadius: 3,
              background: i === current ? '#F4C400' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s', cursor: 'pointer',
            }} onClick={e => { e.stopPropagation(); setCurrent(i) }} />
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <button onClick={() => setModalOpen(false)} style={{
              position: 'absolute', top: 20, right: 20, zIndex: 10,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div style={{
              position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.5)', fontSize: '.85rem', fontWeight: 500,
              letterSpacing: '0.05em',
            }}>
              {category} — {modalIndex + 1} / {items.length}
            </div>

            <button onClick={() => setModalIndex(p => (p - 1 + items.length) % items.length)} style={{
              position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            <button onClick={() => setModalIndex(p => (p + 1) % items.length)} style={{
              position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={modalIndex}
                src={items[modalIndex].src}
                alt={items[modalIndex].title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{
                  maxWidth: '85vw', maxHeight: '80vh',
                  objectFit: 'contain', borderRadius: 12,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
            </AnimatePresence>

            <div style={{
              position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: 6,
            }}>
              {items.map((_, i) => (
                <div key={i} onClick={() => setModalIndex(i)} style={{
                  width: i === modalIndex ? 24 : 8, height: 8, borderRadius: 4,
                  background: i === modalIndex ? '#F4C400' : 'rgba(255,255,255,0.25)',
                  cursor: 'pointer', transition: 'all 0.3s',
                }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
