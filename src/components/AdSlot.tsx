import React, { useEffect, useRef } from 'react'
import { useAdSense } from '../contexts/AdSenseContext'
import { AdSlotProps } from '../types'

const AdSlot: React.FC<AdSlotProps> = ({ 
  slotId, 
  format = 'auto', 
  responsive = true, 
  className = '' 
}) => {
  const adRef = useRef<HTMLDivElement>(null)
  const { isLoaded, canShowAds } = useAdSense()

  useEffect(() => {
    if (canShowAds && isLoaded && adRef.current) {
      try {
        // Verificar se o anúncio já foi carregado
        if (adRef.current.children.length === 0) {
          // Criar elemento de anúncio
          const adElement = document.createElement('ins')
          adElement.className = 'adsbygoogle'
          adElement.style.display = 'block'
          adElement.setAttribute('data-ad-client', 'ca-pub-8992265400273562')
          adElement.setAttribute('data-ad-slot', slotId)
          
          if (format !== 'auto') {
            adElement.setAttribute('data-ad-format', format)
          }
          
          if (responsive) {
            adElement.setAttribute('data-full-width-responsive', 'true')
          }

          adRef.current.appendChild(adElement)

          // Carregar o anúncio
          if (typeof (window as any).adsbygoogle !== 'undefined') {
            try {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
            } catch (error) {
              console.error('Erro ao carregar anúncio:', error)
            }
          }
        }
      } catch (error) {
        console.error('Erro ao configurar AdSlot:', error)
      }
    }
  }, [canShowAds, isLoaded, slotId, format, responsive])

  // Não renderizar se não pode mostrar anúncios
  if (!canShowAds) {
    return null
  }

  return (
    <div 
      ref={adRef} 
      className={`ad-slot ${className}`}
      style={{ minHeight: '90px' }}
      data-testid={`ad-slot-${slotId}`}
    />
  )
}

export default AdSlot
