import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const users = [
  { id: 'e9edb299-ceab-43d2-bc04-9be1d69e901d', firstName: 'Rick', lastName: 'Sanchez', age: 70, gender: 'M' },
  { id: '611c9592-8faa-46e1-bc73-e8b5e7fcf0fe', firstName: 'Morty', lastName: 'Smith', age: 14, gender: 'M' },
  { id: 'f5215309-16d8-4ec8-aec1-95a458ae664d', firstName: 'Summer', lastName: 'Smith', age: 18, gender: 'F' },
  { id: '70d017e3-d4a2-4875-9993-22a38aa51811', firstName: 'Beth', lastName: 'Smith', age: 35, gender: 'F' },
  { id: 'c3a0a954-6cf5-4e1c-a28a-137d7f5684e8', firstName: 'Jerry', lastName: 'Smith', age: 35, gender: 'M' },
];

router.get('/users', (req, res) => {
  res.status(200).json(users);
});

router.post('/users', (req, res) => {
  const { body } = req;
  const newUser = {
    id: uuidv4(),
    ...body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;