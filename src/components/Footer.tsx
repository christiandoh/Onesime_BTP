import { Link } from 'react-router-dom'
import Icon from './Icon'
import { ONESIME } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: 'rgba(255,255,255,.65)' }}>
      <div style={{ padding: '28px 0 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: 24 }} className="footer-grid">
            {/* Brand */}
            <div>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 10 }}>
                <img src="/images/logo/logo.png" alt="Onesime BTP" style={{ height: 36, width: 'auto' }} />
              </Link>
              <p style={{ fontSize: '.78rem', lineHeight: 1.6, marginBottom: 12, color: 'rgba(255,255,255,.42)', maxWidth: 280 }}>
                Votre partenaire de confiance pour la fourniture de sable, gravier et latérite à Abidjan et en Côte d'Ivoire.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href="https://www.facebook.com/share/1EtgM2wzhy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: 'rgba(255,255,255,.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,.4)', textDecoration: 'none',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href={`https://wa.me/${ONESIME.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: 'rgba(255,255,255,.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,.4)', textDecoration: 'none',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontSize: '.82rem', fontWeight: 700, color: 'white', marginBottom: 12, letterSpacing: '0.03em' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><Link to="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Fourniture de sable</Link></li>
                <li><Link to="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Fourniture de gravier</Link></li>
                <li><Link to="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Fourniture de latérite</Link></li>
                <li><Link to="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Location camions</Link></li>
                <li><Link to="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Gros œuvre</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize: '.82rem', fontWeight: 700, color: 'white', marginBottom: 12, letterSpacing: '0.03em' }}>Liens</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><Link to="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Accueil</Link></li>
                <li><Link to="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Services</Link></li>
                <li><Link to="/actualites" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Actualités</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>À propos</Link></li>
                <li><Link to="/realisations" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Réalisations</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)', fontSize: '.8rem' }}>Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: '.82rem', fontWeight: 700, color: 'white', marginBottom: 12, letterSpacing: '0.03em' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(227,6,19,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="Phone" size={12} color="#E30613" />
                  </span>
                  <div>
                    <a href={`tel:${ONESIME.contact.phone1}`} style={{ textDecoration: 'none', color: 'rgba(255,255,255,.48)', fontSize: '.78rem', display: 'block' }}>{ONESIME.contact.phone1}</a>
                    <a href={`tel:${ONESIME.contact.phone2}`} style={{ textDecoration: 'none', color: 'rgba(255,255,255,.32)', fontSize: '.74rem', display: 'block' }}>{ONESIME.contact.phone2}</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(227,6,19,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon name="MapPin" size={12} color="#E30613" />
                  </span>
                  <span style={{ color: 'rgba(255,255,255,.42)', fontSize: '.78rem', lineHeight: 1.4 }}>{ONESIME.contact.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(227,6,19,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="Clock" size={12} color="#E30613" />
                  </span>
                  <span style={{ color: 'rgba(255,255,255,.42)', fontSize: '.78rem' }}>Lun–Sam : 7h–18h</span>
                </div>
              </div>

              <h4 style={{ fontSize: '.82rem', fontWeight: 700, color: 'white', margin: '16px 0 10px', letterSpacing: '0.03em' }}>Emails</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ONESIME.emails.map(e => (
                  <div key={e.address} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(227,6,19,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="Mail" size={12} color="#E30613" />
                    </span>
                    <a href={`mailto:${e.address}`} style={{ textDecoration: 'none', color: 'rgba(255,255,255,.42)', fontSize: '.76rem' }}>{e.address}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', padding: '14px 0' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }} className="footer-bottom">
          <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.18)' }}>
            &copy; {new Date().getFullYear()} <span style={{ color: '#E30613' }}>Onesime BTP</span>
          </p>
          <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.18)' }}>
            Gravier &middot; Sable &middot; Latérite &mdash; <span style={{ color: '#E30613' }}>Abidjan, CI</span>
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .footer-bottom { flex-direction: column !important; gap: 6px !important; text-align: center !important; }
        }
        @media(min-width:769px) and (max-width:1024px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        .footer-grid a:hover { color: #F4C400 !important; }
      `}</style>
    </footer>
  )
}
