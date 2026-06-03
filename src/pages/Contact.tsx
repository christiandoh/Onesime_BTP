import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import { asset, waUrl } from '../utils/asset'
import { ONESIME } from '../data/content'
import { slideUp, slideLeft, slideRight } from '../data/animations'

export default function Contact() {

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
            }}>Contact</span>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800,
              color: 'white', lineHeight: 1.2,
            }}>
              Contactez-<span style={{ color: '#E30613' }}>nous</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="contact-grid">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <span style={{
                display: 'inline-block', background: '#F4C400', color: '#111',
                padding: '5px 14px', borderRadius: 99, fontSize: '.72rem',
                fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
                marginBottom: 14,
              }}>Devis gratuit</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, marginBottom: 16 }}>
                Obtenez votre devis <span style={{ color: '#E30613' }}>gratuitement</span>
              </h2>
              <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '.95rem', marginBottom: 32 }}>
                Remplissez le formulaire ou contactez-nous directement. Nous vous répondons sous 2 heures ouvrées.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  { icon: 'Phone', label: 'Téléphone', value: ONESIME.contact.phone1, href: `tel:${ONESIME.contact.phone1}` },
                  { icon: 'MessageCircle', label: 'WhatsApp', value: 'Disponible 7j/7', href: null },
                  { icon: 'MapPin', label: 'Adresse', value: ONESIME.contact.address, href: null },
                  { icon: 'Mail', label: 'Email', value: ONESIME.contact.email, href: `mailto:${ONESIME.contact.email}` },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 14 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, background: '#E30613' }}
                      style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: 'rgba(227,6,19,.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        transition: 'background 0.3s',
                      }}
                    >
                      <Icon name={item.icon} size={20} color="#E30613" />
                    </motion.div>
                    <div>
                      <span style={{ fontSize: '.8rem', color: '#6B7280' }}>{item.label}</span><br />
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '.95rem', fontWeight: 600, color: '#111', textDecoration: 'none' }}>
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: '.95rem', fontWeight: 600, color: '#111' }}>{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', gap: 12 }}
              >
                <motion.a
                  href={`tel:${ONESIME.contact.phone1}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 24px', borderRadius: 14,
                    background: '#E30613', color: 'white', fontWeight: 600,
                    textDecoration: 'none', fontSize: '.9rem',
                  }}
                >
                  <Icon name="Phone" size={18} />
                  Appeler
                </motion.a>
                <motion.a
                  href={waUrl(ONESIME.contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 24px', borderRadius: 14,
                    background: '#25D366', color: 'white', fontWeight: 600,
                    textDecoration: 'none', fontSize: '.9rem',
                  }}
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.form
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const data = new FormData(form)
                const name = data.get('name') || ''
                const phone = data.get('phone') || ''
                const email = data.get('email') || ''
                const material = data.get('material') || ''
                const quantity = data.get('quantity') || ''
                const location = data.get('location') || ''
                const urgency = data.get('urgency') || ''
                const message = data.get('message') || ''

                const subject = encodeURIComponent('Demande de devis - Onesime BTP')
                const body = encodeURIComponent(
                  `Bonjour,\n\nJe suis intéressé(e) par vos services et souhaite obtenir un devis.\n\n` +
                  `Voici mes coordonnées et les détails de ma demande :\n\n` +
                  `• Nom : ${name}\n` +
                  `• Téléphone : ${phone}\n` +
                  `• Email : ${email}\n` +
                  `• Matériau souhaité : ${material}\n` +
                  `• Quantité : ${quantity}\n` +
                  `• Localité de livraison : ${location}\n` +
                  `• Urgence : ${urgency}\n` +
                  `• Message complémentaire : ${message}\n\n` +
                  `Dans l'attente de votre retour, je vous remercie.\n\n` +
                  `Cordialement,\n${name}`
                )

                window.location.href = `mailto:secretariat@onesime-btp.com?subject=${subject}&body=${body}`
              }}
              style={{ background: 'white', borderRadius: 24, padding: 40, boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #eee' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(227,6,19,.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name="Mail" size={20} color="#E30613" />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Demande de devis</h3>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                    Nom complet <span style={{ color: '#E30613' }}>*</span>
                  </label>
                  <input type="text" name="name" required placeholder="Ex: Kouadio Alain" style={{
                    padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                    fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
                  }} onFocus={e => e.target.style.borderColor = '#E30613'}
                    onBlur={e => e.target.style.borderColor = '#E0E0E0'} />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                    Téléphone <span style={{ color: '#E30613' }}>*</span>
                  </label>
                  <input type="tel" name="phone" required placeholder="07 XX XX XX XX" style={{
                    padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                    fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
                  }} onFocus={e => e.target.style.borderColor = '#E30613'}
                    onBlur={e => e.target.style.borderColor = '#E0E0E0'} />
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                  Email
                </label>
                <input type="email" name="email" placeholder="exemple@email.com" style={{
                  padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                  fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                  outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
                }} onFocus={e => e.target.style.borderColor = '#E30613'}
                  onBlur={e => e.target.style.borderColor = '#E0E0E0'} />
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                    Matériau souhaité <span style={{ color: '#E30613' }}>*</span>
                  </label>
                  <select name="material" required style={{
                    padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                    fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                    outline: 'none', boxSizing: 'border-box',
                  }}>
                    <option value="">-- Sélectionnez --</option>
                    <option value="Sable">Sable</option>
                    <option value="Gravier">Gravier</option>
                    <option value="Latérite">Latérite</option>
                    <option value="Plusieurs matériaux">Plusieurs matériaux</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                    Quantité
                  </label>
                  <input type="text" name="quantity" placeholder="Ex: 10 m³ ou 5 tonnes" style={{
                    padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                    fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
                  }} onFocus={e => e.target.style.borderColor = '#E30613'}
                    onBlur={e => e.target.style.borderColor = '#E0E0E0'} />
                </div>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                    Localité de livraison <span style={{ color: '#E30613' }}>*</span>
                  </label>
                  <input type="text" name="location" required placeholder="Ex: Cocody, Abidjan" style={{
                    padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                    fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
                  }} onFocus={e => e.target.style.borderColor = '#E30613'}
                    onBlur={e => e.target.style.borderColor = '#E0E0E0'} />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                    Urgence
                  </label>
                  <select name="urgency" style={{
                    padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                    fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                    outline: 'none', boxSizing: 'border-box',
                  }}>
                    <option value="Normale">Normale</option>
                    <option value="Urgent (sous 24h)">Urgent (sous 24h)</option>
                    <option value="Très urgent (sous 12h)">Très urgent (sous 12h)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151', marginBottom: 4, display: 'block' }}>
                  Message complémentaire
                </label>
                <textarea name="message" placeholder="Précisez vos besoins, dates souhaitées, etc..." rows={4} style={{
                  padding: '12px 16px', border: '1.5px solid #E0E0E0', borderRadius: 10,
                  fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', width: '100%',
                  outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                  minHeight: 90, transition: 'border-color 0.3s',
                }} onFocus={e => e.target.style.borderColor = '#E30613'}
                  onBlur={e => e.target.style.borderColor = '#E0E0E0'} />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, boxShadow: '0 8px 24px rgba(227,6,19,.3)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', padding: 15, background: '#E30613', color: 'white',
                  border: 'none', borderRadius: 12, fontWeight: 700, fontSize: '.95rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 8,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <Icon name="Send" size={18} />
                Envoyer ma demande
              </motion.button>

              <p style={{
                fontSize: '.72rem', color: '#9CA3AF', textAlign: 'center', marginTop: 12,
              }}>
                En cliquant sur Envoyer, vous serez redirigé vers votre messagerie.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ height: 400, background: '#f0f0f0' }}
      >
        <iframe
          title="Onesime BTP Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.6!2d-3.8255!3d5.3484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb6a1b0b0b0b%3A0x0!2sBingerville!5e0!3m2!1sfr!2sci!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) invert(0.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.section>

      <style>{`
        @media(max-width:768px){
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
