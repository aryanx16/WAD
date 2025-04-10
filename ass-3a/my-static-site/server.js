const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Port to run the server
const PORT = 3000;

// File extension to MIME type mapping
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = `public${parsedUrl.pathname}`;
  
  // Default to index.html if root is requested
  if (pathname === 'public/') {
    pathname += 'index.html';
  }

  // Resolve full path
  const ext = path.extname(pathname);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(pathname, (err, data) => {
    if (err) {
      // Handle file not found or other errors
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - File Not Found');
    } else {
      // Successful response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
