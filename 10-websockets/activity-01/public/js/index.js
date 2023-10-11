(function () {
  let messages = [];
  const formMessage = document.getElementById('form-message');
  const inputMessage = document.getElementById('input-message');
  const showMessage = document.getElementById('show-message');

  const socket = io();

  formMessage.addEventListener('submit', (event) => {
    event.preventDefault();
    messages.push({
      socketId: socket.id,
      message: inputMessage.value,
    });
    socket.emit('new-message', inputMessage.value);
    inputMessage.value = '';
    inputMessage.focus();
    updateMessages(messages);
  });

  function updateMessages(messages = []) {
    showMessage.innerText = '';
    messages.forEach((data) => {
      const item = document.createElement('li');
      item.innerText = `${data.socketId} -> ${data.message}`;
      showMessage.appendChild(item);
    })
  }

  socket.on('connect', () => {
    console.log('Conectados al servidor');
  });

  socket.on('start', (data) => {
    messages = data;
    updateMessages(messages);
  });

  socket.on('notification', (data) => {
    messages.push(data);
    updateMessages(messages);
  });

})();