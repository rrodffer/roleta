import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RouletteCategory, RouletteOption, CustomRoulette } from '../types'
import { useCustomRoulettes } from '../hooks/useCustomRoulettes'
import Roulette from '../components/Roulette'
import RouletteSelector from '../components/RouletteSelector'
import CustomRouletteCreator from '../components/CustomRouletteCreator'
import AdSlot from '../components/AdSlot'

type ViewMode = 'selector' | 'roulette' | 'creator' | 'custom-list'

const HomePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('selector')
  const [selectedCategory, setSelectedCategory] = useState<RouletteCategory | null>(null)
  const [selectedCustomRoulette, setSelectedCustomRoulette] = useState<CustomRoulette | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<RouletteOption | null>(null)
  const [editingRoulette, setEditingRoulette] = useState<CustomRoulette | null>(null)
  
  const { customRoulettes, addRoulette, updateRoulette, removeRoulette } = useCustomRoulettes()

  // Obter opções atuais baseado no modo de visualização
  const getCurrentOptions = (): RouletteOption[] => {
    if (viewMode === 'roulette' && selectedCategory) {
      return selectedCategory.options
    }
    if (viewMode === 'roulette' && selectedCustomRoulette) {
      return selectedCustomRoulette.options
    }
    return []
  }

  // Lidar com seleção de categoria
  const handleCategorySelect = (category: RouletteCategory) => {
    setSelectedCategory(category)
    setSelectedCustomRoulette(null)
    setViewMode('roulette')
    setResult(null)
  }

  // Lidar com seleção de roleta personalizada
  const handleCustomRouletteSelect = (roulette: CustomRoulette) => {
    setSelectedCustomRoulette(roulette)
    setSelectedCategory(null)
    setViewMode('roulette')
    setResult(null)
  }

  // Girar roleta
  const handleSpin = () => {
    if (getCurrentOptions().length === 0) return
    
    setIsSpinning(true)
    setResult(null)
  }

  // Lidar com resultado da roleta
  const handleResult = (resultOption: RouletteOption) => {
    setResult(resultOption)
    setIsSpinning(false)
  }

  // Salvar roleta personalizada
  const handleSaveCustomRoulette = (roulette: CustomRoulette) => {
    if (editingRoulette) {
      updateRoulette(roulette.id, roulette)
    } else {
      addRoulette(roulette)
    }
    setEditingRoulette(null)
    setViewMode('custom-list')
  }

  // Editar roleta personalizada
  const handleEditRoulette = (roulette: CustomRoulette) => {
    setEditingRoulette(roulette)
    setViewMode('creator')
  }

  // Voltar para seletor
  const handleBackToSelector = () => {
    setViewMode('selector')
    setSelectedCategory(null)
    setSelectedCustomRoulette(null)
    setResult(null)
    setEditingRoulette(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              🎯 Roletas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 text-primary-100"
            >
              Gere roletas personalizadas para decisões, sorteios e diversão
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setViewMode('selector')}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Explorar Roletas
              </button>
              <button
                onClick={() => setViewMode('creator')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Criar Personalizada
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ad Slot entre Hero e Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdSlot 
          slotId="content-ad-1" 
          format="auto" 
          responsive={true}
          className="max-h-20"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Seletor de Roletas */}
          {viewMode === 'selector' && (
            <motion.div
              key="selector"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Escolha uma Roleta
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Selecione uma das roletas pré-definidas ou crie sua própria roleta personalizada
                </p>
              </div>

              <RouletteSelector
                onSelectCategory={handleCategorySelect}
                selectedCategory={selectedCategory}
              />

              {/* Roletas Personalizadas */}
              {customRoulettes.length > 0 && (
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Suas Roletas Personalizadas
                    </h3>
                    <button
                      onClick={() => setViewMode('custom-list')}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Ver todas ({customRoulettes.length})
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {customRoulettes.slice(0, 3).map((roulette) => (
                      <button
                        key={roulette.id}
                        onClick={() => handleCustomRouletteSelect(roulette)}
                        className="p-4 rounded-lg border-2 border-gray-200 bg-white hover:border-primary-300 hover:shadow-md transition-all duration-200 text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">🎲</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {roulette.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {roulette.options.length} opções
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Lista de Roletas Personalizadas */}
          {viewMode === 'custom-list' && (
            <motion.div
              key="custom-list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Suas Roletas Personalizadas
                  </h2>
                  <p className="text-gray-600">
                    Gerencie suas roletas criadas
                  </p>
                </div>
                <button
                  onClick={handleBackToSelector}
                  className="btn-secondary"
                >
                  ← Voltar
                </button>
              </div>

              {customRoulettes.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                  <div className="text-gray-400 text-4xl mb-4">🎲</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Nenhuma roleta personalizada
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Crie sua primeira roleta personalizada
                  </p>
                  <button
                    onClick={() => setViewMode('creator')}
                    className="btn-primary"
                  >
                    Criar Roleta
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {customRoulettes.map((roulette) => (
                    <div
                      key={roulette.id}
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">🎲</div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {roulette.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {roulette.options.length} opções
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCustomRouletteSelect(roulette)}
                          className="flex-1 btn-primary text-sm"
                        >
                          Usar
                        </button>
                        <button
                          onClick={() => handleEditRoulette(roulette)}
                          className="px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => removeRoulette(roulette.id)}
                          className="px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
                          title="Excluir"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Criador de Roleta Personalizada */}
          {viewMode === 'creator' && (
            <motion.div
              key="creator"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {editingRoulette ? 'Editar Roleta' : 'Criar Roleta Personalizada'}
                  </h2>
                  <p className="text-gray-600">
                    {editingRoulette ? 'Modifique sua roleta' : 'Crie sua própria roleta com opções personalizadas'}
                  </p>
                </div>
                <button
                  onClick={handleBackToSelector}
                  className="btn-secondary"
                >
                  ← Voltar
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <CustomRouletteCreator
                  onSave={handleSaveCustomRoulette}
                  onCancel={handleBackToSelector}
                  editingRoulette={editingRoulette}
                />
              </div>
            </motion.div>
          )}

          {/* Visualização da Roleta */}
          {viewMode === 'roulette' && (
            <motion.div
              key="roulette"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              {/* Header da Roleta */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-3xl">
                    {selectedCategory?.icon || '🎲'}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedCategory?.name || selectedCustomRoulette?.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {selectedCategory?.description || 'Sua roleta personalizada'}
                </p>
                <button
                  onClick={handleBackToSelector}
                  className="btn-secondary mb-6"
                >
                  ← Escolher Outra Roleta
                </button>
              </div>

              {/* Roleta */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <Roulette
                  options={getCurrentOptions()}
                  onResult={handleResult}
                  isSpinning={isSpinning}
                  result={result}
                />
              </div>

              {/* Botão de Girar */}
              <div className="text-center">
                <button
                  onClick={handleSpin}
                  disabled={isSpinning || getCurrentOptions().length === 0}
                  className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSpinning ? 'Girando...' : '🎯 Girar Roleta'}
                </button>
              </div>

              {/* Ad Slot após a roleta */}
              <div className="max-w-2xl mx-auto">
                <AdSlot 
                  slotId="content-ad-2" 
                  format="auto" 
                  responsive={true}
                  className="max-h-20"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HomePage
