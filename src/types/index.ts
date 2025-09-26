export interface RouletteOption {
  id: string
  text: string
  color?: string
}

export interface RouletteCategory {
  id: string
  name: string
  description: string
  options: RouletteOption[]
  icon: string
}

export interface CustomRoulette {
  id: string
  name: string
  options: RouletteOption[]
  createdAt: number
}

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  personalizedAds: boolean
}

export interface AdSlotProps {
  slotId: string
  format?: string
  responsive?: boolean
  className?: string
}
