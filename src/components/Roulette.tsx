import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RouletteOption } from '../types'

interface RouletteProps {
  options: RouletteOption[]
  onResult?: (result: RouletteOption) => void
  isSpinning?: boolean
  result?: RouletteOption | null
}

const Roulette: React.FC<RouletteProps> = ({ 
  options, 
  onResult, 
  isSpinning = false, 
  result = null 
}) => {
  const [rotation, setRotation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const rouletteRef = useRef<HTMLDivElement>(null)

  // Calcular ângulo por opção
  const anglePerOption = 360 / options.length

  // Gerar cores se não fornecidas
  const getOptionColor = (index: number, option: RouletteOption) => {
    if (option.color) return option.color
    
    // Gerar cor baseada no índice
    const hue = (index * 360) / options.length
    return `hsl(${hue}, 70%, 60%)`
  }

  // Função para girar a roleta
  const spinRoulette = () => {
    if (isAnimating || options.length === 0) return

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
  }, [isSpinning])

  if (options.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-full">
        <p className="text-gray-500">Adicione opções para começar</p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Container da Roleta */}
      <div className="relative w-full aspect-square">
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
                  className="absolute text-white font-semibold text-sm sm:text-base"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${startAngle + anglePerOption / 2}deg)`,
                    transformOrigin: 'center',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    whiteSpace: 'nowrap',
                    maxWidth: '80%',
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
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
        </div>

        {/* Centro da roleta */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-300 z-20 shadow-lg"></div>
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
