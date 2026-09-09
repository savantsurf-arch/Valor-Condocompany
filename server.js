const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/savantsurf-arch/Valor-Condocompany@main';

function handler(req, res) {
  let reqPath = req.url ? req.url.split('?')[0] : '/index.html';
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  if (reqPath.startsWith('/assets/')) {
    res.writeHead(302, {
      'Location': CDN_BASE + reqPath,
      'Access-Control-Allow-Origin': '*'
    });
    res.end();
    return;
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Se não encontrar o arquivo exato, serve index.html (SPA fallback)
      fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (err2, htmlData) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=0, must-revalidate'
          });
          res.end(htmlData);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
}

// Compatibilidade Oficial Vercel Serverless Function
module.exports = handler;

// Compatibilidade para execução local direta
if (require.main === module) {
  const http = require('http');
  const PORT = process.env.PORT || 5173;
  const server = http.createServer(handler);
  server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
  });
}
