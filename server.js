import http from 'node:http';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import handler from './api/chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = Number(process.env.PORT || 3000);

function loadEnvFile() {
  const envPath = path.join(__dirname, '.env');
  try {
    const content = readFileSync(envPath, 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const separatorIndex = trimmed.indexOf('=');
      if (separatorIndex === -1) continue;
      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  } catch {
    // Ignore if no .env file is present.
  }
}

loadEnvFile();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (req.method === 'POST' && url.pathname === '/api/chat') {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const parsedBody = body ? JSON.parse(body) : {};

          const response = {
            statusCode: 200,
            headers: {},
            body: undefined,
            setHeader(name, value) {
              this.headers[name] = value;
            },
            status(code) {
              this.statusCode = code;
              return this;
            },
            json(payload) {
              this.body = payload;
              this.headers['Content-Type'] = 'application/json; charset=utf-8';
              return this;
            },
            send(payload) {
              this.body = payload;
              return this;
            }
          };

          await handler({ method: req.method, body: parsedBody, headers: req.headers }, response);

          const payload = response.body === undefined
            ? ''
            : typeof response.body === 'string'
              ? response.body
              : JSON.stringify(response.body);

          res.writeHead(response.statusCode, response.headers);
          res.end(payload);
        } catch (error) {
          sendJson(res, 500, { error: 'Failed to process chat request.' });
        }
      });

      return;
    }

    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const filePath = path.join(__dirname, pathname.replace(/^\/+/, ''));
    const extension = path.extname(filePath);
    const contentType = mimeTypes[extension] || 'text/plain; charset=utf-8';

    try {
      const data = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch {
      const indexPath = path.join(__dirname, 'index.html');
      const indexData = await readFile(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(indexData);
    }
  } catch (error) {
    sendJson(res, 500, { error: 'Server error.' });
  }
});

server.listen(port, () => {
  console.log(`Chat server running at http://localhost:${port}`);
});
