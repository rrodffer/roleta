import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { CookiePreferences } from '../types'

interface CookieConsentContextType {
  hasConsented: boolean
  preferences: CookiePreferences
  showBanner: boolean
  consent: (preferences: CookiePreferences) => void
  showPreferences: () => void
  hideBanner: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

const COOKIE_KEY = 'roleta-cookie-consent'
const COOKIE_EXPIRY = 365 // dias

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hasConsented, setHasConsented] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalizedAds: false
  })
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Verificar se já existe consentimento salvo
    const savedConsent = localStorage.getItem(COOKIE_KEY)
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent)
        const now = new Date().getTime()
        
        // Verificar se o consentimento ainda é válido (1 ano)
        if (now - parsed.timestamp < COOKIE_EXPIRY * 24 * 60 * 60 * 1000) {
          setHasConsented(true)
          setPreferences(parsed.preferences)
          setShowBanner(false)
        } else {
          // Consentimento expirado, mostrar banner novamente
          setShowBanner(true)
        }
      } catch (error) {
        console.error('Erro ao carregar preferências de cookies:', error)
        setShowBanner(true)
      }
    } else {
      // Primeira visita, mostrar banner
      setShowBanner(true)
    }
  }, [])

  const consent = (newPreferences: CookiePreferences) => {
    const consentData = {
      preferences: newPreferences,
      timestamp: new Date().getTime()
    }
    
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consentData))
    setHasConsented(true)
    setPreferences(newPreferences)
    setShowBanner(false)

    // Configurar Google Consent Mode se disponível
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const gtag = (window as any).gtag
      gtag('consent', 'update', {
        analytics_storage: newPreferences.analytics ? 'granted' : 'denied',
        ad_storage: newPreferences.personalizedAds ? 'granted' : 'denied',
        ad_user_data: newPreferences.personalizedAds ? 'granted' : 'denied',
        ad_personalization: newPreferences.personalizedAds ? 'granted' : 'denied'
      })
    }
  }

  const showPreferences = () => {
    setShowBanner(true)
  }

  const hideBanner = () => {
    setShowBanner(false)
  }

  return (
    <CookieConsentContext.Provider value={{
      hasConsented,
      preferences,
      showBanner,
      consent,
      showPreferences,
      hideBanner
    }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent deve ser usado dentro de um CookieConsentProvider')
  }
  return context
}
