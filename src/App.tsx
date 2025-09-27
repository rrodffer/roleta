import { Routes, Route, useLocation } from 'react-router-dom'
import { CookieConsentProvider } from './contexts/CookieConsentContext'
import { AdSenseProvider } from './contexts/AdSenseContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import CookieBanner from './components/CookieBanner'

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <CookieConsentProvider>
      <AdSenseProvider>
        <div className="min-h-screen flex flex-col">
          {isHomePage ? (
            <HomePage />
          ) : (
            <>
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          )}
          <CookieBanner />
        </div>
      </AdSenseProvider>
    </CookieConsentProvider>
  )
}

export default App
