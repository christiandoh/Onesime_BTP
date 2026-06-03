import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ZoomableImage({ src, alt, style, className, onMouseOver, onMouseOut }: {
  src: string
  alt: string
  style?: React.CSSProperties
  className?: string
  onMouseOver?: (e: React.MouseEvent<HTMLImageElement>) => void
  onMouseOut?: (e: React.MouseEvent<HTMLImageElement>) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ ...style, cursor: 'zoom-in' }}
        className={className}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out', padding: 24,
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute', top: 20, right: 20,
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: 'white', fontSize: 22, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '95vw', maxHeight: '90vh',
                objectFit: 'contain', borderRadius: 12,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                cursor: 'default',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
