import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [{
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
}];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { firstName, lastName, age } = req.body;
  if (!firstName || !lastName || !age) {
    res
      .status(400)
      .json({ status: 'error', message: 'Invalid data' });
    return;
  }
  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    age,
  };
  users.push(newUser);
  res
    .status(201)
    .json({ status: 'success', message: 'User created' });
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    res
      .status(404)
      .json({ status: 'error', message: 'User not found' });
    return;
  }
  if (!firstName || !lastName || !age) {
    res
      .status(400)
      .json({ status: 'error', message: 'Invalid data' });
    return;
  }
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  res
    .status(200)
    .json({ status: 'success', message: 'User updated' });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    res
      .status(404)
      .json({ status: 'error', message: 'User not found' });
    return;
  }
  const index = users.indexOf(user);
  users.splice(index, 1);
  res
    .status(200)
    .json({ status: 'success', message: 'User deleted' });
});

const server = app.listen(8080, () => {
  console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});