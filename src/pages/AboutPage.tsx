import React from 'react'
import { motion } from 'framer-motion'
import AdSlot from '../components/AdSlot'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre o Roletas
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A plataforma definitiva para criar roletas personalizadas e tomar decisões de forma divertida
            </p>
          </div>

          {/* Ad Slot */}
          <div className="max-w-2xl mx-auto">
            <AdSlot 
              slotId="about-ad-1" 
              format="auto" 
              responsive={true}
              className="max-h-20"
            />
          </div>

          {/* Missão */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
                <p className="text-gray-600 leading-relaxed">
                  Facilitar a tomada de decisões e tornar momentos de indecisão em experiências divertidas e interativas. 
                  Queremos que você tenha uma ferramenta simples, rápida e confiável para resolver desde as menores 
                  até as maiores dúvidas do dia a dia.
                </p>
              </div>
            </div>
          </div>

          {/* Recursos */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎲</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Roletas Pré-definidas</h3>
                    <p className="text-gray-600 text-sm">
                      Mais de 20 categorias prontas para usar: comida, números, sim/não, nomes, países e muito mais.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎨</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalização Total</h3>
                    <p className="text-gray-600 text-sm">
                      Crie suas próprias roletas com opções personalizadas, cores e nomes únicos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💾</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Salvamento Local</h3>
                    <p className="text-gray-600 text-sm">
                      Suas roletas personalizadas são salvas no navegador para acesso rápido.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎭</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Animações Realistas</h3>
                    <p className="text-gray-600 text-sm">
                      Sistema de rotação suave e realista com resultados destacados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Design Responsivo</h3>
                    <p className="text-gray-600 text-sm">
                      Funciona perfeitamente em desktop, tablet e dispositivos móveis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Privacidade</h3>
                    <p className="text-gray-600 text-sm">
                      Respeitamos sua privacidade com sistema de consentimento de cookies transparente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categorias Disponíveis */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias Disponíveis</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Comida', icon: '🍕' },
                { name: 'Números', icon: '🔢' },
                { name: 'Sim/Não', icon: '❓' },
                { name: 'Nomes', icon: '👶' },
                { name: 'Países', icon: '🌍' },
                { name: 'Atividades', icon: '🎮' },
                { name: 'Exercícios', icon: '💪' },
                { name: 'Tarefas', icon: '🏠' },
                { name: 'Filmes', icon: '🎬' },
                { name: 'Jogos', icon: '🎲' },
                { name: 'Cores', icon: '🎨' },
                { name: 'Prendas', icon: '🎭' },
                { name: 'Horários', icon: '⏰' },
                { name: 'Animais', icon: '🐾' },
                { name: 'Prêmios', icon: '🏆' }
              ].map((category, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Como Usar */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Como Usar</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Escolha uma Roleta</h3>
                  <p className="text-gray-600">
                    Navegue pelas categorias pré-definidas ou crie sua própria roleta personalizada.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Clique em "Girar"</h3>
                  <p className="text-gray-600">
                    A roleta começará a girar com uma animação suave e realista.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Veja o Resultado</h3>
                  <p className="text-gray-600">
                    O resultado será destacado e você pode girar novamente quantas vezes quiser.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Slot Final */}
          <div className="max-w-2xl mx-auto">
            <AdSlot 
              slotId="about-ad-2" 
              format="auto" 
              responsive={true}
              className="max-h-20"
            />
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-primary-100 mb-6">
              Crie sua primeira roleta e resolva suas dúvidas de forma divertida
            </p>
            <a
              href="/"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Começar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
