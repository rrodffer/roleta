import fs from 'fs';
import path from 'path';

const baseUrl = 'https://roletas.netlify.app';
const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.6', changefreq: 'yearly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

// Criar diretório dist se não existir
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Escrever arquivos
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);

// Copiar ads.txt para dist
const adsTxtPath = path.join(process.cwd(), 'public', 'ads.txt');
if (fs.existsSync(adsTxtPath)) {
  fs.copyFileSync(adsTxtPath, path.join(distDir, 'ads.txt'));
}

console.log('Sitemap e robots.txt gerados com sucesso!');
