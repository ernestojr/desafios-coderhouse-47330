import http from 'http';

import app from './app.js';
import { init } from './db/mongodb.js';

const server = http.createServer(app);
const PORT = 8080;

await init();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
