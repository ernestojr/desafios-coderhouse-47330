import http from 'http';

import app from './app.js';

const server = http.createServer(app);
const PORT = 8081;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
