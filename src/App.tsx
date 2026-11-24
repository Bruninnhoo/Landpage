import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollRuler from './components/ScrollRuler'
import Home from './pages/Home'
import About from './pages/About'
import Curriculum from './pages/Curriculum'
import Contact from './pages/Contact'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const MODELS: Record<string, string> = {
  papel: 'app--paper lay-revista',
  noite: 'app--dark',
}

function App() {
  const { pathname, search } = useLocation()
  const isHome = pathname === '/'
  // Every page uses the light "Papel" skin. /?modelo=noite still shows the home's earlier dark version;
  // drop MODELS and the .app--dark block in index.css if that one is never wanted again.
  const param = new URLSearchParams(search).get('modelo') ?? ''
  const modelo = param in MODELS ? param : 'papel'
  const theme = MODELS[isHome ? modelo : 'papel']
  return (
    <LanguageProvider>
      <div className={`app ${theme}`}>
        <ScrollToTop />
        <ScrollRuler />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
