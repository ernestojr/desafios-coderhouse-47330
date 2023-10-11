import http from 'http';
import { Server } from 'socket.io';

import app from './app.js';

const server = http.createServer(app);
const socketServer = new Server(server);
const PORT = 8080;

socketServer.on('connection', (socket) => {
  console.log('Nuevo cliente conectado 🎉', socket.id);
  socket.on('message', (data) => {
    console.log('message received:', data);
  });
  socket.emit('direct_client', 'Este mensaje lo recibirá solo el cliente actual 😎.');
  socket.broadcast.emit('all_client', 'Este mensaje lo recibirán todo a excepción del cliente actual 🎯.');
  socketServer.emit('all_socket', 'Este mensaje lo recibirán todos los sockets conectados 🚀.');
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`);
});
