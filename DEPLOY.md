# 🚀 Guia de Deploy - Roletas

Este guia explica como fazer o deploy do projeto Roletas no Netlify.

## 📋 Pré-requisitos

- Conta no [Netlify](https://netlify.com)
- Repositório no GitHub, GitLab ou Bitbucket
- Node.js 18+ instalado localmente

## 🔧 Configuração do Projeto

### 1. Build Local (Opcional)

Para testar o build localmente:

```bash
# Instalar dependências
npm install

# Executar build
npm run build

# Visualizar build
npm run preview
```

### 2. Configurações do Netlify

O projeto já está configurado com `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 🌐 Deploy no Netlify

### Opção 1: Deploy Manual

1. **Acesse o Netlify Dashboard**
   - Vá para [app.netlify.com](https://app.netlify.com)
   - Faça login na sua conta

2. **Criar Novo Site**
   - Clique em "New site from Git"
   - Conecte seu repositório

3. **Configurar Build**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

4. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o processo de build

### Opção 2: Deploy via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login no Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Opção 3: Drag & Drop

1. Execute `npm run build` localmente
2. Arraste a pasta `dist` para o Netlify Dashboard
3. Seu site estará online em segundos!

## ⚙️ Configurações Adicionais

### Domínio Personalizado

1. No Netlify Dashboard, vá para **Site settings > Domain management**
2. Clique em **Add custom domain**
3. Configure seu domínio personalizado

### Variáveis de Ambiente

Se necessário, adicione variáveis de ambiente:

1. **Site settings > Environment variables**
2. Adicione as variáveis necessárias

### Headers de Segurança

Os headers já estão configurados no `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🔍 Verificações Pós-Deploy

### 1. Funcionalidades Básicas
- [ ] Site carrega corretamente
- [ ] Roletas pré-definidas funcionam
- [ ] Criação de roletas personalizadas funciona
- [ ] Animações estão suaves
- [ ] Design responsivo funciona

### 2. SEO e Performance
- [ ] Meta tags estão corretas
- [ ] Sitemap.xml está acessível
- [ ] Robots.txt está funcionando
- [ ] PWA está instalável
- [ ] Core Web Vitals estão bons

### 3. AdSense e Cookies
- [ ] Banner de cookies aparece
- [ ] Consentimento funciona
- [ ] Anúncios carregam (após consentimento)
- [ ] ads.txt está acessível

### 4. Páginas Estáticas
- [ ] `/` - Página inicial
- [ ] `/about` - Sobre
- [ ] `/contact` - Contato
- [ ] `/privacy` - Privacidade

## 🐛 Troubleshooting

### Build Falha

**Erro**: `npm run build` falha
**Solução**:
```bash
# Limpar cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Anúncios Não Carregam

**Problema**: Google AdSense não funciona
**Soluções**:
1. Verificar se o Publisher ID está correto
2. Aguardar aprovação do AdSense (pode levar dias)
3. Verificar se o consentimento de cookies está funcionando

### PWA Não Instala

**Problema**: App não é instalável
**Soluções**:
1. Verificar se o manifest.json está correto
2. Verificar se o service worker está funcionando
3. Testar em HTTPS (obrigatório para PWA)

### Roteamento Quebrado

**Problema**: Páginas 404 em refresh
**Solução**: Verificar se o `_redirects` está na pasta `public`

## 📊 Monitoramento

### Analytics
- Configure Google Analytics no AdSense
- Monitore Core Web Vitals
- Acompanhe métricas de performance

### Logs
- Use Netlify Functions para logs
- Monitore erros no console do navegador
- Configure alertas de uptime

## 🔄 Deploy Contínuo

Para deploy automático:

1. **Conecte o repositório** ao Netlify
2. **Configure webhooks** (automático)
3. **Push para main** = Deploy automático

## 📱 Teste em Dispositivos

### Desktop
- Chrome, Firefox, Safari, Edge
- Diferentes resoluções
- Teste de acessibilidade

### Mobile
- iOS Safari
- Android Chrome
- Teste de PWA
- Performance em 3G

## 🎯 Otimizações

### Performance
- Imagens otimizadas
- Code splitting
- Lazy loading
- Cache headers

### SEO
- Meta tags dinâmicas
- Structured data
- Sitemap atualizado
- URLs amigáveis

---

## ✅ Checklist Final

- [ ] Site online e funcionando
- [ ] Todas as páginas acessíveis
- [ ] Roletas funcionando
- [ ] PWA instalável
- [ ] AdSense configurado
- [ ] Cookies funcionando
- [ ] SEO otimizado
- [ ] Performance boa
- [ ] Mobile responsivo
- [ ] Domínio personalizado (opcional)

**🎉 Parabéns! Seu site Roletas está online!**
