const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

const indexPath = path.join(root, "index.html");

function sendFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("500 - Errore interno del server");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const requestPath = req.url === "/" ? "/index.html" : req.url || "/index.html";
  const cleanPath = requestPath.split("?")[0].split("#")[0];
  const normalizedPath = path.normalize(cleanPath).replace(/^([.][.][/\\])+/, "");
  const filePath = path.join(root, normalizedPath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("403 - Accesso negato");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const hasExtension = path.extname(normalizedPath) !== "";

      if (hasExtension) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("404 - File non trovato");
        return;
      }

      sendFile(indexPath, res);
      return;
    }

    sendFile(filePath, res);
  });
});

server.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
