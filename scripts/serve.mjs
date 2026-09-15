/* Enkel lokal server for testing: node scripts/serve.mjs [port] */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), "dist");
const port = Number(process.argv[2] || 8080);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8"
};

createServer(async (req, res) => {
  try {
    let rel = decodeURIComponent(req.url.split("?")[0]);
    if (rel === "/") rel = "/index.html";
    let file = path.join(root, rel);
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    } catch {
      if (!path.extname(file)) file += ".html";
    }
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(body);
  } catch {
    try {
      const body = await readFile(path.join(root, "404.html"));
      res.writeHead(404, { "Content-Type": types[".html"] });
      res.end(body);
    } catch {
      res.writeHead(404).end("404");
    }
  }
}).listen(port, () => console.log(`http://localhost:${port}`));
