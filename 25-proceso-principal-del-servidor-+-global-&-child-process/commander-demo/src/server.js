import http from 'http';
import {Command} from 'commander';

const program = new Command();

program
  .option('-d <debug>', 'ejecucion en debug', false)
  .option('-p <port>', 'puerto del servidor', 8080)
  .option('--mode <mode>', 'Modo de ejecucion', 'development');

program.parse();

console.log('opts', program.opts());
console.log('args', program.args);

import app from './app.js';

const server = http.createServer(app);
const PORT = program.opts().p;
const ENV = program.opts().mode;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} in mode ${ENV}🚀`);
});
