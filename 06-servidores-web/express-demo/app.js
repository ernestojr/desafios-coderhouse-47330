const express = require('express');

const app = express();

app.get('/saludo', (request, response) => {
  response.send('Hola desde el modulo de treceros express js!')
})

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080.');
});
