const express = require('express');

const app = express();

/* app.get('/bienvenida/:nombre', (request, response) => {
  const nombre = request.params.nombre;
  response.send(`Te damos la bienvenida ${nombre} 😎`);
});

app.get('/bienvenida/:nombre/:apellido', (request, response) => {
  const nombre = request.params.nombre;
  const apellido = request.params.apellido;
  response.send(`Te damos la bienvenida ${nombre} ${apellido} 😎`);
}); */

const users = [
  { id: 1, firstName: 'Rick', lastName: 'Sanchez', age: 70, gender: 'M' },
  { id: 2, firstName: 'Morty', lastName: 'Smith', age: 14, gender: 'M' },
  { id: 3, firstName: 'Summer', lastName: 'Smith', age: 18, gender: 'F' },
  { id: 4, firstName: 'Beth', lastName: 'Smith', age: 35, gender: 'F' },
  { id: 5, firstName: 'Jerry', lastName: 'Smith', age: 35, gender: 'M' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find((user) => user.id === parseInt(userId, 10));
  res.json(user);
});

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080.');
});
