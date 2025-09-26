import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useCookieConsent } from './CookieConsentContext'

interface AdSenseContextType {
  isLoaded: boolean
  canShowAds: boolean
  loadAdSense: () => void
}

const AdSenseContext = createContext<AdSenseContextType | undefined>(undefined)

export const AdSenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { hasConsented, preferences } = useCookieConsent()

  const canShowAds = hasConsented && preferences.personalizedAds

  useEffect(() => {
    if (canShowAds && !isLoaded) {
      loadAdSense()
    }
  }, [canShowAds, isLoaded])

  const loadAdSense = () => {
    if (typeof window !== 'undefined' && !isLoaded) {
      // Verificar se o script já foi carregado
      const existingScript = document.querySelector('script[src*="adsbygoogle.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8992265400273562'
        script.crossOrigin = 'anonymous'
        script.onload = () => {
          setIsLoaded(true)
          console.log('Google AdSense carregado com sucesso')
        }
        script.onerror = () => {
          console.error('Erro ao carregar Google AdSense')
        }
        document.head.appendChild(script)
      } else {
        setIsLoaded(true)
      }
    }
  }

  return (
    <AdSenseContext.Provider value={{
      isLoaded,
      canShowAds,
      loadAdSense
    }}>
      {children}
    </AdSenseContext.Provider>
  )
}

export const useAdSense = () => {
  const context = useContext(AdSenseContext)
  if (context === undefined) {
    throw new Error('useAdSense deve ser usado dentro de um AdSenseProvider')
  }
  return context
}
