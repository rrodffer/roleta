import { useState, useEffect } from 'react'
import { CustomRoulette } from '../types'

const STORAGE_KEY = 'roleta-custom-roulettes'

export const useCustomRoulettes = () => {
  const [customRoulettes, setCustomRoulettes] = useState<CustomRoulette[]>([])

  // Carregar roletas salvas do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setCustomRoulettes(Array.isArray(parsed) ? parsed : [])
      }
    } catch (error) {
      console.error('Erro ao carregar roletas personalizadas:', error)
      setCustomRoulettes([])
    }
  }, [])

  // Salvar roletas no localStorage
  const saveRoulettes = (roulettes: CustomRoulette[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(roulettes))
      setCustomRoulettes(roulettes)
    } catch (error) {
      console.error('Erro ao salvar roletas personalizadas:', error)
    }
  }

  // Adicionar nova roleta
  const addRoulette = (roulette: CustomRoulette) => {
    const updatedRoulettes = [...customRoulettes, roulette]
    saveRoulettes(updatedRoulettes)
  }

  // Atualizar roleta existente
  const updateRoulette = (id: string, updatedRoulette: CustomRoulette) => {
    const updatedRoulettes = customRoulettes.map(roulette =>
      roulette.id === id ? updatedRoulette : roulette
    )
    saveRoulettes(updatedRoulettes)
  }

  // Remover roleta
  const removeRoulette = (id: string) => {
    const updatedRoulettes = customRoulettes.filter(roulette => roulette.id !== id)
    saveRoulettes(updatedRoulettes)
  }

  // Obter roleta por ID
  const getRouletteById = (id: string) => {
    return customRoulettes.find(roulette => roulette.id === id)
  }

  return {
    customRoulettes,
    addRoulette,
    updateRoulette,
    removeRoulette,
    getRouletteById
  }
}
