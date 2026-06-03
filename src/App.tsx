import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'
import Actualites from './pages/Actualites'

function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      const path = redirect.replace(/^https?:\/\/[^/]+(\/[^?]*).*$/, '$1')
      const base = import.meta.env.BASE_URL.replace(/\/$/, '')
      const route = path.replace(base, '') || '/'
      navigate(route, { replace: true })
    }
  }, [navigate])

  return null
}

export default function App() {
  return (
    <>
      <RedirectHandler />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/actualites" element={<Actualites />} />
        </Route>
      </Routes>
    </>
  )
}
