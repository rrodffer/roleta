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
      // América do Sul
      { id: '1', text: 'Brasil', color: '#10b981' },
      { id: '2', text: 'Argentina', color: '#3b82f6' },
      { id: '3', text: 'Chile', color: '#ef4444' },
      { id: '4', text: 'Colômbia', color: '#f59e0b' },
      { id: '5', text: 'Peru', color: '#8b5cf6' },
      { id: '6', text: 'Venezuela', color: '#06b6d4' },
      { id: '7', text: 'Equador', color: '#ec4899' },
      { id: '8', text: 'Bolívia', color: '#f97316' },
      { id: '9', text: 'Paraguai', color: '#84cc16' },
      { id: '10', text: 'Uruguai', color: '#f472b6' },
      { id: '11', text: 'Guiana', color: '#a78bfa' },
      { id: '12', text: 'Suriname', color: '#fb7185' },
      
      // América do Norte
      { id: '13', text: 'Estados Unidos', color: '#06b6d4' },
      { id: '14', text: 'Canadá', color: '#ec4899' },
      { id: '15', text: 'México', color: '#f97316' },
      
      // América Central
      { id: '16', text: 'Guatemala', color: '#10b981' },
      { id: '17', text: 'Cuba', color: '#ef4444' },
      { id: '18', text: 'Haiti', color: '#6b7280' },
      { id: '19', text: 'República Dominicana', color: '#3b82f6' },
      { id: '20', text: 'Honduras', color: '#f59e0b' },
      { id: '21', text: 'Nicarágua', color: '#8b5cf6' },
      { id: '22', text: 'El Salvador', color: '#84cc16' },
      { id: '23', text: 'Costa Rica', color: '#f472b6' },
      { id: '24', text: 'Panamá', color: '#a78bfa' },
      { id: '25', text: 'Jamaica', color: '#fb7185' },
      
      // Europa Ocidental
      { id: '26', text: 'França', color: '#3b82f6' },
      { id: '27', text: 'Alemanha', color: '#ef4444' },
      { id: '28', text: 'Reino Unido', color: '#06b6d4' },
      { id: '29', text: 'Itália', color: '#f59e0b' },
      { id: '30', text: 'Espanha', color: '#8b5cf6' },
      { id: '31', text: 'Países Baixos', color: '#10b981' },
      { id: '32', text: 'Bélgica', color: '#ec4899' },
      { id: '33', text: 'Suíça', color: '#f97316' },
      { id: '34', text: 'Áustria', color: '#84cc16' },
      { id: '35', text: 'Portugal', color: '#f472b6' },
      { id: '36', text: 'Suécia', color: '#a78bfa' },
      { id: '37', text: 'Noruega', color: '#fb7185' },
      { id: '38', text: 'Dinamarca', color: '#06b6d4' },
      { id: '39', text: 'Finlândia', color: '#3b82f6' },
      { id: '40', text: 'Irlanda', color: '#10b981' },
      
      // Europa Oriental
      { id: '41', text: 'Rússia', color: '#ef4444' },
      { id: '42', text: 'Polônia', color: '#f59e0b' },
      { id: '43', text: 'Ucrânia', color: '#8b5cf6' },
      { id: '44', text: 'República Tcheca', color: '#ec4899' },
      { id: '45', text: 'Romênia', color: '#f97316' },
      { id: '46', text: 'Hungria', color: '#84cc16' },
      { id: '47', text: 'Bulgária', color: '#f472b6' },
      { id: '48', text: 'Sérvia', color: '#a78bfa' },
      { id: '49', text: 'Croácia', color: '#fb7185' },
      { id: '50', text: 'Eslováquia', color: '#06b6d4' },
      { id: '51', text: 'Bielorrússia', color: '#3b82f6' },
      { id: '52', text: 'Lituânia', color: '#10b981' },
      { id: '53', text: 'Letônia', color: '#ef4444' },
      { id: '54', text: 'Estônia', color: '#f59e0b' },
      { id: '55', text: 'Eslovênia', color: '#8b5cf6' },
      
      // Ásia Oriental
      { id: '56', text: 'Japão', color: '#ef4444' },
      { id: '57', text: 'China', color: '#f59e0b' },
      { id: '58', text: 'Coreia do Sul', color: '#3b82f6' },
      { id: '59', text: 'Coreia do Norte', color: '#6b7280' },
      { id: '60', text: 'Mongólia', color: '#8b5cf6' },
      
      // Sudeste Asiático
      { id: '61', text: 'Tailândia', color: '#ec4899' },
      { id: '62', text: 'Vietnã', color: '#f97316' },
      { id: '63', text: 'Filipinas', color: '#84cc16' },
      { id: '64', text: 'Indonésia', color: '#f472b6' },
      { id: '65', text: 'Malásia', color: '#a78bfa' },
      { id: '66', text: 'Singapura', color: '#fb7185' },
      { id: '67', text: 'Myanmar', color: '#06b6d4' },
      { id: '68', text: 'Camboja', color: '#3b82f6' },
      { id: '69', text: 'Laos', color: '#10b981' },
      { id: '70', text: 'Brunei', color: '#ef4444' },
      
      // Sul da Ásia
      { id: '71', text: 'Índia', color: '#f59e0b' },
      { id: '72', text: 'Paquistão', color: '#8b5cf6' },
      { id: '73', text: 'Bangladesh', color: '#ec4899' },
      { id: '74', text: 'Sri Lanka', color: '#f97316' },
      { id: '75', text: 'Nepal', color: '#84cc16' },
      { id: '76', text: 'Butão', color: '#f472b6' },
      { id: '77', text: 'Maldivas', color: '#a78bfa' },
      { id: '78', text: 'Afeganistão', color: '#fb7185' },
      
      // Ásia Central
      { id: '79', text: 'Cazaquistão', color: '#06b6d4' },
      { id: '80', text: 'Uzbequistão', color: '#3b82f6' },
      { id: '81', text: 'Quirguistão', color: '#10b981' },
      { id: '82', text: 'Tajiquistão', color: '#ef4444' },
      { id: '83', text: 'Turcomenistão', color: '#f59e0b' },
      
      // Oriente Médio
      { id: '84', text: 'Arábia Saudita', color: '#8b5cf6' },
      { id: '85', text: 'Irã', color: '#ec4899' },
      { id: '86', text: 'Iraque', color: '#f97316' },
      { id: '87', text: 'Israel', color: '#84cc16' },
      { id: '88', text: 'Turquia', color: '#f472b6' },
      { id: '89', text: 'Egito', color: '#a78bfa' },
      { id: '90', text: 'Emirados Árabes Unidos', color: '#fb7185' },
      { id: '91', text: 'Qatar', color: '#06b6d4' },
      { id: '92', text: 'Kuwait', color: '#3b82f6' },
      { id: '93', text: 'Bahrain', color: '#10b981' },
      { id: '94', text: 'Omã', color: '#ef4444' },
      { id: '95', text: 'Jordânia', color: '#f59e0b' },
      { id: '96', text: 'Líbano', color: '#8b5cf6' },
      { id: '97', text: 'Síria', color: '#ec4899' },
      { id: '98', text: 'Iêmen', color: '#f97316' },
      
      // África
      { id: '99', text: 'África do Sul', color: '#84cc16' },
      { id: '100', text: 'Nigéria', color: '#f472b6' },
      { id: '101', text: 'Egito', color: '#a78bfa' },
      { id: '102', text: 'Quênia', color: '#fb7185' },
      { id: '103', text: 'Marrocos', color: '#06b6d4' },
      { id: '104', text: 'Argélia', color: '#3b82f6' },
      { id: '105', text: 'Tunísia', color: '#10b981' },
      { id: '106', text: 'Gana', color: '#ef4444' },
      { id: '107', text: 'Etiópia', color: '#f59e0b' },
      { id: '108', text: 'Tanzânia', color: '#8b5cf6' },
      { id: '109', text: 'Uganda', color: '#ec4899' },
      { id: '110', text: 'Sudão', color: '#f97316' },
      { id: '111', text: 'Camarões', color: '#84cc16' },
      { id: '112', text: 'Costa do Marfim', color: '#f472b6' },
      { id: '113', text: 'Madagascar', color: '#a78bfa' },
      { id: '114', text: 'Angola', color: '#fb7185' },
      { id: '115', text: 'Moçambique', color: '#06b6d4' },
      { id: '116', text: 'Zimbábue', color: '#3b82f6' },
      { id: '117', text: 'Zâmbia', color: '#10b981' },
      { id: '118', text: 'Malawi', color: '#ef4444' },
      { id: '119', text: 'Senegal', color: '#f59e0b' },
      { id: '120', text: 'Mali', color: '#8b5cf6' },
      
      // Oceania
      { id: '121', text: 'Austrália', color: '#f97316' },
      { id: '122', text: 'Nova Zelândia', color: '#84cc16' },
      { id: '123', text: 'Papua Nova Guiné', color: '#f472b6' },
      { id: '124', text: 'Fiji', color: '#a78bfa' },
      { id: '125', text: 'Samoa', color: '#fb7185' },
      { id: '126', text: 'Tonga', color: '#06b6d4' },
      { id: '127', text: 'Vanuatu', color: '#3b82f6' },
      { id: '128', text: 'Ilhas Salomão', color: '#10b981' }
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
    id: 'cores-primarias',
    name: 'Cores Primárias',
    description: 'As três cores básicas do círculo cromático',
    icon: '🔴',
    options: [
      { id: '1', text: 'Vermelho', color: '#ef4444' },
      { id: '2', text: 'Azul', color: '#3b82f6' },
      { id: '3', text: 'Amarelo', color: '#f59e0b' }
    ]
  },
  {
    id: 'cores-secundarias',
    name: 'Cores Secundárias',
    description: 'Cores obtidas pela mistura das primárias',
    icon: '🟢',
    options: [
      { id: '1', text: 'Verde', color: '#10b981' },
      { id: '2', text: 'Laranja', color: '#f97316' },
      { id: '3', text: 'Roxo', color: '#8b5cf6' }
    ]
  },
  {
    id: 'cores-azuis',
    name: 'Tons de Azul',
    description: 'Variações da cor azul',
    icon: '🔵',
    options: [
      { id: '1', text: 'Azul', color: '#3b82f6' },
      { id: '2', text: 'Azul Celeste', color: '#87ceeb' },
      { id: '3', text: 'Azul Marinho', color: '#000080' },
      { id: '4', text: 'Azul Royal', color: '#4169e1' },
      { id: '5', text: 'Azul Bebê', color: '#89cff0' },
      { id: '6', text: 'Azul Petróleo', color: '#01796f' },
      { id: '7', text: 'Azul Cobalto', color: '#0047ab' },
      { id: '8', text: 'Turquesa', color: '#40e0d0' }
    ]
  },
  {
    id: 'cores-vermelhas',
    name: 'Tons de Vermelho',
    description: 'Variações da cor vermelha',
    icon: '🔴',
    options: [
      { id: '1', text: 'Vermelho', color: '#ef4444' },
      { id: '2', text: 'Vermelho Escarlate', color: '#dc143c' },
      { id: '3', text: 'Vermelho Carmesim', color: '#dc143c' },
      { id: '4', text: 'Vermelho Bordeaux', color: '#800020' },
      { id: '5', text: 'Vermelho Cereja', color: '#de3163' },
      { id: '6', text: 'Bordô', color: '#800020' },
      { id: '7', text: 'Borgonha', color: '#800020' },
      { id: '8', text: 'Rosa', color: '#ec4899' }
    ]
  },
  {
    id: 'cores-verdes',
    name: 'Tons de Verde',
    description: 'Variações da cor verde',
    icon: '🟢',
    options: [
      { id: '1', text: 'Verde', color: '#10b981' },
      { id: '2', text: 'Verde Lima', color: '#32cd32' },
      { id: '3', text: 'Verde Esmeralda', color: '#50c878' },
      { id: '4', text: 'Verde Oliva', color: '#808000' },
      { id: '5', text: 'Verde Menta', color: '#98fb98' },
      { id: '6', text: 'Verde Bebê', color: '#90ee90' },
      { id: '7', text: 'Verde Jade', color: '#00a86b' },
      { id: '8', text: 'Verde Escuro', color: '#006400' }
    ]
  },
  {
    id: 'cores-amarelas',
    name: 'Tons de Amarelo',
    description: 'Variações da cor amarela',
    icon: '🟡',
    options: [
      { id: '1', text: 'Amarelo', color: '#f59e0b' },
      { id: '2', text: 'Amarelo Dourado', color: '#ffd700' },
      { id: '3', text: 'Amarelo Limão', color: '#ffff00' },
      { id: '4', text: 'Amarelo Canário', color: '#ffef00' },
      { id: '5', text: 'Amarelo Bebê', color: '#ffffe0' },
      { id: '6', text: 'Amarelo Mostarda', color: '#ffdb58' },
      { id: '7', text: 'Amarelo Ouro', color: '#ffd700' },
      { id: '8', text: 'Amarelo Açafrão', color: '#f4c430' }
    ]
  },
  {
    id: 'cores-laranja',
    name: 'Tons de Laranja',
    description: 'Variações da cor laranja',
    icon: '🟠',
    options: [
      { id: '1', text: 'Laranja', color: '#f97316' },
      { id: '2', text: 'Laranja Vermelho', color: '#ff4500' },
      { id: '3', text: 'Laranja Coral', color: '#ff7f50' },
      { id: '4', text: 'Laranja Pêssego', color: '#ffcccb' },
      { id: '5', text: 'Laranja Queimado', color: '#cc5500' },
      { id: '6', text: 'Laranja Claro', color: '#ffb366' },
      { id: '7', text: 'Salmão', color: '#fa8072' },
      { id: '8', text: 'Salmão Rosa', color: '#ff91a4' }
    ]
  },
  {
    id: 'cores-roxas',
    name: 'Tons de Roxo',
    description: 'Variações da cor roxa',
    icon: '🟣',
    options: [
      { id: '1', text: 'Roxo', color: '#8b5cf6' },
      { id: '2', text: 'Violeta', color: '#8a2be2' },
      { id: '3', text: 'Índigo', color: '#4b0082' },
      { id: '4', text: 'Púrpura', color: '#800080' },
      { id: '5', text: 'Lavanda', color: '#e6e6fa' },
      { id: '6', text: 'Orquídea', color: '#da70d6' },
      { id: '7', text: 'Magenta', color: '#ff00ff' },
      { id: '8', text: 'Roxo Escuro', color: '#663399' }
    ]
  },
  {
    id: 'cores-rosas',
    name: 'Tons de Rosa',
    description: 'Variações da cor rosa',
    icon: '🌸',
    options: [
      { id: '1', text: 'Rosa', color: '#ec4899' },
      { id: '2', text: 'Rosa Choque', color: '#ff1493' },
      { id: '3', text: 'Rosa Bebê', color: '#f4c2c2' },
      { id: '4', text: 'Rosa Claro', color: '#ffb6c1' },
      { id: '5', text: 'Rosa Escuro', color: '#c2185b' },
      { id: '6', text: 'Rosa Pêssego', color: '#ffcccb' },
      { id: '7', text: 'Rosa Coral', color: '#ff7f50' },
      { id: '8', text: 'Rosa Antigo', color: '#c08081' }
    ]
  },
  {
    id: 'cores-neutras',
    name: 'Cores Neutras',
    description: 'Cores sem saturação',
    icon: '⚫',
    options: [
      { id: '1', text: 'Preto', color: '#000000' },
      { id: '2', text: 'Branco', color: '#ffffff' },
      { id: '3', text: 'Cinza', color: '#808080' },
      { id: '4', text: 'Cinza Claro', color: '#d3d3d3' },
      { id: '5', text: 'Cinza Escuro', color: '#696969' },
      { id: '6', text: 'Prata', color: '#c0c0c0' },
      { id: '7', text: 'Marrom', color: '#a52a2a' },
      { id: '8', text: 'Bege', color: '#f5f5dc' }
    ]
  },
  {
    id: 'cores-metalicas',
    name: 'Cores Metálicas',
    description: 'Cores com aspecto metálico',
    icon: '✨',
    options: [
      { id: '1', text: 'Ouro', color: '#ffd700' },
      { id: '2', text: 'Prata', color: '#c0c0c0' },
      { id: '3', text: 'Bronze', color: '#cd7f32' },
      { id: '4', text: 'Cobre', color: '#b87333' },
      { id: '5', text: 'Champagne', color: '#f7e7ce' },
      { id: '6', text: 'Platina', color: '#e5e4e2' },
      { id: '7', text: 'Cobre Rosa', color: '#b87333' },
      { id: '8', text: 'Latão', color: '#b5a642' }
    ]
  },
  {
    id: 'cores-pasteis',
    name: 'Cores Pastéis',
    description: 'Cores suaves e claras',
    icon: '🎀',
    options: [
      { id: '1', text: 'Azul Bebê', color: '#89cff0' },
      { id: '2', text: 'Verde Bebê', color: '#90ee90' },
      { id: '3', text: 'Rosa Bebê', color: '#f4c2c2' },
      { id: '4', text: 'Amarelo Bebê', color: '#ffffe0' },
      { id: '5', text: 'Lavanda', color: '#e6e6fa' },
      { id: '6', text: 'Pêssego', color: '#ffcccb' },
      { id: '7', text: 'Coral Claro', color: '#ffb3ba' },
      { id: '8', text: 'Menta', color: '#98fb98' }
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
      { id: '8', text: 'Fazer careta', color: '#f97316' },
      { id: '9', text: 'Imitar uma galinha', color: '#84cc16' },
      { id: '10', text: 'Fazer 20 abdominais', color: '#f472b6' },
      { id: '11', text: 'Imitar um animal', color: '#a78bfa' },
      { id: '12', text: 'Contar até 50 de trás para frente', color: '#fb7185' },
      { id: '13', text: 'Falar uma trava-língua', color: '#06b6d4' },
      { id: '14', text: 'Fazer uma pose de super-herói', color: '#3b82f6' },
      { id: '15', text: 'Imitar um bebê chorando', color: '#10b981' }
    ]
  },
  {
    id: 'horarios-periodos',
    name: 'Horários por Períodos',
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
    id: 'horarios-24h',
    name: 'Horários 24h',
    description: 'Horários específicos em formato 24 horas',
    icon: '🕐',
    options: [
      { id: '1', text: '00:00', color: '#6b7280' },
      { id: '2', text: '01:00', color: '#6b7280' },
      { id: '3', text: '02:00', color: '#6b7280' },
      { id: '4', text: '03:00', color: '#6b7280' },
      { id: '5', text: '04:00', color: '#6b7280' },
      { id: '6', text: '05:00', color: '#6b7280' },
      { id: '7', text: '06:00', color: '#f59e0b' },
      { id: '8', text: '07:00', color: '#f59e0b' },
      { id: '9', text: '08:00', color: '#f59e0b' },
      { id: '10', text: '09:00', color: '#f59e0b' },
      { id: '11', text: '10:00', color: '#f59e0b' },
      { id: '12', text: '11:00', color: '#f59e0b' },
      { id: '13', text: '12:00', color: '#ef4444' },
      { id: '14', text: '13:00', color: '#ef4444' },
      { id: '15', text: '14:00', color: '#ef4444' },
      { id: '16', text: '15:00', color: '#ef4444' },
      { id: '17', text: '16:00', color: '#ef4444' },
      { id: '18', text: '17:00', color: '#ef4444' },
      { id: '19', text: '18:00', color: '#8b5cf6' },
      { id: '20', text: '19:00', color: '#8b5cf6' },
      { id: '21', text: '20:00', color: '#8b5cf6' },
      { id: '22', text: '21:00', color: '#8b5cf6' },
      { id: '23', text: '22:00', color: '#8b5cf6' },
      { id: '24', text: '23:00', color: '#8b5cf6' }
    ]
  },
  {
    id: 'verdade-desafio',
    name: 'Verdade ou Desafio',
    description: 'Para jogos e brincadeiras',
    icon: '🎯',
    options: [
      { id: '1', text: 'Verdade', color: '#10b981' },
      { id: '2', text: 'Desafio', color: '#ef4444' }
    ]
  },
  {
    id: 'garrafa-amigos',
    name: 'Garrafa dos Amigos',
    description: 'Garrafa que gira e aponta em uma direção',
    icon: '🍾',
    isSpecial: true,
    type: 'bottle'
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
  },
  {
    id: 'musicas-generos',
    name: 'Gêneros Musicais',
    description: 'Escolha um estilo musical',
    icon: '🎵',
    options: [
      { id: '1', text: 'Pop', color: '#ec4899' },
      { id: '2', text: 'Rock', color: '#ef4444' },
      { id: '3', text: 'Sertanejo', color: '#10b981' },
      { id: '4', text: 'Funk', color: '#8b5cf6' },
      { id: '5', text: 'Samba', color: '#f59e0b' },
      { id: '6', text: 'Pagode', color: '#06b6d4' },
      { id: '7', text: 'MPB', color: '#3b82f6' },
      { id: '8', text: 'Forró', color: '#f97316' },
      { id: '9', text: 'Axé', color: '#84cc16' },
      { id: '10', text: 'Eletrônica', color: '#f472b6' },
      { id: '11', text: 'Hip Hop', color: '#a78bfa' },
      { id: '12', text: 'Reggae', color: '#fb7185' }
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    description: 'Escolha uma bebida para tomar',
    icon: '🥤',
    options: [
      { id: '1', text: 'Água', color: '#06b6d4' },
      { id: '2', text: 'Suco de Laranja', color: '#f59e0b' },
      { id: '3', text: 'Coca-Cola', color: '#6b7280' },
      { id: '4', text: 'Café', color: '#8b5cf6' },
      { id: '5', text: 'Chá', color: '#10b981' },
      { id: '6', text: 'Suco de Uva', color: '#8b5cf6' },
      { id: '7', text: 'Refrigerante', color: '#ef4444' },
      { id: '8', text: 'Água de Coco', color: '#84cc16' },
      { id: '9', text: 'Suco de Maçã', color: '#f59e0b' },
      { id: '10', text: 'Energético', color: '#f97316' },
      { id: '11', text: 'Cerveja', color: '#f59e0b' },
      { id: '12', text: 'Vinho', color: '#dc2626' }
    ]
  }
]
