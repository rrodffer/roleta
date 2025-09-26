import React from 'react'
import { motion } from 'framer-motion'
import AdSlot from '../components/AdSlot'

const PrivacyPage: React.FC = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Ad Slot */}
          <div className="max-w-2xl mx-auto">
            <AdSlot 
              slotId="privacy-ad-1" 
              format="auto" 
              responsive={true}
              className="max-h-20"
            />
          </div>

          {/* Conteúdo da Política */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Informações Gerais
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Esta Política de Privacidade descreve como o Roletas ("nós", "nosso" ou "aplicativo") 
                coleta, usa e protege suas informações quando você utiliza nosso site. Estamos comprometidos 
                em proteger sua privacidade e garantir que suas informações pessoais sejam tratadas com 
                segurança e transparência.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Informações que Coletamos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    2.1 Informações de Uso
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Coletamos informações sobre como você interage com nosso site, incluindo:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Páginas visitadas e tempo gasto no site</li>
                    <li>Roletas utilizadas e resultados obtidos</li>
                    <li>Roletas personalizadas criadas (salvas localmente no seu navegador)</li>
                    <li>Informações do dispositivo e navegador</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    2.2 Cookies e Tecnologias Similares
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Utilizamos cookies e tecnologias similares para:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Lembrar suas preferências de cookies</li>
                    <li>Analisar o uso do site (Google Analytics)</li>
                    <li>Exibir anúncios personalizados (Google AdSense)</li>
                    <li>Salvar suas roletas personalizadas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar sua experiência no site</li>
                <li>Analisar o uso do site para melhorias</li>
                <li>Exibir anúncios relevantes (com seu consentimento)</li>
                <li>Salvar suas roletas personalizadas localmente</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Google AdSense e Anúncios
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-600 leading-relaxed">
                  Nosso site utiliza o Google AdSense para exibir anúncios. O Google pode usar cookies 
                  para personalizar anúncios baseados em suas visitas a este e outros sites. Você pode 
                  optar por não receber anúncios personalizados visitando as 
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                    Configurações de Anúncios do Google
                  </a>.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>Publisher ID:</strong> ca-pub-8992265400273562
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Compartilhamento de Informações
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Com provedores de serviços que nos ajudam a operar o site (Google Analytics, Google AdSense)</li>
                <li>Quando exigido por lei ou para proteger nossos direitos</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Armazenamento e Segurança
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Suas roletas personalizadas são armazenadas localmente no seu navegador usando localStorage. 
                Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso 
                não autorizado, alteração, divulgação ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Seus Direitos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Você tem os seguintes direitos em relação às suas informações:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Retirar seu consentimento para cookies</li>
                <li>Obter uma cópia de suas informações</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cookies e Consentimento
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos um sistema de gerenciamento de consentimento (CMP) que permite que você 
                escolha quais tipos de cookies aceitar. Você pode alterar suas preferências a qualquer 
                momento através do banner de cookies ou clicando em "Gerenciar Opções" no rodapé do site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Alterações nesta Política
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                mudanças significativas através de um aviso em nosso site. Recomendamos que você 
                revise esta política regularmente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Contato
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas 
                informações, entre em contato conosco:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacidade@roletas.com
                </p>
                <p className="text-gray-600">
                  <strong>Website:</strong> https://roletas.netlify.app/contact
                </p>
              </div>
            </div>
          </div>

          {/* Ad Slot Final */}
          <div className="max-w-2xl mx-auto">
            <AdSlot 
              slotId="privacy-ad-2" 
              format="auto" 
              responsive={true}
              className="max-h-20"
            />
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Tem Dúvidas?</h2>
            <p className="text-primary-100 mb-6">
              Entre em contato conosco se precisar de esclarecimentos sobre nossa política de privacidade
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPage
