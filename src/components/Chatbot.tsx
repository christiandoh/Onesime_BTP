import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ONESIME } from '../data/content'

const STORAGE_KEY = 'onesimeai_messages'
const DAILY_LIMIT = 3

interface ChatMsg {
  role: 'bot' | 'user'
  text: string
  type: 'text' | 'biography' | 'contact'
  time: number
}

function getStorage(): { messages: ChatMsg[]; date: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { messages: [], date: '' }
}

function setStorage(messages: ChatMsg[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, date: new Date().toDateString() }))
}

function getDailyCount(messages: ChatMsg[]): number {
  const today = new Date().toDateString()
  return messages.filter(m => {
    const d = new Date(m.time).toDateString()
    return d === today && m.role === 'user'
  }).length
}

function BiographyMsg() {
  return (
    <div style={{ fontSize: '.85rem', lineHeight: 1.8 }}>
      <p style={{ margin: '0 0 12px', fontWeight: 700, fontSize: '.95rem', color: '#F4C400' }}>
        Bienvenue chez <span style={{ color: '#E30613' }}>Onesime BTP</span>
      </p>
      <p style={{ margin: '0 0 10px', color: 'rgba(255,255,255,0.8)' }}>
        Onesime BTP est une entreprise ivoirienne spécialisée dans le Bâtiment et les Travaux Publics (BTP), basée à Abidjan et intervenant sur toute la Côte d'Ivoire. Forte de plus de 8 ans d'expérience et de plus de 500 chantiers livrés, notre entreprise s'est imposée comme un acteur incontournable dans la fourniture de matériaux de construction et les prestations de services BTP.
      </p>
      <p style={{ margin: '0 0 10px', color: 'rgba(255,255,255,0.75)' }}>
        Nous proposons une gamme complète de services incluant la fourniture de sable, gravier et latérite, la location de camions benne, le gros œuvre, la construction complète de bâtiments, le génie civil, l'électricité industrielle, l'éclairage public et la domotique. Chaque livraison est rigoureusement contrôlée pour garantir une qualité optimale à nos clients.
      </p>
      <p style={{ margin: '0 0 10px', color: 'rgba(255,255,255,0.75)' }}>
        Notre équipe de professionnels qualifiés met tout en oeuvre pour assurer des prestations fiables, dans le respect des délais et des normes les plus exigeantes. Nous collaborons avec les plus grandes marques telles que Schneider Electric, ABB, Legrand et SKF, et comptons parmi nos partenaires des institutions publiques et privées de premier plan.
      </p>
      <p style={{ margin: '0 0 8px', color: 'rgba(255,255,255,0.65)', fontSize: '.8rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10 }}>
        <strong>Qualité garantie — Livraison rapide — Prix compétitifs</strong>
      </p>
      <p style={{ margin: '0', color: 'rgba(255,255,255,0.45)', fontSize: '.75rem', fontStyle: 'italic' }}>
        +500 chantiers livrés · 8+ ans d'expérience · 50+ camions · 7j/7
      </p>
    </div>
  )
}

function ContactMsg() {
  return (
    <div style={{ fontSize: '.85rem', lineHeight: 1.7 }}>
      <p style={{ margin: '0 0 10px', color: 'rgba(255,255,255,0.8)' }}>
        Pour toute demande personnalisée, veuillez contacter notre équipe support :
      </p>
      <div style={{
        background: 'rgba(227,6,19,0.12)', borderRadius: 10, padding: 12, marginBottom: 10,
        border: '1px solid rgba(227,6,19,0.2)',
      }}>
        <p style={{ margin: '0 0 4px', color: '#F4C400', fontWeight: 600, fontSize: '.8rem' }}>Emails</p>
        <p style={{ margin: '0 0 2px', color: 'rgba(255,255,255,0.7)', fontSize: '.8rem' }}>secretariat@onesime-btp.com</p>
        <p style={{ margin: '0 0 2px', color: 'rgba(255,255,255,0.7)', fontSize: '.8rem' }}>fabrice.krouba@onesime-btp.com</p>
        <p style={{ margin: '0', color: 'rgba(255,255,255,0.7)', fontSize: '.8rem' }}>reine.poele@onesime-btp.com</p>
      </div>
      <div style={{
        background: 'rgba(37,211,102,0.1)', borderRadius: 10, padding: 12,
        border: '1px solid rgba(37,211,102,0.2)',
      }}>
        <p style={{ margin: '0 0 4px', color: '#25D366', fontWeight: 600, fontSize: '.8rem' }}>WhatsApp</p>
        <a
          href={`https://wa.me/${ONESIME.contact.whatsapp}?text=${encodeURIComponent('Bonjour Onesime BTP, je souhaite obtenir des informations.')}`}
          target="_blank" rel="noopener noreferrer"
          style={{ color: '#25D366', fontSize: '.82rem', textDecoration: 'underline' }}
        >
          {ONESIME.contact.phone1}
        </a>
      </div>
    </div>
  )
}

function MessageContent({ msg }: { msg: ChatMsg }) {
  if (msg.type === 'biography') return <BiographyMsg />
  if (msg.type === 'contact') return <ContactMsg />
  return <>{msg.text}</>
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: 'bot', text: 'Bienvenue ! Posez votre question à OnesimeAI.', type: 'text', time: Date.now() },
  ])
  const [input, setInput] = useState('')
  const [firstAnswered, setFirstAnswered] = useState(false)
  const [dailyCount, setDailyCount] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = getStorage()
    const today = new Date().toDateString()
    if (stored.date === today && stored.messages.length > 0) {
      setMessages(stored.messages)
      setDailyCount(getDailyCount(stored.messages))
      setFirstAnswered(stored.messages.some(m => m.role === 'user'))
    }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (msg: ChatMsg) => {
    const newMsgs = [...messages, msg]
    setMessages(newMsgs)
    setStorage(newMsgs)
  }

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    const stored = getStorage()
    const count = stored.date === new Date().toDateString() ? getDailyCount(stored.messages) : 0

    const userMsg: ChatMsg = { role: 'user', text, type: 'text', time: Date.now() }

    if (count >= DAILY_LIMIT) {
      addMessage(userMsg)
      addMessage({
        role: 'bot',
        text: `Limite de ${DAILY_LIMIT} messages atteinte pour aujourd'hui. Veuillez nous contacter par email ou WhatsApp pour toute assistance.`,
        type: 'text',
        time: Date.now(),
      })
      setInput('')
      return
    }

    addMessage(userMsg)
    setDailyCount(prev => prev + 1)
    setInput('')

    setTimeout(() => {
      const isFirst = !firstAnswered && !messages.some(m => m.role === 'user')
      addMessage({
        role: 'bot',
        text: isFirst ? 'biography' : 'contact',
        type: isFirst ? 'biography' : 'contact',
        time: Date.now(),
      })
      if (isFirst) setFirstAnswered(true)
    }, 600)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(prev => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: 100, left: 28, zIndex: 998,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #111, #333)',
          border: '2px solid rgba(255,255,255,0.15)',
          color: 'white', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
          fontSize: 22,
        }}
        aria-label="OnesimeAI"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z" />
            <circle cx="12" cy="12" r="10" opacity="0.3" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', bottom: 170, left: 28, zIndex: 998,
              width: 360, maxWidth: 'calc(100vw - 56px)',
              height: 480, maxHeight: 'calc(100vh - 220px)',
              background: '#1a1a1a',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'linear-gradient(135deg, #111, #222)',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, #E30613, #B8000D)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 800, color: 'white',
                flexShrink: 0,
              }}>AI</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '.88rem', color: 'white' }}>OnesimeAI</div>
                <div style={{ fontSize: '.72rem', color: '#25D366', fontWeight: 500 }}>
                  {dailyCount < DAILY_LIMIT
                    ? `● En ligne — ${DAILY_LIMIT - dailyCount} message${DAILY_LIMIT - dailyCount > 1 ? 's' : ''} restant${DAILY_LIMIT - dailyCount > 1 ? 's' : ''}`
                    : '● Limite atteinte'}
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer', padding: 4, fontSize: 18,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1, overflow: 'auto', padding: '16px',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}>
                  <div style={{
                    maxWidth: '85%',
                    padding: msg.type !== 'text' ? 14 : '10px 14px',
                    borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #E30613, #B8000D)'
                      : 'rgba(255,255,255,0.06)',
                    color: msg.role === 'user' ? 'white' : 'rgba(255,255,255,0.85)',
                    fontSize: '.84rem',
                    lineHeight: 1.6,
                    border: msg.role === 'bot' ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}>
                    <MessageContent msg={msg} />
                    <div style={{
                      fontSize: '.62rem', marginTop: 4,
                      color: msg.role === 'user' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)',
                      textAlign: 'right',
                    }}>
                      {new Date(msg.time).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
              padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', gap: 8,
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder={dailyCount < DAILY_LIMIT ? 'Posez votre question...' : 'Limite atteinte'}
                disabled={dailyCount >= DAILY_LIMIT}
                style={{
                  flex: 1, padding: '10px 14px', borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white', fontSize: '.84rem',
                  fontFamily: 'inherit', outline: 'none',
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || dailyCount >= DAILY_LIMIT}
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: !input.trim() || dailyCount >= DAILY_LIMIT
                    ? 'rgba(255,255,255,0.08)' : '#E30613',
                  border: 'none', color: 'white', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.3s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
