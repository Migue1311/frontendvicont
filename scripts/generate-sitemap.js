// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const routes = [
  { path: '/', name: 'Inicio' },
  { path: '/Hero', name: 'Hero' },
  { path: '/services', name: 'Servicios' },
  { path: '/contact', name: 'Contacto' },
  { path: '/converter', name: 'Convertidor' },
  { path: '/blog', name: 'Blog' }
];

const hostname = 'https://vicontcontable.com'; 

const generateSitemap = () => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const footer = `</urlset>`;

  const urls = routes.map(route => `
  <url>
    <loc>${hostname}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.path === '/' ? '1.0' : route.path === '/blog' ? '0.6' : '0.8'}</priority>
  </url>`).join('');

  const sitemap = header + urls + footer;

  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap.trim());
  console.log('✅ Sitemap generado correctamente en /public/sitemap.xml');
};

generateSitemap();