import http from 'http';

import config from './config/config.js'; 
import app from './app.js';
import { init as initMongoDB } from './db/mongodb.js';

await initMongoDB();

const server = http.createServer(app);
const PORT = config.port;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
