import { RouletteCategory } from '../types'

export const rouletteCategories: RouletteCategory[] = [
  {
    id: 'comida',
    name: 'Comida',
    description: 'Escolha o que comer hoje',
    icon: '🍕',
    options: [
      { id: '1', text: 'Pizza', color: '#ef4444' },
      { id: '2', text: 'Sushi', color: '#3b82f6' },
      { id: '3', text: 'Hambúrguer', color: '#f59e0b' },
      { id: '4', text: 'Salada', color: '#10b981' },
      { id: '5', text: 'Massa', color: '#8b5cf6' },
      { id: '6', text: 'Churrasco', color: '#dc2626' },
      { id: '7', text: 'Sobremesa', color: '#ec4899' },
      { id: '8', text: 'Frango', color: '#f97316' }
    ]
  },
  {
    id: 'numeros-1-10',
    name: 'Números 1-10',
    description: 'Sorteie um número de 1 a 10',
    icon: '🔢',
    options: Array.from({ length: 10 }, (_, i) => ({
      id: (i + 1).toString(),
      text: (i + 1).toString(),
      color: `hsl(${i * 36}, 70%, 50%)`
    }))
  },
  {
    id: 'numeros-1-100',
    name: 'Números 1-100',
    description: 'Sorteie um número de 1 a 100',
    icon: '🔢',
    options: Array.from({ length: 100 }, (_, i) => ({
      id: (i + 1).toString(),
      text: (i + 1).toString(),
      color: `hsl(${i * 3.6}, 70%, 50%)`
    }))
  },
  {
    id: 'sim-nao',
    name: 'Sim ou Não',
    description: 'Tire a dúvida de uma vez',
    icon: '❓',
    options: [
      { id: '1', text: 'Sim', color: '#10b981' },
      { id: '2', text: 'Não', color: '#ef4444' }
    ]
  },
  {
    id: 'nomes-masculinos',
    name: 'Nomes Masculinos',
    description: 'Escolha um nome para bebê ou personagem',
    icon: '👦',
    options: [
      { id: '1', text: 'João', color: '#3b82f6' },
      { id: '2', text: 'Pedro', color: '#8b5cf6' },
      { id: '3', text: 'Lucas', color: '#06b6d4' },
      { id: '4', text: 'Gabriel', color: '#10b981' },
      { id: '5', text: 'Rafael', color: '#f59e0b' },
      { id: '6', text: 'Mateus', color: '#ef4444' },
      { id: '7', text: 'Felipe', color: '#ec4899' },
      { id: '8', text: 'Bruno', color: '#6b7280' }
    ]
  },
  {
    id: 'nomes-femininos',
    name: 'Nomes Femininos',
    description: 'Escolha um nome para bebê ou personagem',
    icon: '👧',
    options: [
      { id: '1', text: 'Maria', color: '#ec4899' },
      { id: '2', text: 'Ana', color: '#8b5cf6' },
      { id: '3', text: 'Julia', color: '#f59e0b' },
      { id: '4', text: 'Sofia', color: '#10b981' },
      { id: '5', text: 'Isabella', color: '#ef4444' },
      { id: '6', text: 'Lara', color: '#06b6d4' },
      { id: '7', text: 'Beatriz', color: '#3b82f6' },
      { id: '8', text: 'Camila', color: '#f97316' }
    ]
  },
  {
    id: 'paises',
    name: 'Países',
    description: 'Escolha um destino para viajar',
    icon: '🌍',
    options: [
      { id: '1', text: 'Brasil', color: '#10b981' },
      { id: '2', text: 'França', color: '#3b82f6' },
      { id: '3', text: 'Japão', color: '#ef4444' },
      { id: '4', text: 'Itália', color: '#f59e0b' },
      { id: '5', text: 'Espanha', color: '#8b5cf6' },
      { id: '6', text: 'Estados Unidos', color: '#06b6d4' },
      { id: '7', text: 'Canadá', color: '#ec4899' },
      { id: '8', text: 'Austrália', color: '#f97316' }
    ]
  },
  {
    id: 'atividades-lazer',
    name: 'Atividades de Lazer',
    description: 'O que fazer no tempo livre',
    icon: '🎮',
    options: [
      { id: '1', text: 'Ir ao cinema', color: '#3b82f6' },
      { id: '2', text: 'Ler um livro', color: '#8b5cf6' },
      { id: '3', text: 'Jogar videogame', color: '#10b981' },
      { id: '4', text: 'Praticar esportes', color: '#f59e0b' },
      { id: '5', text: 'Assistir séries', color: '#ef4444' },
      { id: '6', text: 'Cozinhar', color: '#ec4899' },
      { id: '7', text: 'Desenhar', color: '#06b6d4' },
      { id: '8', text: 'Meditar', color: '#6b7280' }
    ]
  },
  {
    id: 'exercicios',
    name: 'Exercícios Físicos',
    description: 'Escolha seu treino do dia',
    icon: '💪',
    options: [
      { id: '1', text: 'Flexão', color: '#ef4444' },
      { id: '2', text: 'Corrida', color: '#10b981' },
      { id: '3', text: 'Agachamento', color: '#3b82f6' },
      { id: '4', text: 'Prancha', color: '#f59e0b' },
      { id: '5', text: 'Burpee', color: '#8b5cf6' },
      { id: '6', text: 'Polichinelo', color: '#ec4899' },
      { id: '7', text: 'Abdominal', color: '#06b6d4' },
      { id: '8', text: 'Pular corda', color: '#f97316' }
    ]
  },
  {
    id: 'tarefas-domesticas',
    name: 'Tarefas Domésticas',
    description: 'Organize suas tarefas de casa',
    icon: '🏠',
    options: [
      { id: '1', text: 'Lavar a louça', color: '#06b6d4' },
      { id: '2', text: 'Limpar a sala', color: '#10b981' },
      { id: '3', text: 'Arrumar a cama', color: '#3b82f6' },
      { id: '4', text: 'Cozinhar', color: '#f59e0b' },
      { id: '5', text: 'Passar roupa', color: '#8b5cf6' },
      { id: '6', text: 'Varrer', color: '#6b7280' },
      { id: '7', text: 'Lavar banheiro', color: '#ef4444' },
      { id: '8', text: 'Organizar armário', color: '#ec4899' }
    ]
  },
  {
    id: 'filmes-series',
    name: 'Filmes e Séries',
    description: 'Escolha o que assistir',
    icon: '🎬',
    options: [
      { id: '1', text: 'Ação', color: '#ef4444' },
      { id: '2', text: 'Comédia', color: '#f59e0b' },
      { id: '3', text: 'Drama', color: '#3b82f6' },
      { id: '4', text: 'Terror', color: '#8b5cf6' },
      { id: '5', text: 'Animação', color: '#10b981' },
      { id: '6', text: 'Romance', color: '#ec4899' },
      { id: '7', text: 'Ficção Científica', color: '#06b6d4' },
      { id: '8', text: 'Documentário', color: '#6b7280' }
    ]
  },
  {
    id: 'jogos',
    name: 'Jogos',
    description: 'Escolha um jogo para jogar',
    icon: '🎲',
    options: [
      { id: '1', text: 'Xadrez', color: '#6b7280' },
      { id: '2', text: 'Damas', color: '#3b82f6' },
      { id: '3', text: 'Uno', color: '#ef4444' },
      { id: '4', text: 'Monopoly', color: '#f59e0b' },
      { id: '5', text: 'Poker', color: '#10b981' },
      { id: '6', text: 'Dominó', color: '#8b5cf6' },
      { id: '7', text: 'Jogo da Velha', color: '#06b6d4' },
      { id: '8', text: 'Forca', color: '#ec4899' }
    ]
  },
  {
    id: 'cores',
    name: 'Cores',
    description: 'Sorteie uma cor',
    icon: '🎨',
    options: [
      { id: '1', text: 'Vermelho', color: '#ef4444' },
      { id: '2', text: 'Azul', color: '#3b82f6' },
      { id: '3', text: 'Verde', color: '#10b981' },
      { id: '4', text: 'Amarelo', color: '#f59e0b' },
      { id: '5', text: 'Roxo', color: '#8b5cf6' },
      { id: '6', text: 'Laranja', color: '#f97316' },
      { id: '7', text: 'Rosa', color: '#ec4899' },
      { id: '8', text: 'Preto', color: '#1f2937' }
    ]
  },
  {
    id: 'prendas',
    name: 'Prendas ou Desafios',
    description: 'Para festas e brincadeiras',
    icon: '🎭',
    options: [
      { id: '1', text: 'Cantar uma música', color: '#ec4899' },
      { id: '2', text: 'Dançar', color: '#8b5cf6' },
      { id: '3', text: 'Imitar alguém', color: '#f59e0b' },
      { id: '4', text: 'Contar uma piada', color: '#10b981' },
      { id: '5', text: 'Fazer 10 polichinelos', color: '#ef4444' },
      { id: '6', text: 'Falar com sotaque', color: '#06b6d4' },
      { id: '7', text: 'Recitar um poema', color: '#3b82f6' },
      { id: '8', text: 'Fazer careta', color: '#f97316' }
    ]
  },
  {
    id: 'horarios',
    name: 'Horários',
    description: 'Para agendamentos rápidos',
    icon: '⏰',
    options: [
      { id: '1', text: 'Manhã (6h-12h)', color: '#f59e0b' },
      { id: '2', text: 'Tarde (12h-18h)', color: '#ef4444' },
      { id: '3', text: 'Noite (18h-24h)', color: '#8b5cf6' },
      { id: '4', text: 'Madrugada (0h-6h)', color: '#6b7280' }
    ]
  },
  {
    id: 'animais',
    name: 'Animais',
    description: 'Escolha um animal',
    icon: '🐾',
    options: [
      { id: '1', text: 'Cachorro', color: '#f59e0b' },
      { id: '2', text: 'Gato', color: '#6b7280' },
      { id: '3', text: 'Pássaro', color: '#3b82f6' },
      { id: '4', text: 'Cavalo', color: '#8b5cf6' },
      { id: '5', text: 'Peixe', color: '#06b6d4' },
      { id: '6', text: 'Coelho', color: '#ec4899' },
      { id: '7', text: 'Hamster', color: '#f97316' },
      { id: '8', text: 'Tartaruga', color: '#10b981' }
    ]
  },
  {
    id: 'premios',
    name: 'Prêmios Simbólicos',
    description: 'Para sorteios e brincadeiras',
    icon: '🏆',
    options: [
      { id: '1', text: 'Balas', color: '#ec4899' },
      { id: '2', text: 'Chocolates', color: '#8b5cf6' },
      { id: '3', text: 'Vale presente', color: '#10b981' },
      { id: '4', text: 'Pontos extras', color: '#f59e0b' },
      { id: '5', text: 'Dia de folga', color: '#3b82f6' },
      { id: '6', text: 'Almoço grátis', color: '#ef4444' },
      { id: '7', text: 'Café da manhã', color: '#06b6d4' },
      { id: '8', text: 'Brinde especial', color: '#f97316' }
    ]
  }
]
