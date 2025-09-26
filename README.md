# 🎯 Roletas - Gerador de Roletas Online

Uma aplicação web moderna para criar e usar roletas personalizadas para decisões, sorteios e diversão.

## ✨ Funcionalidades

### Roletas Pré-definidas
- **Comida**: Pizza, Sushi, Hambúrguer, Salada, Massa, Churrasco, Sobremesa
- **Números**: Faixas 1-10, 1-100, 1-1000
- **Sim ou Não**: Para decisões rápidas
- **Nomes**: Masculinos e femininos para bebês e personagens
- **Países e Cidades**: Destinos turísticos
- **Atividades de Lazer**: Cinema, leitura, esportes, videogames
- **Exercícios Físicos**: Flexão, corrida, agachamento, prancha, burpee
- **Tarefas Domésticas**: Lavar louça, limpar, arrumar, cozinhar
- **Filmes e Séries**: Gêneros diversos
- **Jogos**: Tabuleiro, videogame, cartas
- **Cores**: Básicas para sorteios
- **Prendas ou Desafios**: Para festas e brincadeiras
- **Horários**: Manhã, tarde, noite, madrugada
- **Animais**: Cachorro, gato, pássaro, cavalo, peixe, coelho
- **Prêmios Simbólicos**: Balas, chocolates, vale presente, pontos extras

### Roleta Personalizada
- Criar roletas com opções personalizadas
- Adicionar, editar e remover opções
- Escolher cores para cada opção
- Salvar no localStorage do navegador
- Máximo de 20 opções por roleta

### Sistema de Animações
- Rotação suave e realista
- Resultado destacado
- Animações com Framer Motion
- Transições fluidas entre páginas

## 🚀 Tecnologias

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Router** - Roteamento
- **PWA** - Progressive Web App

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/roletas.git
cd roletas
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código
- `npm run test` - Executa os testes

## 🌐 Deploy no Netlify

O projeto está configurado para deploy automático no Netlify:

1. Conecte seu repositório ao Netlify
2. Configure as seguintes opções:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

3. O arquivo `netlify.toml` já está configurado com:
   - Redirecionamentos para SPA
   - Headers de segurança
   - Configurações de cache

## 🍪 Cookies e Privacidade

- Sistema de consentimento de cookies (CMP) conforme LGPD
- Integração com Google AdSense
- Política de privacidade completa
- Salvamento local de roletas personalizadas

## 📱 PWA

O projeto inclui suporte completo a PWA:
- Manifest.json configurado
- Service Worker automático
- Instalável em dispositivos móveis
- Funciona offline (funcionalidades básicas)

## 🎨 Design

- **Mobile-first** e totalmente responsivo
- **Acessibilidade** (WCAG) com navegação por teclado
- **Paleta de cores** com contraste adequado
- **Tipografia** legível e moderna
- **Animações** suaves e performáticas

## 📊 SEO

- Meta tags dinâmicas
- Open Graph e Twitter Cards
- Sitemap.xml automático
- Robots.txt configurado
- URLs amigáveis
- Core Web Vitals otimizados

## 🔧 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Roulette.tsx
│   ├── AdSlot.tsx
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── PrivacyPage.tsx
├── contexts/           # Contextos React
│   ├── CookieConsentContext.tsx
│   └── AdSenseContext.tsx
├── hooks/              # Hooks customizados
│   └── useCustomRoulettes.ts
├── data/               # Dados estáticos
│   └── rouletteCategories.ts
├── types/              # Definições TypeScript
│   └── index.ts
└── ...
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: https://roletas.netlify.app
- **Email**: contato@roletas.com
- **GitHub**: https://github.com/seu-usuario/roletas

---

Feito com ❤️ para facilitar suas decisões!
