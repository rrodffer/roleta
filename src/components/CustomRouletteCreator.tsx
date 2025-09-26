import React, { useState, useEffect } from 'react'
import { RouletteOption, CustomRoulette } from '../types'

interface CustomRouletteCreatorProps {
  onSave: (roulette: CustomRoulette) => void
  onCancel: () => void
  editingRoulette?: CustomRoulette | null
}

const CustomRouletteCreator: React.FC<CustomRouletteCreatorProps> = ({
  onSave,
  onCancel,
  editingRoulette
}) => {
  const [rouletteName, setRouletteName] = useState('')
  const [options, setOptions] = useState<RouletteOption[]>([])
  const [newOptionText, setNewOptionText] = useState('')
  const [newOptionColor, setNewOptionColor] = useState('#3b82f6')

  // Cores predefinidas para escolha rápida
  const predefinedColors = [
    '#ef4444', '#f59e0b', '#10b981', '#3b82f6', 
    '#8b5cf6', '#ec4899', '#06b6d4', '#6b7280'
  ]

  useEffect(() => {
    if (editingRoulette) {
      setRouletteName(editingRoulette.name)
      setOptions(editingRoulette.options)
    }
  }, [editingRoulette])

  const addOption = () => {
    if (newOptionText.trim() && options.length < 20) {
      const newOption: RouletteOption = {
        id: Date.now().toString(),
        text: newOptionText.trim(),
        color: newOptionColor
      }
      setOptions([...options, newOption])
      setNewOptionText('')
    }
  }

  const removeOption = (optionId: string) => {
    setOptions(options.filter(option => option.id !== optionId))
  }

  const updateOption = (optionId: string, newText: string) => {
    setOptions(options.map(option => 
      option.id === optionId ? { ...option, text: newText } : option
    ))
  }

  const handleSave = () => {
    if (rouletteName.trim() && options.length >= 2) {
      const customRoulette: CustomRoulette = {
        id: editingRoulette?.id || Date.now().toString(),
        name: rouletteName.trim(),
        options,
        createdAt: editingRoulette?.createdAt || Date.now()
      }
      onSave(customRoulette)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addOption()
    }
  }

  return (
    <div className="space-y-6">
      {/* Nome da Roleta */}
      <div>
        <label htmlFor="roulette-name" className="block text-sm font-medium text-gray-700 mb-2">
          Nome da Roleta
        </label>
        <input
          id="roulette-name"
          type="text"
          value={rouletteName}
          onChange={(e) => setRouletteName(e.target.value)}
          placeholder="Ex: Minha Roleta Personalizada"
          className="input-field"
          maxLength={50}
        />
      </div>

      {/* Adicionar Nova Opção */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Adicionar Opções</h3>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={newOptionText}
              onChange={(e) => setNewOptionText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite uma opção..."
              className="input-field"
              maxLength={30}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={newOptionColor}
              onChange={(e) => setNewOptionColor(e.target.value)}
              className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              title="Escolher cor"
            />
            <button
              onClick={addOption}
              disabled={!newOptionText.trim() || options.length >= 20}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Adicionar
            </button>
          </div>
        </div>

        {/* Cores Predefinidas */}
        <div className="flex flex-wrap gap-2">
          {predefinedColors.map((color) => (
            <button
              key={color}
              onClick={() => setNewOptionColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                newOptionColor === color ? 'border-gray-400' : 'border-gray-200'
              }`}
              style={{ backgroundColor: color }}
              title={`Usar cor ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Lista de Opções */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Opções ({options.length}/20)
        </h3>
        
        {options.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <div className="text-gray-400 text-2xl mb-2">➕</div>
            <p className="text-gray-500">Adicione pelo menos 2 opções para criar sua roleta</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={option.id}
                className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg"
              >
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: option.color }}
                />
                <span className="text-sm text-gray-500 w-8">{index + 1}.</span>
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => updateOption(option.id, e.target.value)}
                  className="flex-1 text-sm border-none focus:outline-none focus:ring-0 p-0"
                  maxLength={30}
                />
                <button
                  onClick={() => removeOption(option.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Remover opção"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
        <button
          onClick={onCancel}
          className="btn-secondary flex-1"
        >
          Cancelar
        </button>
        <button
          onClick={handleSave}
          disabled={!rouletteName.trim() || options.length < 2}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {editingRoulette ? 'Salvar Alterações' : 'Criar Roleta'}
        </button>
      </div>

      {/* Dicas */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">💡 Dicas:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Adicione pelo menos 2 opções para criar uma roleta funcional</li>
          <li>• Máximo de 20 opções por roleta</li>
          <li>• Use cores diferentes para facilitar a visualização</li>
          <li>• Suas roletas personalizadas são salvas no navegador</li>
        </ul>
      </div>
    </div>
  )
}

export default CustomRouletteCreator
