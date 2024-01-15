import http from 'http';
import cluster from 'cluster';
import { cpus } from 'os';

import app from './app.js';

console.log(`PID ${process.pid}: cluster.isPrimary -> ${cluster.isPrimary}`);
if (cluster.isPrimary) {
  const cpusNumber = cpus().length;
  console.log(`Soy el proceso principal con PID ${process.pid}. Y dispongo de ${cpusNumber} procesadores.`);
  for (let i = 0; i < cpusNumber; i++){
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`El worker ${worker.process.pid} ha muerto`, code, signal);
    if (String(signal) !== 'SIGTERM') {
      cluster.fork();
    }
  });
} else {
  console.log(`Soy un proceso worker con PID ${process.pid}`);
  const server = http.createServer(app);
  const PORT = 8080;
  
  server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT} 🚀`);
  });
}

