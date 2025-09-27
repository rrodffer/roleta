import React, { useState } from 'react'
import { RouletteCategory } from '../types'
import { rouletteCategories } from '../data/rouletteCategories'

interface RouletteSelectorProps {
  onSelectCategory: (category: RouletteCategory) => void
  selectedCategory: RouletteCategory | null
}

const RouletteSelector: React.FC<RouletteSelectorProps> = ({ 
  onSelectCategory, 
  selectedCategory 
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filtrar categorias baseado na busca
  const filteredCategories = rouletteCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Barra de busca */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar roletas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Grid de categorias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
              selectedCategory?.id === category.id
                ? 'border-primary-500 bg-primary-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-primary-300'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{category.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {category.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{category.options?.length || 0} opções</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 text-4xl mb-4">🔍</div>
          <p className="text-gray-500">Nenhuma roleta encontrada para "{searchTerm}"</p>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  )
}

export default RouletteSelector
