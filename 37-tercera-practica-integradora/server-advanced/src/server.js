import http from 'http';

import config from './config/config.js';
import app from './app.js';
import Mongodb from './db/mongodb.js';

await Mongodb.getIntance();

const server = http.createServer(app);
const PORT = config.PORT;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
