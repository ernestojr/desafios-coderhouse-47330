(function() {
  const socket = io();
  socket.emit('message', 'Hola backend desde el cliente web via socket.io 🎯');

  socket.on('direct_client', (data) => {
    console.log(data);
  });

  socket.on('all_client', (data) => {
    console.log(data);
  });

  socket.on('all_socket', (data) => {
    console.log(data);
  });
})();