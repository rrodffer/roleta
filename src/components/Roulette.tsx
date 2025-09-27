import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RouletteOption, RouletteCategory } from '../types'

interface RouletteProps {
  options: RouletteOption[]
  onResult?: (result: RouletteOption) => void
  onSpinComplete?: () => void
  isSpinning?: boolean
  result?: RouletteOption | null
  category?: RouletteCategory
}

const Roulette: React.FC<RouletteProps> = ({ 
  options, 
  onResult, 
  onSpinComplete,
  isSpinning = false, 
  result = null,
  category 
}) => {
  const [rotation, setRotation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const rouletteRef = useRef<HTMLDivElement>(null)

  // Verificar se é uma roleta especial (garrafa)
  const isBottleRoulette = category?.isSpecial && category?.type === 'bottle'

  // Calcular ângulo por opção (apenas para roletas normais)
  const anglePerOption = options.length > 0 ? 360 / options.length : 0

  // Gerar cores se não fornecidas
  const getOptionColor = (index: number, option: RouletteOption) => {
    if (option.color) return option.color
    
    // Gerar cor baseada no índice
    const hue = (index * 360) / options.length
    return `hsl(${hue}, 70%, 60%)`
  }

  // Função para girar a roleta
  const spinRoulette = () => {
    if (isAnimating) return

    // Para garrafa, não precisa de opções
    if (isBottleRoulette) {
      setIsAnimating(true)
      
      // Número aleatório de rotações (5-10 voltas completas)
      const randomRotations = Math.random() * 5 + 5
      const randomAngle = Math.random() * 360
      
      // Calcular rotação final
      const finalRotation = rotation + (randomRotations * 360) + randomAngle
      setRotation(finalRotation)

      // Finalizar animação
      setTimeout(() => {
        setIsAnimating(false)
        // Para garrafa, não há resultado específico, apenas direção
        if (onSpinComplete) {
          onSpinComplete()
        }
      }, 3000)
      
      return
    }

    // Lógica original para roletas normais
    if (options.length === 0) return

    setIsAnimating(true)
    
    // Número aleatório de rotações (5-10 voltas completas)
    const randomRotations = Math.random() * 5 + 5
    const randomAngle = Math.random() * 360
    
    // Calcular rotação final
    const finalRotation = rotation + (randomRotations * 360) + randomAngle
    setRotation(finalRotation)

    // Determinar resultado após animação
    setTimeout(() => {
      const normalizedAngle = (360 - (finalRotation % 360)) % 360
      const resultIndex = Math.floor(normalizedAngle / anglePerOption)
      const selectedOption = options[resultIndex]
      
      setIsAnimating(false)
      if (onResult && selectedOption) {
        onResult(selectedOption)
      }
    }, 3000) // Duração da animação
  }

  // Efeito para girar quando isSpinning muda
  useEffect(() => {
    if (isSpinning && !isAnimating) {
      spinRoulette()
    }
  }, [isSpinning, isAnimating])

  // Renderizar garrafa especial
  if (isBottleRoulette) {
    return (
      <div className="relative w-full max-w-lg mx-auto">
        <div className="relative w-full aspect-square h-full flex items-center justify-center">
          {/* Garrafa */}
          <motion.div
            ref={rouletteRef}
            className="relative flex items-center justify-center"
            animate={{ rotate: rotation }}
            transition={{ 
              duration: 3, 
              ease: [0.25, 0.46, 0.45, 0.94] // Easing suave
            }}
            style={{ transformOrigin: 'center' }}
          >
            <div className="text-8xl sm:text-9xl lg:text-[12rem]">
              🍾
            </div>
          </motion.div>
        </div>
        
        {/* Texto explicativo */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            A garrafa apontará em uma direção aleatória
          </p>
        </div>
      </div>
    )
  }

  if (options.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-full">
        <p className="text-gray-500">Adicione opções para começar</p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Container da Roleta */}
      <div className="relative w-full aspect-square h-full">
        {/* Roleta */}
        <motion.div
          ref={rouletteRef}
          className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white"
          animate={{ rotate: rotation }}
          transition={{ 
            duration: 3, 
            ease: [0.25, 0.46, 0.45, 0.94] // Easing suave
          }}
          style={{ transformOrigin: 'center' }}
        >
          {options.map((option, index) => {
            const startAngle = index * anglePerOption
            const endAngle = (index + 1) * anglePerOption
            const color = getOptionColor(index, option)
            
            return (
              <div
                key={option.id}
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((startAngle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((startAngle - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos((endAngle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((endAngle - 90) * Math.PI / 180)}%)`,
                  backgroundColor: color
                }}
              >
                {/* Texto da opção */}
                <div
                  className="absolute text-white font-semibold text-sm sm:text-lg lg:text-xl xl:text-2xl"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${startAngle + anglePerOption / 2}deg)`,
                    transformOrigin: 'center',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    whiteSpace: 'nowrap',
                    maxWidth: '85%',
                    textAlign: 'center'
                  }}
                >
                  {option.text}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Ponteiro */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-red-500"></div>
        </div>

        {/* Centro da roleta */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 sm:border-6 border-gray-300 z-20 shadow-lg"></div>
      </div>

      {/* Resultado */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mt-6 text-center"
          >
            <div className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="text-sm font-medium mb-1">Resultado:</p>
              <p className="text-lg font-bold">{result.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Roulette
