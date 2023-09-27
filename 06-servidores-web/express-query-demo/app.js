const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/query-example', (req, res) => {
  const query = req.query;
  const { firstName, lastName, age } = req.query;
  console.log(`query -> firstName ${firstName}, lastName ${lastName}, age ${age}`);
  res.json(query);
});

// http://localhost:8080/query-example?firstName=Ernesto&lastName=Rojas&age=32

const users = [
  { id: 1, firstName: 'Rick', lastName: 'Sanchez', age: 70, gender: 'M' },
  { id: 2, firstName: 'Morty', lastName: 'Smith', age: 14, gender: 'M' },
  { id: 3, firstName: 'Summer', lastName: 'Smith', age: 18, gender: 'F' },
  { id: 4, firstName: 'Beth', lastName: 'Smith', age: 35, gender: 'F' },
  { id: 5, firstName: 'Jerry', lastName: 'Smith', age: 35, gender: 'M' },
];

app.get('/users', (req, res) => {
  const { gender } = req.query;
  const isGenderValid = gender && (gender === 'M' || gender === 'F');
  if (isGenderValid) {
    const result = users.filter(user => user.gender === gender);
    res.json(result);
  } else {
    res.json(users);
  }
});

// http://localhost:8080/users?gender=M

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080.');
});
