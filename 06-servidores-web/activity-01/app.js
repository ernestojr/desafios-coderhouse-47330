const express = require('express');

const app = express();

app.get('/bienvenida', (request, response) => {
  const htmlText = `<p style="color: blue">
    Te damos la bienvenida a nuestra página web
  </p>`;
  response.send(htmlText)
})

app.get('/usuario', (request, response) => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    cours: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
  }
  response.json(user)
})

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080.');
});
