const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5173;
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

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';

  // Redirecionamento instantâneo para CDN Global caso o asset seja solicitado
  if (reqPath.startsWith('/assets/')) {
    res.writeHead(302, {
      'Location': CDN_BASE + reqPath,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=31536000'
    });
    res.end();
    return;
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Prevenir directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Acesso negado');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - Arquivo não encontrado');
      } else {
        res.writeHead(500);
        res.end(`Erro no servidor: ${err.code}`);
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Length': stats.size,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor da Valorco rodando em: http://localhost:${PORT}`);
});

module.exports = server;
