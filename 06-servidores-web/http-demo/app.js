const http = require('http');

const server = http.createServer((request, response) => {
  response.end('Hola desde el modulo nativo http!');
});

server.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080.');
});